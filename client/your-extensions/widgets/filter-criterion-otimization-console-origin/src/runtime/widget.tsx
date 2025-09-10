/* eslint-disable no-console */
// src/widgets/seu-widget/src/runtime/widget.tsx

import React, { useEffect, useRef, useState } from 'react'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import { AllWidgetProps } from 'jimu-core'
import { IMConfig } from '../config'

import esriConfig from '@arcgis/core/config'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import Extent from '@arcgis/core/geometry/Extent'
import GroupLayer from '@arcgis/core/layers/GroupLayer'
import Basemap from '@arcgis/core/Basemap'
import MapImageLayer from '@arcgis/core/layers/MapImageLayer'

// ==== Interceptores ====
// 1) Força POST nas queries (evita URL gigante)
esriConfig.request.interceptors.push({
  urls: /\/(FeatureServer|MapServer)\/\d+\/query$/i,
  before: (p) => { p.requestOptions.method = 'post' }
})
// 2) Garante f=json no serviço de Poços (para consistência)
esriConfig.request.interceptors.push({
  urls: /Pocos_Sem_Simbolos\/FeatureServer\/0/i,
  before: (p) => {
    p.requestOptions.query = { ...(p.requestOptions.query || {}), f: 'json' }
  }
})

// ==== Constantes ====
const FEATURE_URL =
  'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Pocos_Sem_Simbolos/FeatureServer/0'

const CHUNK_SIZE = 500 // tamanho de lote para consultas (ajuste conforme necessário)

const extentBrasil = new Extent({
  xmin: -74.0,
  ymin: -34.0,
  xmax: -34.0,
  ymax: 5.0,
  spatialReference: { wkid: 4326 }
})

export default function Widget (props: AllWidgetProps<IMConfig>) {
  const jimuMapViewRef = useRef<JimuMapView>()
  const [mapViewReady, setMapViewReady] = useState<JimuMapView | null>(null)
  const [codigosPocos, setCodigosPocos] = useState<(number | string)[]>([])

  const origensPermitidas = [
    'https://localhost:3001',
    'https://portalgis.petrobras.com.br',
    'http://localhost:8080',
    'https://explorad.petrobras.com.br',
    'https://explorah.petrobras.com.br',
    'https://explora.petrobras.com.br'
  ]

  // Recebe a lista de códigos via postMessage
  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (!origensPermitidas.includes(event.origin)) {
        console.warn('⚠️ Origem não permitida:', event.origin)
        return
      }
      const { type, data } = event.data || {}
      if (type === 'codigosPocos' && Array.isArray(data)) {
        console.log('📥 Recebidos codigosPocos:', data.length, '| amostra:', data.slice(0, 5))
        setCodigosPocos(data)
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  // Sinaliza que o widget está pronto
  useEffect(() => {
    if (mapViewReady) {
      console.log('✅ Widget pronto! Enviando postMessage agora...')
      window.parent.postMessage({ type: 'widgetReady' }, '*')
    }
  }, [mapViewReady])

  // Dispara a plotagem quando mapa e lista estiverem prontos
  useEffect(() => {
    console.log('⏱️ useEffect plotagem | ready:', !!mapViewReady, '| nCodigos:', codigosPocos.length)
    if (mapViewReady && codigosPocos.length > 0) {
      console.warn('🚀 Disparando desenharComSimbologiaDoServico (1 layer + filtro por OBJECTIDs)...')
      desenharComSimbologiaDoServico(mapViewReady, codigosPocos)
    } else {
      if (!mapViewReady) console.log('… aguardando mapViewReady (onActiveViewChange)')
      if (codigosPocos.length === 0) console.log('… aguardando codigosPocos (postMessage)')
    }
  }, [mapViewReady, codigosPocos])

  async function desenharComSimbologiaDoServico (
    jmv: JimuMapView,
    codigos: (number | string)[]
  ) {
    console.log('🎯 desenharComSimbologiaDoServico()', 'qtd:', codigos.length, 'amostra:', codigos.slice(0, 5))

    const view = jmv.view
    try { if (view) view.extent = extentBrasil } catch {}

    const map = view.map

    // === GroupLayer único "Poços" ===
    let group = map.layers.find((l: any) => l.id === 'pocos-group') as GroupLayer
    if (!group) {
      group = new GroupLayer({
        id: 'pocos-group',
        title: 'Poços',
        visibilityMode: 'inherited',
        listMode: 'show'
      })
      map.add(group)
      console.log('🧱 Criado GroupLayer "Poços".')
    }

    // === FeatureLayer base único (mantém simbologia do serviço) ===
    let flBase = group.layers.find((l: any) => l.id === 'pocos-base') as FeatureLayer
    if (!flBase) {
      flBase = new FeatureLayer({
        id: 'pocos-base',
        url: FEATURE_URL,
        title: 'Poços (base)',
        listMode: 'show',
        popupEnabled: false,        // evita fetch extra durante hover
        outFields: ['POCO_CD_POCO'] // mínimo necessário
      })
      group.add(flBase)
      await flBase.load()
      console.log('➕ FeatureLayer base criado e carregado.')
    } else {
      await flBase.load()
      console.log('♻️ Reutilizando FeatureLayer base.')
    }

    // Descobre se campo é string p/ montar WHERE (uma única vez)
    const campo = flBase.fields.find((f) => f.name === 'POCO_CD_POCO')
    const precisaAspas = campo?.type === 'string'
    console.log('🔎 Campo POCO_CD_POCO tipo:', campo?.type, '| precisaAspas:', !!precisaAspas)

    // Dedup e saneamento de códigos
    const uniqueCodigos = Array.from(new Set(
      codigos.map(String).map(s => s.trim()).filter(Boolean)
    ))
    if (uniqueCodigos.length === 0) {
      console.warn('⛔ Nada a plotar (lista vazia após deduplicação).')
      return
    }

    // Quebra em chunks apenas para consulta (não cria camadas por chunk!)
    const chunks: string[][] = []
    for (let i = 0; i < uniqueCodigos.length; i += CHUNK_SIZE) {
      chunks.push(uniqueCodigos.slice(i, i + CHUNK_SIZE))
    }

    const esc = (v: string) => precisaAspas ? `'${v.replace(/'/g, "''")}'` : v
    const whereList = chunks.map(c => `POCO_CD_POCO IN (${c.map(esc).join(',')})`)

    console.time('⏱️ queryObjectIds(paralelo)')
    const objIdsArrays = await Promise.all(
      whereList.map(w => flBase.queryObjectIds({ where: w }))
    )
    console.timeEnd('⏱️ queryObjectIds(paralelo)')

    // Concatena e deduplica OBJECTIDs
    const objectIds = Array.from(new Set(objIdsArrays.flat()))
    console.log(`✅ OBJECTIDs coletados: ${objectIds.length}`)

    // Aplica filtro client-side – renderiza só o que precisamos sem mexer na simbologia
    const layerView = await view.whenLayerView(flBase)
    layerView.filter = { objectIds }

    // (Opcional) checagem rápida de faltantes (limitada para não pesar)
    try {
      const SAMPLE_LIMIT = 5000
      const sample = uniqueCodigos.slice(0, SAMPLE_LIMIT)
      const q = flBase.createQuery()
      q.where = `POCO_CD_POCO IN (${sample.map(esc).join(',')})`
      q.outFields = ['POCO_CD_POCO']
      q.returnDistinctValues = true
      q.returnGeometry = false
      const res = await flBase.queryFeatures(q)
      const presentes = new Set(res.features.map(f => String(f.attributes.POCO_CD_POCO).trim()))
      const faltantes = sample.filter(c => !presentes.has(c))
      console.warn(`🏁 Distintos retornados (amostra ${presentes.size}/${sample.length}); faltantes≈ ${faltantes.length} (na amostra).`)
    } catch (e) {
      console.debug('ℹ️ Pulo checagem de faltantes (lista grande/não necessária).', e)
    }

    console.warn('🏁 Plotagem concluída (1 layer + filtro por OBJECTIDs).')
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={(jimuMapView) => {
          if (!jimuMapView) return
          jimuMapViewRef.current = jimuMapView
          setMapViewReady(jimuMapView)

          const map = jimuMapView.view.map

          // Basemap mais leve
          try { map.basemap = Basemap.fromId('osm') } catch {}

          // Desliga sublayer de Contexto que costuma estourar timeout
          map.layers.forEach((lyr: any) => {
            if (lyr.type === 'map-image' && /\/Contexto\/MapServer/i.test((lyr as MapImageLayer).url)) {
              const sub14 = (lyr as MapImageLayer).findSublayerById(14)
              if (sub14) { sub14.visible = false; sub14.listMode = 'hide' }
            }
            if (lyr.url?.includes('/Contexto/MapServer/14')) {
              lyr.visible = false
              lyr.listMode = 'hide'
            }
          })

          console.log('🗺️ onActiveViewChange concluído. Basemap/sublayers ajustados.')
        }}
      />
    </div>
  )
}

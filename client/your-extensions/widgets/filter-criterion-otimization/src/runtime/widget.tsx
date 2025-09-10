// src/widgets/seu-widget/src/runtime/widget.tsx
import React, { useEffect, useRef, useState } from 'react'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import { AllWidgetProps } from 'jimu-core'
import { IMConfig } from '../config'

import esriConfig from '@arcgis/core/config'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import Extent from '@arcgis/core/geometry/Extent'
import GroupLayer from '@arcgis/core/layers/GroupLayer'

// Interceptor: garante f=json
esriConfig.request.interceptors.push({
  urls: /Pocos_Sem_Simbolos\/FeatureServer\/0/,
  before: (params) => {
    params.requestOptions.query = {
      ...params.requestOptions.query,
      f: 'json'
    }
  }
})

const FEATURE_URL =
  'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Pocos_Sem_Simbolos/FeatureServer/0'

const CHUNK_SIZE = 600
const MAX_LAYERS = 40

const extentBrasil = new Extent({
  xmin: -74.0,
  ymin: -34.0,
  xmax: -34.0,
  ymax: 5.0,
  spatialReference: { wkid: 4326 }
})

export default function Widget(props: AllWidgetProps<IMConfig>) {
  const jimuMapViewRef = useRef<JimuMapView>()
  const [mapViewReady, setMapViewReady] = useState<JimuMapView | null>(null)
  const [codigosPocos, setCodigosPocos] = useState<(number | string)[]>([])

  const origensPermitidas = [
    'https://localhost:3001',
    'https://portalgis.petrobras.com.br',
    'http://localhost:8080', 
    
  ]

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (!origensPermitidas.includes(event.origin)) {
        console.warn('Origem não permitida:', event.origin)
        return
      }
      const { type, data } = event.data || {}
      if (type === 'codigosPocos' && Array.isArray(data) && data.length > 0) {
        setCodigosPocos(data)
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  // Informa ao pai que o widget está pronto
  useEffect(() => {
    if (mapViewReady) {
      window.parent.postMessage({ type: 'widgetReady' }, '*')
    }
  }, [mapViewReady])

  // Quando mapa e lista de códigos estiverem prontos, cria os lotes dentro de um GroupLayer
  useEffect(() => {
    if (mapViewReady && codigosPocos.length > 0) {
      desenharComSimbologiaDoServico(mapViewReady, codigosPocos)
    }
  }, [mapViewReady, codigosPocos])

  async function desenharComSimbologiaDoServico(
    jmv: JimuMapView,
    codigos: (number | string)[]
  ) {
    try {
      if (jmv.view) jmv.view.extent = extentBrasil
    } catch {}

    const map = jmv.view.map

    // Recupera ou cria o GroupLayer "Poços"
    let group = map.layers.find((l: any) => l.id === 'pocos-group') as GroupLayer
    if (!group) {
      group = new GroupLayer({
        id: 'pocos-group',
        title: 'Poços',
        visibilityMode: 'inherited', // filhos herdam visibilidade do grupo
        listMode: 'show'
      })
      map.add(group)
    }

    // Remove apenas os filhos (lotes) anteriores criados por este widget
    const toRemove: any[] = []
    group.layers.forEach((l: any) => {
      if (l.id?.startsWith('pocos-lote-')) toRemove.push(l)
    })
    toRemove.forEach((l) => group.remove(l))

    // Descobre se POCO_CD_POCO é string (para quotar corretamente)
    const probe = new FeatureLayer({ url: FEATURE_URL })
    await probe.load()
    const campo = probe.fields.find((f) => f.name === 'POCO_CD_POCO')
    const precisaAspas = campo?.type === 'string'

    // Calcula lotes e aplica limite
    const totalLotes = Math.ceil(codigos.length / CHUNK_SIZE)
    if (totalLotes > MAX_LAYERS) {
      console.warn(
        `Quantidade de camadas estimada (${totalLotes}) excede o limite (${MAX_LAYERS}). ` +
          `Aumente CHUNK_SIZE, reduza a lista ou considere backend.`
      )
    }

    // Progresso (opcional)
    let acumulado = 0
    const esperado = codigos.length
    console.log(`▶️ Iniciando plotagem: ${esperado} códigos em até ${Math.min(totalLotes, MAX_LAYERS)} lotes.`)

    // Cria FeatureLayers por lote DENTRO do GroupLayer
    for (let i = 0; i < codigos.length && i / CHUNK_SIZE < MAX_LAYERS; i += CHUNK_SIZE) {
      const idxLote = Math.floor(i / CHUNK_SIZE) + 1
      const lote = codigos.slice(i, i + CHUNK_SIZE)
      const valores = precisaAspas
        ? lote.map((v) => `'${String(v).trim()}'`).join(',')
        : lote.join(',')
      const where = `POCO_CD_POCO IN (${valores})`

      // 👇 LOG antes de criar/adicionar a camada
      console.log(`🧩 Preparando lote ${idxLote}: ${lote.length} códigos`)

      const fl = new FeatureLayer({
        id: `pocos-lote-${String(idxLote).padStart(3, '0')}`,
        url: FEATURE_URL,
        title: `Poços (lote ${idxLote})`,
        definitionExpression: where,
        outFields: ['POCO_CD_POCO'],
        featureReduction: null,
        listMode: 'hide'
      })

      try {
        await fl.load()
        group.add(fl)

        // 👇 LOG com a contagem retornada para este lote (respeita o where)
        const count = await fl.queryFeatureCount({ where })
        acumulado += count
        console.log(`✅ Lote ${idxLote}: +${count} (acumulado ${acumulado}/${esperado})`)
      } catch (e) {
        console.error('Erro ao carregar/contar lote', idxLote, e)
      }
    }

    console.log(`🏁 Plotagem concluída. Total retornado: ${acumulado}/${esperado}`)

  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={(jimuMapView) => {
          if (jimuMapView) {
            jimuMapViewRef.current = jimuMapView
            setMapViewReady(jimuMapView)
          }
        }}
      />
    </div>
  )
}

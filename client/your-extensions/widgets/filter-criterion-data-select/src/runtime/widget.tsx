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
  const present = new Set<string>()


  const origensPermitidas = [
    'https://localhost:3001',
    'https://portalgis.petrobras.com.br',
    'http://localhost:8080'
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

  // Quando mapa e lista de códigos estiverem prontos, plota
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

    // GroupLayer "Poços"
    let group = map.layers.find((l: any) => l.id === 'pocos-group') as GroupLayer
    if (!group) {
      group = new GroupLayer({
        id: 'pocos-group',
        title: 'Poços',
        visibilityMode: 'inherited',
        listMode: 'show'
      })
      map.add(group)
    }

    // Remove filhos antigos do grupo
    const toRemove: any[] = []
    group.layers.forEach((l: any) => {
      if (l.id?.startsWith('pocos-lote-')) toRemove.push(l)
    })
    toRemove.forEach((l) => group.remove(l))

    // Deduplica os códigos e aplica o limite real que será usado
    const uniqueCodigos = Array.from(new Set(codigos.map((v) => String(v).trim())))
    const maxItems = MAX_LAYERS * CHUNK_SIZE
    const codigosUsados = uniqueCodigos.slice(0, maxItems)

    // Descobre se precisa de aspas
    const probe = new FeatureLayer({ url: FEATURE_URL })
    await probe.load()
    const campo = probe.fields.find((f) => f.name === 'POCO_CD_POCO')
    const precisaAspas = campo?.type === 'string'

    // Lotes
    const totalLotes = Math.ceil(codigosUsados.length / CHUNK_SIZE)
    if (totalLotes > MAX_LAYERS) {
      console.warn(
        `Estimado ${totalLotes} lotes (> ${MAX_LAYERS}). Considerando apenas os primeiros ${MAX_LAYERS} lotes (${maxItems} códigos).`
      )
    }

    // Progresso acumulado
    let acumulado = 0
    const esperado = codigosUsados.length

    console.log(`▶️ Iniciando plotagem de poços: ${esperado} códigos únicos em até ${Math.min(totalLotes, MAX_LAYERS)} lotes.`)

    // Cria camadas por lote, conta e imprime progresso
    for (let i = 0; i < codigosUsados.length && i / CHUNK_SIZE < MAX_LAYERS; i += CHUNK_SIZE) {
      const idxLote = i / CHUNK_SIZE + 1
      const lote = codigosUsados.slice(i, i + CHUNK_SIZE)
      const valores = precisaAspas ? lote.map((v) => `'${v}'`).join(',') : lote.join(',')
      const where = `POCO_CD_POCO IN (${valores})`

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

        const q = fl.createQuery()
        q.where = where
        q.outFields = ['POCO_CD_POCO']
        q.returnDistinctValues = true
        q.returnGeometry = false

        // Coleta códigos realmente encontrados neste lote
        const res = await fl.queryFeatures(q)
        const foundCodes = res.features.map(f => String(f.attributes.POCO_CD_POCO).trim())

        // Mantenha um Set global ao início da função:
        //// const present = new Set<string>();

        foundCodes.forEach(c => present.add(c))

        // Se você quer contar "poços" (códigos únicos):
        const distintosAcumulado = present.size
        console.log(`✅ Lote ${idxLote}: +${foundCodes.length} únicos (acumulado ${distintosAcumulado}/${esperado})`)

        // (Opcional) também conte feições (se houver múltiplas por poço)
        const countFeicoes = await fl.queryFeatureCount({ where })
        console.log(`ℹ️  Lote ${idxLote}: ${countFeicoes} feições (p/ depuração)`)
        // Notifica o pai (opcional)
        try {
          window.parent?.postMessage({ type: 'plotProgress', count: acumulado, expected: esperado, lot: idxLote }, '*')
        } catch {}

      } catch (e) {
        console.error('Erro ao carregar/contar lote', idxLote, e)
      }
    }

    const usadosSet = new Set(codigosUsados.map(v => String(v).trim()))
    const missing = [...usadosSet].filter(c => !present.has(c))

    console.log(`🏁 Distintos retornados: ${present.size}/${esperado}`)
    console.log(`🔎 Códigos sem feição (${missing.length}):`, missing.slice(0, 50), missing.length > 50 ? '...' : '')

    // Se quiser notificar o pai com os faltantes:
    try {
      window.parent?.postMessage({
        type: 'plotDiagnostics',
        distinctFound: present.size,
        expected: esperado,
        missingCount: missing.length,
        sampleMissing: missing.slice(0, 50)
      }, '*')
    } catch {}

    console.log(`🏁 Plotagem concluída. Total efetivamente retornado pelo serviço: ${acumulado}/${esperado}.`)
    try {
      window.parent?.postMessage({ type: 'plotDone', total: acumulado, expected: esperado }, '*')
    } catch {}
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

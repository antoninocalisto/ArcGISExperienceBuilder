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
// 2) Garante f=json no serviço de Poços (para counts consistentes)
esriConfig.request.interceptors.push({
  urls: /Pocos_Sem_Simbolos\/FeatureServer\/0/i,
  before: (p) => {
    p.requestOptions.query = { ...(p.requestOptions.query || {}), f: 'json' }
  }
})

// ==== Constantes ====
const FEATURE_URL =
  'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Pocos_Sem_Simbolos/FeatureServer/0'

const CHUNK_SIZE = 300          // lote menor reduz pressão no servidor
const MAX_LAYERS = 40           // segurança p/ não criar “infinitas” camadas
const SLEEP_BETWEEN = 120       // ms entre lotes (respiro no servidor)
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

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
      console.warn('🚀 Disparando desenharComSimbologiaDoServico...')
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

    // GroupLayer "Poços" (um item só na Layer List)
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

    // Remove lotes antigos
    const toRemove: any[] = []
    group.layers.forEach((l: any) => { if (l.id?.startsWith('pocos-lote-')) toRemove.push(l) })
    toRemove.forEach((l) => group.remove(l))
    if (toRemove.length) console.log('♻️ Removidos lotes anteriores:', toRemove.length)

    // Deduplica/limita
    const uniqueCodigos = Array.from(new Set(codigos.map((v) => String(v).trim())))
    const maxItems = MAX_LAYERS * CHUNK_SIZE
    const codigosUsados = uniqueCodigos.slice(0, maxItems)
    console.log('📊 Códigos únicos recebidos:', uniqueCodigos.length, '| Usados:', codigosUsados.length)

    if (codigosUsados.length === 0) {
      console.warn('⛔ Nada a plotar (lista vazia após deduplicação/limite).')
      return
    }

    // Descobre se precisa aspas no WHERE
    const probe = new FeatureLayer({ url: FEATURE_URL })
    await probe.load()
    const campo = probe.fields.find((f) => f.name === 'POCO_CD_POCO')
    const precisaAspas = campo?.type === 'string'
    console.log('🔎 Campo POCO_CD_POCO tipo:', campo?.type, '| precisaAspas:', !!precisaAspas)

    // Planejamento de lotes
    const totalLotes = Math.ceil(codigosUsados.length / CHUNK_SIZE)
    if (totalLotes > MAX_LAYERS) {
      console.warn(`⚠️ Estimado ${totalLotes} lotes (> ${MAX_LAYERS}). Considerando apenas os primeiros ${MAX_LAYERS} lotes (${maxItems} códigos).`)
    }

    // Acúmulos e coletores
    let acumuladoFeicoes = 0                       // soma de feições retornadas (pode ter >1 por poço)
    const presentes = new Set<string>()            // códigos de poços efetivamente retornados (distintos)
    const esperado = codigosUsados.length

    console.warn(`▶️ Iniciando plotagem: ${esperado} códigos em até ${Math.min(totalLotes, MAX_LAYERS)} lotes.`)

    // Evita render/requests extra enquanto processa
    const prevVis = group.visible
    group.visible = false

    // === LOOP DOS LOTES ===
    for (let i = 0; i < codigosUsados.length && i / CHUNK_SIZE < MAX_LAYERS; i += CHUNK_SIZE) {
      const idxLote = Math.floor(i / CHUNK_SIZE) + 1
      const lote = codigosUsados.slice(i, i + CHUNK_SIZE)
      const valores = precisaAspas ? lote.map((v) => `'${v}'`).join(',') : lote.join(',')
      const where = `POCO_CD_POCO IN (${valores})`

      console.group(`🧩 Lote ${idxLote}`)
      console.warn(`Preparando lote ${idxLote}: ${lote.length} códigos`)
      console.log('WHERE:', where)

      const fl = new FeatureLayer({
        id: `pocos-lote-${String(idxLote).padStart(3, '0')}`,
        url: FEATURE_URL,
        title: `Poços (lote ${idxLote})`,
        definitionExpression: where,
        outFields: ['POCO_CD_POCO'],
        featureReduction: null,
        listMode: 'hide', // esconde cada filho na Layer List
        visible: false
      })

      try {
        let attempts = 0
        while (true) {
          try {
            await fl.load()
            group.add(fl)
            console.log(`➕ Lote ${idxLote} adicionado ao GroupLayer.`)

            // 1) Quantas feições (p/ depuração)
            const countFeicoes = await fl.queryFeatureCount({ where })
            acumuladoFeicoes += countFeicoes

            // 2) Quais códigos distintos realmente vieram neste lote
            const qDistinct = fl.createQuery()
            qDistinct.where = where
            qDistinct.outFields = ['POCO_CD_POCO']
            qDistinct.returnDistinctValues = true
            qDistinct.returnGeometry = false
            const distinctRes = await fl.queryFeatures(qDistinct)
            const foundCodes = distinctRes.features
              .map(f => String(f.attributes.POCO_CD_POCO).trim())
              .filter(Boolean)

            foundCodes.forEach(c => presentes.add(c))

            console.log(`🔢 Lote ${idxLote}: ${foundCodes.length} códigos distintos retornados`)
            console.log(`ℹ️  Lote ${idxLote}: ${countFeicoes} feições`)

            // 3) Progresso (distintos)
            console.warn(`✅ Lote ${idxLote}: distintos acumulados ${presentes.size}/${esperado}`)

            break
          } catch (err) {
            attempts++
            if (attempts >= 3) {
              console.error(`⚠️ Lote ${idxLote}: falhou após ${attempts} tentativas`, err)
              break
            }
            console.warn(`⏳ Retry lote ${idxLote} (tentativa ${attempts + 1})`)
            await sleep(400 * attempts)
          }
        }
      } catch (e) {
        console.error('🛑 Erro ao carregar/contar lote', idxLote, e)
      } finally {
        console.groupEnd()
      }

      await sleep(SLEEP_BETWEEN)
    }

    // Reativa o grupo após processar todos
    group.visible = prevVis

    // ==== Consolida faltantes (sem feição) ====
    const usadosSet = new Set(codigosUsados.map(v => String(v).trim()))
    const missing = [...usadosSet].filter(c => !presentes.has(c))

    console.warn(`🏁 Distintos retornados: ${presentes.size}/${esperado}`)
    console.log(`📦 Feições totais (soma): ${acumuladoFeicoes}`)
    console.log(`🔎 Códigos sem feição (${missing.length}):`, missing.slice(0, 50), missing.length > 50 ? '...' : '')

    // (opcional) envie ao parent se quiser consumir fora do iframe:
    // window.parent?.postMessage({
    //   type: 'plotDiagnostics',
    //   distinctFound: presentes.size,
    //   expected: esperado,
    //   missingCount: missing.length,
    //   sampleMissing: missing.slice(0, 50)
    // }, '*')

    console.warn(`🏁 Plotagem concluída.`)
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

          // Troca basemap por versão leve
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

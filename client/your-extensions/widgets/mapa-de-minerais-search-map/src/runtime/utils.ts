// utils.ts (ESM @arcgis/core)
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import Legend from "@arcgis/core/widgets/Legend"
import ClassBreaksRenderer from "@arcgis/core/renderers/ClassBreaksRenderer"
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol"

export const coresTipos: Record<string, string> = {
  lateral: "rgba(88, 19, 252, 0.7)",
  testemunho: "rgba(255, 0, 255, 0.7)",
  calha: "rgba(245, 201, 38, 0.7)",
  plug: "rgba(125, 253, 148, 0.7)",
  "whole core": "rgba(255, 43, 24, 0.7)"
}

type GerarParams = {
  jimuMapView: any
  dados: { codigoPoco: number; total: number }[]
  colorFill: string
  idCamada: string
  idLegenda: string
  titleLegenda: string
  withInterest?: boolean
}

export async function gerarMapaDistribuicaoEB({
  jimuMapView, dados, colorFill, idCamada, idLegenda, titleLegenda
}: GerarParams) {
  console.groupCollapsed(`[dist-eb] gerarMapaDistribuicaoEB id=${idCamada}`)
  console.time(`[dist-eb] tempo-total ${idCamada}`)
  try {
    const view = jimuMapView.view
    const map = view.map

    console.log('[dist-eb] qtd dados', dados.length, dados.slice(0, 10))
    if (!Array.isArray(dados) || dados.length === 0) {
      console.warn('[dist-eb] sem dados -> não cria camada')
      return
    }

    // Normaliza lista de códigos (apenas números)
    const codigosArr = dados.map(p => Number(p.codigoPoco)).filter(v => Number.isFinite(v))
    const codigos = codigosArr.join(',')
    if (!codigos) {
      console.warn('[dist-eb] lista de códigos vazia após normalização')
      return
    }
    const expression = `POCO_CD_POCO IN (${codigos})`
    console.log('[dist-eb] definitionExpression', expression)

    // Layer base do serviço
    const camadaPocosSrv = new FeatureLayer({
      url: 'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Feature_Pocos/MapServer/0',
      definitionExpression: expression,
      title: 'Poços (base)',
      outFields: ['*'],
      visible: false
    })

    console.time('[dist-eb] load camadaPoços')
    await camadaPocosSrv.load()
    console.timeEnd('[dist-eb] load camadaPoços')

    // OID real do serviço (pode ser POCO_CD_POCO)
    const objectIdField = (camadaPocosSrv as any).objectIdField || 'OBJECTID'
    console.log('[dist-eb] objectIdField do serviço:', objectIdField)

    console.time('[dist-eb] queryFeatures')
    const queryResult = await camadaPocosSrv.queryFeatures({
      where: expression,
      outFields: ['*'],
      returnGeometry: true
    })
    console.timeEnd('[dist-eb] queryFeatures')
    console.log('[dist-eb] features retornadas', queryResult.features.length)

    // Atribui TOTAL e inicializa md_val
    const features = queryResult.features.map((feature) => {
      const codigo = Number(feature.attributes.POCO_CD_POCO)
      const dado = dados.find(p => p.codigoPoco === codigo)
      const total = dado ? Number(dado.total) : 0
      feature.attributes.POCO_MD_MERID_CENT = total
      feature.attributes.md_val = 0 // usado pelos agrupadores
      return feature
    })

    // Estatística para classes/bubble
    const valores = dados.map(p => Number(p.total)).filter(v => Number.isFinite(v))
    let min = Math.min(...valores)
    let max = Math.max(...valores)
    console.log('[dist-eb] min/max antes', { min, max })

    const info: any[] = []
    const outline = { color: "black", width: "1px" } as const

    if (!Number.isFinite(min) || !Number.isFinite(max)) {
      console.warn('[dist-eb] valores inválidos -> não cria camada')
      return
    }

    if (min === 0 && max === 0) {
      info.push({
        minValue: 0, maxValue: 0,
        label: "Não há dados suficientes",
        symbol: new SimpleMarkerSymbol({ color: "rgba(255,255,255,0)", size: 0, style: "circle", outline })
      })
    } else {
      const zerados = valores.filter(v => v === 0).length
      const naoZerados = valores.filter(v => v > 0)
      console.log('[dist-eb] zerados/naoZerados', { zerados, naoZerados: naoZerados.length })

      if (zerados > 0) {
        info.push({
          minValue: 0, maxValue: 0,
          label: `| 0 | (${zerados} poço${zerados > 1 ? 's' : ''})`,
          symbol: new SimpleMarkerSymbol({ color: "rgba(200,200,200,0.3)", size: 6, style: "circle", outline })
        })
      }

      min = Math.max(1, min)
      const n = naoZerados.length
      const numClasses = Math.max(2, Math.round(1 + 3.3 * Math.log10(n || 1)))
      const breaks = Math.ceil((max - min + 1) / Math.max(1, numClasses))
      const maxSize = 40
      console.log('[dist-eb] classes', { numClasses, breaks, maxSize })

      for (let i = 0; i < numClasses; i++) {
        const minValue = min + (i * breaks)
        const maxValue = min + ((i + 1) * breaks) - 1
        if (minValue > max) break
        const count = naoZerados.filter(v => v >= minValue && v <= maxValue).length
        const label = `${minValue} |---| ${maxValue} (${count} poço${count > 1 ? 's' : ''})`
        const size = 6 + (i * (maxSize / numClasses))
        info.push({
          minValue, maxValue, label,
          symbol: new SimpleMarkerSymbol({ color: colorFill, size, style: "circle", outline })
        })
      }
    }

    const renderer = new ClassBreaksRenderer({
      field: "POCO_MD_MERID_CENT",
      classBreakInfos: info
    })

    // Schema do layer client-side:
    // - herda campos do serviço
    // - remove duplicatas que vamos adicionar
    const baseFields = camadaPocosSrv.fields.filter(f =>
      f?.name !== 'POCO_MD_MERID_CENT' && f?.name !== 'md_val'
    )
    const fields = [
      ...baseFields,
      { name: "POCO_MD_MERID_CENT", alias: "Valor (Minerais/Amostras)", type: "double" as const },
      { name: "md_val", alias: "Valor Agrupador", type: "double" as const }
    ]

    // Remove camada anterior (se existir)
    const existente = map.findLayerById(idCamada)
    if (existente) { console.log('[dist-eb] remove camada existente', idCamada); map.remove(existente) }

    // Cria camada client-side com o OID real do serviço
    const camadaDistribuicao = new FeatureLayer({
      id: idCamada,
      source: features,
      fields,
      objectIdField, // <<< herdado do serviço (ex.: 'POCO_CD_POCO')
      geometryType: "point",
      spatialReference: view.spatialReference ?? { wkid: 102100 },
      renderer,
      title: titleLegenda,
      listMode: "hide",
      featureReduction: { type: "cluster", clusterMinSize: 18, clusterMaxSize: 48, labelsVisible: false }
    })

    map.add(camadaDistribuicao)
    console.log('[dist-eb] camada adicionada', idCamada, 'features:', features.length)

    // (Opcional) legenda no mapa
    const legend = new Legend({
      view,
      layerInfos: [{ layer: camadaDistribuicao, title: titleLegenda }]
    })
    // view.ui.add(legend, "bottom-left")

  } catch (e) {
    console.error('[dist-eb] ERRO ao gerarMapaDistribuicaoEB', e)
  } finally {
    console.timeEnd(`[dist-eb] tempo-total ${idCamada}`)
    console.groupEnd()
  }
}

// utils.ts
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import Legend from "@arcgis/core/widgets/Legend"
import ClassBreaksRenderer from "@arcgis/core/renderers/ClassBreaksRenderer"
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol"

const coresTipos: Record<string, string> = {
  lateral: "rgba(88, 19, 252, 0.7)",
  testemunho: "rgba(255, 0, 255, 0.7)",
  calha: "rgba(245, 201, 38, 0.7)",
  plug: "rgba(125, 253, 148, 0.7)",
  "whole core": "rgba(255, 43, 24, 0.7)"
}

export async function gerarMapaDistribuicaoEB({
  jimuMapView,
  dados,
  colorFill,
  idCamada,
  idLegenda,
  titleLegenda
}: {
  jimuMapView: any
  dados: { codigoPoco: number; total: number }[]
  colorFill: string
  idCamada: string
  idLegenda: string
  titleLegenda: string
}) {
  const view = jimuMapView.view
  const map = view.map

  const codigos = dados.map(p => p.codigoPoco).join(',')
  const expression = `POCO_CD_POCO IN (${codigos})`

  const camadaPoços = new FeatureLayer({
    url: 'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Feature_Pocos/MapServer/0',
    definitionExpression: expression,
    title: 'Poços',
    outFields: ['*'],
    visible: false
  })

  await camadaPoços.load()

  const queryResult = await camadaPoços.queryFeatures({
    where: expression,
    outFields: ['*'],
    returnGeometry: true
  })

  const features = queryResult.features.map((feature) => {
    const dado = dados.find(p => p.codigoPoco === feature.attributes.POCO_CD_POCO)
    feature.attributes.POCO_MD_MERID_CENT = dado ? dado.total : 0
    return feature
  })

  const valores = dados.map(p => p.total)
  let min = Math.min(...valores)
  let max = Math.max(...valores)

  const info = []
  const outline = { color: "black", width: "1px" }

  if (min === max && min === 0) {
    info.push({
      minValue: 0,
      maxValue: 0,
      label: "Não há dados suficientes",
      symbol: new SimpleMarkerSymbol({ color: "rgba(255,255,255,0)", size: 0, style: "circle", outline })
    })
  } else {
    const zerados = valores.filter(v => v === 0).length
    const naoZerados = valores.filter(v => v > 0)

    if (zerados > 0) {
      info.push({
        minValue: 0,
        maxValue: 0,
        label: `| 0 | (${zerados} poço${zerados > 1 ? 's' : ''})`,
        symbol: new SimpleMarkerSymbol({ color: "rgba(200,200,200,0.3)", size: 6, style: "circle", outline })
      })
    }

    min = 1
    const n = naoZerados.length
    const numClasses = Math.max(2, Math.round(1 + 3.3 * Math.log10(n)))
    const breaks = Math.ceil((max - min + 1) / numClasses)
    const maxSize = 40

    for (let i = 0; i < numClasses; i++) {
      const minValue = min + (i * breaks)
      const maxValue = min + ((i + 1) * breaks) - 1
      if (minValue > max) break

      const count = naoZerados.filter(v => v >= minValue && v <= maxValue).length
      const label = `${minValue} |---| ${maxValue} (${count} poço${count > 1 ? 's' : ''})`

      const size = 6 + (i * (maxSize / numClasses))

      info.push({
        minValue,
        maxValue,
        label,
        symbol: new SimpleMarkerSymbol({ color: colorFill, size, style: "circle", outline })
      })
    }
  }

  const renderer = new ClassBreaksRenderer({
    field: "POCO_MD_MERID_CENT",
    classBreakInfos: info
  })

  const camadaDistribuicao = new FeatureLayer({
    id: idCamada,
    source: features,
    fields: camadaPoços.fields,
    objectIdField: "OBJECTID",
    geometryType: "point",
    spatialReference: { wkid: 102100 },
    renderer,
    title: titleLegenda,
    listMode: "hide",
    // layerCreatedFromPortal: false
  })

  const existente = map.findLayerById(idCamada)
  if (existente) map.remove(existente)
  map.add(camadaDistribuicao)

  const legend = new Legend({
    view,
    layerInfos: [{ layer: camadaDistribuicao, title: titleLegenda }]
  })
  // view.ui.add(legend, "bottom-left")
}

export { coresTipos }
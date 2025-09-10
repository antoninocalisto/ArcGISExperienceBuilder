// utils.ts
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import Field from "@arcgis/core/layers/support/Field"
import ClassBreaksRenderer from "@arcgis/core/renderers/ClassBreaksRenderer"
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol"

export const coresTipos: Record<string, string> = {
  lateral: "rgba(88, 19, 252, 0.7)",
  testemunho: "rgba(255, 0, 255, 0.7)",
  calha: "rgba(245, 201, 38, 0.7)",
  plug: "rgba(125, 253, 148, 0.7)",
  "whole core": "rgba(255, 43, 24, 0.7)"
}

// Monta IN(...) respeitando se o campo é string
function toSqlInList(values: (string | number)[], asString: boolean): string {
  if (asString) {
    const quoted = values.map(v => `'${String(v).replace(/'/g, "''")}'`)
    return `(${quoted.join(",")})`
  }
  return `(${values.join(",")})`
}

export async function gerarMapaDistribuicaoEB({
  jimuMapView,
  dados,
  colorFill,
  idCamada,
  idLegenda,   // mantido por compat., não usado aqui
  titleLegenda,
  withInterest  // opcional, só para manter a assinatura do caller
}: {
  jimuMapView: any
  dados: { codigoPoco: number | string; total: number }[]
  colorFill: string
  idCamada: string
  idLegenda?: string
  titleLegenda: string
  withInterest?: boolean
}) {
  const view = jimuMapView.view
  const map = view.map

  // nada para desenhar -> remove camada antiga (se existir) e sai
  if (!dados || dados.length === 0) {
    const existente = map.findLayerById(idCamada)
    if (existente) map.remove(existente)
    return
  }

  // 1) Camada base (pegar geometria por código)
  const camadaPocos = new FeatureLayer({
    url: "https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Feature_Pocos/MapServer/0",
    outFields: ["POCO_CD_POCO"],
    visible: false,
    title: "Poços (base)"
  })
  await camadaPocos.load()

  const pocoField = camadaPocos.fields.find(f => f.name === "POCO_CD_POCO")
  const isStringField = (pocoField?.type === "string")

  const codigos = dados.map(p => p.codigoPoco).filter(v => v !== undefined && v !== null)
  const where = `POCO_CD_POCO IN ${toSqlInList(codigos, !!isStringField)}`

  const queryResult = await camadaPocos.queryFeatures({
    where,
    outFields: ["POCO_CD_POCO"],
    returnGeometry: true
  })

  // 2) Monta source com OBJECTID próprio e TOTAL
  const totalByCodigo = new Map<string, number>()
  dados.forEach(d => totalByCodigo.set(String(d.codigoPoco), Number(d.total ?? 0)))

  const source = queryResult.features.map((feat, i) => {
    const cod = String(feat.attributes.POCO_CD_POCO)
    const total = totalByCodigo.get(cod) ?? 0
    feat.attributes = {
      OBJECTID: i + 1,
      POCO_CD_POCO: cod,
      TOTAL: total
    }
    return feat
  })

  // 3) Quebras (usar PROPERTIES para evitar erro de tipagem)
  const valores = dados.map(p => Number(p.total ?? 0))
  let min = Math.min(...valores)
  let max = Math.max(...valores)

  const info: __esri.ClassBreakInfoProperties[] = []
  const outline = { color: "black", width: 1 } // width numérico!

  if (!isFinite(min) || !isFinite(max)) {
    // sem dados válidos: deixa info vazio (não deve ocorrer pois já retornamos acima)
  } else if (min === 0 && max === 0) {
    // todos zero -> manter bolha pequena e cinza (para não “sumir” cluster)
    const qtd = valores.length
    info.push({
      minValue: 0,
      maxValue: 0,
      label: `| 0 | (${qtd} poço${qtd > 1 ? "s" : ""})`,
      symbol: new SimpleMarkerSymbol({
        color: "rgba(200,200,200,0.3)",
        size: 6,
        style: "circle",
        outline
      })
    })
  } else {
    const zerados = valores.filter(v => v === 0).length
    const naoZerados = valores.filter(v => v > 0)

    if (zerados > 0) {
      info.push({
        minValue: 0,
        maxValue: 0,
        label: `| 0 | (${zerados} poço${zerados > 1 ? "s" : ""})`,
        symbol: new SimpleMarkerSymbol({
          color: "rgba(200,200,200,0.3)",
          size: 6,
          style: "circle",
          outline
        })
      })
    }

    min = 1
    const n = Math.max(naoZerados.length, 1)
    const numClasses = Math.max(2, Math.round(1 + 3.3 * Math.log10(n)))
    const breaks = Math.ceil((max - min + 1) / numClasses)
    const maxSize = 40

    for (let i = 0; i < numClasses; i++) {
      const minValue = min + i * breaks
      const maxValue = min + (i + 1) * breaks - 1
      if (minValue > max) break

      const count = naoZerados.filter(v => v >= minValue && v <= maxValue).length
      const label = `${minValue} |---| ${maxValue} (${count} poço${count > 1 ? "s" : ""})`
      const size = 6 + i * (maxSize / numClasses)

      info.push({
        minValue,
        maxValue,
        label,
        symbol: new SimpleMarkerSymbol({ color: colorFill, size, style: "circle", outline })
      })
    }
  }

  const renderer = new ClassBreaksRenderer({
    field: "TOTAL",
    classBreakInfos: info
  })

  // 4) Schema mínimo (Field instances) + CLUSTERING
  const fields = [
    new Field({ name: "OBJECTID", alias: "OBJECTID", type: "oid" }),
    new Field({ name: "POCO_CD_POCO", alias: "Código do Poço", type: "string" }),
    new Field({ name: "TOTAL", alias: "Total", type: "double" })
  ]

  const layer = new FeatureLayer({
    id: idCamada,
    title: titleLegenda,
    source,
    fields,
    objectIdField: "OBJECTID",
    geometryType: "point",
    spatialReference: view?.spatialReference ?? { wkid: 102100 },
    renderer,
    listMode: "hide",
    popupEnabled: true,
    popupTemplate: {
      title: "{POCO_CD_POCO}",
      content: "Total: {TOTAL}"
    },
    featureReduction: {
      type: "cluster",
      clusterRadius: "80px",
      // símbolo do cluster na cor da série
      symbol: {
        type: "simple-marker",
        style: "circle",
        size: 28,
        color: colorFill,
        outline: { color: "white", width: 1.5 }
      } as any,
      // compatibilidade com builds que usam clusterSymbol
      // @ts-ignore
      clusterSymbol: {
        type: "simple-marker",
        style: "circle",
        size: 28,
        color: colorFill,
        outline: { color: "white", width: 1.5 }
      },
      labelsVisible: true,
      labelingInfo: [{
        deconflictionStrategy: "none",
        labelExpressionInfo: { expression: "Text($feature.cluster_count, '#,###')" },
        symbol: {
          type: "text",
          color: "white",
          haloColor: "#333",
          haloSize: 1.5,
          font: { size: 10, weight: "bold" }
        } as any
      }]
    } as any
  })

  const existente = map.findLayerById(idCamada)
  if (existente) map.remove(existente)
  map.add(layer)

  return layer
}

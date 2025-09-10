import React, { useRef } from 'react'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import Extent from '@arcgis/core/geometry/Extent'
import esriConfig from '@arcgis/core/config'

export default function Widget() {
  const jimuMapViewRef = useRef<JimuMapView>()

  // Força resposta JSON
  esriConfig.request.interceptors.push({
    urls: /Pocos_Sem_Simbolos\/FeatureServer\/0/,
    before: (params) => {
      params.requestOptions.query = {
        ...params.requestOptions.query,
        f: 'json'
      }
    }
  })

  const extentBrasil = new Extent({
     xmin: -90.0,
    ymin: -40.0,
    xmax: -20.0,
    ymax: 15.0,
    spatialReference: { wkid: 4326 }
  })

  const adicionarCamadaPocos = (jimuMapView: JimuMapView) => {
    const codigos = [4523, 1010, 17696, 4437, 4327, 4230, 2014, 1592, 8830, 7944, 1340]
    const expression = `POCO_CD_POCO IN (${codigos.join(',')})`

    const camada = new FeatureLayer({
      url: 'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Pocos_Sem_Simbolos/FeatureServer/0',
      definitionExpression: expression,
      title: 'Poços',
      outFields: ['*'],
      visible: true,
      featureReduction: null
    })

    jimuMapView.view.map.add(camada)
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <JimuMapViewComponent
        useMapWidgetId={'widget_1'}
        onActiveViewChange={(jimuMapView) => {
          jimuMapViewRef.current = jimuMapView

          // ✅ Vai para o Brasil antes de carregar os dados
          jimuMapView.view.goTo(extentBrasil)

          adicionarCamadaPocos(jimuMapView)
        }}
      />
    </div>
  )
}

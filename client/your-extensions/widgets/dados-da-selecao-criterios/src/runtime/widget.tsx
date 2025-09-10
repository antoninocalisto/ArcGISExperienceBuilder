import React, { useEffect, useRef, useState } from 'react'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import esriConfig from '@arcgis/core/config'

import { AllWidgetProps } from 'jimu-core'
import { IMConfig } from '../config'

esriConfig.request.interceptors.push({
  urls: /Pocos_Sem_Simbolos\/FeatureServer\/0/,
  before: (params) => {
    params.requestOptions.query = {
      ...params.requestOptions.query,
      f: 'json'
    }
  }
})

export default function Widget(props: AllWidgetProps<IMConfig>) {
  const jimuMapViewRef = useRef<JimuMapView>()
  const [codigosPocos, setCodigosPocos] = useState<number[]>([])
  const [mapViewReady, setMapViewReady] = useState<JimuMapView | null>(null)

  console.log('🔍 Experience Builder Widget iniciado [dados-da-selecao-criterios]')

  const origensPermitidas = [
    'https://localhost:3001',
    'https://portalgis.petrobras.com.br',
    'https://portalgisd.petrobras.com.br',
    'http://localhost:8080',
    'https://explorad.petrobras.com.br',
    'https://explora.petrobras.com.br'
  ]

  useEffect(() => {
    console.log('Widget rodando em window.location.origin:', window.location.origin)
    window.addEventListener('message', (event) => {
      console.log('Entrou no message do EB...')
      if (!origensPermitidas.includes(event.origin)) {
        console.warn('Origem não permitida:', event.origin)
        return
      }

      const { type, data } = event.data
      console.log('Mensagem recebida:', event.data)
      console.log('Tipo:', type)
      console.log('Dados brutos:', data)
      console.log('Array?', Array.isArray(data), '| Tamanho:', data?.length)

      if (type === 'codigosPocos' && Array.isArray(data)) {
        console.log('Poços válidos recebidos:', data.join(', '))
        setCodigosPocos(data)
      } else {
        console.warn('Dados inválidos recebidos:', data)
      }
    })
  }, [])

  useEffect(() => {
    if (mapViewReady) {
      console.log('Enviando confirmação de prontidão do widget (widgetReady)')
      window.parent.postMessage({ type: 'widgetReady' }, '*')
    }
  }, [mapViewReady])

  // Espera o mapa e os poços estarem prontos
  useEffect(() => {
    console.log('useEffect 2 -> Widget rodando em window.location.origin:', window.location.origin)
    if (mapViewReady && codigosPocos.length > 0) {
      console.log('Estado atual de codigosPocos:', codigosPocos)
      adicionarCamadaPocos(mapViewReady)
    }
  }, [mapViewReady, codigosPocos])


  const adicionarCamadaPocos = (jimuMapView: JimuMapView) => {
    const expression = `POCO_CD_POCO IN (${codigosPocos.join(',')})`
    // const expression = `POCO_CD_POCO IN (1010,4523)`

    console.log('Adicionando camada com expressão:', expression)

    //CAMPOS PARA VERIFICAR:

    const outFields = [
      'AMBI_CD_AMBI_BS', 'AMBI_CD_AMBI_FN', 'ARBA_CD_AREA_BACIA',
      'BACI_CD_BACIA', 'BACI_NM_BACIA', 'BLOC_CD_BLOCO_CONT',
      'BLOC_CD_BLOCO_PEM', 'CAEM_CD_CATEGORIA', 'CAMP_CD_CAMPO',
      'CAMP_NM_CAMPO', 'CLPO_CD_CLASS_POCO', 'CLPO_NM_CLASS_POCO',
      'DAGE_CD_DATUM_GEOD', 'DAGE_NM_DATUM_GEOD', 'DEPO_NM_DESIGNACAO',
      'DEPO_SG_REF_NOMINA', 'DOCM_TX_FILEID', 'EMEP_NM_NOME_ABREV',
      'EVRE_DT_RECLASSIF', 'FPOC_CD_FINALIDADE', 'GRCU_TX_GRUPO_CURVA',
      'MAEO_TX_MARCADOR_PROFUNDIDADE', 'MUNI_CD_MUNICIPIO', 'MUNI_NM_MUNICIPIO',
      'ODAP_NM_ORIG_DADO_ADQ_POCO', 'OPERADOR_BLOCO', 'PAIS_CD_PAIS',
      'PAIS_NM_PAIS', 'POCO_CD_CONDICAO', 'POCO_CD_POCO_ORIG',
      'POCO_CD_PROPRIET', 'POCO_CD_REPERF', 'POCO_DT_CONCLUSAO',
      'POCO_DT_PREV_INOP', 'POCO_DT_TERMINO', 'POCO_IN_ATING_ALVO',
      'POCO_IN_CO2_PREV', 'POCO_IN_DIRECIONAL', 'POCO_IN_H2S_PREV',
      'POCO_IN_LOCACAO', 'POCO_IN_MULTILATER', 'POCO_IN_OCORR_CO2',
      'POCO_IN_OCORR_H2S', 'POCO_IN_PARCERIA', 'POCO_IN_PERDIDO',
      'POCO_MD_COT_FN_PREV', 'POCO_MD_COTA_ALTIM', 'POCO_MD_DIST_COSTA',
      'POCO_MD_L_AGUA_PR', 'POCO_MD_LAMIN_AGUA', 'POCO_MD_LATI_FUNDO',
      'POCO_MD_LONG_FUNDO', 'POCO_MD_LUTM_BASE', 'POCO_MD_LUTM_FUNDO',
      'POCO_MD_LUTM_PR_BS', 'POCO_MD_LUTM_PR_FN', 'POCO_MD_MERID_CENT',
      'POCO_MD_METROS_PERF', 'POCO_MD_NUTM_BASE', 'POCO_MD_NUTM_FUNDO',
      'POCO_MD_NUTM_PR_BS', 'POCO_MD_NUTM_PR_FN', 'POCO_MD_PROF_FN_PR',
      'POCO_MD_PROF_PREVI', 'POCO_MD_PUTM_BASE', 'POCO_NM_COMPLETO',
      'POCO_NR_ANO_PAT', 'POCO_NR_BOCA_TEMPL', 'POCO_NR_GEDOC',
      'POCO_NR_ORDEM_POCO', 'POCO_NR_POCO', 'POCO_SG_API',
      'POCO_SG_LOCACAO', 'POCO_SG_LOCALIZA', 'POCO_SG_PREF_DEPEX',
      'POCO_SG_PREF_POCO_COMP', 'POCO_SG_REPETICAO', 'POCO_SG_SUBM',
      'POCO_TX_DET_LOCAL', 'POCO_TX_FINALIDADE', 'POCO_TX_OBS_LOCA',
      'POCO_TX_QUADR_PREV', 'POUI_HR_FIM_VINCUL', 'POUI_HR_IN_VINCUL',
      'POUI_MD_ALTUR_MESA', 'PRFP_SG_PREF_POCO', 'RSTD_NM_RESULTADO_POCO',
      'SEPR_CD_SERV_PROD', 'STPO_CD_STATUS', 'STPO_TX_STATUS',
      'TDIR_CD_TIPO_DIR', 'TIRC_CD_RECLASSIF', 'TIRC_TX_RECLASSIF',
      'TMPL_CD_TEMPLATE', 'UNAD_CD_UNID_ADM_A', 'UNAD_CD_UNID_ADM_G',
      'UNAD_CD_UNID_ADM_L', 'UNAD_CD_UNID_ADM_P', 'UNFE_CD_UF',
      'UNFE_NM_UF', 'UNLI_CD_UNID_LITO', 'UNLI_NM_UNID_LITO',
      'UNOP_CD_UNID_OPER', 'UNOP_CD_UNID_RESP', 'UNOP_SG_UNID_OPER',
      'UNOP_SG_UNID_OPER_RESP'
    ];


    const camada = new FeatureLayer({
      url: 'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Pocos_Sem_Simbolos/FeatureServer/0', //'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Feature_Pocos/MapServer/0', //'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Pocos_Sem_Simbolos/FeatureServer/0', //'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Feature_Pocos/MapServer/0',
      definitionExpression: expression,
      title: 'Poços',
      outFields: ['POCO_CD_POCO'],
      visible: true,
      featureReduction: null
    })

    camada.load()
      .then(() => {
        console.log('Camada carregada com sucesso:', camada.title)
        jimuMapView.view.map.add(camada)

        setTimeout(() => {
          console.log('camadas atuais no mapa:', jimuMapView.view.map.layers)
        }, 1000)
      })
      .catch((err) => {
        console.error('Erro ao carregar camada:', err)
      })
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={(jimuMapView) => {
          if (jimuMapView) {
            console.log('Mapa carregado e pronto.')
            jimuMapViewRef.current = jimuMapView
            setMapViewReady(jimuMapView)
          }
        }}
      />
    </div>
  )
}

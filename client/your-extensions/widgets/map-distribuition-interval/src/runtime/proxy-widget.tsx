/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { React, jsx, css, Global } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import esriConfig from '@arcgis/core/config'
import { gerarMapaDistribuicaoEB, coresTipos } from './utils'

/* ===== Tipos auxiliares p/ a faixa ===== */
type CodigoPoco = number
type MsgFaixaInteresse = { type: 'faixa-interesse'; codigosPocos: CodigoPoco[] }

const log10 = (x: number) => Math.log10 ? Math.log10(x) : Math.log(x) / Math.LN10

function calcularQuebras(dados: { total: number }[], colorFill: string) {
  const valores = dados.map(p => p.total)
  let min = Math.min(...valores)
  let max = Math.max(...valores)

  const info: { label: string; size: number; cor: string; count: number }[] = []

  if (min === 0 && max === 0) {
    info.push({ label: 'Não há dados suficientes', size: 0, cor: colorFill, count: 0 })
  } else {
    const zerados = valores.filter(v => v === 0).length
    const naoZerados = valores.filter(v => v > 0)

    if (zerados > 0) {
      info.push({
        label: `| 0 | (${zerados} poço${zerados > 1 ? 's' : ''})`,
        size: 6, cor: 'rgba(200,200,200,0.3)', count: zerados
      })
    }

    min = 1
    const n = naoZerados.length
    const numClasses = Math.max(2, Math.round(1 + 3.3 * log10(n)))
    const breaks = Math.ceil((max - min + 1) / numClasses)
    const maxSize = 40

    for (let i = 0; i < numClasses; i++) {
      const minValue = min + i * breaks
      const maxValue = min + (i + 1) * breaks - 1
      if (minValue > max) break

      const count = naoZerados.filter(v => v >= minValue && v <= maxValue).length
      const label = `${minValue} |---| ${maxValue} (${count} poço${count > 1 ? 's' : ''})`
      const size = 6 + i * (maxSize / numClasses)

      info.push({ label, size, cor: colorFill, count })
    }
  }
  return info
}

const MAX_BUBBLE = 40
const globalPanelStyle = css`
  div[role='dialog'][aria-label='mapa de distribuição'] {
    height: 550px !important;
    max-height: 550px !important;
  }
`
const bubbleBoxStyle = css`
  width: ${MAX_BUBBLE}px;
  height: ${MAX_BUBBLE}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`

/* ----------  Estilos reutilizados do widget antigo  ---------- */
const wrapperStyle = css`
  position: relative; width: 100%; height: 100%;
  background: #fff; border: 1px solid #ddd; border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,.1); padding: 16px; overflow: hidden;
`
const titleStyle = css`font-weight:600; margin-bottom:4px; display:block;`
const selectStyle = css`width:100%; padding:6px 8px; margin-bottom:12px;
  border:1px solid #ccc; border-radius:4px;`
const listStyle = css`overflow-y:auto; margin-bottom:12px;
  padding:8px; background:#fafafa; border:1px solid #eee; border-radius:4px;`
const checkboxRowStyle = css`display:flex; align-items:center; margin-bottom:6px; cursor:pointer;`
const summaryListStyle = css`
  max-height: 300px;
  overflow-y: auto;
  margin-top: 8px;
  padding: 8px;
  padding-bottom: 36px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  position: relative;
`
const summaryItemStyle = css`display:flex; align-items:center; margin-bottom:6px;`
const rangeLabelStyle = css`font-size:0.9rem;`
const footerStyle = css`
  position: sticky;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #eee;
  padding: 4px 0;
  display: flex;
  align-items: center;
  gap: 16px;
`
const footerLabelStyle = css`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 0.9rem;
`

/* ----------  Mapeamento campos  ---------- */
interface AmostraItem {
  codigoPoco: number
  totalAmostrasLaterais: number
  totalCalhas: number
  totalPlugs: number
  totalTestemunhos: number
  totalWholeCore: number
}

const TYPE_FIELD: Record<string, keyof AmostraItem> = {
  lateral: 'totalAmostrasLaterais',
  testemunho: 'totalTestemunhos',
  calha: 'totalCalhas',
  plug: 'totalPlugs',
  'whole core': 'totalWholeCore'
}

const LIST_TYPES = Object.keys(TYPE_FIELD)

/* ----------  MOCK já existente ---------- */
const DADOS_MOCK: AmostraItem[] = [
  { codigoPoco: 1010, totalAmostrasLaterais: 0, totalCalhas: 3, totalPlugs: 0, totalTestemunhos: 14, totalWholeCore: 0 },
  { codigoPoco: 1340, totalAmostrasLaterais: 0, totalCalhas: 269, totalPlugs: 0, totalTestemunhos: 33, totalWholeCore: 0 },
  { codigoPoco: 1592, totalAmostrasLaterais: 0, totalCalhas: 19, totalPlugs: 0, totalTestemunhos: 20, totalWholeCore: 0 },
  { codigoPoco: 2014, totalAmostrasLaterais: 0, totalCalhas: 0, totalPlugs: 0, totalTestemunhos: 15, totalWholeCore: 0 },
  { codigoPoco: 4230, totalAmostrasLaterais: 24, totalCalhas: 0, totalPlugs: 0, totalTestemunhos: 7, totalWholeCore: 0 },
  { codigoPoco: 4327, totalAmostrasLaterais: 12, totalCalhas: 26, totalPlugs: 0, totalTestemunhos: 16, totalWholeCore: 0 },
  { codigoPoco: 4437, totalAmostrasLaterais: 0, totalCalhas: 0, totalPlugs: 0, totalTestemunhos: 5, totalWholeCore: 0 },
  { codigoPoco: 4523, totalAmostrasLaterais: 0, totalCalhas: 0, totalPlugs: 0, totalTestemunhos: 2, totalWholeCore: 0 },
  { codigoPoco: 7944, totalAmostrasLaterais: 0, totalCalhas: 228, totalPlugs: 0, totalTestemunhos: 3, totalWholeCore: 0 },
  { codigoPoco: 8830, totalAmostrasLaterais: 0, totalCalhas: 40, totalPlugs: 51, totalTestemunhos: 3, totalWholeCore: 0 },
  { codigoPoco: 17696, totalAmostrasLaterais: 44, totalCalhas: 17, totalPlugs: 0, totalTestemunhos: 1, totalWholeCore: 0 }
]

export default function Widget(props: any) {
  /* ---------- estados ---------- */
  const [jimuMapView, setJimuMapView] = React.useState<JimuMapView>()
  const [categoria, setCategoria] = React.useState<string>('')         // '' até o usuário escolher
  const [tiposSel, setTiposSel] = React.useState<string[]>([])
  const [showEmpty, setShowEmpty] = React.useState<boolean>(false)

  /* ===== Flag + conjunto da faixa ===== */
  const [withInterest, setWithInterest] = React.useState<boolean>(false)
  const [faixaSet, setFaixaSet] = React.useState<Set<CodigoPoco>>(
    () => new Set<CodigoPoco>(Array.isArray(props?.codigosFaixaInteresse) ? props.codigosFaixaInteresse : [])
  )

  /* ===== Config ArcGIS JS: proxy + trusted servers (uma vez) ===== */
  React.useEffect(() => {
    // Ajuste conforme seu proxy (ex.: /proxy/portalgis/)
    esriConfig.request.proxyUrl = '/proxy/portalgis/'
    if (!esriConfig.request.trustedServers.includes('portalgis.petrobras.com.br')) {
      esriConfig.request.trustedServers.push('portalgis.petrobras.com.br')
    }
  }, [])

  /* Recebe faixa via postMessage: { type:'faixa-interesse', codigosPocos:[...] } */
  React.useEffect(() => {
    const onMsg = (ev: MessageEvent) => {
      const data = ev?.data as MsgFaixaInteresse
      if (!data || data.type !== 'faixa-interesse' || !Array.isArray(data.codigosPocos)) return
      setFaixaSet(new Set<CodigoPoco>(data.codigosPocos))
    }
    window.addEventListener('message', onMsg)
    return () => window.removeEventListener('message', onMsg)
  }, [])

  /* Atualiza faixa quando props mudar */
  React.useEffect(() => {
    if (Array.isArray(props?.codigosFaixaInteresse)) {
      setFaixaSet(new Set<CodigoPoco>(props.codigosFaixaInteresse))
    }
  }, [props?.codigosFaixaInteresse])

  /* ---------- helper: aplica faixa de interesse ---------- */
  const aplicarFaixaInteresse = React.useCallback(
    (arr: { codigoPoco: number; total: number }[]) => {
      if (!withInterest) return arr
      if (!faixaSet || faixaSet.size === 0) return []
      return arr.filter(i => faixaSet.has(i.codigoPoco))
    },
    [withInterest, faixaSet]
  )

  /* ---------- helper: gera [{codigoPoco,total}] p/ 1 tipo (com/faixa) ---------- */
  const gerarArrayTotal = React.useCallback(
    (tipo: string) => aplicarFaixaInteresse(
      DADOS_MOCK.map(d => ({
        codigoPoco: d.codigoPoco,
        total: d[TYPE_FIELD[tipo]]
      }))
    ),
    [aplicarFaixaInteresse]
  )

  /* ---------- efeito: redesenha quando checkboxes/flag/categoria mudam ---------- */
  React.useEffect(() => {
    if (!jimuMapView) return
    if (categoria !== 'sample') {
      // se trocar a categoria, limpa eventuais camadas
      const view = jimuMapView.view
      if (!view?.map) return
      LIST_TYPES.forEach(t => {
        const layer = view.map.findLayerById('amostras_' + t)
        if (layer) view.map.remove(layer)
      })
      return
    }

    jimuMapView.view.when(() => {
      const view = jimuMapView.view
      if (!view?.map) return

      // Limpa camadas antigas de distribuição
      LIST_TYPES.forEach(t => {
        const layer = view.map.findLayerById('amostras_' + t)
        if (layer) view.map.remove(layer)
      })

      // Desenha cada tipo marcado
      tiposSel.forEach(tipo => {
        const dados = gerarArrayTotal(tipo)
        if (!dados || dados.length === 0) return

        const cor = coresTipos[tipo] || 'rgba(0,0,0,0.5)'
        try {
          gerarMapaDistribuicaoEB({
            jimuMapView,
            dados,
            colorFill: cor,
            idCamada: 'amostras_' + tipo,
            idLegenda: 'lgd_amostras_' + tipo,
            titleLegenda: (withInterest ? 'Intervalo de Interesse - ' : '') +
                          (tipo.charAt(0).toUpperCase() + tipo.slice(1)),
            withInterest
          } as any)
        } catch (e) {
          console.error('Erro ao desenhar distribuição', tipo, e)
        }
      })
    })
  }, [jimuMapView, tiposSel, gerarArrayTotal, withInterest, categoria])

  /* ---------- toggle checkbox ---------- */
  const toggleTipo = (tipo: string) =>
    setTiposSel(prev =>
      prev.includes(tipo) ? prev.filter(t => t !== tipo) : [...prev, tipo]
    )

  const summaryGroups = categoria === 'sample'
    ? tiposSel.map(tipo => {
        const dados = gerarArrayTotal(tipo)
        const cor = coresTipos[tipo]
        let rows = calcularQuebras(dados, cor).reverse()
        if (!showEmpty) {
          rows = rows.filter(r => r.count > 0 || r.label.startsWith('| 0 |'))
        }
        return { tipo, rows }
      })
    : []

  /* ---------- render ---------- */
  return (
    <div css={wrapperStyle}>
      <Global styles={globalPanelStyle} />
      <label css={titleStyle}>Selecione a distribuição</label>

      <select css={selectStyle}
        value={categoria}
        onChange={e => { setCategoria(e.target.value); setTiposSel([]) }}>
        <option value=''>Selecione o tipo</option>
        <option value='sample'>Distribuição de amostra</option>
      </select>

      {categoria === 'sample' && (
        <div css={listStyle}>
          {LIST_TYPES.map(t => (
            <div key={t} css={checkboxRowStyle} onClick={() => toggleTipo(t)}>
              <input
                type='checkbox'
                checked={tiposSel.includes(t)}
                readOnly
                style={{ marginRight: 6 }}
              />
              <span>{t.charAt(0).toUpperCase() + t.slice(1)}</span>
            </div>
          ))}

          {/* Flag de Intervalo de interesse - sempre visível na categoria sample */}
          <div style={{ marginTop: 8 }}>
            <label css={footerLabelStyle} title="Quando marcado, filtra apenas os poços do intervalo de interesse">
              <input
                type="checkbox"
                checked={withInterest}
                onChange={e => setWithInterest(e.target.checked)}
              />
              Intervalo de interesse
            </label>
          </div>
        </div>
      )}

      {summaryGroups.length > 0 && (
        <div css={summaryListStyle}>
          {summaryGroups.map(group => (
            <React.Fragment key={group.tipo}>
              {/* título do conjunto (aparece só 1x) */}
              <div css={css`font-weight:600; margin:4px 0;`}>
                {(withInterest ? 'Intervalo de Interesse - ' : '')}
                {group.tipo.charAt(0).toUpperCase() + group.tipo.slice(1)}
              </div>

              {/* linhas da faixa, já em ordem decrescente */}
              {group.rows.map((r, idx) => (
                <div key={`${group.tipo}-${idx}`} css={summaryItemStyle}>
                  <div css={bubbleBoxStyle}>
                    <svg width={r.size} height={r.size}>
                      <circle cx={r.size / 2} cy={r.size / 2} r={r.size / 2} fill={r.cor} />
                    </svg>
                  </div>
                  <span css={rangeLabelStyle}>{r.label}</span>
                </div>
              ))}
            </React.Fragment>
          ))}

          <div css={footerStyle}>
            <label css={footerLabelStyle}>
              <input
                type="checkbox"
                checked={showEmpty}
                onChange={e => setShowEmpty(e.target.checked)}
              />
              Exibir classes vazias
            </label>
          </div>
        </div>
      )}

      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={setJimuMapView}
      />
    </div>
  )
}

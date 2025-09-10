/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { React, jsx, css, Global } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import { gerarMapaDistribuicaoEB, coresTipos } from './utils'

const log10 = (x: number) => Math.log10 ? Math.log10(x) : Math.log(x) / Math.LN10

type AmostraItem = {
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
const LIST_TYPES = Object.keys(TYPE_FIELD) // ['lateral', 'testemunho', …]

/** ========= CONFIG =========
 * Use caminho relativo para funcionar em DEV (http://localhost:8080)
 * e também dentro do Explora/EB em homolog/produção sem alterar código.
 */
// const SESSION_ENDPOINT = '/ExPlora/explora'
const DEFAULT_FAIXA_INTERESSE = false

/** Descobre a origem do Portal (página que embeda o widget) */
function resolveExploraOrigin(): string {
  try {
    // quando o widget está em um iframe, o referrer costuma ser a página do Explora
    if (document.referrer) {
      return new URL(document.referrer).origin
    }
  } catch { }
  // fallback: a própria origem do widget
  return window.location.origin
}

/** Monta o endpoint usando o host/origin detectado */
function getSessionEndpoint(): string {
  return '/module-explora/explora' // sempre relativo
}


/** Constrói corpo x-www-form-urlencoded igual ao do Postman */
function buildSessionBody(faixaInteresse: boolean) {
  const p = new URLSearchParams()
  p.set('hdSys', 'novaintcons')
  p.set('hdUC', 'Mapa')
  p.set('hdAcao', 'CarregarMapaDistribuicaoAmostrasContador')
  p.set('hdSessionFilter', 'true')
  p.set('faixaInteresse', String(!!faixaInteresse))
  return p.toString()
}

function normalizeList(raw: any[]): AmostraItem[] {
  return (Array.isArray(raw) ? raw : []).map((r: any) => ({
    codigoPoco: Number(r.codigoPoco ?? r.POCO_CD_POCO ?? r.poco ?? r.codigo ?? 0),
    totalAmostrasLaterais: Number(r.totalAmostrasLaterais ?? r.laterais ?? 0),
    totalCalhas: Number(r.totalCalhas ?? r.calhas ?? 0),
    totalPlugs: Number(r.totalPlugs ?? r.plugs ?? 0),
    totalTestemunhos: Number(r.totalTestemunhos ?? r.testemunhos ?? 0),
    totalWholeCore: Number(r.totalWholeCore ?? r.wholeCore ?? 0)
  })).filter(x => !!x.codigoPoco)
}

function fetchViaParent(body: string): Promise<AmostraItem[]> {
  return new Promise((resolve, reject) => {
    const reqId = Math.random().toString(36).slice(2)
    let targetOrigin = '*'
    try {
      if (document.referrer) targetOrigin = new URL(document.referrer).origin
    } catch { }

    const onMessage = (event: MessageEvent) => {
      const d = event.data || {}
      if (d.reqId !== reqId) return
      if (d.type === 'fetchDistribuicaoAmostras:ok') {
        window.removeEventListener('message', onMessage)
        resolve(normalizeList(d.payload))
      } else if (d.type === 'fetchDistribuicaoAmostras:err') {
        window.removeEventListener('message', onMessage)
        reject(new Error(d.message || 'Erro no fetch via parent'))
      }
    }
    window.addEventListener('message', onMessage)

    window.parent.postMessage({
      type: 'fetchDistribuicaoAmostras',
      url: '/module-explora/explora',   // caminho relativo no Explora
      body,
      reqId
    }, targetOrigin)
  })
}

/** Use SEMPRE via parent em produção (origens diferentes) */
async function fetchDistribuicaoAmostras(faixaInteresse = false): Promise<AmostraItem[]> {
  const body = buildSessionBody(faixaInteresse)
  return fetchViaParent(body)
}


/** ======== UI / estilos que você já tinha ======== */
const MAX_BUBBLE = 40
const globalPanelStyle = css`
  div[role='dialog'][aria-label='mapa-de-distribuicao'] {
    position: absolute !important;
    inset: 50px 12px auto auto !important; /* top:12, right:12 */
    transform: none !important;
    z-index: 9999 !important;
    width: 360px !important;
    height: 550px !important;
    max-height: calc(100% - 24px) !important;
    overflow: auto !important;
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
`
const footerLabelStyle = css`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 0.9rem;
`

/** === cálculo dos breaks para o sumário (mantido) === */
function calcularQuebras(dados: { total: number }[], colorFill: string) {
  const valores = dados.map(p => p.total)
  let min = Math.min(...valores)
  let max = Math.max(...valores)

  const info: { label: string; size: number; cor: string, count: number }[] = []

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

export default function Widget(props: any) {
  // ===== estados =====
  const [jimuMapView, setJimuMapView] = React.useState<JimuMapView>()
  const [categoria, setCategoria] = React.useState<string>('')       // select
  const [tiposSel, setTiposSel] = React.useState<string[]>([])       // checkboxes
  const [showEmpty, setShowEmpty] = React.useState<boolean>(false)
  const [dadosAPI, setDadosAPI] = React.useState<AmostraItem[] | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string>('')

  // dispara a consulta da sessão quando selecionar "Distribuição de amostra"
  React.useEffect(() => {
    console.log('mapa-de-distribuicao novo 25-08: categoria mudou ', categoria)
    let cancelled = false

    async function run() {
      if (categoria !== 'sample') return
      setLoading(true)
      setError('')
      try {
        const data = await fetchDistribuicaoAmostras(DEFAULT_FAIXA_INTERESSE)
        if (!cancelled) {
          setDadosAPI(data)
          // opcional: limpar seleção anterior para forçar o usuário a escolher os tipos
          setTiposSel([])
        }
      } catch (e: any) {
        if (!cancelled) {
          setError(e?.message || 'Falha ao buscar dados')
          setDadosAPI([])
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    run()
    return () => { cancelled = true }
  }, [categoria])

  // helper: gera [{codigoPoco,total}] para 1 tipo, agora usando dados reais
  const gerarArrayTotal = React.useCallback(
    (tipo: string) => (dadosAPI ?? []).map(d => ({
      codigoPoco: d.codigoPoco,
      total: d[TYPE_FIELD[tipo]] ?? 0
    })),
    [dadosAPI]
  )

  // redesenha as camadas quando checkboxes mudam e temos dados
  React.useEffect(() => {
    if (!jimuMapView) return
    const { view } = jimuMapView

    // limpa camadas antigas da nossa distribuição
    LIST_TYPES.forEach(t => {
      const layer = view.map.findLayerById('amostras_' + t)
      if (layer) view.map.remove(layer)
    })

    if (!dadosAPI || dadosAPI.length === 0) return
    // desenha por tipo selecionado
    tiposSel.forEach(tipo => {
      const dados = gerarArrayTotal(tipo)
      const cor = coresTipos[tipo] || 'rgba(0,0,0,0.5)'

      gerarMapaDistribuicaoEB({
        jimuMapView,
        dados,
        colorFill: cor,
        idCamada: 'amostras_' + tipo,
        idLegenda: 'lgd_amostras_' + tipo,
        titleLegenda: tipo.charAt(0).toUpperCase() + tipo.slice(1)
      })
    })
  }, [jimuMapView, tiposSel, gerarArrayTotal, dadosAPI])

  const toggleTipo = (tipo: string) =>
    setTiposSel(prev =>
      prev.includes(tipo) ? prev.filter(t => t !== tipo) : [...prev, tipo]
    )

  const summaryGroups = tiposSel.map(tipo => {
    const dados = gerarArrayTotal(tipo)
    const cor = coresTipos[tipo]
    let rows = calcularQuebras(dados, cor).reverse()
    if (!showEmpty) {
      rows = rows.filter(r => r.count > 0 || r.label.startsWith('| 0 |'))
    }
    return { tipo, rows }
  })

  const hasData = Array.isArray(dadosAPI) && dadosAPI.length > 0

  return (
    <div css={wrapperStyle}>
      <Global styles={globalPanelStyle} />
      <label css={titleStyle}>Selecione a distribuição</label>

      <select
        css={selectStyle}
        value={categoria}
        onChange={e => { setCategoria(e.target.value) }}
      >
        <option value=''>Selecione o tipo</option>
        <option value='sample'>Distribuição de amostra</option>
      </select>

      {categoria === 'sample' && (
        <>
          {loading && <div style={{ marginBottom: 8 }}>Carregando dados da sessão…</div>}
          {!!error && <div style={{ color: '#b00', marginBottom: 8 }}>Erro: {error}</div>}
          {hasData && (
            <div css={listStyle}>
              {LIST_TYPES.map(t => (
                <div key={t} css={checkboxRowStyle} onClick={() => toggleTipo(t)}>
                  <input type='checkbox'
                    checked={tiposSel.includes(t)}
                    readOnly
                    style={{ marginRight: 6 }} />
                  <span>{t.charAt(0).toUpperCase() + t.slice(1)}</span>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {summaryGroups.length > 0 && (
        <div css={summaryListStyle}>
          {summaryGroups.map(group => (
            <React.Fragment key={group.tipo}>
              <div css={css`font-weight:600; margin:4px 0;`}>
                {group.tipo.charAt(0).toUpperCase() + group.tipo.slice(1)}
              </div>

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

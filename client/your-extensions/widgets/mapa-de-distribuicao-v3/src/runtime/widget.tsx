/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { React, jsx, css, Global } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import { gerarMapaDistribuicaoEB, coresTipos } from './utils'

/* ===== Tipos ===== */
type MsgFaixaInteresse = { type: 'faixa-interesse'; codigosPocos: (number | string)[] }

type AmostraItem = {
  codigoPoco: number
  totalAmostrasLaterais: number
  totalCalhas: number
  totalPlugs: number
  totalTestemunhos: number
  totalWholeCore: number
}

/* ===== Config ===== */
const DEFAULT_FAIXA_INTERESSE = false

/* ===== Layout ===== */
const DEFAULT_WIDTH = 360
const PANEL_MARGIN_TOP = 50
const PANEL_MARGIN_RIGHT = 10
const DEFAULT_HEIGHT = 650 // <<< AJUSTE: altura inicial maior

/* ===== Campos por tipo ===== */
const TYPE_FIELD: Record<string, keyof AmostraItem> = {
  lateral: 'totalAmostrasLaterais',
  testemunho: 'totalTestemunhos',
  calha: 'totalCalhas',
  plug: 'totalPlugs',
  'whole core': 'totalWholeCore'
}
const LIST_TYPES = Object.keys(TYPE_FIELD)

const log10 = (x: number) => Math.log10 ? Math.log10(x) : Math.log(x) / Math.LN10

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
  return (Array.isArray(raw) ? raw : [])
    .map((r: any) => ({
      codigoPoco: Number(r.codigoPoco ?? r.POCO_CD_POCO ?? r.poco ?? r.codigo ?? 0),
      totalAmostrasLaterais: Number(r.totalAmostrasLaterais ?? r.laterais ?? 0),
      totalCalhas: Number(r.totalCalhas ?? r.calhas ?? 0),
      totalPlugs: Number(r.totalPlugs ?? r.plugs ?? 0),
      totalTestemunhos: Number(r.totalTestemunhos ?? r.testemunhos ?? 0),
      totalWholeCore: Number(r.totalWholeCore ?? r.wholeCore ?? 0)
    }))
  .filter(x => !!x.codigoPoco)
}
function fetchViaParent(body: string): Promise<AmostraItem[]> {
  return new Promise((resolve, reject) => {
    const reqId = Math.random().toString(36).slice(2)
    let targetOrigin = '*'
    try { if (document.referrer) targetOrigin = new URL(document.referrer).origin } catch {}

    const onMessage = (event: MessageEvent) => {
      const d = (event as any).data || {}
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
    window.parent.postMessage({ type: 'fetchDistribuicaoAmostras', body, reqId }, targetOrigin)
  })
}
async function fetchDistribuicaoAmostras(faixaInteresse = false): Promise<AmostraItem[]> {
  const body = buildSessionBody(faixaInteresse)
  return fetchViaParent(body)
}

/* ===== Estilos ===== */
const MAX_BUBBLE = 40
const globalPanelStyle = css`
  div[role='dialog'][aria-label='mapa-de-distribuicao'],
  div[role='dialog'][aria-label='mapa-de-distribuicao-v2'] {
    position: absolute !important;
    inset: ${PANEL_MARGIN_TOP}px ${PANEL_MARGIN_RIGHT}px auto auto !important;
    transform: none !important;
    z-index: 9999 !important;
    width: ${DEFAULT_WIDTH}px !important;
    height: ${DEFAULT_HEIGHT}px !important;
    max-height: calc(100% - 24px) !important;
    overflow: visible !important;   /* <<< sem scroll no painel */
  }
`;

const legendHeaderStyle = css`font-weight:600;margin:4px 0;font-size:.85rem;line-height:1.1;`
const bubbleBoxStyle = css`width:${MAX_BUBBLE}px;height:${MAX_BUBBLE}px;display:flex;align-items:center;justify-content:center;margin-right:8px;`
const wrapperStyle = css`position:relative;width:100%;height:100%;background:#fff;border:1px solid #ddd;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,.1);padding:16px;overflow:hidden;`
const titleStyle = css`font-weight:600;margin-bottom:4px;display:block;`
const selectStyle = css`width:100%;padding:6px 8px;margin-bottom:12px;border:1px solid #ccc;border-radius:4px;`

/* <<< AJUSTE: container da lista em GRID com wrap automático */
/* container da lista: 2 colunas confortáveis e sem sobreposição */
const listStyle = css`
  /* nada de scroll aqui */
  overflow: visible;                /* <<< sem scroll */
  margin-bottom: 8px;               /* ↓ */
  padding: 4px;                     /* ↓ */
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 4px;

  display: grid;

  /* DUAS LINHAS FIXAS */
  grid-template-rows: repeat(2, minmax(24px, auto));

  /* Preenche por colunas (1ª linha, 2ª linha, depois nova coluna) */
  grid-auto-flow: column;

  /* Colunas estreitas para caber mais conjuntos */
  grid-auto-columns: minmax(105px, 1fr); /* ajuste fino: 100–120px */

  /* Espaços MÍNIMOS entre conjuntos */
  column-gap: 4px;  /* <<< menor espaço horizontal entre conjuntos */
  row-gap: 2px;     /* <<< menor espaço vertical entre as 2 linhas */

  align-items: start;
`;




/* cada item: checkbox + texto LADO A LADO e clicável */
/* cada item: NÃO deixa “vazar” para a coluna ao lado */
const checkboxLabelStyle = css`
  display: inline-grid;
  grid-template-columns: auto 1fr;  /* checkbox | texto */
  align-items: center;

  column-gap: 1px;
  padding: 1px 1px;                 /* ↑ adiciona 1px de altura útil */
  border-radius: 3px;
  cursor: pointer;
  user-select: none;

  min-width: 0;
  box-sizing: border-box;
  overflow: hidden;

  & > * { margin: 0 !important; padding: 0 !important; }

  input[type='checkbox'] {
    width: 14px; height: 14px;
    margin: 0 !important;
    flex: 0 0 auto;
  }

  .lbl {
    min-width: 0;
    overflow: hidden;               /* só horizontal (não corta vertical) */
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .84rem;
    line-height: 1.15;              /* ↑ evita cortar “perna” do G */
    padding-bottom: 1px;            /* ↑ micro-respiro extra */
  }
`;





/* <<< AJUSTE: cada item alinhado, sem margin-bottom (o grid controla os gaps) */
const checkboxRowStyle = css`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const summaryListStyle = css`max-height:300px;overflow-y:auto;margin-top:8px;padding:8px 8px 36px;background:#fff;border:1px solid #ddd;border-radius:4px;position:relative;`
const summaryItemStyle = css`display:flex;align-items:center;margin:2px;`
const rangeLabelStyle = css`font-size:.78rem;line-height:1.1;`

/* checkboxes de rodapé: coluna e próximos */
const footerStyle = css`
  position: sticky;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #eee;
  padding: 4px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`
const footerLabelStyle = css`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-left: .5em;
  cursor: pointer;
  font-size: .9rem;
`
const footerLabelStyleInteresse = css`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-left: .5em;
  cursor: pointer;
  font-size: .9rem;
`

/* ===== Sumário ===== */
function calcularQuebras(dados: { total: number }[], colorFill: string) {
  const valores = dados.map(p => p.total)
  let min = Math.min(...valores)
  let max = Math.max(...valores)

  const info: { label: string; size: number; cor: string; count: number }[] = []
  if (!isFinite(min) || !isFinite(max)) return info

  if (min === 0 && max === 0) {
    info.push({ label: 'Não há dados suficientes', size: 0, cor: colorFill, count: 0 })
  } else {
    const zerados = valores.filter(v => v === 0).length
    const naoZerados = valores.filter(v => v > 0)

    if (zerados > 0) {
      info.push({ label: `| 0 | (${zerados} poço${zerados > 1 ? 's' : ''})`, size: 6, cor: 'rgba(200,200,200,0.3)', count: zerados })
    }

    min = 1
    const n = naoZerados.length
    const numClasses = Math.max(2, Math.round(1 + 3.3 * log10(n || 1)))
    const breaks = Math.ceil((max - min + 1) / numClasses)
    const maxSize = 30

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

/* ===== DOM helpers ===== */
function findClosestDialog(el: HTMLElement | null): HTMLElement | null {
  let cur: HTMLElement | null = el
  while (cur) {
    if (cur.getAttribute && cur.getAttribute('role') === 'dialog') return cur
    cur = cur.parentElement
  }
  return null
}
function getDialogBodies(dlg: HTMLElement): HTMLElement[] {
  return Array.from(dlg.querySelectorAll('.jimu-dialog__body, .jimu-dialog-body, .dialog-body, .modal-body, .jimu-dialog__content, .jimu-dialog__content')) as HTMLElement[]
}
function isDialogHidden(dlg: HTMLElement) {
  const cs = getComputedStyle(dlg)
  return dlg.getAttribute('aria-hidden') === 'true' || cs.display === 'none' || cs.visibility === 'hidden'
}

/* ===== Right anchor ===== */
let _applyingStyle = false
function forcePanelStyle(dlg: HTMLElement) {
  if (_applyingStyle) return
  _applyingStyle = true
  try {
    const s = dlg.style
    if (s.getPropertyValue('position') !== 'absolute') s.setProperty('position', 'absolute', 'important')
    s.removeProperty('left'); s.removeProperty('bottom'); s.removeProperty('transform')
    s.setProperty('inset', 'auto auto auto auto')
    s.setProperty('top', `${PANEL_MARGIN_TOP}px`, 'important')
    s.setProperty('right', `${PANEL_MARGIN_RIGHT}px`, 'important')
    
    if (s.getPropertyValue('width') !== `${DEFAULT_WIDTH}px`) {
      s.setProperty('width', `${DEFAULT_WIDTH}px`, 'important')
    }

    if (s.getPropertyValue('height') !== `${DEFAULT_HEIGHT}px`) s.setProperty('height', `${DEFAULT_HEIGHT}px`, 'important') // <<< AJUSTE: usa DEFAULT_HEIGHT
    if (s.getPropertyValue('max-height') !== 'calc(100% - 24px)') s.setProperty('max-height', 'calc(100% - 24px)', 'important')
    if (s.getPropertyValue('overflow') !== 'visible') s.setProperty('overflow', 'visible', 'important')
    if (s.getPropertyValue('z-index') !== '9999') s.setProperty('z-index', '9999', 'important')
  } finally { _applyingStyle = false }
}
function useForceRightPosition(rootRef: React.RefObject<HTMLDivElement>) {
  React.useEffect(() => {
    let cleanup: (() => void) | null = null
    const apply = () => {
      const dlg =
        (rootRef.current && (rootRef.current.closest('[role="dialog"]') as HTMLElement)) ||
        (document.querySelector('div[role="dialog"][aria-label="mapa-de-distribuicao-v2"]') as HTMLElement) ||
        (document.querySelector('div[role="dialog"][aria-label="mapa-de-distribuicao"]') as HTMLElement)
      if (!dlg) return
      forcePanelStyle(dlg)

      const mo = new MutationObserver((mutations) => {
        if (_applyingStyle) return
        if (mutations.some(m => m.attributeName === 'style')) {
          const s = dlg.style
          const drift = s.getPropertyValue('position') !== 'absolute'
            || s.getPropertyValue('top') !== `${PANEL_MARGIN_TOP}px`
            || s.getPropertyValue('right') !== `${PANEL_MARGIN_RIGHT}px`
            || (s.transform && s.transform !== 'none')
          if (drift) forcePanelStyle(dlg)
        }
      })
      mo.observe(dlg, { attributes: true, attributeFilter: ['style'] })

      let to: any
      const onResize = () => { clearTimeout(to); to = setTimeout(() => forcePanelStyle(dlg), 80) }
      window.addEventListener('resize', onResize)
      cleanup = () => { mo.disconnect(); window.removeEventListener('resize', onResize) }
    }
    requestAnimationFrame(apply)
    setTimeout(apply, 80)
    setTimeout(apply, 300)
    return () => { cleanup?.() }
  }, [rootRef])
}

/* ===== IDs ===== */
const layerIdFor = (tipo: string) => `amostras_${tipo.replace(/\s+/g, '_')}`

/* ===== Map helpers ===== */
function clearAmostras(view: __esri.View) {
  try {
    const all = (view.map as any).allLayers?.toArray?.() ?? view.map.layers?.toArray?.() ?? []
    all.forEach((ly: any) => { const id = String(ly?.id ?? ''); if (id.startsWith('amostras_')) view.map.remove(ly) })
  } catch {}
}
function clearLayerOfTipo(view: __esri.View, tipo: string) {
  try { const lyr = view.map.findLayerById(layerIdFor(tipo)) as any; if (lyr) view.map.remove(lyr) } catch {}
}

/* === Desativa rótulos dos clusters === */
function disableClusterNumbers(lyr: any) {
  try {
    if (!lyr) return
    if (lyr.featureReduction && lyr.featureReduction.type === 'cluster') {
      lyr.featureReduction = { ...lyr.featureReduction, labelsVisible: false }
    }
    if ('labelsVisible' in lyr) lyr.labelsVisible = false as any
    if ('labelingInfo' in lyr) lyr.labelingInfo = []
    if (Array.isArray((lyr as any).sublayers)) {
      ;(lyr as any).sublayers.forEach((sl: any) => disableClusterNumbers(sl))
    }
  } catch { /* noop */ }
}

/* ===== Componente ===== */
export default function Widget(props: any) {
  const [jimuMapView, setJimuMapView] = React.useState<JimuMapView>()
  const [categoria, setCategoria] = React.useState<string>('')        // select
  const [tiposSel, setTiposSel] = React.useState<string[]>([])        // checkboxes
  const [showEmpty, setShowEmpty] = React.useState<boolean>(false)

  // Interesse
  const [withInterest, setWithInterest] = React.useState<boolean>(false)
  const [showWithInterest, setshowWithInterest] = React.useState<boolean>(false)
  const [faixaSet, setFaixaSet] = React.useState<Set<number>>(
    () => new Set<number>((Array.isArray(props?.codigosFaixaInteresse) ? props.codigosFaixaInteresse : [])
      .map((v: any) => Number(v)).filter((v: any) => !isNaN(v)))
  )

  // Bases
  const [dadosFull, setDadosFull] = React.useState<AmostraItem[] | null>(null)
  const [dadosFaixaAPI, setDadosFaixaAPI] = React.useState<AmostraItem[] | null>(null)

  // Loading / erros
  const [loadingFull, setLoadingFull] = React.useState(false)
  const [loadingInterest, setLoadingInterest] = React.useState(false)
  const [errorFull, setErrorFull] = React.useState<string>('')
  const [errorInterest, setErrorInterest] = React.useState<string>('')

  const rootRef = React.useRef<HTMLDivElement>(null)
  useForceRightPosition(rootRef)

  // flag para respeitar escolha do usuário
  const interestManualRef = React.useRef(false)

  /* ======== detecção do log/concatenação ======== */
  React.useEffect(() => {
    const onLogLike = (ev: MessageEvent) => {
      const d: any = ev?.data
      if (d["type"] === 'fetchDistribuicaoAmostras:ok') {
        const s = d.toString()
        const hasTag = /\[Explora\]\[CG\]/i.test(s)
        const existsTrue = /checkbox\s+existe\?\s*true/i.test(s)
        const visibleTrue = /vis.*vel\?\s*true/i.test(s)
        if (d["startWithInterest"]) {
          setshowWithInterest(true)
          if (!interestManualRef.current) setWithInterest(true)
        }
      }
      if (d && typeof d === 'object' && d.type === 'explora-cg-visibility') {
        if (d.exists === true && d.visible === true) {
          setshowWithInterest(true)
          if (!interestManualRef.current) setWithInterest(true)
        }
      }
    }
    window.addEventListener('message', onLogLike)
    return () => window.removeEventListener('message', onLogLike)
  }, [])

  /* Mensagem de config (fallback) */
  React.useEffect(() => {
    const onCfg = (ev: MessageEvent) => {
      const d: any = ev?.data || {}
      if (d?.type === 'config' && ('startWithInterest' in d || 'concatGeologica' in d)) {
        const flag = !!(d.startWithInterest ?? d.concatGeologica)
        setshowWithInterest(flag)
        if (flag && !interestManualRef.current) setWithInterest(true)
      }
    }
    window.addEventListener('message', onCfg)
    return () => window.removeEventListener('message', onCfg)
  }, [])

  /* Recebe faixa de interesse */
  React.useEffect(() => {
    const onMsg = (ev: MessageEvent) => {
      const data = ev?.data as MsgFaixaInteresse
      if (!data || data.type !== 'faixa-interesse' || !Array.isArray(data.codigosPocos)) return
      const nums = data.codigosPocos.map((v) => Number(v)).filter(v => !isNaN(v))
      setFaixaSet(new Set<number>(nums))
      if (nums.length > 0) {
        setshowWithInterest(true)
        if (!interestManualRef.current) setWithInterest(true)
      }
    }
    window.addEventListener('message', onMsg)
    return () => window.removeEventListener('message', onMsg)
  }, [])

  /* Se já vier códigos via props */
  React.useEffect(() => {
    if (faixaSet.size > 0) {
      setshowWithInterest(true)
      if (!interestManualRef.current) setWithInterest(true)
    }
  }, [faixaSet])

  /* Carrega base respeitando withInterest */
  React.useEffect(() => {
    let cancelled = false
    async function run() {
      if (categoria !== 'sample') return
      setLoadingFull(true); setErrorFull('')
      try {
        const data = await fetchDistribuicaoAmostras(withInterest || DEFAULT_FAIXA_INTERESSE)
        if (!cancelled) { setDadosFull(data) }
      } catch (e: any) {
        if (!cancelled) { setErrorFull(e?.message || 'Falha ao buscar dados'); setDadosFull([]) }
      } finally {
        if (!cancelled) setLoadingFull(false)
      }
    }
    run()
    return () => { cancelled = true }
  }, [categoria, withInterest])

  /* Fallback: buscar base do interesse quando necessário */
  React.useEffect(() => {
    let cancelled = false
    async function run() {
      if (categoria !== 'sample') return
      if (!withInterest) return
      if (faixaSet.size > 0) return
      if (dadosFaixaAPI !== null) return
      setLoadingInterest(true); setErrorInterest('')
      try {
        const data = await fetchDistribuicaoAmostras(true)
        if (!cancelled) setDadosFaixaAPI(data)
      } catch (e: any) {
        if (!cancelled) { setErrorInterest(e?.message || 'Falha ao buscar dados do intervalo de interesse'); setDadosFaixaAPI([]) }
      } finally {
        if (!cancelled) setLoadingInterest(false)
      }
    }
    run()
    return () => { cancelled = true }
  }, [categoria, withInterest, faixaSet, dadosFaixaAPI])

  /* Desenho de camadas (e desativação dos números de cluster) */
  React.useEffect(() => {
    const jmv = jimuMapView
    if (!jmv?.view) return

    const base: AmostraItem[] = withInterest
      ? (faixaSet.size > 0
          ? (dadosFull ?? []).filter(x => faixaSet.has(Number(x.codigoPoco)))
          : (dadosFaixaAPI ?? dadosFull ?? []))
      : (dadosFull ?? [])

    if (!Array.isArray(base) || base.length === 0) return
    if (!Array.isArray(tiposSel) || tiposSel.length === 0) return

    const { view } = jmv

    tiposSel.forEach((tipo) => {
      const dados = base
        .map(d => ({ codigoPoco: d.codigoPoco, total: d[TYPE_FIELD[tipo]] ?? 0 }))
        .filter(d => (d.total ?? 0) > 0)

      // limpa camada desse tipo e redesenha se houver dados
      clearLayerOfTipo(view, tipo)
      if (dados.length === 0) return

      const colorFill = coresTipos[tipo] || 'rgba(0,0,0,0.5)'
      const idCamada = layerIdFor(tipo)
      const idLegenda = `lgd_${idCamada}`

      try {
        gerarMapaDistribuicaoEB({
          jimuMapView: jmv,
          dados,
          colorFill,
          idCamada,
          idLegenda,
          titleLegenda: (withInterest ? 'Intervalo de Interesse - ' : '') + (tipo.charAt(0).toUpperCase() + tipo.slice(1)),
          withInterest
        } as any)

        const lyr = view.map.findLayerById(idCamada) as any
        if (lyr) disableClusterNumbers(lyr)

      } catch (e) {
        console.error(`[amostras] falha ao gerar camada ${idCamada}`, e)
      }
    })
  }, [jimuMapView, tiposSel, withInterest, faixaSet, dadosFull, dadosFaixaAPI])

  // Reset e fechar
  const resetUiState = React.useCallback(() => {
    setTiposSel([]); setShowEmpty(false); setWithInterest(false); setCategoria(''); setDadosFull(null); setDadosFaixaAPI(null)
    interestManualRef.current = false
  }, [])
  const handleClose = React.useCallback(() => {
    const view = jimuMapView?.view
    if (view) clearAmostras(view)
    resetUiState()
  }, [jimuMapView, resetUiState])

  // Liga botão Fechar
  React.useEffect(() => {
    const view = jimuMapView?.view; if (!view) return
    const root = rootRef.current; if (!root) return
    const dlg = findClosestDialog(root); if (!dlg) return
    const closeBtn = dlg.querySelector(
      'button[aria-label="Close"], button[title="Close"], button[aria-label="Fechar"], button[title="Fechar"], [data-action="close"]'
    ) as HTMLElement | null
    if (!closeBtn) return
    closeBtn.addEventListener('click', handleClose)
    return () => closeBtn.removeEventListener('click', handleClose)
  }, [jimuMapView, handleClose])

  // Fechou por ocultar diálogo
  React.useEffect(() => {
    const root = rootRef.current; if (!root) return
    const dlg = findClosestDialog(root) as HTMLElement | null
    if (!dlg) return
    let wasVisible = !isDialogHidden(dlg)
    const check = () => {
      const nowHidden = isDialogHidden(dlg)
      if (wasVisible && nowHidden) { handleClose(); wasVisible = false }
      else if (!wasVisible && !nowHidden) { wasVisible = true }
    }
    const mo = new MutationObserver(check)
    mo.observe(dlg, { attributes: true, attributeFilter: ['style', 'class', 'aria-hidden'] })
    check()
    return () => mo.disconnect()
  }, [handleClose])

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [handleClose])

  /** Sumário */
  const summaryGroups = React.useMemo(() => {
    const base: AmostraItem[] = withInterest
      ? (faixaSet.size > 0
          ? (dadosFull ?? []).filter(x => faixaSet.has(Number(x.codigoPoco)))
          : (dadosFaixaAPI ?? dadosFull ?? []))
      : (dadosFull ?? [])

    return tiposSel.map(tipo => {
      const cor = coresTipos[tipo]
      const dados = base.map(d => ({ codigoPoco: d.codigoPoco, total: d[TYPE_FIELD[tipo]] ?? 0 }))
      let rows = calcularQuebras(dados, cor).reverse()
      if (!showEmpty) rows = rows.filter(r => r.count > 0 || r.label.startsWith('| 0 |'))
      return { tipo, rows }
    })
  }, [tiposSel, showEmpty, withInterest, faixaSet, dadosFull, dadosFaixaAPI])

  /* ===== Render ===== */
  const hasAnyBase = (Array.isArray(dadosFull) && dadosFull.length > 0) ||
                     (Array.isArray(dadosFaixaAPI) && dadosFaixaAPI.length > 0)

  return (
    <div css={wrapperStyle} ref={rootRef}>
      <Global styles={globalPanelStyle} />
      <label css={titleStyle}>Selecione a distribuição</label>

      <select css={selectStyle} value={categoria} onChange={e => setCategoria(e.target.value)}>
        <option value=''>Selecione o tipo</option>
        <option value='sample'>Distribuição de amostra</option>
      </select>

      {categoria === 'sample' && (
        <>
          {loadingFull && <div style={{ marginBottom: 8 }}>Carregando base…</div>}
          {!!errorFull && <div style={{ color: '#b00', marginBottom: 8 }}>Erro: {errorFull}</div>}
          {withInterest && loadingInterest && <div style={{ marginBottom: 8 }}>Carregando intervalo de interesse…</div>}
          {withInterest && !!errorInterest && <div style={{ color: '#b00', marginBottom: 8 }}>Erro: {errorInterest}</div>}

          {hasAnyBase && (
            <div css={listStyle}>
              {LIST_TYPES.map(t => (
                // depois
                <label key={t} css={checkboxLabelStyle}>
                  <input
                    type="checkbox"
                    checked={tiposSel.includes(t)}
                    onChange={() =>
                      setTiposSel(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])
                    }
                  />
                  <span className="lbl">{t.charAt(0).toUpperCase() + t.slice(1)}</span>
                </label>
              ))}
            </div>
          )}
        </>
      )}

      {summaryGroups.length > 0 && (
        <div css={summaryListStyle}>
          {summaryGroups.map(group => (
            <React.Fragment key={group.tipo}>
              <div css={legendHeaderStyle}>
                {(withInterest ? 'Intervalo de Interesse - ' : '')}
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
        </div>
      )}

      {(summaryGroups.length > 0 || showWithInterest) && (
        <div css={footerStyle}>
          {summaryGroups.length > 0 && (
            <label css={footerLabelStyle} title="Exibir também classes sem poços">
              <input
                type="checkbox"
                checked={showEmpty}
                onChange={e => setShowEmpty(e.target.checked)}
              />
              Exibir classes vazias
            </label>
          )}

          {showWithInterest && (
            <label css={footerLabelStyleInteresse} title="Quando marcado, aplica o filtro de Intervalo de Interesse (códigos vindos do Explora ou via API)">
              <input
                type="checkbox"
                checked={withInterest}
                onChange={e => {
                  interestManualRef.current = true
                  setWithInterest(e.target.checked)
                }}
              />
              Intervalo de interesse
            </label>
          )}
        </div>
      )}

      <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={setJimuMapView} />
    </div>
  )
} // Melhoramento

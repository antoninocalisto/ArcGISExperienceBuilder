/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { React, jsx, css, Global } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import { gerarMapaDistribuicaoEB, coresTipos } from './utils'
import {
  MINERAL_OPTIONS,
  fetchDistribuicaoMineraisContador,
  fetchMineralLista,
  fetchMineralAgrupador,
  desenharDistribuicaoMinerais,
  aplicarColorizacaoPorAgrupador,
  labelFromValue,
  type MineralTipo,
  type MineralListaItem
} from './Minerals'

/* ===== Tipos ===== */
type MsgFaixaInteresse = { type: 'faixa-interesse'; codigosPocos: (number | string)[] }
type MsgLegendMinerais = { type: 'legend:minerais'; payload: any }
type MsgConfig = { type: 'fetchDistribuicaoAmostras:ok'; startWithInterest?: boolean }
type MsgConfigInterest = { type: 'config'; startWithInterest?: boolean; cgVisible?: boolean }

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
const DEFAULT_HEIGHT = 650

/* ===== Campos por tipo (amostras) ===== */
const TYPE_FIELD: Record<string, keyof AmostraItem> = {
  lateral: 'totalAmostrasLaterais',
  testemunho: 'totalTestemunhos',
  calha: 'totalCalhas',
  plug: 'totalPlugs',
  'whole core': 'totalWholeCore'
}
const LIST_TYPES = Object.keys(TYPE_FIELD)

const log10 = (x: number) => (Math.log10 ? Math.log10(x) : Math.log(x) / Math.LN10)

/* ===== Fetch base (amostras) ===== */
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
    .filter((x) => !!x.codigoPoco)
}
function fetchViaParent(body: string): Promise<AmostraItem[]> {
  console.groupCollapsed('[amostras] fetchViaParent')
  console.log('[amostras] body', body)

  return new Promise((resolve, reject) => {
    const reqId = Math.random().toString(36).slice(2)

    let targetOrigin = '*'
    try {
      if (document.referrer) targetOrigin = new URL(document.referrer).origin
    } catch {}

    const OK = 'fetchDistribuicaoAmostras:ok'
    const ERR = 'fetchDistribuicaoAmostras:err'

    const onMessage = (event: MessageEvent) => {
      const d: any = event?.data || {}
      if (!d || d.reqId !== reqId) return

      console.log('[amostras] resposta do pai', {
        receivedType: d.type,
        expectedOk: OK,
        expectedErr: ERR,
        origin: event.origin,
        sameOrigin: event.origin === window.location.origin,
        reqId,
      })

      if (d.type === OK) {
        try { clearTimeout(to) } catch {}
        window.removeEventListener('message', onMessage)
        const count = Array.isArray(d.payload) ? d.payload.length : null
        console.log('[amostras] OK — normalizando payload', { count, sample: Array.isArray(d.payload) ? d.payload.slice(0, 3) : d.payload })
        console.groupEnd()
        resolve(normalizeList(d.payload))
      } else if (d.type === ERR) {
        try { clearTimeout(to) } catch {}
        window.removeEventListener('message', onMessage)
        console.warn('[amostras] ERRO do pai', d.message)
        console.groupEnd()
        reject(new Error(d.message || 'Erro no fetch via parent'))
      } else {
        // Mensagem com reqId certo mas type diferente — apenas ignore (pode ser outra pipeline)
        console.warn('[amostras] ignorando mensagem com reqId válido porém type inesperado:', d.type)
      }
    }

    window.addEventListener('message', onMessage)

    const to = window.setTimeout(() => {
      window.removeEventListener('message', onMessage)
      console.warn('[amostras] TIMEOUT aguardando resposta do pai', { reqId, expected: [OK, ERR] })
      console.groupEnd()
      reject(new Error('Timeout aguardando resposta do pai (amostras)'))
    }, 20000)

    window.parent?.postMessage({ type: 'fetchDistribuicaoAmostras', body, reqId }, targetOrigin)
    console.log('[amostras] postMessage -> PAI', {
      type: 'fetchDistribuicaoAmostras',
      targetOrigin,
      reqId
    })
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
    overflow: visible !important;
  }
`

const legendHeaderStyle = css`font-weight:600;margin:4px 0;font-size:.85rem;line-height:1.1;`
const bubbleBoxStyle = css`width:${MAX_BUBBLE}px;height:${MAX_BUBBLE}px;display:flex;align-items:center;justify-content:center;margin-right:8px;`
const wrapperStyle = css`position:relative;width:100%;height:100%;background:#fff;border:1px solid #ddd;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,.1);padding:16px;overflow:hidden;`
const titleStyle = css`font-weight:600;margin-bottom:4px;display:block;`
const selectStyle = css`width:100%;padding:6px 8px;margin-bottom:12px;border:1px solid #ccc;border-radius:4px;`

/** Grid usada para opções (amostras) – 2 colunas, fluxo por linhas (mantém Testemunhos dentro do bloco cinza) */
const listStyle = css`
  overflow: visible;
  margin-bottom: 8px;
  padding: 4px;
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 1fr));
  grid-auto-rows: minmax(24px, auto);
  grid-auto-flow: row;
  column-gap: 4px;
  row-gap: 2px;
  align-items: start;
`

/** rótulo compacto serve para checkbox e radio */
const checkboxLabelStyle = css`
  display: inline-grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 6px;
  padding: 1px 2px;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  min-width: 0;
  box-sizing: border-box;
  overflow: hidden;

  & > * { margin: 0 !important; padding: 0 !important; }
  input[type='checkbox'], input[type='radio'] { width: 14px; height: 14px; margin: 0 !important; flex: 0 0 auto; }

  .lbl { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: .84rem; line-height: 1.15; padding-bottom: 1px; }
`

/** Grid dos rádios de minerais (2 colunas / 3 linhas) */
const mineralsListStyle = css`
  overflow: visible;
  margin-bottom: 8px;
  padding: 4px;
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 4px;

  display: grid;
  grid-template-columns: minmax(140px, 1fr) minmax(140px, 1fr);
  grid-template-rows: repeat(3, minmax(24px, auto));
  column-gap: 4px;
  row-gap: 2px;
  align-items: start;

  /* DRX-Total (Row1, Col1) */
  label[data-key='DRX-TOT'] { grid-column: 1; grid-row: 1; }
  /* Qemscan-Massa (Row1, Col2) */
  label[data-key='MASSA']   { grid-column: 2; grid-row: 1; }
  /* DRX-Argilominerais (Row2, Col1) */
  label[data-key='DRX-ARG'] { grid-column: 1; grid-row: 2; }
  /* Qemscan-Área (Row2, Col2) */
  label[data-key='AREA']    { grid-column: 2; grid-row: 2; }
  /* "Todas as Análises" (Row3, ocupando 2 colunas) */
  label[data-key='todasAnalises'] { grid-column: 1 / span 2; grid-row: 3; }
`

const summaryListStyle = css`max-height:300px;overflow-y:auto;margin-top:8px;padding:8px 8px 36px;background:#fff;border:1px solid #ddd;border-radius:4px;position:relative;`
const summaryItemStyle = css`display:flex;align-items:center;margin:2px;`
const rangeLabelStyle = css`font-size:.78rem;line-height:1.1;`

const footerStyle = css`position: sticky; bottom: 0; background: #fff; border-top: 1px solid #eee; padding: 4px 0; display: flex; flex-direction: column; align-items: flex-start; gap: 6px;`
const footerLabelStyle = css`display:flex;align-items:center;gap:6px;padding-left:.5em;cursor:pointer;font-size:.9rem;`
const footerLabelStyleInteresse = footerLabelStyle

/* ===== Sumário (amostras/ minerais) ===== */
function calcularQuebras(dados: { total: number }[], colorFill: string) {
  const valores = dados.map((p) => Number(p.total) || 0)
  let min = Math.min(...valores)
  let max = Math.max(...valores)

  const info: { label: string; size: number; cor: string; count: number }[] = []
  if (!isFinite(min) || !isFinite(max)) return info

  if (min === 0 && max === 0) {
    info.push({ label: 'Não há dados suficientes', size: 0, cor: colorFill, count: 0 })
  } else {
    const zerados = valores.filter((v) => v === 0).length
    const naoZerados = valores.filter((v) => v > 0)

    if (zerados > 0) {
      info.push({ label: `| 0 | (${zerados} poço${zerados > 1 ? 's' : ''})`, size: 6, cor: 'rgba(200,200,200,0.3)', count: zerados })
    }

    min = 1
    const n = naoZerados.length
    const numClasses = Math.max(2, Math.round(1 + 3.3 * log10(n || 1)))
    const breaks = Math.ceil((max - min + 1) / Math.max(1, numClasses))
    const maxSize = MAX_BUBBLE

    for (let i = 0; i < numClasses; i++) {
      const minValue = min + i * breaks
      const maxValue = min + (i + 1) * breaks - 1
      if (minValue > max) break
      const count = naoZerados.filter((v) => v >= minValue && v <= maxValue).length
      const label = `${minValue} |---| ${maxValue} (${count} poço${count > 1 ? 's' : ''})`
      const size = 6 + i * (maxSize / numClasses)
      info.push({ label, size, cor: colorFill, count })
    }
  }
  return info
}

/* ===== Helpers dialog/posicionamento ===== */
function findClosestDialog(el: HTMLElement | null): HTMLElement | null {
  let cur: HTMLElement | null = el
  while (cur) { if (cur.getAttribute && cur.getAttribute('role') === 'dialog') return cur; cur = cur?.parentElement ?? null }
  return null
}
function isDialogHidden(dlg: HTMLElement) {
  const cs = getComputedStyle(dlg)
  return dlg.getAttribute('aria-hidden') === 'true' || cs.display === 'none' || cs.visibility === 'hidden'
}
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
    if (s.getPropertyValue('width') !== `${DEFAULT_WIDTH}px`) s.setProperty('width', `${DEFAULT_WIDTH}px`, 'important')
    if (s.getPropertyValue('height') !== `${DEFAULT_HEIGHT}px`) s.setProperty('height', `${DEFAULT_HEIGHT}px`, 'important')
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
        if (mutations.some((m) => m.attributeName === 'style')) {
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
    requestAnimationFrame(apply); setTimeout(apply, 80); setTimeout(apply, 300)
    return () => { cleanup?.() }
  }, [rootRef])
}

const layerIdForSample = (tipo: string) => `amostras_${tipo.replace(/\s+/g, '_')}`
function clearAmostras(view: __esri.View) {
  try {
    const all = (view.map as any).allLayers?.toArray?.() ?? view.map.layers?.toArray?.() ?? []
    all.forEach((ly: any) => { const id = String(ly?.id ?? ''); if (id.startsWith('amostras_')) view.map.remove(ly) })
  } catch {}
}
function clearMinerais(view: __esri.View) {
  try {
    const all = (view.map as any).allLayers?.toArray?.() ?? view.map.layers?.toArray?.() ?? []
    const toRemove: any[] = []
    all.forEach((ly: any) => {
      const id = String(ly?.id ?? '')
      if (/^minerais_/i.test(id)) toRemove.push(ly)
    })
    toRemove.forEach(ly => view.map.remove(ly))
    console.log('[widget] clearMinerais -> removidas', toRemove.map(l => l.id))
  } catch (e) {
    console.warn('[widget] clearMinerais falhou', e)
  }
}

function clearLayerOfTipo(view: __esri.View, tipo: string) {
  try { const lyr = view.map.findLayerById(layerIdForSample(tipo)) as any; if (lyr) view.map.remove(lyr) } catch {}
}
function disableClusterNumbers(lyr: any) {
  try {
    if (!lyr) return
    if (lyr.featureReduction && lyr.featureReduction.type === 'cluster') {
      lyr.featureReduction = { ...lyr.featureReduction, labelsVisible: false }
    }
    if ('labelsVisible' in lyr) (lyr as any).labelsVisible = false
    if ('labelingInfo' in lyr) (lyr as any).labelingInfo = []
    if (Array.isArray((lyr as any).sublayers)) (lyr as any).sublayers.forEach((sl: any) => disableClusterNumbers(sl))
  } catch {}
}


/* ===== Componente ===== */
export default function Widget(props: any) {
  const [jimuMapView, setJimuMapView] = React.useState<JimuMapView>()
  const [categoria, setCategoria] = React.useState<string>('') // 'sample' | 'minerals'
  const [tiposSel, setTiposSel] = React.useState<string[]>([]) // amostras (checkboxes)
  const [showEmpty, setShowEmpty] = React.useState<boolean>(false)

  // Interesse
  const [withInterest, setWithInterest] = React.useState<boolean>(false)
  const [showWithInterest, setshowWithInterest] = React.useState<boolean>(false)
  const [faixaSet, setFaixaSet] = React.useState<Set<number>>(
    () => new Set<number>((Array.isArray(props?.codigosFaixaInteresse) ? props.codigosFaixaInteresse : [])
      .map((v: any) => Number(v)).filter((v: any) => !isNaN(v)))
  )

  // Bases (amostras)
  const [dadosFull, setDadosFull] = React.useState<AmostraItem[] | null>(null)
  const [dadosFaixaAPI, setDadosFaixaAPI] = React.useState<AmostraItem[] | null>(null)

  // Minerais
  const [mineralAnalise, setMineralAnalise] = React.useState<MineralTipo | ''>('') // rádio (DRX/Qemscan/Todas)
  const [listaMinerais, setListaMinerais] = React.useState<MineralListaItem[]>([])
  const [buscaMineral, setBuscaMineral] = React.useState('')
  const [mineralSelecionado, setMineralSelecionado] = React.useState<MineralListaItem | null>(null)
  const [agrupador, setAgrupador] = React.useState<'analise' | 'media' | 'maxima' | ''>('') // agrupadores
  const [dadosMinerais, setDadosMinerais] = React.useState<import('./Minerals').MineralItem[] | null>(null)
  const [loadingMinerais, setLoadingMinerais] = React.useState(false)
  const [errorMinerais, setErrorMinerais] = React.useState('')

  // Loading / erros (amostras)
  const [loadingFull, setLoadingFull] = React.useState(false)
  const [loadingInterest, setLoadingInterest] = React.useState(false)
  const [errorFull, setErrorFull] = React.useState<string>('')
  const [errorInterest, setErrorInterest] = React.useState<string>('')

  const rootRef = React.useRef<HTMLDivElement>(null)
  useForceRightPosition(rootRef)

  const interestManualRef = React.useRef(false)

  /* >>> Sinaliza ao PAI que o widget está pronto (para ele mandar codigos/config) */
  React.useEffect(() => {
    let targetOrigin = '*'
    try { if (document.referrer) targetOrigin = new URL(document.referrer).origin } catch {}
    // avisa que o widget está pronto
    window.parent?.postMessage({ type: 'widgetReady' }, targetOrigin)
    console.log('[widget] widgetReady enviado para', targetOrigin)
  }, [])

  /* Recebe mensagens do PAI (faixa-interesse, legend:minerais, config) */
  // Mensagens vindas do PAI (Explora): faixa-interesse, config, legend:minerais
React.useEffect(() => {
  console.log('[widget][msg] listener ON — aguardando mensagens do pai…', {
    selfOrigin: window.location.origin,
    referrer: document.referrer || '(sem referrer)'
  })

  const onMsg = (ev: MessageEvent) => {
    const data = ev?.data as any
    if (!data || !data.type) return

    console.groupCollapsed(`[widget][msg] recebido type="${data.type}"`)
    console.log('origin:', ev.origin, 'source===parent?', ev.source === window.parent)
    console.log('payload bruto:', data)

    if (data.type === 'faixa-interesse' && Array.isArray((data as MsgFaixaInteresse).codigosPocos)) {
      const nums = (data as MsgFaixaInteresse).codigosPocos
        .map((v) => Number(v))
        .filter((v) => !isNaN(v))
      console.log('[widget][msg] faixa-interesse => normalizados:', {
        recebidos: (data as MsgFaixaInteresse).codigosPocos.length,
        validos: nums.length,
        preview: nums.slice(0, 10)
      })

      // estado atual antes de decidir
      console.log('[widget][msg] estado ANTES (faixa-interesse):', {
        showWithInterest,
        withInterest,
        interestManual: interestManualRef.current
      })

      // aplica o Set de códigos
      setFaixaSet(new Set<number>(nums))

      // só exibimos/checamos se o pai quer que apareça (respeito é tratado no outro useEffect);
      // aqui apenas "propomos" exibir caso venha faixa com elementos
      if (nums.length > 0) {
        console.log('[widget][msg] haverá tentativa de exibir/checar o intervalo (dependendo do outro efeito e do manualRef)')
        setshowWithInterest(true)
        if (!interestManualRef.current) {
          console.log('[widget][msg] marcando withInterest automaticamente (usuário ainda não alterou manualmente)')
          setWithInterest(true)
        } else {
          console.log('[widget][msg] NÃO marcamos withInterest (usuário já mexeu manualmente)')
        }
      } else {
        console.log('[widget][msg] lista da faixa está vazia — não alteramos withInterest')
      }

      // loga o estado “logo após” o ciclo atual de render (melhor visibilidade)
      setTimeout(() => {
        console.log('[widget][msg] estado APÓS setState (faixa-interesse):', {
          showWithInterest,
          withInterest,
          interestManual: interestManualRef.current
        })
      }, 0)
      console.groupEnd()
      return
    }

    if (data.type === 'fetchDistribuicaoAmostras:ok') {
      const cfg = data as MsgConfig
      console.log('[widget][msg] fetchDistribuicaoAmostras:ok recebida:', cfg)

      //Ajustando intervalo de interesse para aparecer
      setWithInterest(cfg['message']['visible'])
      setshowWithInterest((cfg['message']['visible']))

      console.log('[widget][msg] estado ANTES (fetchDistribuicaoAmostras:ok):', {
        showWithInterest,
        withInterest,
        interestManual: interestManualRef.current
      })

      if (cfg.startWithInterest) {
        console.log('[widget][msg] pai sinalizou startWithInterest=TRUE -> mostrar checkbox')
        setshowWithInterest(true)
        if (!interestManualRef.current) {
          console.log('[widget][msg] marcando withInterest porque usuário não mexeu manualmente')
          setWithInterest(true)
        } else {
          console.log('[widget][msg] NÃO marcamos withInterest (respeitando escolha manual prévia)')
        }
      } else {
        console.log('[widget][msg] startWithInterest ausente/falso — não forçamos nada aqui')
      }

      setTimeout(() => {
        console.log('[widget][msg] estado APÓS setState (fetchDistribuicaoAmostras:ok):', {
          showWithInterest,
          withInterest,
          interestManual: interestManualRef.current
        })
      }, 0)
      console.groupEnd()
      return
    }

    if (data.type === 'legend:minerais' || data.type === 'fetchDistribuicaoMinerais:ok') {
      const _msg = data as MsgLegendMinerais
      console.log('[widget][msg] legend:minerais payload:', _msg?.payload)
      console.groupEnd()
      return
    }

    console.log("TESTE: ", data)

    if (data.type === 'config' || data.type === 'fetchDistribuicaoMinerais:ok') {
      const cfg = data as MsgConfig
      console.log('[widget][msg] config recebida:', cfg)
      console.log('[widget][msg] **cgVisible do pai** =', cfg.cgVisible) // <<< imprime o 'visible'

      // Mostrar/ocultar o checkbox de Intervalo de Interesse de acordo com a visibilidade no pai
      if (cfg.cgVisible === true) {
        setshowWithInterest(true)
        // Se pai também pediu para começar marcado e o usuário ainda não mexeu:
        if (cfg.startWithInterest && !interestManualRef.current) {
          setWithInterest(true)
        }
      } else {
        // Não mostrar (nem marcado) quando o checkbox não é visível no pai
        setshowWithInterest(false)
        if (!interestManualRef.current) setWithInterest(false)
      }

      // só pra depuração do resultado final neste tick:
      setTimeout(() => {
        console.log('[widget][msg] estado pós-config:', {
          showWithInterest,
          withInterest,
          interestManual: interestManualRef.current
        })
      }, 0)

      console.groupEnd()
      return
    }


    console.log('[widget][msg] tipo não tratado:', data.type)
    console.groupEnd()
  }

  window.addEventListener('message', onMsg)
  return () => {
    window.removeEventListener('message', onMsg)
    console.log('[widget][msg] listener OFF — removido na desmontagem do efeito')
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


  React.useEffect(() => {
    if (faixaSet.size > 0) {
      setshowWithInterest(true)
      if (!interestManualRef.current) setWithInterest(true)
    }
  }, [faixaSet])

  /* ====== AMOSTRAS: carregar base ====== */
  React.useEffect(() => {
    let cancelled = false
    async function run() {
      console.groupCollapsed('[widget] efeito amostras:carregar base')
      console.log({ categoria, withInterest })
      if (categoria !== 'sample') { console.log('skip'); console.groupEnd(); return }
      setLoadingFull(true); setErrorFull('')
      try {
        const data = await fetchDistribuicaoAmostras(withInterest || DEFAULT_FAIXA_INTERESSE)
        if (!cancelled) { setDadosFull(data); console.log('[widget] amostras base', data?.length) }
      } catch (e: any) {
        console.error('[widget] erro base amostras', e)
        if (!cancelled) { setErrorFull(e?.message || 'Falha ao buscar dados'); setDadosFull([]) }
      } finally {
        if (!cancelled) { setLoadingFull(false); console.groupEnd() }
      }
    }
    run()
    return () => { cancelled = true }
  }, [categoria, withInterest])

  React.useEffect(() => {
    let cancelled = false
    async function run() {
      console.groupCollapsed('[widget] efeito amostras:carregar faixa API')
      console.log({ categoria, withInterest, faixaSetSize: faixaSet.size, hasDadosFaixaAPI: dadosFaixaAPI !== null })
      if (categoria !== 'sample') { console.log('skip categoria'); console.groupEnd(); return }
      if (!withInterest) { console.log('skip sem interesse'); console.groupEnd(); return }
      if (faixaSet.size > 0) { console.log('skip faixa vinda do pai'); console.groupEnd(); return }
      if (dadosFaixaAPI !== null) { console.log('skip já carregado'); console.groupEnd(); return }
      setLoadingInterest(true); setErrorInterest('')
      try {
        const data = await fetchDistribuicaoAmostras(true)
        if (!cancelled) { setDadosFaixaAPI(data); console.log('[widget] amostras faixa API', data?.length) }
      } catch (e: any) {
        console.error('[widget] erro faixa API', e)
        if (!cancelled) { setErrorInterest(e?.message || 'Falha ao buscar dados do intervalo de interesse'); setDadosFaixaAPI([]) }
      } finally {
        if (!cancelled) { setLoadingInterest(false); console.groupEnd() }
      }
    }
    run()
    return () => { cancelled = true }
  }, [categoria, withInterest, faixaSet, dadosFaixaAPI])

  /* ====== AMOSTRAS: desenhar ====== */
  React.useEffect(() => {
    console.groupCollapsed('[widget] efeito amostras:desenhar')
    const jmv = jimuMapView
    if (!jmv?.view) { console.log('skip sem view'); console.groupEnd(); return }
    if (categoria !== 'sample') { console.log('skip categoria'); console.groupEnd(); return }

    const base: AmostraItem[] = withInterest
      ? (faixaSet.size > 0
          ? (dadosFull ?? []).filter(x => faixaSet.has(Number(x.codigoPoco)))
          : (dadosFaixaAPI ?? dadosFull ?? []))
      : (dadosFull ?? [])

    console.log('[widget] base size', base.length, 'tiposSel', tiposSel)
    if (!Array.isArray(base) || base.length === 0) { console.log('skip base vazia'); console.groupEnd(); return }
    if (!Array.isArray(tiposSel) || tiposSel.length === 0) { console.log('skip sem tipos'); console.groupEnd(); return }

    const { view } = jmv

    tiposSel.forEach((tipo) => {
      const dados = base
        .map(d => ({ codigoPoco: d.codigoPoco, total: d[TYPE_FIELD[tipo]] ?? 0 }))
        .filter(d => (d.total ?? 0) > 0)

      console.log(`[widget] tipo=${tipo} dados`, dados.length)

      clearLayerOfTipo(view, tipo)
      if (dados.length === 0) return

      const colorFill = coresTipos[tipo] || 'rgba(0,0,0,0.5)'
      const idCamada = layerIdForSample(tipo)
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
        console.log('[widget] camada criada?', !!lyr, idCamada)
        if (lyr) disableClusterNumbers(lyr)
      } catch (e) {
        console.error(`[amostras] falha ao gerar camada ${idCamada}`, e)
      }
    })
    console.groupEnd()
  }, [jimuMapView, tiposSel, withInterest, faixaSet, dadosFull, dadosFaixaAPI, categoria])

  /* ====== MINERAIS: ao mudar o radio de análise -> busca CONTADOR e LISTA ====== */
  React.useEffect(() => {
    let cancelled = false
    async function run() {
      console.groupCollapsed('[widget] efeito minerais:radio')
      console.log({ categoria, mineralAnalise, withInterest })
      if (categoria !== 'minerals') { console.log('skip categoria'); console.groupEnd(); return }
      if (!mineralAnalise) { console.log('skip sem analise'); console.groupEnd(); return }

      // reset UI dependente
      setMineralSelecionado(null)
      setAgrupador('')
      setListaMinerais([])
      setBuscaMineral('')
      setErrorMinerais('')
      setLoadingMinerais(true)

      try {
        const [contador, lista] = await Promise.all([
          fetchDistribuicaoMineraisContador(mineralAnalise as MineralTipo, withInterest),
          fetchMineralLista(mineralAnalise as MineralTipo, withInterest)
        ])
        if (!cancelled) {
          console.log('[widget] contador/ lista recebidos', contador?.length, lista?.length)
          setDadosMinerais(contador)
          setListaMinerais(lista)
        }
      } catch (e: any) {
        console.error('[widget] erro fetch minerais', e)
        if (!cancelled) {
          setErrorMinerais(e?.message || 'Falha ao buscar minerais')
          setDadosMinerais([])
          setListaMinerais([])
        }
      } finally {
        if (!cancelled) { setLoadingMinerais(false); console.groupEnd() }
      }
    }
    run()
    return () => { cancelled = true }
  }, [categoria, mineralAnalise, withInterest])

  /* ====== MINERAIS: desenhar base (contador) quando chega ====== */
  React.useEffect(() => {
    console.groupCollapsed('[widget] efeito minerais:desenhar base')
    console.log({ categoria, hasJMV: !!jimuMapView?.view, mineralAnalise, dadosMineraisLen: dadosMinerais?.length, withInterest, faixaSetSize: faixaSet.size })
    try {
      if (categoria !== 'minerals') return console.log('skip categoria')
      if (!jimuMapView?.view) return console.log('skip view')
      if (!mineralAnalise) return console.log('skip mineralAnalise')
      if (!Array.isArray(dadosMinerais)) return console.log('skip dadosMinerais null')

      const base = (withInterest && faixaSet.size > 0)
        ? dadosMinerais.filter(d => faixaSet.has(Number(d.codigoPoco)))
        : dadosMinerais

      console.log('[widget] base para desenhar', base.length)
      if (base.length === 0) return console.warn('[widget] base vazia — nada a plottar')

      desenharDistribuicaoMinerais(jimuMapView, base, mineralAnalise as MineralTipo, withInterest)
    } finally {
      console.groupEnd()
    }
  }, [jimuMapView, categoria, mineralAnalise, dadosMinerais, withInterest, faixaSet])

  /* ====== MINERAIS: ao escolher MINERAL + AGRUPADOR -> aplica colorização stops ====== */
  React.useEffect(() => {
    let cancelled = false
    async function run() {
      console.groupCollapsed('[widget] efeito minerais:colorização agrupador')
      console.log({ categoria, hasJMV: !!jimuMapView?.view, mineralAnalise, mineralSelecionado, agrupador, withInterest })
      if (categoria !== 'minerals' || !jimuMapView?.view || !mineralAnalise || !mineralSelecionado || !agrupador) { console.log('skip'); console.groupEnd(); return }

      try {
        const dados = await fetchMineralAgrupador(
          mineralAnalise as MineralTipo,
          mineralSelecionado.nomeResumidoMineral,
          withInterest
        )
        console.log('[widget] agrupador dados', dados?.length, dados?.slice?.(0,10))
        if (!cancelled) {
          await aplicarColorizacaoPorAgrupador(
            jimuMapView,
            mineralAnalise as MineralTipo,
            dados,
            agrupador as 'analise' | 'media' | 'maxima'
          )
          console.log('[widget] colorização aplicada')
        }
      } catch (e) {
        console.error('Falha ao aplicar colorização por agrupador', e)
      } finally {
        console.groupEnd()
      }
    }
    run()
    return () => { cancelled = true }
  }, [jimuMapView, categoria, mineralAnalise, mineralSelecionado, agrupador, withInterest])

  // Reset/fechar
  const resetUiState = React.useCallback(() => {
    setTiposSel([]); setShowEmpty(false); setWithInterest(false); setCategoria('');
    setDadosFull(null); setDadosFaixaAPI(null);
    setMineralAnalise(''); setDadosMinerais(null); setErrorMinerais(''); setLoadingMinerais(false);
    setListaMinerais([]); setBuscaMineral(''); setMineralSelecionado(null); setAgrupador('');
    interestManualRef.current = false
  }, [])
  const handleClose = React.useCallback(() => {
    const view = jimuMapView?.view
    if (view) {
    clearAmostras(view)
    clearMinerais(view) // <<< também remove as camadas de minerais
  }
    resetUiState()
  }, [jimuMapView, resetUiState])

  // Fechar por botão/ocultar diálogo (corrigido: seletor com aspas fechadas corretamente)
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

  /** Sumário (amostras apenas) */
  const summaryGroups = React.useMemo(() => {
    if (categoria !== 'sample') return []
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
  }, [tiposSel, showEmpty, withInterest, faixaSet, dadosFull, dadosFaixaAPI, categoria])

  /** Sumário (minerais — Total de Amostras/Coletas) */
  const summaryMinerals = React.useMemo(() => {
    if (categoria !== 'minerals') return null
    if (!mineralAnalise) return null
    if (!Array.isArray(dadosMinerais) || dadosMinerais.length === 0) return null

    const base = (withInterest && faixaSet.size > 0)
      ? dadosMinerais.filter(d => faixaSet.has(Number(d.codigoPoco)))
      : dadosMinerais

    const title = (withInterest ? 'Intervalo de Interesse - ' : '') + labelFromValue(mineralAnalise as MineralTipo)
    if (!base.length) return { title, rows: [] as any[] }

    const color = 'rgb(253,142,55)' // mesma cor usada na camada de minerais
    const dados = base.map(d => ({ total: d.totalMinerais }))
    let rows = calcularQuebras(dados, color).reverse()
    if (!showEmpty) rows = rows.filter(r => r.count > 0 || r.label.startsWith('| 0 |'))

    return { title, rows }
  }, [categoria, mineralAnalise, dadosMinerais, withInterest, faixaSet, showEmpty])

  const hasAnyBase =
    (Array.isArray(dadosFull) && dadosFull.length > 0) ||
    (Array.isArray(dadosFaixaAPI) && dadosFaixaAPI.length > 0)

  // ===== filtros para o search de minerais
  const listaFiltrada = React.useMemo(() => {
    const q = (buscaMineral || '').normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()
    return (listaMinerais || []).filter(m => {
      const nome = (m.nomeMineral || '').normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()
      return nome.includes(q)
    })
  }, [listaMinerais, buscaMineral])

  // primeiras 4 opções + a terceira linha (Última)
  const FIRST_FOUR = MINERAL_OPTIONS.slice(0, 4)
  const LAST_ONE = MINERAL_OPTIONS.slice(4)

  return (
    <div css={wrapperStyle} ref={rootRef}>
      <Global styles={globalPanelStyle} />
      <label css={titleStyle}>Selecione a distribuição</label>

      <select css={selectStyle} value={categoria} onChange={e => setCategoria(e.target.value)}>
        <option value=''>Selecione o tipo</option>
        <option value='sample'>Distribuição de amostras</option>
        <option value='minerals'>Distribuição de Minerais</option>
      </select>

      {/* ======== UI: AMOSTRAS ======== */}
      {categoria === 'sample' && (
        <>
          {loadingFull && <div style={{ marginBottom: 8 }}>Carregando base…</div>}
          {!!errorFull && <div style={{ color: '#b00', marginBottom: 8 }}>Erro: {errorFull}</div>}
          {withInterest && loadingInterest && <div style={{ marginBottom: 8 }}>Carregando intervalo de interesse…</div>}
          {withInterest && !!errorInterest && <div style={{ color: '#b00', marginBottom: 8 }}>Erro: {errorInterest}</div>}

          {hasAnyBase && (
            <div css={listStyle}>
              {LIST_TYPES.map(t => (
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

      {/* ======== UI: MINERAIS ======== */}
      {categoria === 'minerals' && (
        <>
          <div css={mineralsListStyle}>
            {MINERAL_OPTIONS.map(opt => (
              <label
                key={opt.value}
                css={checkboxLabelStyle}
                data-key={opt.value}   // DRX-TOT | MASSA | DRX-ARG | AREA | todasAnalises
              >
                <input
                  type="radio"
                  name="mineral-analise"
                  checked={mineralAnalise === opt.value}
                  onChange={() => setMineralAnalise(opt.value)}
                />
                <span className="lbl">{opt.label}</span>
              </label>
            ))}
          </div>

          {loadingMinerais && <div style={{ marginBottom: 8 }}>Carregando minerais…</div>}
          {!!errorMinerais && <div style={{ color: '#b00', marginBottom: 8 }}>Erro: {errorMinerais}</div>}

          {/* (sua UI de busca/lista/agrupadores permanece aqui) */}
        </>
      )}

      {/* ======== Sumário AMOSTRAS ======== */}
      {categoria === 'sample' && summaryGroups.length > 0 && (
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

      {/* ======== Sumário MINERAIS (Total de Amostras/Coletas) ======== */}
      {categoria === 'minerals' && summaryMinerals && (
        <div css={summaryListStyle}>
          <div css={legendHeaderStyle}>{summaryMinerals.title}</div>
          {summaryMinerals.rows.map((r, idx) => (
            <div key={`min-${idx}`} css={summaryItemStyle}>
              <div css={bubbleBoxStyle}>
                <svg width={r.size} height={r.size}>
                  <circle cx={r.size/2} cy={r.size/2} r={r.size/2} fill={r.cor} />
                </svg>
              </div>
              <span css={rangeLabelStyle}>{r.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* ======== Rodapé comum ======== */}
      {(summaryGroups.length > 0 || summaryMinerals || showWithInterest) && (
        <div css={footerStyle}>
          {((categoria === 'sample' && summaryGroups.length > 0) ||
            (categoria === 'minerals' && !!summaryMinerals)) && (
            <label css={footerLabelStyle} title="Exibir também classes sem poços">
              <input type="checkbox" checked={showEmpty} onChange={e => setShowEmpty(e.target.checked)} />
              Exibir classes vazias
            </label>
          )}

          {showWithInterest && (
            <label css={footerLabelStyleInteresse} title="Quando marcado, aplica o filtro de Intervalo de Interesse (códigos vindos do Explora ou via API)">
              <input
                type="checkbox"
                checked={withInterest}
                onChange={e => { interestManualRef.current = true; setWithInterest(e.target.checked) }}
              />
              Intervalo de interesse
            </label>
          )}
        </div>
      )}

      <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={setJimuMapView} />
    </div>
  )
}

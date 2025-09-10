/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { React, jsx, css, Global } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import { gerarMapaDistribuicaoEB, coresTipos } from './utils'

/* ===== Config de layout inicial ===== */
const DEFAULT_OPEN = { x: 938, y: 47, height: 550 } // posição/altura padrão ao abrir a PRIMEIRA vez
const DEFAULT_WIDTH = 360 // largura base (não força, só sugere)

/* ===== util ===== */
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
const LIST_TYPES = Object.keys(TYPE_FIELD)
const DEFAULT_FAIXA_INTERESSE = false

/* ===== sessão / fetch via página-pai (Explora) ===== */
function getSessionEndpoint(): string {
  return '/ExPlora/explora'
}
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
    try { if (document.referrer) targetOrigin = new URL(document.referrer).origin } catch { }

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
      url: getSessionEndpoint(),
      body,
      reqId
    }, targetOrigin)
  })
}
async function fetchDistribuicaoAmostras(faixaInteresse = false): Promise<AmostraItem[]> {
  const body = buildSessionBody(faixaInteresse)
  return fetchViaParent(body)
}

/* ===== estilos ===== */
const MAX_BUBBLE = 40
const globalPanelStyle = css`
  /* largura base e z-index; não quebrar drag/resize do EB */
  div[role='dialog'][aria-label='mapa-de-distribuicao-v2'],
  div[role='dialog'][aria-label='mapa-de-distribuicao']{
    z-index: 9999;
    width: ${DEFAULT_WIDTH}px;
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
  box-shadow: 0 4px 12px rgba(0,0,0,.1); padding: 16px; overflow: visible;
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

/* ===== cálculo dos breaks ===== */
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

/* ===== helpers DOM ===== */
function getDialogParts() {
  const dlg = document.querySelector(
    'div[role="dialog"][aria-label="mapa-de-distribuicao-v2"], div[role="dialog"][aria-label="mapa-de-distribuicao"]'
  ) as HTMLElement | null

  if (!dlg) return { dlg: null as HTMLElement | null, box: null as HTMLElement | null, header: null as HTMLElement | null }

  const header =
    (dlg.querySelector('.jimu-dialog__header, .jimu-dialog-header, .dialog-header, [role="toolbar"], header') as HTMLElement) ||
    null

  // wrapper que o EB costuma redimensionar
  let box =
    (dlg.querySelector('.jimu-dialog__dialog, .jimu-dialog') as HTMLElement) ||
    (header?.parentElement as HTMLElement | null) ||
    null

  if (box && header && box === header) box = header.parentElement as HTMLElement
  if (!box) box = dlg

  return { dlg, box, header }
}

function getDialogBodies(dlg: HTMLElement): HTMLElement[] {
  return Array.from(
    dlg.querySelectorAll(
      '.jimu-dialog__body, .jimu-dialog-body, .dialog-body, .modal-body, .jimu-dialog__content, .jimu-dialog-content'
    )
  ) as HTMLElement[]
}

function isToggleLike(el: HTMLElement | null) {
  if (!el) return false
  const cls = (el.className || '').toString().toLowerCase()
  const label = (el.getAttribute('aria-label') || el.getAttribute('title') || el.textContent || '').toLowerCase()
  return /(^|\s)action-(collapse|expand)(\s|$)/.test(cls) ||
    /(recolher|minimizar|expandir|maximizar|restore|collapse|expand)/i.test(label)
}

function findToggleFromTarget(t: HTMLElement | null) {
  if (!t) return null
  return (t.closest('button,[role="button"],[title],[aria-label],.icon,.icons,.jimu-title,[class*="action-"]') as HTMLElement) || null
}

/* ===== componente ===== */
export default function Widget(props: any) {
  const [jimuMapView, setJimuMapView] = React.useState<JimuMapView>()
  const [categoria, setCategoria] = React.useState<string>('')
  const [tiposSel, setTiposSel] = React.useState<string[]>([])
  const [showEmpty, setShowEmpty] = React.useState<boolean>(false)
  const [dadosAPI, setDadosAPI] = React.useState<AmostraItem[] | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string>('')

  const [collapsed, setCollapsed] = React.useState(false)
  const collapsedRef = React.useRef(false)
  React.useEffect(() => { collapsedRef.current = collapsed }, [collapsed])

  const prevTiposSelRef = React.useRef<string[]>([])
  const rootRef = React.useRef<HTMLDivElement>(null)
  const lastExpandedHRef = React.useRef<number | null>(null)

  /* === busca dados === */
  React.useEffect(() => {
    let cancelled = false
    async function run() {
      if (categoria !== 'sample') return
      setLoading(true); setError('')
      try {
        const data = await fetchDistribuicaoAmostras(DEFAULT_FAIXA_INTERESSE)
        if (!cancelled) {
          setDadosAPI(data)
          setTiposSel([])
          prevTiposSelRef.current = []
        }
      } catch (e: any) {
        if (!cancelled) { setError(e?.message || 'Falha ao buscar dados'); setDadosAPI([]) }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    run()
    return () => { cancelled = true }
  }, [categoria])

  /* === helper: array por tipo === */
  const gerarArrayTotal = React.useCallback(
    (tipo: string) => (dadosAPI ?? []).map(d => ({
      codigoPoco: d.codigoPoco,
      total: d[TYPE_FIELD[tipo]] ?? 0
    })),
    [dadosAPI]
  )

  /* === diffs de camadas sem piscar === */
  React.useEffect(() => {
    if (!jimuMapView) return
    if (!dadosAPI || dadosAPI.length === 0) return
    const { view } = jimuMapView
    const prev = new Set(prevTiposSelRef.current)
    const cur = new Set(tiposSel)

    const adicionados = [...cur].filter(t => !prev.has(t))
    const removidos = [...prev].filter(t => !cur.has(t))

    removidos.forEach(t => {
      const layer = view.map.findLayerById('amostras_' + t)
      if (layer) view.map.remove(layer)
    })
    adicionados.forEach(tipo => {
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

    prevTiposSelRef.current = tiposSel
  }, [jimuMapView, dadosAPI, tiposSel, gerarArrayTotal])

  /* === fechar: limpa tudo e reseta flags (reabre com padrão) === */
  const handleClose = React.useCallback(() => {
    try {
      if (jimuMapView?.view) {
        const { view } = jimuMapView
        LIST_TYPES.forEach(t => {
          const lyr = view.map.findLayerById('amostras_' + t)
          if (lyr) view.map.remove(lyr)
        })
          ; (view.map.layers as any)?.forEach?.((lyr: any) => {
            if (lyr?.id?.startsWith?.('amostras_')) view.map.remove(lyr)
          })
      }
    } catch { }

    setTiposSel([]); prevTiposSelRef.current = []
    setShowEmpty(false); setDadosAPI(null); setError(''); setCategoria('')
    lastExpandedHRef.current = null
    setCollapsed(false)

    const { dlg } = getDialogParts()
    if (dlg) {
      dlg.removeAttribute('data-user-moved')
      dlg.removeAttribute('data-user-sized')
    }
    if (rootRef.current) rootRef.current.style.display = 'block'
  }, [jimuMapView])

  /* === observar abrir/fechar + marcar “moved/sized” === */
  React.useEffect(() => {
    const { dlg, box } = getDialogParts()
    if (!dlg || !box) return

    // 1) marca "user moved" quando transform muda
    const moStyle = new MutationObserver(() => {
      const tr = (dlg.style.transform || '').trim()
      if (tr && !dlg.hasAttribute('data-user-moved')) dlg.setAttribute('data-user-moved', '1')
    })
    moStyle.observe(dlg, { attributes: true, attributeFilter: ['style'] })

    // 2) marca "user sized" quando variar altura
    let lastH = Math.round(box.getBoundingClientRect().height)
    const ro = new ResizeObserver(() => {
      const h = Math.round(box.getBoundingClientRect().height)
      if (Math.abs(h - lastH) >= 6) {
        dlg.setAttribute('data-user-sized', '1')
        lastH = h
      }
    })
    ro.observe(box)

    // 3) botão fechar -> reset
    const closeBtn = dlg.querySelector(
      'button[aria-label="Close"], button[title="Close"], button[aria-label="Fechar"], button[title="Fechar"], [data-action="close"]'
    ) as HTMLElement | null
    closeBtn?.addEventListener('click', handleClose)

    // 4) quando visível novamente, aplica layout padrão uma ÚNICA vez
    let appliedThisOpen = false
    const applyDefaultOnce = () => {
      if (appliedThisOpen) return
      const hidden = dlg.getAttribute('aria-hidden') === 'true' ||
        getComputedStyle(dlg).display === 'none' ||
        getComputedStyle(dlg).visibility === 'hidden'
      if (hidden) return

      // posição padrão se usuário NÃO moveu
      if (!dlg.hasAttribute('data-user-moved')) {
        dlg.style.transform = `translate(${DEFAULT_OPEN.x}px, ${DEFAULT_OPEN.y}px)`
      }
      // altura padrão se usuário NÃO redimensionou
      if (!dlg.hasAttribute('data-user-sized')) {
        box.style.height = `${DEFAULT_OPEN.height}px`
        box.style.maxHeight = 'calc(100% - 24px)'
        box.style.overflow = 'visible'
      }
      // garante bodies visíveis ao abrir
      getDialogBodies(dlg).forEach(b => {
        b.style.removeProperty('display')
        b.removeAttribute('aria-hidden')
      })

      if (rootRef.current) rootRef.current.style.display = 'block'
      setCollapsed(false)
      appliedThisOpen = true
    }

    const moOpen = new MutationObserver(applyDefaultOnce)
    moOpen.observe(dlg, { attributes: true, attributeFilter: ['style', 'class', 'aria-hidden'] })
    requestAnimationFrame(applyDefaultOnce)

    return () => {
      closeBtn?.removeEventListener('click', handleClose)
      moOpen.disconnect()
      moStyle.disconnect()
      ro.disconnect()
    }
  }, [handleClose])

  /* === recolher/expandir (robusto) === */
  React.useEffect(() => {
    const { dlg, box } = getDialogParts()
    if (!dlg || !box) return

    const getHeader = () =>
      (dlg.querySelector('.jimu-dialog__header, .jimu-dialog-header, .dialog-header, [role="toolbar"], header') as HTMLElement) ||
      (dlg.firstElementChild as HTMLElement)

    const bodies = getDialogBodies(dlg)

    const getContainers = (): HTMLElement[] => Array.from(new Set([
      dlg,
      box,
      ...Array.from(
        dlg.querySelectorAll('.jimu-dialog__dialog, .jimu-dialog, .jimu-dialog__content, .jimu-dialog-content, .modal-content')
      ) as HTMLElement[]
    ]))

    const showBodies = () => {
      bodies.forEach(b => {
        b.style.removeProperty('display')
        b.removeAttribute('aria-hidden')
      })
      if (rootRef.current) rootRef.current.style.display = 'block'
      dlg.classList.remove('collapsed', 'minimized', 'is-collapsed', 'is-minimized')
      dlg.removeAttribute('data-eb-collapsed')
      dlg.setAttribute('aria-expanded', 'true')
    }

    const hideBodies = () => {
      bodies.forEach(b => {
        b.style.setProperty('display', 'none', 'important')
        b.setAttribute('aria-hidden', 'true')
      })
      if (rootRef.current) rootRef.current.style.display = 'none'
      dlg.classList.add('collapsed')
      dlg.setAttribute('data-eb-collapsed', '1')
      dlg.setAttribute('aria-expanded', 'false')
    }

    const forceHeights = (hPx: number, collapsedFlag: boolean) => {
      const containers = getContainers()
      containers.forEach(el => {
        el.style.removeProperty('min-height')
        el.style.setProperty('height', `${hPx}px`, 'important')
        el.style.setProperty('max-height', collapsedFlag ? `${hPx}px` : 'calc(100% - 24px)', 'important')
        el.style.setProperty('overflow', collapsedFlag ? 'hidden' : 'visible', 'important')
      })
    }

    const applyExpandHeight = (h: number) => {
      const tgt = Math.max(120, Math.round(h || 0)) || DEFAULT_OPEN.height
      forceHeights(tgt, false)
      showBodies()
    }

    const setCollapsedUI = (wantCollapsed: boolean) => {
      if (wantCollapsed) {
        // salva altura atual antes de recolher
        const hNow = Math.round(box.getBoundingClientRect().height)
        if (hNow > 100) lastExpandedHRef.current = hNow

        const header = getHeader()
        const hHeader = Math.max(40, Math.round(header?.getBoundingClientRect().height || 56))
        forceHeights(hHeader, true)
        hideBodies()
        setCollapsed(true)
      } else {
        const targetH = (lastExpandedHRef.current && lastExpandedHRef.current > 100)
          ? lastExpandedHRef.current
          : DEFAULT_OPEN.height
        applyExpandHeight(targetH)
        setCollapsed(false)
        // reforços contra reescritas tardias
        requestAnimationFrame(() => applyExpandHeight(targetH))
        setTimeout(() => applyExpandHeight(targetH), 60)
        setTimeout(() => applyExpandHeight(targetH), 160)
      }
    }

    // salva altura ANTES do clique que vai colapsar
    const onPointerDownCapture = (e: Event) => {
      const el = findToggleFromTarget(e.target as HTMLElement)
      if (!el || !isToggleLike(el)) return
      const cls = (el.className || '').toString().toLowerCase()
      const label = (el.getAttribute('aria-label') || el.getAttribute('title') || el.textContent || '').toLowerCase()
      const willCollapse =
        cls.includes('action-collapse') || /(recolher|minimizar|collapse)/i.test(label)
      if (willCollapse) {
        const hNow = Math.round(box.getBoundingClientRect().height)
        if (hNow > 100) lastExpandedHRef.current = hNow
      }
    }

    // aplica a ação após o clique
    const onClickCapture = (e: Event) => {
      const el = findToggleFromTarget(e.target as HTMLElement)
      if (!el || !isToggleLike(el)) return
      const cls = (el.className || '').toString().toLowerCase()
      const label = (el.getAttribute('aria-label') || el.getAttribute('title') || el.textContent || '').toLowerCase()

      let toCollapse: boolean | null = null
      if (cls.includes('action-collapse') || /(recolher|minimizar|collapse)/i.test(label)) toCollapse = true
      if (cls.includes('action-expand') || /(expandir|maximizar|restore|expand)/i.test(label)) toCollapse = false

      // fallback: se não deu pra inferir pelo rótulo, alterna
      if (toCollapse === null) toCollapse = !collapsedRef.current

      setCollapsedUI(toCollapse)
      requestAnimationFrame(() => setCollapsedUI(toCollapse))
    }

    // se alguém “colar” em 40px quando deveríamos estar expandidos, reexpande
    const ro = new ResizeObserver(() => {
      if (!collapsedRef.current) {
        const header = getHeader()
        const hHeader = Math.max(40, Math.round(header?.getBoundingClientRect().height || 56))
        const h = Math.round(box.getBoundingClientRect().height)
        if (h <= hHeader + 2) {
          const targetH = (lastExpandedHRef.current && lastExpandedHRef.current > 100)
            ? lastExpandedHRef.current
            : DEFAULT_OPEN.height
          applyExpandHeight(targetH)
        }
      }
    })
    ro.observe(box)

    document.addEventListener('pointerdown', onPointerDownCapture, true)
    document.addEventListener('click', onClickCapture, true)

    return () => {
      ro.disconnect()
      document.removeEventListener('pointerdown', onPointerDownCapture, true)
      document.removeEventListener('click', onClickCapture, true)
    }
  }, []) // sem depender de `collapsed`

  /* === UI === */
  const toggleTipo = (tipo: string) =>
    setTiposSel(prev => prev.includes(tipo) ? prev.filter(t => t !== tipo) : [...prev, tipo])

  const summaryGroups = tiposSel.map(tipo => {
    const dados = gerarArrayTotal(tipo)
    const cor = coresTipos[tipo]
    let rows = calcularQuebras(dados, cor).reverse()
    if (!showEmpty) rows = rows.filter(r => r.count > 0 || r.label.startsWith('| 0 |'))
    return { tipo, rows }
  })

  const hasData = Array.isArray(dadosAPI) && dadosAPI.length > 0

  return (
    <div ref={rootRef} css={wrapperStyle}>
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
                  <input
                    type='checkbox'
                    checked={tiposSel.includes(t)}
                    readOnly
                    style={{ marginRight: 6 }}
                  />
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

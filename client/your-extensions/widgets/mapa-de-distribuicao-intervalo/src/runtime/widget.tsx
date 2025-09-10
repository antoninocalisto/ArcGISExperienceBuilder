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

/* ===== Map de campos por tipo ===== */
const TYPE_FIELD: Record<string, keyof AmostraItem> = {
  lateral: 'totalAmostrasLaterais',
  testemunho: 'totalTestemunhos',
  calha: 'totalCalhas',
  plug: 'totalPlugs',
  'whole core': 'totalWholeCore'
}
const LIST_TYPES = Object.keys(TYPE_FIELD) // ['lateral', 'testemunho', …]

/* ===== Util ===== */
const log10 = (x: number) => Math.log10 ? Math.log10(x) : Math.log(x) / Math.LN10

/** Monta o corpo x-www-form-urlencoded igual ao que o back espera */
function buildSessionBody(faixaInteresse: boolean) {
  const p = new URLSearchParams()
  p.set('hdSys', 'novaintcons')
  p.set('hdUC', 'Mapa')
  p.set('hdAcao', 'CarregarMapaDistribuicaoAmostrasContador')
  p.set('hdSessionFilter', 'true')
  p.set('faixaInteresse', String(!!faixaInteresse))
  return p.toString()
}

/** Normaliza resposta da API */
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

/** Faz o fetch via página pai (resolve CORS) */
function fetchViaParent(body: string): Promise<AmostraItem[]> {
  return new Promise((resolve, reject) => {
    const reqId = Math.random().toString(36).slice(2)
    let targetOrigin = '*'
    try {
      if (document.referrer) targetOrigin = new URL(document.referrer).origin
    } catch { /* noop */ }

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

    window.parent.postMessage({
      type: 'fetchDistribuicaoAmostras',
      // url: '/module-explora/explora',   // caminho relativo resolvido no APP pai
      // url: '/ExPlora/explora',
      body,
      reqId
    }, targetOrigin)
  })
}

/** API principal (sempre via parent) */
async function fetchDistribuicaoAmostras(faixaInteresse = false): Promise<AmostraItem[]> {
  const body = buildSessionBody(faixaInteresse)
  return fetchViaParent(body)
}

/* ===== Estilos ===== */
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
  padding-left: 1em;
  cursor: pointer;
  font-size: 0.9rem;
  `

/* ===== Quebras para o sumário ===== */
function calcularQuebras(dados: { total: number }[], colorFill: string) {
  const valores = dados.map(p => p.total)
  let min = Math.min(...valores)
  let max = Math.max(...valores)

  const info: { label: string; size: number; cor: string; count: number }[] = []

  if (!isFinite(min) || !isFinite(max)) {
    return info
  }

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
    const numClasses = Math.max(2, Math.round(1 + 3.3 * log10(n || 1)))
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

/* ===== ADIÇÃO: helpers mínimos para localizar o dialog do EB ===== */
function findClosestDialog(el: HTMLElement | null): HTMLElement | null {
  let cur: HTMLElement | null = el
  while (cur) {
    if (cur.getAttribute && cur.getAttribute('role') === 'dialog') return cur
    cur = cur.parentElement
  }
  return null
}

/* ===== Componente ===== */
export default function Widget(props: any) {
  /** Estado base */
  const [jimuMapView, setJimuMapView] = React.useState<JimuMapView>()
  const [categoria, setCategoria] = React.useState<string>('')        // select
  const [tiposSel, setTiposSel] = React.useState<string[]>([])        // checkboxes
  const [showEmpty, setShowEmpty] = React.useState<boolean>(false)

  /** Intervalo de interesse */
  const [withInterest, setWithInterest] = React.useState<boolean>(false)
  const [showWithInterest, setshowWithInterest] = React.useState<boolean>(false)
  const [faixaSet, setFaixaSet] = React.useState<Set<number>>(
    () => new Set<number>(
      (Array.isArray(props?.codigosFaixaInteresse) ? props.codigosFaixaInteresse : [])
        .map((v: any) => Number(v)).filter((v: any) => !isNaN(v))
    )
  )

  /** Bases de dados */
  const [dadosFull, setDadosFull] = React.useState<AmostraItem[] | null>(null)
  const [dadosFaixaAPI, setDadosFaixaAPI] = React.useState<AmostraItem[] | null>(null)

  /** Loading / erros */
  const [loadingFull, setLoadingFull] = React.useState(false)
  const [loadingInterest, setLoadingInterest] = React.useState(false)
  const [errorFull, setErrorFull] = React.useState<string>('')
  const [errorInterest, setErrorInterest] = React.useState<string>('')

  /* ADIÇÃO: ref para localizar o dialog do EB que contém o widget */
  const rootRef = React.useRef<HTMLDivElement>(null)

  /* >>>>> ADIÇÃO: logar o valor enviado pelo pai (concGeo -> startWithInterest) <<<<< */
  React.useEffect(() => {
    console.log("Widget atualizado em 30/08/2025")
    const onCfg = (ev: MessageEvent) => {
      const d: any = ev?.data || {}
      if (d?.type === 'fetchDistribuicaoAmostras:ok') {
        setshowWithInterest(!!d.startWithInterest)
      }
    }
    window.addEventListener('message', onCfg)
    return () => window.removeEventListener('message', onCfg)
  }, [])
  /* >>>>> FIM DA ADIÇÃO <<<<< */

  /* Recebe faixa de interesse via postMessage */
  React.useEffect(() => {
    const onMsg = (ev: MessageEvent) => {
      const data = ev?.data as MsgFaixaInteresse
      if (!data || data.type !== 'faixa-interesse' || !Array.isArray(data.codigosPocos)) return
      const nums = data.codigosPocos.map((v) => Number(v)).filter(v => !isNaN(v))
      console.debug('[intervalo] Recebidos', data.codigosPocos.length, '-> válidos (números):', nums.length)
      setFaixaSet(new Set<number>(nums))
    }
    window.addEventListener('message', onMsg)
    return () => window.removeEventListener('message', onMsg)
  }, [])

  /** Carrega base completa ao selecionar a categoria "sample" */
  React.useEffect(() => {
    let cancelled = false
    async function run() {
      if (categoria !== 'sample') return
      setLoadingFull(true)
      setErrorFull('')
      try {
        const data = await fetchDistribuicaoAmostras(DEFAULT_FAIXA_INTERESSE)
        if (!cancelled) {
          setDadosFull(data)
          setTiposSel([]) // limpa seleção anterior
          console.debug('[full] Total de poços:', data.length)
        }
      } catch (e: any) {
        if (!cancelled) {
          setErrorFull(e?.message || 'Falha ao buscar dados (base completa)')
          setDadosFull([])
        }
      } finally {
        if (!cancelled) setLoadingFull(false)
      }
    }
    run()
    return () => { cancelled = true }
  }, [categoria])

  /** Busca base do interesse no servidor quando necessário */
  React.useEffect(() => {
    let cancelled = false
    async function run() {
      if (categoria !== 'sample') return
      if (!withInterest) return
      if (faixaSet.size > 0) return // já vamos filtrar local
      if (dadosFaixaAPI !== null) return // já temos (ou já falhou)
      setLoadingInterest(true)
      setErrorInterest('')
      try {
        const data = await fetchDistribuicaoAmostras(true)
        if (!cancelled) {
          setDadosFaixaAPI(data)
          console.debug('[faixaAPI] Total de poços (API):', data.length)
        }
      } catch (e: any) {
        if (!cancelled) {
          setErrorInterest(e?.message || 'Falha ao buscar dados do intervalo de interesse')
          setDadosFaixaAPI([])
        }
      } finally {
        if (!cancelled) setLoadingInterest(false)
      }
    }
    run()
    return () => { cancelled = true }
  }, [categoria, withInterest, faixaSet, dadosFaixaAPI])

  /** Redesenha as camadas quando base/seleção/intersse mudam */
  React.useEffect(() => {
    if (!jimuMapView) return

    const base: AmostraItem[] = withInterest
      ? (faixaSet.size > 0
          ? (dadosFull ?? []).filter(x => faixaSet.has(Number(x.codigoPoco)))
          : (dadosFaixaAPI ?? dadosFull ?? []))
      : (dadosFull ?? [])

    if (!base || base.length === 0) return // evita apagar sem ter substituto

    const { view } = jimuMapView

    // limpa camadas antigas da nossa distribuição
    LIST_TYPES.forEach(t => {
      const layer = view.map.findLayerById('amostras_' + t)
      if (layer) view.map.remove(layer)
    })

    // desenha por tipo selecionado (cores por tipo se mantêm)
    tiposSel.forEach(tipo => {
      const dados = base.map(d => ({
        codigoPoco: d.codigoPoco,
        total: d[TYPE_FIELD[tipo]] ?? 0
      }))

      const numComValor = dados.filter(d => (d.total ?? 0) > 0).length
      console.debug(`[draw] tipo=${tipo} com valor>0:`, numComValor, 'de', dados.length)

      const cor = coresTipos[tipo] || 'rgba(0,0,0,0.5)'

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
    })
  }, [jimuMapView, tiposSel, withInterest, faixaSet, dadosFull, dadosFaixaAPI])

  /* ===== ADIÇÃO: limpar camadas ao clicar no "Fechar" do dialog do EB ===== */
  React.useEffect(() => {
    const view = jimuMapView?.view
    if (!view) return
    const root = rootRef.current
    if (!root) return

    const dlg = findClosestDialog(root)
    if (!dlg) return

    const closeBtn = dlg.querySelector(
      'button[aria-label="Close"], button[title="Close"], button[aria-label="Fechar"], button[title="Fechar"], [data-action="close"]'
    ) as HTMLElement | null
    if (!closeBtn) return

    const clearOnClose = () => {
      try {
        // remove as camadas que este widget adicionou
        LIST_TYPES.forEach(t => {
          const lyr = view.map.findLayerById('amostras_' + t)
          if (lyr) view.map.remove(lyr)
        })
        // varredura extra: qualquer layer com id iniciando por "amostras_"
        const all = (view.map as any).allLayers?.toArray?.() ?? view.map.layers?.toArray?.() ?? []
        all.forEach((ly: any) => {
          const id = String(ly?.id ?? '')
          if (id.startsWith('amostras_')) view.map.remove(ly)
        })
      } catch { /* noop */ }
    }

    closeBtn.addEventListener('click', clearOnClose)
    return () => {
      closeBtn.removeEventListener('click', clearOnClose)
    }
  }, [jimuMapView])

  /* ADIÇÃO: por segurança, também limpa no unmount do widget */
  React.useEffect(() => {
    return () => {
      const view = jimuMapView?.view
      if (!view) return
      try {
        LIST_TYPES.forEach(t => {
          const lyr = view.map.findLayerById('amostras_' + t)
          if (lyr) view.map.remove(lyr)
        })
        const all = (view.map as any).allLayers?.toArray?.() ?? view.map.layers?.toArray?.() ?? []
        all.forEach((ly: any) => {
          const id = String(ly?.id ?? '')
          if (id.startsWith('amostras_')) view.map.remove(ly)
        })
      } catch { /* noop */ }
    }
  }, [jimuMapView])

  /** Sumário por tipo usando SEMPRE a base atual */
  const summaryGroups = React.useMemo(() => {
    const base: AmostraItem[] = withInterest
      ? (faixaSet.size > 0
          ? (dadosFull ?? []).filter(x => faixaSet.has(Number(x.codigoPoco)))
          : (dadosFaixaAPI ?? dadosFull ?? []))
      : (dadosFull ?? [])

    return tiposSel.map(tipo => {
      const cor = coresTipos[tipo]
      const dados = base.map(d => ({
        codigoPoco: d.codigoPoco,
        total: d[TYPE_FIELD[tipo]] ?? 0
      }))
      let rows = calcularQuebras(dados, cor).reverse()
      if (!showEmpty) {
        rows = rows.filter(r => r.count > 0 || r.label.startsWith('| 0 |'))
      }
      return { tipo, rows }
    })
  }, [tiposSel, showEmpty, withInterest, faixaSet, dadosFull, dadosFaixaAPI])

  /** Helpers UI */
  const toggleTipo = (tipo: string) =>
    setTiposSel(prev => prev.includes(tipo) ? prev.filter(t => t !== tipo) : [...prev, tipo])

  const hasAnyBase = (Array.isArray(dadosFull) && dadosFull.length > 0) ||
                     (Array.isArray(dadosFaixaAPI) && dadosFaixaAPI.length > 0)

  /* ===== Render ===== */
  return (
    <div css={wrapperStyle} ref={rootRef}>  
      <Global styles={globalPanelStyle} />
      <label css={titleStyle}>Selecione a distribuição</label>

      <select
        css={selectStyle}
        value={categoria}
        onChange={e => setCategoria(e.target.value)}
      >
        <option value=''>Selecione o tipo</option>
        <option value='sample'>Distribuição de amostra</option>
      </select>

      {categoria === 'sample' && (
        <>
          {loadingFull && <div style={{ marginBottom: 8 }}>Carregando base completa…</div>}
          {!!errorFull && <div style={{ color: '#b00', marginBottom: 8 }}>Erro: {errorFull}</div>}
          {withInterest && loadingInterest && <div style={{ marginBottom: 8 }}>Carregando intervalo de interesse…</div>}
          {withInterest && !!errorInterest && <div style={{ color: '#b00', marginBottom: 8 }}>Erro: {errorInterest}</div>}

          {hasAnyBase && (
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

      {summaryGroups.length > 0 && (<div css={footerStyle}>
            <label css={footerLabelStyle} title="Exibir também classes sem poços">
              <input
                type="checkbox"
                checked={showEmpty}
                onChange={e => setShowEmpty(e.target.checked)}
              />
              Exibir classes vazias
            </label>

            { showWithInterest && (
              <label css={footerLabelStyle} title="Quando marcado, aplica o filtro de Intervalo de Interesse (códigos vindos do Explora ou via API)">
              <input
                type="checkbox"
                checked={withInterest}
                onChange={e => setWithInterest(e.target.checked)}
              />
              Intervalo de interesse
            </label>) }
      </div>)}

      {summaryGroups.length > 0 && (
        <div css={summaryListStyle}>
          {summaryGroups.map(group => (
            <React.Fragment key={group.tipo}>
              <div css={css`font-weight:600; margin:4px 0;`}>
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

      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={setJimuMapView}
      />
    </div>
  )
} // Melhoramento

/** Minerals.ts
 * Lógica da Distribuição de Minerais:
 *  - Busca do CONTADOR por análise (DRX/Qemscan/Todas) => base em clusters (bolhas) via gerarMapaDistribuicaoEB
 *  - Busca da LISTA de minerais (para o search)
 *  - Busca dos AGRUPADORES (analise|media|maxima) para um mineral selecionado
 *  - Aplicação de visualVariables (color ramp) NA MESMA CAMADA, por cima do cluster base
 */

import type { JimuMapView } from 'jimu-arcgis'
import { gerarMapaDistribuicaoEB } from './utils'

/** Opções de análise mineral para os rádios */
export const MINERAL_OPTIONS = [
  { value: 'DRX-TOT', label: 'DRX-Total' },
  { value: 'DRX-ARG', label: 'DRX-Argilominerais' },
  { value: 'MASSA',   label: 'Qemscan-Massa' },
  { value: 'AREA',    label: 'Qemscan-Área' },
  { value: 'todasAnalises', label: 'Todas as Análises' } // terceira linha separada
] as const

export type MineralTipo = typeof MINERAL_OPTIONS[number]['value']
export type AgrupadorTipo = 'analise' | 'media' | 'maxima'

/** Itens do contador (total por poço) */
export type MineralItem = {
  codigoPoco: number
  totalMinerais: number
}

/** Item da lista de minerais (para o search) */
export type MineralListaItem = {
  nomeMineral: string
  nomeResumidoMineral?: string
}

/** Item de retorno do agrupador */
export type MineralAgrupadorItem = {
  codigoPoco: number
  nomeResumido?: string
  qtAnalise: number
  valorMedio: number
  valorMaximo: number
}

/* =================== Normalizações =================== */
function normalizeMineralContador(raw: any[]): MineralItem[] {
  return (Array.isArray(raw) ? raw : [])
    .map((r: any) => ({
      codigoPoco: Number(r.codigoPoco ?? r.POCO_CD_POCO ?? r.poco ?? r.codigo ?? 0),
      totalMinerais: Number(r.totalMinerais ?? r.total ?? 0)
    }))
    .filter(x => !!x.codigoPoco)
}

function normalizeMineralLista(raw: any[]): MineralListaItem[] {
  return (Array.isArray(raw) ? raw : [])
    .map((r: any) => ({
      nomeMineral: String(r.nomeMineral ?? r.nome ?? r.mineral ?? '').trim(),
      nomeResumidoMineral: r.nomeResumidoMineral ?? r.nomeResumido ?? undefined
    }))
    .filter(x => !!x.nomeMineral)
}

function normalizeAgrupador(raw: any[]): MineralAgrupadorItem[] {
  return (Array.isArray(raw) ? raw : [])
    .map((r: any) => ({
      codigoPoco: Number(r.codigoPoco ?? r.POCO_CD_POCO ?? r.poco ?? r.codigo ?? 0),
      nomeResumido: r.nomeResumido ?? r.nomeResumidoMineral ?? undefined,
      qtAnalise: Number(r.qtAnalise ?? r.total ?? 0),
      valorMedio: Number(r.valorMedio ?? r.media ?? 0),
      valorMaximo: Number(r.valorMaximo ?? r.maximo ?? 0)
    }))
    .filter(x => !!x.codigoPoco)
}

/* =================== PostMessage helpers =================== */
/** Transporte genérico (igual ao de amostras) */
function postViaParent<T = any>(type: string, body: string, okType: string, errType: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const reqId = Math.random().toString(36).slice(2)
    let targetOrigin = '*'
    try { if (document.referrer) targetOrigin = new URL(document.referrer).origin } catch {}

    const onMessage = (event: MessageEvent) => {
      const d: any = (event as any).data || {}
      if (d.reqId !== reqId) return
      if (d.type === okType) {
        window.removeEventListener('message', onMessage)
        resolve(d.payload as T)
      } else if (d.type === errType) {
        window.removeEventListener('message', onMessage)
        reject(new Error(d.message || 'Erro no fetch via parent'))
      }
    }
    window.addEventListener('message', onMessage)
    window.parent.postMessage({ type, body, reqId }, targetOrigin)
  })
}

/* =================== Bodies Explora =================== */
/** CONTADOR por análise (Código 2 -> CarregarMapaDistribuicaoMineraisContador) */
function buildBodyContador(tipoAnalise: MineralTipo, faixaInteresse: boolean) {
  const p = new URLSearchParams()
  p.set('hdSys', 'novaintcons')
  p.set('hdUC', 'Mapa')
  p.set('hdAcao', 'CarregarMapaDistribuicaoMineraisContador')
  p.set('hdSessionFilter', 'true')
  p.set('tipoAnalise', tipoAnalise)
  p.set('faixaInteresse', String(!!faixaInteresse))
  return p.toString()
}

/** LISTA de minerais para o radio escolhido (Código 2 -> CarregarMapaDistribuicaoMineraisLista) */
function buildBodyLista(tipoAnalise: MineralTipo, faixaInteresse: boolean) {
  const p = new URLSearchParams()
  p.set('hdSys', 'novaintcons')
  p.set('hdUC', 'Mapa')
  p.set('hdAcao', 'CarregarMapaDistribuicaoMineraisLista')
  p.set('hdSessionFilter', 'true')
  p.set('tipoAnalise', tipoAnalise)
  p.set('faixaInteresse', String(!!faixaInteresse))
  return p.toString()
}

/** AGRUPADOR para um mineral escolhido (Código 2 -> CarregarMapaDistribuicaoMineraisAgrupador) */
function buildBodyAgrupador(tipoAnalise: MineralTipo, nomeResumidoMineral: string | undefined, faixaInteresse: boolean) {
  const p = new URLSearchParams()
  p.set('hdSys', 'novaintcons')
  p.set('hdUC', 'Mapa')
  p.set('hdAcao', 'CarregarMapaDistribuicaoMineraisAgrupador')
  p.set('hdSessionFilter', 'true')
  p.set('tipoAnalise', tipoAnalise)
  if (nomeResumidoMineral) p.set('nomeResumidoMineral', nomeResumidoMineral)
  p.set('faixaInteresse', String(!!faixaInteresse))
  return p.toString()
}

/* =================== Fetch APIs =================== */
/** Base/contador (gera a camada com clusters) */
export async function fetchDistribuicaoMineraisContador(
  tipoAnalise: MineralTipo,
  faixaInteresse: boolean
): Promise<MineralItem[]> {
  const body = buildBodyContador(tipoAnalise, faixaInteresse)
  const payload = await postViaParent<any[]>('fetchDistribuicaoMinerais', body, 'fetchDistribuicaoMinerais:ok', 'fetchDistribuicaoMinerais:err')
  return normalizeMineralContador(payload)
}

/** Lista de minerais (popular o search) */
export async function fetchMineralLista(
  tipoAnalise: MineralTipo,
  faixaInteresse: boolean
): Promise<MineralListaItem[]> {
  const body = buildBodyLista(tipoAnalise, faixaInteresse)
  const payload = await postViaParent<any[]>('fetchDistribuicaoMinerais', body, 'fetchDistribuicaoMinerais:ok', 'fetchDistribuicaoMinerais:err')
  return normalizeMineralLista(payload)
}

/** Dados do agrupador para o mineral selecionado */
export async function fetchMineralAgrupador(
  tipoAnalise: MineralTipo,
  nomeResumidoMineral: string | undefined,
  faixaInteresse: boolean
): Promise<MineralAgrupadorItem[]> {
  const body = buildBodyAgrupador(tipoAnalise, nomeResumidoMineral, faixaInteresse)
  const payload = await postViaParent<any[]>('fetchDistribuicaoMinerais', body, 'fetchDistribuicaoMinerais:ok', 'fetchDistribuicaoMinerais:err')
  return normalizeAgrupador(payload)
}

/* =================== Render helpers =================== */
const layerIdFor = (tipoAnalise: MineralTipo) => `minerais_${String(tipoAnalise).toLowerCase()}`
const legendIdFor = (tipoAnalise: MineralTipo) => `lgd_${layerIdFor(tipoAnalise)}`

/** Desabilita números de cluster */
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

/** Desenha a base (contador) em clusters/bolhas, com título conforme análise */
export function desenharDistribuicaoMinerais(
  jimuMapView: JimuMapView,
  dados: MineralItem[],
  tipoAnalise: MineralTipo,
  withInterest: boolean
) {
  const { view } = jimuMapView
  if (!view || !Array.isArray(dados) || dados.length === 0) return

  const pontos = dados.map(d => ({ codigoPoco: d.codigoPoco, total: d.totalMinerais }))

  const idCamada = layerIdFor(tipoAnalise)
  const idLegenda = legendIdFor(tipoAnalise)
  const colorFill = 'rgb(253,142,55)' // paleta base (igual ao Explora)

  gerarMapaDistribuicaoEB({
    jimuMapView,
    dados: pontos,
    colorFill,
    idCamada,
    idLegenda,
    titleLegenda: (withInterest ? 'Intervalo de Interesse - ' : '') + labelFromValue(tipoAnalise),
    withInterest
  } as any)

  const lyr = view.map.findLayerById(idCamada) as any
  if (lyr) disableClusterNumbers(lyr)
}

/** Aplica visual variable de COR por cima da camada base (sem mexer no tamanho/cluster) */
export async function aplicarColorizacaoPorAgrupador(
  jimuMapView: JimuMapView,
  tipoAnalise: MineralTipo,
  dadosAgrupadores: MineralAgrupadorItem[],
  agrupador: AgrupadorTipo
) {
  const { view } = jimuMapView
  const layer = view?.map?.findLayerById(layerIdFor(tipoAnalise)) as any
  if (!layer) return
  if (!Array.isArray(dadosAgrupadores) || dadosAgrupadores.length === 0) return

  // índice por poço
  const byPoco = new Map<number, MineralAgrupadorItem>()
  for (const it of dadosAgrupadores) byPoco.set(Number(it.codigoPoco), it)

  // definimos um campo "md_val" para o visual variable de cor
  const fieldVar = 'md_val'

  // 1) Atualiza atributos por poço com o valor do agrupador escolhido
  const featureSet = await layer.queryFeatures({ where: '1=1', returnGeometry: true, outFields: ['*'] })
  const updates: any[] = []
  let minVal = Number.POSITIVE_INFINITY
  let maxVal = Number.NEGATIVE_INFINITY

  for (const f of featureSet.features) {
    const codigo = Number(
      f.attributes?.POCO_CD_POCO ??
      f.attributes?.codigoPoco ??
      f.attributes?.poco ??
      f.attributes?.codigo
    )
    const ag = byPoco.get(codigo)
    // valor padrão = 0 se não encontrado
    let val = 0
    if (ag) {
      if (agrupador === 'analise') val = ag.qtAnalise
      else if (agrupador === 'media') val = ag.valorMedio
      else val = ag.valorMaximo
    }
    f.attributes[fieldVar] = val
    minVal = Math.min(minVal, val)
    maxVal = Math.max(maxVal, val)
    updates.push(f)
  }

  if (updates.length > 0) {
    await layer.applyEdits({ updateFeatures: updates })
  }

  // 2) Monta os stops como no Código 2
  const diff = maxVal - minVal
  const buildLabel = (v: number) => agrupador === 'analise' ? `${v}` : `${v} %`

  let stops: Array<{ value: number; color: string; label: string }>
  if (diff < 3) {
    stops = [
      { value: minVal, color: 'rgb(249,238,225)', label: buildLabel(minVal) },
      { value: maxVal, color: 'rgb(165,60,2)',   label: buildLabel(maxVal) }
    ]
  } else if (diff < 5) {
    const step = Math.round(diff / 4) || 1
    stops = [
      { value: minVal,            color: 'rgb(249,238,225)', label: buildLabel(minVal) },
      { value: minVal + 2 * step, color: 'rgb(253,142,55)',  label: buildLabel(minVal + 2 * step) },
      { value: maxVal,            color: 'rgb(165,60,2)',    label: buildLabel(maxVal) }
    ]
  } else {
    const step = Math.round(diff / 4) || 1
    stops = [
      { value: minVal,            color: 'rgb(249,238,225)', label: buildLabel(minVal) },
      { value: minVal + 1 * step, color: 'rgb(251,190,130)', label: buildLabel(minVal + 1 * step) },
      { value: minVal + 2 * step, color: 'rgb(253,142,55)',  label: buildLabel(minVal + 2 * step) },
      { value: maxVal - 1 * step, color: 'rgb(233,85,6)',    label: buildLabel(maxVal - 1 * step) },
      { value: maxVal,            color: 'rgb(165,60,2)',    label: buildLabel(maxVal) }
    ]
  }

  // 3) Aplica visual variable de cor mantendo o renderer (tamanho/cluster) original
  const renderer = layer.renderer?.clone ? layer.renderer.clone() : layer.renderer
  const colorVisVar = {
    type: 'color',
    field: fieldVar,
    legendOptions: { title: '' },
    stops
  }
  renderer.visualVariables = [colorVisVar]
  layer.renderer = renderer
}

/** Label humano para o título da legenda/base */
export function labelFromValue(v: MineralTipo) {
  const f = MINERAL_OPTIONS.find(o => o.value === v)
  return f?.label ?? String(v)
}

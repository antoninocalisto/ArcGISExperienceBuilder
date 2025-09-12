/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { React, jsx, css } from 'jimu-core'
import type { MineralListaItem, MineralTipo } from './Minerals'

type Props = {
  mineralAnalise: MineralTipo | ''            // DRX-TOT | DRX-ARG | MASSA | AREA | todasAnalises
  listaMinerais: MineralListaItem[]
  loadingMinerais: boolean
  errorMinerais: string

  buscaMineral: string
  setBuscaMineral: (v: string) => void
  mineralSelecionado: MineralListaItem | null
  setMineralSelecionado: (m: MineralListaItem | null) => void

  agrupador: 'analise' | 'media' | 'maxima' | ''
  setAgrupador: (v: 'analise' | 'media' | 'maxima' | '') => void
}

const boxStyle = css`margin-top:8px;border:1px solid #eee;border-radius:6px;background:#fff;padding:8px;`
const header = css`font-weight:600;margin:4px 0 6px;`
const searchInput = css`
  width:100%;border:1px solid #cfcfcf;border-radius:4px;padding:6px 8px;font-size:.95rem;outline:none;
  &:focus{border-color:#999;}
`
const listBox = css`
  margin-top:6px;border:1px solid #eee;border-radius:6px;max-height:180px;overflow:auto;padding:4px;background:#fafafa;
`
const listItem = css`
  padding:6px 8px;border-radius:4px;cursor:pointer;user-select:none;
  &:hover{background:#f0f0f0;}
  &.active{background:#e8f0fe;border:1px solid #c9defd;}
`
const radiosWrapper = css`
  margin-top:8px;padding:6px;border:1px solid #eee;border-radius:6px;background:#fafafa;
  display:grid;grid-template-columns:repeat(3,minmax(100px,1fr));gap:6px;
`
const radioLabel = css`
  display:inline-grid;grid-template-columns:auto 1fr;align-items:center;column-gap:6px;font-size:.95rem;cursor:pointer;
  input{width:14px;height:14px;}
`

function normalize(s: string) {
  return (s||'').normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase()
}


export default function MineralsListPanel({
  mineralAnalise, listaMinerais, loadingMinerais, errorMinerais,
  buscaMineral, setBuscaMineral,
  mineralSelecionado, setMineralSelecionado,
  agrupador, setAgrupador
}: Props) {
  // ⬇️ NOVO: controla abertura da lista quando o input ganha foco/clique
  const [open, setOpen] = React.useState(false)

  const q = normalize(buscaMineral)
  // ⬇️ MUDOU: quando q vazio, lista completa; quando há q, filtra
  const listaFiltrada = React.useMemo(
    () => (listaMinerais || []).filter(m => !q || normalize(m.nomeMineral).includes(q)),
    [listaMinerais, q]
  )

  const selectedName = mineralSelecionado?.nomeMineral || ''
  const disabledAll = !mineralAnalise

  const handlePick = (m: MineralListaItem) => {
    setMineralSelecionado(m)
    setBuscaMineral(m.nomeMineral)
    setOpen(false) // ⬅️ fecha após escolher
  }

  // Para não fechar a lista antes do clique no item (ordem blur/click do browser)
  const delayedClose = () => setTimeout(() => setOpen(false), 120)

  return (
    <div css={boxStyle} aria-label="listagem-de-minerais">
      <div css={header}>Listar os minerais</div>

      {/* ⬇️ abre a lista ao focar/clicar; mantém filtragem ao digitar */}
      <input
        css={searchInput}
        type="text"
        placeholder={disabledAll ? 'Selecione um tipo de análise acima' : 'Digite ou clique para listar'}
        value={buscaMineral}
        onChange={e => { setBuscaMineral(e.target.value); setOpen(true) }}
        onFocus={() => setOpen(true)}
        onClick={() => setOpen(true)}
        onBlur={delayedClose}
        disabled={disabledAll || loadingMinerais}
        aria-label="buscar-mineral"
      />

      {/* ⬇️ A lista agora abre quando open=true (foco/clique), mesmo sem texto */}
      {open && !disabledAll && (
        <div
          css={listBox}
          aria-label="lista-de-minerais"
          onMouseDown={e => e.preventDefault()} // impede blur antes do click
        >
          {loadingMinerais && <div style={{ padding: 8 }}>Carregando lista…</div>}
          {!!errorMinerais && <div style={{ padding: 8, color: '#b00' }}>Erro: {errorMinerais}</div>}
          {!loadingMinerais && !errorMinerais && listaFiltrada.length === 0 && (
            <div style={{ padding: 8 }}>Nenhum mineral encontrado.</div>
          )}
          {!loadingMinerais && !errorMinerais && listaFiltrada.map(m => {
            const active = m.nomeMineral === selectedName
            return (
              <div
                key={`${m.nomeMineral}-${m.nomeResumidoMineral}`}
                css={listItem}
                className={active ? 'active' : ''}
                onMouseDown={e => e.preventDefault()} // garante que o click não perca o foco antes
                onClick={() => handlePick(m)}
                title={m.nomeMineral}
              >
                {m.nomeMineral}
              </div>
            )
          })}
        </div>
      )}

      {/* rádios e dicas — inalterados */}
      <div css={radiosWrapper} aria-label="agrupadores-minerais">
        <label css={radioLabel} title="Quantidade de Análises">
          <input
            type="radio"
            name="tipo-mineral"
            checked={agrupador === 'analise'}
            onChange={() => setAgrupador('analise')}
            disabled={!mineralSelecionado}
          />
          <span>Análises</span>
        </label>
        <label css={radioLabel} title="Média do mineral selecionado">
          <input
            type="radio"
            name="tipo-mineral"
            checked={agrupador === 'media'}
            onChange={() => setAgrupador('media')}
            disabled={!mineralSelecionado}
          />
          <span>Média</span>
        </label>
        <label css={radioLabel} title="Máximo do mineral selecionado">
          <input
            type="radio"
            name="tipo-mineral"
            checked={agrupador === 'maxima'}
            onChange={() => setAgrupador('maxima')}
            disabled={!mineralSelecionado}
          />
          <span>Máxima</span>
        </label>
      </div>

      <div style={{ marginTop: 6, fontSize: '.9rem', color: '#666' }}>
        {!mineralAnalise && 'Escolha DRX/Qemscan/Todas para habilitar a busca.'}
        {mineralAnalise && !mineralSelecionado && 'Clique no campo para listar ou digite para filtrar; selecione um mineral para habilitar Média/Máxima.'}
      </div>
    </div>
  )
}


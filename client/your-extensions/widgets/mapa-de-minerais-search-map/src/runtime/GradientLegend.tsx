/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { React, jsx, css } from 'jimu-core'

type Tick = { label: string }
type Props = {
  title?: string
  min: number
  max: number
  isPercent?: boolean
}

const wrap = css`
  display: grid;
  grid-template-columns: 24px 1fr;
  grid-auto-rows: auto;
  gap: 8px;
  align-items: start;
`
const rampBox = css`
  width: 24px; height: 150px; border: 1px solid #ddd; border-radius: 2px;
  background: linear-gradient(
    to top,
    rgb(249,238,225) 0%,
    rgb(251,190,130) 25%,
    rgb(253,142,55) 50%,
    rgb(233,85,6) 75%,
    rgb(165,60,2) 100%
  );
`
const ticksBox = css`
  height: 150px; position: relative;
  font-size: .9rem; line-height: 1.1;
`
const tick = (posPct: number) => css`
  position: absolute; left: 0; right: 0; transform: translateY(-50%);
  top: ${100 - posPct}%;
`

function niceCeil(x: number) {
  if (x <= 0) return 0
  const p = Math.pow(10, Math.floor(Math.log10(x)))
  const m = x / p
  const step = m <= 1 ? 1 : m <= 2 ? 2 : m <= 5 ? 5 : 10
  return step * p
}

export default function GradientLegend({ title, min, max, isPercent }: Props) {
  // ticks: 5 níveis (0%, 25%, 50%, 75%, 100%) — labels “bonitas”
  let lo = Math.max(0, Math.min(min, max))
  let hi = Math.max(min, max)
  if (isPercent) { lo = 0; hi = Math.min(100, Math.max(0, hi)) }
  const hiNice = isPercent ? hi : niceCeil(hi)

  const values = [1, 0.75, 0.5, 0.25, 0].map(f => Math.round(hiNice * f))
  const labels: Tick[] = values.map(v => ({ label: isPercent ? `${v} %` : `${v}` }))
  const positions = [100, 75, 50, 25, 0] // topo→base

  return (
    <div>
      {title && <div style={{ fontWeight: 600, marginBottom: 4 }}>{title}</div>}
      <div css={wrap}>
        <div css={rampBox} />
        <div css={ticksBox}>
          {labels.map((t, i) => (
            <div key={i} css={tick(positions[i])}>{t.label}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

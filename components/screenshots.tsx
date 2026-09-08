import { Check } from 'lucide-react'

export function Screenshots() {
  return (
    <section id="product" className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-mint-foreground uppercase">
            Inside the product
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            A clear map of what your team knows.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            See how knowledge connects, where it&apos;s concentrated, and exactly
            what a handover needs to cover.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <MockWindow title="relay / knowledge graph">
            <KnowledgeGraph />
          </MockWindow>
          <MockWindow title="relay / handover — S. Lindqvist">
            <HandoverDoc />
          </MockWindow>
        </div>
      </div>
    </section>
  )
}

function MockWindow({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">
          {title}
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

function KnowledgeGraph() {
  const nodes = [
    { cx: 190, cy: 40, label: 'Payroll close', primary: true },
    { cx: 60, cy: 120, label: 'S. Lindqvist' },
    { cx: 320, cy: 110, label: 'Finance sys.' },
    { cx: 110, cy: 210, label: 'Bank feed' },
    { cx: 300, cy: 210, label: 'Approvals' },
  ]
  const edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [1, 4],
  ]

  return (
    <div>
      <svg viewBox="0 0 380 250" className="h-auto w-full" role="img" aria-label="Knowledge graph mapping the payroll close process to owners and systems">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            stroke="var(--border)"
            strokeWidth="1.5"
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.cx}
              cy={n.cy}
              r={n.primary ? 9 : 6}
              fill={n.primary ? 'var(--mint-strong)' : 'var(--foreground)'}
            />
            <foreignObject x={n.cx - 55} y={n.cy + 12} width="110" height="26">
              <div className="text-center text-[11px] font-medium text-foreground">
                {n.label}
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>
      <div className="mt-3 flex items-center gap-4 border-t border-border pt-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-mint-strong" /> Process
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-foreground" /> Owner / system
        </span>
      </div>
    </div>
  )
}

function HandoverDoc() {
  const items = [
    { done: true, text: 'Monthly payroll close — full runbook' },
    { done: true, text: 'Bank feed reconciliation steps' },
    { done: true, text: 'Approval chain & escalation contacts' },
    { done: false, text: 'Year-end adjustments (in review)' },
  ]

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Payroll close handover</p>
          <p className="text-xs text-muted-foreground">
            Generated for coverage · 4 sections
          </p>
        </div>
        <span className="rounded-md bg-accent px-2 py-1 font-mono text-[0.68rem] tracking-wide text-mint-foreground uppercase">
          Ready
        </span>
      </div>

      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li
            key={item.text}
            className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2.5"
          >
            <span
              className={`grid size-5 shrink-0 place-items-center rounded-full ${
                item.done ? 'bg-mint-strong' : 'border border-border bg-muted'
              }`}
            >
              {item.done && <Check className="size-3 text-primary" />}
            </span>
            <span className="text-sm text-foreground">{item.text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 rounded-lg bg-muted/60 p-3 text-xs leading-relaxed text-muted-foreground">
        Completeness <span className="font-medium text-foreground">93%</span> —
        Relay flags the two gaps a reviewer should confirm before transfer.
      </div>
    </div>
  )
}

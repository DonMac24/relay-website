import { Layers, Search, Share2 } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Discover',
    body: 'Relay connects to the tools where work happens and surfaces where critical, at-risk knowledge lives — the processes, decisions, and owners no one has written down.',
    points: ['Passive signal capture', 'At-risk owner detection', 'No manual tagging'],
  },
  {
    step: '02',
    icon: Layers,
    title: 'Structure',
    body: 'It builds a living knowledge graph that maps processes to people, systems, and dependencies — so you can see exactly how work flows and where it concentrates.',
    points: ['Process & dependency map', 'Ownership graph', 'Always up to date'],
  },
  {
    step: '03',
    icon: Share2,
    title: 'Transfer',
    body: 'When someone leaves or steps away, Relay generates ready-to-use handovers, runbooks, and onboarding paths — turning tacit knowledge into a repeatable transfer.',
    points: ['Auto-generated handovers', 'Runbooks & SOPs', 'Guided onboarding'],
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-border bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-mint-foreground uppercase">
            How Relay works
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            From tacit knowledge to a repeatable transfer.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Relay runs continuously in the background — discovering, structuring,
            and transferring operational knowledge without adding work to your team.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.step}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-lg bg-foreground">
                  <s.icon className="size-5 text-mint-strong" />
                </span>
                <span className="font-mono text-sm text-muted-foreground">
                  {s.step}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <ul className="mt-5 space-y-2 border-t border-border pt-4">
                {s.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="size-1.5 rounded-full bg-mint-strong" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

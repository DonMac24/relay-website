import { CalendarClock, LogOut, Shuffle } from 'lucide-react'

const problems = [
  {
    icon: LogOut,
    title: 'Departures drain expertise',
    body: 'When a key person resigns, years of undocumented context, workarounds, and relationships walk out with them. Handover notes rarely capture how the work actually gets done.',
  },
  {
    icon: CalendarClock,
    title: 'Absence stalls the work',
    body: 'Parental leave, illness, or a two-week vacation shouldn\u2019t freeze a process. Teams scramble because critical steps live in one person\u2019s inbox and memory.',
  },
  {
    icon: Shuffle,
    title: 'Reorgs break ownership',
    body: 'Every restructure reshuffles who owns what. Without a clear map of processes and dependencies, accountability quietly falls through the cracks.',
  },
]

const stats = [
  { value: '42%', label: 'of operational knowledge is undocumented when an employee leaves' },
  { value: '$1.3M', label: 'average annual cost of lost institutional knowledge per 1,000 staff' },
  { value: '3.2 mo', label: 'to bring a replacement to full productivity without a clear handover' },
]

export function Problem() {
  return (
    <section id="problem" className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-mint-foreground uppercase">
            The problem
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Knowledge leaves before you notice it&apos;s gone.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The most valuable operational knowledge in your company is never
            written down. It lives in people — and it&apos;s exposed the moment
            they step away.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="grid size-10 place-items-center rounded-lg bg-accent">
                <p.icon className="size-5 text-mint-foreground" />
              </span>
              <h3 className="mt-5 text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.value} className="bg-card p-6">
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

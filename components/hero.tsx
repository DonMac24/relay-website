import { ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 pt-16 pb-16 sm:px-8 md:pt-24 md:pb-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-accent px-3 py-1 font-mono text-[0.7rem] tracking-[0.18em] text-mint-foreground uppercase">
            Employee Continuity Intelligence
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.03]">
            When people leave, the knowledge shouldn&apos;t.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Relay captures, structures, and transfers the operational knowledge
            locked in your team&apos;s heads — so departures, leave, and reorgs
            never stall the business.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#demo"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Request a demo
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              See how it works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-mint-strong" />
            </span>
            <span className="flex items-center gap-2">
              <TrendingUp className="size-4 text-mint-strong" />
              Built for HR &amp; Operations teams
            </span>
          </div>
        </div>

        <HeroDashboard />
      </div>
    </section>
  )
}

function HeroDashboard() {
  const risks = [
    { name: 'Vendor renewals', owner: 'D. Okafor', level: 'Critical', pct: 92 },
    { name: 'Payroll close', owner: 'S. Lindqvist', level: 'High', pct: 74 },
    { name: 'Incident runbook', owner: 'A. Reyes', level: 'Medium', pct: 48 },
  ]

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            relay / continuity overview
          </span>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-5">
          <div className="sm:col-span-2 rounded-xl border border-border bg-background p-4">
            <p className="text-xs text-muted-foreground">Continuity score</p>
            <p className="mt-2 text-4xl font-semibold tracking-tight">78</p>
            <p className="mt-1 text-xs text-mint-foreground">+12 this quarter</p>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[78%] rounded-full bg-mint-strong" />
            </div>
          </div>

          <div className="sm:col-span-3 grid grid-cols-2 gap-3">
            <Metric label="Documented processes" value="1,284" />
            <Metric label="At-risk owners" value="17" accent />
            <Metric label="Handovers ready" value="93%" />
            <Metric label="Avg. transfer time" value="2.1d" />
          </div>

          <div className="sm:col-span-5 rounded-xl border border-border bg-background p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Knowledge at risk</p>
              <span className="font-mono text-[0.7rem] tracking-wider text-muted-foreground uppercase">
                Live
              </span>
            </div>
            <ul className="mt-3 space-y-3">
              {risks.map((r) => (
                <li key={r.name} className="flex items-center gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="truncate text-sm">{r.name}</span>
                      <span className="ml-2 shrink-0 text-xs text-muted-foreground">
                        {r.owner}
                      </span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-foreground"
                        style={{ width: `${r.pct}%` }}
                      />
                    </div>
                  </div>
                  <span className="w-16 shrink-0 text-right font-mono text-[0.7rem] tracking-wide text-muted-foreground uppercase">
                    {r.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function Metric({
  label,
  value,
  accent,
}: {
  label: string
  value: string
  accent?: boolean
}) {
  return (
    <div
      className={`rounded-xl border p-3 ${
        accent ? 'border-transparent bg-accent' : 'border-border bg-background'
      }`}
    >
      <p className="text-lg font-semibold tracking-tight">{value}</p>
      <p
        className={`mt-0.5 text-xs ${accent ? 'text-mint-foreground' : 'text-muted-foreground'}`}
      >
        {label}
      </p>
    </div>
  )
}

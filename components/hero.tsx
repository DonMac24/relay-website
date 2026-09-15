import {
  Archive,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  ListChecks,
  Search,
  TrendingUp,
  UserRound,
} from 'lucide-react'

const workflow = [
  { label: 'Discover', icon: Search },
  { label: 'Review & assign', icon: UserRound },
  { label: 'Preview & publish', icon: Archive },
]

const metrics = [
  {
    label: 'My handoffs',
    value: '4',
    action: 'Open workspace',
    icon: BriefcaseBusiness,
    tone: 'default',
  },
  {
    label: 'Action items',
    value: '2',
    action: 'Resolve issues',
    icon: ListChecks,
    tone: 'attention',
  },
  {
    label: 'Upcoming transitions',
    value: '2',
    action: 'View dates',
    icon: CalendarDays,
    tone: 'default',
  },
  {
    label: 'Next transition',
    value: '12d',
    action: 'Taylor Brooks',
    icon: CalendarDays,
    tone: 'accent',
  },
]

const handoffs = [
  {
    employee: 'Taylor Brooks',
    detail: 'Planned departure · Review & assign',
    status: 'Needs attention',
    tone: 'attention',
  },
  {
    employee: 'Elena Rodriguez',
    detail: 'Extended leave · Preview & publish',
    status: 'In progress',
    tone: 'progress',
  },
  {
    employee: 'Alex Morgan',
    detail: 'Role transition · Continuity Hub',
    status: 'Published',
    tone: 'complete',
  },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 pb-16 pt-10 sm:px-8 md:pb-20 md:pt-14 lg:grid-cols-[1.05fr_1fr] lg:items-start">
        <div className="lg:pt-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-accent px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mint-foreground">
            Employee Continuity Intelligence
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.15rem] lg:leading-[1.04]">
            Keep critical work moving through every employee transition
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Relay gives managers and employees a shared place to transfer
            ownership, access, and operational context—while giving
            administrators reporting and governance across every transition.
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

          <div className="mt-10 border-t border-border pt-6">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="size-4 text-mint-strong" />
              Built for departures, extended leave, and role changes
            </span>
          </div>
        </div>

        <RelayWorkspace />
      </div>
    </section>
  )
}

function RelayWorkspace() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />

          <span className="ml-3 font-mono text-xs text-muted-foreground">
            relay / manager workspace
          </span>
        </div>

        <div className="space-y-4 p-4 sm:p-5">
          <WorkflowCard />
          <MetricsGrid />
          <HandoffCard />
        </div>
      </div>
    </div>
  )
}

function WorkflowCard() {
  return (
    <div className="rounded-xl border border-border bg-background p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-mint-foreground">
            Relay continuity process
          </p>

          <p className="mt-1 text-sm font-medium">
            One workflow from discovery to publication
          </p>
        </div>

        <span className="hidden shrink-0 rounded-md bg-accent px-2 py-1 font-mono text-[0.6rem] uppercase tracking-wide text-mint-foreground sm:inline-flex">
          Active
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {workflow.map((step, index) => {
          const Icon = step.icon

          return (
            <div key={step.label} className="relative text-center">
              <div className="relative flex items-center justify-center">
                {index > 0 && (
                  <span className="absolute left-[-50%] right-1/2 top-1/2 h-px bg-border" />
                )}

                <span
                  className={`relative z-10 grid size-8 place-items-center rounded-full border ${
                    index < 2
                      ? 'border-mint-strong bg-mint-strong text-primary-foreground'
                      : 'border-border bg-background text-muted-foreground'
                  }`}
                >
                  <Icon className="size-3.5" />
                </span>
              </div>

              <span className="mt-2 block text-[0.58rem] font-medium leading-tight text-muted-foreground sm:text-[0.65rem]">
                {step.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function MetricsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon

        return (
          <div
            key={metric.label}
            className={`rounded-xl border p-3 ${
              metric.tone === 'attention'
                ? 'border-red-200 bg-red-50'
                : metric.tone === 'accent'
                  ? 'border-transparent bg-accent'
                  : 'border-border bg-background'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <Icon
                className={`size-3.5 ${
                  metric.tone === 'attention'
                    ? 'text-red-600'
                    : 'text-mint-strong'
                }`}
              />

              <span
                className={`text-xl font-semibold tracking-tight ${
                  metric.tone === 'attention'
                    ? 'text-red-700'
                    : 'text-foreground'
                }`}
              >
                {metric.value}
              </span>
            </div>

            <p className="mt-3 text-[0.68rem] font-medium text-foreground">
              {metric.label}
            </p>

            <p className="mt-0.5 truncate text-[0.58rem] text-muted-foreground">
              {metric.action}
            </p>
          </div>
        )
      })}
    </div>
  )
}

function HandoffCard() {
  return (
    <div className="rounded-xl border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-mint-foreground">
            My work
          </p>

          <p className="mt-0.5 text-sm font-medium">Active handoffs</p>
        </div>

        <span className="text-xs font-medium text-mint-foreground">
          View all
        </span>
      </div>

      <ul className="divide-y divide-border">
        {handoffs.map((handoff) => (
          <li
            key={handoff.employee}
            className="flex items-center justify-between gap-4 px-4 py-3"
          >
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-foreground sm:text-sm">
                {handoff.employee}
              </p>

              <p className="mt-0.5 truncate text-[0.65rem] text-muted-foreground">
                {handoff.detail}
              </p>
            </div>

            <span
              className={`shrink-0 rounded-full px-2 py-1 text-[0.58rem] font-semibold ${
                handoff.tone === 'attention'
                  ? 'bg-red-50 text-red-700'
                  : handoff.tone === 'complete'
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'bg-accent text-mint-foreground'
              }`}
            >
              {handoff.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
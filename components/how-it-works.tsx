import {
  BookOpenCheck,
  Search,
  ShieldCheck,
  UserRoundCheck,
} from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Discover and review',
    body: 'A manager starts a handoff and discovers relevant work from connected systems. Relay brings the available items together so the manager can decide what should be retained.',
    points: [
      'Connected-source discovery',
      'Manager-reviewed evidence',
      'Optional employee input',
    ],
  },
  {
    step: '02',
    icon: UserRoundCheck,
    title: 'Assign the work',
    body: 'Confirmed projects and responsibilities are assigned to continuity recipients. Relay keeps the work, recipient, supporting source, and access status together.',
    points: [
      'Work-level assignments',
      'Primary and additional recipients',
      'Source access visibility',
    ],
  },
  {
    step: '03',
    icon: BookOpenCheck,
    title: 'Publish to the Hub',
    body: 'Relay checks the handoff for remaining gaps before a manager publishes it as a read-only continuity record that authorized recipients can use.',
    points: [
      'Readiness checks',
      'Continuity Hub record',
      'Recipient action items',
    ],
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-b border-border bg-muted/40"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-xs tracking-[0.2em] text-mint-foreground uppercase">
            How Relay works
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            From scattered work to a usable continuity record.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Relay gives managers a structured workflow for discovering relevant
            work, reviewing the supporting evidence, assigning responsibility,
            checking readiness, and publishing the handoff to the Continuity
            Hub.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <article
                key={step.step}
                className="flex flex-col rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-lg bg-accent">
                    <Icon className="size-5 text-mint-foreground" />
                  </span>

                  <span className="font-mono text-sm text-muted-foreground">
                    {step.step}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-medium">{step.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>

                <ul className="mt-auto space-y-2 border-t border-border pt-4">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <ShieldCheck className="size-3.5 shrink-0 text-mint-strong" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-2xl border border-border bg-card px-6 py-4 text-sm">
          <WorkflowStage number="1" label="Discover" />
          <WorkflowArrow />
          <WorkflowStage number="2" label="Review" />
          <WorkflowArrow />
          <WorkflowStage number="3" label="Assignment" />
          <WorkflowArrow />
          <WorkflowStage number="4" label="Readiness" />
          <WorkflowArrow />
          <WorkflowStage number="5" label="Continuity Hub" />
        </div>
      </div>
    </section>
  )
}

function WorkflowStage({
  number,
  label,
}: {
  number: string
  label: string
}) {
  return (
    <span className="inline-flex items-center gap-2 font-medium text-foreground">
      <span className="grid size-6 place-items-center rounded-full bg-accent font-mono text-[0.65rem] text-mint-foreground">
        {number}
      </span>

      {label}
    </span>
  )
}

function WorkflowArrow() {
  return (
    <span className="text-muted-foreground" aria-hidden="true">
      →
    </span>
  )
}
import {
  BookOpenCheck,
  ClipboardCheck,
  ShieldCheck,
  UserRoundCheck,
} from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: ClipboardCheck,
    title: 'Prepare the handoff',
    body: 'Relay brings relevant work from connected systems into one review. The manager confirms what matters and can include input from the transitioning employee.',
    points: [
      'Connected-source discovery',
      'Manager-reviewed evidence',
      'Optional employee input',
    ],
  },
  {
    step: '02',
    icon: UserRoundCheck,
    title: 'Transfer responsibility',
    body: 'The manager assigns confirmed work to the right recipients, sets expectations, and identifies source-access gaps before the transition is completed.',
    points: [
      'Work-level assignments',
      'Primary and additional recipients',
      'Access and readiness checks',
    ],
  },
  {
    step: '03',
    icon: BookOpenCheck,
    title: 'Carry the work forward',
    body: 'Employees receive assigned responsibilities, approved source links, and action items in the Continuity Hub—with Ask Relay available for grounded answers.',
    points: [
      'Employee Continuity Hub',
      'Original source links',
      'Action items and Ask Relay AI',
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
            One continuity workflow—from transition to ownership.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Relay turns an employee transition into a managed process. Managers
            prepare and assign the work, while employees receive the context,
            sources, and actions they need to carry it forward.
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
      </div>
    </section>
  )
}
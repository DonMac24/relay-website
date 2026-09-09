import {
  Check,
  Database,
  KeyRound,
  LogOut,
  UserPlus,
} from 'lucide-react'

const problems = [
  {
    icon: Database,
    title: 'Work is scattered across systems',
    points: [
      'Documents, tasks, meetings, and decisions live in different tools',
      'No single view shows what a person’s role actually depends on',
    ],
  },
  {
    icon: LogOut,
    title: 'Offboarding stops at the employee',
    points: [
      'Accounts and access are removed',
      'Active work, ownership, and context are left for managers to reconstruct',
    ],
  },
  {
    icon: UserPlus,
    title: 'Onboarding starts without context',
    points: [
      'The next person may receive access to the tools',
      'They still lack the priorities, history, and responsibilities behind the work',
    ],
  },
]

const missingLayer = [
  'Identify the work and information that must continue',
  'Assign clear responsibility to the people carrying it forward',
  'Confirm they can access the supporting systems and sources',
]

export function Problem() {
  return (
    <section id="problem" className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-xs tracking-[0.2em] text-mint-foreground uppercase">
            The problem
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Companies onboard and offboard people. Not their work.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Connected systems hold pieces of an employee&apos;s work, but they
            do not organize that information for a transition. When someone
            leaves or changes roles, the next person inherits access—not a
            complete understanding of what needs to continue.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {problems.map((problem) => {
            const Icon = problem.icon

            return (
              <article
                key={problem.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-accent">
                  <Icon className="size-5 text-mint-foreground" />
                </span>

                <h3 className="mt-5 text-lg font-medium">{problem.title}</h3>

                <ul className="mt-4 space-y-3">
                  {problem.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-accent">
                        <Check className="size-2.5 text-mint-foreground" />
                      </span>

                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card px-6 py-6">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_2fr] lg:items-center">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-mint-foreground uppercase">
                The missing layer
              </p>

              <h3 className="mt-2 text-xl font-medium">
                Work needs a transition process too.
              </h3>
            </div>

            <ul className="grid gap-3 md:grid-cols-3">
              {missingLayer.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-foreground"
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent font-mono text-[0.65rem] text-mint-foreground">
                    {index + 1}
                  </span>

                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-start gap-3 border-t border-border pt-5">
            <KeyRound className="mt-0.5 size-4 shrink-0 text-mint-strong" />

            <p className="text-sm leading-relaxed text-muted-foreground">
              Relay creates that continuity layer without replacing the systems
              where the original work already lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
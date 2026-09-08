import {
  CalendarClock,
  KeyRound,
  LogOut,
  Search,
  Shuffle,
  UserRoundCheck,
} from 'lucide-react'

const problems = [
  {
    icon: LogOut,
    title: 'Departures create a handoff scramble',
    body: 'Managers must quickly reconstruct active projects, recurring responsibilities, supporting documents, and unfinished work before an employee leaves.',
  },
  {
    icon: CalendarClock,
    title: 'Absence exposes coverage gaps',
    body: 'When work is spread across documents, calendars, task systems, and individual context, the person covering a role may not know what needs attention.',
  },
  {
    icon: Shuffle,
    title: 'Role changes blur responsibility',
    body: 'Reorganizations and internal moves change who is responsible for ongoing work. Without a structured assignment process, important responsibilities can be missed.',
  },
]

const continuityQuestions = [
  {
    icon: Search,
    number: '01',
    title: 'What needs to continue?',
    body: 'Identify relevant work and supporting evidence across connected systems.',
  },
  {
    icon: UserRoundCheck,
    number: '02',
    title: 'Who is responsible next?',
    body: 'Assign confirmed work to the appropriate continuity recipient.',
  },
  {
    icon: KeyRound,
    number: '03',
    title: 'Can they use the source material?',
    body: 'Review source access and surface gaps before the handoff is published.',
  },
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
            The work is visible. The handoff isn&apos;t.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Important responsibilities are spread across systems, documents,
            calendars, and individual context. When a role changes, teams need a
            structured way to decide what continues, who receives it, and
            whether they can use the supporting source material.
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

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {problem.body}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="border-b border-border px-6 py-5">
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-mint-foreground uppercase">
              The continuity gap
            </p>

            <h3 className="mt-2 text-xl font-medium">
              Three questions every handoff must answer
            </h3>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-3">
            {continuityQuestions.map((item) => {
              const Icon = item.icon

              return (
                <article key={item.number} className="bg-card p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid size-9 place-items-center rounded-lg bg-accent">
                      <Icon className="size-4 text-mint-foreground" />
                    </span>

                    <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-5 text-base font-medium">{item.title}</h4>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
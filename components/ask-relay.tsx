import {
  BriefcaseBusiness,
  Check,
  ExternalLink,
  Sparkles,
  UserRound,
} from 'lucide-react'

const capabilities = [
  'Managers can review assignments, deadlines, risks, and readiness',
  'Employees can understand the work they receive in the Continuity Hub',
  'Every answer links back to authorized Relay records and sources',
]

export function AskRelay() {
  return (
    <section id="ask-relay" className="border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-accent px-3 py-1 font-mono text-[0.7rem] tracking-[0.18em] text-mint-foreground uppercase">
            <Sparkles className="size-3.5" />
            Ask Relay AI
          </span>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Answers for managers and the employees carrying work forward.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Ask Relay helps managers understand active handoffs and gives
            employees clear answers about the responsibilities they receive in
            the Continuity Hub.
          </p>

          <ul className="mt-8 space-y-3">
            {capabilities.map((capability) => (
              <li key={capability} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent">
                  <Check className="size-3 text-mint-foreground" />
                </span>

                <span className="leading-relaxed text-foreground">
                  {capability}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Ask Relay is governed by workspace permissions and cannot change,
            assign, approve, or delete records.
          </p>
        </div>

        <AskRelayExamples />
      </div>
    </section>
  )
}

function AskRelayExamples() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <span className="grid size-7 place-items-center rounded-md bg-accent">
          <Sparkles className="size-3.5 text-mint-foreground" />
        </span>

        <div>
          <p className="text-sm font-medium">Ask Relay</p>
          <p className="text-[0.65rem] text-muted-foreground">
            Continuity intelligence
          </p>
        </div>

        <span className="ml-auto rounded-full bg-accent px-2 py-1 font-mono text-[0.58rem] tracking-wide text-mint-foreground uppercase">
          Governed · read-only
        </span>
      </div>

      <div className="space-y-4 p-5">
        <RelayExample
          icon={BriefcaseBusiness}
          role="Manager workspace"
          question="How much work is still unassigned for Taylor Brooks?"
          answer={
            <>
              <span className="font-medium">Taylor Brooks</span> has six
              confirmed work items. Four are assigned and two still need
              recipients.
            </>
          }
          record="Taylor Brooks continuity record"
          recordType="Manager handoff"
        />

        <RelayExample
          icon={UserRound}
          role="Employee Continuity Hub"
          question="What should I focus on while covering Elena’s role?"
          answer={
            <>
              You have three assigned responsibilities. The next item is the
              <span className="font-medium"> weekly payroll approval</span>,
              due Friday.
            </>
          }
          record="Elena Rodriguez continuity record"
          recordType="Assigned work"
        />

        <div className="flex items-center gap-2 rounded-xl border border-border bg-muted/50 px-3 py-2.5">
          <span className="truncate text-sm text-muted-foreground">
            Ask about your handoffs or assigned work…
          </span>

          <span className="ml-auto grid size-7 shrink-0 place-items-center rounded-lg bg-mint-strong">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="var(--primary-foreground)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <p className="text-center text-[0.62rem] leading-relaxed text-muted-foreground">
          Verify important decisions using the linked Relay records and
          original sources.
        </p>
      </div>
    </div>
  )
}

function RelayExample({
  icon: Icon,
  role,
  question,
  answer,
  record,
  recordType,
}: {
  icon: typeof BriefcaseBusiness
  role: string
  question: string
  answer: React.ReactNode
  record: string
  recordType: string
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-background">
      <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-2.5">
        <span className="grid size-6 place-items-center rounded-md bg-accent">
          <Icon className="size-3.5 text-mint-foreground" />
        </span>

        <span className="text-xs font-medium">{role}</span>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex justify-end">
          <p className="max-w-[90%] rounded-xl rounded-br-sm bg-foreground px-3 py-2 text-xs leading-relaxed text-background">
            {question}
          </p>
        </div>

        <div className="rounded-xl rounded-bl-sm border border-border px-3 py-2.5">
          <div className="flex items-center gap-2">
            <Sparkles className="size-3 text-mint-strong" />

            <span className="text-[0.65rem] font-medium text-mint-foreground">
              Ask Relay
            </span>
          </div>

          <p className="mt-2 text-xs leading-relaxed text-foreground">
            {answer}
          </p>

          <button
            type="button"
            className="mt-3 flex w-full items-center gap-2 rounded-lg bg-muted/50 px-3 py-2 text-left"
          >
            <ExternalLink className="size-3.5 shrink-0 text-mint-foreground" />

            <span className="min-w-0">
              <span className="block truncate text-[0.68rem] font-medium">
                {record}
              </span>

              <span className="block text-[0.6rem] text-muted-foreground">
                {recordType} · Open record
              </span>
            </span>

            <span className="ml-auto text-xs text-mint-foreground">↗</span>
          </button>
        </div>
      </div>
    </article>
  )
}
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
    <div className="space-y-4">
      <RelayExample
        icon={BriefcaseBusiness}
        role="Manager workspace"
        title="Ask about this handoff"
        description="Answers are limited to this handoff and its approved sources."
        question="How much work is still unassigned for Taylor Brooks?"
        answer={
          <>
            <span className="font-medium text-white">Taylor Brooks</span> has six
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
        title="Ask about my assigned work"
        description="Answers are limited to records and sources you can access."
        question="What should I focus on while covering Elena’s role?"
        answer={
          <>
            You have three assigned responsibilities. The next item is the{' '}
            <span className="font-medium text-white">
              weekly payroll approval
            </span>
            , due Friday.
          </>
        }
        record="Elena Rodriguez continuity record"
        recordType="Assigned work"
      />
    </div>
  )
}

function RelayExample({
  icon: Icon,
  role,
  title,
  description,
  question,
  answer,
  record,
  recordType,
}: {
  icon: typeof BriefcaseBusiness
  role: string
  title: string
  description: string
  question: string
  answer: React.ReactNode
  record: string
  recordType: string
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#34445d] bg-[#111b2b] text-white shadow-[0_20px_50px_-30px_rgba(15,23,42,0.8)]">
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Icon className="size-3.5 text-[#9b87f5]" />

              <p className="font-mono text-[0.64rem] font-semibold tracking-[0.16em] text-[#b7a6ff] uppercase">
                {role}
              </p>
            </div>

            <h3 className="mt-2 text-base font-medium text-white">{title}</h3>

            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              {description}
            </p>
          </div>

          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#202c42] text-sm font-semibold text-[#9b87f5]">
            AI
          </span>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#3b4b64] bg-[#182337] p-2">
          <p className="min-w-0 flex-1 truncate px-2 text-xs text-slate-300">
            {question}
          </p>

          <span className="shrink-0 rounded-lg bg-[#4c3ca5] px-4 py-2 text-[0.68rem] font-medium text-white">
            Ask Relay
          </span>
        </div>

        <div className="mt-3 rounded-xl border border-[#34445d] bg-[#172235] p-4">
          <div className="flex items-center gap-2">
            <Sparkles className="size-3.5 text-[#9b87f5]" />

            <span className="text-xs font-medium text-[#b7a6ff]">
              Ask Relay
            </span>
          </div>

          <p className="mt-2 text-xs leading-relaxed text-slate-200">
            {answer}
          </p>

          <button
            type="button"
            className="mt-3 flex w-full items-center gap-3 rounded-lg border border-[#34445d] bg-[#202c42] px-3 py-2.5 text-left"
          >
            <span className="grid size-7 shrink-0 place-items-center rounded-md bg-[#293653]">
              <ExternalLink className="size-3.5 text-[#b7a6ff]" />
            </span>

            <span className="min-w-0">
              <span className="block truncate text-[0.7rem] font-medium text-white">
                {record}
              </span>

              <span className="mt-0.5 block text-[0.6rem] text-slate-400">
                {recordType} · Open record
              </span>
            </span>

            <span className="ml-auto text-xs text-[#b7a6ff]">↗</span>
          </button>
        </div>

        <p className="mt-3 text-center text-[0.58rem] leading-relaxed text-slate-500">
          Ask Relay can make mistakes. Verify important details using the linked
          original sources.
        </p>
      </div>
    </article>
  )
}
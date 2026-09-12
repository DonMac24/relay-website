import {
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ExternalLink,
  FileText,
  Sparkles,
  UserRound,
} from 'lucide-react'

const capabilities = [
  'Ask questions across connected Jira, Outlook, SharePoint, and Relay records',
  'See work that still needs an owner, upcoming meetings, and responsibilities',
  'Every answer links back to an authorized original source',
]

export function AskRelay() {
  return (
    <section id="ask-relay" className="border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ded8ff] bg-[#f1eeff] px-3 py-1 font-mono text-[0.7rem] tracking-[0.18em] text-[#6248f5] uppercase">
            <Sparkles className="size-3.5" />
            Ask Relay AI
          </span>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Ask about the work people leave behind
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Ask Relay gives managers and employees simple answers using the
            connected work records, meetings, documents, and responsibilities
            they are authorized to view.
          </p>

          <ul className="mt-8 space-y-3">
            {capabilities.map((capability) => (
              <li key={capability} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#f1eeff]">
                  <Check className="size-3 text-[#6248f5]" />
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
        title="Ask about connected work"
        description="Answers use the connected records you are authorized to view."
        question="Which of Aubrey’s connected work items still need a new owner?"
        answer={
          <>
            <span className="font-medium text-white">
              Three connected work items
            </span>{' '}
            still need a new owner: two open Jira tickets and Aubrey’s weekly
            status report in SharePoint.
          </>
        }
        sources={[
          {
            icon: FileText,
            title: 'Aubrey’s unassigned work',
            detail: 'Relay · Open handoff',
          },
          {
            icon: FileText,
            title: 'Open Jira tickets',
            detail: 'Jira · View 2 tickets',
          },
        ]}
      />

      <RelayExample
        icon={UserRound}
        role="Employee Continuity Hub"
        title="Ask about upcoming commitments"
        description="Answers use meeting details and continuity records you can access."
        question="Are there any upcoming meetings I should know about?"
        answer={
          <>
            You have{' '}
            <span className="font-medium text-white">
              three upcoming meetings
            </span>{' '}
            connected to responsibilities assigned to you: a project handoff on
            Monday, a payroll review on Wednesday, and a vendor check-in on
            Friday.
          </>
        }
        sources={[
          {
            icon: CalendarDays,
            title: 'Upcoming continuity meetings',
            detail: 'Outlook · View meeting details',
          },
          {
            icon: FileText,
            title: 'Assigned responsibilities',
            detail: 'Relay · Open Continuity Hub',
          },
        ]}
      />
    </div>
  )
}

type SourceItem = {
  icon: typeof FileText
  title: string
  detail: string
}

function RelayExample({
  icon: Icon,
  role,
  title,
  description,
  question,
  answer,
  sources,
}: {
  icon: typeof BriefcaseBusiness
  role: string
  title: string
  description: string
  question: string
  answer: React.ReactNode
  sources: SourceItem[]
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#33415c] bg-[#0f1a2d] shadow-[0_24px_60px_-32px_rgba(15,23,42,0.65)]">
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Icon className="size-3.5 text-[#a995ff]" />

              <p className="font-mono text-[0.64rem] font-semibold tracking-[0.16em] text-[#b8a8ff] uppercase">
                {role}
              </p>
            </div>

            <h3 className="mt-2 text-base font-medium text-white">
              {title}
            </h3>

            <p className="mt-1 text-xs leading-relaxed text-[#aeb9cc]">
              {description}
            </p>
          </div>

          <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-[#3b4965] bg-[#17243a] text-sm font-semibold text-[#a995ff]">
            AI
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-xl border border-[#36445f] bg-[#111e32] p-2">
          <p className="min-w-0 flex-1 truncate rounded-lg border border-[#cbd2dd] bg-white px-3 py-2.5 text-xs text-[#7c879a]">
            {question}
          </p>

          <span className="shrink-0 rounded-lg bg-[#4b39a8] px-4 py-2.5 text-[0.68rem] font-medium text-white transition-colors hover:bg-[#5b47c7]">
            Ask Relay
          </span>
        </div>

        <div className="mt-3 rounded-xl border border-[#33415c] bg-[#142136] p-4">
          <div className="flex items-center gap-2">
            <Sparkles className="size-3.5 text-[#a995ff]" />

            <span className="text-xs font-medium text-[#b8a8ff]">
              Ask Relay
            </span>
          </div>

          <p className="mt-2 text-xs leading-relaxed text-[#e5e9f2]">
            {answer}
          </p>

          <div className="mt-4 space-y-2">
            {sources.map((source) => {
              const SourceIcon = source.icon

              return (
                <button
                  key={source.title}
                  type="button"
                  className="flex w-full items-center gap-3 rounded-lg border border-[#33415c] bg-[#0f1a2d] px-3 py-2.5 text-left transition-colors hover:border-[#6752d9] hover:bg-[#192740]"
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-md bg-[#28234b]">
                    <SourceIcon className="size-3.5 text-[#aa96ff]" />
                  </span>

                  <span className="min-w-0">
                    <span className="block truncate text-[0.7rem] font-medium text-white">
                      {source.title}
                    </span>

                    <span className="mt-0.5 block text-[0.6rem] text-[#8f9bb0]">
                      {source.detail}
                    </span>
                  </span>

                  <ExternalLink className="ml-auto size-3.5 shrink-0 text-[#a995ff]" />
                </button>
              )
            })}
          </div>
        </div>

        <p className="mt-3 text-center text-[0.58rem] leading-relaxed text-[#8290a6]">
          Ask Relay can make mistakes. Verify important details using the linked
          original sources.
        </p>
      </div>
    </article>
  )
}
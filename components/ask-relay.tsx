import type { ReactNode } from 'react'
import {
  BriefcaseBusiness,
  CalendarDays,
  Check,
  FileText,
  Sparkles,
  UserRound,
  type LucideIcon,
} from 'lucide-react'

const capabilities = [
  'Ask questions across connected Jira, Outlook, SharePoint, and Relay records',
  'See work that still needs an owner, upcoming meetings, and responsibilities',
  'Every answer links back to an authorized original source',
]

export function AskRelay() {
  return (
    <section
      id="ask-relay"
      className="border-b border-[#DEDFDC] bg-[#FAFAF7]"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#EDC6BE] bg-[#FFF0EB] px-3 py-1 font-mono text-[0.7rem] tracking-[0.18em] text-[#C43D28] uppercase">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Ask Relay AI
          </span>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance text-[#171A18] sm:text-4xl">
            Questions come up. Context stays close.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#586660]">
            Ask Relay gives managers and employees simple answers using the
            connected work records, meetings, documents, and responsibilities
            they are authorized to view.
          </p>

          <ul className="mt-8 space-y-3">
            {capabilities.map((capability) => (
              <li
                key={capability}
                className="flex items-start gap-3 text-sm"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#FFF0EB]">
                  <Check
                    className="size-3 text-[#C43D28]"
                    aria-hidden="true"
                  />
                </span>

                <span className="leading-relaxed text-[#171A18]">
                  {capability}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs leading-relaxed text-[#586660]">
            AI supports the handoff; managers control the decisions. Ask Relay is governed by workspace permissions and cannot change,
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
    <div className="space-y-3">
      <p className="text-xs text-[#586660]">Illustrative conversations · Governed, read-only</p>
      <RelayExample
        icon={BriefcaseBusiness}
        role="Manager workspace"
        question="Which of Aubrey’s work items need an owner?"
        answer={<><strong>Three items:</strong> two open Jira tickets and the weekly status report in SharePoint.</>}
        sources={[
          { icon: FileText, title: 'Relay handoff' },
          { icon: FileText, title: 'Jira tickets' },
        ]}
      />
      <RelayExample
        icon={UserRound}
        role="Employee Continuity Hub"
        question="What meetings are coming up for my assigned work?"
        answer={<><strong>Three meetings:</strong> project handoff Monday, payroll review Wednesday, and vendor check-in Friday.</>}
        sources={[
          { icon: CalendarDays, title: 'Outlook meetings' },
          { icon: FileText, title: 'Assigned work' },
        ]}
      />
      <p className="text-xs leading-relaxed text-[#586660]">
        Ask Relay can make mistakes. Verify important details using the original sources.
      </p>
    </div>
  )
}

type SourceItem = { icon: LucideIcon; title: string }

type RelayExampleProps = {
  icon: LucideIcon
  role: string
  question: string
  answer: ReactNode
  sources: SourceItem[]
}

function RelayExample({ icon: Icon, role, question, answer, sources }: RelayExampleProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#171A18] bg-white">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 bg-[#171A18] px-4 py-2.5">
        <Sparkles className="size-4 shrink-0 text-[#EC6B4E]" aria-hidden="true" />
        <h3 className="text-sm font-semibold text-white">Ask Relay</h3>
        <span className="ml-auto flex items-center gap-1.5 text-xs text-white/80">
          <Icon className="size-3.5 shrink-0" aria-hidden="true" />{role}
        </span>
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-center gap-2">
          <p className="min-w-0 flex-1 rounded-lg border border-[#DEDFDC] px-3 py-2 text-xs leading-relaxed text-[#586660]">{question}</p>
          <span className="shrink-0 rounded-lg bg-[#C43D28] px-3 py-2 text-xs font-semibold text-white">Ask Relay</span>
        </div>
        <p className="text-sm leading-relaxed text-[#171A18]">{answer}</p>
        <div className="flex flex-wrap gap-2" aria-label="Example sources">
          {sources.map(({icon: SourceIcon, title}) => (
            <span key={title} className="inline-flex items-center gap-1.5 rounded-md border border-[#EDC6BE] bg-[#FFF0EB] px-2 py-1 text-xs text-[#99321F]">
              <SourceIcon className="size-3 shrink-0" aria-hidden="true" />{title}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

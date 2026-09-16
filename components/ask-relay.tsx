import type { ReactNode } from 'react'
import {
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ExternalLink,
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
    <div className="space-y-6">
      <p className="text-xs text-[#586660]">Illustrative Ask Relay conversations</p>
      <RelayExample
        icon={BriefcaseBusiness}
        role="Manager workspace"
        title="Ask about connected work"
        description="Answers use the connected records you are authorized to view."
        question="Which of Aubrey’s connected work items still need a new owner?"
        answer={
          <>
            <span className="font-semibold text-[#171A18]">
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
            <span className="font-semibold text-[#171A18]">
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
  icon: LucideIcon
  title: string
  detail: string
}

type RelayExampleProps = {
  icon: LucideIcon
  role: string
  title: string
  description: string
  question: string
  answer: ReactNode
  sources: SourceItem[]
}

function RelayExample({
  icon: Icon,
  role,
  title,
  description,
  question,
  answer,
  sources,
}: RelayExampleProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#171A18] bg-white">
      <div className="flex items-center gap-3 bg-[#171A18] px-5 py-4">
        <Sparkles
          className="size-4 shrink-0 text-[#EC6B4E]"
          aria-hidden="true"
        />

        <h3 className="text-sm font-semibold text-white">
          {title}
        </h3>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Icon
              className="size-3.5 text-[#C43D28]"
              aria-hidden="true"
            />

            <p className="font-mono text-[0.64rem] font-semibold tracking-[0.12em] text-[#586660] uppercase">
              {role}
            </p>
          </div>

          <span className="rounded-md border border-[#DEDFDC] bg-[#FFF0EB] px-2 py-1 text-[0.6rem] font-semibold tracking-[0.1em] text-[#171A18] uppercase">
            Governed · Read-only
          </span>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-[#586660]">
          {description}
        </p>

        <div className="mt-4 flex flex-col gap-2 rounded-xl border border-[#171A18] bg-white p-2 sm:flex-row sm:items-center">
          <p className="min-w-0 flex-1 rounded-lg border border-[#171A18] bg-white px-3 py-2.5 text-xs leading-relaxed text-[#586660]">
            {question}
          </p>

          <span className="inline-flex shrink-0 items-center justify-center self-end rounded-lg bg-[#C43D28] px-4 py-3 text-[0.68rem] font-semibold text-white sm:self-center">
            Ask Relay
          </span>
        </div>

        <div className="mt-3 rounded-xl border border-[#DEDFDC] bg-white p-4">
          <div className="flex items-center gap-2">
            <Sparkles
              className="size-3.5 text-[#C43D28]"
              aria-hidden="true"
            />

            <span className="text-xs font-semibold text-[#171A18]">
              Ask Relay
            </span>
          </div>

          <p className="mt-2 text-xs leading-relaxed text-[#171A18]">
            {answer}
          </p>

          <div className="mt-4 space-y-2">
            {sources.map((source) => {
              const SourceIcon = source.icon

              return (
                <div
                  key={source.title}
                  className="flex w-full items-center gap-3 rounded-lg border border-[#DEDFDC] bg-[#FAFAF7] px-3 py-2.5 text-left"
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-md bg-[#FFF0EB]">
                    <SourceIcon
                      className="size-3.5 text-[#C43D28]"
                      aria-hidden="true"
                    />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[0.7rem] font-medium text-[#171A18]">
                      {source.title}
                    </span>

                    <span className="mt-0.5 block text-[0.65rem] text-[#586660]">
                      {source.detail}
                    </span>
                  </span>

                  <ExternalLink
                    className="ml-auto size-3.5 shrink-0 text-[#C43D28]"
                    aria-hidden="true"
                  />
                </div>
              )
            })}
          </div>
        </div>

        <p className="mt-3 text-center text-[0.65rem] leading-relaxed text-[#586660]">
          Ask Relay can make mistakes. Verify important details using the linked
          original sources.
        </p>
      </div>
    </article>
  )
}
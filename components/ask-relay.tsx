import { ArrowUpRight, Sparkles } from 'lucide-react'

const examples = [
  {
    role: 'Manager workspace',
    action: 'Proposes',
    question: 'Which of Aubrey’s work items need an owner?',
    lead: 'Three items need owners.',
    answer: ' Also flagged: the enterprise renewal portfolio has no point of contact on file — want to add it to this handoff?',
    sources: ['Jira tickets', 'Suggested, not assigned'],
  },
  {
    role: 'Employee Continuity Hub',
    action: 'Surfaces',
    question: 'Opens the Hub — no question asked',
    lead: '2 responsibilities due this week,',
    answer: ' and 1 access issue still unresolved from your handoff.',
    sources: ['Assigned work', 'Pushed, not requested'],
  },
] as const

export function AskRelay() {
  return (
    <section
      id="ask-relay"
      aria-labelledby="ask-relay-heading"
      className="border-b border-[#DCE5E2] bg-[#E6EEEB]"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[#AB351F] uppercase">
            <Sparkles className="size-4" aria-hidden="true" />
            Ask Relay AI
          </span>
          <span className="rounded-full border border-[#F0C7B9] bg-[#FFF0EA] px-3 py-1 text-xs font-semibold text-[#AB351F]">
            Agentic
          </span>
        </div>

        <h2
          id="ask-relay-heading"
          className="mt-6 max-w-5xl text-3xl leading-tight font-semibold tracking-tight text-balance text-[#21413D] sm:text-4xl lg:text-5xl"
        >
          It answers. It also tells you what you didn&apos;t ask.
        </h2>
        <p className="mt-6 max-w-4xl text-base leading-relaxed text-[#425F59] sm:text-lg">
          Ask Relay works the same way for managers and employees — governed
          access, source-linked answers — but it doesn&apos;t wait to be asked.
          It surfaces gaps for managers and priorities for employees on its own.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {examples.map((example, index) => (
            <article
              key={example.role}
              className="flex min-w-0 flex-col rounded-2xl border border-[#DCE5E2] bg-white p-6 shadow-[0_3px_16px_rgba(33,65,61,0.04)] sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xs font-semibold tracking-[0.08em] text-[#586F68] uppercase">
                  {example.role}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF0EA] px-3 py-1 text-xs font-medium text-[#AB351F]">
                  {example.action}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </span>
              </div>
              <p className="mt-6 text-xl leading-snug font-semibold text-[#21413D] sm:text-2xl">
                {example.question}
              </p>
              <div className="mt-5 rounded-xl border border-[#E4EBE7] bg-[#F5F8F7] p-5">
                <p className="text-base leading-relaxed text-[#21413D]">
                  {index === 1 && (
                    <span className="mr-2 inline-block size-2.5 rounded-full bg-[#FF5738]" aria-hidden="true" />
                  )}
                  <strong className="font-semibold">{example.lead}</strong>
                  {example.answer}
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-5" aria-label={`${example.role} example context`}>
                {example.sources.map((source) => (
                  <span key={source} className="rounded-full border border-[#DCE5E2] bg-white px-3 py-1 text-xs leading-relaxed text-[#586F68]">
                    {source}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 border-t border-[#CBD9D3] pt-6 text-sm leading-relaxed text-[#425F59]">
          AI supports the work; people control the decisions. Every suggestion is governed by workspace permissions and
          can be confirmed, edited or dismissed — it cannot change, assign,
          approve, or delete records on its own.
        </p>
      </div>
    </section>
  )
}

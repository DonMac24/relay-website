export function AskRelay() {
  return (
    <section id="ask-relay" className="border-y border-[#DEDFDC] bg-[#FFFFFF] text-[#171A18]">
      <div className="mx-auto w-full max-w-6xl px-5 pt-10 pb-5 sm:px-8 md:pt-14">
        <div className="flex flex-wrap items-center gap-3 text-sm font-bold uppercase text-[#FF5838]">
          <span>Ask Relay AI</span>
          <span className="rounded-full bg-[#FFF0EB] px-3 py-1">Agentic</span>
        </div>
        <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          It answers. It also tells you what you didn&apos;t ask.
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-[#586660]">
          Ask Relay works the same way for managers and employees — governed access,
          source-linked answers — but it doesn&apos;t wait to be asked. It surfaces
          gaps for managers and priorities for employees on its own.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="min-w-0 rounded-2xl border border-[#DEDFDC] bg-[#FFFFFF] p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-bold uppercase text-[#586660]">Manager workspace</h3>
              <span className="rounded-full bg-[#FFF0EB] px-3 py-1 text-sm text-[#FF5838]">Proposes</span>
            </div>
            <p className="mt-5 text-xl font-bold leading-snug">
              Which of Aubrey&apos;s work items need an owner?
            </p>
            <div className="mt-5 rounded-xl bg-[#F3F4F1] p-5">
              <p className="text-base leading-relaxed">
                <strong>Three items</strong> need owners. <strong>Also flagged:</strong> the
                enterprise renewal portfolio has no point of contact on file — want
                to add it to this handoff?
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-[#586660]">
                <span className="rounded-full border border-[#DEDFDC] bg-[#FFFFFF] px-3 py-1">Jira tickets</span>
                <span className="rounded-full border border-[#DEDFDC] bg-[#FFFFFF] px-3 py-1">Suggested, not assigned</span>
              </div>
            </div>
          </article>

          <article className="min-w-0 rounded-2xl border border-[#DEDFDC] bg-[#FFFFFF] p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-bold uppercase text-[#586660]">Employee Continuity Hub</h3>
              <span className="rounded-full bg-[#FFF0EB] px-3 py-1 text-sm text-[#FF5838]">Surfaces</span>
            </div>
            <p className="mt-5 text-xl font-bold leading-snug">Opens the Hub — no question asked</p>
            <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#F3F4F1] p-5">
              <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-[#FF5838]" />
              <p className="text-base leading-relaxed">
                <strong>2 responsibilities</strong> due this week, and <strong>1 access issue</strong> still
                unresolved from your handoff.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-sm text-[#586660]">
              <span className="rounded-full border border-[#DEDFDC] px-3 py-1">Assigned work</span>
              <span className="rounded-full border border-[#DEDFDC] px-3 py-1">Pushed, not requested</span>
            </div>
          </article>
        </div>

      </div>
      <div className="border-t border-[#DEDFDC]">
        <p className="mx-auto w-full max-w-6xl px-5 py-4 text-base leading-relaxed text-[#586660] sm:px-8">
          AI supports the work; people control the decisions. Every suggestion is
          governed by workspace permissions and can be confirmed, edited or
          dismissed — it cannot change, assign, approve, or delete records on its own.
        </p>
      </div>
    </section>
  )
}

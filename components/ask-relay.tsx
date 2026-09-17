import styles from './continuity-home.module.css'

const reportExample = [
  { name: 'Aubrey', count: 9 },
  { name: 'Jordan', count: 4 },
  { name: 'Priya', count: 2 },
]

export function AskRelay() {
  return (
    <section id="ask-relay" className="border-y border-[#DEDFDC] bg-[#FFFFFF] text-[#171A18]">
      <div className={`${styles.wrap} pt-10 pb-6 md:pt-14`}>
        <div className="flex flex-wrap items-center gap-3 text-sm font-bold uppercase text-[#FF5838]">
          <span>Ask Relay AI</span>
          <span className="rounded-full bg-[#FFF0EB] px-3 py-1">Agentic</span>
        </div>
        <h2 className="mt-6">
          Ask a question, find what&apos;s missing, or run a report — all in Relay.
        </h2>
        <p className={styles.visualIntro}>
          Get source-linked answers, review proposed work, and ask about your
          continuity data in plain language. Access follows your role: managers
          review handoffs, employees see their priorities, and admins and managers
          can run reports.
        </p>

        <div className="mt-6 grid items-start gap-5 lg:grid-cols-3">
          <article className="min-w-0 rounded-2xl border border-[#DEDFDC] bg-[#FFFFFF] p-[18px]">
            <h3 className="text-[14px] font-bold uppercase text-[#586660]">Ask</h3>
            <p className="mt-[10px] text-[16px] font-semibold leading-snug">Get an answer</p>
            <p className="mt-[10px] text-[16px] leading-[1.6] text-[#586660]">
              Ask about your handoffs and approved supporting records. Follow the
              sources behind the answer.
            </p>
            <div className="mt-[12px] rounded-xl bg-[#F3F4F1] p-[14px]">
              <p className="text-[14px] leading-[1.6] text-[#586660]">
                Which of Aubrey&apos;s work items need an owner?
              </p>
              <p className="mt-[10px] text-[16px] leading-[1.6]">
                <strong>Three items:</strong> two open Jira tickets and the weekly
                status report.
              </p>
              <div className="mt-[12px] flex flex-wrap gap-2 text-[12px] text-[#586660]" aria-label="Illustrative answer sources">
                <span className="rounded-full border border-[#DEDFDC] bg-white px-3 py-1">Relay handoff</span>
                <span className="rounded-full border border-[#DEDFDC] bg-white px-3 py-1">Jira tickets</span>
              </div>
            </div>
          </article>

          <article className="min-w-0 rounded-2xl border border-[#DEDFDC] bg-[#FFFFFF] p-[18px]">
            <h3 className="text-[14px] font-bold uppercase text-[#586660]">Discover</h3>
            <p className="mt-[10px] text-[16px] font-semibold leading-snug">Find what&apos;s missing</p>
            <p className="mt-[10px] text-[16px] leading-[1.6] text-[#586660]">
              Run discovery across connected work systems. Relay proposes work and
              flags gaps for a manager to review.
            </p>
            <div className="mt-[12px] flex items-start gap-3 rounded-xl bg-[#F3F4F1] p-[14px]">
              <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-[#FF5838]" />
              <p className="text-[16px] leading-[1.6]">
                <strong>Enterprise renewal portfolio</strong> — found in three
                sources, with no point of contact recorded.
              </p>
            </div>
            <div className="mt-[12px] flex flex-wrap gap-2 text-[12px] text-[#586660]">
              <span className="rounded-full border border-[#DEDFDC] px-3 py-1">Suggested, not assigned</span>
            </div>
            <p className="mt-[10px] text-[14px] leading-[1.6] text-[#586660]">
              Employees also see priorities automatically when they open their
              Continuity Hub, including new assignments and unresolved access issues.
            </p>
          </article>

          <article className="min-w-0 rounded-2xl border border-[#DEDFDC] bg-[#FFFFFF] p-[18px]">
            <h3 className="text-[14px] font-bold uppercase text-[#586660]">Report</h3>
            <p className="mt-[10px] text-[16px] font-semibold leading-snug">Ask about your data</p>
            <p className="mt-[10px] text-[16px] leading-[1.6] text-[#586660]">
              Ask a reporting question in plain language.
            </p>
            <div className="mt-[12px] rounded-xl bg-[#F3F4F1] p-[14px]">
              <p className="text-[14px] leading-[1.6] text-[#586660]">
                Which managers have the most unresolved access issues?
              </p>
              <p className="mt-[10px] text-[16px] leading-[1.6]">
                <strong>Aubrey, with 9 issues</strong> — followed by Jordan with 4
                and Priya with 2.
              </p>
            </div>
            <figure className="mt-[12px]" aria-label="Illustrative current unresolved access issues by manager: Aubrey 9, Jordan 4, Priya 2">
              <div className="flex h-24 items-end gap-4" aria-hidden="true">
                {reportExample.map(({ name, count }, index) => (
                  <div key={name} className="flex h-full flex-1 flex-col justify-end gap-1 text-center">
                    <span className="text-[12px] font-semibold text-[#586660]">{count}</span>
                    <div
                      className={`mx-auto w-full max-w-12 rounded-t ${index === 0 ? 'bg-[#FF5838]' : 'bg-[#C9DDD5]'}`}
                      style={{ height: `${count * 6}px` }}
                    />
                    <span className="text-[11px] text-[#586660]">{name}</span>
                  </div>
                ))}
              </div>
              <figcaption className="mt-[10px] text-[12px] text-[#586660]">Current issues · Example data</figcaption>
            </figure>
            <div className="mt-[12px] flex flex-wrap gap-2 text-[12px] text-[#586660]" aria-label="Illustrative report sources">
              <span className="rounded-full border border-[#DEDFDC] px-3 py-1">Supporting handoffs</span>
            </div>
            <p className="mt-[10px] text-[14px] leading-[1.6] text-[#586660]">
              Refine your question or pin the result to your dashboard to
              recalculate when you return.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

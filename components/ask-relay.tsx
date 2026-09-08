import { Check, ExternalLink, Sparkles } from 'lucide-react'

const capabilities = [
  'Answers from handoffs and continuity records you are authorized to view',
  'Uses confirmed work, assignments, deadlines, risks, and approved evidence',
  'Links answers back to supporting Relay records and original sources',
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
            Ask questions across your continuity records.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Ask Relay is a governed, read-only assistant for your Relay
            workspace. It helps authorized users understand handoffs,
            assignments, deadlines, readiness gaps, recipient progress, and
            approved supporting evidence.
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
            Ask Relay respects workspace permissions and does not change,
            assign, approve, or delete records.
          </p>
        </div>

        <AskRelayChat />
      </div>
    </section>
  )
}

function AskRelayChat() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <span className="grid size-7 place-items-center rounded-md bg-foreground">
          <Sparkles className="size-3.5 text-mint-strong" />
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
        <div className="flex justify-end">
          <p className="max-w-[88%] rounded-2xl rounded-br-sm bg-foreground px-4 py-2.5 text-sm leading-relaxed text-background">
            How much work is still unassigned for Taylor Brooks?
          </p>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[94%] rounded-2xl rounded-bl-sm border border-border bg-background px-4 py-3">
            <div className="mb-2 flex items-center gap-2">
              <Sparkles className="size-3.5 text-mint-strong" />
              <span className="text-xs font-medium text-mint-foreground">
                Ask Relay
              </span>
            </div>

            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-medium">Taylor Brooks</span> has six
              confirmed work items. Four have been assigned and two are still
              unassigned.
            </p>

            <div className="mt-4 border-t border-border pt-3">
              <p className="font-mono text-[0.6rem] tracking-[0.12em] text-muted-foreground uppercase">
                Supporting record
              </p>

              <button
                type="button"
                className="mt-2 flex w-full items-center gap-3 rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-left"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-md bg-accent">
                  <ExternalLink className="size-3.5 text-mint-foreground" />
                </span>

                <span className="min-w-0">
                  <span className="block truncate text-xs font-medium text-foreground">
                    Taylor Brooks continuity record
                  </span>

                  <span className="mt-0.5 block text-[0.65rem] text-muted-foreground">
                    Relay handoff · Open record
                  </span>
                </span>

                <span className="ml-auto text-xs text-mint-foreground">↗</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-border bg-muted/50 px-3 py-2.5">
          <span className="truncate text-sm text-muted-foreground">
            Ask about handoffs, assignments, deadlines, or risks…
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
          Ask Relay can make mistakes. Verify important decisions using the
          linked Relay records and original sources.
        </p>
      </div>
    </div>
  )
}
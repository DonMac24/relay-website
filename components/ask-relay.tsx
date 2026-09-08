import { Check, Sparkles } from 'lucide-react'

const capabilities = [
  'Answers grounded in your own processes, not generic guesses',
  'Every answer cites the source, owner, and last update',
  'Surfaces single points of failure before they become incidents',
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
            Ask how work actually gets done.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Ask Relay is a conversational layer over your operational knowledge
            graph. Anyone — a new hire, a covering manager, an on-call engineer —
            can get a precise, sourced answer in seconds.
          </p>

          <ul className="mt-8 space-y-3">
            {capabilities.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent">
                  <Check className="size-3 text-mint-foreground" />
                </span>
                <span className="leading-relaxed text-foreground">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <AskRelayChat />
      </div>
    </section>
  )
}

function AskRelayChat() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="grid size-6 place-items-center rounded-md bg-foreground">
          <Sparkles className="size-3.5 text-mint-strong" />
        </span>
        <span className="text-sm font-medium">Ask Relay</span>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex justify-end">
          <p className="max-w-[85%] rounded-2xl rounded-br-sm bg-foreground px-4 py-2.5 text-sm text-background">
            Who owns the vendor renewal process, and what happens if they&apos;re
            out?
          </p>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[92%] rounded-2xl rounded-bl-sm border border-border bg-background px-4 py-3">
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-medium">Dara Okafor</span> owns vendor
              renewals. If she&apos;s unavailable, the documented backup is{' '}
              <span className="font-medium">Priya Nair</span>. The renewal runs
              on a 45-day notice window through the Procurement workspace.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Source label="Vendor Renewal SOP" />
              <Source label="Procurement · Notion" />
              <Source label="Updated 6d ago" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-border bg-muted/50 px-3 py-2.5">
          <span className="text-sm text-muted-foreground">
            Ask about any process, owner, or dependency…
          </span>
          <span className="ml-auto grid size-7 place-items-center rounded-lg bg-mint-strong">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

function Source({ label }: { label: string }) {
  return (
    <span className="rounded-md bg-accent px-2 py-1 font-mono text-[0.68rem] tracking-wide text-mint-foreground">
      {label}
    </span>
  )
}

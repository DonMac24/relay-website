export function Founder() {
  return (
    <section id="founder" className="border-b border-border bg-muted/40">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src="/founder.png"
              alt="Maya Chen, Founder and CEO of Relay"
              className="aspect-[4/5] w-full object-cover"
              width={640}
              height={800}
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="font-mono text-xs tracking-[0.2em] text-mint-foreground uppercase">
            From the founder
          </p>
          <blockquote className="mt-5 text-2xl font-medium tracking-tight text-balance sm:text-3xl sm:leading-snug">
            &ldquo;I watched a single resignation stall a team for a quarter.
            The work wasn&apos;t hard — the knowledge was simply gone. Relay
            exists so that never happens again.&rdquo;
          </blockquote>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            After a decade leading operations through hypergrowth and layoffs
            alike, I saw the same pattern everywhere: companies treat
            institutional knowledge as if it&apos;s permanent, when it&apos;s the
            most fragile asset they have. We built Relay to make continuity a
            system, not a scramble.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-8 bg-mint-strong" />
            <div>
              <p className="text-sm font-medium">Maya Chen</p>
              <p className="text-sm text-muted-foreground">Founder &amp; CEO, Relay</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

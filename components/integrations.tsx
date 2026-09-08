const integrations = [
  { name: 'Slack', src: '/logos/slack.svg' },
  { name: 'Notion', src: '/logos/notion.svg' },
  { name: 'Confluence', src: '/logos/confluence.svg' },
  { name: 'Jira', src: '/logos/jira.svg' },
  { name: 'Salesforce', src: '/logos/salesforce.svg' },
  { name: 'Zendesk', src: '/logos/zendesk.svg' },
  { name: 'HubSpot', src: '/logos/hubspot.svg' },
  { name: 'Asana', src: '/logos/asana.svg' },
  { name: 'GitHub', src: '/logos/github.svg' },
  { name: 'Dropbox', src: '/logos/dropbox.svg' },
  { name: 'Zoom', src: '/logos/zoom.svg' },
  { name: 'Microsoft 365', src: '/logos/microsoft.svg' },
]

export function Integrations() {
  return (
    <section id="integrations" className="border-b border-border bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-mint-foreground uppercase">
            Integrations
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Connected to the tools where knowledge already lives.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Relay plugs into your existing stack in minutes — no migration, no
            change to how your team works. Knowledge is captured where it&apos;s
            created.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
          {integrations.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-3 bg-card px-5 py-6 transition-colors hover:bg-accent/50"
            >
              <img
                src={tool.src || '/placeholder.svg'}
                alt={`${tool.name} logo`}
                className="size-7 shrink-0 object-contain"
                width={28}
                height={28}
              />
              <span className="text-sm font-medium">{tool.name}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Plus a REST API and webhooks to connect anything else.
        </p>
      </div>
    </section>
  )
}

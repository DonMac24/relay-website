import { RelayLogo } from '@/components/relay-logo'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Ask Relay', href: '#ask-relay' },
      { label: 'Integrations', href: '#integrations' },
      { label: 'Security', href: '#integrations' },
    ],
  },
  {
    title: 'Company',
    links: [{ label: 'About', href: '#top' }],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" aria-label="Relay ECI home">
              <RelayLogo />
            </a>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Employee Continuity Intelligence. Keep critical work moving
              through departures, extended leave, and role transitions.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-medium">{column.title}</p>

              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Relay Intelligence, Inc. All rights
            reserved.
          </p>

          <a
            href="#top"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
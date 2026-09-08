import { RelayLogo } from '@/components/relay-logo'

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Ask Relay', href: '#ask-relay' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'About', href: '#top' },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a
              href="#top"
              aria-label="Relay ECI home"
              className="inline-flex shrink-0"
            >
              <RelayLogo />
            </a>

            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Keep critical work moving through departures, extended leave, and
              role transitions.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-7 flex flex-col items-start justify-between gap-3 border-t border-border pt-5 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Relay ECI, Inc. All rights reserved.
          </p>

          <a
            href="#top"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
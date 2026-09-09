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

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/relay-eci/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Relay ECI on LinkedIn"
              className="grid size-8 place-items-center rounded-lg border border-[#0a66c2] bg-[#0a66c2] text-white transition-colors hover:border-[#004182] hover:bg-[#004182]"
            >
              <LinkedInIcon />
            </a>

            <a
              href="#top"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-4 fill-current"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452Z" />
    </svg>
  )
}
import { RelayLogo } from '@/components/relay-logo'

const columns = [
  {
    title: 'Product',
    links: ['How it works', 'Ask Relay', 'Integrations', 'Security'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Continuity guide', 'Docs', 'Changelog', 'Status'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <RelayLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Employee Continuity Intelligence. Keep the knowledge when the
              people move on.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-medium">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
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
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#top" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#top" className="transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#top" className="transition-colors hover:text-foreground">
              SOC 2
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

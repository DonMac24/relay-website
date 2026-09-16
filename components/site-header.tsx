import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Ask Relay AI', href: '#ask-relay' },
  { label: 'Integrations', href: '#integrations' },
]

export function SiteHeader() {
  return (
    <header
      className="
        sticky top-0 z-50
        bg-white
        after:pointer-events-none
        after:absolute after:inset-x-0 after:bottom-0
        after:z-[60] after:h-px
        after:bg-border/70 after:content-['']
      "
    >
      <div className="mx-auto flex h-24 w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="#top"
          aria-label="Relay home"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/relay-eci-logo-coral.png"
            alt="Relay ECI"
            width={2048}
            height={684}
            priority
            className="h-auto w-[150px] object-contain sm:w-[180px]"
          />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#demo"
            className="hidden whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Request a demo
          </a>
        </div>
      </div>
    </header>
  )
}
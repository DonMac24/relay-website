import Image from 'next/image'
import { Cable, Database, Network } from 'lucide-react'

type Integration = {
  name: string
  category: string
  src: string
}

const integrations: Integration[] = [
  {
    name: 'SharePoint',
    category: 'Documents and knowledge',
    src: '/logos/sharepoint.svg',
  },
  {
    name: 'Outlook',
    category: 'Meetings and calendars',
    src: '/logos/outlook.svg',
  },
  {
    name: 'Azure DevOps',
    category: 'Work items, repositories and code',
    src: '/logos/azure-devops.svg',
  },
  {
    name: 'Jira',
    category: 'Projects and issues',
    src: '/logos/jira.svg',
  },
  {
    name: 'Confluence',
    category: 'Knowledge and documentation',
    src: '/logos/confluence.svg',
  },
  {
    name: 'Google Drive',
    category: 'Files and documents',
    src: '/logos/google-drive.svg',
  },
  {
    name: 'Asana',
    category: 'Tasks and projects',
    src: '/logos/asana.svg',
  },
  {
    name: 'Monday.com',
    category: 'Work management',
    src: '/logos/monday.svg',
  },
]

export function Integrations() {
  return (
    <section
      id="integrations"
      className="border-b border-border bg-muted/40"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-xs tracking-[0.2em] text-mint-foreground uppercase">
            Integrations
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Built for your identity. Connected to your work
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Relay connects identity, approved work systems, and governed AI
            without moving source content out of the systems your teams already
            use.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <PlatformCard
            eyebrow="Identity and access"
            title="Microsoft Entra ID ready"
            description="Connect organizational identity, workspace roles, employee records, and recipient access context."
            logo="/logos/microsoft.svg"
            logoAlt="Microsoft logo"
            badge="Primary"
            footerIcon={Network}
            footer="Provider adapters support additional enterprise directories."
          />

          <PlatformCard
            eyebrow="AI service"
            title="OpenAI powers Ask Relay"
            description="Generate grounded answers from authorized handoffs, assignments, continuity facts, and approved evidence."
            logo="/logos/openai.svg"
            logoAlt="OpenAI logo"
            badge="Governed"
            footerIcon={Cable}
            footer="Answers remain read-only and limited by Relay permissions."
          />
        </div>

        <div className="mt-10">
          <div className="mb-5">
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-mint-foreground uppercase">
              Connected work systems
            </p>

            <h3 className="mt-2 text-xl font-medium">
              Discover evidence from the tools your teams already use
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {integrations.map((tool) => (
              <IntegrationCard key={tool.name} tool={tool} />
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
          <Database className="size-4 shrink-0 text-mint-strong" />

          <p className="text-sm text-muted-foreground">
            Source content stays in its original system with existing access
            controls.
          </p>
        </div>
      </div>
    </section>
  )
}

function PlatformCard({
  eyebrow,
  title,
  description,
  logo,
  logoAlt,
  badge,
  footerIcon: FooterIcon,
  footer,
}: {
  eyebrow: string
  title: string
  description: string
  logo: string
  logoAlt: string
  badge: string
  footerIcon: typeof Network
  footer: string
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent">
          <Image
            src={logo}
            alt={logoAlt}
            width={24}
            height={24}
            className="size-6 object-contain"
          />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-[0.65rem] tracking-[0.14em] text-mint-foreground uppercase">
              {eyebrow}
            </p>

            <span className="shrink-0 rounded-full bg-accent px-2 py-1 font-mono text-[0.58rem] text-mint-foreground uppercase">
              {badge}
            </span>
          </div>

          <h3 className="mt-2 text-xl font-medium">{title}</h3>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <FooterIcon className="size-4 shrink-0 text-mint-strong" />

        <p className="text-xs leading-relaxed text-muted-foreground">
          {footer}
        </p>
      </div>
    </article>
  )
}

function IntegrationCard({ tool }: { tool: Integration }) {
  return (
    <div className="flex min-h-20 items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 transition-colors hover:bg-accent/50">
      <Image
        src={tool.src}
        alt={`${tool.name} logo`}
        width={30}
        height={30}
        className="size-[30px] shrink-0 object-contain"
      />

      <div className="min-w-0">
        <p className="truncate text-sm font-medium">{tool.name}</p>

        <p className="mt-0.5 truncate text-xs text-muted-foreground">
          {tool.category}
        </p>
      </div>
    </div>
  )
}
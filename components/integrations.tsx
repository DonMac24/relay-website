import type { LucideIcon } from 'lucide-react'
import {
  Bot,
  Cable,
  Database,
  Network,
  PanelsTopLeft,
  ShieldCheck,
} from 'lucide-react'

type Integration = {
  name: string
  category: string
  src?: string
  icon?: LucideIcon
}

const integrations: Integration[] = [
  {
    name: 'Microsoft Entra ID',
    category: 'Identity and access',
    src: '/logos/microsoft.svg',
  },
  {
    name: 'Microsoft 365',
    category: 'SharePoint documents',
    src: '/logos/microsoft.svg',
  },
  {
    name: 'Outlook',
    category: 'Meetings and calendars',
    src: '/logos/outlook.svg',
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
    icon: PanelsTopLeft,
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
            Built around your identity and the systems where work already lives.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Relay connects approved enterprise systems to a governed continuity
            workflow. Managers can discover relevant work, review what should be
            retained, and link recipients back to the original source without
            moving the underlying files into Relay.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <IdentityArchitecture />
          <AskRelayIntegration />
        </div>

        <div className="mt-6">
          <div className="mb-4">
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-mint-foreground uppercase">
              Connected work systems
            </p>

            <h3 className="mt-2 text-xl font-medium">
              Discover evidence from the tools your teams already use
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {integrations.map((tool) => (
              <IntegrationCard key={tool.name} tool={tool} />
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4">
          <Database className="mt-0.5 size-4 shrink-0 text-mint-strong" />

          <p className="text-sm leading-relaxed text-muted-foreground">
            Connected content remains in its original system. Relay retains the
            approved continuity context, source metadata, and links required for
            the handoff while the source system continues to enforce access.
          </p>
        </div>
      </div>
    </section>
  )
}

function IdentityArchitecture() {
  return (
    <article className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-start gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent">
          <ShieldCheck className="size-5 text-mint-foreground" />
        </span>

        <div>
          <p className="font-mono text-[0.65rem] tracking-[0.14em] text-mint-foreground uppercase">
            Identity and access
          </p>

          <h3 className="mt-2 text-xl font-medium">
            Microsoft Entra ID ready
          </h3>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        Relay uses Microsoft Entra ID to connect organizational identity,
        workspace roles, employee records, and recipient access checks to the
        continuity process.
      </p>

      <div className="mt-5 flex items-center gap-3 rounded-xl border border-border bg-background p-4">
        <img
          src="/logos/microsoft.svg"
          alt="Microsoft logo"
          width={32}
          height={32}
          className="size-8 shrink-0 object-contain"
        />

        <div>
          <p className="text-sm font-medium">Microsoft Entra ID</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Directory, identity, roles, and access context
          </p>
        </div>

        <span className="ml-auto rounded-full bg-accent px-2 py-1 font-mono text-[0.58rem] text-mint-foreground uppercase">
          Primary
        </span>
      </div>

      <div className="mt-3 flex items-start gap-3 rounded-xl bg-muted/50 p-4">
        <Network className="mt-0.5 size-4 shrink-0 text-mint-strong" />

        <div>
          <p className="text-sm font-medium">Provider-adapter architecture</p>

          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Relay&apos;s identity layer is designed around directory-provider
            adapters, allowing additional enterprise directory platforms to be
            supported without replacing the handoff, role, reporting, or audit
            architecture.
          </p>
        </div>
      </div>
    </article>
  )
}

function AskRelayIntegration() {
  return (
    <article className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-start gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-foreground">
          <Bot className="size-5 text-mint-strong" />
        </span>

        <div>
          <p className="font-mono text-[0.65rem] tracking-[0.14em] text-mint-foreground uppercase">
            AI service
          </p>

          <h3 className="mt-2 text-xl font-medium">
            OpenAI powers Ask Relay
          </h3>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        Relay uses an AI service layer to generate answers from authorized
        handoffs, assignments, calculated continuity facts, and approved
        supporting evidence.
      </p>

      <div className="mt-5 flex items-center gap-3 rounded-xl border border-border bg-background p-4">
        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-foreground">
          <Bot className="size-4 text-background" />
        </span>

        <div>
          <p className="text-sm font-medium">OpenAI</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Grounded answers for Ask Relay
          </p>
        </div>

        <span className="ml-auto rounded-full bg-accent px-2 py-1 font-mono text-[0.58rem] text-mint-foreground uppercase">
          Governed
        </span>
      </div>

      <div className="mt-3 flex items-start gap-3 rounded-xl bg-muted/50 p-4">
        <Cable className="mt-0.5 size-4 shrink-0 text-mint-strong" />

        <div>
          <p className="text-sm font-medium">Controlled by Relay permissions</p>

          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Ask Relay is read-only and limited to the continuity records and
            approved evidence each user is authorized to view.
          </p>
        </div>
      </div>
    </article>
  )
}

function IntegrationCard({ tool }: { tool: Integration }) {
  const Icon = tool.icon

  return (
    <div className="flex min-h-24 items-center gap-3 bg-card px-5 py-5 transition-colors hover:bg-accent/50">
      {tool.src ? (
        <img
          src={tool.src}
          alt={`${tool.name} logo`}
          width={30}
          height={30}
          className="size-8 shrink-0 object-contain"
        />
      ) : Icon ? (
        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-accent">
          <Icon className="size-4 text-mint-foreground" />
        </span>
      ) : null}

      <div className="min-w-0">
        <p className="truncate text-sm font-medium">{tool.name}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
          {tool.category}
        </p>
      </div>
    </div>
  )
}
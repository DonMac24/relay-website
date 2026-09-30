import Image from 'next/image'
import { ArrowRight, ArrowUpRight, ShieldCheck, Users, CalendarClock, Plus } from 'lucide-react'
import { AskRelay } from './ask-relay'
import { DemoCta } from './demo-cta'
import { BusinessCase } from './business-case'
import { HandoffWalkthrough, MobileNavigation } from './relay-experience'
import { IntegrationShowcase } from './integration-showcase'
import s from './continuity-home.module.css'

const links = [['Why Relay','#difference'],['The cost','#business-case'],['How it works','#how-it-works'],['Ask Relay','#ask-relay'],['Integrations','#integrations'],['FAQ','#faq']]
const questions = [
 ['Is Relay a chatbot?', 'No. Relay is a handoff workflow and a record of who owns what. Ask Relay is one part of it, for finding answers within that record.'],
 ['Does it replace our existing tools?', 'No. Your tools stay the source of truth for documents, tasks and meetings. Relay records what needs to continue, who owns it and why.'],
 ['Does assigning work give someone access?', 'No. Access is tracked separately. Publishing a handoff doesn’t grant permissions, and unresolved access issues stay visible until they’re fixed.'],
 ['What does the AI actually do?', 'It proposes relevant work from connected systems, answers questions using authorized context, and turns handoff data into reports. People confirm every assignment and publication.'],
 ['How do HR and managers see progress?', 'Managers handle their own transitions and handoffs. HR gets an organization-wide view of requests, active handoffs and published records, with reports it can pin. A published handoff means work was assigned, not that it’s done.'],
 ['Can BambooHR start a handoff automatically?', 'In our early pilot, yes, once connected and validated. The manager still confirms the transition and controls employee input, assignments and publication.'],
 ['Can we try it?', 'Relay is an early-stage working product. Book a demo and we’ll talk about whether a structured pilot fits your team.'],
]

export function ContinuityHome() {
 return <div className={s.site} id="top">
  <a href="#main" className={s.skip}>Skip to content</a>
  <header className={s.header}><div className={s.nav}>
   <a href="#top" aria-label="Relay ECI home"><span className={s.logoFrame}><Image src="/logos/relay-logo-lavender.png" alt="Relay ECI" width={2048} height={757} priority className={s.logo}/></span></a>
   <nav className={s.desktopNav} aria-label="Main navigation">{links.map(([label,url])=><a key={url} href={url}>{label}</a>)}</nav>
   <a className={s.smallButton} href="#demo">Request a demo <ArrowUpRight size={16}/></a>
   <MobileNavigation links={links}/>
  </div></header>
  <main id="main">
   <section className={`${s.wrap} ${s.hero}`}>
    <div className={s.heroCopy}>
     <p className={s.eyebrow}><span className={s.dot}/> Work continuity for HR, Operations and IT</p>
     <h1>Someone’s leaving.<br/>Their work <span>isn’t.</span></h1>
     <p className={s.heroLead}>When roles change, the work shouldn’t start over. Relay helps managers find existing work across connected systems, assign its next owner, and provide the context to keep it moving.</p>
     <div className={s.actions}><a href="#demo" className={s.primary}>Request a demo <ArrowRight size={18}/></a><a href="#how-it-works" className={s.secondary}>See how it works</a></div>
    </div>
    <figure className={s.heroDiagram}>
     <Image src="/logos/relay-operating-model.svg" alt="Relay links HR, the manager and the next owner through three steps: Discover, Review and assign, Preview and publish. Its continuity hub links to SharePoint, Outlook, Jira, Confluence, GitLab, Asana and other existing systems while source access stays separate." width={900} height={675} priority />
    </figure>
   </section>

   <section id="difference" className={`${s.wrap} ${s.section}`}>
    <div className={s.sectionIntro}><p className={s.eyebrow}>Why Relay</p><h2>A memo and a goodbye isn’t a handoff.</h2><p>Most handoffs are a document written in someone’s last busy week. It holds what they remembered, not everything they owned. Relay starts from the work itself.</p></div>
    <div className={s.problemGrid}>
     <article><Users/><h3>Found, not remembered</h3><p>Relay’s AI looks across connected systems for the recurring meetings, open tickets and documents a person owned, so the weekly forecast call makes the handoff even if nobody wrote it down.</p></article>
     <article><ShieldCheck/><h3>Every responsibility has a name</h3><p>Each piece of work goes to a specific person, with the decisions, files and history they need to keep it moving.</p></article>
     <article><CalendarClock/><h3>Access problems show up early</h3><p>If the new owner can’t open the workbook, you find out during the handoff, not the morning of the call. Unresolved gaps stay flagged until someone closes them.</p></article>
     <article><ArrowRight/><h3>Works when the timing is bad</h3><p>Sudden departures, medical leave and internal moves rarely come with a tidy two weeks. Relay can build the handoff from system evidence, with or without the departing person’s input.</p></article>
   </div>
   </section>
   <BusinessCase />
   <HandoffWalkthrough/>
   <AskRelay/>
   <section id="integrations" className={`${s.section} ${s.integrationSection}`}><div className={`${s.wrap} ${s.integrationLayout}`}>
    <div><p className={s.eyebrow}>Integrations</p><h2>Works with the tools you already have.</h2><p className={s.sectionText}>Relay connects read-only and links back to the original source. Your documents, tickets and meetings stay where they are.</p><a className={s.textLink} href="#demo">Explore your setup <ArrowRight size={18}/></a></div>
    <IntegrationShowcase/>
   </div><div className={s.wrap}><article className={s.hrIntegration} aria-labelledby="hr-trigger-title">
    <div className={s.hrIntegrationTop}><Image src="/logos/bamboohr.svg" alt="BambooHR" width={150} height={30} className={s.hrLogo}/></div>
    <h3 id="hr-trigger-title">Start from the HR record. <small>(BambooHR, early pilot)</small></h3>
    <p className={s.hrLead}>When HR records a departure in BambooHR, Relay can detect it on a scheduled check, prepare a confidential draft and notify the manager. The manager decides what happens next. Manual handoffs are always available.</p>
    <ol className={s.hrSteps}>
     <li><span>1</span><div><strong>HR records the departure</strong><p>Use the employee record already maintained in BambooHR.</p></div></li>
     <li><span>2</span><div><strong>Relay prepares a draft</strong><p>Eligible departures trigger a draft and manager notification.</p></div></li>
     <li><span>3</span><div><strong>The manager takes it forward</strong><p>Confirm the transition, invite employee input, then review and assign the work.</p></div></li>
    </ol>
   </article></div></section>
   <section id="faq" className={`${s.wrap} ${s.section} ${s.faq}`}><div><p className={s.eyebrow}>FAQ</p><h2>Questions we usually get.</h2></div><div>{questions.map(([q,a])=><details key={q}><summary>{q}<Plus size={20}/></summary><p>{a}</p></details>)}</div></section>
   <div className={s.demo}><DemoCta/></div>
  </main>
  <footer className={`${s.wrap} ${s.footer}`}><div><a href="#top" aria-label="Relay ECI home"><span className={s.logoFrame}><Image src="/logos/relay-logo-lavender.png" alt="Relay ECI" width={2048} height={757} className={s.logo}/></span></a><p>Keep the work when people move on.</p></div><nav aria-label="Footer">{links.map(([label,url])=><a key={url} href={url}>{label}</a>)}</nav><div><a className={s.textLink} href="#demo">Let’s talk <ArrowUpRight size={17}/></a><small>© {new Date().getFullYear()} Relay ECI</small></div></footer>
 </div>
}

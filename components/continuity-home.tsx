import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Check, ShieldCheck, Link2, Users, ListChecks, CalendarClock, Plus } from 'lucide-react'
import { AskRelay } from './ask-relay'
import { DemoCta } from './demo-cta'
import { HandoffWalkthrough, MobileNavigation } from './relay-experience'
import s from './continuity-home.module.css'

const systems = [['SharePoint','sharepoint'],['Outlook','outlook'],['Jira','jira'],['Confluence','confluence'],['Azure DevOps','azure-devops'],['GitLab','gitlab'],['Google Drive','google-drive'],['Asana','asana'],['Monday.com','monday']]
const links = [['Why Relay','#difference'],['How it works','#how-it-works'],['Ask Relay AI','#ask-relay'],['Integrations','#integrations'],['FAQs','#faq']]
const questions = [
 ['Is Relay a chatbot or a handoff platform?', 'Relay is a continuity workflow and hub for work. Managers discover evidence, review and assign responsibilities, then prepare and publish a handoff. Ask Relay AI helps people find answers within that process.'],
 ['Does Relay replace our existing tools?', 'Your existing tools remain the source of record. Relay brings relevant work into a handoff through connected integrations and keeps links back to the original sources.'],
 ['Does assigning work grant someone access?', 'No. Relay tracks source access separately from handoff preparation. A published link does not grant permission, and unresolved access issues remain visible for follow-up.'],
 ['What does the AI do?', 'AI discovery proposes relevant work from connected systems. Ask Relay AI answers questions using authorized context, while natural-language reporting turns continuity data into reports you can save and pin. People confirm assignments and publication.'],
 ['How do HR and managers track progress?', 'Managers can confirm assigned transition requests, manage their active handoffs and refer back to published records. HR has a workspace-wide oversight view of transitions, active handoffs and published handoffs, with reports it can pin to its dashboard. Both views follow the same linked records. Publication does not mean recipients have completed their assigned work.'],
 ['Can BambooHR start a handoff?', 'The BambooHR departure connector is in early pilot. After connection setup and validation, scheduled checks can detect eligible recorded departures, prepare a confidential draft and notify the responsible manager. The manager confirms the transition and controls employee participation, work assignment and publication. Manual handoffs remain available.'],
 ['Can we try it with our team?', 'Relay is an early-stage working product. Request a demo to explore the workflow and discuss whether a structured pilot fits your organization. Integration availability and setup can be reviewed during the walkthrough.'],
]

export function ContinuityHome() {
 return <div className={s.site} id="top">
  <a href="#main" className={s.skip}>Skip to content</a>
  <header className={s.header}><div className={s.nav}>
   <a href="#top" aria-label="Relay ECI home"><Image src="/relay-eci-logo-coral.png" alt="Relay ECI" width={2048} height={684} priority className={s.logo}/></a>
   <nav className={s.desktopNav} aria-label="Main navigation">{links.map(([label,url])=><a key={url} href={url}>{label}</a>)}</nav>
   <a className={s.smallButton} href="#demo">Request a demo <ArrowUpRight size={16}/></a>
   <MobileNavigation links={links}/>
  </div></header>
  <main id="main">
   <section className={`${s.wrap} ${s.hero}`}>
    <p className={s.eyebrow}><span className={s.dot}/> AI-powered handoffs. Human-led decisions.</p>
    <h1>When people leave,<br/>the knowledge <span>shouldn’t.</span></h1>
    <p className={s.heroLead}>Give the next person more than a folder of links.<br className={s.desktopBreak}/> Use AI to discover the work, then review it, assign ownership and preserve the context.</p>
    <div className={s.actions}><a href="#how-it-works" className={s.primary}>Explore a handoff <ArrowRight size={18}/></a></div>
    <p className={s.heroNote}>A working product for HR, Operations and IT teams.</p>
   </section>

   <section id="difference" className={`${s.wrap} ${s.section}`}>
    <div className={s.sectionIntro}><p className={s.eyebrow}>The work doesn’t leave with them</p><h2>The person changes.<br/>The responsibility remains.</h2><p>A departure, extended leave or internal move can leave important work between owners. Relay helps managers follow each transition from the initial request through active preparation to a published handoff.</p></div>
    <div className={s.problemGrid}>
     <article><Users/><h3>“Who’s taking this over?”</h3><p>Give each responsibility a named recipient and the context they need to continue.</p><span>Clear ownership <ArrowRight size={16}/></span></article>
     <article><ShieldCheck/><h3>“Can they access it?”</h3><p>Keep source-access issues visible alongside the handoff, with follow-up for unresolved gaps.</p><span>Visible access gaps <ArrowRight size={16}/></span></article>
     <article><CalendarClock/><h3>“Where does it stand?”</h3><p>Track transition requests, manage active handoffs and view published records.</p><span>From request to publication <ArrowRight size={16}/></span></article>
    </div>
   </section>
   <HandoffWalkthrough/>
   <AskRelay/>
   <section id="integrations" className={`${s.section} ${s.integrationSection}`}><div className={`${s.wrap} ${s.integrationLayout}`}>
    <div><p className={s.eyebrow}>Connected by design</p><h2>Your tools.<br/>Your context.<br/><span>One handoff.</span></h2><p className={s.sectionText}>Read-only API integrations bring relevant work into review, with links back to its original sources.</p><a className={s.textLink} href="#demo">Explore your setup <ArrowRight size={18}/></a></div>
    <div><div className={s.systemGrid}>{systems.map(([name,file])=><div key={file}><Image src={`/logos/${file}.svg`} alt="" width={32} height={32}/><span>{name}</span></div>)}</div><p className={s.note}>Discovery uses the systems connected to your workspace. We’ll review integration availability and setup in your demo.</p></div>
   </div><div className={s.wrap}><article className={s.hrIntegration} aria-labelledby="hr-trigger-title">
    <div className={s.hrIntegrationTop}><Image src="/logos/bamboohr.svg" alt="BambooHR" width={150} height={30} className={s.hrLogo}/><span className={s.hrPilot}>Departure integration · Early pilot</span></div>
    <h3 id="hr-trigger-title">An HR update can start the handoff.</h3>
    <p className={s.hrLead}>HR records the departure in BambooHR. Once configured, Relay can pick it up on a scheduled check and prepare a confidential draft for the responsible manager.</p>
    <ol className={s.hrSteps}>
     <li><span>1</span><div><strong>HR records the departure</strong><p>Use the employee record already maintained in BambooHR.</p></div></li>
     <li><span>2</span><div><strong>Relay prepares a draft</strong><p>Eligible departures trigger a draft and manager notification.</p></div></li>
     <li><span>3</span><div><strong>The manager takes it forward</strong><p>Confirm the transition, invite employee input, then review and assign the work.</p></div></li>
    </ol>
   </article></div></section>
   <section className={`${s.wrap} ${s.section} ${s.controlSection}`}>
    <div className={s.sectionIntro}><p className={s.eyebrow}>People stay in control</p><h2>AI finds the context.<br/>Your team makes the decisions.</h2></div>
    <div className={s.controlGrid}><article><ListChecks/><h3>Review before assignment</h3><p>Confirm proposed work and decide what belongs in the handoff.</p></article><article><Users/><h3>Oversight for HR and managers</h3><p>Managers follow their own transitions and handoffs. HR monitors workspace-wide progress and outstanding action.</p></article><article><Link2/><h3>Source permissions stay put</h3><p>Relay does not grant source access simply because someone receives an assignment.</p></article></div>
   </section>
   <section className={s.pilotSection}><div className={s.wrap}><div><p className={s.eyebrow}>Built from a familiar problem</p><h2>Less time reconstructing.<br/>More context to carry on.</h2></div><div><p>Relay grew out of the handoff gaps encountered in business analysis and transformation work. We’re now looking for teams to explore it through real transitions.</p><a href="#demo" className={s.textLink}>Talk about a pilot <ArrowRight size={18}/></a><span className={s.pilotTag}><Check size={15}/> Working product · Early-stage pilots</span></div></div></section>
   <section id="faq" className={`${s.wrap} ${s.section} ${s.faq}`}><div><p className={s.eyebrow}>A few useful answers</p><h2>Before you<br/>hand it over.</h2></div><div>{questions.map(([q,a])=><details key={q}><summary>{q}<Plus size={20}/></summary><p>{a}</p></details>)}</div></section>
   <div className={s.demo}><DemoCta/></div>
  </main>
  <footer className={`${s.wrap} ${s.footer}`}><div><a href="#top" aria-label="Relay ECI home"><Image src="/relay-eci-logo-coral.png" alt="Relay ECI" width={2048} height={684} className={s.logo}/></a><p>A continuity workflow<br/>and hub for work.</p></div><nav aria-label="Footer">{links.map(([label,url])=><a key={url} href={url}>{label}</a>)}</nav><div><a className={s.textLink} href="#demo">Let’s talk <ArrowUpRight size={17}/></a><small>© {new Date().getFullYear()} Relay ECI</small></div></footer>
 </div>
}

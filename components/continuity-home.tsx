import Image from "next/image";
import { AskRelay } from "./ask-relay";
import {
  ArrowRight,
  Check,
  FileText,
  ShieldCheck,
  Users,
  Sparkles,
  Link2,
  ArrowUpRight,
} from "lucide-react";
import { DemoCta } from "./demo-cta";
import s from "./continuity-home.module.css";

const systems = [
  ["SharePoint", "sharepoint"],
  ["Outlook", "outlook"],
  ["Jira", "jira"],
  ["Confluence", "confluence"],
  ["Azure DevOps", "azure-devops"],
  ["GitLab", "gitlab"],
  ["Google Drive", "google-drive"],
  ["Asana", "asana"],
  ["Monday.com", "monday"],
];

export function ContinuityHome() {
  return (
    <div className={s.site} id="top">
      <header className={s.header}>
        <div className={s.nav}>
          <a href="#top" aria-label="Relay ECI home">
            <Image
              src="/relay-eci-logo-coral.png"
              alt="Relay ECI"
              width={2048}
              height={684}
              priority
              className={s.logo}
            />
          </a>
          <nav aria-label="Main navigation" className={s.desktopNav}>
            <a href="#difference">Why Relay</a>
            <a href="#how-it-works">The Handoff</a>
          <a href="#ask-relay">Ask Relay</a>
            <a href="#integrations">Integrations</a>
          </nav>
          <a href="#demo" className={s.smallButton}>
            Request a demo <ArrowUpRight size={16} />
          </a>
        </div>
        <nav aria-label="Mobile navigation" className={s.mobileNav}>
          <a href="#difference">Why Relay</a>
          <a href="#how-it-works">The Handoff</a>
          <a href="#ask-relay">Ask Relay</a>
          <a href="#integrations">Integrations</a>
        </nav>
      </header>
      <main>
        <section className={`${s.wrap} ${s.hero}`}>
          <div className={s.heroCopy}>
            <p className={s.eyebrow}>
              <span className={s.dot} /> Employee continuity intelligence
            </p>
            <h1>
              Someone leaves.
              <br />
              The work{" "}
              <span>
                still needs
                <br className={s.desktopBreak} /> an owner.
              </span>
            </h1>
            <p className={s.lead}>
              Turn scattered work into a manager-approved handoff—with named
              owners, source-access checks, and a workspace for the people
              taking over.
            </p>
            <div className={s.actions}>
              <a className={s.primary} href="#how-it-works">
                See a handoff in action <ArrowRight size={18} />
              </a>
              <a className={s.textLink} href="#demo">
                Request a demo <ArrowUpRight size={16} />
              </a>
            </div>
            <p className={s.heroNote}>
              For departures, extended leave, and role changes.
            </p>
          </div>
          <div className={s.heroVisual}>
            <div className={s.recordPreview} aria-label="Compact preview of the published continuity record">
              <div className={s.recordProfile}>
                <span className={s.recordPhoto}>
                  <Image src="/alex-morgan-profile.png" alt="Alex Morgan" width={198} height={210} />
                </span>
                <div className={s.recordTitle}>
                  <p>PUBLISHED CONTINUITY RECORD</p>
                  <h3>Alex Morgan</h3>
                  <span>Product Manager</span>
                </div>
              </div>
              <dl className={s.recordPeople}>
                <div><dt>From</dt><dd>Alex Morgan</dd></div>
                <div><dt>Prepared for</dt><dd>Sarah Chen</dd></div>
                <div><dt>Managed by</dt><dd>Jordan Patel</dd></div>
              </dl>
              <p className={s.recordLabel}>My assigned work <ArrowRight size={12} /></p>
              <div className={s.recordCategories}>
                <div className={s.recordCategory}>
                  <h4>Projects <span>4</span></h4>
                  <div className={s.recordItem}>
                    <strong>Enterprise renewal portfolio</strong>
                    <span>Sarah Chen · Completed</span>
                    <small>1 linked source ↓</small>
                  </div>
                  <div className={s.recordItem}>
                    <strong>Q4 territory planning</strong>
                    <span>Sarah Chen · Completed</span>
                    <small>1 linked source ↓</small>
                  </div>
                </div>
                <div className={s.recordCategory}>
                  <h4>Responsibilities <span>4</span></h4>
                  <div className={s.recordItem}>
                    <strong>Approve commercial exceptions</strong>
                    <span>Sarah Chen · To do</span>
                    <em>Access issue</em>
                    <small>1 linked source ↓</small>
                  </div>
                  <div className={s.recordItem}>
                    <strong>Run forecast calls</strong>
                    <span>Sarah Chen · To do</span>
                    <small>1 linked source ↓</small>
                  </div>
                </div>
              </div>
              <div className={s.recordRisk}>
                <h4>Risks <span>1</span></h4>
                <strong>Two renewals require executive sponsorship</strong>
                <small>1 linked source ↓</small>
              </div>
              <div className={s.recordAccess}>
                <strong>Source access</strong>
                <span>1 confirmed by recipient · 1 reported issue · 4 other checks</span>
              </div>
            </div>
            <div className={s.caption}>
            </div>
          </div>
        </section>
        <div className={s.outcomeStrip}>
          <div className={s.wrap}>
            <span>
              <Check /> Make ownership explicit
            </span>
            <span>
              <Check /> Surface access gaps
            </span>
            <span>
              <Check /> Keep context with the work
            </span>
          </div>
        </div>
        <section id="difference" className={`${s.wrap} ${s.visualDifference}`}>
          <p className={s.eyebrow}>Why Relay</p>
          <h2>A handoff needs <span>more than an answer.</span></h2>
          <p className={s.visualIntro}>Copilot and other AI assistants can help find and summarize context. But a handoff still needs named owners, access checks, and manager decisions. Relay brings those together in one structured workflow.</p>
          <div className={s.evidenceGrid}>
            <article className={s.evidenceCard}>
              <div className={s.evidenceTop}><Users size={20} /><h3>A named owner</h3></div>
              <div className={s.evidenceSample}>
                <span className={s.sampleLabel}>Responsibility</span>
                <strong>Run forecast calls</strong>
                <div className={s.ownerSample}><span className={s.miniAvatar}>SC</span><div><strong>Sarah Chen</strong><span>Assigned recipient</span></div><Check size={17} /></div>
              </div>
              <p>Make it clear who takes over.</p>
            </article>
            <article className={s.evidenceCard}>
              <div className={s.evidenceTop}><ShieldCheck size={20} /><h3>A visible gap</h3></div>
              <div className={s.evidenceSample}>
                <span className={s.sampleLabel}>Responsibility</span>
                <strong>Approve commercial exceptions</strong>
                <div className={s.gapSample}><span className={s.warning}>Access issue</span><span>1 linked source</span></div>
              </div>
              <p>Keep unresolved access issues in view.</p>
            </article>
            <article className={s.evidenceCard}>
              <div className={s.evidenceTop}><FileText size={20} /><h3>A lasting record</h3></div>
              <div className={s.evidenceSample}>
                <span className={s.sampleLabel}>Published continuity record</span>
                <strong>Alex Morgan</strong>
                <div className={s.recordSample}><span>Prepared for <strong>Sarah Chen</strong></span><span>Managed by <strong>Jordan Patel</strong></span></div>
              </div>
              <p>Give the next owner a place to start.</p>
            </article>
          </div>
          <p className={s.exampleNote}>Illustrative details from the handoff above.</p>
        </section>
        <section id="how-it-works" className={s.workflow}>
          <div className={s.wrap}>
            <div className={s.flowHeading}><p className={s.eyebrow}>The handoff</p><h2>Follow the work.<br />From Alex to Sarah.</h2><p>One manager-led process, from discovery to the Continuity Hub.</p></div>
            <div className={s.flowRail}>
              <div><span>01</span><strong>Discover</strong><p>Find the work and its sources.</p></div>
              <div><span>02</span><strong>Review & assign</strong><p>Confirm what matters and who takes over.</p></div>
              <div><span>03</span><strong>Preview & publish</strong><p>Review each recipient’s handoff.</p></div>
            </div>
            <div className={s.handoffScene}>
              <div className={s.sceneProfile}>
                <span className={s.recordPhoto}><Image src="/alex-morgan-profile.png" alt="Alex Morgan" width={198} height={210} /></span>
                <div><span className={s.sampleLabel}>From</span><h3>Alex Morgan</h3><p>Product Manager</p></div>
                <div className={s.sceneManager}><span className={s.sampleLabel}>Managed by</span><strong>Jordan Patel</strong></div>
              </div>
              <div className={s.sceneTransfer}><ArrowRight size={24} aria-hidden="true" /></div>
              <div className={s.sceneWork}>
                <div className={s.sceneRecipient}><Image src="/sarah-chen-profile.png" alt="Sarah Chen" width={60} height={60} style={{ width: 60, height: 60, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} /><div><span className={s.sampleLabel}>Prepared for Sarah Chen</span><h3>My assigned work</h3></div></div>
                <div className={s.sceneRow}><div><strong>Run forecast calls</strong><span>Responsibilities · 1 linked source</span></div><span className={s.todoPill}>To do</span></div>
                <div className={s.sceneRow}><div><strong>Approve commercial exceptions</strong><span>Responsibilities · 1 linked source</span></div><span className={s.warning}>Access issue</span></div>
                <p className={s.sceneFoot}>Continuity Hub · Illustrative record</p>
              </div>
            </div>
            <p className={s.flowNote}>Original tools remain the source of record. Publishing a link does not grant access.</p>
          </div>
        </section>
        <AskRelay />
        <section className={s.integrations} id="integrations">
          <div className={s.wrap}>
            <p className={s.eyebrow}>Integrations</p>
            <h2>
              Keep your tools.
              <br />
              Connect the handoff.
            </h2>
            <p className={s.lead}>
              Bring relevant work into review with links back to its original
              sources.
            </p>
            <div className={s.systemGrid}>
              {systems.map(([name, file]) => (
                <div key={file}>
                  <Image
                    src={`/logos/${file}.svg`}
                    alt=""
                    width={25}
                    height={25}
                  />
                  <span>{name}</span>
                </div>
              ))}
            </div>
            <div className={s.integrationNotes}>
              <p>
                <ShieldCheck size={20} />
                <span>
                  <strong>Organizational identity</strong>Microsoft Entra ID and
                  workspace roles support who can access Relay.
                </span>
              </p>
              <p>
                <Link2 size={20} />
                <span>
                  <strong>Existing source permissions</strong>Relay links to
                  supporting work. Source-access checks do not change
                  permissions.
                </span>
              </p>
            </div>
          </div>
        </section>
        <div className={s.demo}>
          <DemoCta />
        </div>
      </main>
      <footer className={`${s.wrap} ${s.footer}`}>
        <a href="#top" aria-label="Relay ECI home">
          <Image
            src="/relay-eci-logo-coral.png"
            alt="Relay ECI"
            width={2048}
            height={684}
            className={s.logo}
          />
        </a>
        <p>
          Keep ownership and context moving
          <br />
          through every employee transition.
        </p>
        <nav aria-label="Footer">
          <a href="#difference">Why Relay</a>
          <a href="#integrations">Integrations</a>
          <a href="#demo">Request a demo</a>
        </nav>
        <small>© {new Date().getFullYear()} Relay ECI</small>
      </footer>
    </div>
  );
}

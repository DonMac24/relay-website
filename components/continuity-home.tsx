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
              <div className={s.recordTitle}>
                <p>PUBLISHED CONTINUITY RECORD</p>
                <h3>Alex Morgan</h3>
                <span>Product Manager · Aug 30, 2026</span>
              </div>
              <div className={s.publishedStatus}>
                <strong>PUBLISHED</strong>
                <span>Official read-only continuity record</span>
              </div>
              <dl className={s.recordPeople}>
                <div><dt>From</dt><dd>Alex Morgan</dd></div>
                <div><dt>Prepared for</dt><dd>Relay Demo Recipient</dd></div>
                <div><dt>Managed by</dt><dd>Relay VIP Demo</dd></div>
              </dl>
              <p className={s.recordLabel}>My assigned work <ArrowRight size={12} /></p>
              <div className={s.recordCategories}>
                <div className={s.recordCategory}>
                  <h4>Projects <span>4</span></h4>
                  <div className={s.recordItem}>
                    <strong>Enterprise renewal portfolio</strong>
                    <span>Relay Demo Recipient · Completed</span>
                    <small>1 linked source ↓</small>
                  </div>
                  <div className={s.recordItem}>
                    <strong>Q4 territory planning</strong>
                    <span>Relay Demo Recipient · Completed</span>
                    <small>1 linked source ↓</small>
                  </div>
                </div>
                <div className={s.recordCategory}>
                  <h4>Responsibilities <span>4</span></h4>
                  <div className={s.recordItem}>
                    <strong>Approve commercial exceptions</strong>
                    <span>Relay Demo Recipient · To do</span>
                    <em>Access issue</em>
                    <small>1 linked source ↓</small>
                  </div>
                  <div className={s.recordItem}>
                    <strong>Run forecast calls</strong>
                    <span>Relay Demo Recipient · To do</span>
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
                <strong>Source access · Demo simulation</strong>
                <span>1 confirmed by recipient · 1 reported issue · 4 other checks</span>
              </div>
            </div>
            <div className={s.caption}>
              <span className={s.captionLine} /> Compact demo preview · Selected items shown
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
        <section id="difference" className={`${s.wrap} ${s.difference}`}>
          <div>
            <p className={s.eyebrow}>Beyond the generated handoff</p>
            <h2>
              An answer can tell you
              <br />
              what needs to happen.
              <br />
              <span>Who makes it happen?</span>
            </h2>
          </div>
          <div className={s.differenceCopy}>
            <p>
              AI can help find information and draft a handoff. Your team still
              needs to decide what matters, assign responsibility, check access,
              and publish what each person should receive.
            </p>
            <p>
              <strong>
                Relay gives those decisions a shared place to live.
              </strong>{" "}
              AI assists within the process. Managers control the handoff.
            </p>
            <a href="#how-it-works" className={s.textLink}>
              Follow the transfer <ArrowRight size={17} />
            </a>
          </div>
          <div className={s.proofGrid}>
            {[
              {
                icon: Users,
                number: "01",
                title: "Ownership you can point to.",
                text: "Assign confirmed work to named recipients. See what still has no owner.",
              },
              {
                icon: ShieldCheck,
                number: "02",
                title: "Gaps you can act on.",
                text: "Keep access issues and unverified checks visible alongside the work they affect.",
              },
              {
                icon: FileText,
                number: "03",
                title: "A handoff people can use.",
                text: "Publish assigned work, operational context, and approved source links into the Continuity Hub.",
              },
            ].map(({ icon: Icon, number, title, text }) => (
              <article className={s.proof} key={number}>
                <div>
                  <Icon size={24} />
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="how-it-works" className={s.workflow}>
          <div className={s.wrap}>
            <div className={s.sectionHead}>
              <div>
                <p className={s.eyebrow}>One transfer. Two sides.</p>
                <h2>
                  From “what did they own?”
                  <br />
                  to “here’s what’s yours.”
                </h2>
              </div>
              <p>
                Follow the work from manager review to the person taking over.
              </p>
            </div>
            <div className={s.transferGrid}>
              <article className={s.managerCard}>
                <div className={s.cardBar}>
                  <Users size={18} /> Manager workspace{" "}
                  <span>01 / PREPARE</span>
                </div>
                <div className={s.transferBody}>
                  <h3>Decide what continues.</h3>
                  <p>
                    Review discovered work, confirm responsibility, and check
                    the sources that support it.
                  </p>
                  <ol className={s.steps}>
                    <li>
                      <span>1</span>
                      <div>
                        <strong>Discover & validate</strong>
                        <p>
                          Review connected work with optional input from the
                          departing employee.
                        </p>
                      </div>
                    </li>
                    <li>
                      <span>2</span>
                      <div>
                        <strong>Assign & check</strong>
                        <p>
                          Name recipients and identify gaps in supporting source
                          access.
                        </p>
                      </div>
                    </li>
                    <li>
                      <span>3</span>
                      <div>
                        <strong>Preview & publish</strong>
                        <p>
                          See what each recipient will receive before publishing
                          the handoff.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </article>
              <article className={s.recipientCard}>
                <div className={s.cardBar}>
                  <FileText size={18} /> Continuity Hub{" "}
                  <span>02 / TAKE OVER</span>
                </div>
                <div className={s.transferBody}>
                  <h3>A starting point for the next owner.</h3>
                  <p>
                    Assigned work and supporting context, together in one
                    recipient workspace.
                  </p>
                  <div className={s.recipientExample}>
                    <div className={s.recipientTop}>
                      <span className={s.miniAvatar}>SC</span>
                      <strong>Sarah’s assigned work</strong>
                      <small>Illustrative example</small>
                    </div>
                    <h4>Approve production releases</h4>
                    <p>
                      Review release readiness and coordinate the production
                      approval.
                    </p>
                    <div className={s.sourceRow}>
                      <FileText size={17} />
                      <span>Release runbook</span>
                      <span className={s.warning}>Access issue</span>
                    </div>
                    <div className={s.sourceRow}>
                      <FileText size={17} />
                      <span>Release calendar</span>
                      <span className={s.sourceLabel}>Source link</span>
                    </div>
                  </div>
                  <p className={s.finePrint}>
                    Source permissions still apply. Publishing a link does not
                    grant access.
                  </p>
                </div>
              </article>
            </div>
            <div className={s.workflowBottom}>
              <strong>The handoff stays connected to the original work.</strong>
              <span>Your existing tools remain the source of record.</span>
            </div>
          </div>
        </section>
        <AskRelay />
        <section className={s.integrations} id="integrations">
          <div className={s.wrap}>
            <p className={s.eyebrow}>Connected to the work</p>
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

'use client'
import Image from 'next/image'
import { useRef, useState, type KeyboardEvent } from 'react'
import { ArrowRight, Check, FileText, ShieldCheck, Sparkles, X, Maximize2, CircleCheck, Menu } from 'lucide-react'
import s from './continuity-home.module.css'

export function ProductPreview() {
 const dialog = useRef<HTMLDialogElement>(null)
 return <div className={s.productPreview}>
  <div className={s.previewLabels}><span><Sparkles size={15}/> Discover ongoing work</span><span><UsersIcon/> Assign the next owner</span><span><ShieldCheck size={15}/> Surface readiness gaps</span></div>
  <button className={s.screenshotButton} onClick={()=>dialog.current?.showModal()} aria-label="Enlarge the Relay dashboard screenshot"><Image src="/relay-dashboard.png" alt="Relay demo dashboard showing active handoffs, open action items, risks and upcoming transitions" width={2048} height={1093} priority sizes="(max-width: 800px) 95vw, 1050px"/><span className={s.enlarge}><Maximize2 size={16}/> Explore the dashboard</span></button>
  <p className={s.note}>The current Relay app. Demo names and records shown.</p>
  <dialog aria-label="Relay dashboard preview" ref={dialog} className={s.previewDialog} onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close()}}><div><button autoFocus onClick={()=>dialog.current?.close()} className={s.closeDialog} aria-label="Close dashboard preview"><X size={24}/></button><Image src="/relay-dashboard.png" alt="Full Relay demo dashboard" width={2048} height={1093} sizes="95vw"/><p>Relay dashboard · Demo workspace</p></div></dialog>
 </div>
}
function UsersIcon(){return <CircleCheck size={15}/>}
const steps=[
 {title:'Discover',headline:'Find the work behind the handoff.',body:'Run agentic discovery across connected systems. Bring proposed work and its supporting sources together for review.',action:'Review proposed work',label:'Discovery proposal',status:'For review'},
 {title:'Review & assign',headline:'Make the next owner explicit.',body:'Review what matters, add missing context and assign responsibilities. Keep recipient access issues visible as you prepare the handoff.',action:'Preview the handoff',label:'Reviewed responsibility',status:'Assigned'},
 {title:'Preview & publish',headline:'Give the recipient a place to start.',body:'Review the recipient’s handoff and outstanding gaps, then publish a usable record to the Continuity Hub. Source permissions still apply.',action:'Start again',label:'Published continuity record',status:'Published'},
]
export function HandoffWalkthrough(){
 const [active,setActive]=useState(0)
 function navigate(e:KeyboardEvent<HTMLButtonElement>,index:number){
  let next=index
  if(e.key==='ArrowRight')next=(index+1)%3;else if(e.key==='ArrowLeft')next=(index+2)%3;else if(e.key==='Home')next=0;else if(e.key==='End')next=2;else return
  e.preventDefault();setActive(next);document.getElementById(`step-${next}`)?.focus()
 }
 const step=steps[active]
 return <section id="how-it-works" className={s.workflow}><div className={s.wrap}>
  <div className={s.workflowHeading}><div><p className={s.eyebrow}>The handoff, made visible</p><h2>Keep the work moving.<br/><span>One step at a time.</span></h2></div><p>Follow an example from Alex to Sarah.<br/>You decide what moves forward.</p></div>
  <div className={s.stepTabs} role="tablist" aria-label="Handoff walkthrough">{steps.map((st,i)=><button key={st.title} role="tab" id={`step-${i}`} aria-selected={active===i} aria-controls={`panel-${i}`} tabIndex={active===i?0:-1} onClick={()=>setActive(i)} onKeyDown={e=>navigate(e,i)}><span>0{i+1}</span>{st.title}<ArrowRight size={17}/></button>)}</div>
  <div id={`panel-${active}`} role="tabpanel" aria-labelledby={`step-${active}`} className={s.walkPanel}>
   <div className={s.walkCopy}><h3>{step.headline}</h3><p>{step.body}</p><button className={s.walkNext} onClick={()=>setActive((active+1)%3)}>{step.action}<ArrowRight size={18}/></button></div>
   <div className={s.handoffCard}><div className={s.cardTop}><span><FileText size={16}/>{step.label}</span><span className={active===0?s.neutralPill:s.successPill}>{step.status}</span></div>
    <div className={s.people}><div><span className={`${s.personPhoto} ${s.alexPhoto}`}><Image src="/alex-morgan-profile.png" alt="" width={198} height={210}/></span><span><small>From</small><strong>Alex Morgan</strong></span></div><ArrowRight size={20}/><div><span className={s.personPhoto}><Image src="/sarah-chen-profile.png" alt="Sample recipient" width={46} height={46}/></span><span><small>Prepared for</small><strong>Sarah Chen</strong></span></div></div>
    <div className={s.workItem}><div><span className={s.cardEyebrow}>Responsibility</span><h4>Run the weekly forecast call</h4><p>Keep the pipeline review moving and record decisions for the team.</p></div><span className={s.sourcePill}><Image src="/logos/outlook.svg" alt="" width={16} height={16}/>Outlook</span></div>
    <div className={s.workItem}><div><span className={s.cardEyebrow}>Project</span><h4>Enterprise renewal portfolio</h4><p>Confirm the next steps for two upcoming renewals.</p></div><span className={s.sourcePill}><Image src="/logos/jira.svg" alt="" width={16} height={16}/>Jira</span></div>
    <div className={s.accessRow}><ShieldCheck size={18}/><span>{active===0?'Source links included for review':'SharePoint source access needs follow-up'}</span>{active>0&&<span className={s.warning}>Access issue</span>}</div>
    {active===2&&<p className={s.publishedNote}><Check size={16}/>Published in the Continuity Hub. Access issue remains visible.</p>}
   </div>
  </div>
  <p className={s.darkNote}>Interactive illustration with example records. Publishing does not grant access to source systems.</p>
 </div></section>
}

export function MobileNavigation({links}:{links:string[][]}) {
 const menu=useRef<HTMLDetailsElement>(null)
 return <details ref={menu} className={s.mobileMenu}><summary aria-label="Navigation menu"><Menu size={24}/></summary><nav aria-label="Mobile navigation">{links.map(([label,url])=><a key={url} href={url} onClick={()=>{if(menu.current)menu.current.open=false}}>{label}</a>)}</nav></details>
}

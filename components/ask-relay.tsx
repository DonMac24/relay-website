'use client'
import { useState } from 'react'
import { Sparkles, ArrowUpRight, Link2, Check, ArrowRight } from 'lucide-react'
import s from './continuity-home.module.css'
const examples=[
 {name:'Find an answer',question:'What work still needs an owner?',answer:'In this example, the enterprise renewal portfolio still needs a recipient. Review the proposed work and confirm who will take it over.',sources:['Relay handoff','Jira'],metric:'1',label:'responsibility awaiting assignment'},
 {name:'Find a gap',question:'What could interrupt Sarah’s handoff?',answer:'Sarah has an unresolved access issue for the SharePoint source linked to commercial approvals. Follow up with the source administrator before she needs the document.',sources:['Access issue','SharePoint'],metric:'1',label:'source-access issue to follow up'},
 {name:'Run a report',question:'Which handoffs have open actions?',answer:'In this example, Alex’s handoff has 2 open actions and Priya’s has 1. Review the supporting handoff records to see what needs attention.',sources:['Alex’s handoff','Priya’s handoff'],metric:'3',label:'open actions across 2 handoffs'},
]
export function AskRelay(){
 const [selected,setSelected]=useState(0);const ex=examples[selected]
 return <section id="ask-relay" className={`${s.wrap} ${s.section} ${s.askLayout}`}>
  <div><p className={s.eyebrow}><Sparkles size={16}/> Ask Relay</p><h2>Keep the context.<br/><span>Find your next step.</span></h2><p className={s.sectionText}>Ask about handoffs and authorized sources. Find outstanding gaps or explore continuity data through natural-language reporting.</p><ul className={s.checkList}><li><Check size={17}/>Answers grounded in available context</li><li><Check size={17}/>Sources you can follow back to the work</li><li><Check size={17}/>Access scoped to your role</li></ul><a className={s.textLink} href="#demo">See Ask Relay in a demo <ArrowUpRight size={17}/></a></div>
  <div className={s.askCard}><div className={s.cardTop}><span><Sparkles size={17}/>Ask Relay</span><span className={s.neutralPill}>Example answers</span></div><div className={s.askOptions} aria-label="Choose an Ask Relay example">{examples.map((e,i)=><button key={e.name} aria-pressed={selected===i} onClick={()=>setSelected(i)}>{e.name}</button>)}</div><div className={s.answer} aria-live="polite" aria-atomic="true"><div className={s.question}>{ex.question}<ArrowRight size={17}/></div><div className={s.response}><Sparkles size={20}/><p>{ex.answer}</p></div><div className={s.answerMetric}><strong>{ex.metric}</strong><span>{ex.label}</span></div><div className={s.sources}>{ex.sources.map(source=><span key={source}><Link2 size={13}/>{source}</span>)}</div></div><p className={s.note}>Select a question to explore a sample answer. This preview uses illustrative data.</p></div>
 </section>
}

'use client'

import { useEffect, useRef, useState } from 'react'
import s from './business-case.module.css'

const facts = [
  {
    value: 47,
    prefix: '$',
    suffix: 'M',
    label: 'annual productivity loss',
    description: 'Estimated cost of inefficient knowledge sharing for an average large U.S. business.',
    scope: '17,700 employees · Panopto/YouGov, 2018',
  },
  {
    value: 42,
    prefix: '',
    suffix: '%',
    label: 'of role knowledge is unique',
    description: 'Workers estimated this share of their institutional knowledge was held only by them.',
    scope: 'U.S. employee survey · Panopto/YouGov, 2018',
  },
  {
    value: 5.3,
    prefix: '',
    suffix: ' hrs',
    label: 'lost each week',
    description: 'Average time waiting for information or recreating existing knowledge.',
    scope: 'U.S. knowledge workers · Panopto/YouGov, 2018',
  },
]

function AnimatedNumber({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const [current, setCurrent] = useState(value)
  const element = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    let started = false
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return
      started = true
      observer.disconnect()
      const start = performance.now()
      const animate = (now: number) => {
        const progress = Math.min((now - start) / 1250, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCurrent(value < 10 ? Math.round(value * eased * 10) / 10 : Math.round(value * eased))
        if (progress < 1) frame = requestAnimationFrame(animate)
      }
      frame = requestAnimationFrame(animate)
    }, { threshold: 0.35 })
    if (element.current) observer.observe(element.current)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [value])

  return <span ref={element} aria-label={`${prefix}${value}${suffix}`} aria-live="off">{prefix}{current}{suffix}</span>
}

export function BusinessCase() {
  return <section className={s.section} aria-labelledby="business-case-heading">
    <div className={s.wrap}>
      <p className={s.eyebrow}>The business case</p>
      <h2 id="business-case-heading">The cost of losing<br />the thread.</h2>
      <p className={s.intro}>When a person leaves, the files may stay. The ownership, decisions and context behind the work are much harder to recover.</p>
      <div className={s.grid}>
        {facts.map((fact) => <article className={s.fact} key={fact.label}>
          <p className={s.number}><AnimatedNumber value={fact.value} prefix={fact.prefix} suffix={fact.suffix} /></p>
          <h3>{fact.label}</h3>
          <p className={s.description}>{fact.description}</p>
          <p className={s.source}>{fact.scope}</p>
        </article>)}
      </div>
      <div className={s.takeaway}><strong>Relay makes the next owner, the context and the gaps visible.</strong><span>A structured handoff gives managers a way to act and HR a way to see progress.</span></div>
      <p className={s.disclaimer}>Figures describe broader knowledge-sharing costs, not measured savings from Relay. Source: <a href="https://www.panopto.com/ebooks/valuing-workplace-knowledge/" target="_blank" rel="noopener noreferrer">Panopto and YouGov’s Workplace Knowledge and Productivity Report</a> (2018).</p>
    </div>
  </section>
}

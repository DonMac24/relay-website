'use client'

import { useEffect, useRef, useState } from 'react'
import s from './business-case.module.css'

const facts = [
  { value: 8, prefix: '', suffix: '%', label: 'of surveyed organizations consistently capture retiring employees’ knowledge', source: 'APQC · 2025', url: 'https://www.apqc.org/resource-library/resource/navigating-great-retirement-km-ai/html' },
  { value: 22.5, prefix: '', suffix: '%', label: 'of Canadian firms with 100+ employees report all staff fully proficient', source: 'Statistics Canada · 2026', url: 'https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2026006-eng.htm' },
  { value: 41, prefix: '', suffix: '%', label: 'of Canadian workers had to learn a job from scratch after a retirement without knowledge transfer', source: 'Express / Harris Poll · 2022', url: 'https://www.expresspros.ca/newsroom/news-releases/news-releases/2022/05/41-of-employees-have-been-forced-to-start-job-from-scratch-due-to-lack-of-knowledge-transfer-from-retiring-employees' },
  { value: 29234, prefix: 'C$', suffix: '', label: 'average annual Canadian business turnover cost, including lost productivity', source: 'Express / Harris Poll · 2025', url: 'https://www.expresspros.ca/newsroom/news-releases/news-releases/2025/06/employee-turnover-is-costing-canadian-companies-big-in-2025' },
  { value: 49, prefix: '', suffix: '%', label: 'of U.S. employees strongly know what is expected at work', source: 'Gallup · 2026', url: 'https://www.gallup.com/workplace/712433/employee-engagement-remains-flat-adoption-accelerates.aspx' },
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
        setCurrent(Number.isInteger(value) ? Math.round(value * eased) : Math.round(value * eased * 10) / 10)
        if (progress < 1) frame = requestAnimationFrame(animate)
      }
      frame = requestAnimationFrame(animate)
    }, { threshold: 0.35 })
    if (element.current) observer.observe(element.current)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [value])

  return <span ref={element} aria-label={`${prefix}${value.toLocaleString('en-US')}${suffix}`} aria-live="off">{prefix}{current.toLocaleString('en-US')}{suffix}</span>
}

export function BusinessCase() {
  return <section id="business-case" className={s.section} aria-labelledby="business-case-heading">
    <div className={s.wrap}>
      <p className={s.eyebrow}>The business case</p>
      <h2 id="business-case-heading">The cost of losing the thread of work.</h2>
      <div className={s.grid}>
        {facts.map((fact) => <article className={s.fact} key={fact.label}>
          <p className={s.number}><AnimatedNumber value={fact.value} prefix={fact.prefix} suffix={fact.suffix} /></p>
          <h3>{fact.label}</h3>
          <a className={s.source} href={fact.url} target="_blank" rel="noopener noreferrer">{fact.source} ↗</a>
        </article>)}
      </div>
    </div>
  </section>
}

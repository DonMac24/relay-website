import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Problem } from '@/components/problem'
import { HowItWorks } from '@/components/how-it-works'
import { AskRelay } from '@/components/ask-relay'
import { Integrations } from '@/components/integrations'
import { Screenshots } from '@/components/screenshots'
import { DemoCta } from '@/components/demo-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <AskRelay />
        <Screenshots />
        <Integrations />
        <DemoCta />
      </main>
      <SiteFooter />
    </div>
  )
}

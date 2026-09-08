'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

const benefits = [
  'A walkthrough tailored to your team and stack',
  'Your continuity risk score in the first call',
  'No rip-and-replace — live in under a week',
]

export function DemoCta() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="demo" className="bg-foreground text-background">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-mint-strong uppercase">
            Request a demo
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            See your continuity risk in 30 minutes.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-background/70">
            Bring your toughest &ldquo;what if they left tomorrow&rdquo; scenario.
            We&apos;ll show you how Relay captures and transfers that knowledge.
          </p>

          <ul className="mt-8 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-mint-strong">
                  <Check className="size-3 text-primary-foreground" />
                </span>
                <span className="leading-relaxed text-background/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-background p-6 text-foreground sm:p-8">
          {submitted ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <span className="grid size-12 place-items-center rounded-full bg-accent">
                <Check className="size-6 text-mint-foreground" />
              </span>
              <h3 className="mt-5 text-xl font-medium">Request received</h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                Thanks — someone from our team will reach out within one business
                day to schedule your walkthrough.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name" name="firstName" placeholder="Maya" />
                <Field label="Last name" name="lastName" placeholder="Chen" />
              </div>
              <Field
                label="Work email"
                name="email"
                type="email"
                placeholder="maya@company.com"
              />
              <Field label="Company" name="company" placeholder="Acme Inc." />
              <div>
                <label
                  htmlFor="team"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Team
                </label>
                <select
                  id="team"
                  name="team"
                  className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a team
                  </option>
                  <option>People / HR</option>
                  <option>Operations</option>
                  <option>Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-foreground text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Request a demo
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                We&apos;ll only use your details to schedule your demo.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
      />
    </div>
  )
}

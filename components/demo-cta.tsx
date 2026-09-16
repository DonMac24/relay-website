'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

const benefits = [
  'Walk through a handoff from discovery to the Continuity Hub',
  'See who owns the work and what still needs attention',
  'Discuss how Relay could support a real transition or pilot',
]

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function DemoCta() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function submitDemoRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          email: formData.get('email'),
          company: formData.get('company'),
          team: formData.get('team'),
          website: formData.get('website'),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(
          result.error || 'Your request could not be submitted.'
        )
      }

      form.reset()
      setStatus('success')
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Your request could not be submitted.'
      )
      setStatus('error')
    }
  }

  return (
    <section id="demo" className="bg-foreground text-background">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-mint-strong uppercase">
            Request a demo
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Bring one transition. See the whole handoff.
          </h2>

          <p className="mt-4 max-w-md text-base leading-relaxed text-background/70">
            Bring a planned departure, extended leave, immediate departure, or
            role change. We&apos;ll show you how Relay moves the work from
            discovery to a usable Continuity Hub.
          </p>

          <ul className="mt-6 space-y-2.5">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-mint-strong">
                  <Check className="size-3 text-primary-foreground" />
                </span>

                <span className="leading-relaxed text-background/90">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-background p-5 text-foreground sm:p-6">
          {status === 'success' ? (
            <div className="flex min-h-[260px] flex-col items-center justify-center text-center">
              <span className="grid size-11 place-items-center rounded-full bg-accent">
                <Check className="size-5 text-mint-foreground" />
              </span>

              <h3 className="mt-4 text-xl font-medium">Request received</h3>

              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                Thanks — we&apos;ll reach out within one business day to arrange
                your Relay walkthrough.
              </p>
            </div>
          ) : (
            <form onSubmit={submitDemoRequest} className="space-y-3.5">
              <div className="grid gap-3.5 sm:grid-cols-2">
                <Field
                  label="First name"
                  name="firstName"
                  placeholder="Maya"
                />

                <Field
                  label="Last name"
                  name="lastName"
                  placeholder="Chen"
                />
              </div>

              <Field
                label="Work email"
                name="email"
                type="email"
                placeholder="maya@company.com"
              />

              <Field
                label="Company"
                name="company"
                placeholder="Acme Inc."
              />

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
                  required
                  className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a team
                  </option>

                  <option value="People / HR">People / HR</option>
                  <option value="Operations">Operations</option>
                  <option value="Knowledge Management">
                    Knowledge Management
                  </option>
                  <option value="IT">IT</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div
                className="absolute -left-[10000px] top-auto size-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {status === 'error' && (
                <p role="alert" className="text-sm text-red-600">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="group inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-foreground text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting'
                  ? 'Sending request…'
                  : 'Request a demo'}

                {status !== 'submitting' && (
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                We&apos;ll only use your details to respond to your request.
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
        className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
      />
    </div>
  )
}
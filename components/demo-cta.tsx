'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'

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
        headers: { 'Content-Type': 'application/json' },
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
        throw new Error(result.error || 'Your request could not be submitted.')
      }
      form.reset()
      setStatus('success')
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Your request could not be submitted.'
      )
      setStatus('error')
    }
  }

  return (
    <section id="demo" className="bg-foreground text-background">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-6 px-5 py-8 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10 md:py-9">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#FFA78E]">
            Request a demo
          </p>
          <h2
            className="mt-3 font-semibold tracking-tight text-balance"
            style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', lineHeight: 1.15 }}
          >
            Bring one transition.<br />See the whole handoff.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-background/75">
            See how Relay connects named owners, access gaps, and the Continuity Hub in one walkthrough.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-background p-4 text-foreground">
          {status === 'success' ? (
            <div role="status" className="flex min-h-[220px] flex-col items-center justify-center text-center">
              <span className="grid size-9 place-items-center rounded-full bg-accent">
                <Check className="size-4 text-mint-foreground" aria-hidden="true" />
              </span>
              <h3 className="mt-3 text-lg font-medium">Request received</h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                Thanks — we&apos;ll reach out within one business day to arrange your Relay walkthrough.
              </p>
            </div>
          ) : (
            <form onSubmit={submitDemoRequest} className="relative space-y-3" aria-busy={status === 'submitting'}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Field label="First name" name="firstName" placeholder="Maya" autoComplete="given-name" />
                <Field label="Last name" name="lastName" placeholder="Chen" autoComplete="family-name" />
                <Field label="Work email" name="email" type="email" placeholder="maya@company.com" autoComplete="email" />
                <Field label="Company" name="company" placeholder="Acme Inc." autoComplete="organization" />
                <div>
                  <label htmlFor="team" className="mb-1 block text-xs font-medium">Team</label>
                  <select
                    id="team" name="team" required defaultValue=""
                    className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
                  >
                    <option value="" disabled>Select a team</option>
                    <option value="People / HR">People / HR</option>
                    <option value="Operations">Operations</option>
                    <option value="Knowledge Management">Knowledge Management</option>
                    <option value="IT">IT</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <button
                  type="submit" disabled={status === 'submitting'}
                  className="inline-flex h-10 w-full items-center justify-center gap-2 self-end rounded-lg bg-foreground px-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending request…' : 'Request a demo'}
                  {status !== 'submitting' && <ArrowRight className="size-4" aria-hidden="true" />}
                </button>
              </div>
              <div className="absolute -left-[10000px] top-auto size-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              {status === 'error' && <p role="alert" className="text-sm text-red-600">{errorMessage}</p>}
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

function Field({ label, name, type = 'text', placeholder, autoComplete }: {
  label: string
  name: string
  type?: string
  placeholder?: string
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-xs font-medium">{label}</label>
      <input
        id={name} name={name} type={type} required placeholder={placeholder} autoComplete={autoComplete}
        className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
      />
    </div>
  )
}

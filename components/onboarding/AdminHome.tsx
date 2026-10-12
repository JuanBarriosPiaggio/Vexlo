'use client'

import { useState } from 'react'
import Link from 'next/link'
import LogoutButton from './LogoutButton'
import { Field, TextInput } from './fields'
import {
  ONBOARDING_SERVICES,
  ONBOARDING_STATUSES,
  type OnboardingServiceId,
  type PublicOnboarding,
} from '@/lib/onboarding/types'

export default function AdminHome({ clients }: { clients: PublicOnboarding[] }) {
  const [list, setList] = useState(clients)
  const [businessName, setBusinessName] = useState('')
  const [services, setServices] = useState<OnboardingServiceId[]>(['website'])
  const [created, setCreated] = useState<{ url: string; password: string; slug: string } | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function toggleService(id: OnboardingServiceId) {
    setServices((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }

  async function onCreate(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setCreated(null)
    setLoading(true)
    try {
      const res = await fetch('/api/onboarding/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName, services }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Could not create client.')
        return
      }
      setList((prev) => [data.client, ...prev])
      setCreated({
        url: `${window.location.origin}${data.url}`,
        password: data.password,
        slug: data.client.slug,
      })
      setBusinessName('')
    } catch {
      setError('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-28">
      <div className="flex items-start justify-between gap-4 mb-10">
        <div>
          <div className="section-tag">Onboarding</div>
          <h1 className="font-display text-white mt-2" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1 }}>
            Clients
          </h1>
        </div>
        <LogoutButton />
      </div>

      <form
        onSubmit={onCreate}
        className="p-6 rounded-2xl mb-10 flex flex-col gap-4"
        style={{ background: '#111111', border: '1px solid #2a2a2a' }}
      >
        <h2 className="font-bold text-sm" style={{ color: '#fff' }}>Start a new onboarding</h2>
        <Field label="Business name">
          <TextInput value={businessName} onChange={(e) => setBusinessName(e.target.value)} required />
        </Field>
        <div>
          <div className="text-xs font-bold mb-2" style={{ color: '#e8e8e8' }}>Services included</div>
          <div className="flex flex-wrap gap-2">
            {ONBOARDING_SERVICES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => toggleService(s.id)}
                className="text-xs font-bold px-3 py-1.5 rounded-full"
                style={{
                  background: services.includes(s.id) ? 'rgba(217,119,6,0.2)' : '#0a0a0a',
                  color: services.includes(s.id) ? '#d97706' : '#888',
                  border: `1px solid ${services.includes(s.id) ? 'rgba(217,119,6,0.4)' : '#2a2a2a'}`,
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
        {error && <p className="text-sm" style={{ color: '#ef4444' }}>{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="self-start px-6 py-3 rounded text-sm font-bold text-white hover:brightness-110"
          style={{ background: '#d97706' }}
        >
          {loading ? 'Creating…' : 'Create + generate password'}
        </button>
        {created && (
          <div className="p-4 rounded-xl text-sm" style={{ background: 'rgba(217,119,6,0.08)', border: '1px solid rgba(217,119,6,0.3)' }}>
            <p className="font-bold mb-2" style={{ color: '#fff' }}>Send this to the client — the password is shown once.</p>
            <p style={{ color: '#e8e8e8' }}><strong>Link:</strong> {created.url}</p>
            <p style={{ color: '#e8e8e8' }}><strong>Project code:</strong> {created.slug}</p>
            <p style={{ color: '#e8e8e8' }}><strong>Password:</strong> {created.password}</p>
          </div>
        )}
      </form>

      <div className="flex flex-col gap-3">
        {list.length === 0 && (
          <p className="text-sm" style={{ color: '#888' }}>No clients yet.</p>
        )}
        {list.map((c) => {
          const status = ONBOARDING_STATUSES.find((s) => s.id === c.admin.status)?.label || c.admin.status
          return (
            <Link
              key={c.id}
              href={`/onboarding/${c.slug}`}
              className="p-5 rounded-xl flex items-center justify-between gap-4 hover:-translate-y-0.5 transition-transform"
              style={{ background: '#111111', border: '1px solid #2a2a2a', textDecoration: 'none' }}
            >
              <div>
                <div className="font-bold text-sm" style={{ color: '#fff' }}>
                  {c.client.businessName || c.slug}
                </div>
                <div className="text-xs mt-1" style={{ color: '#888' }}>
                  {c.slug} · {c.admin.services.join(', ') || 'no services tagged'}
                </div>
              </div>
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706' }}
              >
                {status}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

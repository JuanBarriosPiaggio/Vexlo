'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import LogoutButton from './LogoutButton'
import { Field, Section, TextArea, TextInput } from './fields'
import {
  ONBOARDING_SERVICES,
  ONBOARDING_STATUSES,
  type AdminSide,
  type ClientSide,
  type PublicOnboarding,
} from '@/lib/onboarding/types'

export default function Board({
  initial,
  role,
}: {
  initial: PublicOnboarding
  role: 'admin' | 'client'
}) {
  const isAdmin = role === 'admin'
  const [admin, setAdmin] = useState<AdminSide>(initial.admin)
  const [client, setClient] = useState<ClientSide>(initial.client)
  const [password, setPassword] = useState('')
  const [tab, setTab] = useState<'vexlo' | 'client'>('client')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const inviteUrl = useMemo(() => {
    if (typeof window === 'undefined') return `/onboarding/${initial.slug}`
    return `${window.location.origin}/onboarding/${initial.slug}`
  }, [initial.slug])

  function setA<K extends keyof AdminSide>(key: K, value: AdminSide[K]) {
    setAdmin((prev) => ({ ...prev, [key]: value }))
  }
  function setC<K extends keyof ClientSide>(key: K, value: ClientSide[K]) {
    setClient((prev) => ({ ...prev, [key]: value }))
  }

  async function save(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    setMessage('')
    try {
      const res = await fetch(`/api/onboarding/${initial.slug}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client,
          admin: isAdmin ? admin : undefined,
          password: isAdmin && password ? password : undefined,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Could not save.')
        return
      }
      setPassword('')
      setMessage(isAdmin ? 'Saved.' : 'Thanks — your details have been saved.')
    } catch {
      setError('Something went wrong.')
    } finally {
      setSaving(false)
    }
  }

  const vexloColumn = (
    <div className="p-6 md:p-8 rounded-2xl h-full" style={{ background: '#111111', border: '1px solid #2a2a2a' }}>
      <h2 className="font-display text-white mb-1" style={{ fontSize: '1.6rem' }}>Vexlo</h2>
      <p className="text-xs mb-6" style={{ color: '#888' }}>
        {isAdmin
          ? 'Fill in what you already know. The client can see this, except internal notes.'
          : 'What Vexlo already has for your project. You cannot edit this side.'}
      </p>

      <Section title="Services">
        <div className="flex flex-wrap gap-2">
          {ONBOARDING_SERVICES.map((s) => {
            const on = admin.services.includes(s.id)
            return (
              <button
                key={s.id}
                type="button"
                disabled={!isAdmin}
                onClick={() => {
                  const next = on ? admin.services.filter((id) => id !== s.id) : [...admin.services, s.id]
                  setA('services', next)
                }}
                className="text-xs font-bold px-3 py-1.5 rounded-full"
                style={{
                  background: on ? 'rgba(217,119,6,0.2)' : '#0a0a0a',
                  color: on ? '#d97706' : '#888',
                  border: `1px solid ${on ? 'rgba(217,119,6,0.4)' : '#2a2a2a'}`,
                  opacity: isAdmin ? 1 : 0.9,
                }}
              >
                {s.label}
              </button>
            )
          })}
        </div>
      </Section>

      {isAdmin && (
        <Section title="Status">
          <select
            value={admin.status}
            onChange={(e) => setA('status', e.target.value as AdminSide['status'])}
            className="px-3 py-2.5 rounded-lg text-sm w-full"
            style={{ background: '#0a0a0a', border: '1px solid #2a2a2a', color: '#fff' }}
          >
            {ONBOARDING_STATUSES.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </Section>
      )}

      <Section title="Scope">
        <Field label="What we are building" hint="In plain English — the client can see this.">
          <TextArea
            value={admin.scope}
            onChange={(e) => setA('scope', e.target.value)}
            readOnly={!isAdmin}
            placeholder="e.g. New website with quote calculator, listings across 55+ directories, review automation after jobs."
          />
        </Field>
        <Field label="Target go-live">
          <TextInput value={admin.goLiveDate} onChange={(e) => setA('goLiveDate', e.target.value)} readOnly={!isAdmin} placeholder="e.g. w/c 3 Nov" />
        </Field>
      </Section>

      <Section title="SEO / website notes">
        <Field label="Keywords we are targeting">
          <TextArea value={admin.targetKeywords} onChange={(e) => setA('targetKeywords', e.target.value)} readOnly={!isAdmin} />
        </Field>
        <Field label="Competitors">
          <TextArea value={admin.competitors} onChange={(e) => setA('competitors', e.target.value)} readOnly={!isAdmin} />
        </Field>
      </Section>

      {isAdmin && (
        <Section title="Internal — client cannot see this">
          <Field label="Internal notes">
            <TextArea value={admin.internalNotes} onChange={(e) => setA('internalNotes', e.target.value)} />
          </Field>
          <Field label="GHL sub-account" hint="For listings / reviews / automation.">
            <TextInput value={admin.ghlSubAccount} onChange={(e) => setA('ghlSubAccount', e.target.value)} />
          </Field>
          <Field label="GHL location ID">
            <TextInput value={admin.ghlLocationId} onChange={(e) => setA('ghlLocationId', e.target.value)} />
          </Field>
          <Field label="Reset client password" hint="Leave blank to keep the current password.">
            <TextInput type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New password" />
          </Field>
        </Section>
      )}
    </div>
  )

  const clientColumn = (
    <div className="p-6 md:p-8 rounded-2xl h-full" style={{ background: '#111111', border: '1px solid #2a2a2a' }}>
      <h2 className="font-display text-white mb-1" style={{ fontSize: '1.6rem' }}>Your details</h2>
      <p className="text-xs mb-6" style={{ color: '#888' }}>
        Everything we need to build your website, listings, and review setup. You can save and come back.
      </p>

      <Section title="Contact">
        <Field label="Your name">
          <TextInput value={client.contactName} onChange={(e) => setC('contactName', e.target.value)} />
        </Field>
        <Field label="Email">
          <TextInput type="email" value={client.email} onChange={(e) => setC('email', e.target.value)} />
        </Field>
        <Field label="Telephone" hint="The number customers should call — this is what we publish on listings.">
          <TextInput value={client.phone} onChange={(e) => setC('phone', e.target.value)} />
        </Field>
      </Section>

      <Section title="Business identity">
        <Field label="Business name" hint="Exactly as it should appear on Google and directories.">
          <TextInput value={client.businessName} onChange={(e) => setC('businessName', e.target.value)} />
        </Field>
        <Field label="Trading name (if different)">
          <TextInput value={client.tradingName} onChange={(e) => setC('tradingName', e.target.value)} />
        </Field>
        <Field label="Companies House number (if you have one)">
          <TextInput value={client.companyNumber} onChange={(e) => setC('companyNumber', e.target.value)} />
        </Field>
      </Section>

      <Section title="Address — used for listings (NAP)">
        <Field label="Address line 1">
          <TextInput value={client.addressLine1} onChange={(e) => setC('addressLine1', e.target.value)} />
        </Field>
        <Field label="Address line 2">
          <TextInput value={client.addressLine2} onChange={(e) => setC('addressLine2', e.target.value)} />
        </Field>
        <Field label="Town / city">
          <TextInput value={client.city} onChange={(e) => setC('city', e.target.value)} />
        </Field>
        <Field label="Postcode">
          <TextInput value={client.postcode} onChange={(e) => setC('postcode', e.target.value)} />
        </Field>
      </Section>

      <Section title="Online presence">
        <Field label="Current website">
          <TextInput value={client.website} onChange={(e) => setC('website', e.target.value)} placeholder="https://" />
        </Field>
        <Field label="Google Business Profile link" hint="Open Google Maps, find your listing, copy the URL.">
          <TextInput value={client.googleBusinessUrl} onChange={(e) => setC('googleBusinessUrl', e.target.value)} placeholder="https://maps.google.com/..." />
        </Field>
        <Field label="Google account email for the Business Profile" hint="We will send a manager invite — we do not need your Google password.">
          <TextInput type="email" value={client.googleAccountEmail} onChange={(e) => setC('googleAccountEmail', e.target.value)} />
        </Field>
        <Field label="Facebook page URL">
          <TextInput value={client.facebookUrl} onChange={(e) => setC('facebookUrl', e.target.value)} />
        </Field>
        <Field label="Instagram URL">
          <TextInput value={client.instagramUrl} onChange={(e) => setC('instagramUrl', e.target.value)} />
        </Field>
        <Field label="Anywhere else you are listed" hint="Yell, Checkatrade, Bark, Apple Maps, Bing Places, etc.">
          <TextArea value={client.otherProfiles} onChange={(e) => setC('otherProfiles', e.target.value)} />
        </Field>
      </Section>

      <Section title="Listings details">
        <Field label="Primary business category" hint="e.g. End of tenancy cleaning service / Fire protection contractor.">
          <TextInput value={client.primaryCategory} onChange={(e) => setC('primaryCategory', e.target.value)} />
        </Field>
        <Field label="Extra categories">
          <TextInput value={client.extraCategories} onChange={(e) => setC('extraCategories', e.target.value)} />
        </Field>
        <Field label="Opening hours">
          <TextArea value={client.openingHours} onChange={(e) => setC('openingHours', e.target.value)} placeholder="Mon–Fri 8:00–17:30, Sat 9:00–13:00, Sun closed" />
        </Field>
        <Field label="Existing directory logins / notes" hint="Do not paste passwords. Tell us the email used on Yell, Checkatrade, etc., and we will request access or walk you through claiming.">
          <TextArea value={client.existingDirectories} onChange={(e) => setC('existingDirectories', e.target.value)} />
        </Field>
      </Section>

      <Section title="What you do">
        <Field label="Services you offer">
          <TextArea value={client.servicesOffered} onChange={(e) => setC('servicesOffered', e.target.value)} />
        </Field>
        <Field label="Areas you cover">
          <TextArea value={client.serviceAreas} onChange={(e) => setC('serviceAreas', e.target.value)} placeholder="e.g. Wandsworth, Battersea, Clapham, and 10 miles from SW18" />
        </Field>
        <Field label="Short description (1–2 sentences for directories)">
          <TextArea rows={2} value={client.shortDescription} onChange={(e) => setC('shortDescription', e.target.value)} />
        </Field>
        <Field label="Longer about / website copy notes">
          <TextArea rows={5} value={client.longDescription} onChange={(e) => setC('longDescription', e.target.value)} />
        </Field>
      </Section>

      <Section title="Website">
        <Field label="Logo URL or Dropbox/Drive link">
          <TextInput value={client.logoUrl} onChange={(e) => setC('logoUrl', e.target.value)} />
        </Field>
        <Field label="Brand colours">
          <TextInput value={client.brandColours} onChange={(e) => setC('brandColours', e.target.value)} placeholder="e.g. navy #0A1628, gold #C4A35A" />
        </Field>
        <Field label="Domain registrar" hint="Where the domain is bought — GoDaddy, Cloudflare, Ionos, 123-reg…">
          <TextInput value={client.domainRegistrar} onChange={(e) => setC('domainRegistrar', e.target.value)} />
        </Field>
        <Field label="Email on the domain account" hint="So we can send a DNS invite or tell you exactly which records to add. No password needed here.">
          <TextInput type="email" value={client.domainLoginEmail} onChange={(e) => setC('domainLoginEmail', e.target.value)} />
        </Field>
        <Field label="Software we should connect" hint="Simpro, a CRM, calendars, quote tools, etc.">
          <TextArea value={client.integrations} onChange={(e) => setC('integrations', e.target.value)} />
        </Field>
        <Field label="How you take bookings today">
          <TextInput value={client.bookingTool} onChange={(e) => setC('bookingTool', e.target.value)} placeholder="Phone only / Google Calendar / Checkatrade / other" />
        </Field>
      </Section>

      <Section title="Reviews">
        <Field label="When should we ask for a Google review?" hint="e.g. the morning after a completed job, or once the invoice is paid.">
          <TextInput value={client.reviewRequestTiming} onChange={(e) => setC('reviewRequestTiming', e.target.value)} />
        </Field>
        <Field label="How should review replies sound?" hint="e.g. short and warm, use first names, never mention price.">
          <TextArea value={client.reviewReplyTone} onChange={(e) => setC('reviewReplyTone', e.target.value)} />
        </Field>
      </Section>

      <Section title="Anything else">
        <Field label="Notes">
          <TextArea value={client.extraNotes} onChange={(e) => setC('extraNotes', e.target.value)} />
        </Field>
      </Section>
    </div>
  )

  return (
    <form onSubmit={save} className="max-w-7xl mx-auto px-4 md:px-8 py-28">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div>
          {isAdmin && (
            <Link href="/onboarding/admin" className="text-xs font-bold" style={{ color: '#d97706' }}>
              ← All clients
            </Link>
          )}
          <h1 className="font-display text-white mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.05 }}>
            {client.businessName || initial.slug}
          </h1>
          <p className="text-xs mt-2" style={{ color: '#888' }}>
            {isAdmin ? `Share: ${inviteUrl}` : 'Only you and Vexlo can see this page.'}
          </p>
        </div>
        <LogoutButton />
      </div>

      <div className="flex md:hidden gap-2 mb-4">
        {(['client', 'vexlo'] as const).map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className="flex-1 py-2 text-xs font-bold uppercase rounded-md"
            style={{
              background: tab === id ? '#d97706' : '#111111',
              color: '#fff',
              border: '1px solid #2a2a2a',
            }}
          >
            {id === 'client' ? 'Your details' : 'Vexlo'}
          </button>
        ))}
      </div>

      <div className="hidden md:grid grid-cols-2 gap-6 items-start">
        {vexloColumn}
        {clientColumn}
      </div>
      <div className="md:hidden">
        {tab === 'vexlo' ? vexloColumn : clientColumn}
      </div>

      <div
        className="sticky bottom-4 mt-6 p-4 rounded-xl flex flex-wrap items-center justify-between gap-3"
        style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}
      >
        <div className="text-xs" style={{ color: error ? '#ef4444' : '#888' }}>
          {error || message || 'Save whenever you like — you can come back and finish later.'}
        </div>
        <button
          type="submit"
          disabled={saving}
          className="px-6 py-3 rounded text-sm font-bold text-white hover:brightness-110"
          style={{ background: '#d97706' }}
        >
          {saving ? 'Saving…' : isAdmin ? 'Save onboarding' : 'Save my details'}
        </button>
      </div>
    </form>
  )
}

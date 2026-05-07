import type { Metadata } from 'next'
import Link from 'next/link'
import PricingCalculator from '@/components/PricingCalculator'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for Vexlo AI automation — Starter and Pro packages for UK trades, clinics and service businesses. No contracts, first month free.',
  keywords: [
    'Vexlo pricing',
    'AI automation pricing UK',
    'AI receptionist cost UK',
    'workflow automation pricing',
    'missed call text back price',
    'small business automation UK',
  ],
  alternates: { canonical: `${siteUrl}/pricing` },
  openGraph: {
    title: 'Pricing | Vexlo',
    description:
      'Simple, transparent pricing for UK trades, clinics and service businesses. AI automation from £297/month — no contracts, first month free.',
    url: `${siteUrl}/pricing`,
    type: 'website',
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Vexlo Pricing' }],
  },
}

const starterFeatures: { text: string; note?: string }[] = [
  {
    text: 'AI chat widget on your website — answers FAQs and books appointments around the clock, even while you\'re on a job',
    note: 'Powered by GHL Conversation AI',
  },
  {
    text: 'Missed call SMS text-back — fires a personalised message with a booking link within seconds of a missed call',
    note: 'Requires a GHL UK phone number — ~£2/mo billed as usage',
  },
  {
    text: 'Voice AI receptionist — answers inbound calls, qualifies the lead, and books the appointment automatically, 24/7',
    note: 'Billed per minute as usage — typically £15–£40/mo for most trades',
  },
  { text: 'Lead auto-captured to CRM — every chat or call becomes a contact you can track and follow up' },
  { text: 'Automated Google review requests — SMS sent to the customer after a job is marked complete, with a direct Google review link' },
  { text: 'Automated SMS follow-up sequences — follows up with new enquiries at 24hrs, 3 days, and 7 days automatically if no reply' },
  { text: 'Appointment reminders — automated SMS the day before and morning of to cut no-shows' },
  { text: '8-stage CRM pipeline — tracks every lead from first contact through to job won, automatically' },
  { text: 'Google Business Profile management — update your listing, schedule posts, and monitor reviews all inside GHL' },
  { text: 'Reporting dashboard — leads, bookings, and reviews in one place. Built into GHL, configured for you' },
]

const proFeatures: { text: string; note?: string; inherited?: boolean }[] = [
  { text: 'Everything in Starter', inherited: true },
  { text: 'Branded AI receptionist — custom name and persona that matches your business (e.g. "Sarah from ABC Roofing")' },
  { text: 'Call transcripts & AI summaries — every call logged, transcribed, and summarised so nothing gets missed' },
  { text: 'Smart escalation to human — complex or sensitive queries automatically flagged and handed off to you' },
  {
    text: 'WhatsApp automation — follow-up sequences and review requests delivered over WhatsApp as well as SMS',
    note: 'WhatsApp costs £10/mo per location (billed as usage) + per-message rate',
  },
  { text: 'Quarterly workflow review call — we audit your automations every 3 months and optimise based on real data' },
]

const usageRates = [
  { label: 'Voice AI — inbound calls', desc: 'AI answers calls on your behalf', val: '~£0.01', unit: 'per minute' },
  { label: 'Voice AI — outbound calls', desc: 'AI dials out for follow-ups', val: '~£0.012', unit: 'per minute' },
  { label: 'SMS messages', desc: 'Text-backs, follow-ups, reminders', val: '~£0.04–0.05', unit: 'per message (UK)' },
  { label: 'Dedicated phone number', desc: 'Your GHL UK number', val: '~£2', unit: 'per month' },
  { label: 'WhatsApp (Pro only)', desc: 'Platform fee per location', val: '£10', unit: 'per month + per msg' },
  { label: 'Typical total usage bill', desc: 'Average UK trades customer', val: '£20–£60', unit: 'per month extra', highlight: true },
]

const compareRows = [
  { feature: 'Monthly price', vexlo: '£297–£497', vexloGood: true, podium: '£200–£515', podiumGood: false, arrow: 'From £99', arrowGood: false },
  { feature: 'Annual contract', vexlo: 'None', vexloGood: true, podium: 'Required', podiumGood: false, arrow: 'Required', arrowGood: false },
  { feature: 'Voice AI receptionist', vexlo: '✓ Both tiers', vexloGood: true, podium: '✕ No', podiumGood: false, arrow: '✓ Yes', arrowGood: true },
  { feature: 'AI chat widget', vexlo: '✓ Both tiers', vexloGood: true, podium: '✕ No', podiumGood: false, arrow: '✕ No', arrowGood: false },
  { feature: 'Google review automation', vexlo: '✓ Both tiers', vexloGood: true, podium: '✓ Yes', podiumGood: true, arrow: '✕ No', arrowGood: false },
  { feature: 'SMS follow-up sequences', vexlo: '✓ Both tiers', vexloGood: true, podium: '✕ No', podiumGood: false, arrow: '✕ No', arrowGood: false },
  { feature: 'Transparent usage pricing', vexlo: '✓ Yes', vexloGood: true, podium: 'Quote only', podiumGood: false, arrow: '✕ No', arrowGood: false },
  { feature: 'No contract / cancel anytime', vexlo: '✓ Yes', vexloGood: true, podium: '✕ No', podiumGood: false, arrow: '✕ No', arrowGood: false },
]

export default function PricingPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section className="pt-40 pb-16 px-6 md:px-10 text-center relative overflow-hidden">
        {/* Radial glow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            top: '60px',
            width: '700px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(217,119,6,0.1) 0%, transparent 68%)',
          }}
        />
        <div className="section-tag anim-1">Pricing</div>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-widest text-white mb-4 anim-2">
          SIMPLE.<br />
          <span style={{ color: '#d97706' }}>TRANSPARENT.</span>
        </h1>
        <p className="text-sm md:text-base mb-8 max-w-md mx-auto anim-3" style={{ color: '#888' }}>
          AI automation for UK trades, clinics &amp; service businesses. No contracts. No nasty surprises.
        </p>
        <div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium anim-4"
          style={{
            background: 'rgba(217,119,6,0.1)',
            border: '1px solid #d97706',
            color: '#d97706',
          }}
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: '#d97706', animation: 'blinkDot 2s ease-in-out infinite' }}
          />
          <span><strong>First month free</strong> — you only pay for what you use</span>
        </div>
      </section>

      {/* ── TIERS ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-20">
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '1px', background: '#2a2a2a', border: '1px solid #2a2a2a', borderRadius: '8px', overflow: 'hidden' }}
        >
          {/* STARTER */}
          <div
            className="flex flex-col p-10"
            style={{ background: '#111' }}
          >
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#888' }}>Starter</div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="font-display text-6xl tracking-widest text-white">£297</span>
              <span className="text-base" style={{ color: '#888' }}>/mo</span>
            </div>
            <div className="text-xs mb-5" style={{ color: '#d97706' }}>↳ First month free</div>
            <p
              className="text-sm leading-relaxed mb-6 pb-6"
              style={{ color: '#888', borderBottom: '1px solid #2a2a2a' }}
            >
              Everything you need to capture every lead, never miss a call, and win more jobs — running 24/7 without lifting a finger.
            </p>
            <ul className="flex-1 mb-8" style={{ listStyle: 'none', padding: 0 }}>
              {starterFeatures.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 py-2.5 text-sm"
                  style={{ borderBottom: i < starterFeatures.length - 1 ? '1px solid #2a2a2a' : 'none' }}
                >
                  <span className="flex-shrink-0 mt-0.5 font-medium" style={{ color: '#d97706' }}>→</span>
                  <span style={{ color: '#888' }}>
                    {f.text.includes('—') ? (
                      <>
                        <strong className="font-medium" style={{ color: '#e8e8e8' }}>
                          {f.text.split('—')[0].replace(/ $/, '')}
                        </strong>
                        {' —'}{f.text.split('—').slice(1).join('—')}
                      </>
                    ) : (
                      <strong className="font-medium" style={{ color: '#e8e8e8' }}>{f.text}</strong>
                    )}
                    {f.note && (
                      <span className="block text-xs mt-1" style={{ color: '#555' }}>{f.note}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/enquiry"
              className="block text-center py-3.5 rounded text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-80"
              style={{ border: '1px solid #3a3a3a', color: '#e8e8e8', background: 'transparent' }}
            >
              Get started →
            </Link>
          </div>

          {/* PRO */}
          <div
            className="flex flex-col p-10 relative"
            style={{ background: '#141414' }}
          >
            {/* Orange top bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: '#d97706' }} />
            <div
              className="self-start text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded mb-4"
              style={{ background: '#d97706' }}
            >
              Most popular
            </div>
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#888' }}>Pro</div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="font-display text-6xl tracking-widest text-white">£497</span>
              <span className="text-base" style={{ color: '#888' }}>/mo</span>
            </div>
            <div className="text-xs mb-5" style={{ color: '#d97706' }}>↳ First month free</div>
            <p
              className="text-sm leading-relaxed mb-6 pb-6"
              style={{ color: '#888', borderBottom: '1px solid #2a2a2a' }}
            >
              Everything in Starter, plus a fully branded AI agent, call transcripts, WhatsApp automation, and a quarterly review call. A complete front office with zero staff.
            </p>
            <ul className="flex-1 mb-8" style={{ listStyle: 'none', padding: 0 }}>
              {proFeatures.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 py-2.5 text-sm"
                  style={{ borderBottom: i < proFeatures.length - 1 ? '1px solid #2a2a2a' : 'none' }}
                >
                  <span
                    className="flex-shrink-0 mt-0.5 font-medium"
                    style={{ color: f.inherited ? '#3a3a3a' : '#d97706' }}
                  >
                    {f.inherited ? '↳' : '→'}
                  </span>
                  <span style={{ color: f.inherited ? '#555' : '#888' }}>
                    {f.inherited ? (
                      f.text
                    ) : f.text.includes('—') ? (
                      <>
                        <strong className="font-medium" style={{ color: '#e8e8e8' }}>
                          {f.text.split('—')[0].replace(/ $/, '')}
                        </strong>
                        {' —'}{f.text.split('—').slice(1).join('—')}
                      </>
                    ) : (
                      <strong className="font-medium" style={{ color: '#e8e8e8' }}>{f.text}</strong>
                    )}
                    {f.note && (
                      <span className="block text-xs mt-1" style={{ color: '#555' }}>{f.note}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/enquiry"
              className="block text-center py-3.5 rounded text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
              style={{ background: '#d97706' }}
            >
              Get started →
            </Link>
          </div>
        </div>
      </div>

      {/* ── WEBSITE ADD-ON ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-20">
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-8 md:p-10 rounded-lg relative overflow-hidden"
          style={{ background: '#111', border: '1px solid #2a2a2a' }}
        >
          {/* Glow */}
          <div
            className="absolute right-0 top-0 pointer-events-none"
            style={{
              width: '240px',
              height: '240px',
              background: 'radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%)',
              transform: 'translate(30%, -30%)',
            }}
          />
          <div className="flex-1">
            <div className="text-base font-semibold text-white mb-2">No website — or is yours overdue a refresh?</div>
            <p className="text-sm leading-relaxed" style={{ color: '#888' }}>
              We can build you a clean, fast, conversion-focused site designed to work hand-in-glove with your Vexlo
              automation — chat widget, booking flow, and all. Get in touch and we&apos;ll quote based on what you need.
            </p>
          </div>
          <div className="flex-shrink-0 text-left md:text-center">
            <div className="font-display text-4xl tracking-widest text-white">Custom</div>
            <div className="text-xs mb-4" style={{ color: '#888' }}>one-off project fee</div>
            <Link
              href="/enquiry"
              className="inline-block px-6 py-3 rounded text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
              style={{ background: '#d97706' }}
            >
              Talk to us →
            </Link>
          </div>
        </div>
      </div>

      {/* ── USAGE COSTS ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-20">
        <div className="mb-10">
          <div className="section-tag">Usage Costs</div>
          <h2 className="font-display text-4xl md:text-5xl tracking-widest text-white mb-3">
            TRANSPARENT <span style={{ color: '#d97706' }}>USAGE BILLING</span>
          </h2>
          <p className="text-sm max-w-xl" style={{ color: '#888' }}>
            Your monthly tier covers the platform, setup, and all automations. On top you pay only for actual usage —
            at cost, no mark-up. Most trades businesses spend £20–£60 extra per month.
          </p>
        </div>

        {/* Rates grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 mb-10"
          style={{ gap: '1px', background: '#2a2a2a', border: '1px solid #2a2a2a', borderRadius: '8px', overflow: 'hidden' }}
        >
          {usageRates.map((r) => (
            <div
              key={r.label}
              className="flex justify-between items-center px-7 py-6 transition-colors duration-150"
              style={{ background: r.highlight ? '#1a1a1a' : '#111' }}
            >
              <div>
                <strong className="block text-sm font-medium text-white mb-0.5">{r.label}</strong>
                <span className="text-xs" style={{ color: '#888' }}>{r.desc}</span>
              </div>
              <div className="text-right flex-shrink-0 ml-4">
                <div className="font-display text-xl tracking-widest" style={{ color: r.highlight ? '#e8e8e8' : '#d97706' }}>
                  {r.val}
                </div>
                <div className="text-xs" style={{ color: '#555' }}>{r.unit}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Calculator */}
        <PricingCalculator />
      </div>

      {/* ── COMPARISON ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-20">
        <div className="mb-8">
          <div className="section-tag">Comparison</div>
          <h2 className="font-display text-4xl md:text-5xl tracking-widest text-white">
            HOW WE <span style={{ color: '#d97706' }}>COMPARE</span>
          </h2>
        </div>

        <div style={{ border: '1px solid #2a2a2a', borderRadius: '8px', overflow: 'hidden' }}>
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ background: '#1a1a1a', borderBottom: '1px solid #2a2a2a' }}>
                <th className="text-left px-6 py-4 text-xs font-bold tracking-widest uppercase text-white">Feature</th>
                <th className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-center" style={{ color: '#d97706' }}>Vexlo</th>
                <th className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-center" style={{ color: '#888' }}>Podium</th>
                <th className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-center" style={{ color: '#888' }}>ARROW</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, i) => (
                <tr
                  key={row.feature}
                  style={{ borderTop: i === 0 ? 'none' : '1px solid #2a2a2a', background: '#111' }}
                >
                  <td className="px-6 py-3.5 text-sm font-medium text-white">{row.feature}</td>
                  <td
                    className="px-6 py-3.5 text-sm text-center font-medium"
                    style={{ color: row.vexloGood ? '#d97706' : '#888' }}
                  >
                    {row.vexlo}
                  </td>
                  <td
                    className="px-6 py-3.5 text-sm text-center"
                    style={{ color: row.podiumGood ? '#d97706' : '#555' }}
                  >
                    {row.podium}
                  </td>
                  <td
                    className="px-6 py-3.5 text-sm text-center"
                    style={{ color: row.arrowGood ? '#d97706' : '#555' }}
                  >
                    {row.arrow}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── GUARANTEE ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-24">
        <div
          className="text-center px-8 py-14 rounded-lg relative overflow-hidden"
          style={{ background: '#111', border: '1px solid #2a2a2a' }}
        >
          {/* Glow */}
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none"
            style={{
              width: '400px',
              height: '200px',
              background: 'radial-gradient(ellipse, rgba(217,119,6,0.15) 0%, transparent 70%)',
            }}
          />
          <h3 className="font-display text-4xl md:text-5xl tracking-widest text-white mb-4">
            FIRST MONTH FREE.<br />ZERO RISK.
          </h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto mb-8" style={{ color: '#888' }}>
            Try the full automation stack for 30 days. Your only cost in month one is the actual calls and texts you
            use. If you don&apos;t see results, walk away — no platform charge, no questions asked. After month one
            it&apos;s rolling monthly, cancel anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              'No setup fee while we\'re growing',
              'Cancel anytime after month 1',
              'No contract, ever',
              'Pay only usage in month 1',
            ].map(point => (
              <div key={point} className="flex items-center gap-2 text-sm" style={{ color: '#888' }}>
                <span style={{ color: '#d97706', fontWeight: 700 }}>→</span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

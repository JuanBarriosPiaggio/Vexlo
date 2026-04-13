import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent pricing for Vexlo AI automation — Starter, Growth, and Pro packages for UK compliance contractors. No contracts, cancel anytime.',
  keywords: [
    'Vexlo pricing',
    'AI automation pricing UK',
    'fire safety automation cost',
    'EICR automation pricing',
    'gas safety AI price',
    'compliance contractor software pricing',
  ],
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing | Vexlo',
    description:
      'Simple, transparent pricing for UK compliance contractors. AI automation from £197/month — no contracts, first month free.',
    url: '/pricing',
    type: 'website',
  },
}

const CheckYes = () => (
  <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" fill="#d97706" fillOpacity="0.15" />
    <path d="M4.5 7l2 2 3-3" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CheckNo = () => (
  <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" stroke="#3a3a3a" />
    <path d="M5 9l4-4M9 9L5 5" stroke="#555" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

export default function PricingPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">

        {/* Header */}
        <div className="mb-10">
          <div
            className="inline-block text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: '#d97706' }}
          >
            Pricing
          </div>
          <h1 className="font-display text-5xl md:text-6xl tracking-widest text-white mb-3">
            SIMPLE. TRANSPARENT.
          </h1>
          <p className="text-sm" style={{ color: '#888' }}>
            AI automation for UK compliance contractors — fire safety, EICR, gas safety &amp; more
          </p>
        </div>

        {/* Packages label */}
        <div
          className="text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: '#555' }}
        >
          Packages
        </div>

        {/* Tier grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">

          {/* Starter */}
          <div
            className="rounded-xl p-5 relative"
            style={{ background: '#0a0a0a', border: '0.5px solid #2a2a2a' }}
          >
            <div className="text-xs font-medium mb-2" style={{ color: '#888' }}>Starter</div>
            <div className="flex items-baseline gap-1 leading-none mb-1">
              <span className="text-3xl font-medium text-white">£197</span>
              <span className="text-xs" style={{ color: '#888' }}>/month</span>
            </div>
            <div className="text-xs mb-3" style={{ color: '#555' }}>+ £497 setup</div>
            <div
              className="text-xs leading-relaxed mb-4 pb-4"
              style={{ color: '#888', borderBottom: '0.5px solid #2a2a2a' }}
            >
              Capture website leads and never miss a call — AI chat widget and instant text-back running 24/7.
            </div>
            <div className="space-y-2">
              {[
                'AI chat widget on your website',
                'Answers FAQs and books appointments 24/7',
                'Missed call text-back within seconds',
                'Lead captured to CRM automatically',
                'Google review request after every job',
              ].map(f => (
                <div key={f} className="flex items-start gap-2">
                  <CheckYes />
                  <span className="text-xs leading-snug" style={{ color: '#888' }}>{f}</span>
                </div>
              ))}
              {[
                'Quote follow-up sequences',
                'Renewal reminders',
                'Voice AI receptionist',
              ].map(f => (
                <div key={f} className="flex items-start gap-2">
                  <CheckNo />
                  <span className="text-xs leading-snug" style={{ color: '#555' }}>{f}</span>
                </div>
              ))}
            </div>
            <Link
              href="/enquiry"
              className="block w-full mt-4 py-2.5 rounded-lg text-xs font-medium text-center transition-colors"
              style={{ border: '0.5px solid #2a2a2a', color: '#e8e8e8', background: 'transparent' }}
              onMouseEnter={undefined}
            >
              Learn more ↗
            </Link>
          </div>

          {/* Growth (featured) */}
          <div
            className="rounded-xl p-5 relative"
            style={{ background: '#0a0a0a', border: '2px solid #d97706' }}
          >
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-medium px-3 py-0.5 rounded-full whitespace-nowrap"
              style={{ background: '#d97706' }}
            >
              Most popular
            </div>
            <div className="text-xs font-medium mb-2" style={{ color: '#888' }}>Growth</div>
            <div className="flex items-baseline gap-1 leading-none mb-1">
              <span className="text-3xl font-medium text-white">£347</span>
              <span className="text-xs" style={{ color: '#888' }}>/month</span>
            </div>
            <div className="text-xs mb-3" style={{ color: '#555' }}>+ £897 setup</div>
            <div
              className="text-xs leading-relaxed mb-4 pb-4"
              style={{ color: '#888', borderBottom: '0.5px solid #2a2a2a' }}
            >
              Full sales cycle automation — from quote to renewal, running without you lifting a finger.
            </div>
            <div className="space-y-2">
              {[
                'Everything in Starter',
                'Full 8-stage CRM pipeline',
                'Quote follow-up (SMS + email, 48hr / 5 day / 9 day)',
                'Certificate renewal reminders (60 / 30 / 7 days)',
                'Job confirmation + reminder SMS',
                'Re-engage cold leads at 90 days',
              ].map(f => (
                <div key={f} className="flex items-start gap-2">
                  <CheckYes />
                  <span className="text-xs leading-snug" style={{ color: '#888' }}>{f}</span>
                </div>
              ))}
              {['Voice AI receptionist'].map(f => (
                <div key={f} className="flex items-start gap-2">
                  <CheckNo />
                  <span className="text-xs leading-snug" style={{ color: '#555' }}>{f}</span>
                </div>
              ))}
            </div>
            <Link
              href="/enquiry"
              className="block w-full mt-4 py-2.5 rounded-lg text-xs font-medium text-center text-white transition-opacity hover:opacity-90"
              style={{ background: '#d97706', border: '1px solid #d97706' }}
            >
              Get started ↗
            </Link>
          </div>

          {/* Pro */}
          <div
            className="rounded-xl p-5 relative"
            style={{ background: '#0a0a0a', border: '0.5px solid #2a2a2a' }}
          >
            <div className="text-xs font-medium mb-2" style={{ color: '#888' }}>Pro</div>
            <div className="flex items-baseline gap-1 leading-none mb-1">
              <span className="text-3xl font-medium text-white">£547</span>
              <span className="text-xs" style={{ color: '#888' }}>/month</span>
            </div>
            <div className="text-xs mb-3" style={{ color: '#555' }}>+ £1,497 setup</div>
            <div
              className="text-xs leading-relaxed mb-4 pb-4"
              style={{ color: '#888', borderBottom: '0.5px solid #2a2a2a' }}
            >
              A fully automated front office — phone, chat, follow-up and renewals running 24/7 without staff.
            </div>
            <div className="space-y-2">
              {[
                'Everything in Growth',
                'AI Voice Receptionist answers calls 24/7',
                'Qualifies callers, books appointments, handles FAQs',
                'Call transcripts + summaries after every call',
                'Branded AI agent name and persona',
                'Escalation to human for complex queries',
              ].map(f => (
                <div key={f} className="flex items-start gap-2">
                  <CheckYes />
                  <span className="text-xs leading-snug" style={{ color: '#888' }}>{f}</span>
                </div>
              ))}
            </div>
            <Link
              href="/enquiry"
              className="block w-full mt-4 py-2.5 rounded-lg text-xs font-medium text-center transition-colors"
              style={{ border: '0.5px solid #2a2a2a', color: '#e8e8e8', background: 'transparent' }}
            >
              Learn more ↗
            </Link>
          </div>
        </div>

        {/* Simpro Integration */}
        <div
          className="rounded-xl p-5 mb-8"
          style={{ background: '#111', border: '0.5px solid #2a2a2a' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: '#d97706' }}
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M3 9l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium text-white">Simpro Integration</div>
              <div className="text-xs" style={{ color: '#888' }}>
                Connect your Simpro quotes directly to GHL — fully automated, zero manual input
              </div>
            </div>
          </div>
          <p className="text-xs leading-relaxed mb-4" style={{ color: '#888' }}>
            When you raise a quote in Simpro, the follow-up sequence fires in GHL automatically. Contact created or
            updated, custom fields populated, SMS and email sequence starts — all without you touching anything. When
            the quote is accepted in Simpro, the sequence stops and the pipeline moves to Booked.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: 'Growth + Simpro', monthly: '£397', setup: '+ £1,297 setup', save: 'Save £400 vs adding separately' },
              { name: 'Pro + Simpro', monthly: '£597', setup: '+ £1,897 setup', save: 'Save £400 vs adding separately' },
            ].map(b => (
              <div
                key={b.name}
                className="rounded-lg p-4"
                style={{ background: '#0a0a0a', border: '0.5px solid #2a2a2a' }}
              >
                <div className="text-xs font-medium text-white mb-1">{b.name}</div>
                <div className="flex items-baseline gap-1 leading-none">
                  <span className="text-xl font-medium text-white">{b.monthly}</span>
                  <span className="text-xs" style={{ color: '#888' }}>/month</span>
                </div>
                <div className="text-xs mt-0.5" style={{ color: '#555' }}>{b.setup}</div>
                <div className="text-xs mt-1" style={{ color: '#d97706' }}>{b.save}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Add-ons */}
        <div className="mb-8">
          <div
            className="text-xs font-medium tracking-widest uppercase mb-4"
            style={{ color: '#555' }}
          >
            Add-ons
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { name: 'Simpro integration', desc: 'Auto-trigger follow-up from Simpro quotes', price: '£400 one-off' },
              { name: 'Additional location', desc: 'Each extra site under same account', price: '£97/month' },
              { name: 'WhatsApp automation', desc: 'Follow-up sequences via WhatsApp', price: '£97/month' },
              { name: 'Monthly reporting dashboard', desc: 'Leads, bookings, reviews at a glance', price: '£49/month' },
              { name: 'Quarterly workflow review', desc: 'Optimise sequences every 3 months', price: '£150/quarter' },
              { name: 'Google Business Profile setup', desc: 'Create or optimise your GBP listing', price: '£197 one-off' },
            ].map(a => (
              <div
                key={a.name}
                className="rounded-lg px-4 py-3 flex justify-between items-center"
                style={{ background: '#0a0a0a', border: '0.5px solid #2a2a2a' }}
              >
                <div>
                  <div className="text-xs font-medium text-white">{a.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#888' }}>{a.desc}</div>
                </div>
                <div className="text-xs font-medium text-white ml-4 whitespace-nowrap flex-shrink-0">{a.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div
          className="rounded-xl p-5 mb-8 flex items-start gap-4"
          style={{ background: '#0a0a0a', border: '0.5px solid #2a2a2a' }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: '#111' }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 2l1.5 4.5H15l-3.75 2.75 1.5 4.5L9 11l-3.75 2.75 1.5-4.5L3 6.5h4.5L9 2z"
                stroke="#d97706"
                strokeWidth="1.25"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <div className="text-sm font-medium text-white mb-1">First month free — no card required</div>
            <div className="text-xs leading-relaxed" style={{ color: '#888' }}>
              All packages include a free first month. If you don&apos;t see results in 30 days, walk away — no
              charge, no questions asked. After month 1 it&apos;s rolling monthly. Cancel anytime.
            </div>
          </div>
        </div>

        {/* VS Podium comparison */}
        <div
          className="rounded-xl p-5 mb-10"
          style={{ background: '#111', border: '0.5px solid #2a2a2a' }}
        >
          <div className="text-sm font-medium text-white mb-4">How we compare to Podium</div>
          <div>
            {/* Header row */}
            <div className="grid grid-cols-3">
              <div className="text-xs font-medium pb-2" style={{ color: '#555' }}></div>
              <div className="text-xs font-medium pb-2 text-center" style={{ color: '#555' }}>Vexlo</div>
              <div className="text-xs font-medium pb-2 text-center" style={{ color: '#555' }}>Podium</div>
            </div>
            {[
              { feature: 'Monthly price', vexlo: '£197–£547', vexloGood: true, podium: '£200–£515', podiumGood: false },
              { feature: 'Annual contract', vexlo: 'None', vexloGood: true, podium: 'Required', podiumGood: false },
              { feature: 'Renewal reminders', vexlo: 'Yes', vexloGood: true, podium: 'No', podiumGood: false },
              { feature: 'Quote follow-up', vexlo: 'Yes', vexloGood: true, podium: 'No', podiumGood: false },
              { feature: 'Simpro integration', vexlo: 'Yes', vexloGood: true, podium: 'Limited', podiumGood: false },
              { feature: 'UK compliance focus', vexlo: 'Yes', vexloGood: true, podium: 'No', podiumGood: false },
              { feature: 'Transparent pricing', vexlo: 'Yes', vexloGood: true, podium: 'Quote only', podiumGood: false },
            ].map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-3"
                style={{ borderTop: '0.5px solid #2a2a2a' }}
              >
                <div className="text-xs py-2.5 pr-2" style={{ color: '#e8e8e8' }}>{row.feature}</div>
                <div
                  className="text-xs py-2.5 text-center font-medium"
                  style={{ color: row.vexloGood ? '#d97706' : '#888' }}
                >
                  {row.vexlo}
                </div>
                <div
                  className="text-xs py-2.5 text-center"
                  style={{ color: row.podiumGood ? '#d97706' : '#555' }}
                >
                  {row.podium}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="text-xs text-center leading-relaxed" style={{ color: '#555' }}>
          vexlo.co.uk &nbsp;·&nbsp; hello@mail.vexlo.co.uk &nbsp;·&nbsp; All prices exclude VAT &nbsp;·&nbsp; No
          contracts &nbsp;·&nbsp; Cancel anytime
        </div>

      </div>
    </div>
  )
}

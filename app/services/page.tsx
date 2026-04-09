import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services — AI Voice Assistants & Workflow Automation | Vexlo',
  description: "Explore Vexlo's AI automation services: missed call text-back, automated booking, Google review automation, and custom workflow automation for UK trades and clinics.",
  keywords: [
    'AI voice assistant services UK',
    'missed call text back service',
    'automated booking system',
    'Google review automation service',
    'workflow automation UK',
    'AI phone bot service',
  ],
}

const services = [
  {
    icon: '⚡',
    title: 'Missed Call Text-Back',
    description: 'Every missed call triggers an instant automated SMS within 4 seconds — 24/7, including evenings and weekends. Never lose a lead to voicemail again.',
    features: ['4-second response time', 'Custom branded messages', 'Works on any phone number', 'No app needed by customer'],
  },
  {
    icon: '📅',
    title: 'Automated Appointment Booking',
    description: 'The AI sends a self-booking link directly in the SMS. Customers pick a slot from your live calendar. Confirmation sent automatically.',
    features: ['Integrates with your calendar', 'Two-way sync', 'Automated reminders', 'No-show reduction'],
  },
  {
    icon: '⭐',
    title: 'Google Review Automation',
    description: 'After every completed job, the bot sends a review request. Our clients average 10+ new Google reviews per month on autopilot.',
    features: ['Timed perfectly post-job', 'One-tap to Google page', 'Improves Maps ranking', 'Trackable results'],
  },
  {
    icon: '📊',
    title: 'Lead & Revenue Dashboard',
    description: "Full visibility over every lead, booking, and review request. See exactly what the bot is doing and what's converting.",
    features: ['Real-time lead tracking', 'Booking analytics', 'Review count tracking', 'ROI reporting'],
  },
  {
    icon: '🔔',
    title: 'Real-Time Notifications',
    description: 'Get notified the moment a lead is captured or an appointment is booked. Stay in control without managing the process.',
    features: ['Instant SMS/email alerts', 'Works on your phone', 'No extra software', 'Fully configurable'],
  },
  {
    icon: '⚙️',
    title: 'Custom Workflow Automation',
    description: 'Beyond missed calls — we build bespoke automations to eliminate manual admin, follow up leads, and keep your pipeline moving.',
    features: ['CRM integrations', 'Invoice automation', 'Follow-up sequences', 'Custom triggers & actions'],
  },
]

export default function ServicesPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        className="pt-36 pb-20 px-6 md:px-10 text-center relative overflow-hidden"
        style={{ background: '#0a0a0a' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(217,119,6,0.07) 0%, transparent 60%)' }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="section-tag" style={{ textAlign: 'center' }}>Our Services</div>
          <h1
            className="font-display text-white mb-6 mt-2"
            style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Built to keep your{' '}
            <span className="font-serif" style={{ color: '#d97706', fontStyle: 'italic' }}>
              pipeline full.
            </span>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: '#888', maxWidth: '480px', margin: '0 auto' }}>
            Every tool Vexlo offers works silently in the background — capturing leads, booking jobs, and building your reputation while you focus on the work.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: '60px 40px 100px' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="feature-card p-8 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h2 className="font-bold text-base mb-3" style={{ color: '#fff' }}>{s.title}</h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#888' }}>{s.description}</p>
              <ul className="flex flex-col gap-2">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs" style={{ color: '#e8e8e8' }}>
                    <span style={{ color: '#d97706', fontWeight: 700 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-6 md:px-10 py-24 text-center relative overflow-hidden"
        style={{ background: '#111111' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, rgba(217,119,6,0.07) 0%, transparent 70%)' }}
        />
        <div className="max-w-2xl mx-auto relative z-10">
          <h2
            className="font-display text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Ready to see it in action?
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free 15-minute demo and we&apos;ll show you exactly how Vexlo works for your business.
          </p>
          <Link
            href="/#book"
            className="inline-flex items-center px-8 py-4 rounded text-sm font-bold tracking-wide text-white transition-all duration-200 hover:brightness-110"
            style={{ background: '#d97706' }}
          >
            Book Your Free Demo →
          </Link>
        </div>
      </section>
    </div>
  )
}

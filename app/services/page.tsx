import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Services — Lead Generating Websites, SEO & Business Automation | Vexlo',
  description: "Explore Vexlo's services: lead-generating website design with quote calculators and booking systems, business listings management, missed call text-back, Google review automation, and custom workflow automation for UK small businesses.",
  keywords: [
    'lead generating website design UK',
    'web design services small business UK',
    'quote calculator website service',
    'booking system website UK',
    'business listings management service',
    'missed call text back service',
    'Google review automation service',
    'workflow automation UK',
  ],
  alternates: { canonical: `${siteUrl}/services` },
}

const services: { icon: string; title: string; description: string; features: string[]; href?: string; hrefLabel?: string }[] = [
  {
    icon: '💼',
    title: 'Websites That Deliver Leads',
    description: 'SEO-driven websites with instant quote calculators, online booking, and software integrations — engineered to turn Google searches into enquiries. Our clients saw first organic leads around 2 months after launch.',
    features: ['SEO architecture from day one', 'Custom quote calculators', 'Booking systems with confirmations', 'Simpro & CRM integrations'],
    href: '/lead-generating-websites',
    hrefLabel: 'How it works →',
  },
  {
    icon: '📍',
    title: 'Business Listings Management',
    description: 'Your business listed accurately and consistently across 55+ high-authority UK directories — so Google trusts your data and ranks you higher in local search.',
    features: ['Full listings audit', '55+ UK directories', 'NAP consistency enforced', 'Ongoing monthly monitoring'],
    href: '/listings',
    hrefLabel: 'Get a free audit →',
  },
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
  {
    icon: '🖥️',
    title: 'Bespoke Modules & Admin Tools',
    description: 'Custom-built functionality for the way your business actually runs — admin dashboards, bespoke workflows, and integrations with the software you already use.',
    features: ['Bespoke admin modules', 'Custom internal tools', 'Software integrations', 'Built around your process'],
    href: '/portfolio',
    hrefLabel: 'See our work →',
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
            It starts with a website engineered to generate leads — then every other tool works silently in the background: capturing calls, booking jobs, and building your reputation while you focus on the work.
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
              {s.href && (
                <Link
                  href={s.href}
                  className="inline-block mt-5 text-xs font-bold transition-colors hover:text-white"
                  style={{ color: '#d97706' }}
                >
                  {s.hrefLabel || 'Learn more →'}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section style={{ padding: '0 40px 100px', background: '#0a0a0a' }}>
        <div className="max-w-6xl mx-auto">
          <div className="section-tag">Industries</div>
          <h2
            className="font-display text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Built for your industry
          </h2>
          <p className="mb-10" style={{ color: '#888', fontSize: '1rem', lineHeight: 1.65, maxWidth: '480px' }}>
            Vexlo is configured specifically for each trade and service type. Select your industry to see how it works for you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { emoji: '🏠', label: 'Roofers', href: '/ai-receptionist-roofing-companies' },
              { emoji: '🍳', label: 'Kitchen Fitters', href: '/ai-receptionist-kitchen-fitters' },
              { emoji: '🦷', label: 'Dental Practices', href: '/ai-receptionist-dentists' },
              { emoji: '🔧', label: 'Plumbers', href: '/ai-receptionist-plumbers' },
              { emoji: '✂️', label: 'Salons & Barbers', href: '/ai-receptionist-salons-barbers' },
              { emoji: '⚡', label: 'Electricians', href: '/ai-receptionist-electricians' },
              { emoji: '🏡', label: 'Estate Agents', href: '/ai-receptionist-estate-agents' },
              { emoji: '💆', label: 'Physio & Wellness', href: '/ai-receptionist-physio-wellness' },
              { emoji: '🏘️', label: 'Property Maintenance', href: '/ai-receptionist-property-maintenance' },
              { emoji: '🧹', label: 'Cleaning Companies', href: '/ai-receptionist-cleaning-companies' },
            ].map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="flex flex-col items-center gap-2 p-5 rounded-xl text-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#111111', border: '1px solid #2a2a2a', textDecoration: 'none' }}
              >
                <span className="text-3xl">{industry.emoji}</span>
                <span className="text-xs font-bold" style={{ color: '#e8e8e8' }}>{industry.label}</span>
                <span className="text-xs" style={{ color: '#d97706' }}>View →</span>
              </Link>
            ))}
          </div>
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
            href="/enquiry"
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

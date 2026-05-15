import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import ScrollReveal from '@/components/ScrollReveal'
import LeadConnectorBooking from '@/components/LeadConnectorBooking'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Vexlo — Stop Losing Jobs to Voicemail | AI Missed Call Bot for UK Trades',
  description: 'Vexlo AI texts back every missed call in 4 seconds, books the appointment, and gets your Google reviews — 24/7. Built for roofers, kitchen fitters, and dental practices across the UK.',
  keywords: [
    'missed call text back UK',
    'AI receptionist for tradespeople',
    'AI phone agent UK',
    'automated appointment booking trades',
    'Google review automation UK',
    'AI for roofers',
    'AI for plumbers',
    'AI for electricians',
    'AI for kitchen fitters',
    'AI for dentists',
    'AI for salons barbers',
    'AI for physio clinics',
    'AI for estate agents',
    'AI for cleaning companies',
    'lead capture automation UK trades',
    'missed call automation UK',
    'first month free AI bot UK',
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    url: siteUrl,
    title: 'Vexlo — Stop Losing Jobs to Voicemail',
    description: 'AI bot texts back every missed call in 4 seconds, books the job, chases reviews. 24/7.',
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Vexlo AI Receptionist' }],
  },
}

const features = [
  {
    icon: '⚡',
    title: 'Instant Missed Call Text-Back',
    text: 'Every missed call gets an automated SMS within seconds. No lead goes cold. Works 24/7 including evenings and weekends.',
  },
  {
    icon: '📅',
    title: 'Automated Booking',
    text: 'The SMS includes a direct booking link to your live calendar. They self-book. You get a notification. No back and forth.',
  },
  {
    icon: '⭐',
    title: 'Review Generation',
    text: 'Auto-sends a review request after every completed job. Our clients average 10+ new Google reviews per month on autopilot.',
  },
  {
    icon: '🔔',
    title: 'Real-Time Notifications',
    text: 'You get notified every time a lead is captured or a booking is made. Full visibility without managing the process.',
  },
  {
    icon: '✏️',
    title: 'Custom Messaging',
    text: 'We write the messages to match your business tone. You approve everything before going live. Sounds human, not robotic.',
  },
  {
    icon: '📊',
    title: 'Full Dashboard',
    text: "See every lead, booking, and review request in one place. Know exactly what the bot is doing and what's converting.",
  },
]

const niches = [
  {
    emoji: '🏠',
    title: 'Roofers',
    href: '/ai-receptionist-roofing-companies',
    text: "You're on site all day. Calls come in while you're up a ladder. The bot captures every lead, books the survey, and gets you the review after completion.",
    stat: 'Avg job value: £2,000–£15,000',
    statStyle: { background: 'rgba(217,119,6,0.15)', color: '#d97706' },
    bg: 'linear-gradient(135deg, #1c1008, #2d1900)',
  },
  {
    emoji: '🍳',
    title: 'Kitchen Fitters',
    href: '/ai-receptionist-kitchen-fitters',
    text: "Kitchen enquiries are high intent and high value. If you don't reply fast, they've already booked someone else. The bot responds before they've put the phone down.",
    stat: 'Avg job value: £5,000–£25,000',
    statStyle: { background: 'rgba(74,222,128,0.1)', color: '#4ade80' },
    bg: 'linear-gradient(135deg, #071a0e, #0d2e18)',
  },
  {
    emoji: '🦷',
    title: 'Dental Practices',
    href: '/ai-receptionist-dentists',
    text: 'After-hours calls, missed calls between appointments. The bot books patients 24/7 and builds your Google reviews — without extra receptionist time.',
    stat: 'Avg patient value: £500–£3,000',
    statStyle: { background: 'rgba(96,165,250,0.1)', color: '#60a5fa' },
    bg: 'linear-gradient(135deg, #060d1f, #0d1a3a)',
  },
  {
    emoji: '🔧',
    title: 'Plumbers',
    href: '/ai-receptionist-plumbers',
    text: "You can't stop mid-job to answer calls. Emergency plumbing enquiries won't wait — the bot replies instantly, qualifies the lead, and books them in before they call your competitor.",
    stat: 'Avg job value: £150–£2,000',
    statStyle: { background: 'rgba(217,119,6,0.15)', color: '#d97706' },
    bg: 'linear-gradient(135deg, #1c1008, #2d1900)',
  },
  {
    emoji: '✂️',
    title: 'Salons & Barbers',
    href: '/ai-receptionist-salons-barbers',
    text: "You're with a client — you can't pick up the phone. The bot handles new booking requests automatically and sends review requests after every appointment.",
    stat: 'Avg monthly revenue: £5k–£30k',
    statStyle: { background: 'rgba(244,114,182,0.12)', color: '#f472b6' },
    bg: 'linear-gradient(135deg, #1a0614, #2e0d22)',
  },
  {
    emoji: '⚡',
    title: 'Electricians',
    href: '/ai-receptionist-electricians',
    text: "On site, hands full, can't answer. Every missed call is a potential job lost to someone else. The bot texts back, books the survey, and follows up for a review once the work is done.",
    stat: 'Avg job value: £200–£5,000',
    statStyle: { background: 'rgba(250,204,21,0.12)', color: '#facc15' },
    bg: 'linear-gradient(135deg, #1a1400, #2e2300)',
  },
  {
    emoji: '🏡',
    title: 'Estate Agents',
    href: '/ai-receptionist-estate-agents',
    text: "Viewing enquiries go cold fast. The bot responds to every missed call instantly, books the viewing, and keeps your pipeline moving — even outside office hours.",
    stat: 'Avg deal value: £3,000–£15,000',
    statStyle: { background: 'rgba(74,222,128,0.1)', color: '#4ade80' },
    bg: 'linear-gradient(135deg, #071a0e, #0d2e18)',
  },
  {
    emoji: '💆',
    title: 'Physio & Wellness',
    href: '/ai-receptionist-physio-wellness',
    text: "You're in session — unavailable. New patient calls slip through. The bot captures every enquiry, books the consultation, and requests a review after each appointment.",
    stat: 'Avg patient value: £400–£2,000',
    statStyle: { background: 'rgba(96,165,250,0.1)', color: '#60a5fa' },
    bg: 'linear-gradient(135deg, #060d1f, #0d1a3a)',
  },
  {
    emoji: '🏘️',
    title: 'Property Maintenance',
    href: '/ai-receptionist-property-maintenance',
    text: "Maintenance calls come at all hours. The bot replies instantly to every missed call, books the site visit, and chases a review once the job is signed off.",
    stat: 'Avg job value: £200–£5,000',
    statStyle: { background: 'rgba(217,119,6,0.15)', color: '#d97706' },
    bg: 'linear-gradient(135deg, #0f0f0f, #1a1a1a)',
  },
]

const pricingFeatures = [
  'Missed call text-back (24/7)',
  'Automated appointment booking',
  'Google review request automation',
  'Custom message setup — we write it for you',
  'Full GHL dashboard access',
  'Real-time lead notifications',
  'Onboarding call included',
  'Live in under 48 hours',
]

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Hero />
      <Benefits />
      <HowItWorks />

      {/* FEATURES */}
      <section id="features" style={{ background: '#111111', padding: '100px 40px' }}>
        <div className="max-w-6xl mx-auto">
          <div className="section-tag">Features</div>
          <h2
            className="font-display text-white mb-16"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Everything running in the background.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="feature-card reveal p-7 rounded-xl transition-all duration-200"
                style={{ background: '#111111', border: '1px solid #2a2a2a' }}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <div className="font-bold text-sm mb-2" style={{ color: '#fff' }}>{f.title}</div>
                <div className="text-sm leading-relaxed" style={{ color: '#888' }}>{f.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NICHES */}
      <section id="niches" style={{ background: '#111111', padding: '100px 40px' }}>
        <div className="max-w-6xl mx-auto">
          <div className="section-tag">Who It&apos;s For</div>
          <h2
            className="font-display text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Built for any business that{' '}
            <span className="font-serif" style={{ color: '#d97706', fontStyle: 'italic' }}>
              takes calls.
            </span>
          </h2>
          <p className="mb-16 max-w-lg" style={{ color: '#888', fontSize: '1rem', lineHeight: 1.65 }}>
            If you miss calls while you&apos;re working, Vexlo is for you. Here are just some of the businesses already using it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {niches.map((n, i) => (
              <Link
                key={i}
                href={n.href}
                className="reveal rounded-xl p-8 transition-transform duration-200 hover:-translate-y-1 block"
                style={{ background: n.bg, border: '1px solid #2a2a2a', textDecoration: 'none' }}
              >
                <div className="text-5xl mb-4">{n.emoji}</div>
                <div
                  className="font-display mb-2"
                  style={{ fontSize: '1.6rem', letterSpacing: '0.05em', color: '#fff' }}
                >
                  {n.title}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#888' }}>{n.text}</p>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full inline-block"
                    style={n.statStyle}
                  >
                    {n.stat}
                  </span>
                  <span className="text-xs" style={{ color: '#d97706' }}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ background: '#0a0a0a', padding: '100px 40px' }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="section-tag" style={{ textAlign: 'center' }}>Pricing</div>
          <h2
            className="font-display text-white"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Simple. No surprises.
          </h2>

          <div
            className="max-w-lg mx-auto mt-16 rounded-2xl overflow-hidden"
            style={{ border: '1px solid #2a2a2a', boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}
          >
            <div className="px-10 py-8 text-center" style={{ background: '#d97706' }}>
              <div
                className="font-display tracking-widest mb-2"
                style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)' }}
              >
                YOUR FIRST MONTH
              </div>
              <div className="font-display text-white" style={{ fontSize: '3.5rem', lineHeight: 1 }}>
                FREE
              </div>
              <div className="mt-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                No setup fees. No contracts. Cancel anytime.
              </div>
            </div>

            <div className="px-10 py-9" style={{ background: '#111111' }}>
              <ul className="flex flex-col gap-3.5 mb-8">
                {pricingFeatures.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-left" style={{ color: '#e8e8e8' }}>
                    <span style={{ color: '#d97706', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/enquiry"
                className="block w-full text-center py-4 rounded text-sm font-bold tracking-wide transition-all duration-200 text-white hover:brightness-110"
                style={{ background: '#d97706' }}
              >
                CLAIM YOUR FREE MONTH →
              </a>
              <p className="mt-4 text-xs text-center" style={{ color: '#888' }}>
                After month 1 — simple monthly subscription. We&apos;ll confirm details when we speak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section style={{ background: '#0a0a0a', padding: '100px 40px' }}>
        <div className="max-w-6xl mx-auto">
          <div className="section-tag">Resources</div>
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <h2
              className="font-display text-white"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', lineHeight: 1, letterSpacing: '0.02em' }}
            >
              Guides for businesses that{' '}
              <span className="font-serif" style={{ color: '#d97706', fontStyle: 'italic' }}>
                take calls.
              </span>
            </h2>
            <Link
              href="/articles"
              className="text-sm font-bold whitespace-nowrap transition-colors hover:text-white"
              style={{ color: '#d97706' }}
            >
              All articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                href: '/articles/how-much-are-missed-calls-costing-your-business',
                tag: 'Small Business UK',
                title: 'How Much Are Missed Calls Costing Your UK Business? (The Real Numbers)',
                excerpt: 'Most businesses have no idea. Here\'s how to calculate your true missed call cost — with numbers specific to your trade.',
              },
              {
                href: '/articles/google-reviews-recency-vs-quantity',
                tag: 'Reputation Management',
                title: 'Google Reviews: Why Recency Beats Quantity Every Time',
                excerpt: 'A business with 20 recent reviews will outrank one with 200 old reviews. Here\'s the evidence — and what to do about it.',
              },
              {
                href: '/articles/missed-call-text-back-vs-voicemail-which-wins',
                tag: 'How-To Guide',
                title: 'Missed Call Text Back vs Voicemail: Which Converts More Customers?',
                excerpt: 'The data is clear: automated text back converts at 60–70%. Voicemail converts at under 20%. Here\'s why.',
              },
              {
                href: '/articles/what-to-say-in-missed-call-text-back-sms',
                tag: 'How-To Guide',
                title: 'What to Say in a Missed Call Text Back: SMS Templates That Actually Work',
                excerpt: 'The wrong message kills the lead. Get proven SMS templates for plumbers, roofers, electricians, cleaners, and more.',
              },
              {
                href: '/articles/automated-google-review-requests-after-job',
                tag: 'Reputation Management',
                title: 'How to Automatically Request Google Reviews After Every Job',
                excerpt: 'Never forget to ask for a review again. Here\'s how automated review requests build your ranking on autopilot.',
              },
              {
                href: '/articles/ai-receptionist-vs-answering-service-uk',
                tag: 'Small Business UK',
                title: 'AI Receptionist vs Answering Service: Which Is Better for UK Trades?',
                excerpt: 'A head-to-head on cost, speed, coverage, and ROI — so you can make the right call for your business.',
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="feature-card reveal block p-7 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#111111', border: '1px solid #2a2a2a', textDecoration: 'none' }}
              >
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-4"
                  style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706' }}
                >
                  {article.tag}
                </span>
                <h3 className="font-bold text-sm leading-snug mb-3" style={{ color: '#fff' }}>
                  {article.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: '#888' }}>
                  {article.excerpt}
                </p>
                <span className="text-xs font-bold" style={{ color: '#d97706' }}>Read article →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK — Lead Connector calendar */}
      <section
        id="book"
        className="relative overflow-hidden"
        style={{ background: '#111111', padding: '100px 40px' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, rgba(217,119,6,0.07) 0%, transparent 70%)' }}
        />
        <div className="max-w-2xl mx-auto relative z-10 text-center">
          <h2
            className="font-display text-white mb-4"
            style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Ready to stop missing<br />
            <span style={{ color: '#d97706' }}>leads?</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Pick a time for your free demo — no obligation.
          </p>
          <LeadConnectorBooking instanceId="home-book" className="text-left" />
        </div>
      </section>

      {/* WebPage + Service schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            url: siteUrl,
            name: 'Vexlo — AI Receptionist & Missed Call Automation for UK Trades',
            description: 'AI bot texts back every missed call in 4 seconds, books the appointment, chases Google reviews. 24/7. First month free.',
            mainEntity: {
              '@type': 'Service',
              name: 'AI Missed Call Automation',
              provider: { '@type': 'Organization', name: 'Vexlo', url: siteUrl },
              areaServed: { '@type': 'Country', name: 'United Kingdom' },
              audience: {
                '@type': 'Audience',
                audienceType: 'Tradespeople and service businesses in the United Kingdom',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'AI Automation Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Missed Call Text-Back', description: 'AI texts back every missed call within 4 seconds, 24/7.' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automated Appointment Booking', description: 'Self-booking link sent by SMS — no human effort required.' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Review Automation', description: 'Automatic review requests sent after every completed job.' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Receptionist for Roofers', description: 'Missed call handling and lead capture for roofing companies.' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Receptionist for Plumbers', description: 'Missed call handling and emergency lead capture for plumbers.' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Receptionist for Electricians', description: 'Missed call handling and job booking for electricians.' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Receptionist for Kitchen Fitters', description: 'Missed call handling and consultation booking for kitchen fitters.' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Receptionist for Dental Practices', description: 'After-hours patient booking and review automation for dentists.' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Receptionist for Salons and Barbers', description: 'Appointment booking and review automation for hair salons and barbers.' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Receptionist for Estate Agents', description: 'Viewing enquiry handling and booking automation for estate agents.' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Receptionist for Physio Clinics', description: 'New patient booking and review automation for physiotherapy and wellness clinics.' } },
                ],
              },
            },
          }),
        }}
      />

      {/* FAQ schema for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How quickly does the AI text back a missed call?',
                acceptedAnswer: { '@type': 'Answer', text: 'Vexlo texts back every missed call within 4 seconds — 24/7, including evenings and weekends.' },
              },
              {
                '@type': 'Question',
                name: 'Which trades and businesses can use Vexlo?',
                acceptedAnswer: { '@type': 'Answer', text: 'Vexlo works for any service business that relies on inbound calls: roofers, plumbers, electricians, kitchen fitters, dentists, salons, barbers, estate agents, physio clinics, cleaning companies, and more.' },
              },
              {
                '@type': 'Question',
                name: 'How much does Vexlo cost?',
                acceptedAnswer: { '@type': 'Answer', text: 'Your first month is completely free. No setup fees, no contracts. After month 1, a simple monthly subscription — discussed on your free demo call.' },
              },
              {
                '@type': 'Question',
                name: 'How long does it take to go live?',
                acceptedAnswer: { '@type': 'Answer', text: 'Most businesses are live within 48 hours. We handle the full setup and write your messages — you just start receiving booked appointments.' },
              },
              {
                '@type': 'Question',
                name: 'Does Vexlo work for small businesses with one or two employees?',
                acceptedAnswer: { '@type': 'Answer', text: "Yes — Vexlo is purpose-built for small and medium UK businesses. Whether you're a sole trader or run a team of 20, the system adapts to your size." },
              },
            ],
          }),
        }}
      />
    </>
  )
}

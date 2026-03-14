import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  MessageSquare,
  Globe,
  Star,
  CalendarCheck,
  Database,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'AI Receptionist Services | Phone Answering, Lead Capture & Review Automation | Vexlo',
  description:
    "Explore Vexlo's full suite of AI-powered services: AI voice receptionist, missed call text-back, lead capture websites, Google review automation, appointment reminders, and CRM pipeline for UK local businesses.",
  keywords: [
    'AI receptionist service UK',
    'AI phone answering service',
    'missed call text back service',
    'automated Google reviews',
    'lead capture website',
    'CRM for local businesses',
    'appointment reminder software UK',
    'AI answering service for tradespeople',
    'GoHighLevel UK agency',
  ],
  openGraph: {
    title: 'AI Receptionist Services for UK Local Businesses | Vexlo',
    description:
      'AI phone answering, missed-call text-back, Google review automation, and CRM — everything a UK local business needs to capture every lead.',
    url: `${siteUrl}/services`,
    images: [{ url: `${siteUrl}/Vexlo_logo.png`, width: 1200, height: 630, alt: 'Vexlo Services' }],
  },
  alternates: { canonical: `${siteUrl}/services` },
}

const services = [
  {
    icon: Phone,
    name: 'AI Voice Receptionist',
    tagline: 'Your business, always open.',
    description:
      'Our AI receptionist answers every call in your business name, 24 hours a day. It handles common questions, qualifies leads, takes messages, and books appointments — just like a human receptionist, but without the salary or sick days.',
    outcomes: [
      '100% call answer rate, day and night',
      'Handles FAQs about pricing, availability, and services',
      'Books appointments directly into your calendar',
      'Professionally represents your brand on every call',
    ],
    ideal: 'Ideal for: plumbers, cleaners, roofers, salons, dental clinics, estate agents',
  },
  {
    icon: MessageSquare,
    name: 'Missed Call Text-Back',
    tagline: 'Never let a lead go cold.',
    description:
      'If a call slips through — even for a second — your system sends an immediate, personalised SMS to the caller: "Hi, we missed your call. How can we help?" It restarts the conversation before they ring your competitor.',
    outcomes: [
      'Instant SMS sent within seconds of a missed call',
      'Personalised message in your brand voice',
      'Captures lead details from the reply',
      'Works outside office hours and weekends',
    ],
    ideal: 'Ideal for: any business that receives inbound calls',
  },
  {
    icon: Globe,
    name: 'Lead Capture Website',
    tagline: 'Turn visitors into enquiries.',
    description:
      'A professionally built, fast-loading landing page designed to convert local search traffic into enquiries. With clear calls to action, a smart enquiry form, and live chat widget — your website becomes a lead generation machine.',
    outcomes: [
      'SEO-optimised for local Google search',
      'Mobile-first design built for speed',
      'Smart enquiry form that feeds your CRM',
      'Live chat or chatbot integration available',
    ],
    ideal: 'Ideal for: businesses without a website or with a low-converting existing site',
  },
  {
    icon: Star,
    name: 'Google Review Automation',
    tagline: 'More reviews. Higher rankings. More calls.',
    description:
      'After every completed job, your system automatically sends a review request via SMS or email. More consistent 5-star reviews push your Google Business Profile higher in local search — bringing in more inbound calls without paying for ads.',
    outcomes: [
      'Automated review requests after job completion',
      'Works via SMS and email',
      'Directly boosts your Google Business Profile ranking',
      'Filters unhappy customers before they post publicly',
    ],
    ideal: 'Ideal for: any business with a Google Business Profile',
  },
  {
    icon: CalendarCheck,
    name: 'Appointment Reminders',
    tagline: 'Fill your diary. Reduce no-shows.',
    description:
      'Automated SMS and email reminders are sent to customers before their appointment. They can confirm, cancel, or reschedule — keeping your schedule full and eliminating wasted time on no-shows.',
    outcomes: [
      'Automated reminders 24–48 hours before appointment',
      'Two-way SMS confirmation',
      'Reduces no-shows by up to 60%',
      'Integrates with your booking calendar',
    ],
    ideal: 'Ideal for: dental clinics, salons, barbers, cleaning companies, trades',
  },
  {
    icon: Database,
    name: 'CRM & Lead Pipeline',
    tagline: 'Every lead tracked. Nothing forgotten.',
    description:
      'All your leads, calls, bookings, and customer history in one simple dashboard. Know exactly where every customer is in your pipeline, who needs a follow-up, and which jobs are ready to invoice — all in real time.',
    outcomes: [
      'Full lead pipeline from enquiry to job completion',
      'Automated follow-up sequences for cold leads',
      'Contact history and conversation log per customer',
      'Integrates with your AI receptionist and booking system',
    ],
    ideal: 'Ideal for: businesses handling 10+ enquiries per week',
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
          <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow delay-1000"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,163,0.8)]"></span>
            <span className="text-sm font-medium text-primary-light">Powered by GoHighLevel &amp; AI Voice Technology</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Everything You Need to Capture Every Lead
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Six powerful tools, one integrated system. Built for UK local businesses that rely on phone calls and Google search to win new customers.
          </p>
          <Link
            href="/enquiry"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-black font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-light hover:scale-105 transition-all duration-300"
          >
            Book a Free Demo
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-surface/30 -z-10"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`flex flex-col lg:flex-row gap-10 items-start ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-xl bg-primary/10 border border-primary/20 p-3">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{service.name}</h2>
                      <p className="text-primary text-sm font-medium">{service.tagline}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                  <p className="text-xs text-gray-600 italic">{service.ideal}</p>
                </div>

                {/* Outcomes */}
                <div className="flex-1 glass-card rounded-2xl p-8">
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-5">
                    What you get
                  </h3>
                  <ul className="space-y-4">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powered by GHL */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="absolute inset-0 border-y border-primary/10 -z-10"></div>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            One System. Everything Connected.
          </h2>
          <p className="text-gray-400 leading-relaxed">
            The entire Vexlo system is powered by GoHighLevel — one of the most powerful all-in-one CRM and automation platforms in the world. Every tool works together seamlessly, so your AI receptionist, CRM, website, and review system share the same data.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -z-10"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              We Work with These Industries
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Explore how Vexlo is being used by businesses like yours.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: 'Cleaning Companies', slug: 'ai-receptionist-cleaning-companies', emoji: '🧹' },
              { label: 'Plumbers & Heating', slug: 'ai-receptionist-plumbers', emoji: '🔧' },
              { label: 'Dental Clinics', slug: 'ai-receptionist-dentists', emoji: '🦷' },
              { label: 'Estate Agents', slug: 'ai-receptionist-estate-agents', emoji: '🏠' },
              { label: 'Roofing Companies', slug: 'ai-receptionist-roofing-companies', emoji: '🏗️' },
              { label: 'Beauty Salons & Barbers', slug: 'ai-receptionist-salons-barbers', emoji: '✂️' },
              { label: 'Property Maintenance', slug: 'ai-receptionist-property-maintenance', emoji: '🏢' },
            ].map((industry) => (
              <Link
                key={industry.slug}
                href={`/${industry.slug}`}
                className="glass-card group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl hover:border-primary/50 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <span className="text-3xl">{industry.emoji}</span>
                <span className="text-sm font-medium text-gray-300 group-hover:text-primary transition-colors">
                  {industry.label}
                </span>
                <ArrowRight size={14} className="text-gray-600 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Ready to Stop Missing Calls?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Book a free 15-minute demo and we&apos;ll show you how Vexlo can work for your specific business.
          </p>
          <Link
            href="/enquiry"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-black font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-light hover:scale-105 transition-all duration-300"
          >
            Book a Free 15-Minute Demo
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

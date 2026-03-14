import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import Link from 'next/link'
import { ArrowRight, Phone, PhoneOff, Star, Globe, MessageSquare, CalendarX, CheckCircle } from 'lucide-react'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'AI Receptionist for UK Local Businesses | Never Miss a Call Again | Vexlo',
  description:
    "Vexlo's AI receptionist answers every call 24/7, sends missed-call text-backs, captures leads, and automates Google reviews — helping UK tradespeople, clinics, and service businesses win more booked jobs.",
  keywords: [
    'AI receptionist UK',
    'missed call text back',
    'AI phone answering service UK',
    'AI receptionist for small businesses',
    'automated Google reviews',
    'lead capture for local businesses',
    'CRM for tradespeople',
    'AI answering service UK',
    'appointment booking automation',
    'AI receptionist for plumbers',
    'AI receptionist for cleaning companies',
    'AI receptionist for dental clinics',
  ],
  openGraph: {
    title: 'AI Receptionist for UK Local Businesses | Vexlo',
    description:
      'Turn missed calls into booked jobs — automatically. AI receptionist, missed-call text-back, Google review automation, and CRM for UK SMBs.',
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/Vexlo_logo.png`,
        width: 1200,
        height: 630,
        alt: 'Vexlo — AI Receptionist for UK Local Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Receptionist for UK Local Businesses | Vexlo',
    description:
      'Turn missed calls into booked jobs — automatically. AI receptionist, missed-call text-back, and Google review automation for UK SMBs.',
    images: [`${siteUrl}/Vexlo_logo.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
}

const problems = [
  {
    icon: PhoneOff,
    headline: 'Calls Go Unanswered',
    description:
      "When you're on the job, on a ladder, or under a sink — the phone rings out. Up to 40% of inbound calls to local businesses go unanswered.",
  },
  {
    icon: ArrowRight,
    headline: 'Customers Call a Competitor',
    description:
      "Most callers won't leave a voicemail. They simply ring the next business on Google. You worked hard to rank — but someone else gets the booking.",
  },
  {
    icon: Star,
    headline: "Reviews Don't Come In",
    description:
      "Happy customers rarely leave reviews unless asked. Without a steady stream of 5-star reviews, your Google ranking stagnates and new leads dry up.",
  },
  {
    icon: Globe,
    headline: "Your Website Doesn't Convert",
    description:
      "Visitors land on your site, can't find the info they need, and leave. Without a live chat or lead capture form, you're invisible to online enquiries.",
  },
]

const services = [
  {
    icon: Phone,
    name: 'AI Voice Receptionist',
    description:
      'A professional AI answers your phone 24/7. It handles FAQs, takes messages, qualifies leads, and books appointments — sounding natural, not robotic.',
  },
  {
    icon: MessageSquare,
    name: 'Missed Call Text-Back',
    description:
      'If a call slips through, your system sends an instant SMS: "Hi, we missed your call — how can we help?" Most people reply within minutes.',
  },
  {
    icon: Globe,
    name: 'Lead Capture Website',
    description:
      'A high-converting landing page that captures every enquiry with a smart form, live chat widget, and clear calls to action.',
  },
  {
    icon: Star,
    name: 'Google Review Automation',
    description:
      'After every job, an automated text or email asks customers to leave a Google review. More reviews = higher local rankings = more inbound calls.',
  },
  {
    icon: CalendarX,
    name: 'Appointment Reminders',
    description:
      'Reduce no-shows with automated SMS and email reminders. Customers confirm or reschedule — keeping your diary full and profitable.',
  },
  {
    icon: CheckCircle,
    name: 'CRM & Lead Pipeline',
    description:
      'Every lead, call, and booking tracked in one place. See exactly where each customer is in your pipeline and follow up at the right moment.',
  },
]

const niches = [
  {
    slug: 'ai-receptionist-cleaning-companies',
    name: 'Cleaning Companies',
    emoji: '🧹',
    pain: "Staff are on jobs all day — calls go to voicemail and clients book elsewhere.",
    value: 'A regular cleaning contract is worth £150–£600/month. One missed call costs you thousands over a year.',
    cta: 'AI Receptionist for Cleaning Companies',
  },
  {
    slug: 'ai-receptionist-plumbers',
    name: 'Plumbers & Heating Engineers',
    emoji: '🔧',
    pain: "Emergency calls come in while you're under a sink or in a loft — and you can't answer.",
    value: 'A boiler installation is worth £2,000–£4,000. Missing one call could mean missing the job entirely.',
    cta: 'AI Receptionist for Plumbers',
  },
  {
    slug: 'ai-receptionist-dentists',
    name: 'Dental Clinics',
    emoji: '🦷',
    pain: 'Receptionists are overwhelmed, patients calling for appointments go on hold or give up.',
    value: 'Every NHS or private appointment booked keeps your chair full and your revenue predictable.',
    cta: 'AI Receptionist for Dental Clinics',
  },
  {
    slug: 'ai-receptionist-estate-agents',
    name: 'Estate Agents',
    emoji: '🏠',
    pain: 'Property enquiries arrive at all hours. Every unanswered call is a potential sale or let lost.',
    value: 'A single property transaction is worth £3,000–£15,000 in fees. No lead should ever go cold.',
    cta: 'AI Receptionist for Estate Agents',
  },
  {
    slug: 'ai-receptionist-roofing-companies',
    name: 'Roofing Companies',
    emoji: '🏗️',
    pain: "You're on a roof all day. High-value enquiries call, get no answer, and go to the next roofer.",
    value: "A commercial or domestic roofing job is worth £5,000–£25,000. You can't afford to miss those calls.",
    cta: 'AI Receptionist for Roofers',
  },
  {
    slug: 'ai-receptionist-salons-barbers',
    name: 'Beauty Salons & Barbers',
    emoji: '✂️',
    pain: "You're with a client and can't answer the phone — so new customers book at a salon that does.",
    value: 'A loyal regular client is worth £800–£2,000 a year. Automated booking keeps your schedule full.',
    cta: 'AI Receptionist for Salons & Barbers',
  },
  {
    slug: 'ai-receptionist-property-maintenance',
    name: 'Property Maintenance',
    emoji: '🏢',
    pain: 'Tenant repair requests and landlord enquiries come in constantly — and are hard to manage.',
    value: 'Consistent response times build long-term contracts with landlords worth thousands per year.',
    cta: 'AI Receptionist for Property Maintenance',
  },
]

const testimonials = [
  {
    quote:
      'We were losing 6–8 bookings a week to missed calls. Since Vexlo, the AI answers every call and sends texts to anyone who rings after hours. Our bookings are up 35%.',
    name: 'Sarah M.',
    role: 'Owner, residential cleaning company',
    location: 'Manchester',
  },
  {
    quote:
      "I'm on the tools all day. I can't answer the phone when I'm under a boiler. Now the AI takes the call, gets their details, and I call them back when I'm ready. I've not missed a lead in three months.",
    name: 'Dave T.',
    role: 'Sole trader plumber & heating engineer',
    location: 'Birmingham',
  },
  {
    quote:
      "Our receptionist was drowning in appointment calls. The AI now handles all the basic booking requests and sends reminders. We've had a huge drop in no-shows too.",
    name: 'Dr. Priya K.',
    role: 'Principal dentist, private dental clinic',
    location: 'Leeds',
  },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Vexlo — AI Receptionist for UK Local Businesses',
            description:
              "Turn missed calls into booked jobs with Vexlo's AI receptionist, missed-call text-back, Google review automation, and CRM for UK SMBs.",
            url: siteUrl,
            mainEntity: {
              '@type': 'Service',
              name: 'AI Receptionist & Business Automation',
              provider: {
                '@type': 'Organization',
                name: 'Vexlo',
                logo: `${siteUrl}/Vexlo_logo.png`,
              },
              areaServed: { '@type': 'Country', name: 'United Kingdom' },
              serviceType: 'AI Receptionist and Lead Capture Automation',
            },
          }),
        }}
      />

      {/* HERO */}
      <Hero />

      {/* BENEFITS */}
      <Benefits />

      {/* PROBLEM SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The Problem Every Local Business Faces
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Studies show that 25–40% of calls to local service businesses go unanswered. That&apos;s not a small problem — it&apos;s revenue walking out the door every single day.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {problems.map((problem) => (
              <div
                key={problem.headline}
                className="group flex gap-5 p-8 rounded-2xl bg-white border border-slate-200 shadow-clean hover:shadow-clean-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 rounded-xl bg-red-50 p-3 h-fit border border-red-100 group-hover:bg-red-100 transition-colors">
                  <problem.icon className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{problem.headline}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* SOLUTION / SERVICES SECTION */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything You Need to Stop Losing Business
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Vexlo combines AI phone answering, lead capture, CRM, and review automation into one simple system — built specifically for UK service businesses.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="group flex flex-col p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-clean-lg transition-all duration-300"
              >
                <div className="rounded-xl bg-white p-3 mb-5 w-fit border border-slate-200 shadow-sm group-hover:border-blue-200 group-hover:bg-blue-50 transition-all">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-8 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all shadow-sm"
            >
              Explore All Features
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* NICHE SECTIONS */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built for UK Local Businesses
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Whatever industry you&apos;re in, if you rely on the phone for new business, Vexlo is for you.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {niches.map((niche) => (
              <div
                key={niche.slug}
                className="group flex flex-col p-8 rounded-2xl bg-white border border-slate-200 shadow-clean hover:shadow-clean-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{niche.emoji}</span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {niche.cta}
                  </h3>
                </div>
                <p className="text-slate-600 mb-2 text-sm leading-relaxed">
                  <span className="font-semibold text-slate-900">The problem: </span>
                  {niche.pain}
                </p>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  <span className="font-semibold text-slate-900">The opportunity: </span>
                  {niche.value}
                </p>
                <Link
                  href={`/${niche.slug}`}
                  className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
                >
                  Learn more
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              UK Businesses Already Using Vexlo
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Real results from real business owners who stopped missing calls and started winning more jobs.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col p-8 rounded-2xl bg-slate-800 border border-slate-700 shadow-lg"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed text-sm italic flex-1">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="text-sm font-bold text-white">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                  <p className="text-xs text-primary-light mt-1">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              See How an AI Receptionist Could Work for Your Business
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Book a free 15-minute demo. We&apos;ll show you exactly how many leads you&apos;re currently losing — and how to get them back.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/enquiry"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-primary font-bold shadow-xl hover:bg-blue-50 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Book a Free 15-Minute Demo
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="text-base font-semibold text-white hover:text-blue-100 transition-colors"
              >
                Explore all features →
              </Link>
            </div>
            <p className="mt-6 text-sm text-blue-200 opacity-80">
              No commitment. No technical setup required on your part.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

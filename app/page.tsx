import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import Link from 'next/link'
import { ArrowRight, Star, Mic, Workflow, Bot } from 'lucide-react'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'AI Voice Assistants & Workflow Automation for UK Business | Vexlo',
  description: 'Transform your UK SMB with AI Voice Assistants and intelligent Workflow Automation. Reduce manual work, handle customer calls 24/7, and scale efficiently.',
  keywords: [
    'AI voice assistants',
    'workflow automation',
    'AI phone agents',
    'business automation UK',
    'automate customer service',
    'SME automation services',
    'voice AI for business',
    'intelligent workflows',
  ],
  openGraph: {
    title: 'Vexlo - AI Voice Assistants & Workflow Automation',
    description: 'Deploy AI Voice Assistants and automate complex workflows. Scale your UK business with intelligent automation.',
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/Vexlo_logo.png`,
        width: 1200,
        height: 630,
        alt: 'Vexlo - AI Business Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vexlo - AI Voice Assistants & Workflow Automation',
    description: 'Deploy AI Voice Assistants and automate complex workflows. Scale your UK business with intelligent automation.',
    images: [`${siteUrl}/Vexlo_logo.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary selection:text-black overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Vexlo - AI Voice Assistants & Workflow Automation',
            description: 'Transform your UK SMB with intelligent automation. Deploy AI Voice Assistants and automate workflows.',
            url: siteUrl,
            mainEntity: {
              '@type': 'Service',
              name: 'AI Automation Services',
              provider: {
                '@type': 'Organization',
                name: 'Vexlo',
                logo: `${siteUrl}/Vexlo_logo.png`,
              },
              areaServed: {
                '@type': 'Country',
                name: 'United Kingdom',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Automation Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'AI Voice Assistants',
                      description: 'Intelligent phone agents that handle inbound/outbound calls 24/7.'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Workflow Automation',
                      description: 'End-to-end automation of business processes and data entry.'
                    }
                  }
                ]
              }
            },
          }),
        }}
      />

      <Hero />
      <Benefits />
      <HowItWorks />

      {/* Services Overview */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/50 pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Intelligent Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Comprehensive automation tailored to your business needs.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: "AI Voice Assistants",
                desc: "Deploy intelligent voice agents to handle customer inquiries, bookings, and support calls 24/7 without human intervention.",
                icon: Mic
              },
              {
                title: "Workflow Automation",
                desc: "Connect your apps and automate repetitive tasks. From lead capture to invoicing, let AI handle the process.",
                icon: Workflow
              },
              {
                title: "AI Business Agents",
                desc: "Custom AI agents that act as virtual employees, managing emails, scheduling, and data entry with precision.",
                icon: Bot
              }
            ].map((service, i) => (
              <div key={i} className="glass-card group flex flex-col p-8 rounded-2xl hover:border-primary/50 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-4 inline-block p-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-xl bg-white/5 px-8 py-4 text-base font-semibold text-white border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all transform hover:scale-105 hover:-translate-y-1"
            >
              View All Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by UK Businesses
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Join growing businesses that have transformed their operations with Vexlo.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              { quote: "The AI voice assistant handles all our out-of-hours calls perfectly. It's like having a receptionist 24/7.", author: "Clinic Manager" },
              { quote: "Our workflow automation saves us 15 hours a week on manual data entry. The ROI was immediate.", author: "Operations Director" },
              { quote: "Vexlo's AI agents integrated seamlessly with our CRM. We've seen a 40% increase in lead conversion.", author: "Sales Head" }
            ].map((testimonial, i) => (
              <div key={i} className="flex flex-col p-8 rounded-2xl bg-surface border border-white/5 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} className="text-accent fill-accent" />)}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="text-sm font-semibold text-white text-right">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 backdrop-blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-primary/5"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl drop-shadow-lg">
              Ready to Automate Your Business?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Get started today with a free consultation. Let&apos;s discuss how AI Voice Assistants and Workflow Automation can help you scale.
            </p>
            <div className="mt-10">
              <Link
                href="/enquiry"
                className="group relative rounded-xl bg-primary px-8 py-4 text-base font-bold text-black shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all transform hover:scale-105 hover:-translate-y-1 inline-flex items-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative">Get Started</span>
                <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

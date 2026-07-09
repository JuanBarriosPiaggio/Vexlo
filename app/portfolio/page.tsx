import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Web Design & Development Portfolio | Bespoke Websites for UK Businesses | Vexlo',
  description:
    'See the websites Vexlo has designed and built for UK businesses — including bespoke booking systems, Simpro integrations, custom admin modules, and SEO-optimised sites that generate leads.',
  keywords: [
    'web design portfolio UK',
    'bespoke website development UK',
    'web design for trades UK',
    'booking system website UK',
    'Simpro integration developer',
    'custom admin dashboard development',
    'SEO web design small business UK',
    'website with online booking system',
    'web developer for cleaning companies',
    'web design fire protection company',
  ],
  alternates: { canonical: `${siteUrl}/portfolio` },
  openGraph: {
    url: `${siteUrl}/portfolio`,
    title: 'Web Design & Development Portfolio — Vexlo',
    description:
      'Bespoke websites, booking systems, and custom integrations built for UK businesses. See our recent work.',
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Vexlo Web Design Portfolio' }],
  },
}

const projects = [
  {
    name: 'Fyrup',
    url: 'https://fyrup.co.uk',
    displayUrl: 'fyrup.co.uk',
    tag: 'Fire Protection — London',
    tagline: 'Passive fire protection & fire risk assessments',
    image: '/images/portfolio-fyrup.webp',
    imageWidth: 1000,
    imageHeight: 604,
    description:
      'Fyrup is a London fire protection company offering fire risk assessments, fire stopping, fire doors, fire dampers and extinguisher servicing. We built their entire digital presence from the ground up — a fast, SEO-driven website that generates a steady flow of commercial enquiries.',
    gradient: 'linear-gradient(135deg, #1c0f08, #38180a)',
    accent: '#f97316',
    deliverables: [
      {
        icon: '🖥️',
        title: 'Full Website Design & Build',
        detail:
          'A conversion-focused site with same-day quote forms, service pages for every offering, London borough area pages, and a full SEO article library — all built to rank for competitive fire safety keywords.',
      },
      {
        icon: '🔌',
        title: 'Simpro Integration',
        detail:
          'We integrated the website directly with Simpro, the field service management platform Fyrup runs on — so enquiries flow straight into their job management system without manual re-entry.',
      },
      {
        icon: '⚙️',
        title: 'Bespoke Admin Modules',
        detail:
          'Custom-built modules in their admin section, designed around how their team actually works — giving them tools their off-the-shelf software could not provide.',
      },
      {
        icon: '📈',
        title: 'Local SEO Architecture',
        detail:
          'Borough and postcode-level landing pages, structured data, and an article strategy targeting the exact searches London property managers make.',
      },
    ],
    stack: ['Custom design', 'Simpro API', 'Bespoke admin tools', 'Local SEO', 'Quote forms'],
  },
  {
    name: 'Tenanclean',
    url: 'https://tenanclean.com',
    displayUrl: 'tenanclean.com',
    tag: 'End of Tenancy Cleaning — London',
    tagline: 'Deposit-back cleaning with instant online booking',
    image: '/images/portfolio-tenanclean.webp',
    imageWidth: 1000,
    imageHeight: 666,
    description:
      'Tenanclean is an end of tenancy cleaning company covering every London borough inside the M25. We designed and built their website around one goal: letting customers price and book a clean in under 60 seconds — no phone call required.',
    gradient: 'linear-gradient(135deg, #071a1c, #0a2e33)',
    accent: '#22d3ee',
    deliverables: [
      {
        icon: '🧮',
        title: 'Instant Quote Calculator',
        detail:
          'A room-by-room pricing calculator that builds a fixed quote live on screen — kitchen, bedrooms, bathrooms, appliances, carpets and extras — with no hidden charges and no waiting for a callback.',
      },
      {
        icon: '📅',
        title: 'Online Booking System',
        detail:
          'A complete booking flow built from scratch. Customers pick their property size, date, and extras, and the job is booked — 7 days a week, without anyone answering a phone.',
      },
      {
        icon: '📧',
        title: 'Dual Email Confirmations',
        detail:
          'Every booking triggers automatic email confirmations to both the customer and the business owner — so the client has their receipt and the owner sees exactly who booked, what service, and when.',
      },
      {
        icon: '📍',
        title: 'Area & Service Pages',
        detail:
          'Dedicated pages for every London area they cover and every service they offer — from end of tenancy cleans to after-builders cleaning — each targeting its own local search terms.',
      },
    ],
    stack: ['Custom booking system', 'Live quote calculator', 'Email automation', 'Local SEO', 'Service pages'],
  },
]

const capabilities = [
  {
    icon: '🎨',
    title: 'Website Design & Build',
    text: 'Fast, modern, conversion-focused websites designed around your business — not a template. Built to rank on Google and turn visitors into enquiries.',
  },
  {
    icon: '📅',
    title: 'Booking Systems',
    text: 'Custom booking flows and instant quote calculators that let customers book and pay without a phone call — with automatic confirmations for you and them.',
  },
  {
    icon: '🔌',
    title: 'Software Integrations',
    text: 'We connect your website to the tools you already run — Simpro, CRMs, calendars, payment systems — so data flows automatically with no manual re-entry.',
  },
  {
    icon: '⚙️',
    title: 'Bespoke Admin Tools',
    text: 'Custom modules and dashboards built around how your team actually works. When off-the-shelf software falls short, we build exactly what you need.',
  },
  {
    icon: '📈',
    title: 'SEO From Day One',
    text: 'Every site we build ships with proper SEO architecture — service pages, area pages, structured data, and content strategy — so it earns traffic, not just looks good.',
  },
  {
    icon: '🤖',
    title: 'AI Automation Ready',
    text: 'Your website plugs straight into our AI missed call text-back, review automation, and listings management — one connected system for winning and keeping customers.',
  },
]

export default function PortfolioPage() {
  return (
    <div style={{ background: '#0a0a0a' }}>

      {/* HERO */}
      <section
        className="relative pt-36 pb-20 px-6 md:px-10 overflow-hidden"
        style={{ background: '#0a0a0a' }}
      >
        <div
          className="pointer-events-none absolute"
          style={{
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(217,119,6,0.09) 0%, transparent 70%)',
            top: '-100px', right: '-100px',
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{ background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.3)', color: '#d97706' }}
            >
              <span>💼</span> Our Work
            </div>
            <h1
              className="font-display text-white mb-6 leading-none"
              style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', letterSpacing: '0.02em' }}
            >
              Websites that<br />
              <span className="font-serif" style={{ color: '#d97706', fontStyle: 'italic' }}>win you work.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#888', maxWidth: '560px' }}>
              We design and build bespoke websites for UK businesses — with booking systems, software integrations, and custom admin tools that most agencies can&apos;t deliver. Here&apos;s a look at recent projects.
            </p>
            <Link
              href="/enquiry"
              className="inline-flex items-center px-8 py-4 rounded text-sm font-bold tracking-wide text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
              style={{ background: '#d97706' }}
            >
              Discuss Your Project →
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      {projects.map((project, pi) => (
        <section
          key={project.name}
          style={{ background: pi % 2 === 0 ? '#111111' : '#0a0a0a', padding: '90px 24px' }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              {/* Browser mockup */}
              <div className={pi % 2 === 1 ? 'lg:order-2' : ''}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl overflow-hidden transition-transform duration-200 hover:-translate-y-1"
                  style={{ border: '1px solid #2a2a2a', boxShadow: '0 40px 80px rgba(0,0,0,0.45)', textDecoration: 'none' }}
                >
                  {/* Browser chrome */}
                  <div
                    className="flex items-center gap-3 px-5 py-3.5"
                    style={{ background: '#1a1a1a', borderBottom: '1px solid #2a2a2a' }}
                  >
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full" style={{ background: '#ef4444' }} />
                      <span className="w-3 h-3 rounded-full" style={{ background: '#facc15' }} />
                      <span className="w-3 h-3 rounded-full" style={{ background: '#4ade80' }} />
                    </div>
                    <div
                      className="flex-1 text-center text-xs px-4 py-1.5 rounded-md"
                      style={{ background: '#0a0a0a', color: '#888' }}
                    >
                      {project.displayUrl}
                    </div>
                  </div>
                  {/* Site preview screenshot */}
                  <div className="relative" style={{ background: project.gradient }}>
                    <Image
                      src={project.image}
                      alt={`${project.name} website — ${project.tagline}`}
                      width={project.imageWidth}
                      height={project.imageHeight}
                      quality={90}
                      className="w-full h-auto block"
                    />
                    <span
                      className="absolute bottom-4 right-4 inline-flex items-center px-4 py-2 rounded text-xs font-bold tracking-wide"
                      style={{ background: project.accent, color: '#0a0a0a' }}
                    >
                      Visit live site ↗
                    </span>
                  </div>
                </a>

                {/* Stack chips */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-bold px-3 py-1.5 rounded-full"
                      style={{ background: 'rgba(217,119,6,0.12)', color: '#d97706', border: '1px solid rgba(217,119,6,0.25)' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project detail */}
              <div className={pi % 2 === 1 ? 'lg:order-1' : ''}>
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-5"
                  style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706' }}
                >
                  {project.tag}
                </span>
                <h2
                  className="font-display text-white mb-5"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.05, letterSpacing: '0.02em' }}
                >
                  {project.name}
                </h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: '#888' }}>
                  {project.description}
                </p>
                <div className="flex flex-col gap-4">
                  {project.deliverables.map((d) => (
                    <div
                      key={d.title}
                      className="flex items-start gap-4 p-5 rounded-xl"
                      style={{ background: pi % 2 === 0 ? '#1a1a1a' : '#111111', border: '1px solid #2a2a2a' }}
                    >
                      <span className="text-2xl flex-shrink-0">{d.icon}</span>
                      <div>
                        <h3 className="font-bold text-sm mb-1" style={{ color: '#fff' }}>{d.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#888' }}>{d.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CAPABILITIES */}
      <section style={{ background: '#111111', padding: '90px 24px' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-tag" style={{ textAlign: 'center' }}>What We Build</div>
            <h2
              className="font-display text-white mt-2"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '0.02em' }}
            >
              Web design &amp; development, done properly.
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: '#888' }}>
              Every project is bespoke — designed for your business, built to generate leads, and connected to the systems you already use.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="p-7 rounded-xl"
                style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}
              >
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="font-bold text-sm mb-2" style={{ color: '#fff' }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#888' }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden text-center"
        style={{ background: '#0a0a0a', padding: '100px 24px' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, rgba(217,119,6,0.07) 0%, transparent 70%)' }}
        />
        <div className="max-w-2xl mx-auto relative z-10">
          <h2
            className="font-display text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 4.5rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Need a website that<br />
            <span className="font-serif" style={{ color: '#d97706', fontStyle: 'italic' }}>actually performs?</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888', maxWidth: '480px', margin: '0 auto 40px' }}>
            Whether it&apos;s a full website, a booking system, or a bespoke integration with your existing software — tell us what you need and we&apos;ll show you how we&apos;d build it.
          </p>
          <Link
            href="/enquiry"
            className="inline-flex items-center px-9 py-4 rounded text-sm font-bold tracking-wide text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
            style={{ background: '#d97706' }}
          >
            Start Your Project →
          </Link>
          <p className="mt-5 text-xs" style={{ color: '#888' }}>
            Free consultation. No obligation. We reply within 1 business day.
          </p>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Vexlo Web Design & Development Portfolio',
            url: `${siteUrl}/portfolio`,
            description:
              'Bespoke websites, booking systems, and custom software integrations built by Vexlo for UK businesses.',
            mainEntity: {
              '@type': 'Service',
              name: 'Web Design & Development',
              provider: { '@type': 'Organization', name: 'Vexlo', url: siteUrl },
              areaServed: { '@type': 'Country', name: 'United Kingdom' },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Web Development Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bespoke Website Design & Build' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Online Booking Systems & Quote Calculators' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Software Integrations (Simpro, CRM, calendars)' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bespoke Admin Modules & Dashboards' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Architecture & Content Strategy' } },
                ],
              },
            },
          }),
        }}
      />
    </div>
  )
}

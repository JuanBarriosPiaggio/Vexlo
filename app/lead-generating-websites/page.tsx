import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Lead Generating Websites for UK Small Businesses | Vexlo',
  description:
    'Most small business websites never produce a single lead. Vexlo builds SEO-driven websites with quote calculators, booking systems and local citations that start generating real enquiries — our clients saw their first organic leads within around 2 months.',
  keywords: [
    'lead generating website UK',
    'website that generates leads',
    'small business website UK',
    'why is my website not getting leads',
    'web design that gets leads UK',
    'SEO website for small business',
    'website with quote calculator UK',
    'website with booking system UK',
    'local SEO website design',
    'web design for trades UK',
    'web design for cleaning companies',
    'web design for service businesses UK',
  ],
  alternates: { canonical: `${siteUrl}/lead-generating-websites` },
  openGraph: {
    url: `${siteUrl}/lead-generating-websites`,
    title: 'Websites That Deliver Leads — Vexlo',
    description:
      'SEO-driven websites with quote calculators and booking systems that turn searches into enquiries. Real clients, real leads, honest timelines.',
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Vexlo — Lead Generating Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Websites That Deliver Leads — Vexlo',
    description:
      'SEO-driven websites with quote calculators and booking systems that turn searches into enquiries.',
  },
}

const audienceA = [
  'Your website has been live for years and you cannot remember the last enquiry it produced.',
  'It looks fine — but it is a digital brochure. There is no reason for a visitor to take action.',
  'You do not appear on Google when people search for what you do in your area.',
  'You paid a designer once, they moved on, and nothing has been touched since.',
  'Competitors with worse workmanship are winning jobs because they show up first.',
]

const audienceB = [
  'You rely entirely on word of mouth — which works, until the referrals slow down.',
  'When someone is given your name, they Google you first. Right now they find nothing — or worse, a competitor.',
  'You are invisible for every customer who searches online instead of asking a friend.',
  'A Facebook page or a Google Business Profile alone is not enough to win the comparison.',
  'Every month without a working website is another month your competitors collect the leads.',
]

const system = [
  {
    step: 'SEO architecture from day one',
    detail:
      'Service pages, local area pages, structured data, and content targeting the exact searches your customers make. Not bolted on afterwards — designed in from the first wireframe.',
  },
  {
    step: 'A reason to enquire, built in',
    detail:
      'Instant quote calculators, online booking, and same-day quote forms. Visitors don\u2019t just read — they price the job, pick a slot, and become a lead without needing to phone you.',
  },
  {
    step: 'Local citations & listings',
    detail:
      'Your business listed consistently across 55+ high-authority UK directories, so Google trusts your data and ranks you for local searches.',
  },
  {
    step: 'Content that compounds',
    detail:
      'Articles and guides targeting the questions your customers actually ask — each one another door into your website from search.',
  },
  {
    step: 'Nothing slips through',
    detail:
      'Once the leads arrive, our AI layer catches them: missed call text-back in seconds, automated booking, review requests after every job. The website wins the lead — the system keeps it.',
  },
]

const caseStudies = [
  {
    name: 'Tenanclean',
    url: 'https://tenanclean.com',
    sector: 'End of tenancy cleaning — London',
    built: 'Full website, instant quote calculator, online booking system with email confirmations for customer and owner, service and area pages, SEO articles.',
    result:
      'First organic lead roughly 2 months after launch. The custom quote calculator is now where their website enquiries come from — customers price their own clean and book it without a phone call.',
  },
  {
    name: 'Fyrup',
    url: 'https://fyrup.co.uk',
    sector: 'Passive fire protection — London',
    built: 'Full website, Simpro integration, bespoke admin modules, borough-level area pages, quote forms, SEO article library.',
    result:
      'First organic leads at around the 2-month mark, growing since. Commercial fire protection enquiries now come in through search — and flow straight into their job management system.',
  },
]

const faqs = [
  {
    q: 'How long until a new website starts generating leads?',
    a: 'Honestly: it is not instant. Google takes time to crawl, index and trust a new site. Both of our featured clients — Tenanclean and Fyrup — saw their first organic leads at around the 2-month mark, and lead flow has compounded since. Anyone promising page-one rankings in a week is not being straight with you.',
  },
  {
    q: 'Do you guarantee leads?',
    a: 'No — and you should be wary of anyone who does, because nobody controls Google. What we can show you is what we build (SEO architecture, calculators, booking systems, citations) and what has actually happened for real clients. We build websites the way that has worked, and we are transparent about timelines.',
  },
  {
    q: 'I already have a website. Do I have to start from scratch?',
    a: 'Not necessarily. We start with an audit: what is ranking, what is broken, and why it is not converting. Sometimes the right answer is a rebuild; sometimes it is targeted fixes — SEO structure, a quote calculator, proper service pages. We will tell you which honestly.',
  },
  {
    q: 'What does a lead-generating website cost?',
    a: 'It depends on scope — a site with a custom quote calculator and integrations is a different project to a five-page service site. We scope it on a free call and give you a clear fixed quote. No surprises mid-project.',
  },
  {
    q: 'What is a quote calculator and why does it matter?',
    a: 'It lets a visitor build a fixed price for their job — room by room, service by service — right on your website. It is the difference between "browse and leave" and "price it, book it". For Tenanclean, this is where their website leads come from.',
  },
  {
    q: 'Can the website connect to software I already use?',
    a: 'Yes. We build integrations with the tools you run your business on — Simpro, CRMs, calendars, and more. For Fyrup, website enquiries flow directly into Simpro with no manual re-entry.',
  },
  {
    q: 'What happens after the site goes live?',
    a: 'Launch is the start, not the end. Citations get built, content gets published, and our AI layer (missed call text-back, review automation, booking) makes sure every lead the site produces actually gets captured.',
  },
]

export default function LeadGeneratingWebsitesPage() {
  return (
    <div style={{ background: '#0a0a0a' }}>

      {/* HERO */}
      <section
        className="relative pt-36 pb-24 px-6 md:px-10 overflow-hidden"
        style={{ background: '#0a0a0a' }}
      >
        <div
          className="pointer-events-none absolute"
          style={{
            width: '650px', height: '650px',
            background: 'radial-gradient(circle, rgba(217,119,6,0.09) 0%, transparent 70%)',
            top: '-120px', right: '-120px',
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{ background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.3)', color: '#d97706' }}
            >
              <span>🎯</span> Websites That Deliver Leads
            </div>
            <h1
              className="font-display text-white mb-6 leading-none"
              style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', letterSpacing: '0.02em' }}
            >
              Most websites don&apos;t get leads.<br />
              <span className="font-serif" style={{ color: '#d97706', fontStyle: 'italic' }}>Ours do.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#888', maxWidth: '580px' }}>
              We build websites for UK small businesses that are engineered to generate enquiries — SEO from day one, instant quote calculators, online booking, and local citations. Our clients saw their first organic leads within around 2 months of launch, compounding ever since.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <Link
                href="/enquiry"
                className="inline-flex items-center px-8 py-4 rounded text-sm font-bold tracking-wide text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
                style={{ background: '#d97706' }}
              >
                Get a Free Website Plan →
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center px-8 py-4 rounded text-sm font-semibold transition-all duration-200 hover:text-white"
                style={{ border: '1px solid #2a2a2a', color: '#e8e8e8' }}
              >
                See Real Client Sites
              </Link>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { value: '~2 mo', label: 'to first organic leads (real client data)' },
                { value: '60 sec', label: 'for a visitor to price & book a job' },
                { value: '55+', label: 'directories backing your local SEO' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-display text-2xl" style={{ color: '#d97706', letterSpacing: '0.05em' }}>{s.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#888' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TWO AUDIENCES */}
      <section style={{ background: '#111111', padding: '90px 24px' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-tag" style={{ textAlign: 'center' }}>Sound Familiar?</div>
            <h2
              className="font-display text-white mt-2"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.05, letterSpacing: '0.02em' }}
            >
              Two ways businesses lose leads online.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className="p-8 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #170d05, #241203)', border: '1px solid rgba(217,119,6,0.25)' }}
            >
              <div className="text-4xl mb-4">🕸️</div>
              <h3 className="font-display text-white mb-2" style={{ fontSize: '1.6rem' }}>
                You have a website. It produces nothing.
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#888' }}>
                It exists, it looks presentable — and it has never made your phone ring.
              </p>
              <div className="flex flex-col gap-3">
                {audienceA.map((pain, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)' }}
                  >
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{ background: 'rgba(239,68,68,0.15)', color: '#ef4444' }}
                    >
                      ✕
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: '#e8e8e8' }}>{pain}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="p-8 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #0d0d15, #131324)', border: '1px solid #2a2a2a' }}
            >
              <div className="text-4xl mb-4">👻</div>
              <h3 className="font-display text-white mb-2" style={{ fontSize: '1.6rem' }}>
                You don&apos;t have one — and think that&apos;s fine.
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#888' }}>
                Word of mouth built your business. But it caps how far it can grow.
              </p>
              <div className="flex flex-col gap-3">
                {audienceB.map((pain, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)' }}
                  >
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{ background: 'rgba(239,68,68,0.15)', color: '#ef4444' }}
                    >
                      ✕
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: '#e8e8e8' }}>{pain}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HONEST TIMELINE BANNER */}
      <section style={{ background: '#d97706', padding: '60px 40px' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-3xl mb-4">⏱️</div>
          <p className="text-lg leading-relaxed font-medium" style={{ color: 'rgba(255,255,255,0.95)' }}>
            We&apos;ll be straight with you: a new website doesn&apos;t generate leads overnight. For our clients Tenanclean and Fyrup, the first organic leads arrived around 2 months after launch — and have compounded month after month since. That&apos;s how real SEO works.
          </p>
        </div>
      </section>

      {/* THE SYSTEM */}
      <section style={{ background: '#0a0a0a', padding: '90px 24px' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-tag" style={{ textAlign: 'center' }}>How We Build</div>
            <h2
              className="font-display text-white mt-2"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '0.02em' }}
            >
              A website is not the product.<br />Leads are the product.
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: '#888' }}>
              Anyone can make something that looks good. We engineer every layer that turns a search into an enquiry.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block" style={{ background: '#2a2a2a' }} />
            <div className="flex flex-col gap-10">
              {system.map((item, i) => (
                <div key={i} className="relative flex flex-col md:flex-row gap-6 md:items-start">
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-display text-xl z-10 mx-auto md:mx-0"
                    style={{ background: '#111111', border: '2px solid #2a2a2a', color: '#d97706' }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 p-6 rounded-xl" style={{ background: '#111111', border: '1px solid #2a2a2a' }}>
                    <h3 className="font-bold text-sm mb-2" style={{ color: '#fff' }}>{item.step}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#888' }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section style={{ background: '#111111', padding: '90px 24px' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-tag" style={{ textAlign: 'center' }}>Real Clients, Real Leads</div>
            <h2
              className="font-display text-white mt-2"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '0.02em' }}
            >
              We&apos;ve done this before. Here&apos;s the proof.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((c) => (
              <div
                key={c.name}
                className="p-8 rounded-2xl flex flex-col"
                style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}
              >
                <div className="flex items-center justify-between gap-4 mb-1">
                  <h3 className="font-display text-white" style={{ fontSize: '1.7rem' }}>{c.name}</h3>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold whitespace-nowrap transition-colors hover:text-white"
                    style={{ color: '#d97706' }}
                  >
                    Live site ↗
                  </a>
                </div>
                <p className="text-xs mb-5" style={{ color: '#888' }}>{c.sector}</p>
                <div className="mb-5">
                  <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#d97706' }}>What we built</div>
                  <p className="text-sm leading-relaxed" style={{ color: '#e8e8e8' }}>{c.built}</p>
                </div>
                <div className="mb-6">
                  <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#4ade80' }}>What happened</div>
                  <p className="text-sm leading-relaxed" style={{ color: '#e8e8e8' }}>{c.result}</p>
                </div>
                <Link
                  href="/portfolio"
                  className="mt-auto text-xs font-bold transition-colors hover:text-white"
                  style={{ color: '#d97706' }}
                >
                  Full case study →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS WHEN */}
      <section style={{ background: '#0a0a0a', padding: '90px 24px' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-tag" style={{ textAlign: 'center' }}>The Honest Timeline</div>
            <h2
              className="font-display text-white mt-2"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '0.02em' }}
            >
              What to actually expect.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                period: 'Month 1',
                title: 'Build & launch',
                text: 'Site designed, built and live. Quote calculator or booking system in place. Citations submitted across 55+ directories. Google starts crawling.',
              },
              {
                period: 'Month 2',
                title: 'First leads land',
                text: 'Based on our clients\u2019 experience: Google has indexed and started ranking pages, and the first organic enquiries arrive — priced and booked through the site.',
              },
              {
                period: 'Month 3+',
                title: 'Compounding',
                text: 'Rankings strengthen, articles pull in more searches, reviews build authority. Each month the site works harder than the last — without extra spend.',
              },
            ].map((phase) => (
              <div
                key={phase.period}
                className="p-7 rounded-xl"
                style={{ background: '#111111', border: '1px solid #2a2a2a' }}
              >
                <div className="font-display text-2xl mb-3" style={{ color: '#d97706' }}>{phase.period}</div>
                <h3 className="font-bold text-sm mb-2" style={{ color: '#fff' }}>{phase.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#888' }}>{phase.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#111111', padding: '90px 24px' }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display text-white text-center mb-12"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Straight answers.
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((item, i) => (
              <div key={i} className="p-6 rounded-xl" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: '#fff' }}>{item.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#888' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section style={{ background: '#0a0a0a', padding: '60px 24px' }}>
        <div className="max-w-6xl mx-auto">
          <div className="section-tag">Learn More</div>
          <h2
            className="font-display text-white mb-8 mt-2"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Go deeper.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                href: '/articles/why-your-website-isnt-getting-leads',
                tag: 'Lead Generation',
                title: 'Why Your Website Isn\u2019t Getting Leads (And How to Fix It)',
                excerpt: 'The five reasons most small business websites produce nothing — and what a lead-generating site does differently.',
              },
              {
                href: '/articles/does-my-small-business-need-a-website',
                tag: 'Small Business UK',
                title: 'Does My Small Business Need a Website?',
                excerpt: 'Word of mouth got you here. Here\u2019s what it costs to stay invisible online — and what a working website changes.',
              },
              {
                href: '/portfolio',
                tag: 'Our Work',
                title: 'Web Design & Development Portfolio',
                excerpt: 'See the Tenanclean and Fyrup builds in detail — calculators, integrations, admin modules and all.',
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block p-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#111111', border: '1px solid #2a2a2a', textDecoration: 'none' }}
              >
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-4"
                  style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706' }}
                >
                  {article.tag}
                </span>
                <h3 className="font-bold text-sm leading-snug mb-3" style={{ color: '#fff' }}>{article.title}</h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: '#888' }}>{article.excerpt}</p>
                <span className="text-xs font-bold" style={{ color: '#d97706' }}>Read →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden text-center"
        style={{ background: '#111111', padding: '100px 24px' }}
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
            Ready for a website that<br />
            <span className="font-serif" style={{ color: '#d97706', fontStyle: 'italic' }}>earns its keep?</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888', maxWidth: '480px', margin: '0 auto 40px' }}>
            Book a free call. We&apos;ll look at where you are now — website or no website — and map out exactly what we&apos;d build, what it costs, and when to realistically expect leads.
          </p>
          <Link
            href="/enquiry"
            className="inline-flex items-center px-9 py-4 rounded text-sm font-bold tracking-wide text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
            style={{ background: '#d97706' }}
          >
            Get Your Free Website Plan →
          </Link>
          <p className="mt-5 text-xs" style={{ color: '#888' }}>
            Free consultation. Fixed quotes. Honest timelines.
          </p>
        </div>
      </section>

      {/* Service schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Lead Generating Website Design & Development',
            provider: { '@type': 'Organization', name: 'Vexlo', url: siteUrl },
            description:
              'SEO-driven website design for UK small businesses, with instant quote calculators, online booking systems, local citations, and software integrations — engineered to generate leads.',
            areaServed: { '@type': 'Country', name: 'United Kingdom' },
            url: `${siteUrl}/lead-generating-websites`,
          }),
        }}
      />

      {/* FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </div>
  )
}

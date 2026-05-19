import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Business Listings Management for UK Small Businesses | Vexlo',
  description:
    'Vexlo audits and manages your business listings across 55+ high-authority UK directories — ensuring your name, address, and phone are consistent everywhere Google looks. More visibility. More calls.',
  keywords: [
    'business listings management UK',
    'local citations UK small business',
    'NAP consistency service UK',
    'Google Business Profile management UK',
    'local SEO for tradespeople UK',
    'business directory listings UK',
    'Yell Thomson Local citation building',
    'local search ranking UK',
  ],
  alternates: { canonical: `${siteUrl}/listings` },
  openGraph: {
    url: `${siteUrl}/listings`,
    title: 'Business Listings Management — Vexlo',
    description:
      'Your business listed accurately on every directory that matters. Consistent NAP data. Higher local search rankings. More calls.',
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Vexlo Business Listings Management' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Listings Management — Vexlo',
    description:
      'Your business listed accurately on every directory that matters. Consistent NAP data. Higher local search rankings. More calls.',
  },
}

const painPoints = [
  'Your phone number changed two years ago, but three directories still show the old one — and customers are calling a dead number.',
  'Google cannot confidently verify your business because your name, address, or number is listed differently across the web.',
  'Your competitor ranks above you in local search despite doing worse work — because their directory data is consistent and yours is not.',
  'You have never claimed your listings on Yell, Thomson Local, Apple Maps, or Bing Places — and your competitors have.',
  'You moved premises and updated Google Business Profile, but 30 other directories still point to your old location.',
]

const directories = [
  { name: 'Google Business Profile', da: 100, icon: '🔍' },
  { name: 'Apple Maps', da: 100, icon: '🍎' },
  { name: 'Bing Places', da: 100, icon: '🔵' },
  { name: 'Facebook Business', da: 96, icon: '📘' },
  { name: 'Yelp UK', da: 94, icon: '⭐' },
  { name: 'Trustpilot', da: 93, icon: '🏆' },
  { name: 'Yell.com', da: 87, icon: '📞' },
  { name: 'Thomson Local', da: 76, icon: '📋' },
  { name: 'Checkatrade', da: 75, icon: '✔️' },
  { name: 'TrustATrader', da: 64, icon: '🔧' },
  { name: 'Bark.com', da: 63, icon: '🐾' },
  { name: 'FreeIndex', da: 58, icon: '📁' },
]

const howItWorks = [
  {
    step: 'Full listings audit',
    detail:
      'We take your business details and check your presence across the high-authority directories that actually influence local search — compiling a clear report of what is accurate, what is missing, and what needs correcting.',
  },
  {
    step: 'Claim and verify ownership',
    detail:
      'We claim ownership of every listing that can be claimed, so we can edit and update data directly. For sites that require verification, we guide you through the process — it is quick.',
  },
  {
    step: 'Standardise your NAP data',
    detail:
      'We align your business name, address, phone number, website URL, and business categories across every listing — using exactly the same formatting so Google sees a clean, consistent signal.',
  },
  {
    step: 'Expand into new directories',
    detail:
      'If you are missing from high-authority directories — which most businesses are — we create new listings for you. Each one is a fresh citation signal that strengthens your local authority.',
  },
  {
    step: 'Ongoing monitoring and maintenance',
    detail:
      'Listings get updated, scraped, or corrupted over time. We monitor your key listings monthly and correct any drift before it damages your rankings.',
  },
]

const outcomes = [
  'Consistent NAP data across 55+ directories',
  'Increased Google confidence in your business data',
  'Higher local 3-pack rankings for your service keywords',
  'More calls from customers who can actually reach you',
  'Claimed and verified presence on Apple Maps, Bing Places, and Yelp UK',
  'Removal or correction of outdated or duplicate listings',
  'Monthly monitoring — no listing drift over time',
  'Full report of every listing managed',
]

const faqs = [
  {
    q: 'What directories does Vexlo manage?',
    a: 'We focus on the directories that carry the most SEO and citation weight for UK businesses: Google Business Profile, Apple Maps, Bing Places, Facebook, Yell, Thomson Local, Yelp UK, Trustpilot, Checkatrade, TrustATrader, and more — 55+ sites in total, powered by Uberall.',
  },
  {
    q: 'Do I need to do anything for this to work?',
    a: 'Minimal input from you. We just need your correct business name, address, phone number, website, and a brief business description. We handle the rest — auditing, claiming, updating, and monitoring.',
  },
  {
    q: 'How is this different from just updating Google Business Profile?',
    a: 'Google Business Profile is only one data source. Google cross-references your business information across dozens of directories to verify it is accurate. If those other sources say something different, they undermine your GBP. Consistent listings across the whole web is what creates a powerful citation signal.',
  },
  {
    q: 'How long before I see results in search rankings?',
    a: 'Google re-crawls directory data over 2–8 weeks. You typically start seeing ranking improvements within 4–8 weeks, with the full compounding effect taking 3–6 months. Pairing listings management with review generation accelerates results significantly.',
  },
  {
    q: 'What if my business moves address?',
    a: 'We update all managed listings simultaneously so the change propagates across the web without the confusion of having mixed addresses in circulation.',
  },
  {
    q: 'Is this included in my Vexlo subscription?',
    a: 'Listings management is £97/month per location. That covers your full audit, setup across 55+ directories, and ongoing monthly monitoring. Your first month is free. We ask for a 3-month minimum so you can see the full effect as Google re-crawls your directory data — after that it\'s monthly rolling with no lock-in.',
  },
]

export default function ListingsPage() {
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
            width: '700px', height: '700px',
            background: 'radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 65%)',
            top: '-150px', right: '-150px',
          }}
        />
        <div
          className="pointer-events-none absolute"
          style={{
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%)',
            bottom: '-80px', left: '-80px',
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{ background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.3)', color: '#d97706' }}
            >
              <span>📍</span> Business Listings Management
            </div>
            <h1
              className="font-display text-white mb-6 leading-none"
              style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', letterSpacing: '0.02em' }}
            >
              Be found everywhere<br />
              <span className="font-serif" style={{ color: '#d97706', fontStyle: 'italic' }}>your customers search.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#888', maxWidth: '560px' }}>
              Vexlo manages your business listings across 55+ high-authority UK directories — keeping your name, address, and phone number consistent everywhere Google looks, so you rank higher in local search and more customers can reach you.
            </p>
              <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="#audit-form"
                className="inline-flex items-center px-8 py-4 rounded text-sm font-bold tracking-wide text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
                style={{ background: '#d97706' }}
              >
                Get My Free Listings Audit →
              </a>
              <Link
                href="#how-it-works"
                className="inline-flex items-center px-8 py-4 rounded text-sm font-semibold transition-all duration-200 hover:text-white"
                style={{ border: '1px solid #2a2a2a', color: '#e8e8e8' }}
              >
                See How It Works
              </Link>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { value: '55+', label: 'directories managed' },
                { value: '11%', label: 'of local rankings from citations' },
                { value: '48 hrs', label: 'to go live' },
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

      {/* PAIN POINTS */}
      <section style={{ background: '#111111', padding: '80px 40px' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-tag" style={{ textAlign: 'center' }}>The Problem</div>
            <h2
              className="font-display text-white mt-2"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.05, letterSpacing: '0.02em' }}
            >
              Inconsistent listings are silently costing you rankings and customers.
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {painPoints.map((pain, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)' }}
              >
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ background: 'rgba(239,68,68,0.15)', color: '#ef4444' }}
                >
                  ✕
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#e8e8e8' }}>{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS BANNER */}
      <section style={{ background: '#d97706', padding: '60px 40px' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-3xl mb-4">📊</div>
          <p className="text-lg leading-relaxed font-medium" style={{ color: 'rgba(255,255,255,0.95)' }}>
            &ldquo;Citation signals — the consistency of your business data across the web — account for roughly 11% of Google local pack rankings. That puts it in the top 5 factors Google uses to decide who appears in the local 3-pack.&rdquo;
          </p>
          <p className="text-sm mt-4" style={{ color: 'rgba(255,255,255,0.7)' }}>Source: Moz Local Search Ranking Factors</p>
        </div>
      </section>

      {/* DIRECTORIES GRID */}
      <section style={{ background: '#0a0a0a', padding: '80px 40px' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-tag" style={{ textAlign: 'center' }}>The Directories That Matter</div>
            <h2
              className="font-display text-white mt-2"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '0.02em' }}
            >
              Where Google looks when deciding who ranks.
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm" style={{ color: '#888' }}>
              Each of these directories has a Domain Authority (DA) score — a measure of how much Google trusts them as a source. Being listed consistently across all of them sends a powerful signal.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {directories.map((dir, i) => (
              <div
                key={i}
                className="p-5 rounded-xl flex items-center gap-3"
                style={{ background: '#111111', border: '1px solid #2a2a2a' }}
              >
                <span className="text-2xl flex-shrink-0">{dir.icon}</span>
                <div>
                  <div className="font-bold text-xs" style={{ color: '#fff' }}>{dir.name}</div>
                  <div
                    className="text-xs mt-0.5 font-bold"
                    style={{ color: dir.da >= 90 ? '#4ade80' : dir.da >= 70 ? '#facc15' : '#d97706' }}
                  >
                    DA {dir.da}
                  </div>
                </div>
              </div>
            ))}
            <div
              className="p-5 rounded-xl flex items-center justify-center col-span-2 md:col-span-1"
              style={{ background: 'rgba(217,119,6,0.08)', border: '1px dashed rgba(217,119,6,0.3)' }}
            >
              <div className="text-center">
                <div className="font-bold text-sm" style={{ color: '#d97706' }}>+43 more</div>
                <div className="text-xs mt-1" style={{ color: '#888' }}>trade & local directories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ background: '#111111', padding: '80px 40px' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-tag" style={{ textAlign: 'center' }}>How It Works</div>
            <h2
              className="font-display text-white mt-2"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '0.02em' }}
            >
              We do the work. You get the rankings.
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block" style={{ background: '#2a2a2a' }} />
            <div className="flex flex-col gap-10">
              {howItWorks.map((item, i) => (
                <div key={i} className="relative flex flex-col md:flex-row gap-6 md:items-start">
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-display text-xl z-10 mx-auto md:mx-0"
                    style={{ background: '#0a0a0a', border: '2px solid #2a2a2a', color: '#d97706' }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 p-6 rounded-xl" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
                    <h3 className="font-bold text-sm mb-2" style={{ color: '#fff' }}>{item.step}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#888' }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section style={{ background: '#0a0a0a', padding: '80px 40px' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-display text-white text-center mb-12"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            What you get.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {outcomes.map((outcome, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 rounded-xl"
                style={{ background: '#111111', border: '1px solid #2a2a2a' }}
              >
                <span style={{ color: '#d97706', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                <p className="text-sm" style={{ color: '#e8e8e8' }}>{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LISTINGS + REVIEWS TOGETHER */}
      <section style={{ background: '#111111', padding: '80px 40px' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="p-8 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #0f0a00, #1f1400)', border: '1px solid rgba(217,119,6,0.25)' }}
            >
              <div className="text-4xl mb-4">📍</div>
              <div
                className="text-xs font-bold tracking-widest uppercase mb-3"
                style={{ color: '#d97706' }}
              >
                This Page
              </div>
              <h3 className="font-display text-white mb-3" style={{ fontSize: '1.5rem' }}>
                Listings Management
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#888' }}>
                Your business information consistent and accurate across every directory that influences local search rankings. The foundation of local SEO.
              </p>
              <div className="flex flex-col gap-2">
                {['55+ directories managed', 'NAP consistency enforced', 'Monthly monitoring', 'Full audit report'].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" style={{ color: '#e8e8e8' }}>
                    <span style={{ color: '#d97706' }}>✓</span> {f}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="p-8 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #0a0a0a, #111111)', border: '1px solid #2a2a2a' }}
            >
              <div className="text-4xl mb-4">⭐</div>
              <div
                className="text-xs font-bold tracking-widest uppercase mb-3"
                style={{ color: '#d97706' }}
              >
                Pair With
              </div>
              <h3 className="font-display text-white mb-3" style={{ fontSize: '1.5rem' }}>
                Google Review Automation
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#888' }}>
                Consistent listings build the foundation. Automated reviews build the authority on top. Together they compound your local ranking faster than either does alone.
              </p>
              <Link
                href="/google-reviews"
                className="inline-flex items-center px-5 py-2.5 rounded text-xs font-bold tracking-wide text-white transition-all duration-200 hover:brightness-110"
                style={{ background: '#d97706' }}
              >
                See Review Automation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#111111', padding: '80px 40px' }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display text-white text-center mb-12"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Common questions.
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

      {/* RELATED ARTICLE */}
      <section style={{ background: '#0a0a0a', padding: '60px 40px' }}>
        <div className="max-w-5xl mx-auto">
          <div className="section-tag">Learn More</div>
          <h2
            className="font-display text-white mb-8 mt-2"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Go deeper on local SEO.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                href: '/articles/why-consistent-business-listings-matter-uk',
                tag: 'Local SEO',
                title: 'Why Consistent Business Listings Matter for UK Local Search',
                excerpt: 'NAP consistency, high-DA directories, and how to audit and fix your listings for better local rankings.',
              },
              {
                href: '/google-reviews',
                tag: 'Feature',
                title: 'Automated Google Review Management',
                excerpt: 'How Vexlo sends review requests after every job and replies automatically — building your reputation on autopilot.',
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block p-7 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
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
                <span className="text-xs font-bold" style={{ color: '#d97706' }}>Read →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background: '#0a0a0a', padding: '100px 40px' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-tag" style={{ textAlign: 'center' }}>Pricing</div>
            <h2
              className="font-display text-white mt-2"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '0.02em' }}
            >
              Simple, transparent pricing.
            </h2>
          </div>
          <div className="max-w-md mx-auto rounded-2xl overflow-hidden" style={{ border: '1px solid #2a2a2a', boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}>
            <div className="px-10 py-8 text-center" style={{ background: '#d97706' }}>
              <div className="font-display tracking-widest mb-1" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)' }}>
                LISTINGS MANAGEMENT
              </div>
              <div className="font-display text-white" style={{ fontSize: '3.5rem', lineHeight: 1 }}>
                £97<span style={{ fontSize: '1.2rem', fontWeight: 400 }}> / month</span>
              </div>
              <div className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>per location</div>
            </div>
            <div className="px-10 py-9" style={{ background: '#111111' }}>
              <ul className="flex flex-col gap-3.5 mb-8">
                {[
                  'Full audit of your current listings',
                  '55+ UK directories claimed & corrected',
                  'NAP consistency enforced across all platforms',
                  'Monthly monitoring — no listing drift',
                  'Full report of every listing managed',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-left" style={{ color: '#e8e8e8' }}>
                    <span style={{ color: '#d97706', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#audit-form"
                className="block w-full text-center py-4 rounded text-sm font-bold tracking-wide transition-all duration-200 text-white hover:brightness-110"
                style={{ background: '#d97706' }}
              >
                Get My Free Listings Audit →
              </a>
              <p className="mt-4 text-xs text-center" style={{ color: '#888' }}>
                First month free. 3-month minimum. No setup fees.<br />Cancel anytime after that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIT FORM */}
      <section
        id="audit-form"
        className="relative overflow-hidden"
        style={{ background: '#111111', padding: '100px 40px' }}
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
            See exactly where your<br />
            <span className="font-serif" style={{ color: '#d97706', fontStyle: 'italic' }}>listings stand.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888', maxWidth: '500px' }}>
            Enter your details below and we will run a free audit of your business listings — showing you every directory where your data is missing, wrong, or inconsistent. No call needed to get started.
          </p>

          {/* TODO: Embed GHL form here */}
          <div
            className="w-full rounded-xl flex items-center justify-center"
            style={{ background: '#1a1a1a', border: '1px dashed #2a2a2a', minHeight: '200px' }}
          >
            <p className="text-sm" style={{ color: '#555' }}>GHL form — coming soon</p>
          </div>

          <p className="mt-6 text-xs text-center" style={{ color: '#555' }}>
            We will send your audit report within 1 business day. No sales pressure — just your data.
          </p>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Business Listings Management',
            provider: { '@type': 'Organization', name: 'Vexlo', url: siteUrl },
            description:
              'Vexlo manages and maintains consistent business listings across 55+ high-authority UK directories to improve local search rankings.',
            areaServed: { '@type': 'Country', name: 'United Kingdom' },
            url: `${siteUrl}/listings`,
          }),
        }}
      />
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Articles — AI Automation Tips for UK Trades & Small Businesses | Vexlo',
  description: 'Practical guides on AI missed call text-back, automated appointment booking, and missed call automation for UK tradespeople and small businesses.',
  alternates: { canonical: `${siteUrl}/articles` },
  openGraph: {
    title: 'Articles — AI Automation Tips for UK Trades & Small Businesses | Vexlo',
    description: 'Practical guides on AI missed call text-back, automated appointment booking, and missed call automation for UK tradespeople and small businesses.',
    url: `${siteUrl}/articles`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Vexlo Articles' }],
  },
}

const articles = [
  {
    slug: 'ai-missed-call-text-back-for-trades',
    tag: 'Missed Call Automation',
    title: 'AI Missed Call Text-Back for Trades: Stop Losing Jobs to Voicemail',
    excerpt: 'Every missed call is a potential job lost. Learn how AI text-back automation responds to missed calls in under 4 seconds — capturing leads 24/7 while you focus on the work.',
    readTime: '6 min read',
  },
  {
    slug: 'missed-call-automation-small-business-uk',
    tag: 'Small Business UK',
    title: 'Missed Call Automation for Small Businesses in the UK: The Complete Guide',
    excerpt: 'UK small businesses lose thousands of pounds each month to unanswered calls. This guide explains how missed call automation works, what it costs, and why the ROI is immediate.',
    readTime: '7 min read',
  },
  {
    slug: 'how-to-reply-to-missed-calls-automatically',
    tag: 'How-To Guide',
    title: 'How to Reply to Missed Calls Automatically (Without Lifting a Finger)',
    excerpt: 'Step-by-step: how automatic missed call replies work, what to say in your SMS, and how to set the whole thing up without any technical knowledge.',
    readTime: '5 min read',
  },
  {
    slug: 'automated-appointment-booking-tradespeople',
    tag: 'Booking Automation',
    title: 'Automated Appointment Booking for Tradespeople: Book More Jobs While You Work',
    excerpt: 'Stop playing phone tag to arrange quotes and surveys. Automated booking lets customers self-schedule directly into your calendar — no back-and-forth required.',
    readTime: '6 min read',
  },
]

export default function ArticlesIndexPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        className="pt-36 pb-16 px-6 md:px-10 text-center relative overflow-hidden"
        style={{ background: '#0a0a0a' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(217,119,6,0.07) 0%, transparent 60%)' }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="section-tag" style={{ textAlign: 'center' }}>Articles</div>
          <h1
            className="font-display text-white mb-6 mt-2"
            style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Guides for businesses that{' '}
            <span className="font-serif" style={{ color: '#d97706', fontStyle: 'italic' }}>
              take calls.
            </span>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: '#888', maxWidth: '480px', margin: '0 auto' }}>
            Practical advice on missed call automation, AI text-back, and automated booking — written specifically for UK trades and service businesses.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section style={{ padding: '40px 40px 100px' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="feature-card block p-8 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: '#111111', border: '1px solid #2a2a2a', textDecoration: 'none' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706' }}
                >
                  {article.tag}
                </span>
                <span className="text-xs" style={{ color: '#555' }}>{article.readTime}</span>
              </div>
              <h2 className="font-bold text-base leading-snug mb-3" style={{ color: '#fff' }}>
                {article.title}
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#888' }}>
                {article.excerpt}
              </p>
              <span className="text-xs font-bold" style={{ color: '#d97706' }}>
                Read article →
              </span>
            </Link>
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
            Ready to stop missing calls?
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            See how Vexlo works for your business in a free 15-minute demo.
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

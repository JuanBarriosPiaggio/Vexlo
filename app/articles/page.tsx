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
  {
    slug: 'missed-call-text-back-plumbers-uk',
    tag: 'Missed Call Automation',
    title: 'Missed Call Text Back for Plumbers: Win Emergency Jobs 24/7',
    excerpt: 'Plumbers lose thousands every month to missed calls. Learn how missed call text back automation wins emergency plumbing jobs even when you\'re under a sink or on another call.',
    readTime: '7 min read',
  },
  {
    slug: 'missed-call-text-back-electricians-uk',
    tag: 'Missed Call Automation',
    title: 'Missed Call Text Back for Electricians: Stop Losing High-Value Jobs',
    excerpt: 'Electricians miss high-value jobs every day due to unanswered calls. Discover how automated text back keeps you first in line — without interrupting your work.',
    readTime: '7 min read',
  },
  {
    slug: 'missed-call-text-back-roofers-uk',
    tag: 'Missed Call Automation',
    title: 'Missed Call Text Back for Roofers: Recover Every Lead While You\'re on Site',
    excerpt: 'Roofers lose £1,000s in high-value jobs every month to missed calls. Automated text back recovers leads the moment they call — even when you\'re at height.',
    readTime: '8 min read',
  },
  {
    slug: 'ai-receptionist-vs-answering-service-uk',
    tag: 'Small Business UK',
    title: 'AI Receptionist vs Answering Service: Which Is Better for UK Trades?',
    excerpt: 'Comparing AI receptionist tools vs traditional answering services for UK tradespeople. Cost, speed, availability, and ROI — everything you need to make the right choice.',
    readTime: '8 min read',
  },
  {
    slug: 'how-much-are-missed-calls-costing-your-business',
    tag: 'Small Business UK',
    title: 'How Much Are Missed Calls Costing Your UK Business? (The Real Numbers)',
    excerpt: 'Most UK businesses have no idea how much revenue they\'re losing to missed calls. Here\'s how to calculate your true missed call cost — and what to do about it.',
    readTime: '6 min read',
  },
  {
    slug: 'missed-call-automation-cost-uk',
    tag: 'Small Business UK',
    title: 'What Does Missed Call Automation Cost for UK Small Businesses?',
    excerpt: 'Transparent breakdown of missed call automation pricing. What you pay, what you get, and what the ROI looks like — with real numbers for UK trades.',
    readTime: '6 min read',
  },
  {
    slug: 'missed-call-automation-hvac-engineers-uk',
    tag: 'Missed Call Automation',
    title: 'Missed Call Automation for HVAC Engineers: Stop Losing Contracts',
    excerpt: 'HVAC engineers miss high-value service contracts every day due to unanswered calls. Learn how automation fills your diary while you\'re out on jobs.',
    readTime: '7 min read',
  },
  {
    slug: 'missed-call-automation-cleaning-companies-uk',
    tag: 'Small Business UK',
    title: 'Missed Call Automation for Cleaning Companies: Fill Your Schedule Automatically',
    excerpt: 'Cleaning companies lose recurring contracts every week to missed calls. Automated text back and booking fills your schedule while your team is out cleaning.',
    readTime: '7 min read',
  },
  {
    slug: 'best-missed-call-text-back-software-uk',
    tag: 'How-To Guide',
    title: 'Best Missed Call Text Back Software for UK Businesses in 2025',
    excerpt: 'Comparing the best missed call text back software for UK small businesses. Features, pricing, and what to look for before you buy.',
    readTime: '8 min read',
  },
  {
    slug: 'what-to-say-in-missed-call-text-back-sms',
    tag: 'How-To Guide',
    title: 'What to Say in a Missed Call Text Back: SMS Templates That Actually Work',
    excerpt: 'The words in your missed call text back SMS make or break the conversion. Get proven templates for trades and service businesses — plus the psychology of why they work.',
    readTime: '6 min read',
  },
  {
    slug: 'missed-call-text-back-vs-voicemail-which-wins',
    tag: 'How-To Guide',
    title: 'Missed Call Text Back vs Voicemail: Which Converts More Customers?',
    excerpt: 'Head-to-head: automated missed call text back vs traditional voicemail for UK small businesses. Real data on callbacks, conversions, and which wins more jobs.',
    readTime: '6 min read',
  },
  {
    slug: 'auto-reply-missed-calls-without-answering-service',
    tag: 'How-To Guide',
    title: 'How to Auto-Reply to Missed Calls Without an Answering Service',
    excerpt: 'You don\'t need a £200/month answering service to handle missed calls professionally. Here\'s how to auto-reply to every missed call without staff or expensive services.',
    readTime: '6 min read',
  },
  {
    slug: 'sms-auto-reply-setup-small-business-uk',
    tag: 'How-To Guide',
    title: 'How to Set Up SMS Auto-Reply for Missed Calls (UK Small Business Guide)',
    excerpt: 'Step-by-step guide to setting up SMS auto-reply for missed calls for UK small businesses and tradespeople. No technical knowledge required.',
    readTime: '5 min read',
  },
  {
    slug: 'online-booking-system-builders-uk',
    tag: 'Booking Automation',
    title: 'Online Booking Systems for Builders UK: Fill Your Diary Without Phone Tag',
    excerpt: 'Builders spend hours every week chasing quotes and arranging appointments by phone. Online booking automation fills your diary while you focus on the build.',
    readTime: '7 min read',
  },
  {
    slug: 'automated-follow-up-after-missed-call',
    tag: 'Booking Automation',
    title: 'Automated Follow-Up After a Missed Call: Turn Cold Leads Hot Again',
    excerpt: 'Most businesses send one text and hope. Automated follow-up sequences recover leads that didn\'t respond first time — turning cold missed calls into booked jobs.',
    readTime: '6 min read',
  },
  {
    slug: 'ai-appointment-booking-landscapers-gardeners',
    tag: 'Booking Automation',
    title: 'AI Appointment Booking for Landscapers and Gardeners: Book More Jobs While You Work',
    excerpt: 'Landscapers and gardeners miss spring enquiries every day while working outdoors. AI booking fills your schedule automatically — no phone required.',
    readTime: '6 min read',
  },
  {
    slug: 'google-reviews-recency-vs-quantity',
    tag: 'Reputation Management',
    title: 'Google Reviews: Why Recency Beats Quantity Every Time',
    excerpt: 'Google puts more weight on recent reviews than total review count. Here\'s the evidence, how Google\'s algorithm works, and what it means for your local ranking.',
    readTime: '9 min read',
  },
  {
    slug: 'google-review-ranking-factors-explained',
    tag: 'Reputation Management',
    title: 'Google Review Ranking Factors Explained: What Actually Moves the Needle',
    excerpt: 'Complete breakdown of every Google review ranking factor — recency, volume, star rating, velocity, keyword content, and response rate — and how each affects your position.',
    readTime: '8 min read',
  },
  {
    slug: 'how-to-get-more-google-reviews-trades',
    tag: 'Reputation Management',
    title: 'How to Get More Google Reviews for Your Trades Business (Without Begging)',
    excerpt: 'UK tradespeople who consistently get Google reviews win more local search traffic and more jobs. Here\'s the practical approach that actually works — and how to automate it.',
    readTime: '7 min read',
  },
  {
    slug: 'automated-google-review-requests-after-job',
    tag: 'Reputation Management',
    title: 'How to Automatically Request Google Reviews After Every Job',
    excerpt: 'Set up automated Google review requests that fire after every completed job. Never forget to ask for a review again — and build your ranking on autopilot.',
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

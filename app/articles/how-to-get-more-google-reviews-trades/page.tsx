import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'How to Get More Google Reviews for Your Trades Business (Without Begging) | Vexlo',
  description: 'UK tradespeople who consistently get Google reviews win more local search traffic and more jobs. Here\'s the practical, ethical approach that actually works — and how to automate it.',
  keywords: [
    'how to get more Google reviews trades UK',
    'get more Google reviews plumber electrician roofer',
    'Google reviews strategy small business UK',
    'increase Google reviews trades business',
    'Google review request trades UK',
    'build Google review profile UK business',
    'Google reviews more customers UK trades',
  ],
  alternates: { canonical: `${siteUrl}/articles/how-to-get-more-google-reviews-trades` },
  openGraph: {
    title: 'How to Get More Google Reviews for Your Trades Business (Without Begging)',
    description: 'The practical, ethical approach to consistently getting more Google reviews for your trades business — and how to automate it.',
    url: `${siteUrl}/articles/how-to-get-more-google-reviews-trades`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'How to Get More Google Reviews for Trades' }],
  },
}

export default function MoreGoogleReviewsArticle() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <section className="pt-36 pb-10 px-6 md:px-10 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at center top, rgba(217,119,6,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/articles" className="text-xs" style={{ color: '#555' }}>← All Articles</Link>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-4" style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706' }}>
            Reputation Management
          </span>
          <h1 className="font-display text-white mb-6 mt-2" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: 1.05, letterSpacing: '0.02em' }}>
            How to Get More Google Reviews for Your Trades Business (Without Begging)
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#888' }}>7 min read · Published by Vexlo</p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-article">

            <p>
              Almost every tradesperson knows they should be getting more Google reviews. Almost none of them consistently do. The reason isn't lack of willing customers — it's a system problem.
            </p>
            <p>
              Satisfied customers are very often happy to leave a review. They just don't do it unless you ask. And most tradespeople don't ask consistently — they remember occasionally, forget often, and feel awkward about it every time. The result is a review profile that grows slowly and erratically, while competitors who have a system in place pull ahead in local rankings.
            </p>
            <p>
              This guide covers the most effective approaches to getting more Google reviews, why timing matters so much, and how to remove the awkwardness by automating the ask.
            </p>

            <h2>Why Tradespeople Struggle to Get Reviews</h2>
            <p>
              The challenge is structural. As a tradesperson, your working day doesn't include natural pauses for customer follow-up. You finish a job, pack up, move to the next one. The customer is happy. But unless they take independent action, they won't leave a review — not because they don't want to, but because life moves on.
            </p>
            <p>
              The businesses that dominate Google review counts in any local trade market have one thing in common: they ask systematically. Not occasionally, not when they remember. Every time, automatically.
            </p>

            <h2>The Right Moment to Ask (And Why It Matters)</h2>
            <p>
              Timing is the single most important factor in review conversion. There's a window of peak customer satisfaction immediately after a job is completed — when the work looks great, the mess is cleaned up, and the customer's problem is solved. This is the moment to ask.
            </p>
            <p>
              Ask too early (during the job, before it's finished) and the customer isn't yet fully satisfied. Ask too late (a week after) and the emotional peak has passed, life has moved on, and the motivation to take action has dropped.
            </p>
            <p>
              The optimal timing for a review request is <strong style={{ color: '#e8e8e8' }}>within 1–4 hours of job completion</strong> — when satisfaction is high and the job is fresh in the customer's mind.
            </p>

            <h2>How to Ask Without Being Awkward</h2>
            <p>
              The awkwardness most tradespeople feel about asking for reviews comes from doing it verbally, in person, at the door. It feels transactional, like a favour being requested.
            </p>
            <p>
              An automated text or email review request removes all of this. The customer receives a professional message from your business asking for their feedback at a natural moment after the job. It doesn't feel like a personal request — it feels like standard business practice. Because it is.
            </p>
            <p>
              The message doesn't need to be complicated:
            </p>
            <div
              className="my-6 p-5 rounded-lg text-sm leading-relaxed"
              style={{ background: '#1a1a1a', border: '1px solid #333', color: '#ccc', fontStyle: 'italic' }}
            >
              "Hi [Name], thanks so much for choosing [Business Name] — it was a pleasure working on your project. If you have a moment, a Google review would mean a lot to us. Here's the link: [Google review link]. Thanks again, [Your Name]"
            </div>
            <p>
              Simple, genuine, and easy to act on. A direct link to your Google review page removes friction — customers don't have to find you on Google, they just click and write.
            </p>

            <h2>The Consistency Problem — and How Automation Solves It</h2>
            <p>
              The reason most trades businesses don't build strong review profiles isn't the ask itself — it's the inconsistency. You remember to ask on Mondays. You forget on Thursdays when you're rushed. You feel awkward on the big-value jobs. You assume the customer will leave one without being asked on the really good jobs.
            </p>
            <p>
              The result: maybe 10–20% of your completed jobs generate a review, when the true potential is 50–60%.
            </p>
            <p>
              Automation solves this completely. When a job is marked complete in your system, the review request fires automatically. Every job. Every time. Whether it's Monday morning or Friday afternoon. Whether the job was worth £100 or £10,000.
            </p>
            <p>
              This consistency is what builds a review profile that compounds over time — adding 5–10 new reviews per month, maintaining your recency signal, and continuously improving your local search ranking.
            </p>

            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <div className="text-2xl mb-3">📈</div>
              <p className="font-bold text-sm mb-1" style={{ color: '#fff' }}>The compounding review advantage</p>
              <p className="text-sm" style={{ color: '#888' }}>
                A business that gets 6 new reviews per month has 72 new reviews per year. At the end of year two, they have 144 recent, genuine reviews. Their competitor, who gets reviews sporadically, has 20 total over the same period. In local search, this is not a slight advantage — it's a dominant position.
              </p>
            </div>

            <h2>Practical Steps to Start Getting More Reviews</h2>

            <h3>1. Set Up Your Google Review Link</h3>
            <p>
              Log into your Google Business Profile, go to the "Get more reviews" section, and copy your shareable review link. This is the link you'll include in every review request message.
            </p>

            <h3>2. Decide on Your Request Method</h3>
            <p>
              SMS is the most effective channel for review requests for UK trades businesses. Open rates for SMS are 98% versus 20–30% for email. Customers are already on their phones, and the link is one tap away.
            </p>

            <h3>3. Write Your Message</h3>
            <p>
              Keep it short, personal, and specific. Mention the job. Use the customer's first name. Include the direct link. Sign it with your name.
            </p>

            <h3>4. Automate the Send</h3>
            <p>
              Use a platform like Vexlo to automate the review request trigger. When a job is marked complete (or at a set time after booking completion), the review request fires automatically. No manual action required.
            </p>

            <h3>5. Respond to All Reviews</h3>
            <p>
              Once reviews start coming in, respond to every one — positive and negative. Google rewards engaged business owners. Customers trust businesses that respond.
            </p>
            <p>
              To see how the review automation fits into the full Vexlo system,{' '}
              <Link href="/articles/automated-google-review-requests-after-job" style={{ color: '#d97706' }}>
                read our guide on automated Google review requests after every job
              </Link>.
            </p>
            <p>
              And to understand why consistent, recent reviews matter so much for ranking,{' '}
              <Link href="/articles/google-reviews-recency-vs-quantity" style={{ color: '#d97706' }}>
                read our guide on Google review recency vs quantity
              </Link>.
            </p>

          </div>
        </div>
      </section>

      <section style={{ padding: '0 40px 60px' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#555' }}>Related Articles</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: '/articles/google-reviews-recency-vs-quantity', label: 'Google Review Recency vs Quantity' },
              { href: '/articles/google-review-ranking-factors-explained', label: 'Google Review Ranking Factors' },
              { href: '/articles/automated-google-review-requests-after-job', label: 'Automated Google Review Requests' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="block p-4 rounded-lg text-xs font-medium transition-colors hover:text-white" style={{ background: '#111111', border: '1px solid #2a2a2a', color: '#888' }}>
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 text-center relative overflow-hidden" style={{ background: '#111111' }}>
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(217,119,6,0.07) 0%, transparent 70%)' }} />
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1, letterSpacing: '0.02em' }}>
            Start getting reviews automatically.{' '}
            <span style={{ color: '#d97706' }}>Every job.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Vexlo sends your review request automatically after every completed job. Book a free demo to see how it works.
          </p>
          <Link href="/enquiry" className="inline-flex items-center px-8 py-4 rounded text-sm font-bold tracking-wide text-white transition-all duration-200 hover:brightness-110" style={{ background: '#d97706' }}>
            Book Your Free Demo →
          </Link>
          <p className="mt-5 text-xs" style={{ color: '#555' }}>First month free · No setup fees · Live in 48 hours</p>
        </div>
      </section>
    </div>
  )
}

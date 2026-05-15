import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Google Review Ranking Factors Explained: What Actually Moves the Needle | Vexlo',
  description: 'A complete breakdown of every Google review ranking factor — recency, volume, star rating, velocity, keyword content, response rate — and how each one affects your local position.',
  keywords: [
    'Google review ranking factors UK',
    'how Google ranks local businesses reviews',
    'Google review signals local SEO',
    'what affects Google review ranking',
    'Google Business Profile review factors',
    'local SEO review signals UK',
    'Google review algorithm explained',
  ],
  alternates: { canonical: `${siteUrl}/articles/google-review-ranking-factors-explained` },
  openGraph: {
    title: 'Google Review Ranking Factors Explained: What Actually Moves the Needle',
    description: 'Complete breakdown of every Google review ranking factor and how each one affects your local search position.',
    url: `${siteUrl}/articles/google-review-ranking-factors-explained`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Google Review Ranking Factors Explained' }],
  },
}

export default function GoogleRankingFactorsArticle() {
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
            Google Review Ranking Factors Explained: What Actually Moves the Needle
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#888' }}>8 min read · Published by Vexlo</p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-article">

            <p>
              Your Google Business Profile ranking in local search isn't random — it's determined by an algorithm that weighs dozens of factors. Reviews are one of the most significant inputs into that algorithm, but most business owners don't understand which aspects of their review profile actually matter.
            </p>
            <p>
              This guide gives you a complete breakdown of every review-related ranking factor, how much each one matters, and what you can actually do to influence it.
            </p>

            <h2>Google's Three Pillars of Local Ranking</h2>
            <p>
              Before diving into reviews specifically, it's worth understanding that Google's local ranking algorithm is built on three primary pillars:
            </p>
            <ul>
              <li><strong style={{ color: '#e8e8e8' }}>Relevance:</strong> How well your business matches what the searcher is looking for</li>
              <li><strong style={{ color: '#e8e8e8' }}>Distance:</strong> How close your business is to the searcher</li>
              <li><strong style={{ color: '#e8e8e8' }}>Prominence:</strong> How well-known and trusted your business is — and this is where reviews do most of their work</li>
            </ul>
            <p>
              Reviews primarily influence prominence. A business with strong review signals will outrank a competitor in the same location with weaker reviews — all else being equal. In competitive local markets, all else is often equal, which makes reviews the deciding factor.
            </p>

            <h2>Factor 1: Review Recency (Critical)</h2>
            <p>
              The single most misunderstood review factor. Google gives significantly more weight to recent reviews than to old ones — the older a review, the less it contributes to your active ranking signal.
            </p>
            <p>
              This means the business in your area that gets 4 reviews every month will tend to outrank the business that got 80 reviews three years ago and has been coasting ever since. Review recency is essentially a measure of business vitality — are you still actively trading and still delivering quality?
            </p>
            <p>
              The practical implication: you need a system that consistently generates new reviews, not a one-time drive. One or two reviews per week is far more valuable for ranking than 50 reviews in a single month.
            </p>
            <p>
              For a deep dive into the recency factor,{' '}
              <Link href="/articles/google-reviews-recency-vs-quantity" style={{ color: '#d97706' }}>
                read our guide on Google review recency vs quantity
              </Link>.
            </p>

            <h2>Factor 2: Total Review Volume (Important)</h2>
            <p>
              Volume still matters. A business with 200 reviews will generally rank better than a business with 20 reviews in the same area, assuming similar recency. But the relationship is not linear — the ranking benefit of going from 5 to 50 reviews is larger than the benefit of going from 150 to 200.
            </p>
            <p>
              Google's trust in a business increases with review volume, but with diminishing returns. For most UK small businesses and trades, a target of 50–100 reviews with a strong recency profile is more valuable than 200 reviews that are mostly old.
            </p>

            <h2>Factor 3: Average Star Rating (Critical)</h2>
            <p>
              Your average star rating has a direct impact on both ranking and click-through rate. Businesses with 4.5 stars or above are significantly more likely to appear in the local 3-pack (the map results shown at the top of local searches).
            </p>
            <p>
              A drop from 4.5 to 4.2 can noticeably affect ranking in competitive markets. More importantly, it affects customer behaviour — research shows that 94% of people avoid businesses with ratings below 4 stars, and trust drops sharply below 4.3.
            </p>
            <p>
              Getting new 5-star reviews consistently helps maintain your average, especially if you have older 3 or 4-star reviews from early in your business. The algorithm uses your current average, which means new reviews can actively improve your position.
            </p>

            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <p className="font-bold text-sm mb-3" style={{ color: '#fff' }}>How star ratings affect customer trust</p>
              <div className="space-y-2 text-sm" style={{ color: '#888' }}>
                {[
                  ['5.0 stars', 'Maximum trust — but can appear suspicious without many reviews'],
                  ['4.8–4.9 stars', 'Optimal — high trust, clearly earned through real reviews'],
                  ['4.5–4.7 stars', 'Very strong — preferred choice for most customers'],
                  ['4.0–4.4 stars', 'Solid, but competitive disadvantage in high-trust categories'],
                  ['3.5–3.9 stars', 'Significant hesitation from many customers'],
                  ['Below 3.5 stars', 'Actively deters most new customers'],
                ].map(([rating, desc], i) => (
                  <div key={i} className="grid grid-cols-5 gap-2 text-xs border-b pb-1" style={{ borderColor: '#2a2a2a' }}>
                    <span className="col-span-2 font-bold" style={{ color: '#d97706' }}>{rating}</span>
                    <span className="col-span-3">{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2>Factor 4: Review Velocity (Important)</h2>
            <p>
              Review velocity — the rate at which you receive new reviews — is a signal Google uses to assess momentum. A business receiving 3–5 reviews per month shows consistent customer engagement. A business that received 50 reviews in month one and nothing since shows a flatlined activity pattern.
            </p>
            <p>
              Consistent velocity also prevents the ranking decay that happens when reviews age. By maintaining a steady flow of new reviews, you continuously refresh your recency signal.
            </p>

            <h2>Factor 5: Review Content and Keywords (Medium, Growing Importance)</h2>
            <p>
              The text content of your reviews acts as a form of organic keyword signal. When customers mention specific services ("fixed our burst pipe"), locations ("brilliant plumber in Leeds"), or job types ("replaced our consumer unit") in their reviews, Google indexes these mentions as relevance signals.
            </p>
            <p>
              This means a business where customers regularly mention specific services in their reviews will tend to rank better for searches for those services than a business where reviews are generic ("great service, would recommend").
            </p>
            <p>
              You can encourage more specific reviews by making your review request specific: "Would you mind leaving us a review? If you could mention what we helped you with and where, it really helps other customers find us." This is entirely within Google's guidelines.
            </p>

            <h2>Factor 6: Review Response Rate (Lower Ranking Impact, High Trust Impact)</h2>
            <p>
              Responding to your reviews — particularly negative ones — is a factor in Google's algorithm, but its direct ranking impact is lower than the five factors above. Its indirect impact, however, is significant.
            </p>
            <p>
              A business that responds professionally to every review (especially negative ones) builds trust with prospective customers who read those exchanges. A thoughtful response to a negative review often does more for customer confidence than several positive ones.
            </p>
            <p>
              Google also explicitly recommends responding to reviews as part of good Business Profile management — and businesses that follow Google's best practice guidance generally perform better in rankings.
            </p>

            <h2>Factor 7: Review Diversity and Sources (Background Factor)</h2>
            <p>
              While Google reviews are the primary local ranking signal, reviews on other platforms (Trustpilot, Checkatrade, Which Trusted Traders) provide supporting signals. A strong presence across multiple review platforms reinforces your prominence signal in Google's algorithm.
            </p>
            <p>
              For most local businesses, Google Business Profile should be the primary focus — but maintaining a positive presence on relevant industry platforms supports your overall reputation.
            </p>

            <h2>The Compounding Effect of Good Review Management</h2>
            <p>
              All of these factors compound. A business that consistently generates recent, high-quality reviews from happy customers — at a steady velocity, with responses to all reviews — doesn't just maintain its ranking. It tends to improve it steadily over time, pulling away from competitors who aren't managing their reviews proactively.
            </p>
            <p>
              This is why the businesses that dominate local search in most UK trades categories are those with 4.7+ stars, 80+ reviews, and a pattern of regular new reviews over an extended period. They haven't done anything magical — they've just been consistent.
            </p>
            <p>
              The most reliable way to be consistent is automation. To see how that works,{' '}
              <Link href="/articles/automated-google-review-requests-after-job" style={{ color: '#d97706' }}>
                read our guide on automated Google review requests after every job
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
              { href: '/articles/how-to-get-more-google-reviews-trades', label: 'How to Get More Google Reviews for Trades' },
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
            Rank higher with consistent reviews.{' '}
            <span style={{ color: '#d97706' }}>Automatically.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Vexlo automatically requests Google reviews after every job — building your ranking signal consistently, month after month.
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

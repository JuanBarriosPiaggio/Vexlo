import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Google Reviews: Why Recency Beats Quantity Every Time | Vexlo',
  description: 'Google puts more weight on recent reviews than total review count. Here\'s the evidence, how Google\'s algorithm actually works, and what it means for your business.',
  keywords: [
    'Google reviews recency vs quantity',
    'does Google care about recent reviews',
    'how Google ranks reviews UK business',
    'recent Google reviews importance',
    'Google review algorithm recency',
    'review recency SEO local business',
    'Google local ranking reviews freshness',
  ],
  alternates: { canonical: `${siteUrl}/articles/google-reviews-recency-vs-quantity` },
  openGraph: {
    title: 'Google Reviews: Why Recency Beats Quantity Every Time',
    description: 'Google puts more weight on recent reviews than total review count. Here\'s how it works and what it means for your business.',
    url: `${siteUrl}/articles/google-reviews-recency-vs-quantity`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Google Reviews Recency vs Quantity' }],
  },
}

export default function GoogleReviewsRecencyArticle() {
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
            Google Reviews: Why Recency Beats Quantity Every Time
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#888' }}>9 min read · Published by Vexlo</p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-article">

            <p>
              Most business owners think about Google reviews as a numbers game. Get more reviews, rank higher, win more customers. And while total review volume matters, it's not the primary signal Google uses when deciding how to rank local businesses. The signal that carries most weight — and that most businesses completely ignore — is recency.
            </p>
            <p>
              A business with 20 reviews posted in the last 3 months will typically outrank a business with 200 reviews, most of which were posted two years ago. This isn't speculation — it's supported by Google's own local ranking guidance, extensive SEO research, and observable patterns in local search results across every industry.
            </p>

            <h2>How Google Thinks About Review Freshness</h2>
            <p>
              Google's fundamental goal is to surface accurate, trustworthy information. For local businesses, reviews are a key quality signal — but only if those reviews reflect how the business is performing now, not how it performed years ago.
            </p>
            <p>
              A restaurant that had excellent reviews in 2021 but has had mediocre service since a change of management is not a reliable recommendation in 2025. A plumber who was brilliant but has since scaled up and lost quality should not be promoted based on old praise. Google's algorithm accounts for this by weighting recent reviews more heavily in its quality calculations.
            </p>
            <p>
              Google has publicly acknowledged that <strong style={{ color: '#e8e8e8' }}>review recency is a significant factor in local search rankings</strong>. Their support documentation for Google Business Profile explicitly states that "the number, recency, and quality of reviews" all influence local ranking. The order matters — recency is listed before quality.
            </p>

            <h2>The Review Decay Effect</h2>
            <p>
              One of the least-discussed but most important aspects of Google reviews is what happens to old reviews over time. Google's algorithm applies a recency weighting that effectively "decays" the value of older reviews.
            </p>
            <p>
              This doesn't mean old reviews disappear or become worthless. They still contribute to your overall star rating and review count. But their influence on your ranking position — particularly in competitive local search results — diminishes as they age.
            </p>
            <p>
              The decay appears to accelerate significantly after:
            </p>
            <ul>
              <li><strong style={{ color: '#e8e8e8' }}>3 months:</strong> Reviews begin to lose ranking weight relative to newer reviews from competitors.</li>
              <li><strong style={{ color: '#e8e8e8' }}>6 months:</strong> Without new reviews, local ranking position can start to slip as competitors with fresher reviews push up.</li>
              <li><strong style={{ color: '#e8e8e8' }}>12+ months:</strong> A business that hasn't received a review in over a year may be algorithmically penalised in local results, as Google interprets the absence of reviews as a potential quality signal.</li>
            </ul>

            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <div className="text-2xl mb-3">⭐</div>
              <p className="font-bold text-sm mb-1" style={{ color: '#fff' }}>The recency paradox</p>
              <p className="text-sm" style={{ color: '#888' }}>
                A business that worked hard to get 80 reviews in its first year and then stopped asking is actively losing ground to a competitor with 30 reviews — if those 30 reviews came in the last 6 months. In local search, momentum matters as much as volume.
              </p>
            </div>

            <h2>The Complete Picture: All of Google's Review Ranking Factors</h2>
            <p>
              Recency is the most underrated factor — but it's not the only one. Here's a full breakdown of how Google evaluates your reviews for local ranking purposes:
            </p>

            <h3>1. Recency (High Weight)</h3>
            <p>
              As discussed: the most recent reviews carry the most weight. A business with consistent, recent reviews signals to Google that it's actively trading and maintaining quality. This is why businesses that automate review requests — asking after every job — maintain a steady stream of fresh reviews that continuously reinforce their ranking.
            </p>

            <h3>2. Volume (High Weight)</h3>
            <p>
              Total review count remains important. More reviews signal a well-established, trusted business. However, volume without recency provides diminishing returns — and a high volume of old reviews can actually be outweighed by a competitor with fewer but newer reviews in certain competitive situations.
            </p>

            <h3>3. Star Rating (High Weight)</h3>
            <p>
              Average star rating is a direct ranking factor. Businesses with 4.5+ stars rank significantly better than those with lower ratings. Crucially, your average rating is calculated from all reviews — which means getting new 5-star reviews helps your overall average, especially if older 3 or 4-star reviews are dragging it down.
            </p>

            <h3>4. Review Content and Keywords (Medium Weight)</h3>
            <p>
              The text of your reviews influences local SEO in ways most businesses don't realise. When customers naturally mention your services ("the plumber fixed our boiler"), your location ("the best electrician in Manchester"), or specific job types in their reviews, Google treats this as a relevance signal.
            </p>
            <p>
              This is why encouraging customers to be specific — "please mention what we helped you with" — can improve both your ranking for relevant searches and the trust your reviews build with prospective customers.
            </p>

            <h3>5. Review Velocity (Medium Weight)</h3>
            <p>
              Review velocity refers to the rate at which you receive reviews — reviews per month, rather than total count. A business getting 10 reviews per month is growing its reputation faster than one getting 10 per year. Google appears to use velocity as a freshness signal, giving ranking boosts to businesses that are actively accumulating new reviews.
            </p>
            <p>
              This is another reason why automated review request systems are so effective — they create a consistent, ongoing velocity rather than a one-time burst of activity.
            </p>

            <h3>6. Response Rate (Lower Weight, High Customer Impact)</h3>
            <p>
              Whether the business responds to reviews — particularly negative ones — is a factor in Google's local ranking algorithm. More importantly, it has a significant impact on customer trust. Responding to all reviews shows prospective customers that you're engaged with your business and care about feedback.
            </p>
            <p>
              Automated systems can flag new reviews for response, ensuring you never miss one.
            </p>

            <h3>7. Reviewer Authenticity (Background Factor)</h3>
            <p>
              Google filters suspected fake reviews using machine learning. Reviews from established Google accounts, with genuine purchase history and realistic posting patterns, carry more weight than reviews from new accounts. This is why incentivising reviews (offering discounts in exchange for reviews) is against Google's policies and can result in penalties.
            </p>

            <h2>The Practical Implication: You Need Consistent, Ongoing Reviews</h2>
            <p>
              The key takeaway from all of this is that Google reviews are not a one-time project. You can't run a review drive, get 50 reviews, and then expect that to sustain your ranking indefinitely.
            </p>
            <p>
              You need a steady, ongoing stream of new reviews — ideally one or two per week minimum for most trades and service businesses. This requires a systematic approach to asking for reviews after every completed job.
            </p>
            <p>
              The most effective approach is automation. Rather than remembering to ask customers for reviews (which most people don't), the system sends a review request automatically after a job is marked complete. Over time, this builds a review profile that continuously refreshes — maintaining ranking position and building trust with new customers.
            </p>
            <p>
              To see how automated review requests work in practice,{' '}
              <Link href="/articles/automated-google-review-requests-after-job" style={{ color: '#d97706' }}>
                read our guide on how to automatically request Google reviews after every job
              </Link>.
            </p>

            <h2>What This Means for Your Business Right Now</h2>
            <p>
              If you have an established review base but haven't been actively getting new reviews recently, your ranking is likely declining — or will decline soon as competitors who are actively collecting reviews push past you in local results.
            </p>
            <p>
              The good news is that getting back on track doesn't require a major project. It requires a system. Whether you're a roofer, plumber, cleaner, or landscaper, setting up an automated review request that fires after every completed job takes less than an hour with Vexlo — and the results compound month by month.
            </p>
            <p>
              For a deeper look at how to build your review profile,{' '}
              <Link href="/articles/how-to-get-more-google-reviews-trades" style={{ color: '#d97706' }}>
                read our guide on how to get more Google reviews for your trades business
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
              { href: '/articles/google-review-ranking-factors-explained', label: 'Google Review Ranking Factors Explained' },
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
            Build your review profile automatically.{' '}
            <span style={{ color: '#d97706' }}>Start today.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free 15-minute demo. Vexlo automatically requests Google reviews after every job — keeping your profile fresh and your ranking strong.
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

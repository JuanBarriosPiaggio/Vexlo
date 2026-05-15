import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'How to Automatically Request Google Reviews After Every Job | Vexlo',
  description: 'Set up automated Google review requests that fire after every completed job. Never forget to ask for a review again — and build your ranking automatically.',
  keywords: [
    'automated Google review requests after job',
    'automatic review request business UK',
    'Google review automation trades',
    'automated review follow up after job UK',
    'post job review request automation',
    'Google review automation small business UK',
    'auto review request after completed job',
  ],
  alternates: { canonical: `${siteUrl}/articles/automated-google-review-requests-after-job` },
  openGraph: {
    title: 'How to Automatically Request Google Reviews After Every Job',
    description: 'Set up automated Google review requests that fire after every job. Never forget to ask again — and build your ranking automatically.',
    url: `${siteUrl}/articles/automated-google-review-requests-after-job`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Automated Google Review Requests After Job' }],
  },
}

export default function AutomatedReviewRequestsArticle() {
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
            How to Automatically Request Google Reviews After Every Job
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#888' }}>6 min read · Published by Vexlo</p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-article">

            <p>
              The most successful trades businesses in local search all share one habit: they ask for a Google review after every single job. Not most jobs. Every job. The businesses that do this consistently dominate their local search results — not through any SEO trickery, but through the relentless accumulation of genuine, recent, positive reviews.
            </p>
            <p>
              The problem is that "ask after every job" is easy to say and genuinely hard to execute manually. Life gets in the way. Jobs run over. The next customer is waiting. You're tired. The moment passes.
            </p>
            <p>
              Automation removes every one of those excuses.
            </p>

            <h2>How Automated Review Requests Work</h2>
            <p>
              An automated review request system sends a personalised SMS (or email) to a customer at a set time after their job is complete — typically 1–4 hours after completion, when satisfaction is highest.
            </p>
            <p>
              The message includes:
            </p>
            <ul>
              <li>A personal thank you for choosing your business</li>
              <li>A brief acknowledgement of the job done</li>
              <li>A direct link to your Google Business Profile review page</li>
              <li>Your name, to keep it personal</li>
            </ul>
            <p>
              The customer receives it on their phone. If they're happy — and most are, because you're good at your job — they tap the link, write a quick review, and submit. Takes them less than two minutes.
            </p>
            <p>
              You receive a notification that a new review has been posted. Your Google profile gets fresher, your average stays high, your ranking improves. And you did nothing except do a great job.
            </p>

            <h2>Setting Up the Trigger</h2>
            <p>
              The key to automated review requests is defining the trigger — the moment that kicks off the sequence. The options are:
            </p>
            <ul>
              <li><strong style={{ color: '#e8e8e8' }}>Job completion mark:</strong> You or your team marks the job as complete in the system. Review request fires automatically 2 hours later.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Appointment end time:</strong> If the job is scheduled in the system, the review request fires automatically based on the end time of the appointment.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Payment received:</strong> For businesses using payment tracking, the review request can fire once payment is confirmed — the customer is at their highest satisfaction point.</li>
            </ul>
            <p>
              The most reliable trigger for most UK trades businesses is the job completion mark — simple to use, requires only a quick tap on the phone, and ensures the timing is always right.
            </p>

            <h2>What the Message Should Say</h2>
            <p>
              The review request message should sound personal, not automated. Even though it fires automatically, the wording should feel like it came directly from you. Here are two effective templates:
            </p>

            <p className="font-bold text-sm mt-6 mb-2" style={{ color: '#aaa' }}>Template A (Warm and direct)</p>
            <div className="my-3 p-5 rounded-lg text-sm leading-relaxed" style={{ background: '#1a1a1a', border: '1px solid #333', color: '#ccc', fontStyle: 'italic' }}>
              "Hi [Name], it was great working on your [job type] today. If you're happy with the work, it would mean a lot if you could leave us a quick Google review — it really helps our business. Here's the link: [Google review URL]. Thanks so much, [Your Name]"
            </div>

            <p className="font-bold text-sm mt-6 mb-2" style={{ color: '#aaa' }}>Template B (Brief and easy)</p>
            <div className="my-3 p-5 rounded-lg text-sm leading-relaxed" style={{ background: '#1a1a1a', border: '1px solid #333', color: '#ccc', fontStyle: 'italic' }}>
              "Hi [Name] — thanks for choosing [Business Name]! If you had a good experience today, a quick Google review would really help us out: [link]. — [Name]"
            </div>

            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <p className="font-bold text-sm mb-3" style={{ color: '#fff' }}>What to avoid in your review request</p>
              <div className="space-y-2 text-sm" style={{ color: '#888' }}>
                {[
                  'Offering incentives in exchange for reviews (against Google\'s policy)',
                  'Asking only for positive reviews or filtering who you send to',
                  'Sending multiple reminder messages if someone doesn\'t review',
                  'Using corporate or formal language that sounds unlike you',
                  'Including too much text — keep it under 5 sentences',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span style={{ color: '#ef4444' }}>✗</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2>How This Connects to Your Overall Automation System</h2>
            <p>
              Review automation is the final stage in a complete automation cycle that starts with capturing missed calls and ends with building a lasting online reputation. Here's the full flow:
            </p>
            <ul>
              <li><strong style={{ color: '#e8e8e8' }}>Missed call happens</strong> → automated text back fires within 4 seconds</li>
              <li><strong style={{ color: '#e8e8e8' }}>Customer engages</strong> → they book via automated booking calendar</li>
              <li><strong style={{ color: '#e8e8e8' }}>Appointment reminder sent</strong> → automatically, 24 hours before</li>
              <li><strong style={{ color: '#e8e8e8' }}>Job completed</strong> → automated review request fires</li>
              <li><strong style={{ color: '#e8e8e8' }}>Review received</strong> → business ranks higher, gets more calls</li>
              <li><strong style={{ color: '#e8e8e8' }}>More calls come in</strong> → cycle repeats</li>
            </ul>
            <p>
              This flywheel effect is what separates the businesses that grow consistently from those that plateau. Each part reinforces the others: more calls captured, more jobs booked, more reviews received, better ranking, more calls.
            </p>
            <p>
              To understand the full system,{' '}
              <Link href="/articles/ai-missed-call-text-back-for-trades" style={{ color: '#d97706' }}>
                read our guide to AI missed call text back for trades
              </Link>.
            </p>
            <p>
              And to understand the ranking impact of consistent reviews,{' '}
              <Link href="/articles/google-review-ranking-factors-explained" style={{ color: '#d97706' }}>
                read our guide to Google review ranking factors
              </Link>.
            </p>

            <h2>The Long-Term Impact of Review Automation</h2>
            <p>
              Businesses that implement automated review requests consistently report two things: more reviews than they expected, and better quality than they feared. Customers who leave reviews after an automated prompt are typically satisfied customers — the system sends to everyone, but happy customers leave reviews at a much higher rate than unhappy ones.
            </p>
            <p>
              Over six months, a trades business that was getting 2–3 reviews per month manually typically gets 8–12 per month with automation. Over a year, that's 70–80+ new reviews — a transformative shift in their local search position.
            </p>
            <p>
              The businesses that were getting 2–3 reviews per month without automation? They're still at the same level. And they're now three pages down in the local results.
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
              { href: '/articles/how-to-get-more-google-reviews-trades', label: 'How to Get More Google Reviews' },
              { href: '/articles/google-review-ranking-factors-explained', label: 'Google Review Ranking Factors' },
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
            Get reviews on autopilot.{' '}
            <span style={{ color: '#d97706' }}>Every job.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Vexlo automatically sends your Google review request after every completed job. Book a free demo to see the full system.
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

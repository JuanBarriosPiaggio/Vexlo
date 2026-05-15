import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'AI Appointment Booking for Landscapers and Gardeners UK: Book More Jobs | Vexlo',
  description: 'Landscapers and gardeners spend too much time on the phone arranging quotes. AI appointment booking fills your schedule while you\'re out doing the work.',
  keywords: [
    'AI appointment booking landscapers UK',
    'gardener automated booking UK',
    'landscaping business booking system',
    'gardening company automated appointments',
    'missed call automation landscaper UK',
    'garden maintenance booking automation',
    'landscaper lead capture automation UK',
  ],
  alternates: { canonical: `${siteUrl}/articles/ai-appointment-booking-landscapers-gardeners` },
  openGraph: {
    title: 'AI Appointment Booking for Landscapers and Gardeners UK: Book More Jobs',
    description: 'AI appointment booking fills your landscaping schedule while you\'re out doing the work. No more phone tag.',
    url: `${siteUrl}/articles/ai-appointment-booking-landscapers-gardeners`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'AI Appointment Booking Landscapers UK' }],
  },
}

export default function LandscapersBookingArticle() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <section className="pt-36 pb-10 px-6 md:px-10 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at center top, rgba(217,119,6,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/articles" className="text-xs" style={{ color: '#555' }}>← All Articles</Link>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-4" style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706' }}>
            Booking Automation
          </span>
          <h1 className="font-display text-white mb-6 mt-2" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: 1.05, letterSpacing: '0.02em' }}>
            AI Appointment Booking for Landscapers and Gardeners: Book More Jobs While You Work
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#888' }}>6 min read · Published by Vexlo</p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-article">

            <p>
              Landscaping and gardening businesses have a uniquely inconvenient scheduling challenge: the busiest season (spring and summer) is when you're most likely to miss calls, because you're outdoors, on the mower, using power tools, or deep in someone's garden. You can't answer the phone — and the customers calling you are looking to book before the season fills up.
            </p>
            <p>
              AI appointment booking solves this problem by removing the phone from the scheduling process entirely. Customers book directly into your calendar. You get the job. No call required.
            </p>

            <h2>The Seasonal Scheduling Pressure</h2>
            <p>
              For most landscapers and gardeners, there's a window from March to June where every new customer you book is worth significant annual value. A regular gardening customer might pay £80–£150 per visit, every two weeks, for eight months of the year — that's £1,300–£2,400 in annual revenue from a single customer.
            </p>
            <p>
              During the spring rush, you'll have customers calling who are ready to book now. These aren't casual enquiries — these are high-intent customers who want a gardener this week or next. Miss their call and they'll book with someone else within minutes. The seasonal timing makes recovery extremely difficult.
            </p>

            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <div className="text-2xl mb-3">🌱</div>
              <p className="font-bold text-sm mb-1" style={{ color: '#fff' }}>Spring rush maths</p>
              <p className="text-sm" style={{ color: '#888' }}>
                A landscaper who adds just 3 regular maintenance customers per season through better enquiry handling adds £3,900–£7,200 in annual recurring revenue. Over 3 years, those 3 customers are worth £12,000–£21,600. The value of each spring enquiry is far higher than it appears in the moment.
              </p>
            </div>

            <h2>How AI Appointment Booking Works for Landscapers</h2>
            <p>
              AI appointment booking combines two things: automated missed call text back and a self-service booking calendar. Here's the full workflow:
            </p>
            <ul>
              <li>A customer calls your number while you're working outdoors</li>
              <li>The missed call triggers an automatic SMS within 4 seconds</li>
              <li>The SMS includes a link to your booking calendar</li>
              <li>The customer picks a time for a garden visit or quote call</li>
              <li>The booking appears in your calendar automatically</li>
              <li>Confirmation and reminder messages go out automatically</li>
            </ul>
            <p>
              You're planting. They're booking. The system handles the conversation without you.
            </p>

            <h2>Quote Visits vs Regular Maintenance Bookings</h2>
            <p>
              Landscaping businesses typically have two types of bookings that benefit from automation differently:
            </p>
            <p>
              <strong style={{ color: '#e8e8e8' }}>Quote visits for new projects</strong> — garden redesigns, patio laying, fencing, turf laying. These are high-value, one-time projects where the quote visit is the first sales step. Automated booking for these allows customers to schedule their quote visit at a time that suits them — without you playing phone tag for three days.
            </p>
            <p>
              <strong style={{ color: '#e8e8e8' }}>Regular maintenance sign-ups</strong> — weekly or fortnightly lawn care, hedge trimming, seasonal tidy-ups. For these, the initial booking conversation is simpler. An automated system can capture the customer's details and schedule a first visit from a template — moving from initial contact to booked appointment with minimal friction.
            </p>

            <h2>Reducing No-Shows with Automated Reminders</h2>
            <p>
              For landscaping businesses, a no-show for a garden quote visit is a significant waste of time — especially when it involves travel. Automated reminder messages sent 24 hours before a scheduled visit dramatically reduce no-shows without any effort from you.
            </p>
            <p>
              The reminder message can also collect useful pre-visit information: garden size, specific requirements, photos. This means you arrive at the quote better prepared, and the customer is more engaged and ready to commit.
            </p>

            <h2>Building a Reputation Through Reviews</h2>
            <p>
              Landscaping is a trust-based, word-of-mouth industry. Google reviews are increasingly important for new customer acquisition — particularly for higher-value landscape projects where customers do their research before making a decision.
            </p>
            <p>
              After a completed job, Vexlo automatically sends a review request to the customer at the right moment. Over time, this builds a strong, recent review profile that makes your business stand out in local search — bringing in more enquiries and starting the cycle again.
            </p>
            <p>
              To understand why review recency matters,{' '}
              <Link href="/articles/google-reviews-recency-vs-quantity" style={{ color: '#d97706' }}>
                read our guide on Google review recency vs quantity
              </Link>.
            </p>
            <p>
              For the full picture on automated appointment booking,{' '}
              <Link href="/articles/automated-appointment-booking-tradespeople" style={{ color: '#d97706' }}>
                read our complete guide to automated appointment booking for tradespeople
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
              { href: '/articles/automated-appointment-booking-tradespeople', label: 'Automated Appointment Booking for Tradespeople' },
              { href: '/articles/missed-call-text-back-roofers-uk', label: 'Missed Call Text Back for Roofers' },
              { href: '/articles/google-reviews-recency-vs-quantity', label: 'Google Review Recency vs Quantity' },
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
            Book more gardens.{' '}
            <span style={{ color: '#d97706' }}>Miss fewer calls.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free demo and see how Vexlo captures landscaping enquiries and books them automatically while you're working.
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

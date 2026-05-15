import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'How Much Are Missed Calls Costing Your UK Business? (The Real Numbers) | Vexlo',
  description: 'Most UK trades and small businesses have no idea how much revenue they\'re losing to missed calls. Here\'s how to calculate your true missed call cost — and what to do about it.',
  keywords: [
    'how much do missed calls cost UK business',
    'missed call revenue loss UK',
    'cost of missed calls small business',
    'missed call ROI UK trades',
    'business missed call statistics UK',
    'how to calculate missed call cost',
    'missed calls lost revenue tradespeople',
  ],
  alternates: { canonical: `${siteUrl}/articles/how-much-are-missed-calls-costing-your-business` },
  openGraph: {
    title: 'How Much Are Missed Calls Costing Your UK Business? (The Real Numbers)',
    description: 'Most UK businesses have no idea how much they\'re losing to missed calls. Here\'s the real cost calculation — and what to do about it.',
    url: `${siteUrl}/articles/how-much-are-missed-calls-costing-your-business`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'How Much Are Missed Calls Costing Your Business' }],
  },
}

export default function MissedCallCostArticle() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="pt-36 pb-10 px-6 md:px-10 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(217,119,6,0.06) 0%, transparent 60%)' }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/articles" className="text-xs" style={{ color: '#555' }}>
              ← All Articles
            </Link>
          </div>
          <span
            className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-4"
            style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706' }}
          >
            Small Business UK
          </span>
          <h1
            className="font-display text-white mb-6 mt-2"
            style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: 1.05, letterSpacing: '0.02em' }}
          >
            How Much Are Missed Calls Costing Your UK Business? (The Real Numbers)
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#888' }}>
            6 min read · Published by Vexlo
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-article">

            <p>
              Ask most small business owners how many calls they miss per week and they'll shrug. "A few, maybe." Push them to actually look at their missed call log and the number is almost always higher than they thought — and the revenue figure attached to those missed calls is almost always shocking.
            </p>
            <p>
              Missed calls are a silent revenue leak. You don't see the customer who called, thought "no one's in," and booked with your competitor. You don't see the job that went to someone else while you were finishing the one in front of you. But the money is leaving your business every single day.
            </p>

            <h2>The UK Missed Call Statistics That Should Concern Every Business Owner</h2>
            <p>
              The data on missed calls is well-established and consistently alarming for small businesses:
            </p>
            <ul>
              <li><strong style={{ color: '#e8e8e8' }}>62% of callers will not call back</strong> if their first call goes unanswered. They move on.</li>
              <li><strong style={{ color: '#e8e8e8' }}>85% of callers who can't reach a business</strong> will not call again if they don't receive a prompt follow-up.</li>
              <li><strong style={{ color: '#e8e8e8' }}>78% of customers award the job</strong> to the first business to respond to their enquiry.</li>
              <li>The average UK small business misses <strong style={{ color: '#e8e8e8' }}>22% of inbound calls</strong> during working hours.</li>
            </ul>
            <p>
              These numbers are averages. For sole traders and small trades businesses where one person is simultaneously doing the work and running the business, the missed call rate is considerably higher — often 40–60% during active working hours.
            </p>

            <h2>How to Calculate What Missed Calls Are Costing You</h2>
            <p>
              Here's a simple framework to work out your real missed call cost. Fill in the numbers for your own business:
            </p>

            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <p className="font-bold text-sm mb-4" style={{ color: '#fff' }}>Your Missed Call Cost Calculator</p>
              <div className="space-y-3 text-sm" style={{ color: '#888' }}>
                <div>
                  <span style={{ color: '#aaa' }}>Step 1:</span> How many calls do you miss per week? (Check your missed call log) <strong style={{ color: '#e8e8e8' }}>= X calls</strong>
                </div>
                <div>
                  <span style={{ color: '#aaa' }}>Step 2:</span> What percentage are genuine enquiries? (Typically 50–70%) <strong style={{ color: '#e8e8e8' }}>= Y enquiries</strong>
                </div>
                <div>
                  <span style={{ color: '#aaa' }}>Step 3:</span> What's your normal conversion rate? (If 1 in 3 enquiries becomes a job = 33%) <strong style={{ color: '#e8e8e8' }}>= Z jobs</strong>
                </div>
                <div>
                  <span style={{ color: '#aaa' }}>Step 4:</span> What's your average job value? <strong style={{ color: '#e8e8e8' }}>= £V</strong>
                </div>
                <div className="pt-2 border-t" style={{ borderColor: '#2a2a2a' }}>
                  <span style={{ color: '#d97706' }}>Weekly lost revenue = X × Y% × Z% × £V</span>
                </div>
              </div>
            </div>

            <h2>Real Examples Across UK Trades</h2>
            <p>
              Let's run this calculation for a few common UK trades:
            </p>

            <h3>Roofer</h3>
            <p>
              Misses 8 calls per week. 5 are genuine enquiries. Converts 1 in 3 to a survey. 1 in 2 surveys becomes a job. Average job value: £3,500.
            </p>
            <p>
              Weekly lost revenue: approximately <strong style={{ color: '#e8e8e8' }}>£2,917</strong>. Annual: approximately <strong style={{ color: '#e8e8e8' }}>£151,000</strong>.
            </p>

            <h3>Plumber</h3>
            <p>
              Misses 10 calls per week. 7 are genuine enquiries. Converts 2 in 5. Average job value: £450.
            </p>
            <p>
              Weekly lost revenue: approximately <strong style={{ color: '#e8e8e8' }}>£1,260</strong>. Annual: approximately <strong style={{ color: '#e8e8e8' }}>£65,500</strong>.
            </p>

            <h3>Cleaning Company</h3>
            <p>
              Misses 6 calls per week. 4 are enquiries. Converts 1 in 2. Average contract value (6 months): £1,800.
            </p>
            <p>
              Weekly lost revenue: approximately <strong style={{ color: '#e8e8e8' }}>£3,600 in contract value</strong>. This compounds because cleaning contracts are recurring.
            </p>

            <h2>The Hidden Multiplier: Lifetime Customer Value</h2>
            <p>
              The numbers above only account for the first job. For many businesses — particularly service businesses with recurring revenue — the true cost of a missed call is the lifetime value of the customer.
            </p>
            <p>
              A cleaning company customer who calls once, doesn't get through, and books with a competitor doesn't just cost you that one enquiry. They cost you a year of monthly cleans, plus any additional services, plus the referrals they would have made. A single missed call in a recurring service business can represent £3,000–£10,000 in lifetime value.
            </p>

            <h2>Why Callback Rates Are Lower Than You Think</h2>
            <p>
              Many business owners overestimate how often missed call leads will call back on their own. The reality is stark: most people who call a business and don't get through simply move on.
            </p>
            <p>
              In the age of Google, there are always alternatives. If your Google listing shows four or five competitors, and you don't answer, the customer's next action takes three seconds. They tap the next number. They're gone.
            </p>
            <p>
              This is why the window for responding to a missed call is measured in seconds, not hours. A customer who receives an automated text within 4 seconds of the missed call is still engaged. A customer who gets no response for 30 minutes has already booked with your competitor.
            </p>

            <h2>What Automated Text Back Changes</h2>
            <p>
              Missed call text back automation intercepts these losses at the source. Instead of a customer calling and hearing nothing, they call and immediately receive a personalised SMS that acknowledges their call and gives them a next step.
            </p>
            <p>
              Most businesses that implement Vexlo's missed call text back see 60–70% of missed callers responding to the automated SMS. For businesses missing 8–10 calls per week, that's a significant portion of lost revenue recovered — every week, automatically.
            </p>
            <p>
              To understand exactly how the system works,{' '}
              <Link href="/articles/ai-missed-call-text-back-for-trades" style={{ color: '#d97706' }}>
                read our complete guide to AI missed call text back for trades
              </Link>.
            </p>
            <p>
              Or, if you want to see how other UK small businesses are using this,{' '}
              <Link href="/articles/missed-call-automation-small-business-uk" style={{ color: '#d97706' }}>
                read our complete guide to missed call automation for UK small businesses
              </Link>.
            </p>

            <h2>The Investment vs Return</h2>
            <p>
              Vexlo's missed call text back and automation system starts from £97/month. For a plumber who recovers just one extra job per week at £450, the monthly return is £1,800 — on a £97 investment. For a roofer who recovers one extra survey per week that converts to a £3,500 job, the ROI calculation is overwhelming.
            </p>
            <p>
              This is why most Vexlo clients don't think of it as a cost. They think of it as an investment that pays for itself in the first week.
            </p>

          </div>
        </div>
      </section>

      {/* Interlinks */}
      <section style={{ padding: '0 40px 60px' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#555' }}>Related Articles</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: '/articles/ai-missed-call-text-back-for-trades', label: 'AI Missed Call Text-Back for Trades' },
              { href: '/articles/missed-call-automation-small-business-uk', label: 'Missed Call Automation for Small Businesses UK' },
              { href: '/articles/missed-call-automation-cost-uk', label: 'What Does Missed Call Automation Cost?' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block p-4 rounded-lg text-xs font-medium transition-colors hover:text-white"
                style={{ background: '#111111', border: '1px solid #2a2a2a', color: '#888' }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
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
            Stop the revenue leak.{' '}
            <span style={{ color: '#d97706' }}>Start today.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free 15-minute demo and see exactly how much Vexlo can recover for your business — with real numbers.
          </p>
          <Link
            href="/enquiry"
            className="inline-flex items-center px-8 py-4 rounded text-sm font-bold tracking-wide text-white transition-all duration-200 hover:brightness-110"
            style={{ background: '#d97706' }}
          >
            Book Your Free Demo →
          </Link>
          <p className="mt-5 text-xs" style={{ color: '#555' }}>
            First month free · No setup fees · Live in 48 hours
          </p>
        </div>
      </section>
    </div>
  )
}

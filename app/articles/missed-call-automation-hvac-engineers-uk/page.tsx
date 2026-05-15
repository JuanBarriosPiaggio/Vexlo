import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Missed Call Automation for HVAC Engineers UK: Stop Losing Contracts | Vexlo',
  description: 'HVAC engineers miss high-value service contracts every day due to unanswered calls. Learn how missed call automation fills your diary while you\'re out on jobs.',
  keywords: [
    'missed call automation HVAC engineers UK',
    'HVAC engineer missed calls',
    'heating engineer automated reply UK',
    'boiler engineer missed call text back',
    'HVAC business growth automation UK',
    'gas engineer missed call automation',
    'heating and cooling engineer lead capture',
  ],
  alternates: { canonical: `${siteUrl}/articles/missed-call-automation-hvac-engineers-uk` },
  openGraph: {
    title: 'Missed Call Automation for HVAC Engineers UK: Stop Losing Contracts',
    description: 'HVAC engineers miss high-value service contracts every day. Learn how missed call automation fills your diary automatically.',
    url: `${siteUrl}/articles/missed-call-automation-hvac-engineers-uk`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Missed Call Automation HVAC Engineers UK' }],
  },
}

export default function HVACMissedCallArticle() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <section className="pt-36 pb-10 px-6 md:px-10 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at center top, rgba(217,119,6,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/articles" className="text-xs" style={{ color: '#555' }}>← All Articles</Link>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-4" style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706' }}>
            Missed Call Automation
          </span>
          <h1 className="font-display text-white mb-6 mt-2" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: 1.05, letterSpacing: '0.02em' }}>
            Missed Call Automation for HVAC Engineers: Stop Losing Contracts While You're on the Job
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#888' }}>7 min read · Published by Vexlo</p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-article">

            <p>
              It's January. You're on your third boiler breakdown call of the morning. Your phone rings — another customer, probably another breakdown or a service enquiry. You can't stop what you're doing; the customer in front of you is without heat. You let it ring.
            </p>
            <p>
              What just happened on the other end of that missed call? In most cases: they called the next heating engineer on Google. If it was a service contract enquiry, that's potentially £300–£600 per year in recurring revenue that just went to a competitor. All because you were doing your job.
            </p>

            <h2>Why HVAC and Heating Engineers Are Particularly Vulnerable</h2>
            <p>
              HVAC and heating engineers face a compound problem with missed calls. The work is hands-on and safety-critical — you simply cannot be on the phone while commissioning a boiler or fault-finding in a commercial HVAC system. But the enquiry types coming in are often high-value and time-sensitive.
            </p>
            <p>
              Consider the typical mix of HVAC enquiries:
            </p>
            <ul>
              <li><strong style={{ color: '#e8e8e8' }}>Emergency breakdowns</strong> — customer without heat or hot water, urgency is immediate</li>
              <li><strong style={{ color: '#e8e8e8' }}>Annual service contracts</strong> — recurring revenue worth £250–£600+ per customer per year</li>
              <li><strong style={{ color: '#e8e8e8' }}>New boiler installations</strong> — high-value jobs typically worth £2,000–£4,000</li>
              <li><strong style={{ color: '#e8e8e8' }}>Commercial HVAC maintenance</strong> — contracts worth £1,000–£10,000+ per year</li>
            </ul>
            <p>
              Each of these categories carries significant value — but each caller will move on quickly if they don't receive a response. Emergency customers can't wait. Contract enquirers have usually contacted two or three engineers simultaneously. New installation customers are getting multiple quotes.
            </p>

            <h2>The Seasonal Surge Problem</h2>
            <p>
              For heating and HVAC engineers, the missed call problem becomes acute in winter. When temperatures drop and boilers start failing across the UK, call volumes can triple or quadruple overnight. An engineer who can normally manage incoming calls reasonably well in summer suddenly has a queue of missed calls every evening.
            </p>
            <p>
              Without automation, those calls either go unanswered or get returned hours later — by which point most customers have found someone else. The busiest period of the year becomes the period with the highest lead loss.
            </p>

            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <div className="text-2xl mb-3">🌡️</div>
              <p className="font-bold text-sm mb-1" style={{ color: '#fff' }}>The winter paradox</p>
              <p className="text-sm" style={{ color: '#888' }}>
                The months when HVAC engineers are busiest — and therefore most unable to answer the phone — are also the months when demand is highest and customers are most likely to book immediately. Without automation, being busy costs you business. That's the fundamental paradox that missed call automation solves.
              </p>
            </div>

            <h2>How Missed Call Text Back Works for HVAC Engineers</h2>
            <p>
              When a customer calls your business and you don't answer, Vexlo sends an automated SMS to that customer within 4 seconds. The message acknowledges their call, reassures them, and gives them a next step — typically a link to book a callback or service appointment.
            </p>
            <p>
              For a heating engineer, that message might read:
            </p>
            <div
              className="my-6 p-5 rounded-lg text-sm leading-relaxed"
              style={{ background: '#1a1a1a', border: '1px solid #333', color: '#ccc', fontStyle: 'italic' }}
            >
              "Hi, sorry I missed your call — I'm out on a job right now. I want to help. Click here to book an appointment or reply to this message with a brief description of the issue and I'll call you back as soon as I'm free. — [Name], [Business Name]"
            </div>
            <p>
              Emergency customers get immediate reassurance. Service enquirers can book a convenient time. New installation customers get a professional first impression. All automatically, while you're hands-deep in a system.
            </p>

            <h2>Capturing Annual Service Contract Enquiries</h2>
            <p>
              Annual service contracts are the gold standard for HVAC engineers — predictable recurring revenue that builds a stable business. But service contract enquirers are typically shopping around. They'll call three or four engineers, and the first to respond professionally wins the first conversation.
            </p>
            <p>
              With automated text back, your business is always the first to respond. Even if you can't speak to the customer for two hours, they've already received your professional acknowledgement and have a booking link. In many cases, they book before you've even called back — and they're already mentally committed to your business.
            </p>

            <h2>Building Your Automated Booking System</h2>
            <p>
              The most effective HVAC automation pairs missed call text back with an online booking calendar. Service appointments, surveys for new installations, and annual service bookings can all be self-scheduled by customers directly from the SMS link.
            </p>
            <p>
              This means your calendar starts filling automatically — without phone calls, without back-and-forth, without a receptionist. For a growing heating business, this is the difference between scrambling to manage bookings and having a system that handles it while you work.
            </p>
            <p>
              For the full picture on automated booking,{' '}
              <Link href="/articles/automated-appointment-booking-tradespeople" style={{ color: '#d97706' }}>
                read our guide on automated appointment booking for tradespeople
              </Link>.
            </p>

            <h2>What This Looks Like in Practice</h2>
            <p>
              A typical HVAC engineer using Vexlo will see missed callers converting to booked appointments at 50–70%. For a business missing 8–10 calls per week, that's potentially 4–7 recovered leads per week — every week, automatically.
            </p>
            <p>
              Even at the conservative end, recovering two extra service contracts per month adds £500–£1,200 in recurring annual value. New installations recovered are worth £2,000–£4,000 each. The system pays for itself many times over, month after month.
            </p>
            <p>
              To understand the full economics of missed call automation,{' '}
              <Link href="/articles/how-much-are-missed-calls-costing-your-business" style={{ color: '#d97706' }}>
                read our guide on how much missed calls are costing your business
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
              { href: '/articles/ai-missed-call-text-back-for-trades', label: 'AI Missed Call Text-Back for Trades' },
              { href: '/articles/missed-call-text-back-plumbers-uk', label: 'Missed Call Text Back for Plumbers' },
              { href: '/articles/automated-appointment-booking-tradespeople', label: 'Automated Booking for Tradespeople' },
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
            Never lose a contract to a missed call.{' '}
            <span style={{ color: '#d97706' }}>Start today.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free 15-minute demo and see how Vexlo captures every heating and HVAC enquiry automatically.
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

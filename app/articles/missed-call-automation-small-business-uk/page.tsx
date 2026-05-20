import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Missed Call Automation for Small Businesses in the UK: The Complete Guide | Vexlo',
  description: 'UK small businesses lose thousands of pounds each month to unanswered calls. This guide explains how missed call automation works, what it costs, and why the ROI is immediate.',
  keywords: [
    'missed call automation for small business UK',
    'missed call automation UK',
    'small business phone automation',
    'automated missed call reply UK',
    'never miss a call small business',
    'AI phone automation UK',
  ],
  alternates: { canonical: `${siteUrl}/articles/missed-call-automation-small-business-uk` },
  openGraph: {
    title: 'Missed Call Automation for Small Businesses in the UK: The Complete Guide',
    description: 'UK small businesses lose thousands of pounds each month to unanswered calls. Here\'s how to fix it automatically.',
    url: `${siteUrl}/articles/missed-call-automation-small-business-uk`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Missed Call Automation for Small Business UK' }],
  },
}

export default function Article2() {
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
            Missed Call Automation for Small Businesses in the UK: The Complete Guide
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#888' }}>
            7 min read · Published by Vexlo
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-article">

            <p>
              If you run a small business in the UK, every call matters. You don&apos;t have a team of staff to handle the phones, you&apos;re often out on the tools or with a client, and new enquiries come in at all hours.
            </p>
            <p>
              The problem is simple: <strong style={{ color: '#e8e8e8' }}>you can&apos;t always answer.</strong> And when you don&apos;t, those customers don&apos;t leave a voicemail and wait patiently. They call the next business on the list.
            </p>
            <p>
              Missed call automation solves this problem at scale — without hiring a receptionist, without spending hours returning calls, and without missing a single lead.
            </p>

            <h2>The Scale of the Problem for UK Small Businesses</h2>
            <p>
              Let&apos;s put some numbers to it. According to various UK SMB surveys, the average small business misses between <strong style={{ color: '#e8e8e8' }}>15 and 30% of inbound calls</strong> during peak hours. For sole traders and microbusinesses, that figure is often higher — because there&apos;s simply no one available to pick up when you&apos;re busy.
            </p>
            <p>
              Now multiply that by your average job value. If your typical customer is worth £500, and you&apos;re missing 10 calls a month that would have converted at 30%, you&apos;re leaving <strong style={{ color: '#e8e8e8' }}>£1,500 per month on the table</strong>. For trades with higher job values — kitchen fitters, roofers, estate agents — that number climbs into the tens of thousands.
            </p>
            <p>
              And that&apos;s before you factor in the lifetime value of a loyal customer, or the Google review they would have left.
            </p>

            {/* Stat callout */}
            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <div className="text-2xl mb-3">📊</div>
              <p className="font-bold text-sm mb-1" style={{ color: '#fff' }}>The response time gap</p>
              <p className="text-sm" style={{ color: '#888' }}>
                Studies show that responding to a lead within the first 5 minutes makes you 21x more likely to qualify them than if you respond after 30 minutes. For trades, where customers often call multiple businesses at once, being first to respond is almost always decisive.
              </p>
            </div>

            <h2>What Is Missed Call Automation?</h2>
            <p>
              Missed call automation is a system that takes action the moment a call goes unanswered — without you having to do anything. The most effective version works like this:
            </p>
            <ol>
              <li><strong style={{ color: '#e8e8e8' }}>A customer calls your business number and doesn&apos;t get through.</strong></li>
              <li><strong style={{ color: '#e8e8e8' }}>Within seconds, they receive an automated SMS</strong> from your number — personalised to your business, not a generic message.</li>
              <li><strong style={{ color: '#e8e8e8' }}>The message includes a booking link</strong> so they can schedule directly into your calendar.</li>
              <li><strong style={{ color: '#e8e8e8' }}>You receive a real-time notification</strong> every time a lead is captured or a booking is made.</li>
            </ol>
            <p>
              The whole thing happens without you touching your phone. The customer feels looked after. You get the lead. Nobody loses.
            </p>
            <p>
              For a step-by-step breakdown of how the SMS reply itself is set up,{' '}
              <Link href="/articles/how-to-reply-to-missed-calls-automatically" style={{ color: '#d97706' }}>
                read our guide on how to reply to missed calls automatically.
              </Link>
            </p>

            <h2>What Small Businesses Get Wrong About Missed Calls</h2>
            <p>
              Most business owners know they miss calls. Very few understand the full scale of what it&apos;s costing them. Here are the three most common mistakes:
            </p>

            <h3>1. Assuming customers will call back</h3>
            <p>
              They won&apos;t. Research consistently shows that the majority of callers will not try again after a missed call — especially for inbound enquiries where they found you via Google. They came to you; if you didn&apos;t answer, someone else will.
            </p>

            <h3>2. Relying on voicemail</h3>
            <p>
              Voicemail has a terrible conversion rate. Most people under 45 won&apos;t even leave one, and the ones who do rarely get a call back within the time window when they&apos;re still hot to buy. An automated SMS reply converts far better than any voicemail system.
            </p>

            <h3>3. Trying to return calls manually at the end of the day</h3>
            <p>
              By the time you call back at 5pm, the customer has already booked with your competitor. Speed of response is not a courtesy — it&apos;s a commercial necessity.
            </p>

            <h2>How Missed Call Automation Works Alongside Your Business</h2>
            <p>
              The beauty of a well-configured missed call automation system is that it runs silently in the background. You don&apos;t change how you work — you just stop losing leads.
            </p>
            <p>
              When a lead is captured and a booking is made, you get notified. You see exactly who called, what they asked about, and when they&apos;ve booked. Then you show up, do the job, and the system automatically sends a Google review request afterwards.
            </p>
            <p>
              The entire lead-to-review journey happens with minimal manual input from you. That&apos;s what makes it so effective for small businesses with no dedicated admin.
            </p>

            <h2>What Does It Cost, and What&apos;s the ROI?</h2>
            <p>
              Missed call automation through Vexlo runs as a simple monthly subscription. There are no setup fees, no long-term contracts, and no hardware to buy.
            </p>
            <p>
              In terms of ROI, most clients see payback within the first week. If you recover just one lost job per month that you would otherwise have missed — a plumber recovering a boiler install worth £2,500, or a roofer picking up a repair worth £800 — the system has paid for itself many times over.
            </p>
            <p>
              And unlike hiring a receptionist or a call-answering service, the cost doesn&apos;t scale with call volume. Whether you miss 2 calls a week or 20, the price stays the same.
            </p>
            <p>
              For a full breakdown of what&apos;s included, see the{' '}
              <Link href="/pricing" style={{ color: '#d97706' }}>Vexlo pricing page</Link>.
            </p>

            <h2>Which Industries See the Best Results?</h2>
            <p>
              While missed call automation works for almost any service business, the results tend to be most dramatic for:
            </p>
            <ul>
              <li><strong style={{ color: '#e8e8e8' }}>Trades with high job values</strong> — roofers, kitchen fitters, electricians, plumbers</li>
              <li><strong style={{ color: '#e8e8e8' }}>Appointment-based businesses</strong> — dental practices, physio clinics, salons</li>
              <li><strong style={{ color: '#e8e8e8' }}>Property businesses</strong> — estate agents, property maintenance companies</li>
              <li><strong style={{ color: '#e8e8e8' }}>Businesses with high inbound enquiry volume</strong> — cleaning companies, locksmiths, gardeners</li>
            </ul>
            <p>
              If your business relies on inbound calls and you sometimes can&apos;t answer, automation will help. The question is just how much.
            </p>
            <p>
              For a detailed look at how this works for tradespeople specifically,{' '}
              <Link href="/articles/ai-missed-call-text-back-for-trades" style={{ color: '#d97706' }}>
                read our guide on AI missed call text-back for trades.
              </Link>
            </p>

            <h2>Getting Set Up: What to Expect</h2>
            <p>
              With Vexlo, setup takes less than 48 hours. We handle the technical configuration, write your automated messages, and connect everything to your existing phone number and calendar. You don&apos;t need to change your number, install anything, or learn new software.
            </p>
            <p>
              We&apos;ll walk you through the whole setup on a free onboarding call, and you approve every message before anything goes live.
            </p>
            <p>
              From there, the system runs 24/7 — evenings, weekends, and bank holidays. No breaks. No sick days. No missed leads.
            </p>
            <p>
              Once you&apos;re live, the next step is making sure those captured leads are converting into booked appointments automatically.{' '}
              <Link href="/articles/automated-appointment-booking-tradespeople" style={{ color: '#d97706' }}>
                Read our guide on automated appointment booking for tradespeople to see how that works.
              </Link>
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
              { href: '/articles/best-missed-call-text-back-software-uk', label: 'Best Missed Call Text Back Software UK' },
              { href: '/articles/missed-call-automation-cost-uk', label: 'What Does Missed Call Automation Cost?' },
              { href: '/articles/ai-receptionist-vs-answering-service-uk', label: 'AI Receptionist vs Answering Service' },
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
            See it working for{' '}
            <span style={{ color: '#d97706' }}>your business.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free 15-minute demo. We&apos;ll show you exactly how Vexlo captures every missed call for your specific industry — live, no obligation.
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

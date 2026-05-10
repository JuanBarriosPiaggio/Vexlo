import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'AI Missed Call Text-Back for Trades: Stop Losing Jobs to Voicemail | Vexlo',
  description: 'Every missed call is a potential job lost. Learn how AI text-back automation responds to missed calls in under 4 seconds — capturing leads 24/7 while you focus on the work.',
  keywords: [
    'AI missed call text back for trades',
    'missed call text back UK',
    'AI text back tradespeople',
    'missed call automation trades',
    'AI receptionist for tradespeople',
    'never miss a call plumber roofer electrician',
  ],
  alternates: { canonical: `${siteUrl}/articles/ai-missed-call-text-back-for-trades` },
  openGraph: {
    title: 'AI Missed Call Text-Back for Trades: Stop Losing Jobs to Voicemail',
    description: 'Every missed call is a potential job lost. Learn how AI text-back automation responds to missed calls in under 4 seconds.',
    url: `${siteUrl}/articles/ai-missed-call-text-back-for-trades`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'AI Missed Call Text-Back for Trades' }],
  },
}

export default function Article1() {
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
            Missed Call Automation
          </span>
          <h1
            className="font-display text-white mb-6 mt-2"
            style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: 1.05, letterSpacing: '0.02em' }}
          >
            AI Missed Call Text-Back for Trades: Stop Losing Jobs to Voicemail
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
              You&apos;re halfway up a roof, finishing a boiler install, or under a kitchen with both hands full. Your phone rings. You can&apos;t answer. The caller hangs up — and calls the next number on Google.
            </p>
            <p>
              That&apos;s not a phone call you missed. That&apos;s a job you lost.
            </p>
            <p>
              For UK tradespeople — roofers, plumbers, electricians, kitchen fitters, and more — missed calls are one of the biggest silent revenue killers in the business. And most trades don&apos;t realise how much it&apos;s costing them until they do the maths.
            </p>

            <h2>Why Trades Miss So Many Calls</h2>
            <p>
              The nature of trade work makes phone availability almost impossible during the working day. You&apos;re on site. You&apos;re in the zone. You can&apos;t stop what you&apos;re doing to take a sales call. That&apos;s not laziness — it&apos;s the reality of the job.
            </p>
            <p>
              But your customers don&apos;t know that. All they know is that they called, nobody answered, and someone else did.
            </p>
            <p>
              Research consistently shows that <strong style={{ color: '#e8e8e8' }}>62% of callers will not call back if their first call goes unanswered</strong>. In high-intent categories like emergency plumbing or kitchen fitting, that number is even higher — because the customer needs help now, not tomorrow.
            </p>

            <h2>What Is AI Missed Call Text-Back?</h2>
            <p>
              AI missed call text-back is a system that automatically sends an SMS to anyone who calls your business number and doesn&apos;t get through — within seconds of the missed call.
            </p>
            <p>
              The message is sent automatically, on your behalf, and is written to sound like it came from you. It acknowledges the missed call, reassures the customer, and gives them a way to keep the conversation going — usually a booking link, a reply prompt, or a simple &ldquo;we&apos;ll call you back within the hour&rdquo; message.
            </p>
            <p>
              At Vexlo, our AI sends that text within <strong style={{ color: '#e8e8e8' }}>4 seconds of the missed call</strong>. At that point, the customer is still looking at their phone — and most of them reply.
            </p>

            {/* Callout box */}
            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <div className="text-2xl mb-3">⚡</div>
              <p className="font-bold text-sm mb-1" style={{ color: '#fff' }}>The 4-second window</p>
              <p className="text-sm" style={{ color: '#888' }}>
                A customer who misses your voicemail and gets an instant SMS is still engaged. A customer who gets a voicemail and hears nothing for an hour has already moved on. Speed is everything in missed call recovery.
              </p>
            </div>

            <h2>How It Works for Tradespeople</h2>
            <p>
              The setup is simpler than most people expect. When a call comes in to your business number and goes unanswered, the system detects the missed call and immediately fires an automated SMS from your number (or a dedicated line linked to your business).
            </p>
            <p>
              The message is customised to your business. For a roofer, it might say something like:
            </p>
            <div
              className="my-6 p-5 rounded-lg text-sm leading-relaxed"
              style={{ background: '#1a1a1a', border: '1px solid #333', color: '#ccc', fontStyle: 'italic' }}
            >
              &ldquo;Hi, sorry we missed your call — we&apos;re out on site. We&apos;d love to help with your roofing enquiry. Click here to book a free survey or reply to this message and we&apos;ll call you back shortly.&rdquo;
            </div>
            <p>
              The customer clicks the link, picks a slot in your calendar, and you get a notification. No back-and-forth. No phone tag. Just a booked job.
            </p>

            <h2>Which Trades Benefit Most?</h2>
            <p>
              The honest answer is: any trade where you can&apos;t always answer the phone. But the highest-impact use cases tend to be:
            </p>
            <ul>
              <li><strong style={{ color: '#e8e8e8' }}>Roofers</strong> — high job values (£2,000–£15,000) and customers who will call multiple roofers at once. The first to respond wins.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Plumbers</strong> — emergency calls can&apos;t wait. A 4-second text-back on a burst pipe call converts at an exceptionally high rate.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Electricians</strong> — safety-critical work means customers want assurance immediately. A fast response builds trust.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Kitchen fitters</strong> — high consideration purchases where being first to respond gives you a significant advantage over competitors.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Estate agents</strong> — viewing enquiries go cold within hours. An instant text-back keeps the lead warm.</li>
            </ul>
            <p>
              For a full breakdown of how AI missed call text-back works for your specific trade, see our{' '}
              <Link href="/services" style={{ color: '#d97706' }}>services page</Link>.
            </p>

            <h2>What Does the SMS Actually Say?</h2>
            <p>
              This is where most DIY solutions fall down. A generic auto-reply that sounds robotic will actually damage trust rather than build it. The message needs to:
            </p>
            <ul>
              <li>Acknowledge the missed call directly (not feel like a marketing email)</li>
              <li>Sound human and natural — match your brand voice</li>
              <li>Include a clear next step (booking link or reply prompt)</li>
              <li>Be short enough to read in 10 seconds</li>
            </ul>
            <p>
              At Vexlo, we write every message for you during onboarding. You approve it before it goes live. Most clients are surprised at how natural the messages sound — because they&apos;re written specifically for your business and your customers.
            </p>
            <p>
              Want to know more about crafting the perfect automated reply?{' '}
              <Link href="/articles/how-to-reply-to-missed-calls-automatically" style={{ color: '#d97706' }}>
                Read our guide: How to Reply to Missed Calls Automatically.
              </Link>
            </p>

            <h2>The Real Cost of Missed Calls</h2>
            <p>
              Let&apos;s do some quick maths. Say you&apos;re a roofer who misses an average of 5 calls per week. Two of those would have converted to surveys. One of those surveys would become a job worth £4,000.
            </p>
            <p>
              That&apos;s <strong style={{ color: '#e8e8e8' }}>one £4,000 job lost every two weeks</strong> — or £8,000 a month in missed revenue. Not because you&apos;re bad at your job, but because you were busy doing the job.
            </p>
            <p>
              Even recovering just 30% of those calls with an automated text-back system would be worth several thousand pounds per month. The maths is almost always overwhelming in favour of automation.
            </p>

            <h2>How AI Missed Call Text-Back Fits Into a Bigger System</h2>
            <p>
              Text-back is the first step, but it works best as part of a broader missed call automation setup. Once the customer replies or clicks the booking link, the AI can:
            </p>
            <ul>
              <li>Book them directly into your calendar</li>
              <li>Send confirmation and reminder messages</li>
              <li>Follow up if they don&apos;t complete the booking</li>
              <li>Request a Google review after the job is complete</li>
            </ul>
            <p>
              This is how Vexlo clients average 10+ new Google reviews per month — automatically, without ever having to ask.
            </p>
            <p>
              To understand how automated booking fits into this,{' '}
              <Link href="/articles/automated-appointment-booking-tradespeople" style={{ color: '#d97706' }}>
                read our guide on automated appointment booking for tradespeople.
              </Link>
            </p>
            <p>
              And if you run a small business and want to understand the full picture,{' '}
              <Link href="/articles/missed-call-automation-small-business-uk" style={{ color: '#d97706' }}>
                our complete guide to missed call automation for UK small businesses
              </Link>{' '}
              covers everything from cost to setup.
            </p>

            <h2>Getting Started</h2>
            <p>
              The good news: you don&apos;t need to be technical, you don&apos;t need to buy new hardware, and you don&apos;t need to change your existing phone number. Most Vexlo clients are fully live within 48 hours of signing up.
            </p>
            <p>
              Your first month is free — no setup fees, no contracts. If it&apos;s not working for you, cancel anytime.
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
              { href: '/articles/missed-call-automation-small-business-uk', label: 'Missed Call Automation for Small Businesses UK' },
              { href: '/articles/how-to-reply-to-missed-calls-automatically', label: 'How to Reply to Missed Calls Automatically' },
              { href: '/articles/automated-appointment-booking-tradespeople', label: 'Automated Appointment Booking for Tradespeople' },
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
            Stop missing calls.{' '}
            <span style={{ color: '#d97706' }}>Start today.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free 15-minute demo and see exactly how Vexlo captures every missed call for your business — live, with no obligation.
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

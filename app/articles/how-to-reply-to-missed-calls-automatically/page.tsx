import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'How to Reply to Missed Calls Automatically (Without Lifting a Finger) | Vexlo',
  description: 'Step-by-step: how automatic missed call replies work, what to say in your SMS, and how to set the whole thing up without any technical knowledge.',
  keywords: [
    'how to reply to missed calls automatically',
    'automatic missed call reply UK',
    'automated text back missed call',
    'missed call auto reply SMS',
    'how to set up missed call text back',
    'automatic reply phone business UK',
  ],
  alternates: { canonical: `${siteUrl}/articles/how-to-reply-to-missed-calls-automatically` },
  openGraph: {
    title: 'How to Reply to Missed Calls Automatically (Without Lifting a Finger)',
    description: 'Step-by-step: how automatic missed call replies work, what to say in your SMS, and how to set it up without any technical knowledge.',
    url: `${siteUrl}/articles/how-to-reply-to-missed-calls-automatically`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'How to Reply to Missed Calls Automatically' }],
  },
}

export default function Article3() {
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
            How-To Guide
          </span>
          <h1
            className="font-display text-white mb-6 mt-2"
            style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: 1.05, letterSpacing: '0.02em' }}
          >
            How to Reply to Missed Calls Automatically (Without Lifting a Finger)
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#888' }}>
            5 min read · Published by Vexlo
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-article">

            <p>
              Every time your phone rings and you can&apos;t answer, there&apos;s a window of opportunity — and it closes fast. The customer is still looking at their phone when you miss the call. That&apos;s the moment you need to reach them.
            </p>
            <p>
              An automatic reply to missed calls is the most effective way to keep that window open. In this guide, we&apos;ll explain exactly how it works, what the message should say, and how to get it set up without any technical knowledge.
            </p>

            <h2>How Automatic Missed Call Replies Work</h2>
            <p>
              When a call comes into your business number and goes unanswered — whether because you&apos;re on site, with a client, or simply not available — a missed call trigger fires automatically. Within seconds, an SMS is sent from your number (or a dedicated linked line) to the caller&apos;s mobile.
            </p>
            <p>
              That message can do several things depending on how it&apos;s configured:
            </p>
            <ul>
              <li>Acknowledge the missed call and reassure the customer</li>
              <li>Provide a booking link so they can self-schedule</li>
              <li>Invite them to reply with their enquiry</li>
              <li>Give them a timeframe for a callback</li>
            </ul>
            <p>
              The whole process is instant — typically within 4 seconds. By the time the customer puts their phone down, they already have a message from you.
            </p>
            <p>
              This is the core of what&apos;s known as{' '}
              <Link href="/articles/ai-missed-call-text-back-for-trades" style={{ color: '#d97706' }}>
                AI missed call text-back for trades
              </Link>{' '}
              — a system specifically designed for businesses where the owner can&apos;t always be near the phone.
            </p>

            <h2>What to Include in Your Automatic Reply</h2>
            <p>
              The message you send has a big impact on whether the customer stays engaged or moves on. Here&apos;s what makes an effective automated missed call reply:
            </p>

            <h3>1. Acknowledge the missed call directly</h3>
            <p>
              Start by referencing the fact that they called. A message that begins with "Hi, thanks for getting in touch" feels like marketing. A message that begins with "Hi, sorry we missed your call" feels like a person.
            </p>

            <h3>2. Be brief</h3>
            <p>
              The message should be readable in under 10 seconds. Long messages get skimmed or ignored. Aim for 2–3 short sentences maximum.
            </p>

            <h3>3. Include one clear next step</h3>
            <p>
              The call to action should be obvious: either a booking link, a reply prompt, or a timeframe for callback. Don&apos;t give them three options — that creates friction.
            </p>

            <h3>4. Sound human</h3>
            <p>
              The biggest mistake is sounding robotic. No one wants to feel like they got an autoresponder. The message should match your business&apos;s tone — casual and friendly for a local tradesperson, slightly more formal for a dental practice or estate agent.
            </p>

            {/* Message examples */}
            <div className="my-8 space-y-4">
              <p className="text-xs font-bold tracking-widest uppercase" style={{ color: '#555' }}>Message examples</p>

              <div
                className="p-5 rounded-lg text-sm leading-relaxed"
                style={{ background: '#1a1a1a', border: '1px solid #333' }}
              >
                <p className="text-xs font-bold mb-2" style={{ color: '#d97706' }}>For a plumber or roofer:</p>
                <p style={{ color: '#ccc', fontStyle: 'italic' }}>
                  "Hi, sorry we missed your call — we&apos;re out on site. We&apos;d love to help. Click here to book a free survey or call us back on this number when it&apos;s convenient."
                </p>
              </div>

              <div
                className="p-5 rounded-lg text-sm leading-relaxed"
                style={{ background: '#1a1a1a', border: '1px solid #333' }}
              >
                <p className="text-xs font-bold mb-2" style={{ color: '#d97706' }}>For a dental practice:</p>
                <p style={{ color: '#ccc', fontStyle: 'italic' }}>
                  "Hi, sorry we missed your call. We&apos;re currently with patients. Click here to book your appointment online — we have availability from [date]. We&apos;ll look forward to seeing you."
                </p>
              </div>

              <div
                className="p-5 rounded-lg text-sm leading-relaxed"
                style={{ background: '#1a1a1a', border: '1px solid #333' }}
              >
                <p className="text-xs font-bold mb-2" style={{ color: '#d97706' }}>For an estate agent:</p>
                <p style={{ color: '#ccc', fontStyle: 'italic' }}>
                  "Hi, sorry we missed your call. Let us know if you&apos;d like to arrange a viewing or have a property question — click here to book a call back at a time that suits you."
                </p>
              </div>
            </div>

            <p>
              At Vexlo, we write every message for you during setup. We&apos;ll ask about your business, your tone, and what you want customers to do — then craft messages that sound like they came from you, not a chatbot.
            </p>

            <h2>The Technical Side (Simplified)</h2>
            <p>
              You don&apos;t need to understand the technical details to use automatic call replies — but if you&apos;re curious, here&apos;s a simplified overview of how it works:
            </p>
            <ol>
              <li>Your business number is connected to the Vexlo platform (we handle this — you don&apos;t change your number).</li>
              <li>When a call is missed (rings out, goes to voicemail, or the line is engaged), the platform detects the event.</li>
              <li>An automated SMS is dispatched from your number within 4 seconds.</li>
              <li>Replies from the customer are logged in your dashboard, and you&apos;re notified in real time.</li>
              <li>If the customer books via the link, it goes directly into your calendar with a confirmation sent to both of you.</li>
            </ol>
            <p>
              The entire setup is done for you. You don&apos;t install anything, change your phone system, or learn new software.
            </p>

            <h2>What Happens After the Auto-Reply?</h2>
            <p>
              The auto-reply is the first step — but what happens next matters just as much.
            </p>
            <p>
              If the customer clicks your booking link, they&apos;re taken to a simple calendar where they can pick a time that works for them. Once they book, you get an instant notification and they get a confirmation. The job is in the diary with no back-and-forth.
            </p>
            <p>
              If they reply to the SMS, the conversation continues and you can pick it up when you&apos;re free. Every message is stored in the dashboard so nothing gets lost.
            </p>
            <p>
              And when the job is done, the system automatically sends a review request — which is how Vexlo clients average 10+ new Google reviews per month.
            </p>
            <p>
              To learn more about how booking automation integrates with this,{' '}
              <Link href="/articles/automated-appointment-booking-tradespeople" style={{ color: '#d97706' }}>
                read our guide on automated appointment booking for tradespeople.
              </Link>
            </p>

            <h2>Common Questions About Automatic Call Replies</h2>

            <h3>Will it send a text to landlines?</h3>
            <p>
              No. The system detects whether the incoming call came from a mobile number. If it came from a landline, no SMS is sent (since landlines can&apos;t receive texts).
            </p>

            <h3>Can I turn it off outside of business hours?</h3>
            <p>
              You can configure the system however you like — 24/7 replies, business hours only, or specific windows. Most trades benefit from 24/7 coverage since enquiries come in at all hours.
            </p>

            <h3>What if I answer the call?</h3>
            <p>
              If you answer, no SMS is sent. The trigger only fires on missed calls — calls that ring out, are rejected, or go to voicemail.
            </p>

            <h3>Can I customise the message for different types of enquiry?</h3>
            <p>
              Yes. More advanced setups can route different types of enquiries to different message flows. An emergency call-out can get a different reply than a general enquiry, for example.
            </p>

            <h2>How to Get Started</h2>
            <p>
              The fastest way to get automatic missed call replies set up is to book a demo with Vexlo. We&apos;ll walk you through exactly how it works for your specific business type, write your messages with you, and have you live within 48 hours.
            </p>
            <p>
              There&apos;s no technical setup on your side, no contracts to sign, and your first month is completely free.
            </p>
            <p>
              If you want to understand the broader picture of how this fits into a full missed call automation strategy,{' '}
              <Link href="/articles/missed-call-automation-small-business-uk" style={{ color: '#d97706' }}>
                read our complete guide to missed call automation for UK small businesses.
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
              { href: '/articles/ai-missed-call-text-back-for-trades', label: 'AI Missed Call Text-Back for Trades' },
              { href: '/articles/missed-call-automation-small-business-uk', label: 'Missed Call Automation for Small Businesses UK' },
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
            Set it up in{' '}
            <span style={{ color: '#d97706' }}>under 48 hours.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free demo and we&apos;ll walk you through exactly how automatic missed call replies work for your business — and set everything up for you.
          </p>
          <Link
            href="/enquiry"
            className="inline-flex items-center px-8 py-4 rounded text-sm font-bold tracking-wide text-white transition-all duration-200 hover:brightness-110"
            style={{ background: '#d97706' }}
          >
            Book Your Free Demo →
          </Link>
          <p className="mt-5 text-xs" style={{ color: '#555' }}>
            First month free · No setup fees · We write your messages for you
          </p>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Automated Follow-Up After a Missed Call: Turn Cold Leads Hot Again | Vexlo',
  description: 'Most businesses send one text and hope. Automated follow-up sequences recover leads that didn\'t respond first time — turning cold missed calls into booked jobs.',
  keywords: [
    'automated follow up after missed call UK',
    'missed call follow up sequence business',
    'automated lead follow up small business UK',
    'follow up missed call text back',
    'lead nurture automation trades UK',
    'missed call lead recovery automation',
    'automated follow up SMS business UK',
  ],
  alternates: { canonical: `${siteUrl}/articles/automated-follow-up-after-missed-call` },
  openGraph: {
    title: 'Automated Follow-Up After a Missed Call: Turn Cold Leads Hot Again',
    description: 'Automated follow-up sequences recover leads that didn\'t respond first time — turning cold missed calls into booked jobs.',
    url: `${siteUrl}/articles/automated-follow-up-after-missed-call`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Automated Follow-Up After a Missed Call' }],
  },
}

export default function AutomatedFollowUpArticle() {
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
            Automated Follow-Up After a Missed Call: Turn Cold Leads Hot Again
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#888' }}>6 min read · Published by Vexlo</p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-article">

            <p>
              Sending an automated text back when someone misses a call is the first step. But what happens when the customer receives that text and doesn't respond? Most businesses do nothing — they send one message and assume the lead is lost.
            </p>
            <p>
              That's a significant missed opportunity. Research consistently shows that 30–40% of leads who don't respond to a first outreach message will respond to a second or third — if those messages are well-timed, relevant, and don't feel like harassment.
            </p>
            <p>
              Automated follow-up sequences are how you turn these cold, unresponsive missed call leads into bookings — automatically, without any manual effort on your part.
            </p>

            <h2>Why First-Touch Response Isn't Enough</h2>
            <p>
              People are busy. A customer who called your business at 10am was actively looking for a solution at that moment. By the time your automated SMS arrives — even within 4 seconds — they might be mid-task, driving, or in a meeting. They see the message, intend to respond, and then forget.
            </p>
            <p>
              This isn't a rejection. It's life. The customer is still potentially interested. They just need another nudge at the right time.
            </p>
            <p>
              Without automated follow-up, that nudge never comes. With it, you're systematically recovering a significant portion of leads that would otherwise have quietly disappeared from your pipeline.
            </p>

            <h2>What a Good Follow-Up Sequence Looks Like</h2>
            <p>
              Effective automated follow-up for missed calls is built on three principles: timing, relevance, and restraint. You want to follow up often enough to catch the customer when they're free — but not so often that it feels like spam.
            </p>
            <p>
              A typical sequence for a trades business might look like this:
            </p>

            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <p className="font-bold text-sm mb-4" style={{ color: '#fff' }}>Example 3-step missed call follow-up sequence</p>
              <div className="space-y-4 text-sm" style={{ color: '#888' }}>
                <div>
                  <p className="font-bold text-xs mb-1" style={{ color: '#d97706' }}>Message 1 — Immediate (4 seconds after missed call)</p>
                  <div className="p-3 rounded" style={{ background: '#1a1a1a', fontStyle: 'italic', color: '#ccc' }}>
                    "Hi, sorry I missed your call — I'm on a job right now. Click here to book a time or reply with your enquiry: [link] — [Name]"
                  </div>
                </div>
                <div>
                  <p className="font-bold text-xs mb-1" style={{ color: '#d97706' }}>Message 2 — 4 hours later (if no response)</p>
                  <div className="p-3 rounded" style={{ background: '#1a1a1a', fontStyle: 'italic', color: '#ccc' }}>
                    "Hi again — just following up on my earlier message. Happy to help whenever's convenient for you. [booking link]"
                  </div>
                </div>
                <div>
                  <p className="font-bold text-xs mb-1" style={{ color: '#d97706' }}>Message 3 — 24 hours later (if still no response)</p>
                  <div className="p-3 rounded" style={{ background: '#1a1a1a', fontStyle: 'italic', color: '#ccc' }}>
                    "Hi, last follow-up from [Business Name] — if you're still looking for help with [service], I'd love to assist. No pressure either way. [booking link]"
                  </div>
                </div>
              </div>
            </div>

            <h2>The Psychology Behind Follow-Up Sequences</h2>
            <p>
              The three-message sequence works because it aligns with real customer behaviour patterns:
            </p>
            <ul>
              <li><strong style={{ color: '#e8e8e8' }}>Message 1</strong> catches the customer while they're still in the moment. High urgency, high intent.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Message 2</strong> catches them when they've had time to check their messages properly — often during a lunch break or at the end of the working day.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Message 3</strong> catches the customers who genuinely meant to reply but didn't get around to it. The low-pressure closing message respects their time and often prompts a belated response.</li>
            </ul>
            <p>
              The key to each message is that it doesn't feel automated. Every message should sound like it came from a real person — personalised, natural, and free from corporate language.
            </p>

            <h2>What Stops at Three Messages</h2>
            <p>
              Restraint is critical. After three messages with no response, the customer has made their decision. Continuing to message them is spam — and in the UK, it risks GDPR compliance issues. The sequence ends, and the lead is marked as inactive.
            </p>
            <p>
              But between initial contact and that third message, you've had three opportunities to catch a customer who was genuinely interested but just busy. The difference between businesses that implement this and those that don't is often 20–30% more converted leads from the same enquiry volume.
            </p>

            <h2>Automating Without Sounding Automated</h2>
            <p>
              The biggest concern most businesses have with automated follow-up is that it'll sound impersonal. This is a valid concern — and it's why the message copy matters so much.
            </p>
            <p>
              At Vexlo, every follow-up message is written to sound like it came from the business owner personally. We don't use generic templates. We write messages that match your trade, your voice, and the kind of relationship you want to build with customers.
            </p>
            <p>
              For guidance on writing effective SMS messages,{' '}
              <Link href="/articles/what-to-say-in-missed-call-text-back-sms" style={{ color: '#d97706' }}>
                read our guide on what to say in a missed call text back
              </Link>.
            </p>
            <p>
              And for the full context of how this fits into a complete automation system,{' '}
              <Link href="/articles/how-to-reply-to-missed-calls-automatically" style={{ color: '#d97706' }}>
                read our complete guide to replying to missed calls automatically
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
              { href: '/articles/how-to-reply-to-missed-calls-automatically', label: 'How to Reply to Missed Calls Automatically' },
              { href: '/articles/what-to-say-in-missed-call-text-back-sms', label: 'SMS Templates That Work' },
              { href: '/articles/ai-missed-call-text-back-for-trades', label: 'AI Missed Call Text-Back for Trades' },
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
            Follow up automatically.{' '}
            <span style={{ color: '#d97706' }}>Book more jobs.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free demo and see how Vexlo's follow-up sequences convert cold missed calls into warm bookings.
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

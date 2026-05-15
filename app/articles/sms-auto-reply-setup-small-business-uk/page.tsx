import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'How to Set Up SMS Auto-Reply for Missed Calls: UK Small Business Guide | Vexlo',
  description: 'Step-by-step guide to setting up an SMS auto-reply for missed calls for UK small businesses and tradespeople. No technical knowledge required.',
  keywords: [
    'SMS auto reply setup missed calls UK',
    'how to set up missed call text back UK',
    'automated SMS reply missed calls small business',
    'SMS auto reply business UK setup guide',
    'missed call SMS automation setup UK',
    'set up automatic text reply missed call UK',
    'missed call automation setup tradespeople',
  ],
  alternates: { canonical: `${siteUrl}/articles/sms-auto-reply-setup-small-business-uk` },
  openGraph: {
    title: 'How to Set Up SMS Auto-Reply for Missed Calls: UK Small Business Guide',
    description: 'Step-by-step guide to setting up SMS auto-reply for missed calls for UK small businesses. No technical knowledge required.',
    url: `${siteUrl}/articles/sms-auto-reply-setup-small-business-uk`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'SMS Auto-Reply Setup UK Small Business' }],
  },
}

export default function SMSAutoReplySetupArticle() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <section className="pt-36 pb-10 px-6 md:px-10 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at center top, rgba(217,119,6,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/articles" className="text-xs" style={{ color: '#555' }}>← All Articles</Link>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-4" style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706' }}>
            How-To Guide
          </span>
          <h1 className="font-display text-white mb-6 mt-2" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: 1.05, letterSpacing: '0.02em' }}>
            How to Set Up SMS Auto-Reply for Missed Calls (UK Small Business Guide)
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#888' }}>5 min read · Published by Vexlo</p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-article">

            <p>
              Setting up an SMS auto-reply for missed calls sounds technical — but it isn't. With the right platform, the entire process takes less than an hour, requires no coding or technical knowledge, and uses your existing phone number without any changes.
            </p>
            <p>
              This guide walks you through exactly how to set it up, what decisions you'll need to make, and what good looks like at each step.
            </p>

            <h2>What You'll Have When You're Done</h2>
            <p>
              By the end of this setup, every person who calls your business number and doesn't get through will automatically receive a personalised SMS within seconds — 24 hours a day, 7 days a week, including weekends and bank holidays. You won't have to do anything after setup. The system runs itself.
            </p>

            <h2>Step 1: Choose Your Platform</h2>
            <p>
              The first decision is which missed call automation platform to use. Look for:
            </p>
            <ul>
              <li>UK phone number support (not all platforms handle UK numbers correctly)</li>
              <li>Sub-30-second response time</li>
              <li>Flat monthly pricing without per-message fees</li>
              <li>Full onboarding support — the platform should set things up with you, not leave you to figure it out</li>
              <li>Integrated booking calendar option</li>
            </ul>
            <p>
              Vexlo is built specifically for UK trades and service businesses and includes all of the above. For a full comparison of what to look for,{' '}
              <Link href="/articles/best-missed-call-text-back-software-uk" style={{ color: '#d97706' }}>
                read our guide to the best missed call text back software for UK businesses
              </Link>.
            </p>

            <h2>Step 2: Onboarding Call (30 Minutes)</h2>
            <p>
              With Vexlo, the first step after signing up is a 30-minute onboarding call. During this call, your account manager will:
            </p>
            <ul>
              <li>Connect the system to your existing phone number</li>
              <li>Write your automated SMS message with you</li>
              <li>Set up your booking calendar if you want one</li>
              <li>Configure follow-up sequences (optional)</li>
              <li>Test the full system before going live</li>
            </ul>
            <p>
              You don't need to prepare anything technical. Just know your phone number and have a rough idea of what you want the message to say. Everything else is handled during the call.
            </p>

            <h2>Step 3: Write Your Automated SMS</h2>
            <p>
              The automated SMS is the most important element of the setup. It needs to:
            </p>
            <ul>
              <li>Acknowledge the missed call directly</li>
              <li>Sound personal — not like a mass marketing message</li>
              <li>Include a clear next step (booking link or reply prompt)</li>
              <li>Be under 160 characters if possible</li>
            </ul>
            <p>
              Your onboarding manager will help you craft this message. But if you want to prepare in advance,{' '}
              <Link href="/articles/what-to-say-in-missed-call-text-back-sms" style={{ color: '#d97706' }}>
                read our guide on what to say in a missed call text back
              </Link>{' '}
              for templates you can use.
            </p>

            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <p className="font-bold text-sm mb-4" style={{ color: '#fff' }}>Sample automated SMS (roofer)</p>
              <div className="text-sm p-4 rounded-lg" style={{ background: '#1a1a1a', border: '1px solid #333', color: '#ccc', fontStyle: 'italic' }}>
                "Hi, sorry I missed your call — I'm on a roof right now! I'd love to help with your enquiry. Book a free survey here: [link] or reply to this message and I'll call back soon. — [Name]"
              </div>
              <p className="text-xs mt-3" style={{ color: '#555' }}>This message: acknowledges the call ✓ explains why ✓ sounds human ✓ provides next step ✓ includes a name ✓</p>
            </div>

            <h2>Step 4: Set Up Your Booking Calendar (Recommended)</h2>
            <p>
              The booking calendar link in your SMS is what transforms a passive text response into an active conversion engine. When customers click the link, they see your availability and book a time that suits them — without any back-and-forth.
            </p>
            <p>
              During onboarding, Vexlo will connect a booking calendar to your SMS. You set your available hours, buffer times between appointments, and any advance notice requirements. The calendar syncs with your existing Google or Apple calendar so bookings appear there automatically.
            </p>

            <h2>Step 5: Test Before Going Live</h2>
            <p>
              Before your system goes live, call your own number and let it ring to voicemail. Within seconds, you should receive the automated SMS. Check that:
            </p>
            <ul>
              <li>The message arrives within 10 seconds</li>
              <li>The wording looks correct and sounds right</li>
              <li>The booking link works and leads to the right calendar</li>
              <li>The confirmation email or notification system works</li>
            </ul>
            <p>
              Your Vexlo onboarding manager runs this test with you before closing the call.
            </p>

            <h2>Step 6: Go Live and Monitor</h2>
            <p>
              Once the system is tested and approved, it's live. From that point, every missed call triggers an automatic SMS response. Most businesses see their first automated responses within the first hour of going live.
            </p>
            <p>
              In the first week, monitor the system to make sure the message is converting well and tweak it if needed. Most businesses don't need to change anything — but if your response rate is lower than expected, a small adjustment to the message wording usually fixes it.
            </p>
            <p>
              For a broader look at how this fits into the full automation picture,{' '}
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
              { href: '/articles/what-to-say-in-missed-call-text-back-sms', label: 'SMS Templates That Actually Work' },
              { href: '/articles/best-missed-call-text-back-software-uk', label: 'Best Missed Call Text Back Software UK' },
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
            Set up in 48 hours.{' '}
            <span style={{ color: '#d97706' }}>Start for free.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free demo and we'll walk through your setup together — live, no technical knowledge needed.
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

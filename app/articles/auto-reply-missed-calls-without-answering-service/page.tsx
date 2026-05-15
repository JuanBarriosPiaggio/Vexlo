import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'How to Auto-Reply to Missed Calls Without an Answering Service | Vexlo',
  description: 'You don\'t need a £200/month answering service to handle missed calls professionally. Here\'s how to auto-reply to every missed call without staff or expensive services.',
  keywords: [
    'auto reply missed calls without answering service',
    'missed call auto reply no answering service',
    'automated missed call reply small business',
    'handle missed calls without receptionist UK',
    'cheap missed call solution UK',
    'DIY missed call automation UK',
    'no answering service missed call text back',
  ],
  alternates: { canonical: `${siteUrl}/articles/auto-reply-missed-calls-without-answering-service` },
  openGraph: {
    title: 'How to Auto-Reply to Missed Calls Without an Answering Service',
    description: 'You don\'t need an expensive answering service. Here\'s how to auto-reply to every missed call professionally without staff.',
    url: `${siteUrl}/articles/auto-reply-missed-calls-without-answering-service`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Auto Reply Missed Calls Without Answering Service' }],
  },
}

export default function AutoReplyWithoutAnsweringServiceArticle() {
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
            How to Auto-Reply to Missed Calls Without an Answering Service
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#888' }}>6 min read · Published by Vexlo</p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-article">

            <p>
              Most small business owners who look into answering services come away with sticker shock. £150–£300 per month, coverage only during office hours, no booking capability, and a script-following operator who doesn't know your business. For a sole trader or small team, it's often simply not worth it.
            </p>
            <p>
              But that doesn't mean you have to choose between an expensive answering service and doing nothing. There's a third option — and it's faster, cheaper, and more effective than a human answering service for most UK small businesses.
            </p>

            <h2>Why Traditional Answering Services Are Overkill for Most Small Businesses</h2>
            <p>
              Traditional telephone answering services were designed for medium-to-large businesses that needed a professional human presence on the phone. For a sole trader plumber, a five-person cleaning company, or a two-person roofing operation, the maths rarely works out.
            </p>
            <p>
              You're paying for a human operator to:
            </p>
            <ul>
              <li>Answer your phone using your business name</li>
              <li>Take a message</li>
              <li>Email or text that message to you</li>
              <li>That's it</li>
            </ul>
            <p>
              They can't book appointments. They can't answer trade-specific questions. They can't follow up with leads who don't book. And they're typically only available 9–5, Monday to Friday.
            </p>
            <p>
              What most small businesses actually need is something that responds instantly, 24/7, and moves the customer forward rather than just relaying a message.
            </p>

            <h2>The Alternative: Automated Missed Call Text Back</h2>
            <p>
              Automated missed call text back does everything most businesses actually need from an answering service — and more — at a fraction of the cost.
            </p>
            <p>
              Here's how it works:
            </p>
            <ul>
              <li>A customer calls your business number</li>
              <li>If you don't answer, the system detects the missed call within seconds</li>
              <li>An automated, personalised SMS is sent to the caller within 4 seconds</li>
              <li>The SMS includes a booking link, a reply prompt, or both</li>
              <li>If the customer doesn't respond, an automated follow-up message goes out later</li>
              <li>You receive a notification when a customer responds or books</li>
            </ul>
            <p>
              No human operator required. No office hours limitation. No per-call fees.
            </p>

            <h2>What You Need to Set This Up</h2>
            <p>
              The good news is that you don't need any technical knowledge or new hardware to implement this. You need:
            </p>
            <ul>
              <li><strong style={{ color: '#e8e8e8' }}>Your existing phone number</strong> — the same number you already use for your business. No changes needed.</li>
              <li><strong style={{ color: '#e8e8e8' }}>A missed call automation platform</strong> — such as Vexlo. This is the software that detects missed calls and fires the automated SMS.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Your automated message</strong> — written with you during onboarding. A professional, personal SMS that sounds like it came from you.</li>
              <li><strong style={{ color: '#e8e8e8' }}>A booking link (optional but recommended)</strong> — a calendar link embedded in the SMS so customers can self-schedule without waiting.</li>
            </ul>
            <p>
              That's the entire setup. Most businesses are live within 48 hours.
            </p>

            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <div className="text-2xl mb-3">⚡</div>
              <p className="font-bold text-sm mb-1" style={{ color: '#fff' }}>Setup timeline with Vexlo</p>
              <div className="space-y-2 text-sm mt-3" style={{ color: '#888' }}>
                <div><span style={{ color: '#d97706' }}>Day 1:</span> Onboarding call (30 mins). We write your automated SMS together and set up your booking calendar if needed.</div>
                <div><span style={{ color: '#d97706' }}>Day 2:</span> System is live. Every missed call now gets an instant automated response.</div>
                <div><span style={{ color: '#d97706' }}>Day 3+:</span> You start seeing leads in your calendar that would previously have been lost.</div>
              </div>
            </div>

            <h2>24/7 Coverage Without the 24/7 Cost</h2>
            <p>
              One of the biggest advantages of automated text back over a traditional answering service is coverage. Your automated system responds to missed calls at 2am on a Sunday just as effectively as it does at 10am on a Tuesday. There's no premium rate for out-of-hours coverage.
            </p>
            <p>
              For trade businesses that receive emergency or urgent enquiries outside of working hours, this is particularly valuable. Your system can acknowledge the call, set expectations about your availability, and invite the customer to book first thing in the morning — capturing the lead before they find a competitor.
            </p>

            <h2>What This Looks Like in Practice</h2>
            <p>
              Imagine you're a plumber. You finish a job at 6pm and check your phone. You have 4 missed calls from the day. Normally, you'd spend 30–45 minutes calling each one back, often getting voicemails, playing phone tag, eventually converting 1 or none.
            </p>
            <p>
              With automated text back: all 4 callers received a personalised SMS within 4 seconds of their call. Two of them clicked the booking link and have already scheduled a callback with you for tomorrow morning. One has replied with their issue and is waiting for your response. One didn't reply. You call the non-responder quickly. Three converted leads in the time it took you to drive home.
            </p>
            <p>
              For the full picture on how to set this up step-by-step,{' '}
              <Link href="/articles/sms-auto-reply-setup-small-business-uk" style={{ color: '#d97706' }}>
                read our SMS auto-reply setup guide for UK small businesses
              </Link>.
            </p>
            <p>
              And to compare this approach with a traditional answering service,{' '}
              <Link href="/articles/ai-receptionist-vs-answering-service-uk" style={{ color: '#d97706' }}>
                read our AI receptionist vs answering service comparison
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
              { href: '/articles/ai-receptionist-vs-answering-service-uk', label: 'AI Receptionist vs Answering Service' },
              { href: '/articles/sms-auto-reply-setup-small-business-uk', label: 'SMS Auto-Reply Setup Guide' },
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
            No answering service needed.{' '}
            <span style={{ color: '#d97706' }}>See how.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free 15-minute demo and we'll show you exactly how Vexlo auto-replies to every missed call for your business.
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

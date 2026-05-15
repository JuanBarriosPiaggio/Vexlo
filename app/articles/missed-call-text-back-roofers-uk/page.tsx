import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Missed Call Text Back for Roofers UK: Recover Every Lead While You\'re on Site | Vexlo',
  description: 'Roofers lose £1,000s in high-value jobs every month to missed calls. Learn how automated text back recovers leads the moment they call — even when you\'re on a roof.',
  keywords: [
    'missed call text back roofers UK',
    'roofer missed call automation',
    'roofing business missed calls',
    'AI text back roofer',
    'roofing lead capture automation',
    'roofer automated reply UK',
    'roofing company growth automation',
  ],
  alternates: { canonical: `${siteUrl}/articles/missed-call-text-back-roofers-uk` },
  openGraph: {
    title: 'Missed Call Text Back for Roofers UK: Recover Every Lead While You\'re on Site',
    description: 'Roofers lose £1,000s monthly to missed calls. Learn how automated text back recovers leads instantly while you work.',
    url: `${siteUrl}/articles/missed-call-text-back-roofers-uk`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Missed Call Text Back for Roofers UK' }],
  },
}

export default function RoofersMissedCallArticle() {
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
            Missed Call Text Back for Roofers: Recover Every Lead While You're on Site
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#888' }}>
            8 min read · Published by Vexlo
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-article">

            <p>
              You're on a roof. It's 11am. Your phone rings in your jacket pocket, muffled by the wind. By the time you've finished the ridge tile you're fixing, checked your footing, and climbed down to a safe position, the call is three minutes old. You call back. Voicemail. You try again later. No answer.
            </p>
            <p>
              Meanwhile, the homeowner who called you — who needs a new roof, a leak fixed, or gutters replaced — has already booked a survey with a competitor who answered. That job was worth £4,500. You spent 45 minutes trying to get back to them. And you still lost it.
            </p>
            <p>
              This is not an edge case. It's the daily reality for roofing businesses across the UK.
            </p>

            <h2>Roofing's Unique Missed Call Problem</h2>
            <p>
              No other trade has a worse missed call problem than roofing — and the reasons are structural. Roofers work at height, in active environments where phone use is neither safe nor practical. A job that requires two hands and full concentration cannot be interrupted by a ringing phone. And unlike an office worker who can step away for a moment, a roofer on a pitched roof has no such option.
            </p>
            <p>
              The result is predictable: calls go unanswered during the productive hours of 8am to 4pm — which happen to be exactly when most customers decide to call about roofing work. The irony is brutal: the hours you're most productively working are the hours you're most reliably losing leads.
            </p>

            <h2>Why Roofing Customers Don't Wait</h2>
            <p>
              Roofing customers are in one of two mindsets when they call. Either something is already leaking and they need it sorted quickly, or they've decided to get quotes and they're working through a list. In both cases, they are not going to wait.
            </p>
            <p>
              A leaking roof customer will call three or four roofers until someone picks up. They're not going to leave a voicemail and wait to be called back. They need someone who can at least tell them when they can come out.
            </p>
            <p>
              A quote-shopping customer has typically found you on Google or a referral and they're also calling your competitors. The first roofer to respond — even with a text message — establishes the relationship and earns the first survey. That first survey converts to a job at a significantly higher rate than a cold callback two days later.
            </p>

            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <div className="text-2xl mb-3">🏠</div>
              <p className="font-bold text-sm mb-1" style={{ color: '#fff' }}>The stakes are high in roofing</p>
              <p className="text-sm" style={{ color: '#888' }}>
                Average roofing jobs in the UK: tile repair (£300–£800), full re-roof (£4,000–£12,000), flat roof replacement (£1,500–£5,000). Every missed enquiry that converts for a competitor is a job with serious value attached. A single missed re-roof per month costs more than most automation tools cost in a year.
              </p>
            </div>

            <h2>How Missed Call Text Back Recovers Roofing Leads</h2>
            <p>
              Missed call text back is a system that fires an automated SMS to anyone who calls your roofing business and doesn't get through — within seconds of the missed call. The message arrives while the customer is still looking at their phone, before they've had time to scroll down and call the next roofer.
            </p>
            <p>
              At Vexlo, our system sends the text within 4 seconds. The message is customised to your business and sounds personal. For a roofing company, it might read:
            </p>
            <div
              className="my-6 p-5 rounded-lg text-sm leading-relaxed"
              style={{ background: '#1a1a1a', border: '1px solid #333', color: '#ccc', fontStyle: 'italic' }}
            >
              "Hi, sorry I missed your call — I'm up on site right now. I'd love to help with your roofing enquiry. Click here to book a free survey or just reply to this message and I'll get back to you as soon as I'm down. — [Name], [Business Name]"
            </div>
            <p>
              The customer reads it. They click the link. They book a survey into your calendar. You get a notification when you're back on the ground. The lead is captured — and they didn't need to call anyone else.
            </p>

            <h2>The Psychology of a Fast Response</h2>
            <p>
              There's a psychological element to a fast response that goes beyond convenience. When a customer calls a business and within seconds receives a personalised, professional text, it creates an immediate impression of reliability and responsiveness.
            </p>
            <p>
              This matters enormously in roofing, where trust is the primary purchase factor. A customer handing over £8,000 for a re-roof needs to trust the person doing the work. The first interaction sets the tone — and an instant, professional response creates a better first impression than a callback two hours later.
            </p>

            <h2>Capturing Storm Damage and Emergency Enquiries</h2>
            <p>
              Storm damage calls are the highest-urgency leads in roofing. After a period of high winds, flooding, or heavy rain, customer call volumes spike — and every roofing business in your area is getting the same surge. In these periods, the volume of missed calls becomes even more costly.
            </p>
            <p>
              Automated text back handles these surges without any intervention from you. Every caller, no matter how many come in simultaneously, gets an immediate response. You can be on one call while the system handles five others — turning what would have been missed leads into booked surveys.
            </p>

            <h2>After the Text: Automated Booking</h2>
            <p>
              The most effective roofing businesses pair text back with an automated booking system. When the customer clicks your link, they choose their survey slot directly — no phone call required. The appointment goes straight into your calendar, and confirmation is sent automatically.
            </p>
            <p>
              For a roofing business with a packed schedule, this is the difference between spending two hours a day on the phone trying to arrange surveys and having a calendar that fills itself while you're working.
            </p>
            <p>
              To understand how automated booking works alongside text back,{' '}
              <Link href="/articles/automated-appointment-booking-tradespeople" style={{ color: '#d97706' }}>
                read our guide on automated appointment booking for tradespeople
              </Link>.
            </p>

            <h2>What You Actually Get Back</h2>
            <p>
              Roofers who implement missed call text back through Vexlo typically report recovering 60–70% of previously missed leads through the automated SMS. For a business that was missing 6–8 calls per week, that's 4–5 leads recovered every week that would otherwise have gone to a competitor.
            </p>
            <p>
              If even two of those leads per week convert to jobs averaging £1,500, that's an additional £3,000 per week — or over £150,000 in additional annual revenue. The maths is straightforward, and the setup takes less than 48 hours.
            </p>

            <h2>Getting Started with Vexlo</h2>
            <p>
              Vexlo sets everything up for your roofing business with zero technical knowledge required. We write your automated SMS, connect it to your existing number, and set up your booking calendar if you want one.
            </p>
            <p>
              Your first month is free. No setup fees, no lock-in. If it doesn't work for your business, you pay nothing. But in our experience, the first week tells every roofer exactly what they need to know.
            </p>
            <p>
              For the full picture on missed call automation,{' '}
              <Link href="/articles/ai-missed-call-text-back-for-trades" style={{ color: '#d97706' }}>
                read our complete guide to AI missed call text back for trades
              </Link>.
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
              { href: '/articles/missed-call-text-back-electricians-uk', label: 'Missed Call Text Back for Electricians' },
              { href: '/articles/how-much-are-missed-calls-costing-your-business', label: 'How Much Are Missed Calls Costing You?' },
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
            Every missed call is a job lost.{' '}
            <span style={{ color: '#d97706' }}>Fix that today.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free 15-minute demo and see how Vexlo automatically captures roofing leads even when you're working at height.
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

import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'AI Receptionist vs Answering Service UK: Which Is Better for Trades? | Vexlo',
  description: 'Comparing AI receptionist tools vs traditional answering services for UK tradespeople. Cost, speed, availability, and ROI — everything you need to make the right choice.',
  keywords: [
    'AI receptionist vs answering service UK',
    'answering service for tradespeople UK',
    'AI receptionist UK trades',
    'telephone answering service small business UK',
    'virtual receptionist vs AI',
    'best call handling solution UK trades',
    'answering service cost UK',
  ],
  alternates: { canonical: `${siteUrl}/articles/ai-receptionist-vs-answering-service-uk` },
  openGraph: {
    title: 'AI Receptionist vs Answering Service UK: Which Is Better for Trades?',
    description: 'Comparing AI receptionist tools vs traditional answering services for UK tradespeople. Cost, speed, availability, and ROI.',
    url: `${siteUrl}/articles/ai-receptionist-vs-answering-service-uk`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'AI Receptionist vs Answering Service UK' }],
  },
}

export default function AIvsAnsweringServiceArticle() {
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
            AI Receptionist vs Answering Service: Which Is Better for UK Trades?
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
              You've decided you need help handling calls. The question is: what kind? Traditional answering services and AI receptionist tools both promise to solve the missed call problem for tradespeople — but they work very differently, cost very differently, and produce very different results.
            </p>
            <p>
              This guide breaks down both options honestly so you can make the right call for your business.
            </p>

            <h2>What Is a Traditional Answering Service?</h2>
            <p>
              A traditional telephone answering service connects your business calls to a team of human operators who answer on your behalf. They take a message, follow a script, and either pass the call through or relay information back to you by email or SMS.
            </p>
            <p>
              These services have been around for decades. They're effective at ensuring a human voice answers your phone — which has its own value. But they come with constraints that make them a poor fit for many UK trades businesses.
            </p>
            <ul>
              <li><strong style={{ color: '#e8e8e8' }}>Cost:</strong> UK answering services typically charge £80–£300+ per month depending on call volume. Many charge per-call fees on top of a base rate. For a growing trades business, costs can escalate quickly.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Hours:</strong> Most services cover standard business hours. Out-of-hours and weekend coverage typically costs significantly more.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Quality:</strong> The operator is following a script, not working in your trade. They can take a message, but they can't answer questions about your services, availability, or pricing — and customers know it.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Speed:</strong> The message is relayed to you. You still need to call the customer back. The speed advantage over voicemail is marginal.</li>
            </ul>

            <h2>What Is an AI Receptionist?</h2>
            <p>
              An AI receptionist — in the context of missed call automation — is a system that handles missed calls through instant automated responses, typically via SMS. When a customer calls and doesn't get through, the AI fires a personalised text message within seconds and can guide the customer to a booking page, answer basic questions, or route their enquiry appropriately.
            </p>
            <p>
              Modern AI receptionist platforms like Vexlo go further than simple text back. The system can:
            </p>
            <ul>
              <li>Send a personalised SMS within 4 seconds of a missed call</li>
              <li>Include a link to an automated booking calendar</li>
              <li>Follow up if the customer hasn't booked within a set timeframe</li>
              <li>Send appointment confirmations and reminders</li>
              <li>Request Google reviews after completed jobs</li>
            </ul>
            <p>
              All of this runs automatically, 24/7, without any human involvement.
            </p>

            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <div className="text-2xl mb-3">📊</div>
              <p className="font-bold text-sm mb-1" style={{ color: '#fff' }}>Side-by-side comparison</p>
              <div className="text-sm mt-3 space-y-2" style={{ color: '#888' }}>
                <div className="grid grid-cols-3 gap-2 text-xs font-bold" style={{ color: '#aaa' }}>
                  <span></span><span style={{ color: '#d97706' }}>AI Receptionist</span><span>Answering Service</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs border-t pt-2" style={{ borderColor: '#2a2a2a' }}>
                  <span>Response speed</span><span style={{ color: '#e8e8e8' }}>4 seconds</span><span>30–90 seconds</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs border-t pt-2" style={{ borderColor: '#2a2a2a' }}>
                  <span>Availability</span><span style={{ color: '#e8e8e8' }}>24/7</span><span>Usually 9–6pm</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs border-t pt-2" style={{ borderColor: '#2a2a2a' }}>
                  <span>Monthly cost</span><span style={{ color: '#e8e8e8' }}>From £97/mo</span><span>£150–£400/mo</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs border-t pt-2" style={{ borderColor: '#2a2a2a' }}>
                  <span>Booking automation</span><span style={{ color: '#e8e8e8' }}>Included</span><span>Not included</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs border-t pt-2" style={{ borderColor: '#2a2a2a' }}>
                  <span>Review automation</span><span style={{ color: '#e8e8e8' }}>Included</span><span>Not included</span>
                </div>
              </div>
            </div>

            <h2>Where Traditional Answering Services Fall Short for Trades</h2>
            <p>
              Answering services made sense before smartphones. When customers expected to leave a message and wait, having a human voice say "we've got your message and will call you back" was enough. Today, customer expectations have shifted dramatically.
            </p>
            <p>
              Research shows that <strong style={{ color: '#e8e8e8' }}>90% of customers expect an immediate response</strong> to their enquiry — and in trades, a customer who hears "I'll pass on your message" still doesn't know when you'll call back, whether you can do the job, or how to book. They're still in limbo. They still have every reason to call someone else.
            </p>
            <p>
              The other issue is cost efficiency. A typical answering service for a busy trades business costs £150–£300 per month and provides a message relay service. That's money that could fund a complete AI automation stack that handles calls, books appointments, sends reminders, and builds your Google reviews — all automatically.
            </p>

            <h2>When a Traditional Answering Service Might Make Sense</h2>
            <p>
              To be fair, there are scenarios where a human answering service adds value. Complex enquiries that require nuanced judgement, clients who strongly prefer human interaction, or premium service businesses where the quality of every touchpoint matters. Some businesses use both — a human service for inbound calls combined with AI automation for missed calls and follow-up sequences.
            </p>
            <p>
              But for the majority of UK tradespeople and service businesses, the maths heavily favours AI automation. The cost is lower, the speed is faster, the availability is better, and the system does far more than relay messages.
            </p>

            <h2>The AI Advantage: What Happens After the First Text</h2>
            <p>
              Where AI automation really pulls ahead is in what happens after the initial response. A human answering service's job ends when they relay the message. An AI system's job is just beginning.
            </p>
            <p>
              With Vexlo, when a customer responds to the automated SMS, the system can:
            </p>
            <ul>
              <li>Send them directly to your booking calendar</li>
              <li>Collect their job details via SMS conversation</li>
              <li>Follow up automatically if they don't complete the booking</li>
              <li>Send appointment confirmation and reminder messages</li>
              <li>Request a review after the job is done</li>
            </ul>
            <p>
              This entire sequence runs without any manual involvement. The customer goes from missed caller to booked job to happy reviewer — automatically.
            </p>
            <p>
              To understand how this end-to-end system works,{' '}
              <Link href="/articles/ai-missed-call-text-back-for-trades" style={{ color: '#d97706' }}>
                read our complete guide to AI missed call text back for trades
              </Link>.
            </p>

            <h2>Making the Right Choice for Your Business</h2>
            <p>
              If you're a UK tradesperson or service business losing leads to missed calls, the choice between an answering service and AI automation comes down to one question: do you want a message relay system, or do you want a system that captures, converts, and follows up with every lead automatically?
            </p>
            <p>
              For most growing trades businesses, the answer is clear. AI automation doesn't just solve the missed call problem — it turns every missed call into an opportunity that the system manages from first contact to booked job.
            </p>
            <p>
              For the full picture on missed call automation for UK small businesses,{' '}
              <Link href="/articles/missed-call-automation-small-business-uk" style={{ color: '#d97706' }}>
                read our complete guide to missed call automation for UK small businesses
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
              { href: '/articles/missed-call-automation-small-business-uk', label: 'Missed Call Automation for Small Businesses UK' },
              { href: '/articles/best-missed-call-text-back-software-uk', label: 'Best Missed Call Text Back Software UK' },
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
            See AI automation in action.{' '}
            <span style={{ color: '#d97706' }}>Free demo.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free 15-minute demo and see exactly how Vexlo handles every missed call for your business — automatically, 24/7.
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

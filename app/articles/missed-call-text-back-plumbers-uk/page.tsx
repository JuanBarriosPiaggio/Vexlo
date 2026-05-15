import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Missed Call Text Back for Plumbers UK: Win Emergency Jobs 24/7 | Vexlo',
  description: 'Plumbers lose thousands every month to missed calls. Learn how missed call text back automation wins emergency plumbing jobs even when you\'re under a sink or on another call.',
  keywords: [
    'missed call text back plumbers UK',
    'plumber missed call automation',
    'AI text back plumber',
    'plumbing business missed calls',
    'automated reply plumber UK',
    'emergency plumber lead capture',
    'plumber business growth UK',
  ],
  alternates: { canonical: `${siteUrl}/articles/missed-call-text-back-plumbers-uk` },
  openGraph: {
    title: 'Missed Call Text Back for Plumbers UK: Win Emergency Jobs 24/7',
    description: 'Plumbers lose thousands every month to missed calls. Learn how missed call text back automation wins emergency plumbing jobs 24/7.',
    url: `${siteUrl}/articles/missed-call-text-back-plumbers-uk`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Missed Call Text Back for Plumbers UK' }],
  },
}

export default function PlumbersMissedCallArticle() {
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
            Missed Call Text Back for Plumbers: Win Emergency Jobs 24/7
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
              A homeowner's pipe has just burst. Water's coming through the kitchen ceiling. They're panicking. They grab their phone, search "emergency plumber near me," and call the first number. No answer. They call the second. Still no answer. They call the third — and that plumber picks up.
            </p>
            <p>
              That job was yours. You missed it because you were on another call or up to your elbows in someone else's boiler. This happens dozens of times a month across UK plumbing businesses — and it's one of the most expensive problems in the trade.
            </p>

            <h2>The Plumbing Industry's Missed Call Problem</h2>
            <p>
              Plumbing is uniquely vulnerable to missed call losses. Unlike a roofing job where a customer can wait a few days for a quote, plumbing enquiries — particularly emergency ones — have an urgency window measured in minutes, not hours. If you don't respond fast, they move on.
            </p>
            <p>
              Industry data consistently shows that <strong style={{ color: '#e8e8e8' }}>78% of customers choose the first tradesperson to respond</strong> to their enquiry. In emergency plumbing, that figure rises even higher. Speed of response is the single biggest competitive advantage a plumber can have — more important than price, more important than reviews, more important than how long you've been trading.
            </p>
            <p>
              Yet most plumbing businesses rely entirely on the plumber being available to answer their mobile. When they're on a job — which is most of the working day — calls go to voicemail. And voicemail doesn't win emergency jobs.
            </p>

            <h2>What Happens When a Plumber Misses a Call</h2>
            <p>
              Let's trace what actually happens when a customer calls a plumber and doesn't get through:
            </p>
            <ul>
              <li><strong style={{ color: '#e8e8e8' }}>They don't leave a voicemail.</strong> Most people under 40 simply hang up rather than leave a message. Studies suggest fewer than 20% of missed calls result in a voicemail.</li>
              <li><strong style={{ color: '#e8e8e8' }}>They move straight to the next result.</strong> With Google showing four or five plumbers on the local pack, there's no reason to wait. They scroll down and call someone else.</li>
              <li><strong style={{ color: '#e8e8e8' }}>You never know they called.</strong> Your missed call log shows a number. You call it back two hours later. They've already booked someone else — and they're slightly irritated you didn't respond sooner.</li>
            </ul>
            <p>
              This cycle happens constantly in plumbing businesses. The painful truth is that most plumbers are losing more work to slow response than to any competitor.
            </p>

            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <div className="text-2xl mb-3">💧</div>
              <p className="font-bold text-sm mb-1" style={{ color: '#fff' }}>The maths for a typical plumbing business</p>
              <p className="text-sm" style={{ color: '#888' }}>
                Average plumbing job value: £350–£2,500. If you're missing 8 calls per week and 3 of those would have converted, that's potentially £1,000–£7,500 in lost revenue every single week. Multiply that over a year, and the number becomes difficult to ignore.
              </p>
            </div>

            <h2>How Missed Call Text Back Works for Plumbers</h2>
            <p>
              Missed call text back is exactly what it sounds like: when someone calls your plumbing business and you don't answer, the system automatically sends them an SMS within seconds. Not minutes. Seconds.
            </p>
            <p>
              At Vexlo, that text is sent within 4 seconds of the missed call. The message is written to sound like it came from you personally — it acknowledges the call, reassures the customer that you've received their enquiry, and gives them an immediate next step.
            </p>
            <p>
              For a plumbing business, that message might look something like this:
            </p>
            <div
              className="my-6 p-5 rounded-lg text-sm leading-relaxed"
              style={{ background: '#1a1a1a', border: '1px solid #333', color: '#ccc', fontStyle: 'italic' }}
            >
              "Hi, sorry I missed your call — I'm out on a job right now. If it's urgent, here's a link to book an emergency slot or reply to this message and I'll call you back as soon as I'm free. — [Your Name], [Business Name]"
            </div>
            <p>
              The customer is still holding their phone when this arrives. They see it, they click the link, they book. Job saved.
            </p>

            <h2>Why Speed Is Everything in Emergency Plumbing</h2>
            <p>
              Emergency plumbing is perhaps the most time-sensitive category in all of the trades. A customer with a burst pipe, a blocked drain backing up, or a boiler out in January is not in a patient frame of mind. They need help now.
            </p>
            <p>
              A text arriving within seconds of their missed call does something powerful: it stops them from moving on. They've got something to respond to. They feel acknowledged. Even if they can't get someone on the phone immediately, the fact that a business has instantly responded tells them you're professional and organised.
            </p>
            <p>
              This matters enormously in a trade where many operators still rely on word of mouth and an unanswered mobile. An automated text back system is an immediate differentiator — it's the kind of responsiveness that used to require a receptionist or a call answering service, but now runs automatically 24/7 for a fraction of the cost.
            </p>

            <h2>Handling Out-of-Hours Enquiries</h2>
            <p>
              Emergency plumbing doesn't stop at 5pm. Neither does your missed call text back system. Whether a customer calls at 2am on a Sunday or 6am on a bank holiday, the automated response goes out immediately.
            </p>
            <p>
              This is particularly valuable for plumbers who don't offer out-of-hours services. Rather than leaving callers in silence and losing them to a 24-hour emergency plumber, your automated message can explain your hours, set expectations, and offer a booking link for the next available slot. You'll be the first plumber who responded — even if you were asleep.
            </p>

            <h2>Connecting Text Back to Automated Booking</h2>
            <p>
              The real power of missed call text back comes when it feeds directly into an automated booking system. Rather than sending customers to a phone number or a form they might not fill in, you send them straight to a booking calendar where they can choose a time that works.
            </p>
            <p>
              They pick a slot. You get a notification. The appointment appears in your calendar. No phone tag, no back-and-forth, no "call us back between 9 and 5." For survey bookings, consultation calls, and non-emergency enquiries, this workflow converts significantly better than voicemail ever could.
            </p>
            <p>
              To see how automated booking fits into the full picture, read our guide on{' '}
              <Link href="/articles/automated-appointment-booking-tradespeople" style={{ color: '#d97706' }}>
                automated appointment booking for tradespeople
              </Link>.
            </p>

            <h2>What Plumbers Say After Setting It Up</h2>
            <p>
              The most common reaction from plumbers who set up missed call text back through Vexlo is surprise at how many calls they were already missing — and how many of those customers respond to the automated SMS.
            </p>
            <p>
              It's not unusual to see 60–70% of missed callers respond to the text back message. In emergency plumbing, that percentage climbs even higher because the customer's need is immediate and they want any form of reassurance that help is coming.
            </p>

            <h2>How to Get Started</h2>
            <p>
              Setting up missed call text back for your plumbing business takes less time than you'd expect. You don't need new hardware, you don't need to change your phone number, and you don't need any technical knowledge. Vexlo handles the entire setup.
            </p>
            <p>
              During onboarding, we write your automated SMS message with you, set up the booking link if you want one, and connect everything to your existing number. Most plumbing clients go live within 48 hours.
            </p>
            <p>
              Your first month is free — no setup fees, no long contracts. If it's not working for you, cancel anytime. But in our experience, once a plumber sees how many calls they were missing and how many convert with a simple text back, they never look back.
            </p>
            <p>
              For a broader look at how missed call automation works across all UK small businesses,{' '}
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
              { href: '/articles/ai-missed-call-text-back-for-trades', label: 'AI Missed Call Text-Back for Trades' },
              { href: '/articles/automated-appointment-booking-tradespeople', label: 'Automated Appointment Booking for Tradespeople' },
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
            Stop missing plumbing jobs.{' '}
            <span style={{ color: '#d97706' }}>Start today.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free 15-minute demo and see how Vexlo automatically responds to every missed call for your plumbing business — live, with no obligation.
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

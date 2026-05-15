import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Automated Appointment Booking for Tradespeople: Book More Jobs While You Work | Vexlo',
  description: 'Stop playing phone tag to arrange quotes and surveys. Automated booking lets customers self-schedule directly into your calendar — no back-and-forth required.',
  keywords: [
    'automated appointment booking for tradespeople',
    'automated booking system for trades UK',
    'self-booking calendar tradespeople',
    'AI appointment booking UK',
    'automated survey booking roofer plumber',
    'online booking system for small business UK',
  ],
  alternates: { canonical: `${siteUrl}/articles/automated-appointment-booking-tradespeople` },
  openGraph: {
    title: 'Automated Appointment Booking for Tradespeople: Book More Jobs While You Work',
    description: 'Stop playing phone tag to arrange quotes. Automated booking lets customers self-schedule directly into your calendar — no back-and-forth required.',
    url: `${siteUrl}/articles/automated-appointment-booking-tradespeople`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Automated Appointment Booking for Tradespeople' }],
  },
}

export default function Article4() {
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
            Booking Automation
          </span>
          <h1
            className="font-display text-white mb-6 mt-2"
            style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: 1.05, letterSpacing: '0.02em' }}
          >
            Automated Appointment Booking for Tradespeople: Book More Jobs While You Work
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
              Think about how much time you spend arranging bookings. A customer calls, you&apos;re not available. You call back, they&apos;re not available. You leave a voicemail. They call back. You miss each other three more times. Finally you speak, agree on a time, and scribble it in your notebook.
            </p>
            <p>
              That whole process — from first contact to booked appointment — might take two or three days and five or six phone calls. For one booking.
            </p>
            <p>
              Automated appointment booking eliminates every step of that. The customer picks a time. It goes in your calendar. You both get a confirmation. Done — in under two minutes, while you were busy on the tools.
            </p>

            <h2>What Is Automated Appointment Booking?</h2>
            <p>
              Automated appointment booking is a system that lets customers schedule directly into your calendar — via a link sent by SMS or shared on your website — without any human involvement.
            </p>
            <p>
              When a customer clicks the booking link, they see your real-time availability. They pick a slot, fill in a few basic details (name, address, what they need), and hit confirm. You receive an instant notification with all their information, and they get a confirmation message.
            </p>
            <p>
              If they need to reschedule, they can do that too — without calling you. Your calendar updates automatically.
            </p>
            <p>
              For trades, this typically means booking surveys, quote visits, and consultations. It&apos;s not replacing the job itself — it&apos;s just removing all the admin involved in getting that first appointment into the diary.
            </p>

            {/* Callout */}
            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <div className="text-2xl mb-3">📅</div>
              <p className="font-bold text-sm mb-1" style={{ color: '#fff' }}>No-shows drop, conversion rises</p>
              <p className="text-sm" style={{ color: '#888' }}>
                When customers self-select a time that works for them, no-show rates drop significantly compared to appointments arranged by phone. They&apos;ve committed actively, received a confirmation, and get reminders — so they show up.
              </p>
            </div>

            <h2>How It Fits Into the Missed Call Journey</h2>
            <p>
              Automated booking is most powerful when it&apos;s paired with{' '}
              <Link href="/articles/ai-missed-call-text-back-for-trades" style={{ color: '#d97706' }}>
                AI missed call text-back
              </Link>
              . Here&apos;s how the full journey looks:
            </p>
            <ol>
              <li>A customer calls your number. You&apos;re on site and can&apos;t answer.</li>
              <li>Within 4 seconds, they receive an automated SMS: <em style={{ color: '#ccc' }}>&ldquo;Sorry we missed you — click here to book a free survey.&rdquo;</em></li>
              <li>They click the link, see your available slots, and pick one.</li>
              <li>You get an instant notification: name, number, address, what they need, and when they&apos;ve booked.</li>
              <li>You show up, do the job, and the system follows up automatically for a Google review.</li>
            </ol>
            <p>
              The customer went from missed call to booked appointment without ever needing to speak to you. You went from losing a lead to filling your diary — while you were under a sink or on a ladder.
            </p>

            <h2>What Types of Appointments Can Be Automated?</h2>
            <p>
              Almost any first-contact appointment can be automated. For tradespeople, the most common use cases are:
            </p>
            <ul>
              <li><strong style={{ color: '#e8e8e8' }}>Free survey bookings</strong> — roofers, kitchen fitters, bathroom installers</li>
              <li><strong style={{ color: '#e8e8e8' }}>Quote visits</strong> — any trade where you need to see the job before pricing it</li>
              <li><strong style={{ color: '#e8e8e8' }}>Consultation calls</strong> — estate agents, dental practices, physio clinics</li>
              <li><strong style={{ color: '#e8e8e8' }}>Service appointments</strong> — boiler services, PAT testing, annual electrical checks</li>
              <li><strong style={{ color: '#e8e8e8' }}>Salon and clinic appointments</strong> — any appointment-based service business</li>
            </ul>
            <p>
              Emergency call-outs (burst pipes, power cuts) are usually handled differently — the customer needs a response now, not a booking slot. For those, the text-back system is designed to capture their details and trigger an immediate notification to you.
            </p>

            <h2>How Your Calendar Integrates</h2>
            <p>
              A common concern is that automated booking will create conflicts with your existing schedule. In practice, it&apos;s the opposite — because the booking system syncs with your live calendar.
            </p>
            <p>
              When you block out time in your calendar — for an existing job, a lunch break, a day off — that time automatically becomes unavailable in the booking system. Customers can only pick from genuinely open slots. There&apos;s no risk of double-booking.
            </p>
            <p>
              Vexlo integrates with the most popular calendar tools used by UK small businesses, and the setup is handled for you during onboarding.
            </p>

            <h2>Automated Reminders: Reducing No-Shows</h2>
            <p>
              Once a booking is made, the system doesn&apos;t just sit back and wait. It automatically sends reminder messages to the customer — typically 24 hours before and again on the morning of the appointment.
            </p>
            <p>
              This alone can dramatically reduce no-shows. A customer who books a survey two weeks out might forget — but a reminder the evening before keeps them on track, and gives them an easy way to reschedule if something&apos;s come up.
            </p>
            <p>
              Fewer wasted journeys. More productive days on the tools.
            </p>

            <h2>From Booking to Google Review: Closing the Loop</h2>
            <p>
              Automated booking is the middle of the customer journey — but the end matters just as much. After the job is done, Vexlo automatically sends a Google review request to the customer.
            </p>
            <p>
              Because the request is timed correctly (usually 24–48 hours after job completion), response rates are high. Clients typically see 10+ new Google reviews per month on autopilot — which compounds over time to push them higher in local search results and drive more inbound enquiries.
            </p>
            <p>
              More calls → more text-backs → more bookings → more reviews → more calls. The whole system feeds itself.
            </p>
            <p>
              To understand the full automation picture,{' '}
              <Link href="/articles/missed-call-automation-small-business-uk" style={{ color: '#d97706' }}>
                read our complete guide to missed call automation for UK small businesses.
              </Link>
            </p>

            <h2>Is Automated Booking Right for Your Trade?</h2>
            <p>
              If you&apos;re currently booking jobs via phone calls, WhatsApp messages, or scribbled notes, then yes — automated booking will save you time, reduce missed opportunities, and make your business look more professional to potential customers.
            </p>
            <p>
              The businesses that benefit most are those where:
            </p>
            <ul>
              <li>The first step is always a visit or consultation (rather than a same-day job)</li>
              <li>Lead volume is high enough that manual booking becomes a bottleneck</li>
              <li>The business owner is often unavailable during the day</li>
              <li>Response speed matters competitively (kitchen fitters, roofers, estate agents)</li>
            </ul>
            <p>
              If that sounds like you, setup takes less than 48 hours and your first month is free. There&apos;s no technical knowledge needed on your part.
            </p>
            <p>
              For advice on how to handle the missed calls that trigger the booking process,{' '}
              <Link href="/articles/how-to-reply-to-missed-calls-automatically" style={{ color: '#d97706' }}>
                read our guide on how to reply to missed calls automatically.
              </Link>
            </p>

            <h2>How to See It in Action</h2>
            <p>
              The best way to understand automated booking is to experience the booking flow yourself. When you book a demo with Vexlo, you go through the exact same process your customers would — pick a time, fill in your details, receive a confirmation.
            </p>
            <p>
              Then on the call, we show you exactly how your version would look — customised to your trade, your calendar, and your customers.
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
              { href: '/articles/online-booking-system-builders-uk', label: 'Online Booking for Builders UK' },
              { href: '/articles/ai-appointment-booking-landscapers-gardeners', label: 'AI Booking for Landscapers & Gardeners' },
              { href: '/articles/automated-follow-up-after-missed-call', label: 'Automated Follow-Up After a Missed Call' },
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
            Fill your diary{' '}
            <span style={{ color: '#d97706' }}>automatically.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free 15-minute demo and see how Vexlo captures your missed calls and books them straight into your calendar — while you&apos;re on the job.
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

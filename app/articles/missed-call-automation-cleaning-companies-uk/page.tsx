import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Missed Call Automation for Cleaning Companies UK: Fill Your Schedule Automatically | Vexlo',
  description: 'Cleaning companies lose recurring contracts every week to missed calls. Learn how automated text back and booking fills your schedule while your team is out cleaning.',
  keywords: [
    'missed call automation cleaning companies UK',
    'cleaning business missed calls',
    'cleaning company automated booking UK',
    'domestic cleaning lead capture automation',
    'cleaning business growth UK automation',
    'missed call text back cleaning business',
    'commercial cleaning missed call solution',
  ],
  alternates: { canonical: `${siteUrl}/articles/missed-call-automation-cleaning-companies-uk` },
  openGraph: {
    title: 'Missed Call Automation for Cleaning Companies UK: Fill Your Schedule Automatically',
    description: 'Cleaning companies lose recurring contracts every week to missed calls. Learn how automation fills your schedule automatically.',
    url: `${siteUrl}/articles/missed-call-automation-cleaning-companies-uk`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Missed Call Automation Cleaning Companies UK' }],
  },
}

export default function CleaningCompaniesMissedCallArticle() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <section className="pt-36 pb-10 px-6 md:px-10 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at center top, rgba(217,119,6,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/articles" className="text-xs" style={{ color: '#555' }}>← All Articles</Link>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-4" style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706' }}>
            Small Business UK
          </span>
          <h1 className="font-display text-white mb-6 mt-2" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: 1.05, letterSpacing: '0.02em' }}>
            Missed Call Automation for Cleaning Companies: Fill Your Schedule Automatically
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#888' }}>7 min read · Published by Vexlo</p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-article">

            <p>
              Running a cleaning business means your team is always out cleaning. That's exactly how it should be — but it creates a persistent problem: who's answering the phone when a new customer calls?
            </p>
            <p>
              Most small cleaning companies don't have a dedicated office person. The owner manages operations while also doing cleans. Calls come in during the day, go unanswered, and potential new customers — who represent months or years of recurring revenue — simply move on to the next cleaning company they find online.
            </p>

            <h2>The Recurring Revenue Problem with Missed Cleaning Calls</h2>
            <p>
              Cleaning is one of the highest lifetime-value services in the small business world. A domestic cleaning customer who books a fortnightly clean at £80 per session is worth approximately £2,080 per year — and many customers stay for years once they find a cleaner they trust.
            </p>
            <p>
              A commercial cleaning contract adds even more. An office clean twice per week at £150 per visit is worth £15,600 per year. Losing that enquiry to a missed call doesn't cost you £150. It costs you the entire contract value over its lifetime.
            </p>
            <p>
              This is why missed call automation delivers such strong ROI for cleaning companies. You're not just recovering one-off jobs — you're recovering recurring, high-lifetime-value customers.
            </p>

            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <div className="text-2xl mb-3">✨</div>
              <p className="font-bold text-sm mb-1" style={{ color: '#fff' }}>The lifetime value calculation for cleaning</p>
              <p className="text-sm" style={{ color: '#888' }}>
                A domestic customer who stays for 3 years at £80/fortnight = £6,240 in revenue. A commercial customer on a weekly contract at £200/clean who stays 2 years = £20,800. Every missed enquiry call isn't just a lost job — it's potentially thousands in recurring revenue walking out the door.
              </p>
            </div>

            <h2>When Cleaning Companies Miss the Most Calls</h2>
            <p>
              The pattern is consistent across cleaning businesses: calls come in during working hours (8am–5pm), and that's exactly when the owner and team are out cleaning. The peak enquiry hours — typically 9–11am and 2–4pm — are the same hours when every operative is on a job.
            </p>
            <p>
              Most cleaning business owners try to address this by checking voicemails between jobs and calling back when they can. But by then, the customer has often already booked with another company. Particularly for domestic cleaning, customers searching online are frequently calling multiple businesses simultaneously — and the first to respond professionally wins the appointment.
            </p>

            <h2>How Automated Text Back Works for Cleaning Businesses</h2>
            <p>
              When a customer calls your cleaning business and doesn't get through, Vexlo sends them an automated SMS within 4 seconds of the missed call. The message acknowledges their call, sounds professional and personal, and gives them a way to continue the conversation without waiting.
            </p>
            <p>
              For a cleaning company, that message might be:
            </p>
            <div
              className="my-6 p-5 rounded-lg text-sm leading-relaxed"
              style={{ background: '#1a1a1a', border: '1px solid #333', color: '#ccc', fontStyle: 'italic' }}
            >
              "Hi, thanks for calling [Business Name] — we're out cleaning right now but we'd love to help. Click here to book a free quote, or reply to this message and we'll call you back shortly."
            </div>
            <p>
              The customer is still on their phone. They click the link, choose a time for a quote call, and it appears in your calendar. You call them at the right time, already knowing they've enquired — and you're starting from a position of responsiveness and professionalism.
            </p>

            <h2>Automated Booking for Quote Calls and Assessments</h2>
            <p>
              Cleaning businesses that add an automated booking system to their text back experience a significant shift in how their sales process works. Instead of a phone tag cycle that can take days, customers self-schedule quote calls or home assessments at a time that suits them.
            </p>
            <p>
              This removes the friction that causes leads to drop out. A customer who's ready to book right now — when they're searching — can complete the first step of the process without speaking to anyone. By the time you call them back, they're already committed to the conversation.
            </p>

            <h2>Handling the Enquiry Volume When You're Growing</h2>
            <p>
              Growing cleaning businesses face a specific challenge: the better you are at getting referrals and growing your Google presence, the more enquiries you receive — and the harder it becomes to respond to all of them while maintaining quality of service.
            </p>
            <p>
              This is exactly the problem that automation solves. You don't need to hire an office manager to handle growing enquiry volume. The system captures every lead, responds instantly, and books them into your calendar — regardless of whether you receive 5 enquiries per week or 25.
            </p>
            <p>
              For a full look at how automation helps growing UK small businesses,{' '}
              <Link href="/articles/missed-call-automation-small-business-uk" style={{ color: '#d97706' }}>
                read our complete guide to missed call automation for UK small businesses
              </Link>.
            </p>

            <h2>After the Job: Automated Google Reviews</h2>
            <p>
              One of the most powerful features for cleaning businesses is automated review requests. After a completed clean, the system automatically sends a follow-up message asking for a Google review — at exactly the right moment when the customer is happy with the result.
            </p>
            <p>
              Google reviews are critical for cleaning businesses. Most new customers choose their cleaner based on reviews and proximity. Building a strong, recent review profile is one of the most effective marketing investments a cleaning company can make — and with Vexlo, it happens automatically.
            </p>
            <p>
              To understand why Google review recency matters,{' '}
              <Link href="/articles/google-reviews-recency-vs-quantity" style={{ color: '#d97706' }}>
                read our guide on Google review recency vs quantity
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
              { href: '/articles/missed-call-automation-small-business-uk', label: 'Missed Call Automation for Small Businesses UK' },
              { href: '/articles/automated-appointment-booking-tradespeople', label: 'Automated Appointment Booking' },
              { href: '/articles/automated-google-review-requests-after-job', label: 'Automated Google Review Requests' },
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
            Fill your cleaning schedule.{' '}
            <span style={{ color: '#d97706' }}>Automatically.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free 15-minute demo. We'll show you how Vexlo captures cleaning enquiries and books them in while your team is out working.
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

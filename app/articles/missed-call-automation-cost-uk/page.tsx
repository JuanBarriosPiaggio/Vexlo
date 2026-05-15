import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'What Does Missed Call Automation Cost for UK Small Businesses? | Vexlo',
  description: 'Transparent breakdown of missed call automation pricing for UK small businesses. What you pay, what you get, and what the ROI looks like — with real numbers.',
  keywords: [
    'missed call automation cost UK',
    'missed call text back price UK',
    'how much does missed call automation cost',
    'AI receptionist pricing UK small business',
    'affordable missed call solution UK',
    'missed call automation ROI UK',
    'small business automation pricing UK',
  ],
  alternates: { canonical: `${siteUrl}/articles/missed-call-automation-cost-uk` },
  openGraph: {
    title: 'What Does Missed Call Automation Cost for UK Small Businesses?',
    description: 'Transparent breakdown of missed call automation pricing. What you pay, what you get, and the ROI — with real numbers.',
    url: `${siteUrl}/articles/missed-call-automation-cost-uk`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Missed Call Automation Cost UK' }],
  },
}

export default function AutomationCostArticle() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <section className="pt-36 pb-10 px-6 md:px-10 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(217,119,6,0.06) 0%, transparent 60%)' }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/articles" className="text-xs" style={{ color: '#555' }}>← All Articles</Link>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-4" style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706' }}>
            Small Business UK
          </span>
          <h1 className="font-display text-white mb-6 mt-2" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: 1.05, letterSpacing: '0.02em' }}>
            What Does Missed Call Automation Cost for UK Small Businesses?
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#888' }}>6 min read · Published by Vexlo</p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-article">

            <p>
              Cost is always the first question when a small business owner considers any new tool. And it's the right question to ask. But with missed call automation, cost is only half the picture — because the real question is: what does it cost you <em>not</em> to have it?
            </p>
            <p>
              This guide gives you a transparent breakdown of what missed call automation costs, what you should expect to get for your money, and how to think about ROI in a way that actually makes sense for a UK small business.
            </p>

            <h2>What Does Missed Call Automation Actually Include?</h2>
            <p>
              Before comparing prices, it's worth being clear about what you're buying. Missed call automation platforms vary enormously in scope. At the basic end, you might get a simple auto-SMS response. At the more comprehensive end, you get an integrated system that handles:
            </p>
            <ul>
              <li><strong style={{ color: '#e8e8e8' }}>Instant SMS response</strong> — automated text back to every missed caller within seconds</li>
              <li><strong style={{ color: '#e8e8e8' }}>Automated booking calendar</strong> — customers can self-schedule directly from the SMS</li>
              <li><strong style={{ color: '#e8e8e8' }}>Follow-up sequences</strong> — if a customer doesn't book, the system follows up automatically</li>
              <li><strong style={{ color: '#e8e8e8' }}>Appointment reminders</strong> — reduces no-shows without manual effort</li>
              <li><strong style={{ color: '#e8e8e8' }}>Review request automation</strong> — automatically asks for Google reviews after completed jobs</li>
            </ul>
            <p>
              The cost varies depending on which of these you're getting. A basic SMS auto-reply tool will cost less — but it also does less. An integrated platform like Vexlo that handles the full customer journey is a different investment with a different ROI.
            </p>

            <h2>Missed Call Automation Pricing in the UK</h2>
            <p>
              Here's a realistic overview of what you can expect to pay for missed call automation in the UK:
            </p>

            <div
              className="my-8 p-6 rounded-xl"
              style={{ background: '#111111', border: '1px solid #2a2a2a' }}
            >
              <p className="font-bold text-sm mb-4" style={{ color: '#fff' }}>Pricing tiers (approximate UK market rates)</p>
              <div className="space-y-4 text-sm" style={{ color: '#888' }}>
                <div>
                  <p className="font-bold" style={{ color: '#aaa' }}>Basic SMS auto-reply tools</p>
                  <p>£20–£50/month. Simple trigger-based SMS. No booking, no follow-up, limited customisation. Suitable for very small operations with simple needs.</p>
                </div>
                <div>
                  <p className="font-bold" style={{ color: '#aaa' }}>Mid-tier automation platforms</p>
                  <p>£80–£150/month. SMS text back plus basic booking integration. Some follow-up capability. More suitable for established trades businesses.</p>
                </div>
                <div>
                  <p className="font-bold" style={{ color: '#aaa' }}>Full automation suites (Vexlo and similar)</p>
                  <p>£97–£250/month. Complete system: instant text back, automated booking, follow-up sequences, reminder messages, review automation. Full setup included.</p>
                </div>
              </div>
            </div>

            <h2>The Hidden Costs of DIY Solutions</h2>
            <p>
              Some businesses try to build their own missed call automation using free or cheap tools like Zapier, Google Workspace, or basic SMS APIs. On paper, the monthly cost is low — but the hidden costs are significant:
            </p>
            <ul>
              <li><strong style={{ color: '#e8e8e8' }}>Setup time:</strong> Building a reliable automation that works consistently can take 20–40 hours. That's time you're not spending on the business.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Maintenance:</strong> Automation tools break. APIs change. Integrations fail. DIY systems require ongoing maintenance.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Quality:</strong> A poorly written or generic automated SMS can actively damage your reputation. If it sounds like a robot, it might cost you the lead.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Missing features:</strong> Free tools rarely include booking calendars, reminder sequences, or review automation.</li>
            </ul>

            <h2>How to Calculate ROI for Your Business</h2>
            <p>
              The ROI calculation for missed call automation is more straightforward than most business investments. You need three numbers:
            </p>
            <ul>
              <li>How many calls do you miss per week?</li>
              <li>What percentage are genuine enquiries?</li>
              <li>What's your average job value?</li>
            </ul>
            <p>
              A roofer missing 6 calls per week, with 4 genuine enquiries, converting 1 in 3 at an average job value of £3,500 is potentially missing £4,667 per week in revenue. At £150/month, the automation pays for itself if it recovers just one extra enquiry per month.
            </p>
            <p>
              For a detailed breakdown with numbers specific to your trade,{' '}
              <Link href="/articles/how-much-are-missed-calls-costing-your-business" style={{ color: '#d97706' }}>
                read our guide: how much are missed calls costing your business?
              </Link>
            </p>

            <h2>What Sets Vexlo Apart on Price</h2>
            <p>
              Vexlo's pricing is built around the value it delivers for UK trades and service businesses. Unlike platforms that charge per message or add fees for features, Vexlo is a flat monthly subscription that includes everything: text back, booking, follow-up, reminders, and review automation.
            </p>
            <p>
              There's no setup fee. Your first month is free. And the system is live within 48 hours of onboarding — so you're not paying for months before you see results.
            </p>
            <p>
              To see exactly what's included and get transparent pricing,{' '}
              <Link href="/pricing" style={{ color: '#d97706' }}>visit our pricing page</Link>.
            </p>

            <h2>The Real Question Isn't "Can I Afford This?"</h2>
            <p>
              For most UK small businesses, the honest question isn't whether they can afford missed call automation. It's whether they can afford to keep operating without it.
            </p>
            <p>
              If your business is growing and you're losing leads because you're too busy to answer the phone, every missed call is a compounding problem. You're simultaneously losing revenue and limiting your growth. Automation doesn't just solve the missed call problem — it removes a ceiling on what your business can achieve.
            </p>
            <p>
              For the full picture on how missed call automation works,{' '}
              <Link href="/articles/missed-call-automation-small-business-uk" style={{ color: '#d97706' }}>
                read our complete guide to missed call automation for UK small businesses
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
              { href: '/articles/how-much-are-missed-calls-costing-your-business', label: 'How Much Are Missed Calls Costing You?' },
              { href: '/articles/ai-receptionist-vs-answering-service-uk', label: 'AI Receptionist vs Answering Service' },
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
            See the value for yourself.{' '}
            <span style={{ color: '#d97706' }}>Free demo.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free 15-minute demo. We'll show you exactly how Vexlo works and calculate what it could recover for your business.
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

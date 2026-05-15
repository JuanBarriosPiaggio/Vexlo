import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'What to Say in a Missed Call Text Back: SMS Templates That Actually Work | Vexlo',
  description: 'The words in your missed call text back SMS make or break the conversion. Get proven templates for trades and service businesses — plus the psychology of why they work.',
  keywords: [
    'missed call text back SMS templates UK',
    'what to say in missed call text back',
    'automated SMS reply missed call examples',
    'missed call text back message examples',
    'best SMS auto reply message business UK',
    'missed call text back template trades',
    'automated reply missed call wording',
  ],
  alternates: { canonical: `${siteUrl}/articles/what-to-say-in-missed-call-text-back-sms` },
  openGraph: {
    title: 'What to Say in a Missed Call Text Back: SMS Templates That Actually Work',
    description: 'The words in your missed call text back SMS make or break the conversion. Get proven templates and the psychology behind them.',
    url: `${siteUrl}/articles/what-to-say-in-missed-call-text-back-sms`,
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Missed Call Text Back SMS Templates' }],
  },
}

export default function SMSTemplatesArticle() {
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
            What to Say in a Missed Call Text Back: Templates That Actually Work
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#888' }}>6 min read · Published by Vexlo</p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-article">

            <p>
              The speed of your missed call text back matters. But the words you use matter just as much. A poorly written automated SMS can actually damage your chances of winning the job — sounding robotic, generic, or pushy. A well-crafted message, on the other hand, can feel more professional and personal than many businesses' actual phone manner.
            </p>
            <p>
              This guide gives you the principles behind effective missed call SMS messages, real templates for common trades and service businesses, and the psychology of why some messages convert and others don't.
            </p>

            <h2>The 4 Elements of a Great Missed Call Text Back</h2>
            <p>
              Every effective missed call text back SMS should contain four elements — and nothing more. Brevity matters because the message needs to be read and acted on within seconds.
            </p>

            <h3>1. Acknowledge the Missed Call</h3>
            <p>
              The customer needs to know immediately that this message is in response to their call — not a marketing SMS or spam. Start with a direct acknowledgement: "Sorry I missed your call" or "Thanks for calling [Business Name]."
            </p>

            <h3>2. Give a Human Reason</h3>
            <p>
              "I'm out on a job right now" or "I'm with a customer" immediately explains why you couldn't answer and positions you as busy and in-demand — not absent or unreliable. This transforms a missed call from a negative into a positive signal about your business.
            </p>

            <h3>3. Provide a Clear Next Step</h3>
            <p>
              A booking link, a reply prompt, or a specific instruction. Don't leave the customer wondering what to do. Make the action frictionless: "Click here to book a time" or "Reply with your question and I'll get back to you."
            </p>

            <h3>4. Keep It Short</h3>
            <p>
              Under 160 characters if possible, certainly under 320. The customer is on their phone, they were just mid-action when they called. They will not read a paragraph. Four sentences maximum.
            </p>

            <h2>Trade-Specific SMS Templates</h2>
            <p>
              Here are ready-to-use templates for common UK trades. Each is written to sound personal, professional, and to drive action.
            </p>

            <p className="font-bold text-sm mt-6 mb-2" style={{ color: '#aaa' }}>Plumber</p>
            <div className="my-3 p-5 rounded-lg text-sm leading-relaxed" style={{ background: '#1a1a1a', border: '1px solid #333', color: '#ccc', fontStyle: 'italic' }}>
              "Hi, sorry I missed your call — I'm out on a job right now. If it's urgent, click here to book an emergency slot or reply to this message and I'll call you back shortly. — [Name]"
            </div>

            <p className="font-bold text-sm mt-6 mb-2" style={{ color: '#aaa' }}>Electrician</p>
            <div className="my-3 p-5 rounded-lg text-sm leading-relaxed" style={{ background: '#1a1a1a', border: '1px solid #333', color: '#ccc', fontStyle: 'italic' }}>
              "Hi, thanks for calling [Business Name] — I'm on a job right now but I want to help. Click here to book a callback at a time that suits you. — [Name]"
            </div>

            <p className="font-bold text-sm mt-6 mb-2" style={{ color: '#aaa' }}>Roofer</p>
            <div className="my-3 p-5 rounded-lg text-sm leading-relaxed" style={{ background: '#1a1a1a', border: '1px solid #333', color: '#ccc', fontStyle: 'italic' }}>
              "Hi, sorry I missed your call — we're up on a roof right now! We'd love to help with your roofing enquiry. Book a free survey here or reply and we'll be in touch soon. — [Name], [Business]"
            </div>

            <p className="font-bold text-sm mt-6 mb-2" style={{ color: '#aaa' }}>HVAC / Heating Engineer</p>
            <div className="my-3 p-5 rounded-lg text-sm leading-relaxed" style={{ background: '#1a1a1a', border: '1px solid #333', color: '#ccc', fontStyle: 'italic' }}>
              "Hi, thanks for calling [Business Name] — I'm with a customer right now. If your heating's out, I want to help fast. Reply with your postcode and issue and I'll prioritise your call. — [Name]"
            </div>

            <p className="font-bold text-sm mt-6 mb-2" style={{ color: '#aaa' }}>Cleaning Company</p>
            <div className="my-3 p-5 rounded-lg text-sm leading-relaxed" style={{ background: '#1a1a1a', border: '1px solid #333', color: '#ccc', fontStyle: 'italic' }}>
              "Hi, thanks for calling [Business Name]! We're out cleaning right now but we'd love to give you a free quote. Click here to book a time or reply and we'll call you right back."
            </div>

            <p className="font-bold text-sm mt-6 mb-2" style={{ color: '#aaa' }}>General Service Business</p>
            <div className="my-3 p-5 rounded-lg text-sm leading-relaxed" style={{ background: '#1a1a1a', border: '1px solid #333', color: '#ccc', fontStyle: 'italic' }}>
              "Hi, sorry we missed your call — we're with a client right now. We'll get back to you very soon, or click here to book a time that works for you. — The [Business Name] Team"
            </div>

            <h2>What NOT to Say</h2>
            <p>
              Equally important is understanding what to avoid. These common mistakes kill conversion rates:
            </p>
            <ul>
              <li><strong style={{ color: '#e8e8e8' }}>Generic openers:</strong> "This is an automated message from [Business Name]" — immediately signals it's not personal. Avoid any phrasing that sounds robotic.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Vague next steps:</strong> "We'll be in touch" gives the customer nothing to do. They'll move on.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Marketing language:</strong> This is not the moment for a sales pitch. Keep it purely about the call and what happens next.</li>
              <li><strong style={{ color: '#e8e8e8' }}>Long messages:</strong> If it requires scrolling, it won't be read fully.</li>
              <li><strong style={{ color: '#e8e8e8' }}>No name:</strong> Signing with your first name makes the message feel personal. Without it, it reads as corporate.</li>
            </ul>

            <h2>Personalise for Your Business</h2>
            <p>
              The templates above are starting points. The best missed call text back messages are customised to your specific business, trade, and the type of customers you serve. At Vexlo, we write your automated message with you during onboarding — matching your voice and ensuring it sounds like it came from you personally.
            </p>
            <p>
              To understand how this fits into the full missed call automation system,{' '}
              <Link href="/articles/how-to-reply-to-missed-calls-automatically" style={{ color: '#d97706' }}>
                read our guide on how to reply to missed calls automatically
              </Link>.
            </p>
            <p>
              Or for a step-by-step on setting up the system,{' '}
              <Link href="/articles/sms-auto-reply-setup-small-business-uk" style={{ color: '#d97706' }}>
                read our SMS auto-reply setup guide for UK small businesses
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
              { href: '/articles/sms-auto-reply-setup-small-business-uk', label: 'SMS Auto-Reply Setup Guide' },
              { href: '/articles/missed-call-text-back-vs-voicemail-which-wins', label: 'Text Back vs Voicemail: Which Wins?' },
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
            We'll write your SMS for you.{' '}
            <span style={{ color: '#d97706' }}>Free demo.</span>
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free 15-minute demo. We'll set up your missed call text back and write the message that converts — all included.
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

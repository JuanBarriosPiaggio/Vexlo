import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'AI Receptionist for Plumbers & Heating Engineers | Never Miss an Emergency Call | Vexlo',
  description:
    "Vexlo's AI receptionist answers emergency plumbing and heating calls 24/7 — capturing every lead while you're on the tools. Missed call text-back and Google review automation for UK plumbers.",
  keywords: [
    'AI receptionist for plumbers',
    'AI phone answering for heating engineers',
    'missed call text back plumbers UK',
    'AI answering service for tradespeople',
    'automated booking plumber UK',
    'CRM for plumbing businesses',
    'Google reviews for plumbers',
    'AI receptionist for gas engineers',
  ],
  openGraph: {
    title: 'AI Receptionist for Plumbers & Heating Engineers | Vexlo',
    description:
      "Stop missing emergency plumbing calls while you're on the job. AI receptionist and missed-call text-back for UK plumbers and heating engineers.",
    url: `${siteUrl}/ai-receptionist-plumbers`,
    images: [{ url: `${siteUrl}/Vexlo_logo.png`, width: 1200, height: 630, alt: 'AI Receptionist for Plumbers' }],
  },
  alternates: { canonical: `${siteUrl}/ai-receptionist-plumbers` },
}

export default function PlumbersPage() {
  return (
    <NichePage
      emoji="🔧"
      badge="AI Receptionist for Plumbers & Heating Engineers"
      headline="Stop Missing Emergency Calls While You're on the Job"
      subheadline="You can't answer the phone when you're under a sink or fitting a boiler. But your customers won't wait — they need someone now. Vexlo's AI receptionist captures every call and every lead, even when both hands are busy."
      painPoints={[
        "You're on a job and a customer with a burst pipe calls — they'll ring the next plumber if you don't answer.",
        "Emergency call-outs are your highest-value jobs, but they require an instant response you can't always give.",
        'Customers searching "emergency plumber near me" expect to speak to someone immediately.',
        "You forget to ask happy customers for Google reviews — so your local ranking stays behind competitors.",
        'Quotes requested over the phone are never followed up consistently.',
      ]}
      leadValue="A boiler installation is worth £2,000–£4,500. An emergency call-out is worth £150–£600. A regular service contract is worth £100–£200 per year per property. Missing just two boiler installs a month costs you £4,000–£9,000 in lost revenue."
      customerJourney={[
        {
          step: 'Customer has an emergency — burst pipe, no heating, leaking radiator — and calls your number',
          detail: 'Your AI receptionist answers instantly, even at midnight, and reassures the customer that help is on the way.',
        },
        {
          step: 'AI captures the job details',
          detail: 'Property address, type of issue, urgency level, and contact details — all logged automatically into your CRM.',
        },
        {
          step: 'You receive an instant notification',
          detail: 'A text or app alert tells you exactly who called and what the issue is, so you can call back in priority order.',
        },
        {
          step: 'If you miss the call entirely, an SMS is sent immediately',
          detail: '"Sorry we missed your call — we can help. Reply here or call back on [number]." Most people reply within minutes.',
        },
        {
          step: 'After the job, a Google review request is sent automatically',
          detail: 'Happy customers get a friendly message asking them to share their experience. Your Google ranking climbs — and more emergency calls come in.',
        },
      ]}
      outcomes={[
        'Every emergency call answered instantly — 24/7',
        'Job details captured automatically while you work',
        'Instant notifications so you can prioritise callbacks',
        'Consistent Google reviews building local search dominance',
        'Zero leads forgotten with an organised CRM pipeline',
        'Fewer missed installs, more booked jobs',
      ]}
      testimonial={{
        quote:
          "I'm a one-man band and I can't be on the phone when I'm working. The AI answers for me, takes the details, and I call back when I'm free. I've had three boiler installs in the last month that I would have missed before. Pays for itself easily.",
        name: 'Dave T.',
        role: 'Sole trader plumber & heating engineer',
        location: 'Birmingham',
      }}
      faq={[
        {
          question: 'Can the AI handle emergency call-outs?',
          answer:
            'Yes. You can configure the AI to treat certain keywords (burst pipe, no heating, flooding) as urgent and follow a specific script — including sending you an immediate alert.',
        },
        {
          question: 'I work alone — is this suitable for a sole trader?',
          answer:
            "Absolutely. Vexlo is designed for sole traders and small teams. You don't need a receptionist — the AI does the job for a fraction of the cost.",
        },
        {
          question: 'Can it handle Gas Safe and boiler service enquiries?',
          answer:
            "Yes. The AI can be trained to answer common questions about Gas Safe registration, annual service costs, and what's covered — and direct customers to book or request a quote.",
        },
        {
          question: 'Will it work out of hours and on weekends?',
          answer:
            "Yes — 24/7, 365 days a year. Emergency plumbing calls don't respect office hours, and neither does Vexlo.",
        },
      ]}
    />
  )
}

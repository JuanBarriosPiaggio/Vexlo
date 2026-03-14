import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'AI Receptionist for Roofing Companies | Never Miss a High-Value Quote | Vexlo',
  description:
    "Vexlo's AI receptionist captures roofing enquiries worth £5,000–£25,000 while your team is on the roof. Missed call text-back, automated lead follow-up, and Google review automation for UK roofers.",
  keywords: [
    'AI receptionist for roofing companies',
    'AI phone answering roofers UK',
    'missed call text back roofing business',
    'lead capture for roofing companies',
    'CRM for roofers UK',
    'automated quotes roofing company',
    'Google reviews for roofers',
    'roofing company marketing automation',
  ],
  openGraph: {
    title: 'AI Receptionist for Roofing Companies | Vexlo',
    description:
      "Your team is on roofs all day. Vexlo's AI captures every high-value enquiry so you never lose a £10,000 job to a missed call.",
    url: `${siteUrl}/ai-receptionist-roofing-companies`,
    images: [{ url: `${siteUrl}/Vexlo_logo.png`, width: 1200, height: 630, alt: 'AI Receptionist for Roofing Companies' }],
  },
  alternates: { canonical: `${siteUrl}/ai-receptionist-roofing-companies` },
}

export default function RoofingCompaniesPage() {
  return (
    <NichePage
      emoji="🏗️"
      badge="AI Receptionist for Roofing Companies"
      headline="Your Team Is on the Roof. Your AI Is on the Phone."
      subheadline="Roofing jobs are high value — and so are roofing leads. When your crew is working, calls go unanswered and potential customers worth £5,000–£25,000 call your competitor instead. Vexlo fixes that."
      painPoints={[
        "You're on a roof all day — important enquiries for new jobs go straight to voicemail.",
        "Customers with urgent roof repairs or leaks need a fast response; if you don't answer, someone else gets the job.",
        'Large commercial or insurance-backed jobs require a prompt, professional initial response.',
        'Quote requests are made, but without a follow-up system, many leads go cold before you get back to them.',
        "You do great work but never ask for reviews — so your Google Business Profile doesn't reflect the quality you deliver.",
      ]}
      leadValue="A domestic re-roof is worth £3,000–£10,000. A flat roof replacement is worth £2,000–£8,000. A commercial roofing contract can be worth £10,000–£50,000+. Missing just one large job a month because of an unanswered call could cost your business £50,000–£100,000 per year."
      customerJourney={[
        {
          step: 'Homeowner has a leak or needs a full re-roof and calls your company',
          detail: "Your AI answers immediately, assesses the urgency, and arranges a survey or quote visit — without you needing to stop work.",
        },
        {
          step: 'Commercial property manager enquires about a flat roof replacement',
          detail: 'The AI captures the scope, property type, and contact details — flagging it as a high-priority lead in your CRM.',
        },
        {
          step: 'Lead details automatically sent to your pipeline',
          detail: 'Name, address, job type, and urgency all logged so your admin team or you can follow up with a fully informed callback.',
        },
        {
          step: 'Missed call text-back sent within seconds',
          detail: '"Hi, we missed your call. We can help with your roofing enquiry — reply here or call us back." Keeps the lead warm.',
        },
        {
          step: 'After job completion, automated review request sent',
          detail: 'Your satisfied customer gets a message asking them to share their experience on Google — building the trust signals that bring in more high-value enquiries.',
        },
      ]}
      outcomes={[
        "High-value enquiries captured even when you're on-site",
        'Urgent repair leads prioritised and notified immediately',
        'Quote requests logged and followed up automatically',
        'Missed call text-back keeps leads from going cold',
        'More Google reviews improving local authority and trust',
        'CRM pipeline giving full visibility of all live opportunities',
      ]}
      testimonial={{
        quote:
          "We do quality work but we're always on the tools — we weren't great at answering the phone. Since Vexlo, every call is covered, every lead is logged, and I've won two large commercial jobs that I know came from the missed-call text-back. The system paid for a year's subscription in one job.",
        name: 'Mark H.',
        role: 'Director, roofing and flat roof specialist',
        location: 'Sheffield',
      }}
      faq={[
        {
          question: 'Can the AI tell the difference between a new job enquiry and an existing customer?',
          answer:
            'Yes. The AI can be configured to handle new enquiries, existing job updates, and warranty/callback requests differently — routing each appropriately.',
        },
        {
          question: 'Can it handle insurance work enquiries?',
          answer:
            'Yes. The AI can ask the right qualifying questions for insurance-funded work — such as whether they have a claim reference number — and ensure you receive the right information upfront.',
        },
        {
          question: 'What if I need to respond urgently to a storm damage call?',
          answer:
            'You can configure urgent keywords to trigger an immediate alert to your mobile, so you can call back storm damage leads within minutes rather than hours.',
        },
        {
          question: 'Is this suitable for a small roofing team of 2–5 people?',
          answer:
            'Absolutely. Vexlo is designed for small and medium roofing businesses where every job matters and every lead counts.',
        },
      ]}
    />
  )
}

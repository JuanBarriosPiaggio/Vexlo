import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'AI Receptionist for Electricians | Never Miss an Emergency Call | Vexlo',
  description:
    "Electrical emergencies won't wait. Vexlo's AI texts back every missed call in seconds, books the job, and chases Google reviews — so you capture every lead even when you're on site.",
  keywords: [
    'AI receptionist for electricians UK',
    'missed call text back electrician',
    'automated booking electrician',
    'lead capture electrical contractor',
    'AI phone answering electrician',
    'electrician marketing automation UK',
    'Google reviews electrician',
    'emergency electrician call handling',
  ],
  openGraph: {
    title: 'AI Receptionist for Electricians | Vexlo',
    description: "Electrical emergencies don't wait. Vexlo texts back every missed call in 4 seconds — even when you're on the tools.",
    url: `${siteUrl}/ai-receptionist-electricians`,
    images: [{ url: `${siteUrl}/Vexlo_logo.png`, width: 1200, height: 630, alt: 'AI Receptionist for Electricians' }],
  },
  alternates: { canonical: `${siteUrl}/ai-receptionist-electricians` },
}

export default function ElectriciansPage() {
  return (
    <NichePage
      emoji="⚡"
      badge="AI Receptionist for Electricians"
      headline="Hands Full. Phone Ringing. AI's Got It."
      subheadline="Whether it's a consumer unit replacement, emergency fault, or full rewire enquiry — if you don't reply fast, the job goes to the next electrician on Google. Vexlo responds in 4 seconds, 24/7."
      painPoints={[
        "You're mid-job and can't answer the phone — emergency calls from new customers go to a competitor.",
        'Electrical fault enquiries are urgent — if you take 20 minutes to call back, the customer has already moved on.',
        "Evening and weekend call-outs are your most profitable jobs, but your phone is often off when they're needed most.",
        "You've finished a rewire or consumer unit replacement but you never follow up to ask for a Google review.",
        'Quoting for larger jobs takes time — small missed-call leads pile up and go cold before you get to them.',
      ]}
      leadValue="A consumer unit replacement is worth £400–£900. A full rewire is worth £3,000–£8,000. An EICR inspection is £150–£300. Emergency call-outs are £100–£300/hour. Capturing just 2–3 extra jobs per week adds £20,000–£50,000+ to your annual revenue."
      customerJourney={[
        {
          step: 'Customer has an electrical fault and calls the first number on Google',
          detail: "That's you — but you're on-site. The AI detects the missed call and sends a professional SMS within 4 seconds, keeping the lead before they scroll further.",
        },
        {
          step: 'AI qualifies the urgency of the job',
          detail: 'Emergency? Routine? New installation? The AI can ask qualifying questions so you know exactly what you\'re dealing with before you call back.',
        },
        {
          step: 'Lead books directly into your calendar',
          detail: 'Non-emergency jobs self-book a site visit or quote. Emergency alerts are flagged to your phone immediately so you can respond within minutes.',
        },
        {
          step: 'Automated follow-up on unbooked leads',
          detail: 'If a quote request doesn\'t convert immediately, the system follows up the next day — keeping your pipeline warm without any manual effort.',
        },
        {
          step: 'Review request sent automatically after job completion',
          detail: 'Your customer gets a one-tap link to your Google Business Profile. Consistent reviews put you at the top of local search — where the next job is already searching.',
        },
      ]}
      outcomes={[
        'Emergency leads captured even when you\'re on-site',
        'After-hours and weekend calls handled automatically',
        'Urgent jobs flagged to your phone immediately',
        'Quote requests booked without back-and-forth',
        'Google review count growing on autopilot',
        'Full lead pipeline visibility in one dashboard',
      ]}
      testimonial={{
        quote: "I'm a one-man band and I physically can't answer every call while I'm working. Vexlo changed that — every missed call gets a text back, I get an alert for urgent jobs, and the routine quote requests book themselves in. My Google reviews have gone from 8 to 47 in four months. The leads I was losing before were costing me a fortune.",
        name: 'Lee P.',
        role: 'Self-employed electrician, domestic & commercial',
        location: 'Birmingham',
      }}
      faq={[
        {
          question: 'Can the AI flag genuine electrical emergencies?',
          answer: "Yes. You can configure keywords like 'no power', 'burning smell', 'sparks', or 'electric shock' to trigger an immediate high-priority alert to your mobile — so you can call back within minutes.",
        },
        {
          question: 'I work across multiple trades — can the AI handle general enquiries too?',
          answer: 'Absolutely. The AI can handle any type of enquiry, route different job types to different calendars or team members, and customise responses by service.',
        },
        {
          question: 'Does it work for NICEIC/NAPIT registered businesses?',
          answer: 'Yes — it works for any type of electrical contractor regardless of certification scheme. The messages are fully customisable to include your registration and credentials.',
        },
        {
          question: 'How does the review request know when a job is complete?',
          answer: "You can trigger review requests manually via the dashboard, or we can set up automatic triggers based on invoice status or a scheduled delay after the booking date.",
        },
      ]}
    />
  )
}

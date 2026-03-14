import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'AI Receptionist for Cleaning Companies | Never Miss a Booking | Vexlo',
  description:
    "Vexlo's AI receptionist answers every call for your cleaning business 24/7 — booking cleans, handling enquiries, and sending Google review requests automatically. Stop losing customers to missed calls.",
  keywords: [
    'AI receptionist for cleaning companies',
    'AI phone answering for cleaners',
    'missed call text back cleaning business',
    'automated booking for cleaning companies UK',
    'Google reviews for cleaning companies',
    'CRM for cleaning businesses',
    'AI answering service cleaning UK',
  ],
  openGraph: {
    title: 'AI Receptionist for Cleaning Companies | Vexlo',
    description:
      'Stop losing cleaning bookings to missed calls. AI receptionist, missed-call text-back, and Google review automation for UK cleaning businesses.',
    url: `${siteUrl}/ai-receptionist-cleaning-companies`,
    images: [{ url: `${siteUrl}/Vexlo_logo.png`, width: 1200, height: 630, alt: 'AI Receptionist for Cleaning Companies' }],
  },
  alternates: { canonical: `${siteUrl}/ai-receptionist-cleaning-companies` },
}

export default function CleaningCompaniesPage() {
  return (
    <NichePage
      emoji="🧹"
      badge="AI Receptionist for Cleaning Companies"
      headline="Never Miss a Cleaning Booking Again"
      subheadline="Your staff are on jobs all day — which means calls go to voicemail and customers book your competitor instead. Vexlo's AI receptionist answers every call, books every appointment, and builds your Google reviews automatically."
      painPoints={[
        "Staff are cleaning all day and can't answer the phone — calls go unanswered for hours.",
        'Potential clients ring once, get no answer, and book the next cleaner they find on Google.',
        "You rely on word of mouth but rarely ask for Google reviews — so your local ranking stays low.",
        "Quoting the same prices and availability questions eats up time you don't have.",
        "No system to follow up with leads who enquired but didn't commit.",
      ]}
      leadValue="A regular domestic cleaning client is worth £150–£400 per month. A commercial cleaning contract can be worth £500–£3,000 per month. A single missed call — if it's the right customer — could cost you £1,800–£36,000 over the life of that contract."
      customerJourney={[
        {
          step: 'Customer searches "cleaning company near me" and calls your number',
          detail: 'Your AI receptionist answers instantly with your business name, even at 8pm on a Sunday.',
        },
        {
          step: 'AI handles the enquiry professionally',
          detail: 'It answers common questions about pricing, frequency, and availability — and books the initial consultation or first clean.',
        },
        {
          step: 'Lead is saved to your CRM automatically',
          detail: 'Name, number, address, and job requirements all logged — so nothing is forgotten.',
        },
        {
          step: 'Appointment reminder sent the day before',
          detail: 'Automated SMS reminder reduces no-shows and confirms the booking.',
        },
        {
          step: 'After the clean, a Google review request is sent',
          detail: 'An SMS asks the customer to rate their experience. More 5-star reviews means higher Google rankings and more inbound calls.',
        },
      ]}
      outcomes={[
        'Zero missed calls — every enquiry answered 24/7',
        'More regular clients booked without manual follow-up',
        'Consistent stream of Google reviews improving local search ranking',
        'Less time spent answering repetitive questions',
        'All leads tracked in one simple CRM dashboard',
        'Automated appointment reminders reducing no-shows',
      ]}
      testimonial={{
        quote:
          'I used to lose 5–6 bookings a week because I was on jobs when people called. Now the AI takes the call, books them in, and even asks for a review after. My Google rating went from 3.8 to 4.7 in two months.',
        name: 'Sarah M.',
        role: 'Owner, residential cleaning company',
        location: 'Manchester',
      }}
      faq={[
        {
          question: 'Can the AI book recurring cleaning appointments?',
          answer:
            'Yes. The AI can explain your cleaning frequencies (weekly, fortnightly, monthly) and direct customers to book via your calendar or take their details for a callback to arrange the schedule.',
        },
        {
          question: "What happens if a customer calls when I'm with a client?",
          answer:
            'The AI answers immediately. If you prefer, it can also take a message and notify you — so you can call back at a convenient time with full context of the enquiry.',
        },
        {
          question: 'Will the Google review requests feel spammy to customers?',
          answer:
            'No. The messages are personalised, friendly, and sent at the right time — shortly after a job is completed. Most customers are happy to leave a review when asked promptly and politely.',
        },
        {
          question: 'How quickly can I get set up?',
          answer:
            'Most cleaning businesses are live within 48–72 hours of signing up. We handle all the technical setup — you just provide your business details and preferred tone of voice.',
        },
      ]}
    />
  )
}

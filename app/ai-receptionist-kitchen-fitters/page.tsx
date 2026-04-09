import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'AI Receptionist for Kitchen Fitters | Never Lose a High-Value Enquiry | Vexlo',
  description:
    "Kitchen fitting enquiries are worth £5,000–£25,000. Vexlo's AI texts back every missed call in seconds, books the consultation, and chases Google reviews — so you never lose a job to a slow response.",
  keywords: [
    'AI receptionist for kitchen fitters',
    'missed call text back kitchen fitting',
    'automated booking kitchen installer UK',
    'lead capture kitchen fitter',
    'AI phone answering kitchen fitters',
    'Google reviews kitchen fitting business',
    'kitchen fitter marketing automation',
    'missed call automation UK trades',
  ],
  openGraph: {
    title: 'AI Receptionist for Kitchen Fitters | Vexlo',
    description: "Kitchen enquiries are high value — if you don't respond fast, they book someone else. Vexlo responds in 4 seconds.",
    url: `${siteUrl}/ai-receptionist-kitchen-fitters`,
    images: [{ url: `${siteUrl}/Vexlo_logo.png`, width: 1200, height: 630, alt: 'AI Receptionist for Kitchen Fitters' }],
  },
  alternates: { canonical: `${siteUrl}/ai-receptionist-kitchen-fitters` },
}

export default function KitchenFittersPage() {
  return (
    <NichePage
      emoji="🍳"
      badge="AI Receptionist for Kitchen Fitters"
      headline="Your Next £15,000 Kitchen Job Is Calling. Don't Miss It."
      subheadline="Kitchen fitting enquiries are high intent and high value. If you don't reply within minutes, they've already booked someone else. Vexlo texts back every missed call in 4 seconds — 24/7."
      painPoints={[
        "You're fitting a kitchen and can't stop to answer the phone — but that caller just found your competitor instead.",
        'Kitchen enquiries are often emotionally charged (renovation stress) — a slow response kills the deal before it starts.',
        'Potential customers looking for kitchen fitters rarely leave voicemails — they just move on to the next number.',
        'You rely on word of mouth but rarely follow up after a completed job to ask for a Google review.',
        'Weekend and evening enquiries go completely unanswered when your phone is off.',
      ]}
      leadValue="A mid-range kitchen installation is worth £8,000–£15,000. A high-end kitchen can reach £25,000–£50,000+. Missing just two enquiries a month because you were on-site could cost your business £200,000+ per year in lost revenue."
      customerJourney={[
        {
          step: 'Homeowner searches for kitchen fitters and calls your number',
          detail: 'The AI detects the missed call and sends a personalised SMS within 4 seconds — before they have time to scroll to the next result.',
        },
        {
          step: 'AI text-back engages the lead immediately',
          detail: '"Hi, sorry we missed your call — we\'d love to help with your kitchen project. Click here to book a free design consultation." Lead stays warm.',
        },
        {
          step: 'Lead self-books a consultation from your live calendar',
          detail: 'No phone tag, no back-and-forth. They pick a time, you get an instant notification, the job is in your diary.',
        },
        {
          step: 'Automated follow-up if they don\'t book',
          detail: 'If the lead doesn\'t book immediately, the system sends a gentle follow-up the next day — keeping your pipeline active without any effort.',
        },
        {
          step: 'After installation, automated Google review request sent',
          detail: 'Your happy customer gets a message asking for a review. One tap to your Google page. More reviews = higher ranking = more inbound enquiries.',
        },
      ]}
      outcomes={[
        'Every missed call gets a response within 4 seconds',
        'Weekend and evening enquiries captured automatically',
        'Consultation bookings happening without picking up the phone',
        'High-value leads never go cold again',
        'Consistent Google reviews building your online reputation',
        'Full visibility of your lead pipeline in one dashboard',
      ]}
      testimonial={{
        quote: "We fit high-end kitchens and every job is worth serious money. I was losing enquiries simply because I was always on-site. Since Vexlo, every call gets a text back immediately, I get a notification, and we book the site visit automatically. I've closed three jobs in the last two months I know came through the missed-call system.",
        name: 'Chris T.',
        role: 'Owner, bespoke kitchen fitting company',
        location: 'Surrey',
      }}
      faq={[
        {
          question: 'Will the messages sound like they came from me?',
          answer: 'Yes — we write all the messages in your business tone. You review and approve everything before going live. Customers receive a professional, human-sounding response.',
        },
        {
          question: 'What if someone wants to discuss their kitchen design on the call?',
          answer: 'The AI captures their details and books a consultation — you have the full conversation in person or on a scheduled callback, fully briefed on what they need.',
        },
        {
          question: 'Can I set a radius — only respond to local enquiries?',
          answer: 'Yes. You can configure the system to qualify leads by location before booking, so you\'re only following up on jobs within your working area.',
        },
        {
          question: 'How quickly can I get set up?',
          answer: 'Most kitchen fitters are live within 24 hours. We handle the setup, write your messages, and connect everything — you just start receiving booked consultations.',
        },
      ]}
    />
  )
}

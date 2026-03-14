import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'AI Receptionist for Dental Clinics | Appointment Booking Automation | Vexlo',
  description:
    "Vexlo's AI receptionist handles dental appointment bookings, patient enquiries, and Google review requests automatically — freeing your front desk team and reducing missed appointments.",
  keywords: [
    'AI receptionist for dental clinics',
    'dental appointment booking automation',
    'AI phone answering dentist UK',
    'missed call text back dental practice',
    'automated Google reviews dentist',
    'CRM for dental clinics',
    'dental receptionist automation',
    'AI for private dental practice UK',
  ],
  openGraph: {
    title: 'AI Receptionist for Dental Clinics | Vexlo',
    description:
      'Free your dental receptionist from repetitive calls. AI phone answering, appointment reminders, and Google review automation for UK dental practices.',
    url: `${siteUrl}/ai-receptionist-dentists`,
    images: [{ url: `${siteUrl}/Vexlo_logo.png`, width: 1200, height: 630, alt: 'AI Receptionist for Dental Clinics' }],
  },
  alternates: { canonical: `${siteUrl}/ai-receptionist-dentists` },
}

export default function DentalClinicsPage() {
  return (
    <NichePage
      emoji="🦷"
      badge="AI Receptionist for Dental Clinics"
      headline="Free Your Receptionist. Fill Your Chairs."
      subheadline="Your front desk team can only handle one call at a time. During busy periods, patients on hold give up — or worse, register with another practice. Vexlo's AI receptionist handles appointment requests, FAQs, and follow-ups 24 hours a day."
      painPoints={[
        'Patients call during peak hours and are put on hold — many hang up without booking.',
        'Out-of-hours calls for emergency dental appointments go to voicemail and are never returned promptly.',
        'Reception staff spend hours on routine calls about opening times, pricing, and availability.',
        'No-shows waste expensive chair time that could be filled with paying patients.',
        'Patients rarely leave Google reviews unless specifically asked in the right way at the right time.',
      ]}
      leadValue="Each new private patient is worth £500–£3,000+ over their first year in fillings, hygiene appointments, whitening, and orthodontics. A single NHS patient on your list brings consistent long-term revenue. Every missed registration call is a patient lost to a competing practice."
      customerJourney={[
        {
          step: 'New patient searches "dentist near me accepting patients" and calls',
          detail: "Your AI receptionist answers immediately, explains that you're accepting new patients, and collects their details to register them.",
        },
        {
          step: 'Existing patient calls to book a check-up or ask about treatment',
          detail: 'The AI answers common questions about pricing, wait times, and procedures — and books available appointments directly.',
        },
        {
          step: 'Appointment reminder sent 48 hours before',
          detail: "An automated SMS reminds the patient of their appointment time. They can confirm or request to reschedule — reducing no-shows significantly.",
        },
        {
          step: 'Second reminder sent the morning of the appointment',
          detail: 'A final, friendly reminder with your clinic address and any preparation instructions.',
        },
        {
          step: 'After the appointment, an automated review request is sent',
          detail: 'A personalised message asks the patient to share their experience on Google. More 5-star reviews drives more patients to find you first.',
        },
      ]}
      outcomes={[
        'No more patients lost to unanswered calls during peak hours',
        'Out-of-hours appointment requests captured and followed up',
        'Reception team freed to focus on in-practice patient care',
        'Significant reduction in no-shows through automated reminders',
        'Steady increase in Google reviews and local search ranking',
        'All patient enquiries tracked in one organised CRM',
      ]}
      testimonial={{
        quote:
          'Our receptionist was constantly overwhelmed. Patients calling to book were waiting on hold, and we were losing them to other practices. Vexlo now handles most of the booking calls. Our diary is fuller and the team is much less stressed.',
        name: 'Dr. Priya K.',
        role: 'Principal dentist, private dental clinic',
        location: 'Leeds',
      }}
      faq={[
        {
          question: 'Is the AI GDPR compliant for handling patient data?',
          answer:
            "Yes. Vexlo's system is designed with data privacy in mind. We can walk you through the data handling processes and provide a data processing agreement to ensure full GDPR compliance.",
        },
        {
          question: 'Can it handle NHS and private appointment requests differently?',
          answer:
            'Absolutely. The AI can be configured to follow different scripts for NHS and private patients — including separate availability, pricing information, and registration steps.',
        },
        {
          question: 'What about emergency dental appointments?',
          answer:
            'The AI can be trained to recognise emergency dental keywords and follow a specific protocol — including alerting your on-call dentist and providing the patient with appropriate next steps.',
        },
        {
          question: 'Will patients know they\'re speaking to an AI?',
          answer:
            'The AI sounds natural and professional, but we recommend transparency with patients. You can configure it to introduce itself clearly — most patients appreciate the prompt, helpful service regardless.',
        },
      ]}
    />
  )
}

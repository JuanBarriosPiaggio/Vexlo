import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'AI Receptionist for Physio & Wellness Clinics | Never Miss a New Patient | Vexlo',
  description:
    "Patients don't book twice if you miss their call. Vexlo's AI texts back every missed call in seconds, books the appointment, and builds your Google reviews — without extra receptionist time.",
  keywords: [
    'AI receptionist for physiotherapy clinic',
    'AI phone answering wellness clinic UK',
    'missed call text back physio',
    'automated booking physiotherapist',
    'physio clinic marketing automation',
    'Google reviews physiotherapy practice',
    'AI receptionist osteopath UK',
    'wellness clinic appointment booking automation',
  ],
  openGraph: {
    title: 'AI Receptionist for Physio & Wellness Clinics | Vexlo',
    description: "You're with a patient — the next one is calling. Vexlo texts back in 4 seconds and books them in automatically.",
    url: `${siteUrl}/ai-receptionist-physio-wellness`,
    images: [{ url: `${siteUrl}/Vexlo_logo.png`, width: 1200, height: 630, alt: 'AI Receptionist for Physio & Wellness Clinics' }],
  },
  alternates: { canonical: `${siteUrl}/ai-receptionist-physio-wellness` },
}

export default function PhysioWellnessPage() {
  return (
    <NichePage
      emoji="💆"
      badge="AI Receptionist for Physio & Wellness Clinics"
      headline="You're With a Patient. Your Next One Is Calling."
      subheadline="When you're in session, the phone rings and goes to voicemail — and that new patient books with someone else. Vexlo's AI responds in 4 seconds and books them directly into your calendar."
      painPoints={[
        "You're in the middle of a session — new patient calls go to voicemail and are never returned.",
        'Patients in pain want a quick response. A 2-hour callback window means they\'ve already booked elsewhere.',
        'Your receptionist (or you) spend hours a day on phone tag for bookings that could be automated.',
        "After-hours and weekend enquiries are completely missed — some of your most motivated new patients call outside business hours.",
        "You do excellent clinical work but rarely follow up for Google reviews — your online presence doesn't reflect your quality.",
      ]}
      leadValue="An initial physiotherapy assessment is worth £60–£120. A course of treatment is worth £300–£800 per patient. With repeat bookings and referrals, a new patient relationship is worth £500–£2,000+. Missing 5 new patient enquiries per week costs you £2,500–£10,000 in monthly revenue."
      customerJourney={[
        {
          step: 'New patient searches for a physiotherapist and calls your clinic',
          detail: "You're with a patient. The AI detects the missed call and sends a professional SMS in 4 seconds — before they've had time to search for the next clinic.",
        },
        {
          step: 'AI sends a warm, professional text-back',
          detail: '"Hi, sorry we missed your call from [Clinic Name]. We\'d love to help — click here to book your initial assessment." Personalised to your clinic tone.',
        },
        {
          step: 'Patient self-books from your live availability',
          detail: 'They see your real-time calendar and book without any phone tag. You receive an instant notification. No reception time needed.',
        },
        {
          step: 'Automated appointment reminders sent',
          detail: 'No-show rates drop significantly with automated SMS reminders 24 hours before the appointment. Keeps your diary full.',
        },
        {
          step: 'After treatment course, review request sent automatically',
          detail: 'Your recovered patient receives a friendly message with a one-tap link to leave a Google review — building the trust that brings in the next new patient.',
        },
      ]}
      outcomes={[
        'New patient enquiries captured even mid-session',
        'After-hours and weekend bookings handled automatically',
        'No-show rate reduced with automated reminders',
        'Reception time freed from routine booking calls',
        'Consistent Google reviews improving local visibility',
        'Full patient pipeline visible in one dashboard',
      ]}
      testimonial={{
        quote: "I run a small physio practice and was losing new patients simply because I couldn't answer the phone between sessions. Vexlo fixed that overnight. New patients get a text back immediately, they book online, and I get a notification. In the first month I booked 11 new patients I would have missed. The ROI was immediate.",
        name: 'Sarah M.',
        role: 'Owner & Principal Physiotherapist',
        location: 'Manchester',
      }}
      faq={[
        {
          question: 'Can the AI handle different appointment types (initial vs. follow-up)?',
          answer: 'Yes. The system can present different booking options — initial assessments, follow-up sessions, and specific treatment types — and route them to the correct slots in your calendar.',
        },
        {
          question: 'Is this GDPR compliant for patient data?',
          answer: 'Yes. We only capture name, contact details, and basic enquiry information through the booking process. Full patient records remain in your own clinical system.',
        },
        {
          question: 'Can it work alongside my existing booking software?',
          answer: 'We integrate with most major booking platforms. If you use a custom system, we can discuss the best approach during your demo call.',
        },
        {
          question: 'What if a patient has a clinical emergency or urgent concern?',
          answer: 'You can configure urgent keywords to trigger an immediate alert to your mobile, ensuring clinical concerns are escalated appropriately rather than handled purely by automation.',
        },
      ]}
    />
  )
}

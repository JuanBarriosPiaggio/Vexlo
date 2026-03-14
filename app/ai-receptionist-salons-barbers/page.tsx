import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'AI Receptionist for Beauty Salons & Barbers | Automated Appointment Booking | Vexlo',
  description:
    "Vexlo's AI receptionist books appointments for your salon or barbershop 24/7 — so you never miss a booking while you're with a client. Automated reminders and Google review requests included.",
  keywords: [
    'AI receptionist for beauty salons',
    'AI phone answering barbers UK',
    'automated appointment booking salon',
    'missed call text back beauty salon',
    'Google reviews for hair salon',
    'CRM for salons and barbers',
    'AI booking system salon UK',
    'salon appointment reminder automation',
  ],
  openGraph: {
    title: 'AI Receptionist for Beauty Salons & Barbers | Vexlo',
    description:
      "Stop missing appointment calls while you're with a client. AI receptionist, automated booking, and Google review automation for UK salons and barbers.",
    url: `${siteUrl}/ai-receptionist-salons-barbers`,
    images: [{ url: `${siteUrl}/Vexlo_logo.png`, width: 1200, height: 630, alt: 'AI Receptionist for Beauty Salons' }],
  },
  alternates: { canonical: `${siteUrl}/ai-receptionist-salons-barbers` },
}

export default function BeautySalonsPage() {
  return (
    <NichePage
      emoji="✂️"
      badge="AI Receptionist for Beauty Salons & Barbers"
      headline="Never Miss an Appointment Call While You're With a Client"
      subheadline="When you're mid-cut or mid-treatment, you can't answer the phone. But the customer calling doesn't know that — they just know no one answered, and they book somewhere else. Vexlo makes sure every call is answered and every appointment booked."
      painPoints={[
        "You're with a client and can't answer the phone — callers book the salon down the road instead.",
        "Walk-ins and regulars call to ask about availability but get no answer during busy periods.",
        'No-shows waste precious appointment slots that could be filled with paying customers.',
        "You rely on repeat business, but you rarely follow up with clients who haven't been in a while.",
        'Your Google rating is decent, but competitors with more reviews rank higher in local search.',
      ]}
      leadValue="A regular client visiting fortnightly for a cut and colour is worth £1,500–£3,000 per year. A new client who becomes a loyal regular could spend with you for years. Missing one call from a first-time customer who becomes a regular represents thousands in lost lifetime revenue."
      customerJourney={[
        {
          step: 'Customer calls to book a haircut, colour, or treatment',
          detail: "Your AI receptionist answers professionally, checks available slots, and books the appointment — even while you're with another client.",
        },
        {
          step: 'Appointment confirmation sent by SMS',
          detail: 'The customer receives a confirmation text with the date, time, and your salon address.',
        },
        {
          step: 'Reminder sent 24 hours before the appointment',
          detail: 'An automated SMS reminds the client of their booking. They can confirm or request to reschedule — dramatically reducing no-shows.',
        },
        {
          step: 'After the appointment, a review request is sent',
          detail: 'A friendly message thanks them for visiting and asks them to share their experience on Google. More reviews = more new clients finding you first.',
        },
        {
          step: 'Lapsed clients receive a re-engagement message',
          detail: 'Clients who haven\'t booked in 6–8 weeks receive an automated "We miss you" message with an easy link to rebook.',
        },
      ]}
      outcomes={[
        'Appointments booked even during busy treatments',
        'No-shows significantly reduced through automated reminders',
        'Lapsed clients re-engaged automatically',
        'Consistent 5-star Google reviews boosting your local visibility',
        'All bookings and client details in one organised system',
        'Professional first impression — every call answered, every time',
      ]}
      testimonial={{
        quote:
          "I'm a sole stylist and I work alone. I simply couldn't answer the phone and do someone's hair at the same time. Vexlo answers for me, books them in, and sends them a reminder. My no-show rate has dropped massively and I'm filling slots I used to lose.",
        name: 'Emma L.',
        role: 'Owner, independent hair and beauty salon',
        location: 'Brighton',
      }}
      faq={[
        {
          question: 'Can the AI book specific services with specific stylists?',
          answer:
            'Yes. The AI can be configured with your service menu and team members — directing clients to the right stylist or treatment based on their request.',
        },
        {
          question: 'What if I use an online booking system already?',
          answer:
            'Vexlo works alongside your existing booking system. The AI can direct callers to book online or capture their details for a callback if you prefer to handle bookings manually.',
        },
        {
          question: 'Can it handle calls about pricing for specific treatments?',
          answer:
            'Yes. The AI can be trained with your full price list so it can answer pricing questions for cuts, colours, treatments, and any other services you offer.',
        },
        {
          question: 'Will it work for a barbershop as well as a beauty salon?',
          answer:
            'Absolutely. Vexlo works for any appointment-based business. Many of our clients are barbers, beauty therapists, nail technicians, and lash technicians.',
        },
      ]}
    />
  )
}

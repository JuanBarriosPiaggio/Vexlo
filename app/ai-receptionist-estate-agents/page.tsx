import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'AI Receptionist for Estate Agents | Capture Every Property Enquiry | Vexlo',
  description:
    "Vexlo's AI receptionist captures property enquiries 24/7 — from buyers, sellers, and landlords — so your estate agency never misses a valuable lead. Missed call text-back and CRM automation for UK estate agents.",
  keywords: [
    'AI receptionist for estate agents',
    'property enquiry automation UK',
    'AI phone answering estate agency',
    'missed call text back estate agents',
    'CRM for estate agents UK',
    'automated lead capture property',
    'AI answering service letting agents',
    'Google reviews for estate agents',
  ],
  openGraph: {
    title: 'AI Receptionist for Estate Agents | Vexlo',
    description:
      'Every missed property enquiry is a transaction lost. AI receptionist, lead capture, and CRM automation for UK estate and letting agents.',
    url: `${siteUrl}/ai-receptionist-estate-agents`,
    images: [{ url: `${siteUrl}/Vexlo_logo.png`, width: 1200, height: 630, alt: 'AI Receptionist for Estate Agents' }],
  },
  alternates: { canonical: `${siteUrl}/ai-receptionist-estate-agents` },
}

export default function EstateAgentsPage() {
  return (
    <NichePage
      emoji="🏠"
      badge="AI Receptionist for Estate Agents"
      headline="Every Property Enquiry Captured. Every Lead Followed Up."
      subheadline="Property buyers, sellers, and landlords call at all hours. One missed call could be a £250,000 sale or a multi-property landlord. Vexlo ensures every enquiry is captured, every lead followed up, and every client impressed."
      painPoints={[
        "Potential buyers call about a listing after hours and don't leave a voicemail — you never know they called.",
        'Sellers researching agents call multiple agencies at once — the one that answers first usually gets the instruction.',
        'Landlords with multiple properties are high-value clients who expect fast, professional responses.',
        'Viewings are missed or poorly managed without consistent reminder systems.',
        'Google reviews from satisfied buyers and sellers are rarely collected — reducing your online credibility.',
      ]}
      leadValue="A residential sales transaction earns £3,000–£15,000 in agency fees. A property management contract for a portfolio landlord can be worth £5,000–£20,000+ per year. Missing the call from a motivated seller or portfolio landlord could cost your agency five figures."
      customerJourney={[
        {
          step: 'Buyer calls about a listing seen on Rightmove at 9pm',
          detail: 'Your AI receptionist answers, confirms the property details, and books a viewing or takes their contact information for a call back the next morning.',
        },
        {
          step: 'Seller calls to request a valuation',
          detail: 'The AI captures their property address, number of bedrooms, and preferred time for a valuation visit — feeding the details into your CRM pipeline.',
        },
        {
          step: 'Landlord enquires about property management services',
          detail: 'The AI answers questions about your management fees, services included, and arranges a call with your lettings team.',
        },
        {
          step: 'Viewing reminder sent 24 hours before',
          detail: 'Automated SMS confirms the viewing time and property address. Reduces no-shows and impresses buyers with a professional experience.',
        },
        {
          step: 'After completion, review request sent to buyer and seller',
          detail: 'Automated messages to both parties requesting a Google review — building your online reputation in the local market.',
        },
      ]}
      outcomes={[
        'After-hours enquiries captured from buyers and sellers',
        'Valuation requests logged automatically into your CRM',
        'Viewing reminders sent to reduce no-show rates',
        'Landlord leads categorised and followed up in priority order',
        'Consistent Google review collection building local authority',
        'Every lead tracked from first call to completed transaction',
      ]}
      testimonial={{
        quote:
          "We were losing out to other agencies who picked up the phone first. Now when a seller calls out of hours, the AI takes their details for a valuation. We've won three instructions in the last six weeks that I know came from after-hours calls we would have missed.",
        name: 'James R.',
        role: 'Branch manager, independent estate agency',
        location: 'Bristol',
      }}
      faq={[
        {
          question: 'Can the AI handle enquiries for both sales and lettings?',
          answer:
            'Yes. The AI can be configured with separate scripts for sales enquiries, lettings enquiries, property management, and valuations — routing each conversation appropriately.',
        },
        {
          question: 'What about portal leads from Rightmove or Zoopla?',
          answer:
            'Vexlo integrates with your CRM to manage all leads in one place. We can also set up automated follow-up sequences for portal enquiries that come in via email.',
        },
        {
          question: 'Can it handle calls from existing clients checking on their sale?',
          answer:
            'Yes. The AI can be configured to take messages, provide general updates, or direct clients to a specific team member — depending on your preferred workflow.',
        },
        {
          question: 'Is this suitable for independent agencies as well as larger branches?',
          answer:
            'Absolutely. Vexlo is used by sole-agent independents and multi-branch agencies alike. The system scales with your business.',
        },
      ]}
    />
  )
}

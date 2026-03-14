import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'AI Receptionist for Property Maintenance Companies | Tenant Request Automation | Vexlo',
  description:
    "Vexlo's AI receptionist handles tenant maintenance requests, landlord enquiries, and service scheduling automatically — helping UK property maintenance companies respond faster and win more contracts.",
  keywords: [
    'AI receptionist for property maintenance',
    'tenant maintenance request automation',
    'AI phone answering property management',
    'missed call text back maintenance company',
    'CRM for property maintenance UK',
    'automated scheduling property maintenance',
    'Google reviews property maintenance',
    'AI answering service facilities management',
  ],
  openGraph: {
    title: 'AI Receptionist for Property Maintenance Companies | Vexlo',
    description:
      'Handle tenant repair requests, landlord enquiries, and job scheduling automatically. AI receptionist and CRM automation for UK property maintenance businesses.',
    url: `${siteUrl}/ai-receptionist-property-maintenance`,
    images: [{ url: `${siteUrl}/Vexlo_logo.png`, width: 1200, height: 630, alt: 'AI Receptionist for Property Maintenance' }],
  },
  alternates: { canonical: `${siteUrl}/ai-receptionist-property-maintenance` },
}

export default function PropertyMaintenancePage() {
  return (
    <NichePage
      emoji="🏢"
      badge="AI Receptionist for Property Maintenance Companies"
      headline="Handle Every Repair Request. Win More Landlord Contracts."
      subheadline="Tenants need issues fixed fast. Landlords expect professional, responsive contractors. When calls go unanswered, contracts go elsewhere. Vexlo ensures every request is captured, every lead followed up, and every client kept informed."
      painPoints={[
        "Your engineers are on-site and can't answer calls from tenants or new landlord enquiries.",
        'Tenant repair requests received by phone are not always logged consistently — jobs fall through the cracks.',
        "Landlords with large portfolios move quickly — if you don't respond to their initial enquiry fast, they hire someone else.",
        'Scheduling multiple jobs across different properties is complex without a proper system.',
        'You do consistent, reliable work but rarely collect testimonials or Google reviews.',
      ]}
      leadValue="A multi-property landlord contract can be worth £10,000–£50,000+ per year in ongoing maintenance work. A letting agency partnership can provide a steady pipeline of jobs for years. Missing the initial call from a new landlord or managing agent could cost your business tens of thousands."
      customerJourney={[
        {
          step: 'Tenant calls to report a repair — broken boiler, leaking pipe, electrical fault',
          detail: "Your AI receptionist answers, captures the tenant's details, property address, and nature of the fault — immediately logging it as a job in your system.",
        },
        {
          step: 'Job is categorised by urgency',
          detail: 'Emergency repairs (no heating, flooding) are flagged for immediate alert. Routine maintenance is queued and scheduled efficiently.',
        },
        {
          step: 'Landlord or property manager enquires about ongoing maintenance contracts',
          detail: 'The AI captures their portfolio details and requirements — automatically added to your CRM sales pipeline for follow-up.',
        },
        {
          step: 'Appointment confirmation and reminders sent to tenants',
          detail: 'Engineer visit confirmed by SMS with the expected time window. Reduces missed appointments and improves tenant satisfaction.',
        },
        {
          step: 'After job completion, landlord or tenant review request sent',
          detail: 'Automated message requesting a Google review from satisfied clients — building your reputation with letting agencies and private landlords.',
        },
      ]}
      outcomes={[
        'Every tenant repair request logged — nothing falls through the cracks',
        'Emergency jobs flagged and escalated immediately',
        'New landlord enquiries captured and followed up reliably',
        'Engineer appointments confirmed and reminded automatically',
        'Google reviews building trust with letting agencies and landlords',
        'Full CRM visibility of all active jobs and new business pipeline',
      ]}
      testimonial={{
        quote:
          'We manage maintenance for 12 landlords across 60 properties. The volume of calls and requests was overwhelming. Vexlo now handles all the initial calls, logs every job, and sends confirmations to tenants automatically. It\'s transformed how we operate.',
        name: 'Kevin B.',
        role: 'Director, property maintenance and facilities company',
        location: 'London',
      }}
      faq={[
        {
          question: 'Can the AI handle both tenant calls and new business enquiries?',
          answer:
            'Yes. The AI can be configured with different scripts and workflows for tenant repair requests, landlord enquiries, and letting agency partnerships — routing each appropriately.',
        },
        {
          question: 'Can it integrate with our job management or field service software?',
          answer:
            'Vexlo integrates with many popular property management and job scheduling tools. We can discuss your specific software during the demo and confirm compatibility.',
        },
        {
          question: 'What happens with out-of-hours emergency calls?',
          answer:
            'The AI can be configured to follow an emergency protocol outside of business hours — capturing all details and either alerting your on-call engineer or providing the tenant with emergency contact instructions.',
        },
        {
          question: 'Is this suitable for a company managing both residential and commercial properties?',
          answer:
            'Yes. The system can be configured to handle both residential tenant calls and commercial property manager enquiries with appropriate, separate workflows.',
        },
      ]}
    />
  )
}

import type { Metadata } from 'next'
import LeadConnectorBooking from '@/components/LeadConnectorBooking'

export const metadata: Metadata = {
  title: 'Book a Free Demo | Vexlo',
  description:
    "Schedule a free demo with Vexlo. See how AI automation can capture every lead for your trades or clinic business.",
  keywords: ['Vexlo demo', 'book Vexlo', 'AI automation demo UK', 'contact Vexlo'],
  robots: { index: false, follow: false },
}

export default function EnquiryPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <section className="pt-36 pb-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="section-tag">Book a demo</div>
          <h1
            className="font-display text-white mt-2 mb-4"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Let&apos;s talk{' '}
            <span className="font-serif" style={{ color: '#d97706', fontStyle: 'italic' }}>
              automation.
            </span>
          </h1>
          <p className="text-sm leading-relaxed mb-10" style={{ color: '#888' }}>
            Choose a slot below — we&apos;ll walk you through how Vexlo fits your business.
          </p>

          <LeadConnectorBooking instanceId="enquiry-page" />
        </div>
      </section>
    </div>
  )
}

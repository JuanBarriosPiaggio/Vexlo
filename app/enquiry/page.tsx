import type { Metadata } from 'next'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata: Metadata = {
  title: 'Get in Touch — Enquiry | Vexlo',
  description: "Send an enquiry to Vexlo. Tell us about your business and we'll get back to you within 24 hours to discuss AI automation for your trades or clinic.",
  keywords: ['Vexlo enquiry', 'contact Vexlo', 'AI automation enquiry UK'],
  robots: { index: false, follow: false },
}

export default function EnquiryPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <section className="pt-36 pb-24 px-6 md:px-10">
        <div className="max-w-2xl mx-auto">
          <div className="section-tag">Contact Us</div>
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
            Fill in the form and we&apos;ll get back to you within 24 hours. Or{' '}
            <a href="/#book" style={{ color: '#d97706', textDecoration: 'underline' }}>
              book a demo call directly
            </a>{' '}
            if you prefer to talk first.
          </p>

          <EnquiryForm />
        </div>
      </section>
    </div>
  )
}

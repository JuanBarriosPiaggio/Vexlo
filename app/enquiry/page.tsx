import type { Metadata } from 'next'
import EnquiryForm from '@/components/EnquiryForm'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Get Started | Free Business Automation Consultation',
  description: 'Submit an enquiry to learn how Vexlo can automate your business operations. Free consultation for UK SMBs. Get back to you within 24 hours with a tailored automation solution.',
  openGraph: {
    title: 'Get Started | Free Business Automation Consultation - Vexlo',
    description: 'Submit an enquiry to learn how Vexlo can automate your business operations. Free consultation for UK SMBs. Response within 24 hours.',
    url: `${siteUrl}/enquiry`,
    images: [
      {
        url: `${siteUrl}/Vexlo_logo.png`,
        width: 1200,
        height: 630,
        alt: 'Get Started with Vexlo Business Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Started | Free Business Automation Consultation',
    description: 'Submit an enquiry to learn how Vexlo can automate your business operations. Free consultation for UK SMBs.',
    images: [`${siteUrl}/Vexlo_logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/enquiry`,
  },
}

export default function EnquiryPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 relative">
      <section className="py-24 sm:py-32 relative z-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Get Started
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Tell us about your business and automation needs. We&apos;ll get back to you within 24 hours with a tailored solution.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-clean-lg border border-slate-100">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  )
}

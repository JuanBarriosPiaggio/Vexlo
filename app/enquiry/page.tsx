import type { Metadata } from 'next'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata: Metadata = {
  title: 'Get Started - Vexlo Business Automation',
  description: 'Submit an enquiry to learn how Vexlo can automate your business operations. Free consultation for UK SMBs.',
  keywords: 'business automation enquiry, automation consultation UK, get started with automation',
}

export default function EnquiryPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get Started
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Tell us about your business and automation needs. We'll get back to you within 24 hours with a tailored solution.
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  )
}



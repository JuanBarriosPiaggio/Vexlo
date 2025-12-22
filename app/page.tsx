import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Business Automation for UK SMBs | Save Time & Scale Efficiently',
  description: 'Transform your UK SMB with intelligent automation. Reduce manual work, eliminate errors, and scale efficiently. Free consultation available. Trusted by UK businesses.',
  keywords: [
    'business automation UK',
    'SME automation services',
    'workflow automation',
    'automate business processes',
    'UK business automation company',
    'small business automation',
  ],
  openGraph: {
    title: 'Vexlo - Business Automation for UK SMBs | Save Time & Scale Efficiently',
    description: 'Transform your UK SMB with intelligent automation. Reduce manual work, eliminate errors, and scale efficiently. Free consultation available.',
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/Vexlo_logo.png`,
        width: 1200,
        height: 630,
        alt: 'Vexlo - Business Automation for UK SMBs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vexlo - Business Automation for UK SMBs',
    description: 'Transform your UK SMB with intelligent automation. Reduce manual work, eliminate errors, and scale efficiently.',
    images: [`${siteUrl}/Vexlo_logo.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Vexlo - Business Automation for UK SMBs',
            description: 'Transform your UK SMB with intelligent automation. Reduce manual work, eliminate errors, and scale efficiently.',
            url: siteUrl,
            mainEntity: {
              '@type': 'Service',
              name: 'Business Automation Services',
              provider: {
                '@type': 'Organization',
                name: 'Vexlo',
                logo: `${siteUrl}/Vexlo_logo.png`,
              },
              areaServed: {
                '@type': 'Country',
                name: 'United Kingdom',
              },
              serviceType: 'Business Process Automation',
            },
          }),
        }}
      />
      <Hero />
      <Benefits />
      <HowItWorks />
      
      {/* Services Overview */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive automation solutions tailored to your business needs.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="group flex flex-col p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">Sales Automation</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Streamline your sales process with automated lead management, follow-ups, and CRM integration.
              </p>
            </div>
            <div className="group flex flex-col p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">Operations Automation</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Optimise workflows, reduce manual tasks, and improve efficiency across your operations.
              </p>
            </div>
            <div className="group flex flex-col p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">Finance & HR</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Automate invoicing, payroll, reporting, and HR processes to save time and reduce errors.
              </p>
            </div>
          </div>
            <div className="mt-12 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:bg-primary-dark transition-all transform hover:scale-105 hover:-translate-y-1"
            >
              View All Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by UK Businesses
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join growing businesses that have transformed their operations with Vexlo.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                &quot;Vexlo has saved us 15 hours per week by automating our invoicing and reporting processes.&quot;
              </p>
              <p className="text-sm font-semibold text-gray-900">— Small Business Owner</p>
            </div>
            <div className="flex flex-col p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                &quot;The implementation was smooth and the results were immediate. Highly recommend!&quot;
              </p>
              <p className="text-sm font-semibold text-gray-900">— Operations Manager</p>
            </div>
            <div className="flex flex-col p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                &quot;We&apos;ve reduced errors by 90% and can now focus on growth instead of manual tasks.&quot;
              </p>
              <p className="text-sm font-semibold text-gray-900">— Finance Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Automate Your Business?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Get started today with a free consultation. Let&apos;s discuss how we can help streamline your operations.
            </p>
            <div className="mt-10">
              <Link
                href="/enquiry"
                className="group relative rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/50 hover:shadow-xl hover:shadow-accent/60 transition-all transform hover:scale-105 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent inline-flex items-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative">Get Started</span>
                <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}



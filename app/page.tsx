import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
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
            <div className="flex flex-col p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales Automation</h3>
              <p className="text-gray-600 mb-4">
                Streamline your sales process with automated lead management, follow-ups, and CRM integration.
              </p>
            </div>
            <div className="flex flex-col p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Operations Automation</h3>
              <p className="text-gray-600 mb-4">
                Optimise workflows, reduce manual tasks, and improve efficiency across your operations.
              </p>
            </div>
            <div className="flex flex-col p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Finance & HR</h3>
              <p className="text-gray-600 mb-4">
                Automate invoicing, payroll, reporting, and HR processes to save time and reduce errors.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              View All Services
              <ArrowRight size={20} />
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
            <div className="flex flex-col p-6 rounded-lg bg-white border border-gray-200">
              <p className="text-gray-600 mb-4">
                &quot;Vexlo has saved us 15 hours per week by automating our invoicing and reporting processes.&quot;
              </p>
              <p className="text-sm font-semibold text-gray-900">— Small Business Owner</p>
            </div>
            <div className="flex flex-col p-6 rounded-lg bg-white border border-gray-200">
              <p className="text-gray-600 mb-4">
                &quot;The implementation was smooth and the results were immediate. Highly recommend!&quot;
              </p>
              <p className="text-sm font-semibold text-gray-900">— Operations Manager</p>
            </div>
            <div className="flex flex-col p-6 rounded-lg bg-white border border-gray-200">
              <p className="text-gray-600 mb-4">
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
                className="rounded-md bg-accent px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-light transition-all transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}



import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

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
    <main className="min-h-screen bg-background text-white selection:bg-primary selection:text-black overflow-hidden">
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
      <section className="py-24 sm:py-32 relative">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/50 pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Comprehensive automation solutions tailored to your business needs.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: "Sales Automation",
                desc: "Streamline your sales process with automated lead management, follow-ups, and CRM integration."
              },
              {
                title: "Operations Automation",
                desc: "Optimise workflows, reduce manual tasks, and improve efficiency across your operations."
              },
              {
                title: "Finance & HR",
                desc: "Automate invoicing, payroll, reporting, and HR processes to save time and reduce errors."
              }
            ].map((service, i) => (
                <div key={i} className="glass-card group flex flex-col p-8 rounded-2xl hover:border-primary/50 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300">
                    {service.desc}
                  </p>
                </div>
            ))}
          </div>
            <div className="mt-12 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-xl bg-white/5 px-8 py-4 text-base font-semibold text-white border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all transform hover:scale-105 hover:-translate-y-1"
            >
              View All Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by UK Businesses
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Join growing businesses that have transformed their operations with Vexlo.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
               { quote: "Vexlo has saved us 15 hours per week by automating our invoicing and reporting processes.", author: "Small Business Owner" },
               { quote: "The implementation was smooth and the results were immediate. Highly recommend!", author: "Operations Manager" },
               { quote: "We've reduced errors by 90% and can now focus on growth instead of manual tasks.", author: "Finance Director" }
            ].map((testimonial, i) => (
                <div key={i} className="flex flex-col p-8 rounded-2xl bg-surface border border-white/5 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex gap-1 mb-4">
                     {[1,2,3,4,5].map(star => <Star key={star} size={16} className="text-accent fill-accent" />)}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="text-sm font-semibold text-white text-right">— {testimonial.author}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 backdrop-blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-primary/5"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl drop-shadow-lg">
              Ready to Automate Your Business?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Get started today with a free consultation. Let&apos;s discuss how we can help streamline your operations.
            </p>
            <div className="mt-10">
              <Link
                href="/enquiry"
                className="group relative rounded-xl bg-primary px-8 py-4 text-base font-bold text-black shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all transform hover:scale-105 hover:-translate-y-1 inline-flex items-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative">Get Started</span>
                <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

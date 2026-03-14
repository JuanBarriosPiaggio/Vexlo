import type { Metadata } from 'next'
import About from '@/components/About'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'About Vexlo - Meet Your Automation Expert',
  description: 'Learn about Juan, Engineering Manager with 16+ years of experience in business automation. Trusted by UK SMBs to deliver intelligent automation solutions.',
  openGraph: {
    title: 'About Vexlo - Meet Your Automation Expert',
    description: '16+ years of experience transforming businesses through intelligent automation. Trusted by UK SMBs.',
    url: `${siteUrl}/about`,
    images: [
      {
        url: `${siteUrl}/Vexlo_logo.png`,
        width: 1200,
        height: 630,
        alt: 'Vexlo - About',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Vexlo - Meet Your Automation Expert',
    description: '16+ years of experience transforming businesses through intelligent automation.',
    images: [`${siteUrl}/Vexlo_logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
}

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Vexlo',
            description: 'Learn about Juan, Engineering Manager with 16+ years of experience in business automation.',
            url: `${siteUrl}/about`,
            mainEntity: {
              '@type': 'Person',
              name: 'Juan',
              jobTitle: 'Engineering Manager & Automation Expert',
              description: 'Methodical, innovative, and vision-driven Engineering Manager with 16+ years of experience transforming businesses through intelligent automation.',
              knowsAbout: [
                'Business Automation',
                'Workflow Automation',
                'AI and LLM Integration',
                'System Integration',
                'Process Optimization',
              ],
            },
          }),
        }}
      />
      <div className="pt-20">
        <About />

        {/* CTA Section */}
        <section className="py-24 sm:py-32 relative overflow-hidden bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Let&apos;s discuss how my 16+ years of experience can help automate your operations and drive growth.
              </p>
              <div className="mt-10">
                <Link
                  href="/enquiry"
                  className="group relative rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all transform hover:scale-105 hover:-translate-y-1 inline-flex items-center gap-2 overflow-hidden"
                >
                  <span className="relative">Get Started Today</span>
                  <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

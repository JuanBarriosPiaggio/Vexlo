import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import Analytics from '@/components/Analytics'
import Cursor from '@/components/Cursor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vexlo — AI Voice Assistants & Workflow Automation for UK Trades & Clinics',
    template: '%s | Vexlo',
  },
  description: 'Stop losing jobs to voicemail. Vexlo deploys AI voice assistants that text back missed calls in 4 seconds, auto-book appointments, and chase Google reviews — 24/7, no staff needed.',
  keywords: [
    'AI receptionist UK',
    'missed call text back UK',
    'AI phone agent for trades',
    'automated appointment booking UK',
    'Google review automation',
    'business automation for tradespeople',
    'AI for roofers UK',
    'AI for plumbers UK',
    'AI for electricians UK',
    'AI for kitchen fitters',
    'AI for dentists UK',
    'AI for salons and barbers',
    'AI for estate agents',
    'AI for physio clinics',
    'AI for cleaning companies',
    'missed call automation for tradespeople',
    'lead capture automation UK',
    'AI missed call bot UK',
    'first month free AI automation',
  ],
  authors: [{ name: 'Vexlo', url: siteUrl }],
  creator: 'Vexlo',
  publisher: 'Vexlo',
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [{ url: '/Vexlo_logo.png', sizes: 'any' }],
    shortcut: '/Vexlo_logo.png',
    apple: '/Vexlo_logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Vexlo',
    title: 'Vexlo — AI Voice Assistants & Workflow Automation for UK Trades & Clinics',
    description: 'Stop losing jobs to voicemail. AI bot texts back missed calls in 4 seconds, books the job, and chases Google reviews — 24/7.',
    images: [{ url: `${siteUrl}/Vexlo_logo.png`, width: 1200, height: 630, alt: 'Vexlo AI Automation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vexlo — AI Voice Assistants & Workflow Automation',
    description: 'Stop losing jobs to voicemail. AI bot texts back every missed call in 4 seconds.',
    images: [`${siteUrl}/Vexlo_logo.png`],
    creator: '@juan_barrios_p',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: siteUrl },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="canonical" href={siteUrl} />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': `${siteUrl}/#organization`,
              name: 'Vexlo',
              alternateName: 'Vexlo AI Automation',
              url: siteUrl,
              logo: `${siteUrl}/Vexlo_logo.png`,
              description: 'AI voice assistants and workflow automation for UK trades and clinics.',
              address: { '@type': 'PostalAddress', addressCountry: 'GB' },
              areaServed: { '@type': 'Country', name: 'United Kingdom' },
              serviceType: 'AI Automation Services',
              priceRange: '$$',
              offers: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'AI Missed Call Text-Back',
                    description: 'AI bot texts back every missed call within 4 seconds, 24/7.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Automated Appointment Booking',
                    description: 'Self-booking link sent by AI, no back-and-forth needed.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Google Review Automation',
                    description: 'Automatic review requests after every completed job.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <Cursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}

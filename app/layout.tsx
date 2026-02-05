import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import Analytics from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vexlo - AI Voice Assistants & Workflow Automation for UK SMBs',
    template: '%s | Vexlo',
  },
  description: 'Transform your business with AI Voice Assistants and intelligent Workflow Automation. Vexlo helps UK SMBs reduce manual work, handle customer calls 24/7, and scale efficiently.',
  keywords: [
    'AI voice assistants UK',
    'AI phone agents',
    'business workflow automation',
    'workflow automation for small business',
    'AI business agents',
    'automate customer service',
    'UK business automation',
    'SME automation',
    'process automation',
    'Vexlo automation',
  ],
  authors: [{ name: 'Vexlo', url: siteUrl }],
  creator: 'Vexlo',
  publisher: 'Vexlo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/Vexlo_logo.png', sizes: 'any' },
      { url: '/Vexlo_logo.png', type: 'image/png' },
    ],
    shortcut: '/Vexlo_logo.png',
    apple: '/Vexlo_logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Vexlo',
    title: 'Vexlo - AI Voice Assistants & Workflow Automation for UK SMBs',
    description: 'Transform your business with AI Voice Assistants and intelligent Workflow Automation. Reduce manual work and handle customer calls 24/7.',
    images: [
      {
        url: `${siteUrl}/Vexlo_logo.png`,
        width: 1200,
        height: 630,
        alt: 'Vexlo - AI Business Automation',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vexlo - AI Voice Assistants & Workflow Automation',
    description: 'Transform your business with AI Voice Assistants and intelligent Workflow Automation.',
    images: [`${siteUrl}/Vexlo_logo.png`],
    creator: '@juan_barrios_p',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="canonical" href={siteUrl} />
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
              image: `${siteUrl}/Vexlo_logo.png`,
              description: 'AI Voice Assistants and Workflow Automation services for UK small and medium businesses.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'GB',
              },
              areaServed: {
                '@type': 'Country',
                name: 'United Kingdom',
              },
              serviceType: 'AI Automation Services',
              priceRange: '$$',
              sameAs: [],
              offers: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'AI Voice Assistants',
                    description: '24/7 AI phone agents to handle customer inquiries and bookings.'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Workflow Automation',
                    description: 'Streamline business processes and reduce manual tasks.'
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}

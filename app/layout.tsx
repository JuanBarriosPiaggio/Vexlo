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
    default: 'Vexlo - Business Automation for UK SMBs | Save Time & Scale Efficiently',
    template: '%s | Vexlo',
  },
  description: 'Automate your business operations and save time. Vexlo provides intelligent automation solutions for UK small and medium businesses. Streamline workflows, reduce errors, and scale efficiently.',
  keywords: [
    'business automation UK',
    'SME automation',
    'workflow automation for small business',
    'automate business processes UK',
    'UK business automation',
    'small business automation',
    'process automation',
    'workflow automation',
    'business process automation',
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
    title: 'Vexlo - Business Automation for UK SMBs | Save Time & Scale Efficiently',
    description: 'Automate your business operations and save time. Vexlo provides intelligent automation solutions for UK small and medium businesses. Streamline workflows, reduce errors, and scale efficiently.',
    images: [
      {
        url: `${siteUrl}/Vexlo_logo.png`,
        width: 1200,
        height: 630,
        alt: 'Vexlo - Business Automation for UK SMBs',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vexlo - Business Automation for UK SMBs',
    description: 'Automate your business operations and save time. Intelligent automation solutions for UK small and medium businesses.',
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
              alternateName: 'Vexlo Business Automation',
              url: siteUrl,
              logo: `${siteUrl}/Vexlo_logo.png`,
              image: `${siteUrl}/Vexlo_logo.png`,
              description: 'Business automation services for UK small and medium businesses. Automate workflows, reduce errors, and scale efficiently.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'GB',
              },
              areaServed: {
                '@type': 'Country',
                name: 'United Kingdom',
              },
              serviceType: 'Business Automation',
              priceRange: '$$',
              sameAs: [
                // Add social media links when available
              ],
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


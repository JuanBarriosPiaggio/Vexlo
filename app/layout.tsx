import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vexlo - Business Automation for UK SMBs',
  description: 'Automate your business operations and save time. Vexlo provides intelligent automation solutions for UK small and medium businesses.',
  keywords: 'business automation UK, SME automation, workflow automation for small business, automate business processes UK',
  authors: [{ name: 'Vexlo' }],
  icons: {
    icon: '/Vexlo_logo.png',
    shortcut: '/Vexlo_logo.png',
    apple: '/Vexlo_logo.png',
  },
  openGraph: {
    title: 'Vexlo - Business Automation for UK SMBs',
    description: 'Automate your business operations and save time with Vexlo.',
    url: 'https://vexlo.co.uk',
    siteName: 'Vexlo',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/Vexlo_logo.png',
        width: 1200,
        height: 630,
        alt: 'Vexlo Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vexlo - Business Automation for UK SMBs',
    description: 'Automate your business operations and save time with Vexlo.',
    images: ['/Vexlo_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Vexlo',
              description: 'Business automation services for UK SMBs',
              url: 'https://vexlo.co.uk',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'GB',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}


import type { Metadata } from 'next'
import Script from 'next/script'
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
    default: 'Vexlo — Websites That Deliver Leads | Web Design & Automation for UK Small Businesses',
    template: '%s | Vexlo',
  },
  description: 'Vexlo builds SEO-driven websites with quote calculators and booking systems that generate real leads for UK small businesses — plus AI missed call capture, Google review automation, and listings management.',
  keywords: [
    'lead generating website UK',
    'website that generates leads',
    'web design for small business UK',
    'small business website UK',
    'SEO website design UK',
    'website with quote calculator UK',
    'website with booking system UK',
    'local SEO web design',
    'web design for trades UK',
    'web design for cleaning companies UK',
    'web design for service businesses',
    'AI receptionist UK',
    'missed call text back UK',
    'automated appointment booking UK',
    'Google review automation',
    'business listings management UK',
    'lead capture automation UK',
  ],
  authors: [{ name: 'Vexlo', url: siteUrl }],
  creator: 'Vexlo',
  publisher: 'Vexlo',
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [{ url: '/vexlo_logo.png', sizes: 'any' }],
    shortcut: '/vexlo_logo.png',
    apple: '/vexlo_logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Vexlo',
    title: 'Vexlo — Websites That Deliver Leads for UK Small Businesses',
    description: 'SEO-driven websites with quote calculators and booking systems that generate real leads — plus AI that captures every call, booking, and review.',
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Vexlo — Websites That Deliver Leads' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vexlo — Websites That Deliver Leads',
    description: 'SEO-driven websites with quote calculators and booking systems that generate real leads for UK small businesses.',
    images: [`${siteUrl}/vexlo_logo.png`],
    creator: '@juan_barrios_p',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/vexlo_logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/vexlo_logo.png" />
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
              alternateName: 'Vexlo Web Design & Automation',
              url: siteUrl,
              logo: `${siteUrl}/vexlo_logo.png`,
              description: 'Lead-generating website design, SEO, and business automation for UK small businesses.',
              address: { '@type': 'PostalAddress', addressCountry: 'GB' },
              areaServed: { '@type': 'Country', name: 'United Kingdom' },
              serviceType: 'Web Design & Business Automation Services',
              priceRange: '$$',
              offers: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Lead Generating Website Design',
                    description: 'SEO-driven websites with quote calculators, booking systems and local citations, engineered to generate leads.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Business Listings Management',
                    description: 'Consistent business data across 55+ high-authority UK directories for stronger local SEO.',
                  },
                },
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
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1536536741481035');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1536536741481035&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Script
          id="leadconnector-form-embed"
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="afterInteractive"
        />
        <Script
          id="leadconnector-loader"
          src="https://widgets.leadconnectorhq.com/loader.js"
          strategy="afterInteractive"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69e3a18206d5d5421be1022e"
        />
      </body>
    </html>
  )
}

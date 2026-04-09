import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Privacy Policy | Vexlo AI Automation',
  description: 'Privacy policy for Vexlo AI automation services. GDPR compliant data handling for UK businesses.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${siteUrl}/privacy` },
}

export default function PrivacyPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <section className="pt-36 pb-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="section-tag">Legal</div>
          <h1
            className="font-display text-white mt-2 mb-4"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Privacy Policy
          </h1>
          <p className="text-xs mb-12" style={{ color: '#888' }}>
            Last updated:{' '}
            {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-10">
            {[
              {
                title: 'Introduction',
                content: 'Vexlo ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
              },
              {
                title: 'Information We Collect',
                content: 'We collect information that you provide directly to us, including:',
                list: [
                  'Name and contact information (email, phone number)',
                  'Company name and details',
                  'Business information (company size, revenue)',
                  'Automation needs and requirements',
                ],
              },
              {
                title: 'How We Use Your Information',
                content: 'We use the information we collect to:',
                list: [
                  'Respond to your enquiries and provide our services',
                  'Improve our website and services',
                  'Send you updates and marketing communications (with your consent)',
                  'Comply with legal obligations',
                ],
              },
              {
                title: 'Data Storage and Security',
                content: 'We store your data securely using industry-standard security measures. We take appropriate technical and organisational measures to protect your personal information.',
              },
              {
                title: 'Your Rights (UK GDPR)',
                content: 'Under UK GDPR, you have the right to:',
                list: [
                  'Access your personal data',
                  'Rectify inaccurate data',
                  'Request erasure of your data',
                  'Object to processing of your data',
                  'Data portability',
                ],
              },
              {
                title: 'Cookies',
                content: 'We use cookies to improve your experience on our website. You can control cookie preferences through the banner at the bottom of the page.',
              },
              {
                title: 'Contact Us',
                content: 'If you have any questions about this Privacy Policy, please contact us at hello@mail.vexlo.co.uk',
              },
            ].map((section, i) => (
              <div key={i}>
                <h2 className="font-bold text-base mb-3" style={{ color: '#fff' }}>
                  {section.title}
                </h2>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#888' }}>
                  {section.content}
                </p>
                {section.list && (
                  <ul className="flex flex-col gap-2">
                    {section.list.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: '#888' }}>
                        <span style={{ color: '#d97706', marginTop: '2px' }}>›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

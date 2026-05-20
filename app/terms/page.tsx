import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Terms of Service | Vexlo',
  description: 'Terms of Service for Vexlo AI automation services — missed call text-back, automated booking, Google review automation, and business listings management for UK businesses.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${siteUrl}/terms` },
}

const sections = [
  {
    title: '1. Agreement to These Terms',
    content:
      'By accessing or using any Vexlo service — including our website at vexlo.co.uk, our AI missed call text-back system, automated appointment booking, Google review automation, business listings management, or any other feature we provide — you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use our services. These Terms constitute a legally binding agreement between you ("Customer", "you", or "your") and Vexlo ("Vexlo", "we", "us", or "our"). If you are accepting these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind that entity.',
  },
  {
    title: '2. Our Services',
    content: 'Vexlo provides AI-powered automation services for UK businesses, including:',
    list: [
      'Missed Call Text-Back — automated SMS responses sent to callers when their call is not answered, designed to recapture leads and initiate conversations.',
      'Automated Appointment Booking — integration with your calendar to allow customers to self-book appointments via SMS or web link.',
      'Google Review Automation — automated post-job review request messages sent to your customers, and automated reply drafting for reviews received on your Google Business Profile.',
      'Business Listings Management — auditing, correcting, and maintaining your business information across high-authority UK directories (powered by Uberall), covering 55+ platforms.',
      'Dashboard and Reporting — access to a GoHighLevel (GHL)-powered CRM dashboard showing leads, bookings, review requests, and listing status.',
    ],
    footer:
      'We reserve the right to modify, suspend, or discontinue any service (or any part of it) at any time with reasonable notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of services.',
  },
  {
    title: '3. Eligibility',
    content:
      'You must be at least 18 years old and operating a legitimate business in the United Kingdom to use our services. By using our services, you confirm that you meet these requirements. Vexlo services are intended for business use only and are not for personal, household, or consumer use.',
  },
  {
    title: '4. Subscription Start',
    content:
      'Your subscription begins on the date your account goes live. Billing starts from that date at the applicable monthly rate. No free trial period is offered. We reserve the right to update our pricing or terms at any time with reasonable notice, as set out in Section 18.',
  },
  {
    title: '5. Subscription, Billing & Payment',
    content: 'Your subscription is billed monthly in advance from the date your account goes live. Key billing terms:',
    list: [
      'Fees are charged in British Pounds (GBP) and are subject to VAT where applicable.',
      'Payment is due on the same date each month as your subscription start date.',
      'We accept payment by card via our payment processor. You authorise us to charge your payment method on a recurring monthly basis.',
      'If a payment fails, we will notify you and attempt to collect payment again. Continued failure to pay may result in suspension or termination of your account.',
      'Listings Management is billed at £97/month per business location and is subject to a 3-month minimum term from the date of first billing. After the minimum term, it continues on a monthly rolling basis.',
      'Other subscription pricing will be confirmed in writing at the time of sign-up and may vary based on the services selected.',
      'All fees are non-refundable except where required by law or as otherwise stated in these Terms.',
    ],
  },
  {
    title: '6. Minimum Terms & Cancellation',
    content:
      'Certain services carry a minimum subscription period as confirmed at the time of sign-up. The Listings Management service requires a 3-month minimum commitment from the date of first billing. To cancel your subscription, you must notify us in writing by email to hello@mail.vexlo.co.uk before your next billing date. Cancellation takes effect at the end of the current billing period — you will retain access to your services until that date. Cancellation during a minimum term will not relieve you of your obligation to pay the fees due for the remainder of that term.',
  },
  {
    title: '7. Your Responsibilities',
    content: 'By using our services, you agree to:',
    list: [
      'Provide accurate and current business information, including your business name, address, phone number, and website, and to promptly notify us of any changes.',
      'Ensure you have the legal right to contact any individual whose details are submitted to or processed through our platform.',
      'Use our services only for lawful purposes and in accordance with all applicable UK laws and regulations.',
      'Not use our services to send unsolicited commercial messages ("spam") or to contact individuals who have not consented to receive messages from your business.',
      'Maintain the confidentiality of your account login credentials and notify us immediately of any unauthorised use of your account.',
      'Not attempt to reverse-engineer, copy, or replicate any part of our platform or proprietary systems.',
      'Comply with the rules and terms of any third-party platforms used in connection with our services, including Google, Facebook, and Apple.',
    ],
  },
  {
    title: '8. SMS Messaging & Communications Compliance',
    content:
      'Vexlo sends SMS messages on your behalf to your customers. You are responsible for ensuring that all individuals who receive messages via the Vexlo platform have a legitimate expectation of receiving communications from your business (for example, they called your business number or enquired about your services). You must not use our SMS features to contact individuals who have not had prior contact with your business, have opted out of receiving messages, or have registered with a preference service. You agree to honour opt-out requests immediately and to configure your account settings accordingly. Vexlo is not responsible for messages sent in violation of applicable regulations, including the UK GDPR, the Privacy and Electronic Communications Regulations (PECR), or the Telephone Preference Service (TPS) rules.',
  },
  {
    title: '9. Google Reviews & Third-Party Platforms',
    content:
      'Vexlo\'s review automation feature sends review request messages to your customers following job completion. You agree that: (a) all review requests are sent only to genuine customers of your business; (b) you will not use the platform to solicit fake reviews or to incentivise customers to leave positive reviews in violation of Google\'s review policies; (c) you are responsible for the content of any replies drafted or sent via the platform on your behalf. Vexlo\'s business listings management service is powered by Uberall. Listing data is submitted to third-party directories on your behalf. We do not guarantee acceptance, accuracy, or ranking outcomes on any third-party platform, as these are outside our control.',
  },
  {
    title: '10. Intellectual Property',
    content:
      'All content, technology, software, branding, and materials that form part of the Vexlo platform are owned by or licensed to Vexlo and are protected by UK and international intellectual property law. You may not copy, reproduce, distribute, or create derivative works from any part of our platform without our prior written consent. You retain ownership of your business data, customer contact information, and any content you provide to us. You grant Vexlo a limited, non-exclusive licence to use your data solely to provide and improve our services to you.',
  },
  {
    title: '11. Confidentiality',
    content:
      'Each party agrees to keep confidential any non-public information received from the other party in connection with the services and to use such information only for the purposes of performing obligations or exercising rights under these Terms. This obligation does not apply to information that is or becomes publicly known through no breach of this agreement, or that is required to be disclosed by law.',
  },
  {
    title: '12. Data Protection',
    content:
      'Vexlo processes personal data in accordance with UK GDPR and the Data Protection Act 2018. Where Vexlo processes personal data on your behalf (for example, customer contact details used to send automated messages), Vexlo acts as a data processor and you act as the data controller. You are responsible for ensuring you have a lawful basis for sharing customer data with Vexlo and for providing customers with appropriate privacy notices. Our full Privacy Policy, which is incorporated into these Terms by reference, is available at vexlo.co.uk/privacy.',
  },
  {
    title: '13. Disclaimer of Warranties',
    content:
      'Our services are provided "as is" and "as available" without warranties of any kind, express or implied. To the fullest extent permitted by law, Vexlo disclaims all warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that: (a) our services will be uninterrupted, timely, or error-free; (b) any results obtained from using our services (including search rankings, review counts, or lead volumes) will meet your expectations; or (c) third-party platforms such as Google, Apple Maps, or Yell will accept, display, or maintain your listing data as submitted.',
  },
  {
    title: '14. Limitation of Liability',
    content:
      'To the fullest extent permitted by applicable law, Vexlo\'s total aggregate liability to you for any claims arising under or in connection with these Terms or our services — whether in contract, tort (including negligence), breach of statutory duty, or otherwise — shall not exceed the total fees paid by you to Vexlo in the three months preceding the event giving rise to the claim. In no event shall Vexlo be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, loss of revenue, loss of data, or loss of business opportunity, even if advised of the possibility of such damages. Nothing in these Terms limits or excludes liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be limited or excluded by law.',
  },
  {
    title: '15. Indemnification',
    content:
      'You agree to indemnify, defend, and hold harmless Vexlo and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with: (a) your use of our services in violation of these Terms; (b) your violation of any applicable law or regulation; (c) any claim that messages sent via the Vexlo platform on your behalf violated the rights of a third party; or (d) any inaccurate information you provided to us.',
  },
  {
    title: '16. Third-Party Services',
    content:
      'Our services integrate with or are powered by third-party platforms including GoHighLevel (CRM and messaging), Uberall (directory listings), Google, Meta (Facebook/Instagram), and Apple. Your use of these platforms is subject to their respective terms of service and privacy policies. Vexlo is not responsible for the availability, performance, or practices of any third-party service. Links to third-party websites from our platform do not constitute an endorsement of those sites.',
  },
  {
    title: '17. Suspension & Termination',
    content:
      'We may suspend or terminate your account immediately and without notice if: (a) you breach any material provision of these Terms; (b) we reasonably suspect fraudulent, abusive, or illegal activity on your account; (c) required to do so by law or a regulatory authority; or (d) continued provision of services would expose Vexlo to legal or reputational harm. Upon termination, your right to access and use our services will cease immediately. We will retain your data for a period of 30 days following termination, after which it may be permanently deleted.',
  },
  {
    title: '18. Changes to These Terms',
    content:
      'We may update these Terms from time to time. If we make material changes, we will notify you by email or by posting a notice on our website at least 14 days before the changes take effect. Your continued use of our services after the effective date of any changes constitutes your acceptance of the updated Terms. If you do not agree to the updated Terms, you must stop using our services and cancel your subscription before the changes take effect.',
  },
  {
    title: '19. Governing Law & Dispute Resolution',
    content:
      'These Terms and any dispute or claim arising out of or in connection with them (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of England and Wales. You and Vexlo agree to submit to the exclusive jurisdiction of the courts of England and Wales for the resolution of any such dispute. We encourage you to contact us in the first instance to resolve any dispute informally.',
  },
  {
    title: '20. General',
    content: '',
    list: [
      'Entire Agreement: These Terms, together with our Privacy Policy and any order confirmation or service agreement, constitute the entire agreement between you and Vexlo regarding the services.',
      'Severability: If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.',
      'Waiver: Failure by Vexlo to enforce any provision of these Terms shall not constitute a waiver of our right to enforce it in the future.',
      'Assignment: You may not assign or transfer any of your rights or obligations under these Terms without our prior written consent. Vexlo may assign its rights and obligations freely.',
      'Force Majeure: Vexlo shall not be liable for any failure or delay in performance caused by circumstances beyond our reasonable control.',
    ],
  },
  {
    title: '21. Contact Us',
    content:
      'If you have any questions about these Terms, please contact us at hello@mail.vexlo.co.uk or by writing to Vexlo, United Kingdom. We aim to respond to all enquiries within 2 business days.',
  },
]

export default function TermsPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <section className="pt-36 pb-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="section-tag">Legal</div>
          <h1
            className="font-display text-white mt-2 mb-4"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Terms of Service
          </h1>
          <p className="text-xs mb-2" style={{ color: '#888' }}>
            Last updated:{' '}
            {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-sm mb-12 leading-relaxed" style={{ color: '#555' }}>
            Please read these Terms carefully before using any Vexlo service. By using our services you agree to be bound by them. If you have questions, email us at{' '}
            <a href="mailto:hello@mail.vexlo.co.uk" style={{ color: '#d97706' }}>hello@mail.vexlo.co.uk</a>.
          </p>

          <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '3rem' }}>
            <div className="space-y-10">
              {sections.map((section, i) => (
                <div key={i} style={{ paddingBottom: '2.5rem', borderBottom: '1px solid #1a1a1a' }}>
                  <h2 className="font-bold text-base mb-3" style={{ color: '#fff' }}>
                    {section.title}
                  </h2>
                  {section.content && (
                    <p className="text-sm leading-relaxed mb-3" style={{ color: '#888' }}>
                      {section.content}
                    </p>
                  )}
                  {section.list && (
                    <ul className="flex flex-col gap-2.5 mt-3">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: '#888' }}>
                          <span style={{ color: '#d97706', marginTop: '2px', flexShrink: 0 }}>›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.footer && (
                    <p className="text-sm leading-relaxed mt-3" style={{ color: '#888' }}>
                      {section.footer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 flex gap-6" style={{ borderTop: '1px solid #2a2a2a' }}>
            <Link href="/privacy" className="text-xs transition-colors hover:text-white" style={{ color: '#888' }}>
              Privacy Policy →
            </Link>
            <Link href="/" className="text-xs transition-colors hover:text-white" style={{ color: '#888' }}>
              Back to Home →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Vexlo',
  description: 'Privacy policy for Vexlo business automation services.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 mb-4">
              Vexlo (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Name and contact information (email, phone number)</li>
              <li>Company name and details</li>
              <li>Business information (company size, revenue, current tools)</li>
              <li>Automation needs and requirements</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Respond to your enquiries and provide our services</li>
              <li>Improve our website and services</li>
              <li>Send you updates and marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Data Storage and Security
            </h2>
            <p className="text-gray-600 mb-4">
              We store your data securely using industry-standard security measures. Your data is stored in a PostgreSQL database hosted on Railway, and we take appropriate technical and organisational measures to protect your personal information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 mb-4">
              Under UK GDPR, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request erasure of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>
            <p className="text-gray-600 mb-4">
              To exercise these rights, please contact us at info@vexlo.co.uk
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              We use cookies to improve your experience on our website. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600 mb-4">
              Email: info@vexlo.co.uk<br />
              Website: https://vexlo.co.uk
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}



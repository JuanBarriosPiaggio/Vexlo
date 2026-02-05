import type { Metadata } from 'next'
import {
  TrendingUp,
  FileText,
  Users,
  DollarSign,
  Zap,
  Shield,
  BarChart3,
  Mail,
  Database
} from 'lucide-react'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Business Automation Services | Sales, Operations, Finance & HR',
  description: 'Comprehensive automation services for UK SMBs. Sales automation, operations automation, finance automation, and HR automation solutions.',
  openGraph: {
    title: 'Business Automation Services | Sales, Operations, Finance & HR - Vexlo',
    description: 'Comprehensive automation services for UK SMBs. Sales, Operations, Finance, and HR automation solutions with easy API integrations.',
    url: `${siteUrl}/services`,
    images: [
      {
        url: `${siteUrl}/Vexlo_logo.png`,
        width: 1200,
        height: 630,
        alt: 'Vexlo Business Automation Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Automation Services - Vexlo',
    description: 'Comprehensive automation services for UK SMBs. Sales, Operations, Finance, and HR automation solutions.',
    images: [`${siteUrl}/Vexlo_logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
}

const services = [
  {
    category: 'Sales',
    icon: TrendingUp,
    description: 'Streamline your sales process and close more deals',
    features: [
      'Lead management automation',
      'CRM integration and sync',
      'Automated follow-up sequences',
      'Sales pipeline tracking',
      'Quote and proposal generation',
      'Customer communication automation',
    ],
  },
  {
    category: 'Operations',
    icon: Zap,
    description: 'Optimise workflows and reduce manual tasks',
    features: [
      'Process workflow automation',
      'Task assignment and tracking',
      'Inventory management',
      'Order processing automation',
      'Document management',
      'Integration with existing tools',
    ],
  },
  {
    category: 'Finance',
    icon: DollarSign,
    description: 'Automate financial processes and reporting',
    features: [
      'Automated invoicing',
      'Payment processing',
      'Expense management',
      'Financial reporting',
      'Reconciliation automation',
      'Tax preparation support',
    ],
  },
  {
    category: 'HR',
    icon: Users,
    description: 'Simplify HR processes and employee management',
    features: [
      'Employee onboarding automation',
      'Timesheet and attendance tracking',
      'Payroll processing',
      'Leave management',
      'Performance review automation',
      'HR document management',
    ],
  },
]

const integrations = [
  { name: 'Slack', icon: Mail },
  { name: 'Zapier', icon: Database },
  { name: 'Google Sheets', icon: FileText },
  { name: 'Airtable', icon: Database },
  { name: 'Mailchimp', icon: Mail },
  { name: 'Stripe', icon: DollarSign },
]

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[-20%] right-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg mb-6">
              Automation Services <br />
              <span className="text-gradient">For Modern Business</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Comprehensive automation solutions tailored to your business needs. From sales to finance, we help you streamline operations and drive growth with AI.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.category}
                className="glass-card rounded-2xl p-8 hover:border-primary/50 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-3 shadow-lg">
                    <service.icon className="h-8 w-8 text-primary-light" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {service.category} Automation
                  </h2>
                </div>
                <p className="text-gray-400 mb-8 text-lg">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <Shield className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0 group-hover:text-white transition-colors" />
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 sm:py-32 relative bg-surface/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Common Use Cases
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Real-world automation scenarios for UK businesses
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "E-commerce Order Processing", icon: BarChart3, desc: "Automate order fulfilment, inventory updates, and customer notifications for online retailers." },
              { title: "Customer Onboarding", icon: Mail, desc: "Streamline new customer setup with automated welcome emails, account creation, and documentation." },
              { title: "Invoice & Payment Reminders", icon: FileText, desc: "Automatically generate invoices, send payment reminders, and track outstanding payments." },
              { title: "Employee Onboarding", icon: Users, desc: "Automate new hire paperwork, system access, and training schedules." },
              { title: "Lead Qualification", icon: TrendingUp, desc: "Automatically score and route leads based on predefined criteria." },
              { title: "Data Synchronisation", icon: Database, desc: "Keep your systems in sync with automated data flows between platforms." }
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-white/5 border border-white/5 p-6 hover:bg-white/10 transition-colors">
                <item.icon className="h-8 w-8 text-primary-light mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Integration Capabilities
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              We integrate with the tools you already use
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 hover:bg-primary/10 hover:shadow-glow transition-all duration-300 group"
              >
                <integration.icon className="h-10 w-10 text-gray-500 group-hover:text-primary-light mb-3 transition-colors" />
                <p className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{integration.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Don&apos;t see your tool? We can integrate with most platforms that offer API key access.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

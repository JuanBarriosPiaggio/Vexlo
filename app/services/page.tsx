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
  Calendar,
  Database
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services - Vexlo Business Automation',
  description: 'Comprehensive automation services for UK SMBs. Sales, Operations, Finance, and HR automation solutions.',
  keywords: 'business automation services UK, sales automation, operations automation, finance automation',
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Automation Services for UK SMBs
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Comprehensive automation solutions tailored to your business needs. From sales to finance, we help you streamline operations and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.category}
                className="rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-md bg-primary/10 p-3">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {service.category} Automation
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Common Use Cases
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Real-world automation scenarios for UK businesses
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 border border-gray-200">
              <BarChart3 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                E-commerce Order Processing
              </h3>
              <p className="text-gray-600">
                Automate order fulfilment, inventory updates, and customer notifications for online retailers.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 border border-gray-200">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Customer Onboarding
              </h3>
              <p className="text-gray-600">
                Streamline new customer setup with automated welcome emails, account creation, and documentation.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 border border-gray-200">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Invoice & Payment Reminders
              </h3>
              <p className="text-gray-600">
                Automatically generate invoices, send payment reminders, and track outstanding payments.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 border border-gray-200">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Employee Onboarding
              </h3>
              <p className="text-gray-600">
                Automate new hire paperwork, system access, and training schedules.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 border border-gray-200">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Lead Qualification
              </h3>
              <p className="text-gray-600">
                Automatically score and route leads based on predefined criteria.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 border border-gray-200">
              <Database className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Data Synchronisation
              </h3>
              <p className="text-gray-600">
                Keep your systems in sync with automated data flows between platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Integration Capabilities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We integrate with the tools you already use
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col items-center justify-center p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <integration.icon className="h-12 w-12 text-gray-400 mb-3" />
                <p className="text-sm font-medium text-gray-700">{integration.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Don&apos;t see your tool? We can integrate with most platforms that offer API key access. Complex integrations requiring OAuth or developer accounts may require additional setup.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}



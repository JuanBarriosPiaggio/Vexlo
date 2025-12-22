import { Search, Settings, CheckCircle } from 'lucide-react'

const steps = [
  {
    name: '1. Consultation',
    description: 'We analyse your current processes and identify automation opportunities.',
    icon: Search,
  },
  {
    name: '2. Implementation',
    description: 'Our team sets up and configures your automation solutions.',
    icon: Settings,
  },
  {
    name: '3. Results',
    description: 'Monitor improvements and optimise as your business grows.',
    icon: CheckCircle,
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A simple three-step process to transform your business operations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}



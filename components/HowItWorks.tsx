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
            {steps.map((step, index) => (
              <div key={step.name} className="group flex flex-col relative">
                {/* Connecting line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-5 top-12 w-0.5 h-full bg-gradient-to-b from-primary/30 to-transparent"></div>
                )}
                <dt className="flex items-center gap-x-4 text-base font-semibold leading-7 text-gray-900 mb-4">
                  <div className="relative h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300 z-10">
                    <step.icon className="h-6 w-6 text-white" />
                    <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                  </div>
                  <span className="text-lg">{step.name}</span>
                </dt>
                <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-600 pl-16">
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



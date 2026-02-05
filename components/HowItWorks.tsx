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
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            A simple three-step process to transform your business operations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.name} className="group flex flex-col relative">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-6 top-14 w-[calc(100%-3rem)] h-[2px] bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}

                <dt className="flex flex-col items-center text-center gap-y-4 text-base font-semibold leading-7 text-white mb-4">
                  <div className="relative h-14 w-14 flex items-center justify-center rounded-2xl bg-surface border border-white/10 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300 z-10 group-hover:border-primary/50">
                    <step.icon className="h-6 w-6 text-primary-light" />
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-md group-hover:opacity-100 opacity-0 transition-opacity"></div>
                  </div>
                  <span className="text-xl mt-4">{step.name}</span>
                </dt>
                <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-400 text-center px-4">
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

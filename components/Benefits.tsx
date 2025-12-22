import { Clock, Shield, TrendingUp, Zap } from 'lucide-react'

const benefits = [
  {
    name: 'Save Time',
    description: 'Automate repetitive tasks and free up hours each week for strategic work.',
    icon: Clock,
  },
  {
    name: 'Reduce Errors',
    description: 'Eliminate human error with consistent, automated processes.',
    icon: Shield,
  },
  {
    name: 'Scale Efficiently',
    description: 'Handle growth without proportionally increasing overhead costs.',
    icon: TrendingUp,
  },
  {
    name: 'Fast Implementation',
    description: 'Get up and running quickly with our streamlined setup process.',
    icon: Zap,
  },
]

export default function Benefits() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Vexlo?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We help UK SMBs streamline operations and achieve measurable results.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.name}
              className="group flex flex-col items-center text-center p-8 rounded-2xl border border-gray-200 bg-white hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {benefit.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



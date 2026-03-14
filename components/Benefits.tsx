import { PhoneCall, TrendingUp, Star, Clock } from 'lucide-react'

const benefits = [
  {
    name: 'Never Miss Another Call',
    description:
      'Your AI receptionist answers every call, day or night. No more voicemails that customers never leave.',
    icon: PhoneCall,
    stat: '100%',
    statLabel: 'Answer Rate',
  },
  {
    name: 'More Booked Jobs',
    description:
      'Every enquiry is captured and guided towards booking. Turn casual callers into confirmed customers.',
    icon: TrendingUp,
    stat: '3×',
    statLabel: 'More Leads',
  },
  {
    name: 'Higher Google Rankings',
    description:
      'Automatically request 5-star reviews after every job. Boost your local SEO without lifting a finger.',
    icon: Star,
    stat: '5×',
    statLabel: 'More Reviews',
  },
  {
    name: 'Less Time on the Phone',
    description:
      'Stop answering repetitive questions about pricing. Your AI handles FAQs so you can focus on the work.',
    icon: Clock,
    stat: '8hrs',
    statLabel: 'Saved / Week',
  },
]

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            More Jobs. Fewer Missed Calls.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Vexlo is built for UK trades and service businesses. We handle the admin so you can handle the work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.name}
              className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-clean hover:shadow-clean-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex p-3 rounded-xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <benefit.icon className="h-6 w-6" />
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold text-slate-900">{benefit.stat}</span>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">{benefit.statLabel}</p>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {benefit.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

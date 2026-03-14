import { PhoneCall, TrendingUp, Star, Clock } from 'lucide-react'

const benefits = [
  {
    name: 'Never Miss Another Call',
    description:
      'Your AI receptionist answers every call, day or night, even while your team is on the job. No more voicemails customers never leave.',
    icon: PhoneCall,
    stat: '100%',
    statLabel: 'call answer rate',
  },
  {
    name: 'More Booked Jobs',
    description:
      'Every enquiry is captured, followed up automatically, and guided towards booking — turning callers into confirmed customers.',
    icon: TrendingUp,
    stat: '3×',
    statLabel: 'more leads captured',
  },
  {
    name: 'Higher Google Rankings',
    description:
      'After every completed job, your system automatically requests a Google review. More 5-star reviews mean more local visibility.',
    icon: Star,
    stat: '5×',
    statLabel: 'more reviews generated',
  },
  {
    name: 'Less Time on the Phone',
    description:
      'Stop answering repetitive calls about pricing and availability. Your AI handles FAQs and bookings so you can focus on the work.',
    icon: Clock,
    stat: '8hrs',
    statLabel: 'saved per week on average',
  },
]

export default function Benefits() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            More Jobs. Fewer Missed Calls. Better Reviews.
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Vexlo is built for UK trades, clinics, and service businesses that live and die by the phone.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.name}
              className="glass-card group flex flex-col items-center text-center p-8 rounded-2xl hover:border-primary/50 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="rounded-xl bg-white/5 p-4 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/20">
                <benefit.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="mb-3">
                <span className="text-3xl font-bold text-primary">{benefit.stat}</span>
                <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">{benefit.statLabel}</p>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                {benefit.name}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Phone, UserCheck, MessageSquare, CalendarCheck, Star } from 'lucide-react'

const steps = [
  {
    number: '01',
    name: 'AI Answers',
    description:
      "You're busy on a job. Your AI receptionist answers instantly, professionally, 24/7.",
    icon: Phone,
  },
  {
    number: '02',
    name: 'Lead Captured',
    description:
      "Details are logged in your CRM. If you miss a call, they get an instant text back.",
    icon: UserCheck,
  },
  {
    number: '03',
    name: 'Job Booked',
    description:
      "The system qualifies the lead and books the appointment directly into your calendar.",
    icon: CalendarCheck,
  },
  {
    number: '04',
    name: 'Reviews Grown',
    description:
      "After the job, we automatically text the customer asking for a 5-star Google review.",
    icon: Star,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A simple system that runs in the background while you work.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200 -z-10 w-[80%] mx-auto"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.name} className="relative flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-surface flex items-center justify-center shadow-sm mb-6 z-10">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

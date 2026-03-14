import { Phone, UserCheck, MessageSquare, CalendarCheck, Star } from 'lucide-react'

const steps = [
  {
    number: '01',
    name: 'AI Answers the Call',
    description:
      "Whether you're on a job, with a client, or it's 11pm on a Sunday — your AI receptionist answers instantly, sounds professional, and handles the conversation.",
    icon: Phone,
  },
  {
    number: '02',
    name: 'Lead is Captured',
    description:
      "The caller's details, their enquiry, and their intent are automatically saved into your CRM. Every lead is logged — nothing slips through.",
    icon: UserCheck,
  },
  {
    number: '03',
    name: 'Automatic SMS Follow-Up',
    description:
      'If a call is missed, the customer immediately receives a text: "Sorry we missed you — here\'s how to book or get a quote." Most reply within minutes.',
    icon: MessageSquare,
  },
  {
    number: '04',
    name: 'Job Gets Booked',
    description:
      'The system sends appointment reminders, confirms bookings, and keeps your diary full — without you lifting a finger.',
    icon: CalendarCheck,
  },
  {
    number: '05',
    name: 'Review Request Sent',
    description:
      'After the job is done, an automated message asks the customer to leave a Google review. More reviews means higher Google rankings and more inbound leads.',
    icon: Star,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-surface/50 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            From first call to 5-star review — your entire customer journey, automated.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.name}
              className="group glass-card flex gap-5 p-6 rounded-2xl hover:border-primary/50 hover:shadow-glow transition-all duration-300"
            >
              {/* Step icon */}
              <div className="relative flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-2xl bg-surface border border-white/10 shadow-lg shadow-primary/10 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300 z-10">
                <step.icon className="h-6 w-6 text-primary" />
                <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-md group-hover:opacity-100 opacity-0 transition-opacity"></div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors mb-2">
                  {step.name}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute left-[2.75rem] mt-20 text-primary/20 text-xl pointer-events-none select-none">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

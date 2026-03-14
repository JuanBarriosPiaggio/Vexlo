import Link from 'next/link'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'

interface NichePageProps {
  headline: string
  subheadline: string
  badge: string
  emoji: string
  painPoints: string[]
  customerJourney: { step: string; detail: string }[]
  leadValue: string
  outcomes: string[]
  testimonial: { quote: string; name: string; role: string; location: string }
  faq: { question: string; answer: string }[]
}

export default function NichePage({
  headline,
  subheadline,
  badge,
  emoji,
  painPoints,
  customerJourney,
  leadValue,
  outcomes,
  testimonial,
  faq,
}: NichePageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
          <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="text-lg">{emoji}</span>
            <span className="text-sm font-medium text-primary-light">{badge}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
            {headline}
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/enquiry"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-black font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-light hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Book a Free Demo
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-primary/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              See How It Works
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 sm:py-24 relative">
        <div className="absolute inset-0 bg-surface/50 -z-10"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Sound Familiar?
            </h2>
            <p className="mt-4 text-gray-400">
              These are the problems costing businesses like yours thousands of pounds every month.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {painPoints.map((pain) => (
              <div key={pain} className="glass-card flex items-start gap-4 p-5 rounded-xl">
                <span className="text-red-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                <p className="text-gray-300">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Value */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="absolute inset-0 border-y border-primary/10 -z-10"></div>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary/70 text-sm uppercase tracking-widest mb-3 font-medium">The cost of inaction</p>
          <p className="text-2xl sm:text-3xl font-bold text-white leading-relaxed">{leadValue}</p>
        </div>
      </section>

      {/* Customer Journey */}
      <section id="how-it-works" className="py-24 sm:py-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -z-10"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              How Vexlo Works for You
            </h2>
            <p className="mt-4 text-gray-400">
              From the moment a customer calls to the moment they leave a 5-star review.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {customerJourney.map((item, index) => (
              <div key={item.step} className="group glass-card flex gap-5 p-6 rounded-2xl hover:border-primary/50 hover:shadow-glow transition-all duration-300">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 border border-primary/30 text-primary font-bold text-sm group-hover:bg-primary group-hover:text-black transition-all">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-white mb-1 group-hover:text-primary transition-colors">{item.step}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 sm:py-24 relative">
        <div className="absolute inset-0 bg-surface/50 -z-10"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              What You Can Expect
            </h2>
          </div>
          <div className="mx-auto max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            {outcomes.map((outcome) => (
              <div key={outcome} className="glass-card flex items-start gap-3 p-5 rounded-xl hover:border-primary/40 transition-colors">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10 rounded-2xl text-center shadow-glow">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-gray-300 text-lg italic leading-relaxed mb-6">
              &quot;{testimonial.quote}&quot;
            </p>
            <p className="font-semibold text-white">{testimonial.name}</p>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
            <p className="text-sm text-primary mt-1">{testimonial.location}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 relative">
        <div className="absolute inset-0 bg-surface/50 -z-10"></div>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white text-center mb-12">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <div key={item.question} className="glass-card p-6 rounded-xl hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-white mb-3">{item.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Stop Missing Calls?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Book a free 15-minute demo. We&apos;ll show you exactly how Vexlo can work for your business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/enquiry"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-black font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-light hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book a Free 15-Minute Demo
                <ArrowRight size={20} />
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">No commitment. No technical setup required on your part.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

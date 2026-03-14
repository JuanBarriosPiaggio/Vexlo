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
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 ring-1 ring-white/20">
              <span className="text-lg">{emoji}</span>
              <span>{badge}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
              {headline}
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100 max-w-2xl mx-auto">
              {subheadline}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/enquiry"
                className="group relative rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/50 hover:shadow-xl hover:shadow-accent/60 transition-all transform hover:scale-105 hover:-translate-y-1 inline-flex items-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative">Book a Free Demo</span>
                <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#how-it-works" className="text-base font-semibold text-blue-100 hover:text-white transition-colors">
                See How It Works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Sound Familiar?
            </h2>
            <p className="mt-4 text-gray-600">
              These are the problems costing businesses like yours thousands of pounds every month.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {painPoints.map((pain) => (
              <div key={pain} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
                <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                <p className="text-gray-700">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Value */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 text-sm uppercase tracking-widest mb-3 font-medium">The cost of inaction</p>
          <p className="text-2xl sm:text-3xl font-bold text-white leading-relaxed">{leadValue}</p>
        </div>
      </section>

      {/* Customer Journey */}
      <section id="how-it-works" className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              How Vexlo Works for You
            </h2>
            <p className="mt-4 text-gray-600">
              From the moment a customer calls to the moment they leave a 5-star review.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {customerJourney.map((item, index) => (
              <div key={item.step} className="group flex gap-5 p-6 rounded-2xl border border-gray-200 bg-gray-50 hover:border-primary/30 hover:shadow-xl hover:bg-white transition-all duration-300">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{item.step}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              What You Can Expect
            </h2>
          </div>
          <div className="mx-auto max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            {outcomes.map((outcome) => (
              <div key={outcome} className="flex items-start gap-3 p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="p-10 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
              &quot;{testimonial.quote}&quot;
            </p>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
            <p className="text-sm text-primary mt-1">{testimonial.location}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">
            Common Questions
          </h2>
          <div className="space-y-6">
            {faq.map((item) => (
              <div key={item.question} className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Stop Missing Calls?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Book a free 15-minute demo. We&apos;ll show you exactly how Vexlo can work for your business.
            </p>
            <div className="mt-10">
              <Link
                href="/enquiry"
                className="group relative rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/50 hover:shadow-xl hover:shadow-accent/60 transition-all transform hover:scale-105 hover:-translate-y-1 inline-flex items-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative">Book a Free 15-Minute Demo</span>
                <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <p className="mt-6 text-sm text-blue-200">No commitment. No technical setup required on your part.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

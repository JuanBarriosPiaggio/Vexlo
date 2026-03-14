import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Star, Phone, Calendar, MessageSquare } from 'lucide-react'

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

const nicheImages: Record<string, string> = {
  'Cleaning': 'https://images.unsplash.com/photo-1581578731117-104f2a412727?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'Plumbers': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'Dental': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'Estate': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'Roofing': 'https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'Beauty': 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'Property': 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'Default': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
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
  // Determine image based on badge text
  const imageKey = Object.keys(nicheImages).find(key => badge.includes(key)) || 'Default'
  const heroImage = nicheImages[imageKey]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <span className="text-lg">{emoji}</span>
                <span className="text-sm font-semibold text-slate-700">{badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                {headline}
              </h1>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {subheadline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-primary rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-blue-500/20"
                >
                  Book a Free Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all"
                >
                  See How It Works
                </Link>
              </div>
            </div>
            
            <div className="relative lg:h-[500px] w-full hidden lg:block">
               <div className="absolute inset-0 bg-blue-600/5 rounded-3xl transform rotate-3"></div>
               <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
                 <Image 
                   src={heroImage}
                   alt={`${badge} hero image`}
                   fill
                   className="object-cover"
                   priority
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Sound Familiar?
            </h2>
            <p className="mt-4 text-slate-600">
              The problems costing you thousands in lost revenue.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {painPoints.map((pain) => (
              <div key={pain} className="flex items-start gap-4 p-5 rounded-xl bg-red-50/50 border border-red-100">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs mt-0.5">✕</div>
                <p className="text-slate-700 font-medium">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Value Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-3 rounded-full bg-white/10 mb-4 backdrop-blur-sm">
            <Star className="h-6 w-6 text-yellow-300 fill-yellow-300" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold leading-relaxed">
            &ldquo;{leadValue}&rdquo;
          </h3>
        </div>
      </section>

      {/* Customer Journey */}
      <section id="how-it-works" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              The Perfect Customer Journey
            </h2>
            <p className="mt-4 text-slate-600">
              Automated from the first ring to the 5-star review.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>
              <div className="space-y-12">
                {customerJourney.map((item, index) => (
                  <div key={item.step} className="relative flex flex-col md:flex-row gap-8 md:items-start">
                    <div className="flex-shrink-0 h-16 w-16 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center z-10 mx-auto md:mx-0">
                      <span className="text-xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.step}</h3>
                      <p className="text-slate-600">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              What You Can Expect
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome) => (
              <div key={outcome} className="flex items-start gap-3 p-6 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 font-medium">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <blockquote className="text-2xl font-medium leading-relaxed mb-8">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div>
            <div className="font-bold text-lg">{testimonial.name}</div>
            <div className="text-slate-400">{testimonial.role}</div>
            <div className="text-primary-light text-sm mt-1">{testimonial.location}</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center mb-12">
            Common Questions
          </h2>
          <div className="space-y-6">
            {faq.map((item) => (
              <div key={item.question} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                <h3 className="font-bold text-slate-900 mb-2">{item.question}</h3>
                <p className="text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Stop Missing Calls?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Book a free 15-minute demo. We&apos;ll show you exactly how Vexlo can work for your business.
          </p>
          <Link
            href="/enquiry"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary bg-white rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-1"
          >
            Book a Free 15-Minute Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <p className="mt-6 text-sm text-blue-200 opacity-80">
            No commitment. No technical setup required.
          </p>
        </div>
      </section>
    </div>
  )
}

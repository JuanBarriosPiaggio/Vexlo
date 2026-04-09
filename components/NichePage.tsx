import Link from 'next/link'
import Image from 'next/image'

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

const getImage = (badge: string) => {
  if (badge.includes('Cleaning')) return '/images/cleaning.jpg'
  if (badge.includes('Plumber')) return '/images/plumber.jpg'
  if (badge.includes('Dental')) return '/images/dentist.jpg'
  if (badge.includes('Estate')) return '/images/estate.jpg'
  if (badge.includes('Roofing')) return '/images/roofer.jpg'
  if (badge.includes('Salon') || badge.includes('Barber') || badge.includes('Beauty')) return '/images/salon.jpg'
  if (badge.includes('Property') || badge.includes('Maintenance')) return '/images/property.jpg'
  return '/images/hero.jpg'
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
  const heroImage = getImage(badge)

  return (
    <div style={{ background: '#0a0a0a' }}>

      {/* HERO */}
      <section
        className="hero-grid relative pt-36 pb-20 px-6 md:px-10 overflow-hidden"
        style={{ background: '#0a0a0a' }}
      >
        <div
          className="pointer-events-none absolute"
          style={{
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)',
            top: '-80px', right: '-80px',
          }}
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div
              className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{ background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.3)', color: '#d97706' }}
            >
              <span>{emoji}</span>
              {badge}
            </div>

            <h1
              className="font-display text-white mb-6 leading-none"
              style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', letterSpacing: '0.02em' }}
            >
              {headline}
            </h1>

            <p className="text-base leading-relaxed mb-10" style={{ color: '#888', maxWidth: '500px' }}>
              {subheadline}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/#book"
                className="inline-flex items-center px-7 py-3.5 rounded text-sm font-bold tracking-wide text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
                style={{ background: '#d97706' }}
              >
                Book a Free Demo →
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center px-7 py-3.5 rounded text-sm font-semibold transition-all duration-200 hover:text-white"
                style={{ border: '1px solid #2a2a2a', color: '#e8e8e8' }}
              >
                See How It Works
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative h-[480px] rounded-2xl overflow-hidden" style={{ border: '1px solid #2a2a2a' }}>
            <Image src={heroImage} alt={badge} fill className="object-cover" priority />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 60%)' }} />
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section style={{ background: '#111111', padding: '80px 40px' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-tag" style={{ textAlign: 'center' }}>Sound Familiar?</div>
            <h2
              className="font-display text-white mt-2"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '0.02em' }}
            >
              The problems costing you thousands in lost revenue.
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {painPoints.map((pain, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)' }}
              >
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ background: 'rgba(239,68,68,0.15)', color: '#ef4444' }}
                >
                  ✕
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#e8e8e8' }}>{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD VALUE */}
      <section style={{ background: '#d97706', padding: '60px 40px' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-3xl mb-4">💰</div>
          <p className="text-base leading-relaxed font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
            &ldquo;{leadValue}&rdquo;
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ background: '#0a0a0a', padding: '80px 40px' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-tag" style={{ textAlign: 'center' }}>How It Works</div>
            <h2
              className="font-display text-white mt-2"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '0.02em' }}
            >
              The perfect customer journey.
            </h2>
            <p className="mt-3 text-sm" style={{ color: '#888' }}>Automated from the first ring to the 5-star review.</p>
          </div>

          <div className="relative">
            <div
              className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
              style={{ background: '#2a2a2a' }}
            />
            <div className="flex flex-col gap-10">
              {customerJourney.map((item, i) => (
                <div key={i} className="relative flex flex-col md:flex-row gap-6 md:items-start">
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-display text-xl z-10 mx-auto md:mx-0"
                    style={{ background: '#111111', border: '2px solid #2a2a2a', color: '#d97706' }}
                  >
                    {i + 1}
                  </div>
                  <div
                    className="flex-1 p-6 rounded-xl"
                    style={{ background: '#111111', border: '1px solid #2a2a2a' }}
                  >
                    <h3 className="font-bold text-sm mb-2" style={{ color: '#fff' }}>{item.step}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#888' }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section style={{ background: '#111111', padding: '80px 40px' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-display text-white text-center mb-12"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            What you can expect.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((outcome, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 rounded-xl"
                style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}
              >
                <span style={{ color: '#d97706', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                <p className="text-sm" style={{ color: '#e8e8e8' }}>{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ background: '#0a0a0a', padding: '80px 40px' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: '#f59e0b', fontSize: '1.2rem' }}>★</span>
            ))}
          </div>
          <blockquote
            className="text-xl leading-relaxed mb-8 font-medium"
            style={{ color: '#e8e8e8' }}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="font-bold text-base" style={{ color: '#fff' }}>{testimonial.name}</div>
          <div className="text-sm mt-1" style={{ color: '#888' }}>{testimonial.role}</div>
          <div className="text-xs mt-1" style={{ color: '#d97706' }}>{testimonial.location}</div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#111111', padding: '80px 40px' }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display text-white text-center mb-12"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Common questions.
          </h2>
          <div className="flex flex-col gap-4">
            {faq.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl transition-colors duration-200"
                style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}
              >
                <h3 className="font-bold text-sm mb-2" style={{ color: '#fff' }}>{item.question}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#888' }}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden text-center"
        style={{ background: '#111111', padding: '80px 40px' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, rgba(217,119,6,0.07) 0%, transparent 70%)' }}
        />
        <div className="max-w-2xl mx-auto relative z-10">
          <h2
            className="font-display text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Ready to stop missing{' '}
            <span className="font-serif" style={{ color: '#d97706', fontStyle: 'italic' }}>calls?</span>
          </h2>
          <p className="mb-10 text-sm" style={{ color: '#888' }}>
            Book a free 15-minute demo. We&apos;ll show you exactly how Vexlo works for your business.
          </p>
          <Link
            href="/#book"
            className="inline-flex items-center px-8 py-4 rounded text-sm font-bold tracking-wide text-white transition-all duration-200 hover:brightness-110"
            style={{ background: '#d97706' }}
          >
            Book Your Free Demo →
          </Link>
          <p className="mt-4 text-xs" style={{ color: '#888' }}>No commitment. No technical setup required.</p>
        </div>
      </section>
    </div>
  )
}

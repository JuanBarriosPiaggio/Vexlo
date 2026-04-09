import type { Metadata } from 'next'
import About from '@/components/About'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Vexlo AI Automation for UK Trades & Clinics',
  description: 'Meet the team behind Vexlo. We build AI automation for UK trades and clinics — missed call text-back, automated booking, and Google review generation.',
  keywords: ['about Vexlo', 'AI automation company UK', 'Juan Barrios Vexlo', 'UK trade automation'],
}

export default function AboutPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <section
        className="pt-36 pb-16 px-6 md:px-10 text-center relative overflow-hidden"
        style={{ background: '#0a0a0a' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(217,119,6,0.06) 0%, transparent 60%)' }}
        />
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="section-tag" style={{ textAlign: 'center' }}>Our Story</div>
          <h1
            className="font-display text-white mt-2"
            style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            We built the bot we{' '}
            <span className="font-serif" style={{ color: '#d97706', fontStyle: 'italic' }}>
              wished existed.
            </span>
          </h1>
        </div>
      </section>

      <section style={{ padding: '40px 40px 100px' }}>
        <div className="max-w-6xl mx-auto">
          <About />
        </div>
      </section>

      <section
        className="px-6 md:px-10 py-24 text-center relative overflow-hidden"
        style={{ background: '#111111' }}
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
            Let&apos;s talk about your business.
          </h2>
          <p className="mb-10 text-base" style={{ color: '#888' }}>
            Book a free 15-minute demo. No pressure, no pitch — just a live look at how Vexlo works.
          </p>
          <Link
            href="/#book"
            className="inline-flex items-center px-8 py-4 rounded text-sm font-bold tracking-wide text-white transition-all duration-200 hover:brightness-110"
            style={{ background: '#d97706' }}
          >
            Book Your Free Demo →
          </Link>
        </div>
      </section>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  const achievements = [
    { number: '500+', label: 'Leads captured for clients' },
    { number: '183', label: 'Google reviews generated in 4 months' },
    { number: '4 sec', label: 'Average AI response time' },
    { number: '24/7', label: 'Automation — never sleeps' },
  ]

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
        <div>
          <div className="section-tag">About Vexlo</div>
          <h2
            className="font-display text-white mt-2 mb-6"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Built by someone who{' '}
            <span className="font-serif" style={{ color: '#d97706', fontStyle: 'italic' }}>
              gets it.
            </span>
          </h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#888' }}>
            <p>
              I&apos;m Juan, founder of Vexlo. I built this after watching small business owners — roofers, fitters, clinic owners — lose job after job simply because they couldn&apos;t answer the phone while they were working.
            </p>
            <p>
              The solution isn&apos;t hiring more staff. It&apos;s automation that runs silently in the background, capturing every lead and booking every appointment — so you can focus on what you&apos;re good at.
            </p>
            <p>
              Vexlo is purpose-built for UK trades and clinics. No generic software. No fluff. Just a system that captures leads, books jobs, and builds your reviews — on autopilot.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/#book"
              className="inline-flex items-center px-7 py-3.5 rounded text-sm font-bold tracking-wide text-white transition-all duration-200 hover:brightness-110"
              style={{ background: '#d97706' }}
            >
              Book a Free Demo →
            </Link>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/me.jpeg"
            alt="Juan Barrios — Founder of Vexlo"
            width={500}
            height={600}
            className="rounded-2xl w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            style={{ maxHeight: '500px' }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-24">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="p-6 rounded-xl text-center"
            style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}
          >
            <div
              className="font-display mb-1"
              style={{ fontSize: '2.5rem', color: '#d97706', lineHeight: 1, letterSpacing: '0.02em' }}
            >
              {a.number}
            </div>
            <div className="text-xs" style={{ color: '#888' }}>{a.label}</div>
          </div>
        ))}
      </div>

      <div
        className="p-10 rounded-2xl"
        style={{ border: '1px solid rgba(217,119,6,0.25)', background: 'rgba(217,119,6,0.04)' }}
      >
        <h3 className="font-bold text-lg mb-3" style={{ color: '#fff' }}>Our commitment to you</h3>
        <p className="text-sm leading-relaxed" style={{ color: '#888' }}>
          First month free. No contracts. No setup fees. We&apos;re so confident in the results that we let the system prove itself before you pay a penny. If you don&apos;t see value, cancel anytime.
        </p>
      </div>
    </div>
  )
}

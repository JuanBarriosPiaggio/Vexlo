import Link from 'next/link'
import PhoneMockup from './PhoneMockup'

export default function Hero() {
  return (
    <section
      className="hero-grid relative min-h-screen flex items-center px-6 md:px-10 pt-28 pb-20 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Orange glow blob */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(217,119,6,0.1) 0%, transparent 70%)',
          top: '-100px',
          right: '-100px',
          animation: 'heroGlowPulse 6s ease-in-out infinite',
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center relative z-10">
        {/* LEFT: Text */}
        <div>
          <div
            className="anim-1 inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              background: 'rgba(217,119,6,0.12)',
              border: '1px solid rgba(217,119,6,0.3)',
              color: '#d97706',
            }}
          >
            <span style={{ fontSize: '0.5rem', animation: 'blinkDot 1.5s infinite' }}>●</span>
            First Month Free — No Contracts
          </div>

          <h1
            className="anim-2 font-display text-white mb-2 leading-none tracking-wide"
            style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', letterSpacing: '0.02em' }}
          >
            Stop losing<br />jobs to<br />
            <span
              className="font-serif"
              style={{ color: '#d97706', fontStyle: 'italic', fontSize: '1.1em' }}
            >
              voicemail.
            </span>
          </h1>

          <p className="anim-3 text-base leading-relaxed mt-5 mb-9 max-w-md" style={{ color: '#888' }}>
            Our AI bot texts back every missed call within seconds, books the appointment automatically, and chases Google reviews after every job. Runs 24/7 — no staff, no effort.
          </p>

          <div className="anim-4 flex flex-wrap gap-3">
            <Link
              href="/#book"
              className="inline-flex items-center px-7 py-3.5 rounded text-sm font-bold tracking-wide transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
              style={{ background: '#d97706', color: '#fff' }}
            >
              Book a 15-Min Demo →
            </Link>
            <Link
              href="/#how"
              className="inline-flex items-center px-7 py-3.5 rounded text-sm font-semibold transition-all duration-200 hover:text-white"
              style={{
                background: 'transparent',
                border: '1px solid #2a2a2a',
                color: '#e8e8e8',
              }}
            >
              See How It Works
            </Link>
          </div>

          <div className="anim-5 flex items-center gap-3 mt-7">
            <div className="flex">
              {[
                { bg: '#d97706', letter: 'R' },
                { bg: '#16a34a', letter: 'K' },
                { bg: '#2563eb', letter: 'D' },
              ].map((a, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{
                    background: a.bg,
                    border: '2px solid #0a0a0a',
                    marginLeft: i === 0 ? 0 : '-8px',
                  }}
                >
                  {a.letter}
                </div>
              ))}
            </div>
            <p className="text-xs" style={{ color: '#888' }}>
              Trusted by <strong style={{ color: '#e8e8e8' }}>roofers, kitchen fitters & dentists</strong> across the UK
            </p>
          </div>
        </div>

        {/* RIGHT: Phone */}
        <div className="anim-6 flex justify-center md:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}

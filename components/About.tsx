import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  const achievements = [
    { number: '~2 mo', label: 'To first organic leads (real clients)' },
    { number: '2', label: 'Live sites generating enquiries' },
    { number: '55+', label: 'Directories backing local SEO' },
    { number: '24/7', label: 'AI catching every leftover call' },
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
              I&apos;m Juan, founder of Vexlo. I work with UK small businesses whose websites don&apos;t produce leads — or who don&apos;t have a website at all and think word of mouth is enough.
            </p>
            <p>
              We build SEO-driven websites with quote calculators and booking systems that turn Google searches into enquiries. For Tenanclean and Fyrup, the first organic leads arrived around 2 months after launch. Then we add the layer that keeps every lead: missed-call text-back, booking, and Google review requests.
            </p>
            <p>
              The product is not a pretty brochure. It is a website that earns its keep — and a system behind it so none of the work it wins slips through.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/enquiry"
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
            className="rounded-2xl w-full object-cover transition-all duration-500"
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
          No contracts. No setup fees. We&apos;re confident in the results — and if you don&apos;t see value, cancel anytime.
        </p>
      </div>
    </div>
  )
}

const steps = [
  {
    num: '01',
    icon: '🌐',
    title: 'Website Built to Rank',
    text: 'We launch an SEO-driven site with service pages, area pages, and a quote calculator or booking system — so Google has something real to rank.',
  },
  {
    num: '02',
    icon: '🔍',
    title: 'Customers Find You',
    text: 'People searching for what you do in your area land on your site. First organic leads typically start around the 2-month mark, then compound.',
  },
  {
    num: '03',
    icon: '📅',
    title: 'They Price & Book Online',
    text: 'The calculator or booking form turns a visitor into an enquiry without a phone call. Confirmations go to you and the customer automatically.',
  },
  {
    num: '04',
    icon: '🤖',
    title: 'AI Keeps Every Lead',
    text: 'If they call instead, the AI texts back in seconds, books the job, and chases a Google review after the work is done.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" style={{ background: '#0a0a0a', padding: '100px 40px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-tag">How It Works</div>
        <h2
          className="font-display text-white mb-2"
          style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', lineHeight: 1, letterSpacing: '0.02em' }}
        >
          A website that earns its keep.
        </h2>
        <p className="mb-16 max-w-lg" style={{ color: '#888', fontSize: '1rem', lineHeight: 1.65 }}>
          We build the site that generates the leads — then automation makes sure none of them slip through.
        </p>

        <div
          className="grid grid-cols-2 md:grid-cols-4 rounded-xl overflow-hidden"
          style={{ gap: '2px', background: '#2a2a2a' }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal relative p-8 transition-colors duration-200 hover:bg-[#1a1a1a]"
              style={{ background: '#111111' }}
            >
              <div
                className="font-display leading-none mb-4"
                style={{ fontSize: '3rem', color: 'rgba(217,119,6,0.15)', letterSpacing: '0.02em' }}
              >
                {step.num}
              </div>
              <div className="text-2xl mb-3">{step.icon}</div>
              <div className="font-bold text-sm mb-2" style={{ color: '#fff' }}>{step.title}</div>
              <div className="text-xs leading-relaxed" style={{ color: '#888' }}>{step.text}</div>
              {i < steps.length - 1 && <div className="step-connector">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    num: '01',
    icon: '📞',
    title: 'Missed Call Detected',
    text: "Someone calls your number. You're busy. The bot detects the missed call instantly.",
  },
  {
    num: '02',
    icon: '💬',
    title: 'Auto Text-Back',
    text: 'Within 4 seconds, the lead gets a personalised SMS with a link to book directly.',
  },
  {
    num: '03',
    icon: '📅',
    title: 'Appointment Booked',
    text: 'They pick a slot from your calendar. Confirmation sent automatically. Job in the diary.',
  },
  {
    num: '04',
    icon: '⭐',
    title: 'Review Requested',
    text: "After the job's done, the bot sends a review request. One tap to your Google page.",
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
          Set up once. Runs forever.
        </h2>
        <p className="mb-16 max-w-md" style={{ color: '#888', fontSize: '1rem', lineHeight: 1.65 }}>
          Four steps. Fully automated. You just show up to the jobs.
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

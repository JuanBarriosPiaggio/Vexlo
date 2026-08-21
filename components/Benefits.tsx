export default function Benefits() {
  const points = [
    {
      icon: '🔍',
      title: 'They search before they call',
      text: "Your next customer is on Google right now. If your website doesn't rank — or doesn't exist — you were never in the running. The job goes to whoever shows up.",
    },
    {
      icon: '🕸️',
      title: 'A website that just sits there',
      text: "Most small business sites are digital brochures: no SEO, no quote calculator, no booking. Visitors look, leave, and call a competitor who makes it easier.",
    },
    {
      icon: '⏱️',
      title: 'Speed wins the job',
      text: 'Even when the lead comes in, the first business to respond usually wins it. Miss the call, reply tomorrow — and the customer has already booked someone else.',
    },
  ]

  return (
    <section id="problem" style={{ background: '#111111', padding: '100px 40px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-tag">The Problem</div>
        <h2
          className="font-display text-white mb-4"
          style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', lineHeight: 1, letterSpacing: '0.02em' }}
        >
          Invisible on Google. Unreachable on the phone. That&apos;s how jobs get lost.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-16">
          <div>
            <div
              className="font-display leading-none"
              style={{ fontSize: '7rem', color: '#d97706', letterSpacing: '-0.02em' }}
            >
              62%
            </div>
            <p className="mt-2 leading-relaxed" style={{ color: '#888', fontSize: '1rem' }}>
              of calls to trade businesses go{' '}
              <strong style={{ color: '#e8e8e8' }}>unanswered</strong>. Those people
              don&apos;t leave voicemails — they call the next number on Google.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {points.map((p, i) => (
              <div
                key={i}
                className="reveal flex gap-4 items-start p-5 rounded-lg transition-colors duration-200"
                style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}
              >
                <div className="text-2xl flex-shrink-0 mt-0.5">{p.icon}</div>
                <div>
                  <div className="font-bold text-sm mb-1.5" style={{ color: '#fff' }}>{p.title}</div>
                  <div className="text-sm leading-relaxed" style={{ color: '#888' }}>{p.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

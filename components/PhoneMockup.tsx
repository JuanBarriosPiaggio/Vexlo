export default function PhoneMockup() {
  return (
    <div className="relative flex justify-center">
      <div className="float-badge">
        🔍 <strong>Page 1</strong> of Google
      </div>

      <div className="float-badge-2">
        💷 <strong>New lead</strong> while you&apos;re on a job
      </div>

      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-time">Today 14:31</div>

          <div className="missed-call-card">
            <div className="mc-top">
              <div className="mc-icon" style={{ background: 'rgba(217,119,6,0.15)' }}>🔍</div>
              <div>
                <div className="mc-name">Google Search</div>
                <div className="mc-label" style={{ color: '#888' }}>
                  &ldquo;end of tenancy cleaning near me&rdquo;
                </div>
              </div>
              <div className="mc-time">14:31</div>
            </div>
          </div>

          <div className="sms-thread">
            <div className="sms-label d1">Visitor · on your website</div>
            <div className="sms-bubble incoming d1">
              Opens your instant quote calculator — 2-bed flat + carpet clean 🧮
            </div>

            <div className="sms-label d2">Your website · 14:32</div>
            <div className="sms-bubble outgoing d2">
              Fixed price: £185. Pick a date and book online — no phone call needed 📅
            </div>

            <div className="sms-label d3">Visitor · 14:33</div>
            <div className="sms-bubble incoming d3">
              Booked for Thursday 10am 👍
            </div>

            <div className="review-card d4">
              <div className="review-req" style={{ color: '#4ade80' }}>💷 New lead — booked &amp; confirmed</div>
              <div className="review-text">
                Confirmation emails sent to you and the customer. After the job, the AI chases the Google review ⭐
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

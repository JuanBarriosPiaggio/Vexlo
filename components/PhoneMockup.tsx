export default function PhoneMockup() {
  return (
    <div className="relative flex justify-center">
      <div className="float-badge">
        ⚡ <strong>4 sec</strong> average response
      </div>

      <div className="float-badge-2">
        ⭐ <strong>+183 reviews</strong> in 4 months
      </div>

      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-time">Today 14:32</div>

          <div className="missed-call-card">
            <div className="mc-top">
              <div className="mc-icon">📵</div>
              <div>
                <div className="mc-name">Unknown Caller</div>
                <div className="mc-label">Missed Call</div>
              </div>
              <div className="mc-time">14:31</div>
            </div>
          </div>

          <div className="sms-thread">
            <div className="sms-label d1">AI Bot · 14:31</div>
            <div className="sms-bubble outgoing d1">
              Hi! Sorry we missed your call. We&apos;d love to help — click here to book a free quote: vexlo.co.uk/book 📅
            </div>

            <div className="sms-label d2">Customer · 14:33</div>
            <div className="sms-bubble incoming d2">
              Thanks! Just booked for Thursday 10am 👍
            </div>

            <div className="sms-label d3">AI Bot · after job</div>
            <div className="sms-bubble outgoing d3">
              Thanks for choosing us! Would you mind leaving us a quick Google review? It really helps 🙏
            </div>

            <div className="review-card d4">
              <div className="review-req">⭐ Review request sent</div>
              <div className="review-stars-small">★★★★★</div>
              <div className="review-text">&quot;Brilliant service, fast response...&quot;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

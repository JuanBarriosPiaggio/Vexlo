'use client'

import { useState } from 'react'

export default function PricingCalculator() {
  const [calls, setCalls] = useState(80)
  const [duration, setDuration] = useState(3)
  const [sms, setSms] = useState(150)

  const total = (calls * duration * 0.01 + sms * 0.045).toFixed(2)

  return (
    <div style={{ background: '#111', border: '1px solid #2a2a2a', borderRadius: '8px', overflow: 'hidden' }}>
      <div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 py-5 gap-1"
        style={{ borderBottom: '1px solid #2a2a2a' }}
      >
        <div className="text-sm font-medium text-white">Usage Cost Calculator</div>
        <div className="text-xs" style={{ color: '#888' }}>Estimate your monthly add-on cost</div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#888' }}>
              Calls per month
            </label>
            <input
              type="range"
              min="0" max="400" step="10"
              value={calls}
              onChange={e => setCalls(+e.target.value)}
              className="w-full mb-2"
              style={{ accentColor: '#d97706' }}
            />
            <div className="font-display text-3xl tracking-widest text-white">{calls}</div>
            <div className="text-xs" style={{ color: '#888' }}>calls / month</div>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#888' }}>
              Avg call length
            </label>
            <input
              type="range"
              min="1" max="10" step="1"
              value={duration}
              onChange={e => setDuration(+e.target.value)}
              className="w-full mb-2"
              style={{ accentColor: '#d97706' }}
            />
            <div className="font-display text-3xl tracking-widest text-white">{duration}</div>
            <div className="text-xs" style={{ color: '#888' }}>minutes average</div>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#888' }}>
              SMS messages
            </label>
            <input
              type="range"
              min="0" max="800" step="10"
              value={sms}
              onChange={e => setSms(+e.target.value)}
              className="w-full mb-2"
              style={{ accentColor: '#d97706' }}
            />
            <div className="font-display text-3xl tracking-widest text-white">{sms}</div>
            <div className="text-xs" style={{ color: '#888' }}>texts / month</div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-6 py-5 rounded-lg"
          style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}
        >
          <div>
            <div className="text-sm font-medium text-white mb-1">Estimated usage cost</div>
            <div className="text-xs" style={{ color: '#888' }}>
              On top of your monthly tier · excl. VAT · + £2/mo number rental
            </div>
          </div>
          <div className="text-left sm:text-right flex-shrink-0">
            <div className="font-display text-4xl tracking-widest" style={{ color: '#d97706' }}>
              £{total}
            </div>
            <div className="text-xs mt-1" style={{ color: '#555' }}>voice + SMS combined</div>
          </div>
        </div>
      </div>
    </div>
  )
}

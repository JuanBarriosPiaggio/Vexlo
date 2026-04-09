'use client'

import { useState } from 'react'

interface FormData {
  fullName: string
  email: string
  companyName: string
  companySize: string
  monthlyRevenue: string
  automationNeeds: string
  referralSource: string
}

const initialData: FormData = {
  fullName: '',
  email: '',
  companyName: '',
  companySize: '',
  monthlyRevenue: '',
  automationNeeds: '',
  referralSource: '',
}

const inputStyle = {
  width: '100%',
  background: '#1a1a1a',
  border: '1px solid #2a2a2a',
  borderRadius: '6px',
  padding: '12px 14px',
  color: '#e8e8e8',
  fontSize: '0.9rem',
  outline: 'none',
}

const labelStyle = {
  display: 'block',
  fontSize: '0.8rem',
  fontWeight: 600,
  color: '#888',
  marginBottom: '6px',
  letterSpacing: '0.02em',
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Failed to submit')
      setIsSuccess(true)
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div
        className="text-center p-12 rounded-2xl"
        style={{ background: '#111111', border: '1px solid #2a2a2a' }}
      >
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-display text-white mb-3" style={{ fontSize: '2rem' }}>
          Enquiry Received!
        </h3>
        <p className="text-sm" style={{ color: '#888' }}>
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 rounded-2xl"
      style={{ background: '#111111', border: '1px solid #2a2a2a' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input name="fullName" type="text" required placeholder="John Smith" value={formData.fullName} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input name="email" type="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} style={inputStyle} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label style={labelStyle}>Company Name *</label>
          <input name="companyName" type="text" required placeholder="Smith Roofing Ltd" value={formData.companyName} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Company Size *</label>
          <select name="companySize" required value={formData.companySize} onChange={handleChange} style={inputStyle}>
            <option value="">Select...</option>
            <option value="1-10">1–10 employees</option>
            <option value="11-50">11–50 employees</option>
            <option value="51-200">51–200 employees</option>
            <option value="200+">200+ employees</option>
          </select>
        </div>
      </div>

      <div className="mb-5">
        <label style={labelStyle}>Monthly Revenue *</label>
        <select name="monthlyRevenue" required value={formData.monthlyRevenue} onChange={handleChange} style={inputStyle}>
          <option value="">Select...</option>
          <option value="<£50k">&lt;£50k/month</option>
          <option value="£50k-£200k">£50k–£200k/month</option>
          <option value="£200k-£500k">£200k–£500k/month</option>
          <option value="£500k+">£500k+/month</option>
        </select>
      </div>

      <div className="mb-5">
        <label style={labelStyle}>What would you like to automate? *</label>
        <textarea name="automationNeeds" required rows={4} placeholder="Tell us about your biggest pain points — missed calls, booking, reviews..." value={formData.automationNeeds} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' }} />
      </div>

      <div className="mb-8">
        <label style={labelStyle}>How did you hear about us?</label>
        <select name="referralSource" value={formData.referralSource} onChange={handleChange} style={inputStyle}>
          <option value="">Select...</option>
          <option value="Google Search">Google Search</option>
          <option value="Social Media">Social Media</option>
          <option value="Referral">Referral</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded text-sm font-bold tracking-wide text-white transition-all duration-200 disabled:opacity-60 hover:brightness-110"
        style={{ background: '#d97706' }}
      >
        {isSubmitting ? 'Sending...' : 'Send Enquiry →'}
      </button>
    </form>
  )
}

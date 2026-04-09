'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'

interface FormData {
  fullName: string
  email: string
  companyName: string
  automationNeeds: string
}

const inputStyle = {
  width: '100%',
  background: '#1a1a1a',
  border: '1px solid #2a2a2a',
  borderRadius: '6px',
  padding: '10px 13px',
  color: '#e8e8e8',
  fontSize: '0.85rem',
  outline: 'none',
}

export default function HeroContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    companyName: '',
    automationNeeds: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          companySize: '1-10',
          monthlyRevenue: '<£50k',
          referralSource: 'Other',
        }),
      })
      const data = await response.json()
      if (!response.ok) {
        console.error('Server error:', data)
        throw new Error(data.error || 'Failed to submit')
      }
      setIsSuccess(true)
    } catch (error) {
      console.error('Submission error:', error)
      alert(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center p-8 rounded-xl" style={{ background: '#111111', border: '1px solid #2a2a2a' }}>
        <div className="text-4xl mb-3">✅</div>
        <p className="font-bold text-sm" style={{ color: '#fff' }}>Enquiry received!</p>
        <p className="text-xs mt-1" style={{ color: '#888' }}>We&apos;ll be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-xl"
      style={{ background: '#111111', border: '1px solid #2a2a2a' }}
    >
      <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#d97706' }}>
        Quick Enquiry
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <input
          name="fullName"
          type="text"
          required
          placeholder="Your name"
          value={formData.fullName}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <input
        name="companyName"
        type="text"
        required
        placeholder="Business name"
        value={formData.companyName}
        onChange={handleChange}
        style={{ ...inputStyle, marginBottom: '12px' }}
      />
      <textarea
        name="automationNeeds"
        required
        rows={2}
        placeholder="What would you like to automate?"
        value={formData.automationNeeds}
        onChange={handleChange}
        style={{ ...inputStyle, resize: 'none', marginBottom: '12px' }}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded text-sm font-bold tracking-wide text-white flex items-center justify-center gap-2 disabled:opacity-60 transition-all duration-200 hover:brightness-110"
        style={{ background: '#d97706' }}
      >
        {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : 'Send Enquiry →'}
      </button>
    </form>
  )
}

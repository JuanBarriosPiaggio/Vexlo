'use client'

import { useState } from 'react'
import { Loader2, CheckCircle2, ArrowRight } from 'lucide-react'
import type { EnquiryFormData } from '@/lib/validations'

export default function HeroContactForm() {
  const [formData, setFormData] = useState<Partial<EnquiryFormData>>({
    fullName: '',
    email: '',
    companyName: '',
    automationNeeds: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Reusing the same API endpoint, just sending partial data
      // Ideally the API should handle partial data or we validate loosely
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           ...formData,
           // Fill defaults for required fields not in this form
           companySize: '1-10',
           monthlyRevenue: '<£50k',
           referralSource: 'Hero Form'
        }),
      })

      if (!response.ok) throw new Error('Failed')
      setIsSuccess(true)
    } catch (error) {
      console.error(error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center h-full">
        <div className="rounded-full bg-primary/20 p-4 mb-4">
          <CheckCircle2 className="h-12 w-12 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
        <p className="text-gray-400">We&apos;ll be in touch shortly.</p>
      </div>
    )
  }

  const inputClasses = "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-primary focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-primary"

  return (
    <div className="w-full max-w-lg mx-auto bg-surface/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-primary/5">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-1">Get Your Free Automation Plan</h3>
        <p className="text-sm text-gray-400">Fill out the form below to get started.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Work Email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        <div>
          <textarea
            name="automationNeeds"
            placeholder="What process do you want to automate?"
            value={formData.automationNeeds}
            onChange={handleChange}
            rows={3}
            className={inputClasses}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-primary text-black font-bold py-4 hover:bg-primary-light hover:shadow-glow transition-all flex items-center justify-center gap-2 group"
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : (
            <>
              Get My Free Plan
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}

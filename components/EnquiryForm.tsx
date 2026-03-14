'use client'

import { useState } from 'react'
import { Loader2, CheckCircle2 } from 'lucide-react'
import type { EnquiryFormData } from '@/lib/validations'

interface FormErrors {
  [key: string]: string
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<Partial<EnquiryFormData>>({
    fullName: '',
    email: '',
    industryType: '',
    companyName: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName || formData.fullName.length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters'
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.industryType || formData.industryType.length < 2) {
      newErrors.industryType = 'Industry type is required'
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message =
        'Please provide at least 10 characters describing your enquiry'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setIsSuccess(true)
      setFormData({
        fullName: '',
        email: '',
        industryType: '',
        companyName: '',
        message: '',
      })
    } catch (error) {
      setErrors({
        submit: error instanceof Error ? error.message : 'Failed to submit enquiry. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600 mb-4" />
        <h3 className="text-xl font-semibold text-slate-900 mb-2">
          Thank You!
        </h3>
        <p className="text-slate-600">
          We&apos;ve received your enquiry and will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  const inputClasses = `w-full rounded-lg border bg-white px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 border-slate-200 focus:border-primary hover:border-slate-300`

  const errorInputClasses = `border-red-500 focus:border-red-500 focus:ring-red-500/20`

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`${inputClasses} ${errors.fullName ? errorInputClasses : ''}`}
            required
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Email <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputClasses} ${errors.email ? errorInputClasses : ''}`}
            required
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="industryType"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Industry Type <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="industryType"
            name="industryType"
            value={formData.industryType}
            onChange={handleChange}
            className={`${inputClasses} ${errors.industryType ? errorInputClasses : ''}`}
            required
            placeholder="e.g. Plumbing, Dental, Real Estate"
          />
          {errors.industryType && (
            <p className="mt-1 text-sm text-red-500">{errors.industryType}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Company Name <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your Business Ltd"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          How can we help? <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`${inputClasses} ${errors.message ? errorInputClasses : ''}`}
          placeholder="Tell us about your business and what you're looking to automate..."
          required
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      {errors.submit && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-sm text-red-600">{errors.submit}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-primary px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Enquiry'
        )}
      </button>
    </form>
  )
}

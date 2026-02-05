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
    companyName: '',
    email: '',
    phoneNumber: '',
    companySize: '1-10',
    currentTools: '',
    automationNeeds: '',
    monthlyRevenue: '<£50k',
    referralSource: 'Google',
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

    if (!formData.companyName || formData.companyName.length < 2) {
      newErrors.companyName = 'Company name must be at least 2 characters'
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (
      formData.phoneNumber &&
      !/^(\+44|0)[1-9]\d{8,9}$/.test(formData.phoneNumber)
    ) {
      newErrors.phoneNumber = 'Please enter a valid UK phone number'
    }

    if (
      !formData.automationNeeds ||
      formData.automationNeeds.length < 10
    ) {
      newErrors.automationNeeds =
        'Please provide at least 10 characters describing what you would like to automate'
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
        companyName: '',
        email: '',
        phoneNumber: '',
        companySize: '1-10',
        currentTools: '',
        automationNeeds: '',
        monthlyRevenue: '<£50k',
        referralSource: 'Google',
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
      <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-400 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">
          Thank You!
        </h3>
        <p className="text-gray-300">
          We&apos;ve received your enquiry and will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  const inputClasses = `w-full rounded-lg border bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-1 focus:ring-primary ${'border-white/10 focus:border-primary hover:border-white/20'
    }`

  const errorInputClasses = `border-red-500/50 focus:border-red-500 focus:ring-red-500/50`

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-300 mb-2"
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
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Company Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`${inputClasses} ${errors.companyName ? errorInputClasses : ''}`}
            required
          />
          {errors.companyName && (
            <p className="mt-1 text-sm text-red-400">{errors.companyName}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
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
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+44 123 456 7890"
            className={`${inputClasses} ${errors.phoneNumber ? errorInputClasses : ''}`}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-sm text-red-400">{errors.phoneNumber}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="companySize"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Company Size <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <select
              id="companySize"
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer`}
              required
            >
              <option value="1-10" className="bg-gray-900">1-10 employees</option>
              <option value="11-50" className="bg-gray-900">11-50 employees</option>
              <option value="51-200" className="bg-gray-900">51-200 employees</option>
              <option value="201-500" className="bg-gray-900">201-500 employees</option>
              <option value="500+" className="bg-gray-900">500+ employees</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="monthlyRevenue"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Monthly Revenue <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <select
              id="monthlyRevenue"
              name="monthlyRevenue"
              value={formData.monthlyRevenue}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer`}
              required
            >
              <option value="<£50k" className="bg-gray-900">Less than £50k</option>
              <option value="£50k-£250k" className="bg-gray-900">£50k - £250k</option>
              <option value="£250k-£1M" className="bg-gray-900">£250k - £1M</option>
              <option value="£1M-£5M" className="bg-gray-900">£1M - £5M</option>
              <option value="£5M+" className="bg-gray-900">£5M+</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="currentTools"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Current Tools Used
        </label>
        <textarea
          id="currentTools"
          name="currentTools"
          value={formData.currentTools}
          onChange={handleChange}
          rows={3}
          className={inputClasses}
          placeholder="e.g., Salesforce, QuickBooks, Excel, etc."
        />
      </div>

      <div>
        <label
          htmlFor="automationNeeds"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          What would you like to automate? <span className="text-primary">*</span>
        </label>
        <textarea
          id="automationNeeds"
          name="automationNeeds"
          value={formData.automationNeeds}
          onChange={handleChange}
          rows={4}
          className={`${inputClasses} ${errors.automationNeeds ? errorInputClasses : ''}`}
          placeholder="Please describe the processes or tasks you'd like to automate..."
          required
        />
        {errors.automationNeeds && (
          <p className="mt-1 text-sm text-red-400">{errors.automationNeeds}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="referralSource"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          How did you hear about us? <span className="text-primary">*</span>
        </label>
        <div className="relative">
          <select
            id="referralSource"
            name="referralSource"
            value={formData.referralSource}
            onChange={handleChange}
            className={`${inputClasses} appearance-none cursor-pointer`}
            required
          >
            <option value="Google" className="bg-gray-900">Google</option>
            <option value="LinkedIn" className="bg-gray-900">LinkedIn</option>
            <option value="Referral" className="bg-gray-900">Referral</option>
            <option value="Other" className="bg-gray-900">Other</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
          </div>
        </div>
      </div>

      {errors.submit && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4">
          <p className="text-sm text-red-400">{errors.submit}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-gradient-to-r from-primary to-primary-dark px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Enquiry'
        )}
      </button>
    </form>
  )
}

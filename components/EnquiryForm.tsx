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
      <div className="rounded-lg bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600">
          We&apos;ve received your enquiry and will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full rounded-md border px-3 py-2 ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            } focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
            required
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`w-full rounded-md border px-3 py-2 ${
              errors.companyName ? 'border-red-500' : 'border-gray-300'
            } focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
            required
          />
          {errors.companyName && (
            <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-md border px-3 py-2 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 mb-2"
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
            className={`w-full rounded-md border px-3 py-2 ${
              errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
            } focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="companySize"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Company Size <span className="text-red-500">*</span>
          </label>
          <select
            id="companySize"
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            required
          >
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-500">201-500 employees</option>
            <option value="500+">500+ employees</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="monthlyRevenue"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Monthly Revenue <span className="text-red-500">*</span>
          </label>
          <select
            id="monthlyRevenue"
            name="monthlyRevenue"
            value={formData.monthlyRevenue}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            required
          >
            <option value="<£50k">Less than £50k</option>
            <option value="£50k-£250k">£50k - £250k</option>
            <option value="£250k-£1M">£250k - £1M</option>
            <option value="£1M-£5M">£1M - £5M</option>
            <option value="£5M+">£5M+</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="currentTools"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Current Tools Used
        </label>
        <textarea
          id="currentTools"
          name="currentTools"
          value={formData.currentTools}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="e.g., Salesforce, QuickBooks, Excel, etc."
        />
      </div>

      <div>
        <label
          htmlFor="automationNeeds"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          What would you like to automate? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="automationNeeds"
          name="automationNeeds"
          value={formData.automationNeeds}
          onChange={handleChange}
          rows={4}
          className={`w-full rounded-md border px-3 py-2 ${
            errors.automationNeeds ? 'border-red-500' : 'border-gray-300'
          } focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
          placeholder="Please describe the processes or tasks you'd like to automate..."
          required
        />
        {errors.automationNeeds && (
          <p className="mt-1 text-sm text-red-600">{errors.automationNeeds}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="referralSource"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          How did you hear about us? <span className="text-red-500">*</span>
        </label>
        <select
          id="referralSource"
          name="referralSource"
          value={formData.referralSource}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          required
        >
          <option value="Google">Google</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Referral">Referral</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {errors.submit && (
        <div className="rounded-md bg-red-50 p-4">
          <p className="text-sm text-red-800">{errors.submit}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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



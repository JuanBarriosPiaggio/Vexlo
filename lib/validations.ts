import { z } from 'zod'

export const enquirySchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z
    .union([z.string().regex(/^(\+44|0)[1-9]\d{8,9}$/, 'Please enter a valid UK phone number'), z.literal('')])
    .optional(),
  companySize: z.enum(['1-10', '11-50', '51-200', '201-500', '500+']),
  currentTools: z.string().optional(),
  automationNeeds: z
    .string()
    .min(10, 'Please provide at least 10 characters describing what you would like to automate'),
  monthlyRevenue: z.enum([
    '<£50k',
    '£50k-£250k',
    '£250k-£1M',
    '£1M-£5M',
    '£5M+',
  ]),
  referralSource: z.enum(['Google', 'LinkedIn', 'Referral', 'Other']),
})

export type EnquiryFormData = z.infer<typeof enquirySchema>


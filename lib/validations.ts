import { z } from 'zod'

export const enquirySchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  industryType: z.string().min(2, 'Industry type is required'),
  companyName: z.string().optional(),
  message: z
    .string()
    .min(10, 'Please provide at least 10 characters describing your enquiry'),
})

export type EnquiryFormData = z.infer<typeof enquirySchema>

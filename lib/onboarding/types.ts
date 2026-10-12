export const ONBOARDING_SERVICES = [
  { id: 'website', label: 'Lead-generating website' },
  { id: 'listings', label: 'Business listings (GHL)' },
  { id: 'reviews', label: 'Google review automation' },
  { id: 'automation', label: 'Missed-call / booking automation' },
] as const

export type OnboardingServiceId = (typeof ONBOARDING_SERVICES)[number]['id']

export const ONBOARDING_STATUSES = [
  { id: 'draft', label: 'Draft' },
  { id: 'awaiting_client', label: 'Waiting on client' },
  { id: 'in_progress', label: 'In progress' },
  { id: 'complete', label: 'Complete' },
] as const

export type OnboardingStatus = (typeof ONBOARDING_STATUSES)[number]['id']

export type AdminSide = {
  services: OnboardingServiceId[]
  status: OnboardingStatus
  internalNotes: string
  scope: string
  targetKeywords: string
  competitors: string
  ghlSubAccount: string
  ghlLocationId: string
  goLiveDate: string
}

export type ClientSide = {
  contactName: string
  email: string
  phone: string
  businessName: string
  tradingName: string
  companyNumber: string
  addressLine1: string
  addressLine2: string
  city: string
  postcode: string
  website: string
  googleBusinessUrl: string
  googleAccountEmail: string
  facebookUrl: string
  instagramUrl: string
  otherProfiles: string
  primaryCategory: string
  extraCategories: string
  openingHours: string
  servicesOffered: string
  serviceAreas: string
  shortDescription: string
  longDescription: string
  logoUrl: string
  brandColours: string
  domainRegistrar: string
  domainLoginEmail: string
  integrations: string
  bookingTool: string
  reviewReplyTone: string
  reviewRequestTiming: string
  existingDirectories: string
  extraNotes: string
}

export type OnboardingRecord = {
  id: string
  slug: string
  passwordHash: string
  createdAt: string
  updatedAt: string
  clientSubmittedAt: string | null
  admin: AdminSide
  client: ClientSide
}

export type PublicOnboarding = Omit<OnboardingRecord, 'passwordHash'>

export const emptyAdmin = (): AdminSide => ({
  services: [],
  status: 'draft',
  internalNotes: '',
  scope: '',
  targetKeywords: '',
  competitors: '',
  ghlSubAccount: '',
  ghlLocationId: '',
  goLiveDate: '',
})

export const emptyClient = (): ClientSide => ({
  contactName: '',
  email: '',
  phone: '',
  businessName: '',
  tradingName: '',
  companyNumber: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  postcode: '',
  website: '',
  googleBusinessUrl: '',
  googleAccountEmail: '',
  facebookUrl: '',
  instagramUrl: '',
  otherProfiles: '',
  primaryCategory: '',
  extraCategories: '',
  openingHours: '',
  servicesOffered: '',
  serviceAreas: '',
  shortDescription: '',
  longDescription: '',
  logoUrl: '',
  brandColours: '',
  domainRegistrar: '',
  domainLoginEmail: '',
  integrations: '',
  bookingTool: '',
  reviewReplyTone: '',
  reviewRequestTiming: '',
  existingDirectories: '',
  extraNotes: '',
})

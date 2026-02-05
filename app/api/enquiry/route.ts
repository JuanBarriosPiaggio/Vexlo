import { NextRequest, NextResponse } from 'next/server'
import { enquirySchema } from '@/lib/validations'
import { sendEnquiryEmail } from '@/lib/email'
import { checkRateLimit } from '@/lib/rate-limit'

// Mark as dynamic to prevent build-time execution
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  // Lazy import MongoDB to avoid build-time execution
  const { getDb } = await import('@/lib/mongodb')
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'

    // Check rate limit
    const rateLimit = checkRateLimit(ip)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Validate input
    const validationResult = enquirySchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // Save to MongoDB
    const db = await getDb()
    const collection = db.collection('enquiries')
    
    const enquiry = {
      fullName: data.fullName,
      companyName: data.companyName,
      email: data.email,
      phoneNumber: data.phoneNumber || null,
      companySize: data.companySize,
      currentTools: data.currentTools || null,
      automationNeeds: data.automationNeeds,
      monthlyRevenue: data.monthlyRevenue,
      referralSource: data.referralSource,
      submittedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    
    const result = await collection.insertOne(enquiry)

    // Send email notification (non-blocking)
    sendEnquiryEmail(data).catch((error) => {
      console.error('Failed to send email notification:', error)
    })

    return NextResponse.json(
      { message: 'Enquiry submitted successfully', id: result.insertedId.toString() },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting enquiry:', error)
    
    // Provide more helpful error messages
    if (error instanceof Error) {
      if (error.message.includes('connection string') || error.message.includes('MONGO_URL')) {
        return NextResponse.json(
          { error: 'Database configuration error. Please contact support.' },
          { status: 500 }
        )
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to submit enquiry. Please try again.' },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { enquirySchema } from '@/lib/validations'
import { sendEnquiryEmail } from '@/lib/email'
import { checkRateLimit } from '@/lib/rate-limit'
import { saveEnquiry } from '@/lib/enquiries'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'

    const rateLimit = checkRateLimit(ip)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    console.log('Received enquiry submission:', { ...body, email: '***' })

    const validationResult = enquirySchema.safeParse(body)
    if (!validationResult.success) {
      console.error('Validation failed:', validationResult.error.errors)
      return NextResponse.json(
        { error: 'Validation failed', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const data = validationResult.data
    const record = await saveEnquiry(data)
    console.log('Enquiry saved to file:', record.id)

    sendEnquiryEmail(data).catch((error) => {
      console.error('Failed to send email notification:', error)
    })

    return NextResponse.json(
      { message: 'Enquiry submitted successfully', id: record.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting enquiry:', error)
    return NextResponse.json(
      { error: 'Failed to submit enquiry. Please try again.' },
      { status: 500 }
    )
  }
}

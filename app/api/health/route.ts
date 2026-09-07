import { NextResponse } from 'next/server'
import { checkEnquiryStore } from '@/lib/enquiries'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET() {
  try {
    await checkEnquiryStore()
    return NextResponse.json(
      { status: 'healthy', storage: 'file', timestamp: new Date().toISOString() },
      { status: 200 }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Storage check failed'
    console.error('Health check failed:', errorMessage)
    return NextResponse.json(
      { status: 'unhealthy', storage: 'file', error: 'Enquiry storage is not writable' },
      { status: 503 }
    )
  }
}

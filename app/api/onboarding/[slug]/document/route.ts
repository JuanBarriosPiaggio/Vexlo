import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/onboarding/auth'
import { buildOnboardingDocx } from '@/lib/onboarding/document'
import { getClient } from '@/lib/onboarding/store'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET(
  _request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const session = await getSession()
  if (!session || session.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorised.' }, { status: 401 })
  }

  const record = await getClient(params.slug)
  if (!record) return NextResponse.json({ error: 'Not found.' }, { status: 404 })

  const { buffer, fileName } = await buildOnboardingDocx(record)
  return new NextResponse(new Uint8Array(buffer), {
    status: 200,
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'Content-Disposition': `attachment; filename="${fileName}"`,
      'Cache-Control': 'no-store',
    },
  })
}

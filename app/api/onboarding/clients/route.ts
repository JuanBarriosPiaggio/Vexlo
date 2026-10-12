import { NextRequest, NextResponse } from 'next/server'
import { getSession, generatePassword, hashPassword } from '@/lib/onboarding/auth'
import { createClient, listClients, toPublic } from '@/lib/onboarding/store'
import { ONBOARDING_SERVICES, type OnboardingServiceId } from '@/lib/onboarding/types'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET() {
  const session = await getSession()
  if (session?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorised.' }, { status: 401 })
  }
  return NextResponse.json({ clients: await listClients() })
}

export async function POST(request: NextRequest) {
  const session = await getSession()
  if (session?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorised.' }, { status: 401 })
  }

  const body = await request.json().catch(() => null)
  const businessName = String(body?.businessName || '').trim()
  if (businessName.length < 2) {
    return NextResponse.json({ error: 'Business name is required.' }, { status: 400 })
  }

  const allowed = new Set(ONBOARDING_SERVICES.map((s) => s.id))
  const services = (Array.isArray(body?.services) ? body.services : []).filter((s: string) =>
    allowed.has(s as OnboardingServiceId)
  ) as OnboardingServiceId[]

  const password = String(body?.password || '').trim() || generatePassword()
  const record = await createClient({
    businessName,
    slug: body?.slug ? String(body.slug) : undefined,
    passwordHash: await hashPassword(password),
    services,
  })

  return NextResponse.json({
    client: toPublic(record),
    password,
    url: `/onboarding/${record.slug}`,
  })
}

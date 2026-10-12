import { NextRequest, NextResponse } from 'next/server'
import { generatePassword, getSession, hashPassword } from '@/lib/onboarding/auth'
import { forViewer, getClient, toPublic, updateClient } from '@/lib/onboarding/store'
import { emptyAdmin, emptyClient, type AdminSide, type ClientSide } from '@/lib/onboarding/types'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

function canAccess(slug: string, session: Awaited<ReturnType<typeof getSession>>) {
  if (!session) return false
  if (session.role === 'admin') return true
  return session.role === 'client' && session.slug === slug
}

export async function GET(
  _request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const session = await getSession()
  if (!canAccess(params.slug, session)) {
    return NextResponse.json({ error: 'Unauthorised.' }, { status: 401 })
  }
  const record = await getClient(params.slug)
  if (!record) return NextResponse.json({ error: 'Not found.' }, { status: 404 })
  return NextResponse.json({ client: forViewer(record, session!.role), role: session!.role })
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const session = await getSession()
  if (!canAccess(params.slug, session)) {
    return NextResponse.json({ error: 'Unauthorised.' }, { status: 401 })
  }

  const body = await request.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })

  const patch: Parameters<typeof updateClient>[1] = {}

  if (session!.role === 'admin' && body.admin && typeof body.admin === 'object') {
    const allowed = emptyAdmin()
    patch.admin = {} as Partial<AdminSide>
    for (const key of Object.keys(allowed) as (keyof AdminSide)[]) {
      if (body.admin[key] !== undefined) (patch.admin as AdminSide)[key] = body.admin[key]
    }
  }

  if (body.client && typeof body.client === 'object') {
    const allowed = emptyClient()
    patch.client = {} as Partial<ClientSide>
    for (const key of Object.keys(allowed) as (keyof ClientSide)[]) {
      if (body.client[key] !== undefined) (patch.client as ClientSide)[key] = body.client[key]
    }
    if (session!.role === 'client') patch.markSubmitted = true
  }

  if (session!.role === 'admin' && (body.generatePassword || body.password)) {
    const nextPassword = body.generatePassword
      ? generatePassword()
      : String(body.password).trim()
    if (nextPassword.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters.' }, { status: 400 })
    }
    patch.passwordHash = await hashPassword(nextPassword)
    patch.password = nextPassword
  }

  const updated = await updateClient(params.slug, patch)
  if (!updated) return NextResponse.json({ error: 'Not found.' }, { status: 404 })
  return NextResponse.json({ client: toPublic(updated) })
}

import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit } from '@/lib/rate-limit'
import {
  SESSION_COOKIE,
  checkAdminPassword,
  cookieOptions,
  sessionExpiry,
  signSession,
  verifyPassword,
} from '@/lib/onboarding/auth'
import { getClient } from '@/lib/onboarding/store'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
  const rate = checkRateLimit(`onboarding-login:${ip}`)
  if (!rate.allowed) {
    return NextResponse.json({ error: 'Too many attempts. Try again later.' }, { status: 429 })
  }

  const body = await request.json().catch(() => null)
  const role = body?.role
  const password = String(body?.password || '')

  if (!password) {
    return NextResponse.json({ error: 'Password is required.' }, { status: 400 })
  }

  if (role === 'admin') {
    if (!checkAdminPassword(password)) {
      return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 })
    }
    const token = signSession({ role: 'admin', exp: sessionExpiry() })
    const res = NextResponse.json({ ok: true, role: 'admin', redirect: '/onboarding/admin' })
    res.cookies.set(SESSION_COOKIE, token, cookieOptions())
    return res
  }

  const slug = String(body?.slug || '')
    .trim()
    .toLowerCase()
  if (!slug) {
    return NextResponse.json({ error: 'Project code is required.' }, { status: 400 })
  }

  const client = await getClient(slug)
  if (!client || !(await verifyPassword(password, client.passwordHash))) {
    return NextResponse.json({ error: 'Incorrect project code or password.' }, { status: 401 })
  }

  const token = signSession({ role: 'client', slug: client.slug, exp: sessionExpiry() })
  const res = NextResponse.json({ ok: true, role: 'client', redirect: `/onboarding/${client.slug}` })
  res.cookies.set(SESSION_COOKIE, token, cookieOptions())
  return res
}

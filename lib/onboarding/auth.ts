import { createHmac, randomBytes, scrypt as scryptCb, timingSafeEqual } from 'crypto'
import { promisify } from 'util'
import { cookies } from 'next/headers'

const scrypt = promisify(scryptCb)

export const SESSION_COOKIE = 'vexlo_onboarding'
const SESSION_DAYS = 14

export type Session =
  | { role: 'admin'; exp: number }
  | { role: 'client'; slug: string; exp: number }

function secret() {
  const value = process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || process.env.ONBOARDING_SECRET
  if (!value) {
    throw new Error('ADMIN_SECRET or ADMIN_PASSWORD must be set for onboarding.')
  }
  return value
}

export async function hashPassword(password: string) {
  const salt = randomBytes(16).toString('hex')
  const derived = (await scrypt(password, salt, 64)) as Buffer
  return `${salt}:${derived.toString('hex')}`
}

export async function verifyPassword(password: string, stored: string) {
  const [salt, hex] = stored.split(':')
  if (!salt || !hex) return false
  const derived = (await scrypt(password, salt, 64)) as Buffer
  const expected = Buffer.from(hex, 'hex')
  if (derived.length !== expected.length) return false
  return timingSafeEqual(derived, expected)
}

export function generatePassword() {
  return randomBytes(5).toString('base64url')
}

export function signSession(session: Session) {
  const payload = Buffer.from(JSON.stringify(session)).toString('base64url')
  const sig = createHmac('sha256', secret()).update(payload).digest('base64url')
  return `${payload}.${sig}`
}

export function readSessionToken(token: string | undefined | null): Session | null {
  if (!token) return null
  const [payload, sig] = token.split('.')
  if (!payload || !sig) return null
  const expected = createHmac('sha256', secret()).update(payload).digest('base64url')
  const a = Buffer.from(sig)
  const b = Buffer.from(expected)
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null
  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as Session
    if (!session?.exp || Date.now() > session.exp) return null
    if (session.role === 'admin') return session
    if (session.role === 'client' && session.slug) return session
    return null
  } catch {
    return null
  }
}

export function sessionExpiry() {
  return Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000
}

export async function getSession(): Promise<Session | null> {
  const token = cookies().get(SESSION_COOKIE)?.value
  return readSessionToken(token)
}

export function cookieOptions() {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  }
}

export function adminPasswordConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD)
}

export function checkAdminPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected) return false
  const a = Buffer.from(password)
  const b = Buffer.from(expected)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

// Simple in-memory rate limiting (for production, consider Redis)
const submissions = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const MAX_SUBMISSIONS = 5

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const record = submissions.get(ip)

  if (!record || now > record.resetTime) {
    submissions.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return { allowed: true, remaining: MAX_SUBMISSIONS - 1 }
  }

  if (record.count >= MAX_SUBMISSIONS) {
    return { allowed: false, remaining: 0 }
  }

  record.count++
  return { allowed: true, remaining: MAX_SUBMISSIONS - record.count }
}



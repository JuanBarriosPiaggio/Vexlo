export const dynamic = 'force-static'

const BODY = 'google.com, pub-5881206053165150, DIRECT, f08c47fec0942fa0\n'

export function GET() {
  return new Response(BODY, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}

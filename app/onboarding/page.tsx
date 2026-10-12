import { redirect } from 'next/navigation'
import { getSession } from '@/lib/onboarding/auth'
import LoginForm from '@/components/onboarding/LoginForm'

export const dynamic = 'force-dynamic'

export default async function OnboardingLoginPage() {
  const session = await getSession()
  if (session?.role === 'admin') redirect('/onboarding/admin')
  if (session?.role === 'client') redirect(`/onboarding/${session.slug}`)

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-28">
      <div className="w-full max-w-md">
        <div className="section-tag">Private</div>
        <h1
          className="font-display text-white mt-2 mb-3"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1 }}
        >
          Client onboarding
        </h1>
        <p className="text-sm leading-relaxed mb-8" style={{ color: '#888' }}>
          Sign in with the project code and password Vexlo sent you. This page is not public — only you and Vexlo can open your details.
        </p>
        <LoginForm />
      </div>
    </div>
  )
}

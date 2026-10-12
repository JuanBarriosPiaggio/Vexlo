import { redirect } from 'next/navigation'
import { getSession } from '@/lib/onboarding/auth'
import { forViewer, getClient } from '@/lib/onboarding/store'
import Board from '@/components/onboarding/Board'

export const dynamic = 'force-dynamic'

export default async function OnboardingClientPage({ params }: { params: { slug: string } }) {
  const session = await getSession()
  if (!session) redirect('/onboarding')
  if (session.role === 'client' && session.slug !== params.slug) redirect(`/onboarding/${session.slug}`)
  if (session.role !== 'admin' && session.role !== 'client') redirect('/onboarding')

  const record = await getClient(params.slug)
  if (!record) redirect(session.role === 'admin' ? '/onboarding/admin' : '/onboarding')

  return <Board initial={forViewer(record, session.role)} role={session.role} />
}

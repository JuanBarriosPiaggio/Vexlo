import { redirect } from 'next/navigation'
import { getSession } from '@/lib/onboarding/auth'
import { listClients } from '@/lib/onboarding/store'
import AdminHome from '@/components/onboarding/AdminHome'

export const dynamic = 'force-dynamic'

export default async function OnboardingAdminPage() {
  const session = await getSession()
  if (session?.role !== 'admin') redirect('/onboarding')
  const clients = await listClients()
  return <AdminHome clients={clients} />
}

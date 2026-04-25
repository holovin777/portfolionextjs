import { redirect } from 'next/navigation'
import { getAdminSession } from '@/lib/auth'
import ProfileForm from '@/components/admin/ProfileForm'

async function getProfile(token: string, customerId: string) {
  const response = await fetch(
    `${process.env.SPRING_API_URL}/api/v1/customer/${customerId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    }
  )

  if (!response.ok) {
    throw new Error('Failed to load profile')
  }

  return response.json()
}

export default async function AdminProfilePage() {
  const session = await getAdminSession()

  if (!session.token || !session.customerId) {
    redirect('/admin/login')
  }

  const profile = await getProfile(session.token, session.customerId)

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Edit profile</h1>
      <ProfileForm initialData={profile} />
    </main>
  )
}
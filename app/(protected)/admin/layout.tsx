import { redirect } from 'next/navigation'
import { getAdminSession } from '@/lib/auth'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getAdminSession()

  if (!session.isLoggedIn) {
    redirect('/admin/login')
  }

  return <>{children}</>
}
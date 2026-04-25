import Link from 'next/link'
import { getAdminSession } from '@/lib/auth'

export default async function AdminPage() {
  const session = await getAdminSession()

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-2 text-3xl font-bold">Admin panel</h1>
      <p className="mb-8 text-sm text-gray-600">
        Logged in as <strong>{session.email}</strong>
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Link
          href="/admin/profile"
          className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
        >
          <h2 className="mb-2 text-xl font-semibold">My profile</h2>
          <p className="text-sm text-gray-600">
            Edit your own portfolio profile, public details, contacts, and descriptions.
          </p>
        </Link>

        <Link
          href="/admin/customers"
          className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
        >
          <h2 className="mb-2 text-xl font-semibold">Manage customers</h2>
          <p className="text-sm text-gray-600">
            Open the list of customers and manage their profiles as administrator.
          </p>
        </Link>
      </div>
    </main>
  )
}
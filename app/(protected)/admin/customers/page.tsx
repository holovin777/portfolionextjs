import Link from 'next/link'
import { getAdminSession } from '@/lib/auth'

type Customer = {
  id: string
  firstName?: string
  lastName?: string
  email?: string
  desiredProfession?: string
  website?: string
}

async function getCustomers(token: string) {
  const response = await fetch(
    `${process.env.SPRING_API_URL}/api/v1/customer/all`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    }
  )

  if (!response.ok) {
    throw new Error('Failed to load customers')
  }

  return response.json() as Promise<Customer[]>
}

export default async function AdminCustomersPage() {
  const session = await getAdminSession()

  if (!session.token) {
    throw new Error('Unauthorized')
  }

  const customers = await getCustomers(session.token)

  return (
    <main className="mx-auto max-w-6xl p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Manage customers</h1>
          <p className="text-sm text-gray-600">
            Customers available in your Spring backend.
          </p>
        </div>

        <Link
          href="/admin"
          className="rounded-xl border px-4 py-2 text-sm font-medium"
        >
          Back to admin
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b bg-gray-50 text-left">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Profession</th>
              <th className="px-4 py-3">Website</th>
              <th className="px-4 py-3">ID</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b last:border-b-0">
                <td className="px-4 py-3">
                  {customer.firstName} {customer.lastName}
                </td>
                <td className="px-4 py-3">{customer.email || '-'}</td>
                <td className="px-4 py-3">{customer.desiredProfession || '-'}</td>
                <td className="px-4 py-3">{customer.website || '-'}</td>
                <td className="px-4 py-3 font-mono text-xs">{customer.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
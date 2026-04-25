import { cookies } from 'next/headers'

export async function getAdminSession() {
  const cookieStore = await cookies()

  const token = cookieStore.get('admin_token')?.value ?? null
  const email = cookieStore.get('admin_email')?.value ?? null
  const role = cookieStore.get('admin_role')?.value ?? null
  const customerId = cookieStore.get('admin_customer_id')?.value ?? null

  return {
    token,
    email,
    role,
    customerId,
    isLoggedIn: !!token,
  }
}
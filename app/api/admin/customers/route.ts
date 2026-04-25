import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const springResponse = await fetch(
    `${process.env.SPRING_API_URL}/api/v1/customer/all`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    }
  )

  if (!springResponse.ok) {
    return NextResponse.json(
      { error: 'Failed to load customers' },
      { status: springResponse.status }
    )
  }

  const data = await springResponse.json()
  return NextResponse.json(data)
}
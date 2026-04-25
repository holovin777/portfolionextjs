import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const cookieStore = await cookies()

  const token = cookieStore.get('admin_token')?.value
  const customerId = cookieStore.get('admin_customer_id')?.value

  if (!token || !customerId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const springResponse = await fetch(
    `${process.env.SPRING_API_URL}/api/v1/customer/${customerId}`,
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
      { error: 'Failed to load profile' },
      { status: springResponse.status }
    )
  }

  const data = await springResponse.json()
  return NextResponse.json(data)
}

export async function PUT(request: Request) {
  const cookieStore = await cookies()

  const token = cookieStore.get('admin_token')?.value
  const customerId = cookieStore.get('admin_customer_id')?.value

  if (!token || !customerId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()

  const springResponse = await fetch(
    `${process.env.SPRING_API_URL}/api/v1/customer/${customerId}/update`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
      cache: 'no-store',
    }
  )

  if (!springResponse.ok) {
    const text = await springResponse.text().catch(() => '')
    return NextResponse.json(
      { error: text || 'Failed to update profile' },
      { status: springResponse.status }
    )
  }

  return NextResponse.json({ ok: true })
}
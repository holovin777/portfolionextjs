import { Customer } from "@/types/customer"

export async function getCustomer(): Promise<Customer> {
  const apiBaseUrl = process.env.API_BASE_URL
  const customerId = process.env.CUSTOMER_ID

  if (!apiBaseUrl || !customerId) {
    throw new Error("Missing API_BASE_URL or CUSTOMER_ID in environment variables")
  }

  const res = await fetch(`${apiBaseUrl}/api/v1/customer/${customerId}`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch customer data: ${res.status}`)
  }

  return res.json()
}

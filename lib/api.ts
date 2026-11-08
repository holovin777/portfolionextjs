import { Customer } from "@/types/customer";

export async function getCustomer(): Promise<Customer> {
  const apiBaseUrl = process.env.SPRING_API_URL;
  const customerSlug = process.env.CUSTOMER_SLUG;

  if (!apiBaseUrl || !customerSlug) {
    throw new Error(
      "Missing SPRING_API_URL or CUSTOMER_SLUG in environment variables",
    );
  }

  const res = await fetch(
    `${apiBaseUrl}/api/v1/customer/public/${customerSlug}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch customer data: ${res.status}`);
  }

  return res.json();
}

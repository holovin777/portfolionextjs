type PositionAtWork = {
  id: number
  name: string
  nameIt: string
}

type Company = {
  id: number
  name: string
  nameIt: string
  location: string
  locationIt: string
  website: string
}

type WorkingExperience = {
  id: number
  positionAtWork: PositionAtWork
  company: Company
  jobDescription: string
  jobDescriptionIt: string
  startedWork: string
  finishedWork: string | null
}

type Social = {
  id: number
  title: string
  link: string
  imageLink: string | null
  description: string
}

type Customer = {
  id: string
  firstName: string
  lastName: string
  phoneNumber: string
  birthday: string
  email: string
  residence: string
  website: string
  blog: string
  description: string
  workingExperiences: WorkingExperience[]
  socials: Social[]
}

async function getCustomer(): Promise<Customer> {
  const apiBaseUrl = process.env.API_BASE_URL
  const customerId = process.env.CUSTOMER_ID

  if (!apiBaseUrl || !customerId) {
    throw new Error("Missing API_BASE_URL or CUSTOMER_ID in environment variables")
  }

  const res = await fetch(
    `${apiBaseUrl}/api/v1/customer/${customerId}`,
    {
      cache: "no-store",
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch customer data")
  }

  return res.json()
}

export default async function Home() {
  const customer = await getCustomer()

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Portfolio
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            {customer.firstName} {customer.lastName}
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
            {customer.description}
          </p>
        </div>
      </section>
    </main>
  )
}

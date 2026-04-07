import { Customer } from "@/types/customer"

type QuickInfoCardProps = {
  customer: Customer
}

export default function QuickInfoCard({ customer }: QuickInfoCardProps) {
  return (
    <section className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Quick Info
        </p>
        <h2 className="mt-2 text-2xl font-bold">Details</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="text-sm text-zinc-500">Email</p>
          <p className="mt-1 break-all font-medium">{customer.email}</p>
        </div>

        <div>
          <p className="text-sm text-zinc-500">Phone</p>
          <p className="mt-1 font-medium">{customer.phoneNumber}</p>
        </div>

        <div>
          <p className="text-sm text-zinc-500">Residence</p>
          <p className="mt-1 font-medium">{customer.residence}</p>
        </div>

        <div>
          <p className="text-sm text-zinc-500">Driving license</p>
          <p className="mt-1 font-medium">{customer.drivingLicense}</p>
        </div>

        <div>
          <p className="text-sm text-zinc-500">Protected category</p>
          <p className="mt-1 font-medium">
            {customer.protectedCategory ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </section>
  )
}

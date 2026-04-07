import { Customer } from "@/types/customer"

type QuickInfoCardProps = {
  customer: Customer
}

export default function QuickInfoCard({ customer }: QuickInfoCardProps) {
  return (
    <aside className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur">
      <h2 className="text-lg font-semibold">Quick Info</h2>

      <div className="mt-6 space-y-4 text-sm">
        <div>
          <p className="text-zinc-500">Email</p>
          <p className="mt-1 break-all font-medium">{customer.email}</p>
        </div>

        <div>
          <p className="text-zinc-500">Phone</p>
          <p className="mt-1 font-medium">{customer.phoneNumber}</p>
        </div>

        <div>
          <p className="text-zinc-500">Residence</p>
          <p className="mt-1 font-medium">{customer.residence}</p>
        </div>

        <div>
          <p className="text-zinc-500">Driving license</p>
          <p className="mt-1 font-medium">{customer.drivingLicense}</p>
        </div>

        <div>
          <p className="text-zinc-500">Protected category</p>
          <p className="mt-1 font-medium">
            {customer.protectedCategory ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </aside>
  )
}

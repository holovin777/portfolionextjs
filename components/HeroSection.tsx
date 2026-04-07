import { Customer } from "@/types/customer"

type HeroSectionProps = {
  customer: Customer
}

export default function HeroSection({ customer }: HeroSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-400">
            Portfolio / Frontend + Backend
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {customer.firstName} {customer.lastName}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            {customer.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={customer.website}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:opacity-90"
            >
              Visit Website
            </a>

            <a
              href={customer.blog}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold transition hover:bg-zinc-900"
            >
              Visit InnoMarts
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

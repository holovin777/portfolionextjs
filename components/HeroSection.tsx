import { Customer } from "@/types/customer"

type HeroSectionProps = {
  customer: Customer
}

export default function HeroSection({ customer }: HeroSectionProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-green-400">
            PortfolioNextJS / PortfolioSpring
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            {customer.firstName} {customer.lastName}
          </h1>

          <p className="mt-4 max-w-2xl text-xl font-medium text-zinc-300">
            Frontend, backend, and practical problem-solving.
          </p>

          <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
            {customer.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={customer.website}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-green-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-green-400"
            >
              Visit Website
            </a>

            <a
              href={customer.blog}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-green-500/40 hover:bg-zinc-900"
            >
              Visit InnoMarts
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-green-500/5 blur-2xl" />

          <div className="relative rounded-[2rem] border border-zinc-800 bg-zinc-900 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10">
                <span className="font-mono text-2xl font-bold text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.65)]">
                  {"{h}"}
                </span>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Identity
                </p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Holovin / Builder Mindset
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-sm text-zinc-500">Role</p>
                <p className="mt-1 font-medium text-zinc-100">
                  Maintenance Technician / DevOps Enthusiast
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Stack</p>
                <p className="mt-1 font-medium text-zinc-100">
                  Java, Spring Boot, Next.js, Tailwind CSS, TypeScript
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Location</p>
                <p className="mt-1 font-medium text-zinc-100">
                  {customer.residence}
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Mission</p>
                <p className="mt-1 leading-7 text-zinc-300">
                  Build useful systems, connect frontend with backend, and keep
                  technology practical instead of theatrical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

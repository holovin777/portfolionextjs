import Image from "next/image"
import { Customer } from "@/types/customer"

type HeroSectionProps = {
  customer: Customer
}

export default function HeroSection({ customer }: HeroSectionProps) {
  const currentExperience = [...(customer.workingExperiences ?? [])]
    .filter((experience) => !experience.finishedWork)
    .sort(
      (a, b) =>
        new Date(b.startedWork).getTime() -
        new Date(a.startedWork).getTime(),
    )[0]

  const currentRole =
    currentExperience?.positionAtWork?.name ?? "Technical Professional"

  const currentCompany = currentExperience?.company

  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        {/* LEFT SIDE */}
        <div>
          <div className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-green-400">
            Full-Stack Development
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl">
            {customer.firstName} {customer.lastName}
          </h1>

          <h2 className="mt-5 max-w-3xl text-xl font-semibold leading-8 text-zinc-300 sm:text-2xl">
            Full-Stack Developer with an Engineering Mindset.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
            {customer.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-2xl bg-green-500 px-5 py-3 text-sm font-semibold text-black transition duration-200 hover:bg-green-400"
            >
              View Projects
            </a>

            <a
              href="#socials"
              className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 transition duration-200 hover:border-green-500/40 hover:bg-zinc-900"
            >
              Contact Me
            </a>
          </div>

          {/* SMALL TECH SUMMARY */}
          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "Java",
              "Spring Boot",
              "Next.js",
              "TypeScript",
              "PostgreSQL",
              "Linux",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-green-500/5 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/90 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-8">
            {/* PROFILE */}
            <div className="mb-8 flex items-center gap-5">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-[1.8rem] bg-green-500/20 blur-xl" />

                <div className="relative h-28 w-28 overflow-hidden rounded-[1.8rem] border border-green-500/30 bg-zinc-950 shadow-[0_0_35px_rgba(34,197,94,0.18)]">
                  {customer.photoUrl ? (
                    <Image
                      src={customer.photoUrl}
                      alt={`${customer.firstName} ${customer.lastName}`}
                      fill
                      className="object-cover"
                      sizes="112px"
                      priority
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-mono text-3xl font-bold text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.65)]">
                        {"{h}"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="absolute -bottom-2 -right-2 rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-green-400 shadow-[0_0_12px_rgba(34,197,94,0.18)]">
                  Current
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Engineering + Software
                </p>

                <p className="mt-2 text-lg font-semibold text-zinc-100">
                  Builder Mindset
                </p>

                <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-400">
                  Practical engineering experience combined with modern
                  software development.
                </p>
              </div>
            </div>

            <div className="border-t border-zinc-800" />

            {/* CURRENT ROLE */}
            <div className="mt-7 space-y-6">
              <div>
                <p className="text-sm text-zinc-500">Current role</p>

                <p className="mt-1 font-semibold text-zinc-100">
                  {currentRole}
                </p>

                {currentCompany ? (
                  currentCompany.website ? (
                    <a
                      href={currentCompany.website}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-sm font-medium text-green-400 transition hover:text-green-300"
                    >
                      {currentCompany.name}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-green-400">
                      {currentCompany.name}
                    </p>
                  )
                ) : null}
              </div>

              <div>
                <p className="text-sm text-zinc-500">Development</p>

                <p className="mt-1 leading-7 text-zinc-100">
                  Java · Spring Boot · Next.js · TypeScript · PostgreSQL
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Location</p>

                <p className="mt-1 font-medium text-zinc-100">
                  {customer.residence}
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Focus</p>

                <p className="mt-1 leading-7 text-zinc-300">
                  Building reliable web applications, backend services, and
                  practical systems that solve real problems.
                </p>
              </div>
            </div>

            {/* DECORATIVE TERMINAL LINE */}
            <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 font-mono text-xs text-zinc-500">
              <span className="text-green-400">$</span>{" "}
              build --solve-real-problems
              <span className="ml-1 animate-pulse text-green-400">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
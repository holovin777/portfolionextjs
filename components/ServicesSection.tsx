import { services } from "@/lib/services"

type ServicesSectionProps = {
  innomartsUrl: string
}

export default function ServicesSection({
  innomartsUrl,
}: ServicesSectionProps) {
  const servicesUrl = `${innomartsUrl.replace(/\/$/, "")}/en/services`

  return (
    <section
      id="services"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-20"
    >
      {/* HEADER */}
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.22em] text-green-400">
          Services
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          What I Can Build
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          I build modern websites, web applications, and backend systems with a
          practical engineering approach — focused on clarity, reliability,
          performance, and real-world use.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="group flex h-full flex-col rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-500/20 hover:bg-zinc-900 sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-zinc-600">
                  SERVICE_{String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-zinc-100">
                  {service.title}
                </h3>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10">
                <span className="font-mono text-sm font-bold text-green-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            <p className="mt-5 leading-7 text-zinc-400">
              {service.description}
            </p>

            <div className="mt-6 border-t border-zinc-800/80 pt-5">
              <ul className="space-y-3">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-6 text-zinc-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* COMMERCIAL CTA */}
      <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-green-500/20 bg-green-500/[0.04] p-7 sm:p-8">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-green-400">
              Web Development
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-zinc-100">
              Need a website or digital solution?
            </h3>

            <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
              InnoMarts is the business-facing side of my web development work,
              focused on building fast, modern, and maintainable websites for
              businesses, professionals, and practical projects.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={servicesUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-green-500 px-5 py-3 text-sm font-semibold text-black transition duration-200 hover:bg-green-400"
            >
              Explore InnoMarts
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
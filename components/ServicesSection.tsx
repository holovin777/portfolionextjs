import { services } from "@/lib/services"

type ServicesSectionProps = {
  innomartsUrl: string
}

export default function ServicesSection({
  innomartsUrl,
}: ServicesSectionProps) {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Services
        </p>
        <h2 className="mt-2 text-3xl font-bold">What I Can Build</h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          I work across frontend, backend, and practical technical execution.
          The goal is not to impress with noise, but to build something useful,
          fast, and structured.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-[2rem] border border-zinc-800 bg-zinc-900 p-6"
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>

            <p className="mt-4 leading-7 text-zinc-300">
              {service.description}
            </p>

            <ul className="mt-5 space-y-3 text-sm text-zinc-400">
              {service.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-zinc-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-[2rem] border border-zinc-800 bg-zinc-900/60 p-6">
        <h3 className="text-xl font-semibold">Need the commercial side?</h3>

        <p className="mt-3 max-w-2xl leading-7 text-zinc-300">
          For website offers, service details, and the business-facing side of
          my work, visit InnoMarts.
        </p>

        <a
          href={innomartsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:opacity-90"
        >
          Visit InnoMarts Services
        </a>
      </div>
    </section>
  )
}

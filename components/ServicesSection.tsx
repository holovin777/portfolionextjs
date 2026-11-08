import type { Locale } from "@/lib/i18n"

type ServicesSectionProps = {
  innomartsUrl: string
  locale: Locale
}

export default function ServicesSection({
  innomartsUrl,
  locale,
}: ServicesSectionProps) {
  const skills = [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "REST APIs",
    "Next.js",
    "TypeScript",
    "Linux",
  ]

  const labels =
    locale === "it"
      ? {
          eyebrow: "Sviluppo Software",
          title: "Ingegneria supportata dal software.",
          description:
            "Accanto al mio percorso industriale, sviluppo servizi backend, applicazioni web e software basato su database. Considero il software uno strumento pratico per risolvere problemi, organizzare informazioni, automatizzare attività ripetitive e migliorare i processi.",
          webDevelopment: "Sviluppo Web",
          innomartsDescription:
            "La mia attività commerciale di sviluppo web, inclusi siti e applicazioni web, è disponibile attraverso InnoMarts.",
          visitInnomarts: "Visita InnoMarts",
        }
      : {
          eyebrow: "Software Development",
          title: "Engineering supported by software.",
          description:
            "Alongside my industrial background, I develop backend services, web applications, and database-driven software. I see software as a practical tool for solving problems, organizing information, automating repetitive work, and improving processes.",
          webDevelopment: "Web Development",
          innomartsDescription:
            "My commercial web development work, including websites and web applications, is available through InnoMarts.",
          visitInnomarts: "Visit InnoMarts",
        }

  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-6 py-16 sm:py-20"
    >
      <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/50 p-7 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-green-400">
              {labels.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100">
              {labels.title}
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              {labels.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1.5 text-xs font-medium text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
              {labels.webDevelopment}
            </p>

            <h3 className="mt-3 text-lg font-semibold text-zinc-100">
              InnoMarts
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              {labels.innomartsDescription}
            </p>

            <a
              href={innomartsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-400 transition hover:text-green-300"
            >
              {labels.visitInnomarts}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
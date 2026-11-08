type ServicesSectionProps = {
  innomartsUrl: string;
};

export default function ServicesSection({
  innomartsUrl,
}: ServicesSectionProps) {
  const skills = [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "REST APIs",
    "Next.js",
    "TypeScript",
    "Linux",
  ];

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/50 p-7 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-green-400">
              Software Development
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100">
              Engineering supported by software.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              Alongside my industrial background, I develop backend services,
              web applications, and database-driven software. I see software as
              a practical tool for solving problems, organizing information,
              automating repetitive work, and improving processes.
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
              Web Development
            </p>

            <h3 className="mt-3 text-lg font-semibold text-zinc-100">
              InnoMarts
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              My commercial web development work, including websites and web
              applications, is available through InnoMarts.
            </p>

            <a
              href={innomartsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-400 transition hover:text-green-300"
            >
              Visit InnoMarts
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

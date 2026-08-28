import { projects } from "@/lib/projects"

function getStatusStyles(status?: string) {
  switch (status?.toLowerCase()) {
    case "active":
    case "production":
    case "live":
      return "border-green-500/20 bg-green-500/10 text-green-400"

    default:
      return "border-zinc-700 bg-zinc-900 text-zinc-400"
  }
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-20"
    >
      {/* HEADER */}
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.22em] text-green-400">
          Selected Work
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Projects
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          Real projects where I work across frontend, backend, APIs,
          infrastructure, and practical problem-solving.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group flex h-full flex-col rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-500/20 hover:bg-zinc-900 sm:p-7"
          >
            {/* TOP */}
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs text-zinc-600">
                  PROJECT_{String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-2 break-words text-xl font-semibold leading-7 text-zinc-100 [overflow-wrap:anywhere]">
                  {project.title}
                </h3>
              </div>

              {project.status ? (
                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] ${getStatusStyles(
                    project.status,
                  )}`}
                >
                  {project.status}
                </span>
              ) : null}
            </div>

            {/* DESCRIPTION */}
            <p className="mt-5 flex-1 leading-7 text-zinc-400">
              {project.description}
            </p>

            {/* TECH */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1.5 text-xs font-medium text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* LINK */}
            <div className="mt-7 border-t border-zinc-800/80 pt-5">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 transition group-hover:text-green-400"
              >
                View project
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
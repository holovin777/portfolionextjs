import { projects } from "@/lib/projects"

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Selected Work
        </p>
        <h2 className="mt-2 text-3xl font-bold">Projects</h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          A few real projects that connect frontend, backend, content, and
          practical problem-solving.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>

              {project.status ? (
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  {project.status}
                </span>
              ) : null}
            </div>

            <p className="mt-4 leading-7 text-zinc-300">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-sm font-medium text-zinc-100 underline underline-offset-4 transition hover:text-green-400"
            >
              Open project
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

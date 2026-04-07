import { WorkingExperience } from "@/types/customer"

type ExperienceSectionProps = {
  jobs: WorkingExperience[]
}

function formatDate(date: string | null) {
  if (!date) return "Present"

  return new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
  })
}

export default function ExperienceSection({ jobs }: ExperienceSectionProps) {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Timeline
        </p>
        <h2 className="mt-2 text-3xl font-bold">Latest Experience</h2>
      </div>

      <div className="space-y-6">
        {jobs.map((job) => (
          <article
            key={job.id}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  {job.positionAtWork.name}
                </h3>
                <p className="mt-1 text-zinc-400">
                  {job.company.name} · {job.company.location}
                </p>
              </div>

              <p className="text-sm text-zinc-500">
                {formatDate(job.startedWork)} — {formatDate(job.finishedWork)}
              </p>
            </div>

            <p className="mt-4 leading-7 text-zinc-300">{job.jobDescription}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

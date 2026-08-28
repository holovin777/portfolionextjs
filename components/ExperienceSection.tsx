import { WorkingExperience } from "@/types/customer"

type ExperienceSectionProps = {
  jobs: WorkingExperience[]
}

function formatDate(date: string | null) {
  if (!date) return "Present"

  const [year, month] = date.split("-").map(Number)

  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
  }).format(new Date(year, month - 1))
}

export default function ExperienceSection({
  jobs,
}: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-20"
    >
      {/* HEADER */}
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.22em] text-green-400">
          Experience
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Professional Journey
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          A path through engineering, industrial technology, maintenance, and
          software — building practical experience across both physical and
          digital systems.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative">
        <div className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-zinc-800 sm:block" />

        <div className="space-y-6">
          {jobs.map((job) => {
            const isCurrent = !job.finishedWork

            return (
              <article
                key={job.id}
                className="relative sm:pl-10"
              >
                {/* TIMELINE DOT */}
                <div
                  className={`absolute left-0 top-8 hidden h-[15px] w-[15px] rounded-full border sm:block ${
                    isCurrent
                      ? "border-green-400 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                      : "border-zinc-700 bg-zinc-950"
                  }`}
                />

                <div
                  className={`rounded-3xl border p-6 transition duration-200 sm:p-7 ${
                    isCurrent
                      ? "border-green-500/20 bg-green-500/[0.04] shadow-[0_0_35px_rgba(34,197,94,0.05)]"
                      : "border-zinc-800 bg-zinc-900/70 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    {/* ROLE + COMPANY */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-semibold text-zinc-100">
                          {job.positionAtWork.name}
                        </h3>

                        {isCurrent ? (
                          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-green-400">
                            Current
                          </span>
                        ) : null}
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                        {job.company.website ? (
                          <a
                            href={job.company.website}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-green-400 transition hover:text-green-300"
                          >
                            {job.company.name}
                          </a>
                        ) : (
                          <span className="font-medium text-zinc-300">
                            {job.company.name}
                          </span>
                        )}

                        {job.company.location ? (
                          <>
                            <span className="text-zinc-700">•</span>
                            <span className="text-zinc-500">
                              {job.company.location}
                            </span>
                          </>
                        ) : null}
                      </div>
                    </div>

                    {/* DATE */}
                    <div className="shrink-0">
                      <p
                        className={`text-sm font-medium ${
                          isCurrent ? "text-green-400" : "text-zinc-500"
                        }`}
                      >
                        {formatDate(job.startedWork)} —{" "}
                        {formatDate(job.finishedWork)}
                      </p>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  {job.jobDescription ? (
                    <p className="mt-5 max-w-4xl leading-7 text-zinc-400">
                      {job.jobDescription}
                    </p>
                  ) : null}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
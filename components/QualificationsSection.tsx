import { Qualification } from "@/types/customer"

type QualificationsSectionProps = {
  qualifications: Qualification[]
}

function formatDate(date: string | null) {
  if (!date) return "Present"

  const [year, month] = date.split("-").map(Number)

  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
  }).format(new Date(year, month - 1))
}

function getQualificationTitle(item: Qualification) {
  return (
    item.academicDegree ||
    item.speciality ||
    item.course?.name ||
    "Qualification"
  )
}

export default function QualificationsSection({
  qualifications,
}: QualificationsSectionProps) {
  return (
    <section
      id="qualifications"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-20"
    >
      {/* HEADER */}
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.22em] text-green-400">
          Education
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Qualifications
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          Formal education, technical training, and continuous learning that
          support both my engineering background and software development work.
        </p>
      </div>

      {/* QUALIFICATIONS GRID */}
      <div className="grid gap-6 md:grid-cols-2">
        {qualifications.map((item) => {
          const isCurrent = !item.finishedStudying
          const title = getQualificationTitle(item)

          return (
            <article
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl border p-6 transition duration-200 sm:p-7 ${
                isCurrent
                  ? "border-green-500/20 bg-green-500/[0.04]"
                  : "border-zinc-800 bg-zinc-900/70 hover:border-zinc-700"
              }`}
            >
              {/* SMALL DECORATIVE ACCENT */}
              <div
                className={`absolute left-0 top-0 h-full w-px ${
                  isCurrent ? "bg-green-500/50" : "bg-zinc-800"
                }`}
              />

              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    Qualification
                  </p>

                  <h3 className="mt-2 text-xl font-semibold leading-7 text-zinc-100">
                    {title}
                  </h3>
                </div>

                {isCurrent ? (
                  <span className="shrink-0 rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-green-400">
                    Current
                  </span>
                ) : null}
              </div>

              <div className="mt-5">
                <p className="font-medium text-zinc-300">
                  {item.educationalInstitution.name}
                </p>

                <p
                  className={`mt-2 text-sm font-medium ${
                    isCurrent ? "text-green-400" : "text-zinc-500"
                  }`}
                >
                  {formatDate(item.startedStudying)} —{" "}
                  {formatDate(item.finishedStudying)}
                </p>
              </div>

              {/* EXTRA DETAILS */}
              <div className="mt-6 border-t border-zinc-800/80 pt-5">
                {item.speciality &&
                item.speciality !== title ? (
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
                      Speciality
                    </p>

                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                      {item.speciality}
                    </p>
                  </div>
                ) : null}

                {item.course?.name &&
                item.course.name !== title ? (
                  <div
                    className={
                      item.speciality && item.speciality !== title
                        ? "mt-4"
                        : ""
                    }
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
                      Course
                    </p>

                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                      {item.course.name}
                    </p>
                  </div>
                ) : null}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
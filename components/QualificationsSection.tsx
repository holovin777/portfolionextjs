import { Qualification } from "@/types/customer"

type QualificationsSectionProps = {
  qualifications: Qualification[]
}

function formatDate(date: string | null) {
  if (!date) return "Present"

  return new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
  })
}

export default function QualificationsSection({
  qualifications,
}: QualificationsSectionProps) {
  return (
    <section id="qualifications" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Education
        </p>
        <h2 className="mt-2 text-3xl font-bold">Qualifications</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {qualifications.map((item) => (
          <article
            key={item.id}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h3 className="text-lg font-semibold">
              {item.course?.name ||
                item.speciality ||
                item.academicDegree ||
                "Qualification"}
            </h3>

            <p className="mt-2 text-zinc-400">
              {item.educationalInstitution.name}
            </p>

            <p className="mt-3 text-sm text-zinc-500">
              {formatDate(item.startedStudying)} —{" "}
              {formatDate(item.finishedStudying)}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

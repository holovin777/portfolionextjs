import { getCustomer } from "@/lib/api"

function formatDate(date: string | null) {
  if (!date) return "Present"
  return new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
  })
}

export default async function Home() {
  const customer = await getCustomer()

  const latestJobs = [...customer.workingExperiences]
    .sort((a, b) => {
      const aDate = a.finishedWork ?? a.startedWork
      const bDate = b.finishedWork ?? b.startedWork
      return new Date(bDate).getTime() - new Date(aDate).getTime()
    })
    .slice(0, 4)

  const latestQualifications = [...customer.qualifications]
    .sort((a, b) => {
      const aDate = a.finishedStudying ?? a.startedStudying ?? "1900-01-01"
      const bDate = b.finishedStudying ?? b.startedStudying ?? "1900-01-01"
      return new Date(bDate).getTime() - new Date(aDate).getTime()
    })
    .slice(0, 4)

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-400">
              Portfolio / Frontend + Backend
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {customer.firstName} {customer.lastName}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              {customer.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={customer.website}
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:opacity-90"
              >
                Visit Website
              </a>

              <a
                href={customer.blog}
                className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold transition hover:bg-zinc-900"
              >
                Visit InnoMarts
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold">Quick Info</h2>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="text-zinc-500">Email</p>
                <p className="mt-1 break-all font-medium">{customer.email}</p>
              </div>

              <div>
                <p className="text-zinc-500">Phone</p>
                <p className="mt-1 font-medium">{customer.phoneNumber}</p>
              </div>

              <div>
                <p className="text-zinc-500">Residence</p>
                <p className="mt-1 font-medium">{customer.residence}</p>
              </div>

              <div>
                <p className="text-zinc-500">Driving license</p>
                <p className="mt-1 font-medium">{customer.drivingLicense}</p>
              </div>

              <div>
                <p className="text-zinc-500">Protected category</p>
                <p className="mt-1 font-medium">
                  {customer.protectedCategory ? "Yes" : "No"}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Work Experience</p>
            <p className="mt-2 text-3xl font-bold">
              {customer.workingExperiences.length}
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Qualifications</p>
            <p className="mt-2 text-3xl font-bold">
              {customer.qualifications.length}
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Social Profiles</p>
            <p className="mt-2 text-3xl font-bold">{customer.socials.length}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Timeline
            </p>
            <h2 className="mt-2 text-3xl font-bold">Latest Experience</h2>
          </div>
        </div>

        <div className="space-y-6">
          {latestJobs.map((job) => (
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

              <p className="mt-4 leading-7 text-zinc-300">
                {job.jobDescription}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Education
          </p>
          <h2 className="mt-2 text-3xl font-bold">Qualifications</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {latestQualifications.map((item) => (
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

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Contacts
          </p>
          <h2 className="mt-2 text-3xl font-bold">Social Links</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {customer.socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium transition hover:bg-zinc-800"
            >
              {social.title}
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

import ProjectsSection from "@/components/ProjectsSection"
import ExperienceSection from "@/components/ExperienceSection"
import HeroSection from "@/components/HeroSection"
import QualificationsSection from "@/components/QualificationsSection"
import QuickInfoCard from "@/components/QuickInfoCard"
import SocialLinksSection from "@/components/SocialLinksSection"
import { getCustomer } from "@/lib/api"

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
      <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <HeroSection customer={customer} />
          <QuickInfoCard customer={customer} />
        </div>
      </div>

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

      <ExperienceSection jobs={latestJobs} />
      <QualificationsSection qualifications={latestQualifications} />
      <ProjectsSection />
      <SocialLinksSection socials={customer.socials} />
    </main>
  )
}

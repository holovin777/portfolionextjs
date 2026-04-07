import type { Metadata } from "next"
import CtaSection from "@/components/CtaSection"
import ExperienceSection from "@/components/ExperienceSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import QualificationsSection from "@/components/QualificationsSection"
import QuickInfoCard from "@/components/QuickInfoCard"
import ServicesSection from "@/components/ServicesSection"
import SocialLinksSection from "@/components/SocialLinksSection"
import StatsSection from "@/components/StatsSection"
import { getCustomer } from "@/lib/api"

export async function generateMetadata(): Promise<Metadata> {
  const customer = await getCustomer()

  const fullName = `${customer.firstName} ${customer.lastName}`
  const description =
    customer.description.length > 160
      ? `${customer.description.slice(0, 157)}...`
      : customer.description

  return {
    title: `${fullName} | Portfolio`,
    description,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: `${fullName} | Portfolio`,
      description,
      url: "/",
      siteName: "PortfolioNextJS",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${fullName} | Portfolio`,
      description,
    },
  }
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
      <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
        <HeroSection customer={customer} />
      </div>

      <StatsSection
        experienceCount={customer.workingExperiences.length}
        qualificationCount={customer.qualifications.length}
        socialCount={customer.socials.length}
      />

      <section className="mx-auto max-w-6xl px-6 py-8">
        <QuickInfoCard customer={customer} />
      </section>

      <ExperienceSection jobs={latestJobs} />
      <QualificationsSection qualifications={latestQualifications} />
      <ProjectsSection />
      <ServicesSection innomartsUrl={customer.blog} />
      <CtaSection email={customer.email} blog={customer.blog} />
      <SocialLinksSection socials={customer.socials} />
    </main>
  )
}

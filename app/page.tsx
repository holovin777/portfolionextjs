import type { Metadata } from "next";

import CtaSection from "@/components/CtaSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProfileSummarySection from "@/components/ProfileSummarySection";
import ProjectsSection from "@/components/ProjectsSection";
import QualificationsSection from "@/components/QualificationsSection";
import ServicesSection from "@/components/ServicesSection";
import SocialLinksSection from "@/components/SocialLinksSection";
import { getCustomer } from "@/lib/api";

export async function generateMetadata(): Promise<Metadata> {
  const customer = await getCustomer();

  const description =
    customer.description.length > 160
      ? `${customer.description.slice(0, 157)}...`
      : customer.description;

  return {
    title: {
      absolute: "Viktor Holovin | Industrial Engineering & Process Improvement",
    },

    description,

    alternates: {
      canonical: "/",
    },

    openGraph: {
      title: "Viktor Holovin | Industrial Engineering & Process Improvement",
      description,
      url: "/",
      siteName: "Viktor Holovin",
      type: "website",
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title: "Viktor Holovin | Industrial Engineering & Process Improvement",
      description,
    },
  };
}

export default async function Home() {
  const customer = await getCustomer();

  const latestJobs = [...customer.workingExperiences]
    .sort(
      (a, b) =>
        new Date(b.startedWork).getTime() - new Date(a.startedWork).getTime(),
    )
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
        <HeroSection customer={customer} />
      </div>

      <ProfileSummarySection customer={customer} />

      <ExperienceSection jobs={latestJobs} />

      <QualificationsSection qualifications={customer.qualifications} />

      <ProjectsSection />

      <ServicesSection innomartsUrl={customer.blog} />

      <CtaSection email={customer.email} blog={customer.blog} />

      <SocialLinksSection socials={customer.socials} />
    </main>
  );
}

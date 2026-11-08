import PersonJsonLd from "@/components/PersonJsonLd";
import CtaSection from "@/components/CtaSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProfileSummarySection from "@/components/ProfileSummarySection";
import QualificationsSection from "@/components/QualificationsSection";
import ServicesSection from "@/components/ServicesSection";
import SocialLinksSection from "@/components/SocialLinksSection";
import { getCustomer } from "@/lib/api";
import type { Locale } from "@/lib/i18n";
import ProjectsSection from "@/components/ProjectsSection";

type HomePageProps = {
  locale: Locale;
};

export default async function HomePage({ locale }: HomePageProps) {
  const customer = await getCustomer();

  return (
    <>
      <PersonJsonLd customer={customer} locale={locale} />

      <main lang={locale} className="min-h-screen bg-zinc-950 text-zinc-100">
        <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
          <HeroSection customer={customer} locale={locale} />
        </div>

        <ProfileSummarySection customer={customer} locale={locale} />

        <ExperienceSection jobs={customer.workingExperiences} locale={locale} />

        <QualificationsSection
          qualifications={customer.qualifications}
          locale={locale}
        />

        <ProjectsSection locale={locale} />

        <ServicesSection innomartsUrl={customer.blog} locale={locale} />

        <CtaSection email={customer.email} locale={locale} />

        <SocialLinksSection
          email={customer.email}
          socials={customer.socials}
          locale={locale}
        />
      </main>

    </>

  );
}

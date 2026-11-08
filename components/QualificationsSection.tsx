import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { Qualification } from "@/types/customer";

type QualificationsSectionProps = {
  qualifications: Qualification[];
  locale: Locale;
};

function formatDate(date: string | null, locale: Locale) {
  if (!date) return null;

  const [year, month] = date.split("-").map(Number);

  return new Intl.DateTimeFormat(locale === "it" ? "it-IT" : "en-GB", {
    year: "numeric",
    month: "short",
  }).format(new Date(year, month - 1));
}

function formatDegree(degree: string | null, locale: Locale) {
  if (locale === "it") {
    switch (degree) {
      case "MASTER":
        return "Laurea Magistrale";

      case "BACHELOR":
        return "Laurea";

      case "JUNIOR_SPECIALIST":
        return "Diploma di Specialista Junior";

      default:
        return degree
          ? degree
              .toLowerCase()
              .replaceAll("_", " ")
              .replace(/\b\w/g, (letter) => letter.toUpperCase())
          : "Qualifica";
    }
  }

  switch (degree) {
    case "MASTER":
      return "Master's Degree";

    case "BACHELOR":
      return "Bachelor's Degree";

    case "JUNIOR_SPECIALIST":
      return "Junior Specialist";

    default:
      return degree
        ? degree
            .toLowerCase()
            .replaceAll("_", " ")
            .replace(/\b\w/g, (letter) => letter.toUpperCase())
        : "Qualification";
  }
}

export default function QualificationsSection({
  qualifications,
  locale,
}: QualificationsSectionProps) {
  const formalEducation = qualifications
    .filter(
      (qualification) =>
        qualification.educationalInstitution?.studyPlace !== "COURSE" &&
        !qualification.course,
    )
    .sort((a, b) => {
      const degreePriority: Record<string, number> = {
        MASTER: 3,
        BACHELOR: 2,
        JUNIOR_SPECIALIST: 1,
      };

      const aPriority = a.academicDegree
        ? (degreePriority[a.academicDegree] ?? 0)
        : 0;

      const bPriority = b.academicDegree
        ? (degreePriority[b.academicDegree] ?? 0)
        : 0;

      return bPriority - aPriority;
    })
    .slice(0, 3);

  const labels =
    locale === "it"
      ? {
          eyebrow: "Formazione",
          title: "Qualifiche Ingegneristiche",
          description:
            "Una formazione ingegneristica che supporta il mio percorso nei sistemi industriali, nel problem solving tecnico, nel miglioramento dei processi e nella digitalizzazione.",
          highest: "Titolo più alto",
          viewFull: "Vedi tutta la formazione",
        }
      : {
          eyebrow: "Education",
          title: "Engineering Qualifications",
          description:
            "Formal engineering education that supports my background in industrial systems, technical problem-solving, process improvement, and digitalization.",
          highest: "Highest Degree",
          viewFull: "View Full Education",
        };

  return (
    <section
      id="qualifications"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-20"
    >
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.22em] text-green-400">
          {labels.eyebrow}
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          {labels.title}
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
          {labels.description}
        </p>
      </div>

      <div className="space-y-6">
        {formalEducation.map((qualification, index) => {
          const degree = formatDegree(qualification.academicDegree, locale);

          const start = formatDate(qualification.startedStudying, locale);

          const end = formatDate(qualification.finishedStudying, locale);

          const speciality =
            locale === "it"
              ? qualification.specialityIt || qualification.speciality
              : qualification.speciality;

          const institutionName =
            locale === "it"
              ? qualification.educationalInstitution.nameIt ||
                qualification.educationalInstitution.name
              : qualification.educationalInstitution.name;

          const institutionLocation =
            locale === "it"
              ? qualification.educationalInstitution.locationIt ||
                qualification.educationalInstitution.location
              : qualification.educationalInstitution.location;

          const isPrimaryDegree = index === 0;

          return (
            <article
              key={qualification.id}
              className={`relative overflow-hidden rounded-[2rem] border p-6 sm:p-7 ${
                isPrimaryDegree
                  ? "border-green-500/20 bg-green-500/[0.04]"
                  : "border-zinc-800 bg-zinc-900/70"
              }`}
            >
              {isPrimaryDegree ? (
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" />
              ) : null}

              <div className="relative">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <p
                        className={`text-xs font-medium uppercase tracking-[0.2em] ${
                          isPrimaryDegree ? "text-green-400" : "text-zinc-500"
                        }`}
                      >
                        {degree}
                      </p>

                      {isPrimaryDegree ? (
                        <span className="rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-green-400">
                          {labels.highest}
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-3 text-xl font-semibold text-zinc-100 sm:text-2xl">
                      {speciality || degree}
                    </h3>

                    <div className="mt-3">
                      {qualification.educationalInstitution.website ? (
                        <a
                          href={qualification.educationalInstitution.website}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-green-400 transition hover:text-green-300"
                        >
                          {institutionName}
                        </a>
                      ) : (
                        <p className="font-medium text-zinc-300">
                          {institutionName}
                        </p>
                      )}

                      {institutionLocation ? (
                        <p className="mt-1 text-sm text-zinc-500">
                          {institutionLocation}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {(start || end) && (
                    <p className="shrink-0 text-sm font-medium text-zinc-500">
                      {start}
                      {start && end ? " — " : ""}
                      {end}
                    </p>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8">
        <Link
          href={locale === "it" ? "/it/education" : "/education"}
          className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 transition duration-200 hover:border-green-500/40 hover:bg-zinc-900 hover:text-green-400"
        >
          {labels.viewFull}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

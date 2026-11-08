import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { WorkingExperience } from "@/types/customer";

type ExperienceSectionProps = {
  jobs: WorkingExperience[];
  locale: Locale;
};

function formatDate(date: string | null, locale: Locale) {
  if (!date) {
    return locale === "it" ? "Attuale" : "Present";
  }

  const [year, month] = date.split("-").map(Number);

  return new Intl.DateTimeFormat(locale === "it" ? "it-IT" : "en-GB", {
    year: "numeric",
    month: "short",
  }).format(new Date(year, month - 1));
}

export default function ExperienceSection({
  jobs,
  locale,
}: ExperienceSectionProps) {
  const sortedJobs = [...jobs].sort(
    (a, b) =>
      new Date(b.startedWork).getTime() - new Date(a.startedWork).getTime(),
  );

  const visibleJobs = sortedJobs.slice(0, 4);

  const labels =
    locale === "it"
      ? {
          eyebrow: "Esperienza Industriale",
          title: "Percorso Professionale",
          description:
            "Esperienza pratica nella manutenzione industriale, elettromeccanica, produzione, lavorazione e sistemi tecnici. Questo background influenza il mio approccio al miglioramento dei processi: comprendere il lavoro, individuare le inefficienze, semplificare il processo e utilizzare strumenti digitali dove possono creare valore reale.",
          current: "Attuale",
          viewFull: "Vedi tutta l'esperienza",
        }
      : {
          eyebrow: "Industrial Experience",
          title: "Professional Journey",
          description:
            "Hands-on experience across industrial maintenance, electromechanics, manufacturing, production, and technical systems. This background shapes how I approach process improvement: understand the work, identify inefficiencies, simplify the process, and use digital tools where they create real value.",
          current: "Current",
          viewFull: "View Full Experience",
        };

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-20"
    >
      {/* HEADER */}
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

      {/* TIMELINE */}
      <div className="relative">
        <div className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-zinc-800 sm:block" />

        <div className="space-y-6">
          {visibleJobs.map((job) => {
            const isCurrent = !job.finishedWork;

            const position =
              locale === "it"
                ? job.positionAtWork.nameIt || job.positionAtWork.name
                : job.positionAtWork.name;

            const companyName =
              locale === "it"
                ? job.company.nameIt || job.company.name
                : job.company.name;

            const companyLocation =
              locale === "it"
                ? job.company.locationIt || job.company.location
                : job.company.location;

            const jobDescription =
              locale === "it"
                ? job.jobDescriptionIt || job.jobDescription
                : job.jobDescription;

            return (
              <article key={job.id} className="relative sm:pl-10">
                {/* TIMELINE DOT */}
                <div
                  className={`absolute left-0 top-8 hidden h-[15px] w-[15px] rounded-full border sm:block ${
                    isCurrent
                      ? "border-green-400 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                      : "border-zinc-700 bg-zinc-950"
                  }`}
                />

                <div
                  className={`rounded-3xl border p-6 transition duration-300 sm:p-7 ${
                    isCurrent
                      ? "border-green-500/20 bg-green-500/[0.04] shadow-[0_0_35px_rgba(34,197,94,0.05)]"
                      : "border-zinc-800 bg-zinc-900/70 hover:border-zinc-700 hover:bg-zinc-900"
                  }`}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-semibold text-zinc-100">
                          {position}
                        </h3>

                        {isCurrent ? (
                          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-green-400">
                            {labels.current}
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
                            {companyName}
                          </a>
                        ) : (
                          <span className="font-medium text-zinc-300">
                            {companyName}
                          </span>
                        )}

                        {companyLocation ? (
                          <>
                            <span className="text-zinc-700">•</span>

                            <span className="text-zinc-500">
                              {companyLocation}
                            </span>
                          </>
                        ) : null}
                      </div>
                    </div>

                    <p
                      className={`shrink-0 text-sm font-medium ${
                        isCurrent ? "text-green-400" : "text-zinc-500"
                      }`}
                    >
                      {formatDate(job.startedWork, locale)} —{" "}
                      {formatDate(job.finishedWork, locale)}
                    </p>
                  </div>

                  {jobDescription ? (
                    <p className="mt-5 max-w-4xl leading-7 text-zinc-400">
                      {jobDescription}
                    </p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* VIEW ALL */}
      <div className="mt-8">
        <Link
          href={locale === "it" ? "/it/experience" : "/experience"}
          className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 transition duration-200 hover:border-green-500/40 hover:bg-zinc-900 hover:text-green-400"
        >
          {labels.viewFull}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

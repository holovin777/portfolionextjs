import type { Metadata } from "next";
import Link from "next/link";

import { getCustomer } from "@/lib/api";

export const metadata: Metadata = {
  title: "Esperienza Professionale",
  description:
    "Esperienza professionale di Viktor Holovin in produzione, manutenzione, elettromeccanica e ambienti industriali.",
  alternates: {
    canonical: "/it/experience",
    languages: {
      en: "/experience",
      it: "/it/experience",
    },
  },
};

function formatDate(date: string | null) {
  if (!date) return "Attuale";

  const [year, month] = date.split("-").map(Number);

  return new Intl.DateTimeFormat("it-IT", {
    year: "numeric",
    month: "short",
  }).format(new Date(year, month - 1));
}

export default async function ItalianExperiencePage() {
  const customer = await getCustomer();

  const jobs = [...customer.workingExperiences].sort(
    (a, b) =>
      new Date(b.startedWork).getTime() - new Date(a.startedWork).getTime(),
  );

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <Link
          href="/it"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-green-400"
        >
          <span aria-hidden="true">←</span>
          Torna alla home
        </Link>

        {/* HEADER */}
        <div className="mt-10 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.22em] text-green-400">
            Esperienza Industriale
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
            Dall&apos;esperienza pratica al miglioramento dei processi.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Il mio percorso professionale comprende produzione, manutenzione,
            elettromeccanica, lavorazione industriale e sistemi tecnici.
            Esperienze che mi hanno permesso di comprendere i processi non
            soltanto in teoria, ma direttamente sul campo.
          </p>
        </div>

        {/* PROFILE */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <article className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
              Direzione Professionale
            </p>

            <h2 className="mt-3 text-lg font-semibold text-zinc-100">
              Miglioramento Continuo
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Miglioramento dei processi, efficienza operativa e
              digitalizzazione pratica.
            </p>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
              Background
            </p>

            <h2 className="mt-3 text-lg font-semibold text-zinc-100">
              Esperienza Industriale
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Produzione, manutenzione, elettromeccanica e lavoro diretto con
              sistemi tecnici.
            </p>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
              Strumenti Digitali
            </p>

            <h2 className="mt-3 text-lg font-semibold text-zinc-100">
              Software · Dati · Automazione
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Java, Spring Boot, PostgreSQL, Next.js, TypeScript e Linux.
            </p>
          </article>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-14">
          <div className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-zinc-800 sm:block" />

          <div className="space-y-6">
            {jobs.map((job) => {
              const isCurrent = !job.finishedWork;

              const position =
                job.positionAtWork.nameIt || job.positionAtWork.name;

              const companyName = job.company.nameIt || job.company.name;

              const location = job.company.locationIt || job.company.location;

              const description = job.jobDescriptionIt || job.jobDescription;

              return (
                <article key={job.id} className="relative sm:pl-10">
                  <div
                    className={`absolute left-0 top-8 hidden h-[15px] w-[15px] rounded-full border sm:block ${
                      isCurrent
                        ? "border-green-400 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                        : "border-zinc-700 bg-zinc-950"
                    }`}
                  />

                  <div
                    className={`rounded-3xl border p-6 sm:p-7 ${
                      isCurrent
                        ? "border-green-500/20 bg-green-500/[0.04]"
                        : "border-zinc-800 bg-zinc-900/70"
                    }`}
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h2 className="text-xl font-semibold text-zinc-100">
                            {position}
                          </h2>

                          {isCurrent ? (
                            <span className="rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-green-400">
                              Attuale
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

                          {location ? (
                            <>
                              <span className="text-zinc-700">•</span>

                              <span className="text-zinc-500">{location}</span>
                            </>
                          ) : null}
                        </div>
                      </div>

                      <p
                        className={`shrink-0 text-sm font-medium ${
                          isCurrent ? "text-green-400" : "text-zinc-500"
                        }`}
                      >
                        {formatDate(job.startedWork)} —{" "}
                        {formatDate(job.finishedWork)}
                      </p>
                    </div>

                    {description ? (
                      <p className="mt-5 max-w-4xl leading-7 text-zinc-400">
                        {description}
                      </p>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* DIRECTION */}
        <div className="mt-14 rounded-[2rem] border border-green-500/20 bg-green-500/[0.04] p-7 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-green-400">
            Dove porta questo percorso
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-zinc-100">
            Miglioramento Continuo & Digitalizzazione
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            Il mio obiettivo è utilizzare l&apos;esperienza pratica maturata
            negli ambienti industriali insieme all&apos;ingegneria, ai dati e
            agli strumenti digitali per analizzare i processi, individuare le
            inefficienze e costruire soluzioni concrete.
          </p>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { getCustomer } from "@/lib/api";
import { Qualification } from "@/types/customer";

export const metadata: Metadata = {
  title: "Formazione",
  description:
    "Formazione accademica e qualifiche tecniche di Viktor Holovin, con studi in ingegneria, sistemi elettromeccanici e sviluppo software.",
  alternates: {
    canonical: "/it/education",
    languages: {
      en: "/education",
      it: "/it/education",
    },
  },
};

function formatDate(date: string | null) {
  if (!date) return null;

  const [year, month] = date.split("-").map(Number);

  return new Intl.DateTimeFormat("it-IT", {
    year: "numeric",
    month: "short",
  }).format(new Date(year, month - 1));
}

function formatDegree(degree: string | null) {
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

function sortByFinishedDate(a: Qualification, b: Qualification) {
  const aTime = a.finishedStudying ? new Date(a.finishedStudying).getTime() : 0;

  const bTime = b.finishedStudying ? new Date(b.finishedStudying).getTime() : 0;

  return bTime - aTime;
}

export default async function ItalianEducationPage() {
  const customer = await getCustomer();

  const qualifications = customer.qualifications ?? [];

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
    });

  const technicalCourses = qualifications
    .filter(
      (qualification) =>
        qualification.educationalInstitution?.studyPlace === "COURSE" ||
        qualification.course,
    )
    .sort(sortByFinishedDate);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 sm:pt-24">
        <Link
          href="/it"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-green-400"
        >
          <span aria-hidden="true">←</span>
          Torna alla home
        </Link>

        <div className="mt-10">
          <p className="text-sm uppercase tracking-[0.22em] text-green-400">
            Formazione
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
            Una base ingegneristica, supportata da apprendimento continuo.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            La mia formazione accademica è basata sull&apos;ingegneria, sui
            sistemi elettromeccanici, sulla tecnologia mineraria e sulla
            ricerca. Successivamente ho ampliato queste competenze con lo
            sviluppo software, i database, Linux e le tecnologie backend.
          </p>
        </div>
      </section>

      {/* FORMAL EDUCATION */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.22em] text-green-400">
            Formazione Accademica
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Qualifiche Ingegneristiche
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            Il mio percorso accademico rappresenta la base tecnica del mio
            attuale interesse per l&apos;ingegneria industriale, il
            miglioramento dei processi e la digitalizzazione.
          </p>
        </div>

        <div className="space-y-6">
          {formalEducation.map((qualification, index) => {
            const degree = formatDegree(qualification.academicDegree);

            const start = formatDate(qualification.startedStudying);
            const end = formatDate(qualification.finishedStudying);

            const isPrimaryDegree = index === 0;

            const institutionName =
              qualification.educationalInstitution.nameIt ||
              qualification.educationalInstitution.name;

            const institutionLocation =
              qualification.educationalInstitution.locationIt ||
              qualification.educationalInstitution.location;

            const speciality =
              qualification.specialityIt || qualification.speciality;

            return (
              <article
                key={qualification.id}
                className={`relative overflow-hidden rounded-[2rem] border p-6 sm:p-8 ${
                  isPrimaryDegree
                    ? "border-green-500/20 bg-green-500/[0.04]"
                    : "border-zinc-800 bg-zinc-900/70"
                }`}
              >
                {isPrimaryDegree ? (
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" />
                ) : null}

                <div className="relative">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
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
                            Titolo più alto
                          </span>
                        ) : null}
                      </div>

                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                        {speciality || degree}
                      </h3>

                      <div className="mt-4">
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
                      <div className="shrink-0">
                        <p className="text-sm font-medium text-zinc-500">
                          {start}
                          {start && end ? " — " : ""}
                          {end}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-7 border-t border-zinc-800/80 pt-6">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                          Titolo
                        </p>

                        <p className="mt-2 font-medium text-zinc-300">
                          {degree}
                        </p>
                      </div>

                      {speciality ? (
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                            Specializzazione
                          </p>

                          <p className="mt-2 leading-6 text-zinc-300">
                            {speciality}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ENGINEERING FOUNDATION */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-[2rem] border border-green-500/20 bg-green-500/[0.04] p-7 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-green-400">
            Base Ingegneristica
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-zinc-100">
            Dai sistemi tecnici al miglioramento dei processi
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            La mia formazione ingegneristica, insieme all&apos;esperienza
            industriale pratica, mi permette di comprendere attrezzature,
            produzione, sistemi tecnici e vincoli operativi reali. Oggi voglio
            applicare questa base al miglioramento dei processi,
            all&apos;efficienza e alla digitalizzazione.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Ingegneria Industriale",
              "Elettromeccanica",
              "Sistemi Tecnici",
              "Miglioramento dei Processi",
              "Digitalizzazione",
              "Problem Solving",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-800 bg-zinc-950/50 px-3 py-1.5 text-xs font-medium text-zinc-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL COURSES */}
      {technicalCourses.length > 0 ? (
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-10">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
              Formazione Continua
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100">
              Corsi Tecnici
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
              Formazione aggiuntiva nello sviluppo software, nei database, nelle
              tecnologie backend, Linux e negli strumenti di sviluppo.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {technicalCourses.map((qualification) => {
              const completed = formatDate(qualification.finishedStudying);

              const courseName =
                qualification.course?.name ||
                qualification.specialityIt ||
                qualification.speciality ||
                "Corso Tecnico";

              const institutionName =
                qualification.educationalInstitution.nameIt ||
                qualification.educationalInstitution.name;

              return (
                <article
                  key={qualification.id}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition duration-200 hover:border-zinc-700"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
                        Corso
                      </p>

                      <h3 className="mt-2 font-semibold leading-6 text-zinc-200">
                        {courseName}
                      </h3>

                      <p className="mt-2 text-sm text-zinc-500">
                        {institutionName}
                      </p>
                    </div>

                    {completed ? (
                      <span className="shrink-0 text-xs text-zinc-600">
                        {completed}
                      </span>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ) : null}
    </main>
  );
}

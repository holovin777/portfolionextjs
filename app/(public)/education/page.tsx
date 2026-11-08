import type { Metadata } from "next";
import Link from "next/link";

import { getCustomer } from "@/lib/api";
import { Qualification } from "@/types/customer";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Engineering education and technical qualifications of Viktor Holovin, including industrial engineering, mining engineering, research engineering, and software development studies.",
  alternates: {
    canonical: "/education",
    languages: {
      en: "/education",
      it: "/it/education",
    },
  },
};

function formatDate(date: string | null) {
  if (!date) return null;

  const [year, month] = date.split("-").map(Number);

  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
  }).format(new Date(year, month - 1));
}

function formatDegree(degree: string | null) {
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

function sortByFinishedDate(a: Qualification, b: Qualification) {
  const aTime = a.finishedStudying ? new Date(a.finishedStudying).getTime() : 0;

  const bTime = b.finishedStudying ? new Date(b.finishedStudying).getTime() : 0;

  return bTime - aTime;
}

export default async function EducationPage() {
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
    <main>
      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 sm:pt-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-green-400"
        >
          <span aria-hidden="true">←</span>
          Back to home
        </Link>

        <div className="mt-10">
          <p className="text-sm uppercase tracking-[0.22em] text-green-400">
            Education
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
            Engineering foundation, continuous learning.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            My formal education is rooted in engineering, electromechanical
            systems, mining technology, and research. Software development,
            databases, Linux, and backend technologies later became additional
            tools that complement this engineering background.
          </p>
        </div>
      </section>

      {/* FORMAL EDUCATION */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.22em] text-green-400">
            Formal Education
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Engineering Qualifications
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            My academic background provides the technical foundation for my
            current focus on industrial engineering, process improvement, and
            digitalization.
          </p>
        </div>

        <div className="space-y-6">
          {formalEducation.map((qualification, index) => {
            const degree = formatDegree(qualification.academicDegree);

            const start = formatDate(qualification.startedStudying);
            const end = formatDate(qualification.finishedStudying);

            const isPrimaryDegree = index === 0;

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
                            Highest Degree
                          </span>
                        ) : null}
                      </div>

                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                        {qualification.speciality || degree}
                      </h3>

                      <div className="mt-4">
                        {qualification.educationalInstitution.website ? (
                          <a
                            href={qualification.educationalInstitution.website}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-green-400 transition hover:text-green-300"
                          >
                            {qualification.educationalInstitution.name}
                          </a>
                        ) : (
                          <p className="font-medium text-zinc-300">
                            {qualification.educationalInstitution.name}
                          </p>
                        )}

                        {qualification.educationalInstitution.location ? (
                          <p className="mt-1 text-sm text-zinc-500">
                            {qualification.educationalInstitution.location}
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
                          Degree
                        </p>

                        <p className="mt-2 font-medium text-zinc-300">
                          {degree}
                        </p>
                      </div>

                      {qualification.speciality ? (
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                            Specialization
                          </p>

                          <p className="mt-2 leading-6 text-zinc-300">
                            {qualification.speciality}
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

      {/* WHY IT MATTERS */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-[2rem] border border-green-500/20 bg-green-500/[0.04] p-7 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-green-400">
            Engineering Foundation
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-zinc-100">
            From technical systems to process improvement
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            My engineering education, combined with years of hands-on industrial
            experience, gives me a practical understanding of equipment,
            production environments, technical systems, and real operational
            constraints. Today I want to apply that foundation to process
            improvement, efficiency, digitalization, and structured
            problem-solving.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Industrial Engineering",
              "Electromechanics",
              "Technical Systems",
              "Process Improvement",
              "Digitalization",
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
              Continuous Learning
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100">
              Technical Courses
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
              Additional training in software development, databases, backend
              technologies, Linux, and development tools.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {technicalCourses.map((qualification) => {
              const completed = formatDate(qualification.finishedStudying);

              return (
                <article
                  key={qualification.id}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition duration-200 hover:border-zinc-700"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
                        Course
                      </p>

                      <h3 className="mt-2 font-semibold leading-6 text-zinc-200">
                        {qualification.course?.name ||
                          qualification.speciality ||
                          "Technical Course"}
                      </h3>

                      <p className="mt-2 text-sm text-zinc-500">
                        {qualification.educationalInstitution.name}
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

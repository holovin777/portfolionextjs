import type { Metadata } from "next";
import Link from "next/link";

import { getCustomer } from "@/lib/api";

export const metadata: Metadata = {
  title: "Professional Experience",

  description:
    "Professional experience of Viktor Holovin across industrial engineering, maintenance, manufacturing, production, software, and process improvement.",

  alternates: {
    canonical: "/experience",
    languages: {
      en: "/experience",
      it: "/it/experience",
    },
  },
};

function formatDate(date: string | null) {
  if (!date) return "Present";

  const [year, month] = date.split("-").map(Number);

  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
  }).format(new Date(year, month - 1));
}

export default async function ExperiencePage() {
  const customer = await getCustomer();

  const jobs = [...(customer.workingExperiences ?? [])].sort(
    (a, b) =>
      new Date(b.startedWork).getTime() - new Date(a.startedWork).getTime(),
  );

  return (
    <main>
      {/* PAGE INTRO */}
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
            Professional Experience
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
            From hands-on industry to process improvement.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            My professional path spans industrial maintenance, electromechanics,
            manufacturing, production, and technical systems. Over time,
            software and digital tools became part of how I approach problems —
            helping me move toward process improvement, operational efficiency,
            and practical digitalization.
          </p>
        </div>

        {/* CURRENT DIRECTION */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
              Career Direction
            </p>

            <p className="mt-2 font-semibold text-zinc-100">
              {customer.desiredProfession || "Continuous Improvement Engineer"}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
              Core Background
            </p>

            <p className="mt-2 font-semibold text-zinc-100">
              Industrial Engineering
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
              Digital Toolkit
            </p>

            <p className="mt-2 font-semibold text-zinc-100">
              Software · Data · Automation
            </p>
          </div>
        </div>
      </section>

      {/* FULL EXPERIENCE TIMELINE */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative">
          <div className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-zinc-800 sm:block" />

          <div className="space-y-6">
            {jobs.map((job) => {
              const isCurrent = !job.finishedWork;

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
                          <h2 className="text-xl font-semibold text-zinc-100">
                            {job.positionAtWork.name}
                          </h2>

                          {isCurrent ? (
                            <span className="rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-green-400">
                              Current
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
                              {job.company.name}
                            </a>
                          ) : (
                            <span className="font-medium text-zinc-300">
                              {job.company.name}
                            </span>
                          )}

                          {job.company.location ? (
                            <>
                              <span className="text-zinc-700">•</span>

                              <span className="text-zinc-500">
                                {job.company.location}
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
                        {formatDate(job.startedWork)} —{" "}
                        {formatDate(job.finishedWork)}
                      </p>
                    </div>

                    {job.jobDescription ? (
                      <p className="mt-5 max-w-4xl leading-7 text-zinc-400">
                        {job.jobDescription}
                      </p>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* CAREER DIRECTION */}
        <div className="mt-12 rounded-3xl border border-green-500/20 bg-green-500/[0.04] p-7 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-green-400">
            Where this leads
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-zinc-100">
            Continuous Improvement & Digitalization
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            My goal is to bring together practical industrial experience,
            engineering thinking, data, and software to improve processes,
            reduce inefficiencies, automate repetitive work, and create
            measurable operational value.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Process Improvement",
              "Industrial Engineering",
              "Digitalization",
              "Problem Solving",
              "Data",
              "Automation",
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
    </main>
  );
}

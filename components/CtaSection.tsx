type CtaSectionProps = {
  email: string;
  blog: string;
};

export default function CtaSection({ email, blog }: CtaSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-[2rem] border border-green-500/20 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 sm:p-10">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />

        <div className="relative">
          <p className="text-sm uppercase tracking-[0.22em] text-green-400">
            Opportunities & Collaboration
          </p>

          <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Interested in process improvement, industrial engineering, or
            digitalization?
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            I&apos;m interested in opportunities where hands-on industrial
            experience, engineering thinking, data, and digital tools can be
            combined to improve real processes and create measurable value.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${email}`}
              className="rounded-2xl bg-green-500 px-5 py-3 text-sm font-semibold text-black transition duration-200 hover:bg-green-400"
            >
              Contact Me
            </a>

            <a
              href={blog}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 transition duration-200 hover:border-green-500/40 hover:bg-zinc-900"
            >
              Web Development via InnoMarts
              <span className="ml-2" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <div className="mt-8 border-t border-zinc-800 pt-6">
            <p className="text-sm leading-6 text-zinc-500">
              Looking for a website or web application instead? My commercial
              web development work is available through InnoMarts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

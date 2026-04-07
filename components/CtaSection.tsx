type CtaSectionProps = {
  email: string
  blog: string
}

export default function CtaSection({ email, blog }: CtaSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 sm:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Let&apos;s build something useful
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Need a fast website, practical backend, or a developer who actually ships?
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-zinc-300">
          I work across frontend, backend, and real-world technical problem-solving.
          Clean structure, practical thinking, and less drama than most software projects.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${email}`}
            className="rounded-2xl bg-green-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-green-400"
          >
            Contact Me
          </a>

          <a
            href={blog}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-green-500/40 hover:bg-zinc-900"
          >
            Visit InnoMarts
          </a>
        </div>
      </div>
    </section>
  )
}

import type { Locale } from "@/lib/i18n";

type CtaSectionProps = {
  email: string;
  locale: Locale;
};

export default function CtaSection({ email, locale }: CtaSectionProps) {
  const labels =
    locale === "it"
      ? {
          eyebrow: "Opportunità & Collaborazione",
          title:
            "Interessato al miglioramento dei processi, all'ingegneria industriale o alla digitalizzazione?",
          description:
            "Sono interessato a opportunità in cui l'esperienza industriale pratica, il pensiero ingegneristico, i dati e gli strumenti digitali possano essere combinati per migliorare processi reali e creare valore misurabile.",
          contact: "Contattami",
        }
      : {
          eyebrow: "Opportunities & Collaboration",
          title:
            "Interested in process improvement, industrial engineering, or digitalization?",
          description:
            "I'm interested in opportunities where hands-on industrial experience, engineering thinking, data, and digital tools can be combined to improve real processes and create measurable value.",
          contact: "Contact Me",
        };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-[2rem] border border-green-500/20 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 sm:p-10">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />

        <div className="relative">
          <p className="text-sm uppercase tracking-[0.22em] text-green-400">
            {labels.eyebrow}
          </p>

          <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            {labels.title}
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            {labels.description}
          </p>

          <div className="mt-8">
            <a
              href={`mailto:${email}`}
              className="inline-flex rounded-2xl bg-green-500 px-5 py-3 text-sm font-semibold text-black transition duration-200 hover:bg-green-400"
            >
              {labels.contact}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

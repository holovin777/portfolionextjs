import type { Locale } from "@/lib/i18n";
import { Social } from "@/types/customer";

type SocialLinksSectionProps = {
  email: string;
  socials: Social[];
  locale: Locale;
};

const priority: Record<string, number> = {
  linkedin: 1,
  github: 2,
  twitter: 3,
  x: 3,
  instagram: 4,
  facebook: 5,
};

export default function SocialLinksSection({
  email,
  socials,
  locale,
}: SocialLinksSectionProps) {
  const sortedSocials = [...socials].sort((a, b) => {
    const aPriority = priority[a.title.toLowerCase()] ?? 99;
    const bPriority = priority[b.title.toLowerCase()] ?? 99;

    return aPriority - bPriority;
  });

  const labels =
    locale === "it"
      ? {
          eyebrow: "Contatti",
          title: "Restiamo in contatto",
          description:
            "Puoi contattarmi per opportunità professionali nell'ingegneria, nel miglioramento dei processi, nella digitalizzazione o nello sviluppo software.",
          email: "Email",
        }
      : {
          eyebrow: "Contact",
          title: "Let's Connect",
          description:
            "Feel free to contact me about engineering, process improvement, digitalization, software development, or professional opportunities.",
          email: "Email",
        };

  return (
    <section
      id="socials"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-20 pt-10"
    >
      <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/50 p-7 sm:p-8">
        <p className="text-sm uppercase tracking-[0.22em] text-green-400">
          {labels.eyebrow}
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100">
          {labels.title}
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          {labels.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${email}`}
            className="rounded-2xl bg-green-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-green-400"
          >
            {labels.email}
          </a>

          {sortedSocials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-green-500/40 hover:text-green-400"
            >
              {social.title}
              <span className="ml-2" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

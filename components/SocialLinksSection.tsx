import { Social } from "@/types/customer"

type SocialLinksSectionProps = {
  socials: Social[]
}

export default function SocialLinksSection({
  socials,
}: SocialLinksSectionProps) {
  return (
    <section id="socials" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Contacts
        </p>
        <h2 className="mt-2 text-3xl font-bold">Social Links</h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium transition hover:bg-zinc-800"
          >
            {social.title}
          </a>
        ))}
      </div>
    </section>
  )
}

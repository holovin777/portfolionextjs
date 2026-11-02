import { Customer } from "@/types/customer";

type ProfileSummarySectionProps = {
  customer: Customer;
};

export default function ProfileSummarySection({
  customer,
}: ProfileSummarySectionProps) {
  const items = [
    {
      label: "Career Focus",
      value: customer.desiredProfession || "Continuous Improvement Engineer",
      description:
        "Process improvement, operational efficiency, and practical digitalization.",
    },
    {
      label: "Engineering Background",
      value: "Industrial Engineering",
      description:
        "Hands-on experience across maintenance, electromechanics, manufacturing, and production.",
    },
    {
      label: "Digital Toolkit",
      value: "Software · Data · Automation",
      description:
        "Java, Spring Boot, PostgreSQL, Next.js, TypeScript, Linux, and practical digital tools.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-8 sm:py-10">
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={item.label}
            className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 transition duration-300 hover:border-green-500/20 hover:bg-zinc-900"
          >
            <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-green-500/5 blur-3xl transition group-hover:bg-green-500/10" />

            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {item.label}
                </p>

                <span className="font-mono text-xs text-zinc-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h2 className="mt-4 text-xl font-semibold text-zinc-100">
                {item.value}
              </h2>

              <p className="mt-3 leading-7 text-zinc-400">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

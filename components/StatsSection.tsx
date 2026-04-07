type StatsSectionProps = {
  experienceCount: number
  qualificationCount: number
  socialCount: number
}

export default function StatsSection({
  experienceCount,
  qualificationCount,
  socialCount,
}: StatsSectionProps) {
  const stats = [
    { label: "Work Experience", value: experienceCount },
    { label: "Qualifications", value: qualificationCount },
    { label: "Social Profiles", value: socialCount },
  ]

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
          >
            <p className="text-sm text-zinc-400">{stat.label}</p>
            <p className="mt-2 text-3xl font-bold text-green-400">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

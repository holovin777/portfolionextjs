import Link from "next/link"

const navItems = [
  { href: "#experience", label: "Experience" },
  { href: "#qualifications", label: "Qualifications" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#socials", label: "Socials" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-100"
        >
          Holovin
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

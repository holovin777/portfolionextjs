"use client"

import Link from "next/link"
import { useState } from "react"

const navItems = [
  { href: "#experience", label: "Experience" },
  { href: "#qualifications", label: "Qualifications" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#socials", label: "Socials" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-mono text-xl font-bold text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.65)]">
            {"{h}"}
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.25em] text-zinc-200 sm:block">
            Holovin
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition hover:text-green-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-xl border border-zinc-800 px-3 py-2 text-sm text-zinc-300 transition hover:border-zinc-700 hover:text-green-400 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-800 bg-zinc-950 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-zinc-300 transition hover:text-green-400"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

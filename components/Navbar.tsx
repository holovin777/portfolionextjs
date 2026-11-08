"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { getTranslations, type Locale } from "@/lib/i18n";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const locale: Locale =
    pathname === "/it" || pathname.startsWith("/it/") ? "it" : "en";

  const t = getTranslations(locale);

  const englishHref =
    pathname === "/it/experience"
      ? "/experience"
      : pathname === "/it/education"
        ? "/education"
        : "/";

  const italianHref =
    pathname === "/experience"
      ? "/it/experience"
      : pathname === "/education"
        ? "/it/education"
        : "/it";

  const navItems = [
    {
      href: locale === "it" ? "/it/experience" : "/experience",
      label: t.nav.experience,
    },
    {
      href: locale === "it" ? "/it/education" : "/education",
      label: t.nav.education,
    },
    {
      href: locale === "it" ? "/it/#projects" : "/#projects",
      label: t.nav.projects,
    },
    {
      href: locale === "it" ? "/it/#socials" : "/#socials",
      label: t.nav.contact,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={locale === "it" ? "/it" : "/"}
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <span className="font-mono text-lg font-semibold text-green-400">
            {"{h}"}
          </span>

          <span className="font-semibold text-zinc-100">Viktor Holovin</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition hover:text-zinc-100"
            >
              {item.label}
            </Link>
          ))}

          <div className="ml-2 flex items-center rounded-full border border-zinc-800 bg-zinc-900/70 p-1 text-xs font-semibold">
            <Link
              href={englishHref}
              className={`rounded-full px-3 py-1.5 transition ${
                locale === "en"
                  ? "bg-green-500 text-black"
                  : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              EN
            </Link>

            <Link
              href={italianHref}
              className={`rounded-full px-3 py-1.5 transition ${
                locale === "it"
                  ? "bg-green-500 text-black"
                  : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              IT
            </Link>
          </div>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-xl border border-zinc-800 p-2 text-zinc-300 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-zinc-100"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 flex gap-2 border-t border-zinc-800 pt-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold ${
                  locale === "en"
                    ? "bg-green-500 text-black"
                    : "border border-zinc-800 text-zinc-400"
                }`}
              >
                English
              </Link>

              <Link
                href="/it"
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold ${
                  locale === "it"
                    ? "bg-green-500 text-black"
                    : "border border-zinc-800 text-zinc-400"
                }`}
              >
                Italiano
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

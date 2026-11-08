"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const isItalian = pathname === "/it" || pathname.startsWith("/it/");

  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2">
          <span className="font-mono text-green-400">{`{h}`}</span>

          <span>© {new Date().getFullYear()} Viktor Holovin</span>
        </p>

        <p className="text-zinc-600">
          {isItalian
            ? "Ingegneria Industriale · Miglioramento dei Processi · Digitalizzazione"
            : "Industrial Engineering · Process Improvement · Digitalization"}
        </p>
      </div>
    </footer>
  );
}

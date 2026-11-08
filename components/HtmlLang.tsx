"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    const locale =
      pathname === "/it" || pathname.startsWith("/it/") ? "it" : "en";

    document.documentElement.lang = locale;
  }, [pathname]);

  return null;
}

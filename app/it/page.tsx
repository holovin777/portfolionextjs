import type { Metadata } from "next";

import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: {
    absolute:
      "Viktor Holovin | Ingegneria Industriale & Miglioramento dei Processi",
  },

  description:
    "Ingegnere industriale orientato al miglioramento dei processi, all'efficienza operativa e alla digitalizzazione pratica, con esperienza nello sviluppo software.",

  alternates: {
    canonical: "/it",
    languages: {
      en: "/",
      it: "/it",
    },
  },

  openGraph: {
    title:
      "Viktor Holovin | Ingegneria Industriale & Miglioramento dei Processi",
    description:
      "Ingegnere industriale orientato al miglioramento dei processi, all'efficienza operativa e alla digitalizzazione pratica.",
    url: "/it",
    siteName: "Viktor Holovin",
    type: "website",
    locale: "it_IT",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Viktor Holovin | Ingegneria Industriale & Miglioramento dei Processi",
    description:
      "Ingegnere industriale orientato al miglioramento dei processi e alla digitalizzazione.",
  },
};

export default function ItalianHome() {
  return <HomePage locale="it" />;
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.holovin.com"),

  title: {
    default: "Viktor Holovin | Industrial Engineering & Process Improvement",
    template: "%s | Viktor Holovin",
  },

  description:
    "Industrial engineer focused on process improvement, operational efficiency, and practical digitalization. Combining hands-on manufacturing experience with software, data, and automation.",

  applicationName: "Viktor Holovin",

  authors: [
    {
      name: "Viktor Holovin",
      url: "https://www.holovin.com",
    },
  ],

  creator: "Viktor Holovin",
  publisher: "Viktor Holovin",

  keywords: [
    "Viktor Holovin",
    "Industrial Engineer",
    "Continuous Improvement",
    "Process Improvement",
    "Industrial Engineering",
    "Digitalization",
    "Operational Efficiency",
    "Manufacturing",
    "Automation",
    "Java",
    "Spring Boot",
    "Next.js",
    "PostgreSQL",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.holovin.com",
    siteName: "Viktor Holovin",
    title: "Viktor Holovin | Industrial Engineering & Process Improvement",
    description:
      "Industrial engineer focused on process improvement, operational efficiency, and practical digitalization.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Viktor Holovin | Industrial Engineering & Process Improvement",
    description:
      "Industrial engineer focused on process improvement, operational efficiency, and practical digitalization.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="scroll-smooth">
      <body
        className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

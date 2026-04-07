import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.holovin.com"),
  title: {
    default: "Viktor Holovin | Portfolio",
    template: "%s | Viktor Holovin",
  },
  description:
    "Frontend portfolio built with Next.js and Tailwind CSS, powered by PortfolioSpring API.",
  applicationName: "PortfolioNextJS",
  keywords: [
    "Viktor Holovin",
    "Next.js",
    "Tailwind CSS",
    "Java",
    "Spring Boot",
    "Portfolio",
    "DevOps",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Viktor Holovin", url: "https://www.holovin.com" }],
  creator: "Viktor Holovin",
  publisher: "Viktor Holovin",
  openGraph: {
    title: "Viktor Holovin | Portfolio",
    description:
      "Frontend portfolio built with Next.js and Tailwind CSS, powered by PortfolioSpring API.",
    url: "https://www.holovin.com",
    siteName: "Viktor Holovin Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viktor Holovin | Portfolio",
    description:
      "Frontend portfolio built with Next.js and Tailwind CSS, powered by PortfolioSpring API.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

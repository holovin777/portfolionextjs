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
    default: "Portfolio",
    template: "%s | Portfolio",
  },
  description: "Modern portfolio built with Next.js and powered by a custom API.",
  applicationName: "PortfolioNextJS",
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

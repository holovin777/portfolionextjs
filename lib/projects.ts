export type Project = {
  title: string
  description: string
  href: string
  tech: string[]
  status?: string
}

export const projects: Project[] = [
  {
    title: "holovin.com",
    description:
      "My personal portfolio website, built to present my work, experience, and technical journey in a modern frontend.",
    href: "https://holovin.com",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    status: "Active",
  },
  {
    title: "PortfolioSpring",
    description:
      "Java Spring Boot backend that powers my portfolio data through a structured REST API.",
    href: "https://api.holovin.com/api/v1/customer/eeb4914e-a3cc-4bc5-a342-8b8d22cba043",
    tech: ["Java", "Spring Boot", "REST API", "PostgreSQL"],
    status: "Core Backend",
  },
  {
    title: "innomarts.com",
    description:
      "My blog and services website where I publish tech content and offer fast website development.",
    href: "https://innomarts.com",
    tech: ["Hugo", "HTML", "CSS", "Content"],
    status: "Active",
  },
  {
    title: "italianocongeoff.vercel.app",
    description:
      "A language-focused project built around real communication, practice, and content sharing.",
    href: "https://italianocongeoff.vercel.app",
    tech: ["Frontend", "Vercel", "Web"],
    status: "Experimental",
  },
]

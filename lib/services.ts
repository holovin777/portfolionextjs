export type Service = {
  title: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    title: "Modern Websites",
    description:
      "Fast, responsive, and maintainable websites built for businesses, professionals, and real-world projects.",
    points: [
      "Business websites, landing pages, and portfolios",
      "Responsive design for mobile and desktop",
      "Performance, SEO, and clean structure",
    ],
  },

  {
    title: "Full-Stack Web Applications",
    description:
      "Web applications that connect a modern frontend with real backend logic, APIs, and persistent data.",
    points: [
      "Next.js and TypeScript frontend",
      "Java Spring Boot backend",
      "PostgreSQL and REST API integration",
    ],
  },

  {
    title: "Backend & Integrations",
    description:
      "Backend services and integrations designed to connect data, external systems, and frontend applications reliably.",
    points: [
      "REST API development and integration",
      "Database-backed application logic",
      "Existing system improvements and troubleshooting",
    ],
  },
]
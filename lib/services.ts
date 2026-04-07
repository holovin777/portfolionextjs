export type Service = {
  title: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    title: "Fast Websites",
    description:
      "Modern websites built with performance, simplicity, and clarity in mind.",
    points: [
      "Landing pages and portfolio sites",
      "Fast frontend with clean structure",
      "Responsive layout for mobile and desktop",
    ],
  },
  {
    title: "Frontend + Backend Integration",
    description:
      "Connecting interfaces with real backend logic instead of fake static demos.",
    points: [
      "REST API integration",
      "Next.js frontend with dynamic data",
      "Structured fullstack architecture",
    ],
  },
  {
    title: "Technical Problem-Solving",
    description:
      "Practical thinking shaped by real maintenance work, backend development, and system troubleshooting.",
    points: [
      "Clear technical reasoning",
      "Useful solutions over unnecessary complexity",
      "Focus on shipping working results",
    ],
  },
]

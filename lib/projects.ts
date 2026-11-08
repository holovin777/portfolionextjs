export type Project = {
  title: string
  description: string
  descriptionIt: string
  href: string
  tech: string[]
  status?: string
}

export const projects: Project[] = [
  {
    title: "holovin.com",
    description:
      "My full-stack personal portfolio built with Next.js and TypeScript, connected to a Java Spring Boot REST API and PostgreSQL database. It brings together my professional experience, education, projects, and technical background in one dynamic application.",
    descriptionIt:
      "Il mio portfolio personale full-stack sviluppato con Next.js e TypeScript, collegato a una REST API Java Spring Boot e a un database PostgreSQL. Riunisce esperienza professionale, formazione, progetti e competenze tecniche in un'unica applicazione dinamica.",
    href: "https://holovin.com",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "PostgreSQL",
    ],
    status: "Production",
  },

  {
    title: "La Magia dei Colori",
    description:
      "A production website built with Next.js for a children's creative workshop project, designed to present activities, educational content, a gallery, and contact information in a clear and responsive experience.",
    descriptionIt:
      "Un sito web in produzione sviluppato con Next.js per un progetto di laboratori creativi dedicati ai bambini, progettato per presentare attività, contenuti educativi, galleria e contatti in modo chiaro e responsive.",
    href: "https://lamagiadeicolori.com",
    tech: [
      "Next.js",
      "TypeScript",
      "Responsive Design",
      "SEO",
      "Cloudflare",
    ],
    status: "Production",
  },

  {
    title: "InnoMarts",
    description:
      "A Next.js website focused on modern website development and digital services, built to present practical solutions for businesses and clients who need fast, maintainable, and professional websites.",
    descriptionIt:
      "Un sito Next.js dedicato allo sviluppo web moderno e ai servizi digitali, creato per presentare soluzioni pratiche ad aziende e clienti che necessitano di siti veloci, professionali e facilmente manutenibili.",
    href: "https://innomarts.com",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
      "Cloudflare",
    ],
    status: "Active",
  },

  {
    title: "Italiano con Geoff",
    description:
      "An experimental language-learning project focused on practical Italian communication, structured educational content, and a simple web experience for learners.",
    descriptionIt:
      "Un progetto sperimentale per l'apprendimento della lingua italiana, incentrato sulla comunicazione pratica, su contenuti educativi strutturati e su un'esperienza web semplice per gli studenti.",
    href: "https://italianocongeoff.vercel.app",
    tech: [
      "Frontend",
      "Responsive UI",
      "Vercel",
    ],
    status: "Experimental",
  },
]
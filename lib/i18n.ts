export type Locale = "en" | "it";

export const translations = {
  en: {
    nav: {
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
    },

    hero: {
      badge: "Process Improvement · Digitalization",
      title:
        "Industrial Engineer focused on Process Improvement & Digitalization, with hands-on software development experience.",
    },

    sections: {
      experience: "Professional Experience",
      education: "Engineering Qualifications",
      projects: "Projects",
      software: "Software Development",
      contact: "Let's Connect",
    },

    actions: {
      viewExperience: "View Experience",
      viewProjects: "View Projects",
      viewFullExperience: "View Full Experience",
      viewFullEducation: "View Full Education",
      contactMe: "Contact Me",
    },
  },

  it: {
    nav: {
      experience: "Esperienza",
      education: "Formazione",
      projects: "Progetti",
      contact: "Contatti",
    },

    hero: {
      badge: "Miglioramento dei processi · Digitalizzazione",
      title:
        "Ingegnere industriale orientato al miglioramento dei processi e alla digitalizzazione, con esperienza pratica nello sviluppo software.",
    },

    sections: {
      experience: "Esperienza Professionale",
      education: "Formazione Ingegneristica",
      projects: "Progetti",
      software: "Sviluppo Software",
      contact: "Contattami",
    },

    actions: {
      viewExperience: "Vedi Esperienza",
      viewProjects: "Vedi Progetti",
      viewFullExperience: "Vedi tutta l'esperienza",
      viewFullEducation: "Vedi tutta la formazione",
      contactMe: "Contattami",
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}

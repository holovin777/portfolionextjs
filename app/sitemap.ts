import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.holovin.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: baseUrl,
          it: `${baseUrl}/it`,
        },
      },
    },
    {
      url: `${baseUrl}/it`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: baseUrl,
          it: `${baseUrl}/it`,
        },
      },
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/experience`,
          it: `${baseUrl}/it/experience`,
        },
      },
    },
    {
      url: `${baseUrl}/it/experience`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/experience`,
          it: `${baseUrl}/it/experience`,
        },
      },
    },
    {
      url: `${baseUrl}/education`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/education`,
          it: `${baseUrl}/it/education`,
        },
      },
    },
    {
      url: `${baseUrl}/it/education`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/education`,
          it: `${baseUrl}/it/education`,
        },
      },
    },
  ];
}

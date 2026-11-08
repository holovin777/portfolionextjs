import type { Locale } from "@/lib/i18n";
import type { Customer } from "@/types/customer";

type PersonJsonLdProps = {
  customer: Customer;
  locale: Locale;
};

export default function PersonJsonLd({ customer, locale }: PersonJsonLdProps) {
  const description =
    locale === "it"
      ? customer.descriptionIt || customer.description
      : customer.description;

  const jobTitle =
    locale === "it"
      ? "Ingegnere del Miglioramento Continuo"
      : customer.desiredProfession || "Continuous Improvement Engineer";

  const sameAs = customer.socials.map((social) => social.link).filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: `${customer.firstName} ${customer.lastName}`,

    url:
      locale === "it"
        ? "https://www.holovin.com/it"
        : "https://www.holovin.com",

    jobTitle,

    description,

    sameAs,

    knowsAbout: [
      "Industrial Engineering",
      "Process Improvement",
      "Continuous Improvement",
      "Digitalization",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Linux",
      "Software Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

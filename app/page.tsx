import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { getCustomer } from "@/lib/api";

export async function generateMetadata(): Promise<Metadata> {
  const customer = await getCustomer();

  const description =
    customer.description.length > 160
      ? `${customer.description.slice(0, 157)}...`
      : customer.description;

  return {
    title: {
      absolute: "Viktor Holovin | Industrial Engineering & Process Improvement",
    },

    description,

    alternates: {
      canonical: "/",
      languages: {
        en: "/",
        it: "/it",
      },
    },

    openGraph: {
      title: "Viktor Holovin | Industrial Engineering & Process Improvement",
      description,
      url: "/",
      siteName: "Viktor Holovin",
      type: "website",
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title: "Viktor Holovin | Industrial Engineering & Process Improvement",
      description,
    },
  };
}

export default function Home() {
  return <HomePage locale="en" />;
}

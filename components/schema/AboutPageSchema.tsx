import React from "react";
import { SITE_NAME, SITE_URL } from "@/components/schema/schemaConfig";

export type AboutPageSchemaProps = {
  title?: string;
  description?: string;
  url?: string;
};

export default function AboutPageSchema({ title = "About Vertexia", description = "Learn about Vertexia, our mission, and how we build fast, SEO-friendly websites that help businesses grow online.", url = `${SITE_URL}/about-us` }: AboutPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: title,
    description,
    url,
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

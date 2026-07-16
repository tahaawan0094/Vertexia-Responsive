import React from "react";
import { SITE_NAME, SITE_URL } from "@/components/schema/schemaConfig";

export type CollectionPageSchemaProps = {
  title: string;
  description?: string;
  url: string;
};

export default function CollectionPageSchema({ title, description = "Collection of pages and resources from Vertexia.", url }: CollectionPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
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

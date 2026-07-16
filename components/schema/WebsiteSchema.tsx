import React from "react";
import { ORGANIZATION_ID, SITE_DESCRIPTION, SITE_NAME, SITE_URL, WEBSITE_ID } from "@/components/schema/schemaConfig";

export type WebsiteSchemaProps = {
  name?: string;
  url?: string;
  description?: string;
};

export default function WebsiteSchema({
  name = SITE_NAME,
  url = SITE_URL,
  description = SITE_DESCRIPTION,
}: WebsiteSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name,
    url,
    description,
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
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

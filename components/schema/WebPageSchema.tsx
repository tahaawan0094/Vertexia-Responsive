import React from "react";
import { SITE_NAME, SITE_URL } from "@/components/schema/schemaConfig";

export type WebPageSchemaProps = {
  title: string;
  description?: string;
  url: string;
  breadcrumb?: Array<Record<string, unknown>>;
};

export default function WebPageSchema({ title, description = "Vertexia web page", url, breadcrumb }: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    breadcrumb: breadcrumb ? { "@type": "BreadcrumbList", itemListElement: breadcrumb } : undefined,
  };

  const cleaned = Object.fromEntries(Object.entries(schema).filter(([, value]) => value !== undefined));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(cleaned),
      }}
    />
  );
}

import React from "react";
import { ORGANIZATION_ID, SITE_URL } from "@/components/schema/schemaConfig";

export type ServiceSchemaProps = {
  title: string;
  description: string;
  url: string;
  offers?: Record<string, unknown>;
  serviceType?: string;
  provider?: Record<string, unknown>;
};

export default function ServiceSchema({
  title,
  description,
  url,
  offers,
  serviceType = "ProfessionalService",
  provider = {
    "@id": ORGANIZATION_ID,
  },
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    url,
    serviceType,
    provider,
    areaServed: ["Pakistan"],
    offers: offers || {
      "@type": "Offer",
      url,
      availability: "https://schema.org/InStock",
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

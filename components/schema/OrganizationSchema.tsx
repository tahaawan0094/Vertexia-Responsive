import React from "react";
import { CONTACT_EMAIL, CONTACT_TELEPHONE, ORGANIZATION_ID, SITE_DESCRIPTION, SITE_LOGO, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/components/schema/schemaConfig";

export type OrganizationSchemaProps = {
  name?: string;
  url?: string;
  description?: string;
  sameAs?: string[];
};

export default function OrganizationSchema({
  name = SITE_NAME,
  url = SITE_URL,
  description = SITE_DESCRIPTION,
  sameAs = SOCIAL_LINKS,
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name,
    url,
    logo: SITE_LOGO,
    description,
    sameAs,
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/#taha-awan`,
      name: "Taha Awan",
      url: `${SITE_URL}/founder`,
    },
    areaServed: ["Pakistan"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: CONTACT_TELEPHONE,
        email: CONTACT_EMAIL,
        areaServed: "Pakistan",
        availableLanguage: ["English"],
        url: `${SITE_URL}/contact`,
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    foundingLocation: {
      "@type": "Place",
      name: "Karachi, Pakistan",
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

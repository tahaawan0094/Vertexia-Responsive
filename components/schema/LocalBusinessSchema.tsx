import React from "react";
import { CONTACT_EMAIL, CONTACT_TELEPHONE, SITE_NAME, SITE_URL } from "@/components/schema/schemaConfig";

export type LocalBusinessSchemaProps = {
  name?: string;
  url?: string;
  telephone?: string;
  email?: string;
  areaServed?: string | string[];
};

export default function LocalBusinessSchema({
  name = SITE_NAME,
  url = SITE_URL,
  telephone = CONTACT_TELEPHONE,
  email = CONTACT_EMAIL,
  areaServed = ["Pakistan"],
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#local-business`,
    name,
    url,
    telephone,
    email,
    areaServed,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    sameAs: [
      "https://www.linkedin.com/in/vertexia-io-b03923410/",
      "https://www.facebook.com/profile.php?id=61589778596884",
      "https://www.instagram.com/vertexia.io/",
      "https://x.com/vertexiadev",
    ],
    priceRange: "$$",
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

import React from "react";
import { AUTHOR_IMAGE, AUTHOR_NAME, AUTHOR_URL, SITE_NAME, SITE_URL } from "@/components/schema/schemaConfig";

export type PersonSchemaProps = {
  name?: string;
  url?: string;
  image?: string;
  jobTitle?: string;
  affiliation?: string;
};

export default function PersonSchema({
  name = AUTHOR_NAME,
  url = AUTHOR_URL,
  image = AUTHOR_IMAGE,
  jobTitle = "Founder",
  affiliation = SITE_NAME,
}: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#taha-awan`,
    name,
    url,
    image,
    jobTitle,
    affiliation: {
      "@type": "Organization",
      name: affiliation,
      url: SITE_URL,
    },
    sameAs: [
      "https://www.linkedin.com/in/vertexia-io-b03923410/",
      "https://www.facebook.com/profile.php?id=61589778596884",
      "https://www.instagram.com/vertexia.io/",
      "https://x.com/vertexiadev",
    ],
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

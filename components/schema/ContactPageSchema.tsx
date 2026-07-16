import React from "react";
import { CONTACT_EMAIL, CONTACT_TELEPHONE, SITE_NAME, SITE_URL } from "@/components/schema/schemaConfig";

export type ContactPageSchemaProps = {
  title?: string;
  description?: string;
  url?: string;
};

export default function ContactPageSchema({ title = "Contact Vertexia", description = "Contact Vertexia for custom website development, WordPress development, SEO, and ecommerce solutions.", url = `${SITE_URL}/contact` }: ContactPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: title,
    description,
    url,
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: CONTACT_TELEPHONE,
        email: CONTACT_EMAIL,
        contactType: "customer service",
      },
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

import React from "react";
import { AUTHOR_IMAGE, AUTHOR_NAME, AUTHOR_URL, ORGANIZATION_ID, SITE_LOGO, SITE_NAME, SITE_URL } from "@/components/schema/schemaConfig";

export type BlogPostingSchemaProps = {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
  authorImage?: string;
  publisherName?: string;
  publisherLogo?: string;
};

export default function BlogPostingSchema({
  headline,
  description,
  url,
  image = `${SITE_URL}/Blog images/modern-web-development-digital-growth-by-vertexia.webp`,
  datePublished,
  dateModified,
  authorName = AUTHOR_NAME,
  authorUrl = AUTHOR_URL,
  authorImage = AUTHOR_IMAGE,
  publisherName = SITE_NAME,
  publisherLogo = SITE_LOGO,
}: BlogPostingSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image: [image],
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
      image: authorImage,
    },
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: publisherName,
      logo: {
        "@type": "ImageObject",
        url: publisherLogo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
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

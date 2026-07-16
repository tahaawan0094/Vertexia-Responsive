import React from "react";
import { SITE_URL } from "@/components/schema/schemaConfig";

export type BreadcrumbSchemaProps = {
  pathname: string;
  title?: string;
};

const routeNameMap: Record<string, string> = {
  "about-us": "About Us",
  blogs: "Blogs",
  founder: "Founder",
  leadership: "Leadership",
  contact: "Contact",
  pricing: "Pricing",
  "get-wordpress-website": "Get WordPress Website",
  "get-custom-website": "Get Custom Website",
  "done-for-you-website": "Done For You Website",
  "concierge-service": "Concierge Service",
  "website-examples": "Website Examples",
  "privacy-policy": "Privacy Policy",
  "terms-and-conditions": "Terms and Conditions",
  "refund-policy": "Refund Policy",
  "thank-you": "Thank You",
  "what-is-vertexia": "What is Vertexia",
};

function slugToName(slug: string) {
  const value = slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
  return value;
}

export default function BreadcrumbSchema({ pathname, title }: BreadcrumbSchemaProps) {
  const cleanPath = pathname.split("?")[0].split("#")[0] || "/";
  const segments = cleanPath.split("/").filter(Boolean);
  const itemListElement: Array<Record<string, unknown>> = [];
  let currentUrl = SITE_URL;

  itemListElement.push({
    "@type": "ListItem",
    position: 1,
    name: "Home",
    item: `${SITE_URL}/`,
  });

  segments.forEach((segment, index) => {
    currentUrl = `${currentUrl}/${segment}`;
    const isLast = index === segments.length - 1;
    const name = routeNameMap[segment] || slugToName(segment);
    itemListElement.push({
      "@type": "ListItem",
      position: index + 2,
      name: isLast && title ? title : name,
      item: `${SITE_URL}/${segments.slice(0, index + 1).join("/")}`,
    });
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
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

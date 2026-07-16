import { MetadataRoute } from "next";

const baseUrl = "https://www.vertexiaagency.com";
const routes = [
  "/",
  "/about-us",
  "/blogs",
  "/blogs/why-businesses-in-pakistan-need-seo-2026",
  "/blogs/website-development-cost-pakistan-2026",
  "/blogs/what-is-seo-simple-guide-business-owners-pakistan",
  "/blogs/website-losing-customers-signs",
  "/blogs/is-your-website-outdated-signs-time-for-redesign",
  "/blogs/local-seo-checklist-small-businesses-karachi",
  "/blogs/website-speed-google-ranking-factor-how-to-fix",
  "/blogs/what-is-schema-markup-why-it-helps-rank-higher",
  "/blogs/seo-manufacturing-companies-b2b-buyers",
  "/concierge-service",
  "/contact",
  "/done-for-you-website",
  "/faqs",
  "/founder",
  "/get-custom-website",
  "/get-wordpress-website",
  "/leadership",
  "/preview",
  "/pricing",
  "/privacy-policy",
  "/refund-policy",
  "/terms-and-conditions",
  "/thank-you",
  "/website-examples",
  "/what-is-vertexia",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/blogs/") ? "monthly" : "weekly",
    priority: route === "/" ? 1 : route === "/blogs" ? 0.9 : route.startsWith("/blogs/") ? 0.85 : 0.8,
  }));
}

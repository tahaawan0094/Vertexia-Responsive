import type { Metadata } from "next";
import WebsiteExamplesHero from "@/components/sections/WebsiteExamplesHero";
import WebsiteExamplesGallery from "@/components/sections/WebsiteExamplesGallery";
import FaqSection from "@/components/sections/FaqSection";
import ProfessionalWebSection from "@/components/sections/ProfessionalWebSection";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import CollectionPageSchema from "@/components/schema/CollectionPageSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Website Examples | Vertexia â€” See Our Work",
  description:
    "Browse stunning website examples built by Vertexia for 1000+ business categories. Rated Excellent on Trustpilot by 5,000+ happy customers.",
  alternates: {
    canonical: "https://www.vertexiaagency.com/website-examples",
  },
};

export default function WebsiteExamplesPage() {
  return (
    <>
      <CollectionPageSchema title="Website Examples" description="Browse examples of websites built by Vertexia for local and growing businesses." url="https://www.vertexiaagency.com/website-examples" />
      <BreadcrumbSchema pathname="/website-examples" title="Website Examples" />
      <main className="site">
      <WebsiteExamplesHero />
      <WebsiteExamplesGallery />
      <FaqSection />
      <ProfessionalWebSection />
      <FooterLinksSection />
    </main>
    </>
  );
}


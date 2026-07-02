import type { Metadata } from "next";
import WebsiteExamplesHero from "@/components/sections/WebsiteExamplesHero";
import WebsiteExamplesGallery from "@/components/sections/WebsiteExamplesGallery";
import FaqSection from "@/components/sections/FaqSection";
import ProfessionalWebSection from "@/components/sections/ProfessionalWebSection";
import FooterLinksSection from "@/components/sections/FooterLinksSection";

export const metadata: Metadata = {
  title: "Website Examples | Vertexia — See Our Work",
  description:
    "Browse stunning website examples built by Vertexia for 1000+ business categories. Rated Excellent on Trustpilot by 5,000+ happy customers.",
  alternates: {
    canonical: "https://vertexiaagency.com/website-examples",
  },
};

export default function WebsiteExamplesPage() {
  return (
    <main className="site">
      <WebsiteExamplesHero />
      <WebsiteExamplesGallery />
      <FaqSection />
      <ProfessionalWebSection />
      <FooterLinksSection />
    </main>
  );
}

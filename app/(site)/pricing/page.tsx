import type { Metadata } from "next";
import PricingSection from "@/components/sections/PricingSection";
import PageTransition from "@/components/animations/PageTransition";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import TrustpilotSection from "@/components/sections/TrustpilotSection";
import FaqSection from "@/components/sections/FaqSection";
import ProfessionalWebSection from "@/components/sections/ProfessionalWebSection";

export const metadata: Metadata = {
  title: "Affordable Website Pricing Plans for Businesses | Vertexia",
  description:
    "View transparent pricing for websites, SEO, and marketing services. Affordable plans designed to help small businesses grow online.",
  alternates: {
    canonical: "https://vertexiaagency.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <PageTransition>
      <main className="site">
        <PricingSection />
        <TrustpilotSection />
        <FaqSection />
        <ProfessionalWebSection />
        <FooterLinksSection />
      </main>
    </PageTransition>
  );
}

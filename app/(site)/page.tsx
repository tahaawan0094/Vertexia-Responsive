import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import AlternativesSection from "@/components/sections/AlternativesSection";
import ThankfulSection from "@/components/sections/ThankfulSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import StepsSection from "@/components/sections/StepsSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import RoiSection from "@/components/sections/RoiSection";
import TrustpilotSection from "@/components/sections/TrustpilotSection";
import FaqSection from "@/components/sections/FaqSection";
import ProfessionalWebSection from "@/components/sections/ProfessionalWebSection";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import OrganizationSchema from "@/components/schema/OrganizationSchema";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import WebsiteSchema from "@/components/schema/WebsiteSchema";
import WebPageSchema from "@/components/schema/WebPageSchema";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.vertexiaagency.com/",
  },
};

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebsiteSchema />
      <WebPageSchema title="Vertexia - Web Development Agency" description="Vertexia provides professional web development services." url="https://www.vertexiaagency.com/" />
      <main className="site">
      <HeroSection />
      <ShowcaseSection />
      <AlternativesSection />
      <ThankfulSection />
      <ComparisonSection />
      <IndustriesSection />
      <HowItWorksSection />
      <StepsSection />
      <WhyChooseSection />
      <RoiSection />
      <TrustpilotSection />
      <FaqSection />
      <ProfessionalWebSection />
      <FooterLinksSection />
    </main>
    </>
  );
}


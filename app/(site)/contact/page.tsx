"use client";

import ContactForm from "@/components/sections/ContactForm";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import PageTransition from "@/components/animations/PageTransition";
import ContactPageSchema from "@/components/schema/ContactPageSchema";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactPageSchema title="Contact Vertexia" description="Contact Vertexia for custom website development, WordPress development, SEO, and ecommerce solutions." url="https://www.vertexiaagency.com/contact" />
      <LocalBusinessSchema />
      <BreadcrumbSchema pathname="/contact" title="Contact" />
      <main className="site">
        <ContactForm />
        <FooterLinksSection />
      </main>
    </PageTransition>
  );
}

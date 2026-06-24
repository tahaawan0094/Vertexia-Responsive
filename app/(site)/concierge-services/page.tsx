import type { Metadata } from "next";
import Link from "next/link";
import ConciergeHeroSection from "@/components/sections/ConciergeHeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FaqSection from "@/components/sections/FaqSection";
import ProfessionalWebSection from "@/components/sections/ProfessionalWebSection";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import PageTransition from "@/components/animations/PageTransition";
import RichMultimediaSection from "@/components/sections/RichMultimediaSection";


export const metadata: Metadata = {
  title: "Concierge Services | Vertexia - On-Demand Professional Website Edits",
  description:
    "VIP on-demand website edits and maintenance services by Vertexia. We handle layout modifications, content updates, product updates, and search optimization for you.",
  keywords: [
    "website concierge service",
    "on-demand website edits",
    "website maintenance",
    "professional website update",
    "custom website edits",
    "Vertexia concierge",
    "manage website",
  ],
  alternates: {
    canonical: "https://vertexiaio.vercel.app/concierge-services",
  },
  openGraph: {
    title: "Concierge Services | Vertexia - On-Demand Professional Website Edits",
    description:
      "VIP on-demand website edits and maintenance services by Vertexia. We handle layout modifications, content updates, product updates, and search optimization for you.",
    url: "https://vertexiaio.vercel.app/concierge-services",
    type: "website",
    siteName: "Vertexia",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function ConciergeServicesPage() {
  return (
    <PageTransition>
      <main className="site">
        {/* Hero & Layered Mockup */}
        <ConciergeHeroSection />

        {/* Unlimited Website Edits Section */}
        <section className="px-4 py-24 sm:px-6 lg:px-8 bg-[#040404] relative z-10">
          <div className="mx-auto max-w-[1200px]">
            {/* Heading */}
            <div className="text-center mb-6">
              <h2 className="text-[52px] leading-[1.15] font-bold text-white mb-6 max-[640px]:text-[34px] max-[640px]:leading-tight">
                Unlimited{" "}
                <span className="inline-block border-l-4 border-[#109f7a] bg-[linear-gradient(-50deg,rgba(11,77,58,0)_22%,rgba(16,115,87,0.55))] px-3 py-1 text-white">
                  website edits
                </span>
                <br />
                at your request
              </h2>
              <p className="text-white/70 text-lg max-w-[600px] mx-auto leading-relaxed">
                You probably don&apos;t have time to keep your website updated.
                <br className="hidden sm:inline" />
                So whenever you need to change something, we&apos;ll do it for you.
              </p>
            </div>

            {/* Image Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
              {/* Card 1 */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-full overflow-hidden rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-1">
                  <img
                    src="/concierge services images/2nd section/concierge-service-by-vertexia.webp"
                    alt="Enhance your content"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-white/80 text-[15px] font-medium tracking-wide">Enhance your content</p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-full overflow-hidden rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-1">
                  <img
                    src="/concierge services images/2nd section/concierge-vertexia.webp"
                    alt="Refresh your design"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-white/80 text-[15px] font-medium tracking-wide">Refresh your design</p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-full overflow-hidden rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-1">
                  <img
                    src="/concierge services images/2nd section/vertexia-concierge-page.webp"
                    alt="Add & edit everything"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-white/80 text-[15px] font-medium tracking-wide">Add &amp; edit everything</p>
              </div>
            </div>
          </div>
        </section>

        {/* Magic Service Banner Section */}
        <section className="bg-[#040404] py-12 relative z-10">
          <div className="w-full bg-gradient-to-r from-[#06281e] via-[#0b4d3a] to-[#06281e] py-8 text-center border-y border-white/5">
            <div className="mx-auto max-w-[1200px] px-4">
              <h3 className="text-white text-xl md:text-[24px] font-light leading-snug">
                <span className="font-bold">Discover VERTEXIA’s magic:</span> the service.
              </h3>
              <p className="mt-2 text-white/90 text-base md:text-lg font-normal">
                Our team provides agency-level support at a do-it-yourself price.
              </p>
            </div>
          </div>
        </section>

        {/* Rich Multimedia Section */}
        <RichMultimediaSection />

        <section className="relative bg-[#05070d] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="mb-3 font-[Poppins] text-sm uppercase tracking-[0.3em] text-white/55">
                TRACK VISITOR INTERACTIONS
              </p>
              <h2
                className="text-white"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  color: "rgb(255, 255, 255)",
                  fontSize: "56px",
                  lineHeight: "73px",
                }}
              >
                We will{" "}
                <span
                  className="inline-block border-l-4 border-[#109f7a] bg-[linear-gradient(-50deg,rgba(11,77,58,0)_22%,rgba(16,115,87,0.55))] px-3 py-1 text-white"
                  style={{
                    display: "inline-block",
                  }}
                >
                  integrate tracking
                </span>
                <br />
                tools into your website
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2   sm:grid-cols-3 lg:grid-cols-6">
              {[
                { name: "Google AdSense", src: "/concierge services images/logos/adsense.webp" },
                { name: "Google Analytics", src: "/concierge services images/logos/google%20anlytics.webp" },
                { name: "Hotjar", src: "/concierge services images/logos/hotjar.webp" },
                { name: "Facebook Pixel", src: "/concierge services images/logos/html.webp" },
                { name: "Google Tag Manager", src: "/concierge services images/logos/logo.webp" },
                { name: "HubSpot Tracking", src: "/concierge services images/logos/n8n.webp" },
              ].map((logo) => (
                <div
                  key={logo.name}
                  className="flex flex-col items-center justify-center gap-3 p-2"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-36 w-full max-w-[320px] object-contain"
                  />
                  <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                    {logo.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorksSection showButton />

        {/* FAQs */}
        <FaqSection />

        {/* Center Prompt */}
        <ProfessionalWebSection centered />

        {/* Service Resources Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-[#09090c]">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Explore More Vertexia Services
              </h2>
              <p className="text-lg text-white/60 mb-8">
                Discover our comprehensive range of web solutions to find the perfect fit for your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#121217] rounded-2xl p-6 border border-white/5 hover:border-white/10 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">
                  <Link
                    href="/get-custom-website"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Get Custom Website &rarr;
                  </Link>
                </h3>
                <p className="text-white/60 text-sm">
                  Professional custom website design and development with full control and advanced performant features.
                </p>
              </div>

              <div className="bg-[#121217] rounded-2xl p-6 border border-white/5 hover:border-white/10 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">
                  <Link
                    href="/get-wordpress-website"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Get WordPress Website &rarr;
                  </Link>
                </h3>
                <p className="text-white/60 text-sm">
                  Get a fully built WordPress website in 7 days, complete with domains, hosting, setup, and support.
                </p>
              </div>

              <div className="bg-[#121217] rounded-2xl p-6 border border-white/5 hover:border-white/10 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">
                  <Link
                    href="/pricing"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Our Pricing &rarr;
                  </Link>
                </h3>
                <p className="text-white/60 text-sm">
                  Transparent, affordable pricing plans tailored for small business launch, support, and growth packages.
                </p>
              </div>

              <div className="bg-[#121217] rounded-2xl p-6 border border-white/5 hover:border-white/10 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">
                  <Link
                    href="/faqs"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    FAQs &rarr;
                  </Link>
                </h3>
                <p className="text-white/60 text-sm">
                  Get detailed answers to common inquiries about our platform capabilities, onboarding questionnaires, and support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Links */}
        <FooterLinksSection />
      </main>
    </PageTransition>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import ConciergeHeroSection from "@/components/sections/ConciergeHeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FaqSection from "@/components/sections/FaqSection";
import ProfessionalWebSection from "@/components/sections/ProfessionalWebSection";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import PageTransition from "@/components/animations/PageTransition";

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

        {/* What is Concierge Service / Feature Details */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#080815] to-black">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                What does the Concierge Service include?
              </h2>
              <p className="text-white/70 text-lg max-w-[700px] mx-auto">
                No need to waste hours editing templates or writing code. Simply send us your update requests, and our team will handle it.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group rounded-3xl bg-[#0f0f15] border border-white/5 p-8 transition hover:bg-[#151522] hover:border-white/10 hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Text & Content Updates
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Need to fix typos, change headlines, write fresh descriptions, or post updates to your blogs? Our copywriters and editors maintain layout alignment while updating your messaging.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group rounded-3xl bg-[#0f0f15] border border-white/5 p-8 transition hover:bg-[#151522] hover:border-white/10 hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-lg">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Media & Graphics Management
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Swap background banners, update product photos, format media galleries, and replace logos. We optimize images to load fast and fit perfectly on all desktop and mobile viewports.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group rounded-3xl bg-[#0f0f15] border border-white/5 p-8 transition hover:bg-[#151522] hover:border-white/10 hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Design & Layout Adjustments
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Want to move sections around, add a contact form, insert a brand-new page block, or adjust spacing? Our developers align elements accurately to maintain professional aesthetics.
                </p>
              </div>

              {/* Card 4 */}
              <div className="group rounded-3xl bg-[#0f0f15] border border-white/5 p-8 transition hover:bg-[#151522] hover:border-white/10 hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 text-white shadow-lg">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  E-Commerce Setup
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Configure discounts, list new product variants, edit inventory data, write store shipping guidelines, and sync payment handlers with 0% transaction commissions.
                </p>
              </div>

              {/* Card 5 */}
              <div className="group rounded-3xl bg-[#0f0f15] border border-white/5 p-8 transition hover:bg-[#151522] hover:border-white/10 hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Booking & Schedule Tuning
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Tweak calendars, modify block-out slots, write customized automated confirmation copy, and link booking systems to WhatsApp or external notification webhooks.
                </p>
              </div>

              {/* Card 6 */}
              <div className="group rounded-3xl bg-[#0f0f15] border border-white/5 p-8 transition hover:bg-[#151522] hover:border-white/10 hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 text-white shadow-lg">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Priority VIP Turnaround
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Get high-priority execution. Most standard text, image, product, and style edits are completed and published live directly by our engineers in under 24 to 48 hours.
                </p>
              </div>
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

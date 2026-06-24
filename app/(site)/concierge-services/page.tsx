// app/(site)/concierge-services/ConciergeClientPage.tsx
"use client";

import Link from "next/link";
import ConciergeHeroSection from "@/components/sections/ConciergeHeroSection";
import PageTransition from "@/components/animations/PageTransition";
import RichMultimediaSection from "@/components/sections/RichMultimediaSection";
import ProfessionalWebSectionCopy from "@/components/sections/ProfessionalWebSectionCopy";
import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "@/src/components/lightswind/3d-scroll-trigger";
import { motion } from "framer-motion";
import FooterLinksSection from "@/components/sections/FooterLinksSection";

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "E-commerce Store Owner",
    quote:
      "Vertexia delivered a website that looks modern, loads incredibly fast, and provides a seamless customer experience. The results exceeded our expectations.",
  },
  {
    name: "Sarah Khan",
    role: "Startup Founder",
    quote:
      "The communication, design quality, and attention to detail were exceptional. We couldn't be happier with the final product.",
  },
  {
    name: "Ali Hassan",
    role: "Business Owner",
    quote:
      "Our old website was holding us back. Vertexia completely transformed our online presence and made us look far more professional.",
  },
  {
    name: "Fatima Noor",
    role: "Marketing Manager",
    quote:
      "The team understood our goals immediately and delivered a website that perfectly aligns with our brand.",
  },
  {
    name: "Bilal Ahmed",
    role: "Tech Entrepreneur",
    quote:
      "Excellent development standards, clean code, and great performance optimization. Highly recommended.",
  },
  {
    name: "Usman Tariq",
    role: "Agency Founder",
    quote:
      "The entire process was smooth from planning to launch. Vertexia consistently exceeded expectations.",
  },
  {
    name: "Hina Malik",
    role: "Online Store Owner",
    quote:
      "Our new website is significantly faster and much easier for customers to navigate.",
  },
  {
    name: "Hamza Sheikh",
    role: "Local Business Owner",
    quote:
      "The design quality is outstanding. We've received numerous compliments from customers.",
  },
  {
    name: "Ayesha Noor",
    role: "Startup Co-Founder",
    quote:
      "Professional, reliable, and extremely skilled. Vertexia delivered exactly what they promised.",
  },
  {
    name: "Danish Khan",
    role: "Business Consultant",
    quote:
      "The website feels premium and performs exceptionally well across all devices.",
  },
  {
    name: "Zain Ali",
    role: "Service Provider",
    quote:
      "The user experience improvements alone made the project worthwhile. Fantastic work.",
  },
  {
    name: "Mariam Ahmed",
    role: "Brand Manager",
    quote:
      "Vertexia created a website that truly reflects our company's professionalism and vision.",
  },
  {
    name: "Talha Qureshi",
    role: "Founder",
    quote:
      "The team was responsive, proactive, and focused on delivering quality from day one.",
  },
  {
    name: "Sana Malik",
    role: "Marketing Executive",
    quote:
      "Our conversion rate improved after the redesign. The experience was excellent.",
  },
  {
    name: "Farhan Raza",
    role: "Small Business Owner",
    quote:
      "Clean design, excellent structure, and strong attention to performance optimization.",
  },
  {
    name: "Iqra Hassan",
    role: "Business Owner",
    quote:
      "The final result was far beyond what we initially imagined. Exceptional service.",
  },
  {
    name: "Omer Tariq",
    role: "Entrepreneur",
    quote:
      "Every detail was thoughtfully designed. The website feels modern and trustworthy.",
  },
  {
    name: "Noor Fatima",
    role: "Retail Brand Owner",
    quote:
      "The project was delivered on time and the quality exceeded expectations.",
  },
  {
    name: "Arslan Khan",
    role: "Startup Founder",
    quote:
      "Vertexia combines creativity with technical expertise. A great partner for digital growth.",
  },
  {
    name: "Hassan Ali",
    role: "Company Director",
    quote:
      "From design to development, the process was seamless and highly professional.",
  },
];

export default function ConciergeClientPage() {
  return (
    <PageTransition>
      <main className="site overflow-x-hidden">
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

        {/* Track Interactions Section - Now Edge to Edge */}
        <section className="relative bg-[#040404] py-20 w-full overflow-hidden">
          {/* Centered Heading Layout */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 text-center">
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

          {/* Full Width Ticker Area */}
          <div className="w-full overflow-hidden bg-[#040404]">
            <motion.div
              className="flex w-max gap-6 py-2"
              animate={{ x: [0, -1800] }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[
                [
                  { name: "Google AdSense", src: "/concierge services images/logos/adsense.webp" },
                  { name: "Google Analytics", src: "/concierge services images/logos/google%20anlytics.webp" },
                  { name: "Hotjar", src: "/concierge services images/logos/hotjar.webp" },
                  { name: "Facebook Pixel", src: "/concierge services images/logos/html.webp" },
                  { name: "Google Tag Manager", src: "/concierge services images/logos/logo.webp" },
                  { name: "HubSpot Tracking", src: "/concierge services images/logos/n8n.webp" },
                ],
                [
                  { name: "Google AdSense", src: "/concierge services images/logos/adsense.webp" },
                  { name: "Google Analytics", src: "/concierge services images/logos/google%20anlytics.webp" },
                  { name: "Hotjar", src: "/concierge services images/logos/hotjar.webp" },
                  { name: "Facebook Pixel", src: "/concierge services images/logos/html.webp" },
                  { name: "Google Tag Manager", src: "/concierge services images/logos/logo.webp" },
                  { name: "HubSpot Tracking", src: "/concierge services images/logos/n8n.webp" },
                ],
              ]
                .flat()
                .map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex min-w-[220px] flex-col items-center justify-center gap-3 rounded-2xl p-4"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-24 w-full max-w-[220px] object-contain"
                    />
                    <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                      {logo.name}
                    </p>
                  </div>
                ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section - Fully Extended to Edges */}
        <section className="relative w-full overflow-hidden bg-[#040404] py-24">
          <div className="w-full">
            <div className="mx-auto mb-14 max-w-3xl text-center px-4 sm:px-6 lg:px-8">

              <h3
                className="text-white"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "36px",
                  lineHeight: "1.15",
                }}
              >
                A wall of <p className="inline-block border-l-4 border-[#109f7a] bg-[linear-gradient(-50deg,rgba(11,77,58,0)_22%,rgba(16,115,87,0.55))] px-3 py-1 text-white"> love for our </p><br />Concierge Service </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white sm:text-lg">
                Customers achieve more with our team’s help.


              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6">
                <div className="text-left">
                </div>
                <div className="text-left">
                </div>
              </div>
            </div>

            {/* Container now fully fluid across edges */}
            <ThreeDScrollTriggerContainer className="w-full space-y-4 md:space-y-5">
              {/* Row 1 */}
              <ThreeDScrollTriggerRow direction={1} baseVelocity={3} className="py-2">
                {testimonials.slice(0, 5).map((testimonial, index) => (
                  <div key={`${testimonial.name}-${index}`} className="mr-4 md:mr-5 shrink-0">
                    <article className="flex h-[260px] w-[280px] flex-col rounded-[20px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)] md:w-[300px]">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-sm font-semibold text-[#047857]">
                          {testimonial.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}
                        </div>
                        <div className="whitespace-normal">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="text-base font-semibold text-[#0F172A]">{testimonial.name}</h4>
                            <span className="inline-flex items-center rounded-full bg-[#ECFDF5] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#047857]">
                              Verified
                            </span>
                          </div>
                          <p className="text-sm text-[#64748B]">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="mb-4 text-lg text-[#F59E0B]">★★★★★</div>
                      <p className="flex-1 text-[14px] leading-7 font-medium tracking-[-0.01em] text-[#334155] sm:text-[15px] whitespace-normal">
                        “{testimonial.quote}”
                      </p>
                    </article>
                  </div>
                ))}
              </ThreeDScrollTriggerRow>

              {/* Row 2 */}
              <ThreeDScrollTriggerRow direction={-1} baseVelocity={4} className="py-2">
                {testimonials.slice(5, 10).map((testimonial, index) => (
                  <div key={`${testimonial.name}-${index}`} className="mr-4 md:mr-5 shrink-0">
                    <article className="flex h-[260px] w-[280px] flex-col rounded-[20px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)] md:w-[300px]">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-sm font-semibold text-[#047857]">
                          {testimonial.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}
                        </div>
                        <div className="whitespace-normal">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="text-base font-semibold text-[#0F172A]">{testimonial.name}</h4>
                            <span className="inline-flex items-center rounded-full bg-[#ECFDF5] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#047857]">
                              Verified
                            </span>
                          </div>
                          <p className="text-sm text-[#64748B]">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="mb-4 text-lg text-[#F59E0B]">★★★★★</div>
                      <p className="flex-1 text-[14px] leading-7 font-medium tracking-[-0.01em] text-[#334155] sm:text-[15px] whitespace-normal">
                        “{testimonial.quote}”
                      </p>
                    </article>
                  </div>
                ))}
              </ThreeDScrollTriggerRow>

              {/* Row 3 */}
              <ThreeDScrollTriggerRow direction={1} baseVelocity={5} className="py-2">
                {testimonials.slice(10, 15).map((testimonial, index) => (
                  <div key={`${testimonial.name}-${index}`} className="mr-4 md:mr-5 shrink-0">
                    <article className="flex h-[260px] w-[280px] flex-col rounded-[20px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)] md:w-[300px]">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-sm font-semibold text-[#047857]">
                          {testimonial.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}
                        </div>
                        <div className="whitespace-normal">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="text-base font-semibold text-[#0F172A]">{testimonial.name}</h4>
                            <span className="inline-flex items-center rounded-full bg-[#ECFDF5] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#047857]">
                              Verified
                            </span>
                          </div>
                          <p className="text-sm text-[#64748B]">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="mb-4 text-lg text-[#F59E0B]">★★★★★</div>
                      <p className="flex-1 text-[14px] leading-7 font-medium tracking-[-0.01em] text-[#334155] sm:text-[15px] whitespace-normal">
                        “{testimonial.quote}”
                      </p>
                    </article>
                  </div>
                ))}
              </ThreeDScrollTriggerRow>

            </ThreeDScrollTriggerContainer>
          </div>
        </section>

        <ProfessionalWebSectionCopy />
         <FooterLinksSection/>       
      
      </main>
    </PageTransition>
  );
}
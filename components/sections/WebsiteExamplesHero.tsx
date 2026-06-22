"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const images = [
  {
    src: "/website example/website-example-vertexia.png",
    alt: "Spa & Wellness Website Example",
    className: "row-1 col-1",
  },
  {
    src: "/website example/websites-by-vertexia.png",
    alt: "Hair Salon Website Example",
    className: "row-1 col-2",
  },
  {
    src: "/website example/vertexia-agency.png",
    alt: "Eyewear Store Website Example",
    className: "row-1 col-4",
  },
  {
    src: "/website example/vertexia-website-example.png",
    alt: "Pet Grooming Website Example",
    className: "row-2 col-1",
  },
  {
    src: "/website example/vertexia-websites.png",
    alt: "Auto Detailing Website Example",
    className: "row-2 col-3",
  },
  {
    src: "/website example/vertexia-web-dev.png",
    alt: "Fitness Website Example",
    className: "row-2 col-4",
  },
];

export default function WebsiteExamplesHero() {
  return (
    <section
      id="website-examples-hero"
      className="relative overflow-hidden bg-[#0a0a0a] pt-20 pb-0 text-center"
    >
      {/* Background subtle vignette */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,90,78,0.04)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <StaggerContainer className="relative z-10 mx-auto max-w-[900px] px-6">
        {/* Eyebrow */}
        <StaggerItem>
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
            Serving 1000+ Business Categories
          </p>
        </StaggerItem>

        {/* Heading */}
        <StaggerItem>
          <h1 className="mb-6 text-balance text-[clamp(2.6rem,6vw,4.2rem)] font-bold leading-[1.1] text-white">
            Wow them with your website
          </h1>
        </StaggerItem>

        {/* Subtext */}
        <StaggerItem>
          <p className="mx-auto mb-8 max-w-[500px] text-[1.05rem] leading-relaxed text-white/60">
            Do you know who else we wow? Our customers! More than 5,000 of them
            have rated us{" "}
            <a
              href="https://www.trustpilot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/90 underline underline-offset-3 transition hover:text-white"
            >
              &lsquo;Excellent&rsquo; on Trustpilot
            </a>
          </p>
        </StaggerItem>

        {/* CTA Button */}
        <StaggerItem>
          <a
            href="#examples-gallery"
            id="see-our-work-btn"
            className="inline-block rounded-[8px] bg-[#FF5A4E] px-10 py-4 text-base font-semibold text-white shadow-[0_10px_30px_rgba(255,90,78,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(255,90,78,0.45)]"
          >
            See Our Work
          </a>
        </StaggerItem>
      </StaggerContainer>

      {/* Image Grid — responsive 3-column layout */}
      <div className="relative mx-auto mt-14 w-full max-w-none px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:items-end">
          
          {/* Left Column: Spa (top) & Dog (bottom) - aligned to the absolute left corner */}
          <div className="flex flex-col gap-6 items-center lg:items-start">
            {/* Image 1 - spa (top left) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full max-w-[320px] overflow-hidden rounded-2xl"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="/website example/website-example-vertexia.png"
                alt="Spa & Wellness Website Example"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Image 3 - pet grooming (bottom left) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full max-w-[320px] overflow-hidden rounded-2xl"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="/website example/vertexia-website-example.png"
                alt="Pet Grooming Website Example"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          {/* Center Column: Car detailing (bottom center) */}
          <div className="flex flex-col items-center justify-end md:-translate-x-48 md:-translate-y-14">
            {/* Image 4 - car detailing (bottom center) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full max-w-[320px] overflow-hidden rounded-2xl"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="/website example/vertexia-websites.png"
                alt="Auto Detailing Website Example"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column: Eyewear (top) & Fitness (bottom) - aligned to the absolute right corner */}
          <div className="flex flex-col gap-6 items-center lg:items-end">
            {/* Image 2 - eyewear (top right) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full max-w-[320px] overflow-hidden rounded-2xl"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="/website example/vertexia-agency.png"
                alt="Eyewear Store Website Example"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Image 5 - fitness (bottom right) */}
            <div className="w-full flex justify-center lg:justify-end md:-translate-x-[420px]">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative w-full max-w-[320px] overflow-hidden rounded-2xl"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src="/website example/vertexia-web-dev.png"
                  alt="Fitness Website Example"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

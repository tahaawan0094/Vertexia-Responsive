"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

// Categories listed in the screenshot
const categories = [
  "Professional Services",
  "Restaurants",
  "Flowers Store",
  "Real Estate",
  "Shopping & Retail",
  "Transportation & Automotive",
  "Arts & Design",
  "Community & Social Services",
  "Health & Wellness",
  "Events",
  "Food & Drink",
  "Coming Soon",
];

// Portfolio items mapping screenshot images to categories and live preview URLs
const portfolioItems = [
  // Professional Services


  {
    title: "",
    category: "Professional Services",
    image: "/website example/example images/website-by-vertexia.png",
    link: "/pricing",
    liveUrl: "https://betterbookkeeperstx.com/",
    supportsLiveUrl: true,
  },
  {
    title: "",
    category: "Professional Services",
    image: "/website example/example images/vertexia-work.png",
    link: "/pricing",
    liveUrl: "https://www.capactix.com/",
    supportsLiveUrl: true,
  },


  // Hair & Beauty

  {
    title: "",
    category: "Restaurants",
    image: "/website example/example images/pizza-site-by-vertexia.png",
    link: "/pricing",
    liveUrl: "https://www.gazzopizza.com/",
    supportsLiveUrl: true,
  },
   {
    title: "",
    category: "Restaurants",
    image: "/website example/example images/bhuna-site-by-vertexia.png",
    link: "/pricing",
    liveUrl: "https://www.bhunarestaurant.com/",
    supportsLiveUrl: true,
  },

  // Building & Maintenance
  {
    title: "",
    category: "Flowers Store",
    image: "/website example/example images/blooms-by-vertexia.png",
    link: "/pricing",
    liveUrl: "https://www.bloomsbythebox.com/",
    supportsLiveUrl: true,
  },

  // Clothes & Accessories
  {
    title: "",
    category: "Real Estate",
    image: "/website example/example images/lyonstahl-by-vertexia.png",
    link: "/pricing",
    liveUrl: "https://lyonstahl.com/",
    supportsLiveUrl: true,
  },

  // Real Estate
  {
    title: "",
    category: "Real Estate",
    image: "/website example/example images/feeta-by-vertexia.png",
    link: "/pricing",
    liveUrl: "https://www.feeta.pk/",
    supportsLiveUrl: true,
  },

  // Shopping & Retail
  
  {
    title: "",
    category: "",
    image: "",
    link: "",
    liveUrl: "",
    supportsLiveUrl: true,
  },
];

export default function WebsiteExamplesGallery() {
  const [activeCategory, setActiveCategory] = useState("Professional Services");
  const [activeItem, setActiveItem] = useState<(typeof portfolioItems)[0] | null>(null);
  const [previewMode, setPreviewMode] = useState<"live" | "mockup">("live");

  // Lock body scroll when the iframe showcase modal is open
  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  const filteredItems = portfolioItems.filter(
    (item) => item.category === activeCategory
  );

  const handleOpenShowcase = (item: (typeof portfolioItems)[0]) => {
    setActiveItem(item);
    setPreviewMode(item.supportsLiveUrl ? "live" : "mockup");
  };

  return (
    <section
      id="examples-gallery"
      className="relative overflow-hidden bg-[#0a0a0a] pt-16 pb-32 max-[640px]:pt-12 max-[640px]:pb-20 font-body text-white"
    >
      {/* Background subtle vignette/glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,rgba(58,69,255,0.06)_0%,transparent_75%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* Category selector chips */}
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto mb-16 max-[640px]:mb-10">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-[10px] px-5 py-3 text-sm font-semibold shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-300 transform active:scale-95 cursor-pointer max-[640px]:px-3.5 max-[640px]:py-2 max-[640px]:text-xs ${
                    isActive
                      ? "bg-[#15157a] text-white hover:opacity-90 shadow-[0_10px_25px_rgba(21,21,122,0.25)]"
                      : "bg-[#cfe6ff] text-[#1d6bff] hover:bg-[#cfe6ff]/90"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Gallery Grid */}
        <div className="relative min-h-[300px] w-full">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.title + item.category}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="text-left group"
                >
                  <div
                    onClick={() => handleOpenShowcase(item)}
                    className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-[18px] shadow-[0_30px_60px_rgba(0,0,0,0.55)] border border-white/5 bg-[#141414]"
                  >
                    {/* Website Screenshot */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />

                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Interactive CTA buttons shown on hover */}
                    <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <div className="flex items-center gap-3 text-white/80 hover:text-white transition">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40">
                          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
                            <path d="M12 5c5.5 0 9.5 5.2 9.5 7s-4 7-9.5 7S2.5 14.8 2.5 12 6.5 5 12 5zm0 3.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6z" />
                          </svg>
                        </span>
                        <span className="text-base font-medium">
                          See full Example
                        </span>
                      </div>
                      
                      <a
                        href={item.link}
                        onClick={(e) => e.stopPropagation()} // Prevent modal trigger on CTA click
                        className="inline-flex rounded-[10px] bg-[#FF5A4E] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(255,90,78,0.35)] transition hover:bg-[#ff4639] hover:-translate-y-0.5"
                      >
                        Get a site like this
                      </a>
                    </div>
                  </div>
                  
                  {/* Item Description Title */}
                  <p className="mt-4 text-sm font-medium text-white/60 tracking-wide pl-1 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Show a placeholder if no items are under the selected category */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="mb-4 text-white/20">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="h-16 w-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white/80">Coming Soon</h3>
              <p className="mt-2 text-sm text-white/40 max-w-[360px]">
                We are currently preparing gorgeous website examples for this category. Stay tuned!
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* CTA Banner */}
      <style>{`
        @keyframes cta-shine {
          0%   { transform: translateX(-120%) skewX(-20deg); }
          100% { transform: translateX(220%) skewX(-20deg); }
        }
        .cta-shine-sweep {
          animation: cta-shine 3.2s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 pb-20 pt-16 max-[640px]:pt-10 max-[640px]:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative overflow-hidden rounded-[20px] px-10 py-14 text-center md:py-16 max-[640px]:px-6 max-[640px]:py-10"
          style={{
            background: "linear-gradient(120deg, #1338be 0%, #1a6bff 45%, #00c2e0 100%)",
          }}
        >
          {/* Right-side cyan aurora glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 65% 90% at 88% 50%, rgba(0,210,255,0.55) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          {/* Left-side deep purple glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 45% 70% at 8% 55%, rgba(80,60,255,0.4) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          {/* Center top soft highlight */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 48% 0%, rgba(255,255,255,0.12) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          {/* Animated diagonal shine sweep */}
          <div
            aria-hidden="true"
            className="cta-shine-sweep pointer-events-none absolute inset-y-0 left-0 w-[28%]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 45%, rgba(255,255,255,0.28) 55%, transparent 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="mx-auto max-w-[640px] text-[clamp(1.7rem,3.5vw,2.6rem)] font-bold leading-tight text-white max-[640px]:text-[1.5rem]">
              We&apos;ll build you a customer-wowing website in just 7 days
            </h2>
            <a
              href="/pricing"
              id="gallery-cta-get-started"
              className="mt-8 inline-flex rounded-[10px] bg-[#FF5A4E] px-10 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,90,78,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff4133] hover:shadow-[0_14px_34px_rgba(255,90,78,0.5)]"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>

      {/* Showcase Modal Panel */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative flex h-[94vh] w-full max-w-[2000px] md:w-[94vw] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing
            >
              {/* Header Toolbar */}
              <div className="flex h-14 items-center justify-between border-b border-gray-100 bg-white px-5 select-none">
                <div className="flex items-center gap-3">
                  {/* Browser Mock Actions */}
                  <div className="flex gap-1.5 shrink-0">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                  </div>
                  {/* Site Name and Domain */}
                  <span className="ml-4 hidden text-xs font-semibold uppercase tracking-wider text-gray-400 md:inline-block">
                    Live Demo:
                  </span>
                  <span className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 max-[420px]:hidden">
                    {activeItem.title}
                  </span>
                  <a
                    href={activeItem.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5 text-xs font-medium text-[#1d6bff] hover:underline break-all truncate max-w-[200px] sm:max-w-xs md:max-w-md"
                  >
                    <span className="truncate">{activeItem.liveUrl}</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="h-3.5 w-3.5 shrink-0 transition group-hover:translate-x-0.5"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>

                {/* View Mode Tabs Selector */}
                <div className="flex items-center gap-4">
                  <div className="flex rounded-lg bg-gray-100 p-0.5 text-xs font-semibold">
                    <button
                      onClick={() => setPreviewMode("live")}
                      disabled={!activeItem.supportsLiveUrl}
                      title={!activeItem.supportsLiveUrl ? "Live preview disabled due to site security policies" : "View live website"}
                      className={`rounded-md px-3 py-1.5 transition-all ${
                        previewMode === "live"
                          ? "bg-white text-gray-900 shadow-sm"
                          : !activeItem.supportsLiveUrl
                          ? "text-gray-300 cursor-not-allowed opacity-50"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      Live Site
                    </button>
                    <button
                      onClick={() => setPreviewMode("mockup")}
                      className={`rounded-md px-3 py-1.5 transition-all ${
                        previewMode === "mockup"
                          ? "bg-white text-gray-900 shadow-sm"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      Mockup Image
                    </button>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setActiveItem(null)}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-800"
                    aria-label="Close Preview"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="h-5 w-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Showcase Frame area */}
              <div className="relative flex-1 bg-white overflow-hidden">
                {previewMode === "live" && activeItem.supportsLiveUrl ? (
                  <iframe
                    src={activeItem.liveUrl}
                    title={activeItem.title || "Live Website Preview"}
                    className="h-full w-full border-0 bg-white"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full overflow-y-auto bg-gray-50 scrollbar-thin select-none">
                    {!activeItem.supportsLiveUrl && (
                      <div className="flex items-center justify-center gap-2 bg-amber-50 border-b border-amber-100 px-4 py-2.5 text-xs text-amber-800 font-medium">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4 text-amber-600 shrink-0">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        <span>Live preview is restricted by the website's security policies. Showing high-res mockup screenshot instead.</span>
                        <a
                          href={activeItem.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 font-bold underline hover:text-amber-900 inline-flex items-center gap-0.5"
                        >
                          Open Live Site ↗
                        </a>
                      </div>
                    )}
                    <img
                      src={activeItem.image}
                      alt={activeItem.title}
                      className="w-full h-auto object-top"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

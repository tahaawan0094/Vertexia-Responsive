import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import BlogPostingSchema from "@/components/schema/BlogPostingSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "What is Vertexia? | A Modern Web Development & SEO Growth Partner",
  description:
    "Discover what Vertexia is, how it helps businesses build high-performance websites, improve online visibility, and create scalable digital growth systems designed for long-term success.",
  alternates: {
    canonical: "https://www.vertexiaagency.com/what-is-vertexia",
  },
  openGraph: {
    title: "What is Vertexia? | A Modern Web Development & SEO Growth Partner",
    description:
      "Discover what Vertexia is, how it helps businesses build high-performance websites, improve online visibility, and create scalable digital growth systems designed for long-term success.",
    images: ["/Blog images/modern-web-development-digital-growth-by-vertexia.webp"],
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "why-more-than-website", label: "Why Businesses Need More Than a Website" },
  { id: "what-makes-difference", label: "What Makes Vertexia Different?" },
  { id: "custom-development", label: "Custom Website Development" },
  { id: "website-speed", label: "Why Website Speed Matters" },
  { id: "seo-beyond-keywords", label: "SEO Is More Than Keywords" },
  { id: "services-offered", label: "Services Offered by Vertexia" },
  { id: "scalable-presence", label: "Importance of a Scalable Presence" },
  { id: "conclusion", label: "Conclusion" },
];

const BlogImage = ({ src, alt, title, caption, description }: { src: string; alt: string; title: string; caption: string; description: string }) => (
  <div className="space-y-4 group my-8">
    <div className="overflow-hidden rounded-[2rem] p-4 shadow-xl shadow-slate-200/50 border border-slate-100 bg-white">
      <div className="relative aspect-video w-full rounded-[1.5rem] overflow-hidden">
        <Image 
          src={src} 
          alt={alt} 
          title={title}
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </div>
    </div>
    <div className="px-4 text-center max-w-2xl mx-auto">
      <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">{caption}</p>
      <p className="text-xs text-slate-500 leading-relaxed italic">{description}</p>
    </div>
  </div>
);

export default function WhatIsVertexia() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vertexiaagency.com/" },
      { "@type": "ListItem", position: 2, name: "Blogs", item: "https://www.vertexiaagency.com/blogs" },
      {
        "@type": "ListItem",
        position: 3,
        name: "What is Vertexia?",
        item: "https://www.vertexiaagency.com/what-is-vertexia",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What is Vertexia? | A Modern Web Development & SEO Growth Partner",
    description:
      "Discover what Vertexia is, how it helps businesses build high-performance websites, improve online visibility, and create scalable digital growth systems designed for long-term success.",
    author: { "@type": "Person", name: "Taha Awan", url: "https://www.vertexiaagency.com/leadership" },
    publisher: {
      "@type": "Organization",
      name: "Vertexia",
      logo: { "@type": "ImageObject", url: "https://www.vertexiaagency.com/new-header-logo.png" },
    },
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.vertexiaagency.com/what-is-vertexia" },
    image: ["https://www.vertexiaagency.com/Blog images/modern-web-development-digital-growth-by-vertexia.webp"],
  };

  return (
    <>
      <BlogPostingSchema headline="What is Vertexia? | A Modern Web Development & SEO Growth Partner" description="Discover what Vertexia is, how it helps businesses build high-performance websites, improve online visibility, and create scalable digital growth systems designed for long-term success." url="https://www.vertexiaagency.com/what-is-vertexia" image="https://www.vertexiaagency.com/Blog images/modern-web-development-digital-growth-by-vertexia.webp" datePublished="2026-07-08" dateModified="2026-07-08" />
      <BreadcrumbSchema pathname="/what-is-vertexia" title="What is Vertexia?" />

      <article className={`min-h-screen bg-white text-slate-950 ${poppins.className}`}>
        {/* Main Header / Hero Section */}
        <section className="relative px-6 pb-8 pt-24 md:pt-32">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h1 className={`${poppins.className} text-4xl font-semibold text-slate-950 md:text-5xl lg:text-5xl leading-tight`}>
              What is Vertexia? <br />
              <span className="text-blue-600 text-3xl md:text-4xl block mt-2">A Modern Web Development & SEO Growth Partner for Businesses</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Discover what Vertexia is, how it helps businesses build high-performance websites, improve online visibility, and create scalable digital growth systems designed for long-term success.
            </p>
          </div>
        </section>

        {/* 3-Column Sticky Body Layout */}
        <section className="px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[260px_1fr_360px] items-start">
            
            {/* Left Sidebar: Sticky Social Share & Table of Contents */}
            <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              <div className="hidden lg:flex flex-row lg:flex-col items-center gap-4">
                <p className="text-xs font-bold tracking-wider uppercase text-slate-400 lg:mb-2">Share</p>
                <a href="https://www.facebook.com/profile.php?id=61589778596884" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#3b5998] text-white shadow-sm transition hover:scale-105" aria-label="Facebook">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/vertexia_agency/" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 text-white shadow-sm transition hover:scale-105" aria-label="Instagram">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="1.4" />
                    <circle cx="12" cy="12" r="3.6" stroke="white" strokeWidth="1.4" />
                    <circle cx="17.2" cy="6.8" r="0.9" fill="white" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/vertexia-agency/" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#0A66C2] text-white shadow-sm transition hover:scale-105" aria-label="LinkedIn">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" rx="1" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-100">
                <div className="bg-blue-600 px-6 py-5">
                  <h2 className="text-lg font-semibold text-white">Table of Contents</h2>
                </div>
                <div className="space-y-3 px-6 py-6 bg-white">
                  {tocItems.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="block text-sm text-slate-700 transition hover:text-blue-600">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            {/* Center Column: Main Article Body */}
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-[2rem] p-4 shadow-xl shadow-slate-200/50 border border-slate-100 bg-white">
                  <div className="relative aspect-video md:aspect-[21/9] w-full rounded-[1.5rem] overflow-hidden">
                    <Image 
                      src="/Blog images/modern-web-development-digital-growth-by-vertexia.webp" 
                      alt="Modern custom website development and digital growth system illustration by Vertexia" 
                      title="Modern Web Development & Digital Growth by Vertexia"
                      fill 
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="max-w-2xl mx-auto text-center px-4">
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">High-performance custom websites designed for scalability, SEO, and modern business growth.</p>
                  <p className="text-xs text-slate-500 leading-relaxed italic">A futuristic hero illustration representing modern web development, scalable business websites, SEO-focused digital systems, and performance-driven online growth solutions by Vertexia.</p>
                </div>
              </div>

              <section id="introduction" className="space-y-5">
                <p className="text-base leading-7 text-slate-700">
                  In todayâ€™s digital world, having a website is no longer enough. Businesses need fast, scalable, SEO-optimized, and conversion-focused digital systems that help them stand out, rank on Google, and generate real customers.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  Thatâ€™s where <strong className="text-slate-950">Vertexia</strong> comes in.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  Vertexia is a modern web development and digital growth company that helps businesses build high-performance custom websites using technologies like React and Next.js. Unlike traditional agencies that rely heavily on templates or plugin-based systems, Vertexia focuses on building scalable digital experiences designed for long-term growth.
                </p>
              </section>

              <section id="why-more-than-website" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Why Modern Businesses Need More Than Just a Website</h2>
          

                <p className="text-base leading-7 text-slate-700">
                  Many businesses believe that simply launching a website will automatically generate traffic, leads, and sales. In reality, most websites fail because they are built without strategy, performance optimization, or proper SEO foundations.
                </p>

                <div className="grid md:grid-cols-2 gap-6 bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <div>
                    <h3 className="text-blue-600 font-bold mb-3 text-base">A business website today must:</h3>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>â€¢ Load quickly on all devices</li>
                      <li>â€¢ Rank well on search engines</li>
                      <li>â€¢ Provide excellent user experience</li>
                      <li>â€¢ Build trust instantly</li>
                      <li>â€¢ Convert visitors into customers</li>
                      <li>â€¢ Scale as the business grows</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-red-600 font-bold mb-3 text-base">Common Struggles:</h3>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>â€¢ Slow loading speed</li>
                      <li>â€¢ Poor mobile optimization</li>
                      <li>â€¢ Outdated designs</li>
                      <li>â€¢ Weak SEO structure</li>
                      <li>â€¢ Plugin dependency</li>
                      <li>â€¢ Security vulnerabilities</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="what-makes-difference" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>What Makes Vertexia Different?</h2>
                
              

                <p className="text-base leading-7 text-slate-700">
                  Vertexia focuses on creating modern, performance-driven websites instead of relying entirely on pre-made templates or heavy plugin systems. Unlike traditional website builders, we use modern technologies like <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline transition font-medium">React</a> and <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline transition font-medium">Next.js</a> for superior performance.
                </p>

                <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <p className="text-slate-500 mb-4 font-semibold uppercase tracking-wider text-xs">The Vertexia Combination:</p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span> <span className="text-sm text-slate-700">Custom web development</span></li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span> <span className="text-sm text-slate-700">SEO-focused architecture</span></li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span> <span className="text-sm text-slate-700">Modern frontend technologies</span></li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span> <span className="text-sm text-slate-700">Conversion-focused design</span></li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span> <span className="text-sm text-slate-700">Scalable website systems</span></li>
                  </ul>
                </div>
              </section>

              <section id="custom-development" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Custom Website Development with React & Next.js</h2>
          

                <p className="text-base leading-7 text-slate-700">
                  One of the biggest advantages of Vertexia is its focus on modern technologies. These frameworks are widely used by leading global platforms like <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline transition font-medium">Netflix</a>, <a href="https://www.airbnb.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline transition font-medium">Airbnb</a>, and <a href="https://www.uber.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline transition font-medium">Uber</a> because they offer faster performance, better user experience, and higher scalability.
                </p>
              </section>

              <section id="website-speed" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Why Website Speed Matters for SEO and Conversions</h2>
                
                <BlogImage 
                  src="/Blog images/why-website-speed-matters-for-seo-and-user-experience.webp"
                  alt="Website speed optimization and performance-focused web development visualization"
                  title="Why Website Speed Matters for SEO and User Experience"
                  caption="Fast-loading websites improve SEO rankings, conversions, and user experience."
                  description="A modern website performance illustration showing speed optimization, Core Web Vitals metrics, fast-loading interfaces, and SEO-focused web architecture for improved digital growth."
                />

                <p className="text-base leading-7 text-slate-700">
                  Website speed has become one of the most important ranking and conversion factors online. <a href="https://www.searchenginejournal.com/google-page-experience-ranking-factor" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline transition font-medium">Studies consistently show</a> that users leave websites quickly if pages take too long to load. Google's <a href="https://web.dev/vitals" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline transition font-medium">Core Web Vitals</a> are essential ranking factors. Vertexia builds websites with performance as a core priority.
                </p>
              </section>

              <section id="seo-beyond-keywords" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>SEO Is More Than Keywords</h2>
                
                

                <p className="text-base leading-7 text-slate-700">
                  A properly optimized website should include semantic page structure, optimized metadata, clean URLs, and fast loading speed. According to <a href="https://developers.google.com/search" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline transition font-medium">Google Search Central</a>, technical SEO is critical for online visibility. Vertexia focuses on building websites with SEO foundations integrated directly into the development process.
                </p>
              </section>

              <section id="services-offered" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Services Offered by Vertexia</h2>
                
                

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Custom Website Development", desc: "Modern websites built using React, Next.js, and scalable frontend technologies." },
                    { title: "SEO Optimization", desc: "Technical SEO implementation designed to improve visibility and rankings." },
                    { title: "UI/UX Design", desc: "User-focused interfaces designed to improve engagement and conversions." },
                    { title: "Responsive Development", desc: "Mobile-friendly websites optimized for all screen sizes and devices." },
                    { title: "Performance Optimization", desc: "Fast-loading websites designed to improve user experience and Core Web Vitals." },
                    { title: "Business Website Solutions", desc: "Custom websites for startups, agencies, ecommerce brands, and service businesses." }
                  ].map((service, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-600/50 transition-colors">
                      <h4 className="font-bold text-blue-600 mb-1 text-base">{service.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="scalable-presence" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>The Importance of a Scalable Digital Presence</h2>
                
               

                <p className="text-base leading-7 text-slate-700">
                  A website should not just solve today's needs. It should support future growth. <a href="https://www.w3.org/standards" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline transition font-medium">Modern web standards</a> ensure your website remains relevant and performant. Vertexia focuses on building websites designed for long-term scalability instead of short-term convenience.
                </p>
              </section>

              <section id="conclusion" className="pt-12 border-t border-slate-200 space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Conclusion</h2>
                <p className="text-lg leading-relaxed text-slate-600 italic">
                  Modern businesses need more than basic websites. They need fast, scalable, SEO-optimized digital systems that support long-term growth. Vertexia helps businesses build modern web experiences using custom development technologies while focusing on performance, scalability, and SEO.
                </p>

                <div className="mt-8 rounded-3xl bg-gradient-to-br from-blue-950 via-sky-900 to-blue-700 p-8 text-center text-white shadow-xl">
                  <h3 className="text-2xl font-bold">Ready to grow your business?</h3>
                  <p className="mt-3 text-sm leading-6 text-blue-100/90">
                    Let's build a high-performance website tailored for your success. Learn more about{" "}
                    <a href="https://developers.google.com/web/tools/lighthouse" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 transition font-medium text-white">
                      web performance best practices
                    </a>.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <button type="button" className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 shadow-sm hover:scale-105 duration-300">
                      Get Started with Vertexia
                    </button>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-blue-600">Author</p>
                    <h3 className="mt-1 text-2xl font-semibold text-slate-950">Vertexia</h3>
                    <p className="text-sm text-slate-600">Founder & Web Strategy Lead at Vertexia</p>
                  </div>
                  <Link href="/contact" className="inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-sm justify-center">
                    Contact the Team
                  </Link>
                </div>
              </section>
            </div>

            {/* Right Sidebar: Newsletter Form Fix */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-[2rem] bg-gradient-to-br from-blue-950 via-sky-900 to-blue-700 p-8 text-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.65)] text-center relative overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_45%)]" />
                <h3 className="relative text-3xl font-bold leading-snug tracking-tight">
                  Get monthly advice and exclusive deals
                </h3>
                <div className="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-[2.5rem] transition duration-700 ease-out hover:scale-[1.02] animate-pulse">
                  <img src="/Blog images/card_icon_white.png" alt="newsletter icon" className="h-16 w-16 object-contain" />
                </div>
                {/* REMOVED: onSubmit handler to preserve Server Component structure */}
                <form className="mt-8 space-y-4">
                  <input
                    type="email"
                    placeholder="your email"
                    className="w-full rounded-2xl bg-white px-5 py-4 text-slate-950 placeholder:text-slate-500 outline-none shadow-sm transition focus:ring-2 focus:ring-white/40"
                  />
                  <button type="button" className="w-full rounded-2xl bg-white px-5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-slate-100">
                    Subscribe
                  </button>
                </form>
                <p className="relative mt-6 text-xs leading-relaxed text-blue-100/80">
                  By subscribing you agree to receive regular communications from Vertexia.
                </p>
              </div>
            </aside>

          </div>
        </section>

        <FooterLinksSection />
      </article>
    </>
  );
}

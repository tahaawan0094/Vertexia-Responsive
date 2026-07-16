"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import PageTransition from "@/components/animations/PageTransition";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import CollectionPageSchema from "@/components/schema/CollectionPageSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";


const blogCards = [
  {
    title: "Custom Website vs WordPress: Which One Fits Your Business?",
    excerpt:
      "Compare speed, SEO, design flexibility, cost, and scalability to decide what works best for your 2026 growth plan.",
    image: "/Blog images/modern-web-development-digital-growth-by-vertexia.webp",
    href: "/blogs/website-development-cost-pakistan-2026",
    tag: "Website Strategy",
  },
  {
    title: "Why Businesses in Pakistan Need SEO in 2026",
    excerpt:
      "Discover why SEO is essential for businesses in Pakistan in 2026. Learn how search engine optimization increases traffic, leads, and long-term business growth.",
    image: "/Blog images/why-seo-need-in-2026.jpg",
    href: "/blogs/why-businesses-in-pakistan-need-seo-2026",
    tag: "SEO",
  },
  {
    title: "What Is SEO? A Simple Guide for Business Owners in Pakistan",
    excerpt:
      "A beginner-friendly guide to SEO for Pakistani businesses, explaining how Google ranks websites and why local search visibility matters.",
    image: "/Blog images/what-is-seo.png",
    href: "/blogs/what-is-seo-simple-guide-business-owners-pakistan",
    tag: "SEO Guide",
  },
  {
    title: "5 Signs Your Website Is Losing You Customers",
    excerpt:
      "Learn the five warning signs that are quietly turning visitors away and how to fix them before your website costs you more leads.",
    image: "/Blog images/5-Signs-Your-Website-Is-Losing-You-Customers.webp",
    href: "/blogs/website-losing-customers-signs",
    tag: "Website Strategy",
  },
  {
    title: "Is Your Website Outdated? 7 Signs It’s Time for a Redesign",
    excerpt:
      "Learn the clearest signs your website is outdated, from slow performance and poor mobile experience to weak lead generation and declining search visibility.",
    image: "/Blog images/modern-responsive-website-design-for-businesses.webp",
    href: "/blogs/is-your-website-outdated-signs-time-for-redesign",
    tag: "Website Strategy",
  },
  {
    title: "Local SEO Checklist for Small Businesses in Karachi",
    excerpt:
      "Boost your local search visibility and attract more customers in Karachi with this complete step-by-step local SEO checklist.",
    image: "/Blog images/Local-SEO-Checklist-for-Small-Businesses-in-Karachi.png", // Apni sahi image ka path lagayein yahan
    href: "/blogs/local-seo-checklist-small-businesses-karachi",
    tag: "Local SEO",
  },
  {
    title: "Website Speed as a Google Ranking Factor & How to Fix It",
    excerpt:
      "Learn why website speed is crucial for your Google ranking and discover actionable steps to optimize your site's performance.",
    image: "/Blog images/website-speed-google-ranking-factor-how-to-fix.webp", // Apni sahi image ka path lagayein yahan
    href: "/blogs/website-speed-google-ranking-factor-how-to-fix",
    tag: "SEO & Performance",
  },
  {
    title: "What Is Schema Markup? Why It Helps You Rank Higher",
    excerpt:
      "Learn what schema markup is, why Google rewards it, and how structured data can help your business earn rich results and more clicks.",
    image: "/Blog images/What-Is-Schema-Markup.webp",
    href: "/blogs/what-is-schema-markup-why-it-helps-rank-higher",
    tag: "Technical SEO",
  },
  {
    title: "SEO for Manufacturing Companies: Getting Found by B2B Buyers",
    excerpt:
      "Learn how B2B buyers actually search, why manufacturing websites stay invisible, and what improves visibility for industrial and export-focused companies.",
    image: "/Blog images/SEO-for-Manufacturing-Companies-Getting-Found-by-B2B-Buyers.webp",
    href: "/blogs/seo-manufacturing-companies-b2b-buyers",
    tag: "B2B SEO",
  },
];

export default function BlogsPage() {
  const words = ["Tradespeople", "Professionals", "Small Business"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(blogCards.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const paginatedCards = blogCards.slice(startIndex, startIndex + cardsPerPage);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];
      const updateText = isDeleting
        ? currentWord.substring(0, displayText.length - 1)
        : currentWord.substring(0, displayText.length + 1);

      setDisplayText(updateText);

      if (!isDeleting && updateText === currentWord) {
        // Pause at the end of the word
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(100);
      } else if (isDeleting && updateText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 50 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, words]);

  return (
    <PageTransition>
      <CollectionPageSchema title="Vertexia Blog" description="Expert articles on websites, SEO, and digital growth strategy." url="https://www.vertexiaagency.com/blogs" />
      <BreadcrumbSchema pathname="/blogs" title="Blogs" />
      <div id="top" className="w-full">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] md:min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-32 md:py-48">
        <div 
          className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" 
          aria-hidden="true" 
        />
        <StaggerContainer className="max-w-[1200px] mx-auto">
          <StaggerItem>
            <h1 className="text-[clamp(1.5rem,8vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white mb-8 sm:whitespace-nowrap">
              Helping{" "}
              <span className="text-[#FF5A4E]">
                {displayText}
                <span className="animate-pulse border-r-4 border-[#FF5A4E] ml-1" />
              </span>{" "}
              Grow Online
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-[clamp(0.9rem,2.5vw,1.3rem)] text-white/90 font-medium max-w-[900px] mx-auto leading-relaxed">
              We deliver your website and give you the skills to master the online world
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
      
      {/* New White Background Section */}
      <section className="w-full bg-white pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1240px] mx-auto relative z-10 -mt-50 md:-mt-42 space-y-10 md:space-y-14">
          <div className="bg-[#111111] rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] duration-500">
            {/* Image Container */}
            <div className="relative w-full aspect-[16/9] p-4 bg-[#0a0a0a]">
              <img 
                src="/Blog images/Pillar.png" 
                alt="Why every small business needs a website"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Content Container */}
            <div className="p-8 md:p-20 text-center flex flex-col items-center">
              <h2 className="text-[clamp(1.5rem,6vw,3.2rem)] font-bold text-white mb-6 md:mb-8 leading-[1.15] max-w-[850px]">
                What is Vertexia? <br />
                <span className="text-white/60 text-[0.6em] block mt-4">A Modern Web Development & SEO Growth Partner for Businesses</span>
              </h2>
              <p className="text-[clamp(1rem,3vw,1.5rem)] text-white/70 font-medium mb-10 md:mb-12 max-w-[750px] leading-relaxed">
                Discover what Vertexia is, how it helps businesses build high-performance websites, improve online visibility, and create scalable digital growth systems.
              </p>
              
              <Link href="/what-is-vertexia">
                <button className="bg-slate-700 hover:bg-slate-800 text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl transition-all shadow-xl shadow-slate-500/20 active:scale-95">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#111111]">Latest Articles</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
              {paginatedCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h4 className="text-lg sm:text-xl font-bold leading-snug text-slate-900 transition group-hover:text-slate-600">
                      {card.title}
                    </h4>
                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{card.excerpt}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-slate-600">
                      Read article
                      <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`h-10 w-10 rounded-full text-sm font-semibold transition ${
                        currentPage === pageNumber
                          ? "bg-slate-700 text-white shadow-lg"
                          : "border border-slate-300 text-slate-700 hover:border-slate-500 hover:text-slate-600"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <FooterLinksSection />
    </div>
    </PageTransition>
  );
}

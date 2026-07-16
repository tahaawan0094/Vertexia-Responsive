import type { Metadata } from "next";
import Link from "next/link";
import { Poppins } from "next/font/google";
import FooterLinksSection from "@/components/sections/FooterLinksSection";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Custom Website vs WordPress: Which One Fits Your Business?",
  description:
    "Compare custom websites vs WordPress for 2026. Learn design, speed, SEO, security, cost, scalability, and which option suits your business best.",
  alternates: {
    canonical: "https://www.vertexiaagency.com/blogs/website-development-cost-pakistan-2026",
  },
  openGraph: {
    title: "Custom Website vs WordPress: Which One Fits Your Business?",
    description:
      "Compare custom websites vs WordPress for 2026. Learn design, speed, SEO, security, cost, scalability, and which option suits your business best.",
    images: ["/Blog images/modern-web-development-digital-growth-by-vertexia.webp"],
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "custom-website", label: "What Is a Custom Website?" },
  { id: "wordpress-website", label: "What Is a WordPress Website?" },
  { id: "comparison", label: "Comparison" },
  { id: "which-one", label: "Which Option Is Right for Your Business?" },
  { id: "faq", label: "FAQs" },
  { id: "conclusion", label: "Final Thoughts" },
];

const faqItems = [
  {
    question: "Is a custom website better than WordPress?",
    answer:
      "Not always. Custom websites are better for performance, flexibility, and long-term scalability, while WordPress is often faster to launch and easier to manage on a tighter budget.",
  },
  {
    question: "Is WordPress good for SEO?",
    answer:
      "Yes. WordPress can rank very well when the site is properly optimized for speed, structure, metadata, and technical SEO.",
  },
  {
    question: "Are custom websites more expensive?",
    answer:
      "Usually, yes at the start. However, they can offer stronger long-term value if your business needs advanced functionality, growth, and tailored performance.",
  },
  {
    question: "Which option is better for long-term growth?",
    answer:
      "For businesses planning significant expansion, a custom website is often the stronger long-term investment.",
  },
];

export default function CustomVsWordPressArticle() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.vertexiaagency.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://www.vertexiaagency.com/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Custom Website vs WordPress",
        item: "https://www.vertexiaagency.com/blogs/website-development-cost-pakistan-2026",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Custom Website vs WordPress: Which One Fits Your Business?",
    description:
      "Compare custom websites vs WordPress for 2026. Learn design, speed, SEO, security, cost, scalability, and which option suits your business best.",
    author: {
      "@type": "Person",
      name: "Taha Awan",
      url: "https://www.vertexiaagency.com/leadership",
    },
    publisher: {
      "@type": "Organization",
      name: "Vertexia",
      logo: {
        "@type": "ImageObject",
        url: "https://www.vertexiaagency.com/new-header-logo.png",
      },
    },
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.vertexiaagency.com/blogs/website-development-cost-pakistan-2026",
    },
    image: [
      "https://www.vertexiaagency.com/Blog images/modern-web-development-digital-growth-by-vertexia.webp",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className={`min-h-screen bg-white text-slate-950 ${poppins.className}`}>
        {/* Main Header / Hero Section */}
        <section className="relative px-6 pb-8 pt-24 md:pt-32">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h1 className={`${poppins.className} text-4xl font-semibold text-slate-950 md:text-5xl lg:text-5xl`}>
              Custom Website vs WordPress: Which One Fits Your Business?
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Compare speed, SEO, design flexibility, cost, and scalability to decide what works best for your 2026 growth plan.
            </p>
          </div>
        </section>

        {/* 3-Column Sticky Body Layout */}
        <section className="px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[260px_1fr_360px] items-start">
            
            {/* Left Sidebar: Sticky Social Share & Table of Contents */}
            <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              {/* Social Icons (Hidden on Mobile) */}
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
                <a href="https://www.linkedin.com/in/vertexia-io-b03923410/" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#0A66C2] text-white shadow-sm transition hover:scale-105" aria-label="LinkedIn">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" rx="1" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>

              {/* Table of Contents Box */}
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
              {/* Feature Image Header */}
              <div className="overflow-hidden rounded-[2rem] p-4 shadow-xl shadow-slate-200/50 border border-slate-100">
                <img
                  src="/Blog images/custom-vs-wordpress-which-is-better.png"
                  alt="Custom Website vs WordPress comparison by Vertexia"
                  className="mx-auto block w-full rounded-[1.5rem] object-cover"
                />
              </div>

              {/* Content Chapters */}
              <section id="introduction" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Introduction</h2>
                <p className="text-base leading-7 text-slate-700">
                  Choosing between a custom website and a WordPress website is one of the most important decisions for any business in 2026. Both approaches can deliver strong results, but the right fit depends on your priorities, budget, timeline, and long-term goals.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  A custom website is built around your exact business needs, while WordPress offers speed, affordability, and flexible content management. The choice is not about which platform is universally better, but which one aligns with your growth strategy.
                </p>
              </section>

              <section id="custom-website" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>What Is a Custom Website?</h2>
                <p className="text-base leading-7 text-slate-700">
                  A custom website is designed specifically for your business using modern technologies such as React, Next.js, and Node.js. Every layout, section, and interaction can be tailored to match your brand, audience, and goals.
                </p>
                
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-950">Benefits of a Custom Website</h3>
                  <ul className="mt-4 space-y-2 text-slate-700 list-none">
                    <li>â€¢ Unique and professional design</li>
                    <li>â€¢ Better performance and speed</li>
                    <li>â€¢ Higher scalability</li>
                    <li>â€¢ Stronger security posture</li>
                    <li>â€¢ More control over SEO implementation</li>
                  </ul>
                </div>
                <p className="text-base leading-7 text-slate-700">
                  Custom websites are ideally suited to growing companies, SaaS brands, and businesses that need advanced functionality or a distinctive digital identity.
                </p>
              </section>

              <section id="wordpress-website" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>What Is a WordPress Website?</h2>
                <p className="text-base leading-7 text-slate-700">
                  WordPress remains one of the most popular website platforms because it allows businesses to launch quickly using themes, plugins, and a familiar dashboard. It is especially helpful when content updates need to be handled by non-technical teams.
                </p>
                
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-950">Benefits of a WordPress Website</h3>
                  <ul className="mt-4 space-y-2 text-slate-700 list-none">
                    <li>â€¢ Faster development time</li>
                    <li>â€¢ Lower initial cost</li>
                    <li>â€¢ Easy content management</li>
                    <li>â€¢ Rich plugin ecosystem</li>
                    <li>â€¢ Strong fit for blogs and small business sites</li>
                  </ul>
                </div>
                <p className="text-base leading-7 text-slate-700">
                  WordPress is a practical option for small businesses, personal brands, and teams that need a website launched quickly without complex custom requirements.
                </p>
              </section>

              <section id="comparison" className="space-y-6">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Custom Website vs WordPress Website Comparison</h2>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-950">1. Design Flexibility</h3>
                    <p className="mt-2 text-slate-700">Custom websites give you full control over branding and layout. WordPress depends more on themes and plugins.</p>
                    <p className="mt-2 font-semibold text-blue-600">Winner: Custom Website</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-950">2. Performance and Speed</h3>
                    <p className="mt-2 text-slate-700">Modern custom builds often outperform traditional WordPress setups, especially when optimized for speed and Core Web Vitals.</p>
                    <p className="mt-2 font-semibold text-blue-600">Winner: Custom Website</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-950">3. SEO Capabilities</h3>
                    <p className="mt-2 text-slate-700">Both can rank well, but custom websites offer more control over technical SEO, structured data, and performance factors.</p>
                    <p className="mt-2 font-semibold text-blue-600">Winner: Custom Website</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-950">4. Ease of Management</h3>
                    <p className="mt-2 text-slate-700">WordPress usually wins for non-technical teams that need a simple way to update content.</p>
                    <p className="mt-2 font-semibold text-blue-600">Winner: WordPress</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-950">5. Security</h3>
                    <p className="mt-2 text-slate-700">Custom websites typically have fewer third-party dependencies, which can reduce vulnerabilities. WordPress security depends heavily on plugin and theme updates.</p>
                    <p className="mt-2 font-semibold text-blue-600">Winner: Custom Website</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-950">6. Scalability</h3>
                    <p className="mt-2 text-slate-700">If your business expects complex growth, integrations, or future features, custom websites are often the better long-term foundation.</p>
                    <p className="mt-2 font-semibold text-blue-600">Winner: Custom Website</p>
                  </div>
                </div>
              </section>

              <section id="which-one" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Which Option Is Right for Your Business?</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-950">Choose a Custom Website If:</h3>
                    <ul className="mt-3 space-y-2 text-slate-700 list-none">
                      <li>â€¢ You want a unique design</li>
                      <li>â€¢ Performance is a priority</li>
                      <li>â€¢ SEO is a major focus</li>
                      <li>â€¢ You need advanced functionality</li>
                      <li>â€¢ You plan to scale</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-950">Choose a WordPress Website If:</h3>
                    <ul className="mt-3 space-y-2 text-slate-700 list-none">
                      <li>â€¢ You need a website quickly</li>
                      <li>â€¢ You are working with a limited budget</li>
                      <li>â€¢ You want easy content management</li>
                      <li>â€¢ You do not need complex functionality</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="faq" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-slate-950">{item.question}</h3>
                      <p className="mt-2 text-slate-700">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="conclusion" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Final Thoughts</h2>
                <p className="text-base leading-7 text-slate-700">
                  Both custom websites and WordPress websites can be excellent choices. If you need fast launch times, affordability, and straightforward content updates, WordPress is a strong option. If you want stronger performance, scalability, flexibility, and a site built specifically for your brand, a custom website is often the better investment.
                </p>
              </section>

              {/* Action Promo Section */}
              <section className="rounded-3xl bg-gradient-to-br from-blue-950 via-sky-900 to-blue-700 p-8 text-center text-white shadow-xl">
                <h3 className="text-2xl font-bold">Ready to choose the right website for your business?</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100/90">
                  Whether you want a custom build or a WordPress solution, we can help you compare the options and move forward with confidence.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link href="/get-custom-website" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 shadow-sm">
                    Explore Custom Websites
                  </Link>
                  <Link href="/get-wordpress-website" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                    Explore WordPress Websites
                  </Link>
                </div>
              </section>

              {/* Author Section */}
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

              {/* Bottom Support Box */}
              <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-bold text-slate-950">Need help choosing the right website?</h2>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  We build{" "}
                  <Link href="/get-custom-website" className="text-blue-600 font-medium hover:underline">
                    custom websites
                  </Link>
                  ,{" "}
                  <Link href="/get-wordpress-website" className="text-blue-600 font-medium hover:underline">
                    WordPress websites
                  </Link>
                  , and can help you compare both options based on your business goals. Review our{" "}
                  <Link href="/pricing" className="text-blue-600 font-medium hover:underline">
                    pricing
                  </Link>{" "}
                  or{" "}
                  <Link href="/contact" className="text-blue-600 font-medium hover:underline">
                    contact us
                  </Link>{" "}
                  for a tailored recommendation.
                </p>
              </section>
            </div>

            {/* Right Sidebar: Sticky Newsletter Card Widget */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-[2rem] bg-gradient-to-br from-blue-950 via-sky-900 to-blue-700 p-8 text-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.65)] text-center relative overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_45%)]" />
                <h3 className="relative text-3xl font-bold leading-snug tracking-tight">
                  Get monthly advice and exclusive deals
                </h3>
                <div className="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-[2.5rem] transition duration-700 ease-out hover:scale-[1.02] animate-pulse">
                  <img src="/Blog images/card_icon_white.png" alt="newsletter icon" className="h-16 w-16 object-contain" />
                </div>
                <form className="mt-8 space-y-4">
                  <input
                    type="email"
                    placeholder="your email"
                    className="w-full rounded-2xl bg-white px-5 py-4 text-slate-950 placeholder:text-slate-500 outline-none shadow-sm transition focus:ring-2 focus:ring-white/40"
                  />
                  <button type="submit" className="w-full rounded-2xl bg-white px-5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-slate-100">
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

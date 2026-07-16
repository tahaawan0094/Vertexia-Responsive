import type { Metadata } from "next";
import Link from "next/link";
import { Poppins } from "next/font/google";
import FooterLinksSection from "@/components/sections/FooterLinksSection";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Why Website Speed Is a Google Ranking Factor (And How to Fix It) | Vertexia",
  description:
    "Slow website losing you customers and Google rankings? Learn why speed matters for SEO, how to test it, and practical fixes that actually work.",
  alternates: {
    canonical: "https://www.vertexiaagency.com/blogs/website-speed-google-ranking-factor-how-to-fix",
  },
  openGraph: {
    title: "Why Website Speed Is a Google Ranking Factor (And How to Fix It) | Vertexia",
    description:
      "Slow website losing you customers and Google rankings? Learn why speed matters for SEO, how to test it, and practical fixes that actually work.",
    images: ["/Blog images/website-speed-google-ranking-factor-how-to-fix.webp"],
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "why-google-cares", label: "Why Google Cares About Website Speed" },
  { id: "core-web-vitals", label: "What Google Actually Measures" },
  { id: "real-cost", label: "The Real Cost of a Slow Website" },
  { id: "common-reasons", label: "Common Reasons Websites Are Slow" },
  { id: "how-to-check", label: "How to Check Your Website's Speed" },
  { id: "how-to-fix", label: "How to Actually Fix a Slow Website" },
  { id: "platform-matters", label: "Why the Underlying Technology Matters" },
  { id: "faq", label: "FAQs" },
];

const faqItems = [
  {
    question: "How fast should my website actually load?",
    answer:
      "As a general target, aim for your main content to appear in under 2.5 seconds and for the page to feel fully responsive within a few seconds total. Faster is always better, but this range is where most visitors stop noticing load time as a problem.",
  },
  {
    question: "Does website speed really affect Google rankings?",
    answer:
      "Yes. It is a real ranking factor, especially through Core Web Vitals. That said, speed works alongside content relevance and trust rather than replacing them.",
  },
  {
    question: "Can I fix speed issues myself, or do I need a developer?",
    answer:
      "Some fixes, such as compressing images or removing unused plugins, can often be handled without deep technical knowledge. Deeper fixes like caching setup, code restructuring, hosting migration, or platform changes usually need expert support.",
  },
  {
    question: "Will switching to a new platform like Next.js fix my speed problems?",
    answer:
      "In many cases, yes. A modern framework can provide a stronger foundation, but a poorly built site can still be slow. The platform helps, but the implementation matters just as much.",
  },
  {
    question: "How often should I check my website's speed?",
    answer:
      "Checking every few months is a good habit, and especially after major updates, redesigns, or new plugins. Speed often degrades gradually as more features are added.",
  },
];

export default function WebsiteSpeedSeoArticle() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vertexiaagency.com/" },
      { "@type": "ListItem", position: 2, name: "Blogs", item: "https://www.vertexiaagency.com/blogs" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Why Website Speed Is a Google Ranking Factor (And How to Fix It)",
        item: "https://www.vertexiaagency.com/blogs/website-speed-google-ranking-factor-how-to-fix",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Website Speed Is a Google Ranking Factor (And How to Fix It)",
    description:
      "Slow website losing you customers and Google rankings? Learn why speed matters for SEO, how to test it, and practical fixes that actually work.",
    author: { "@type": "Person", name: "Taha Awan", url: "https://www.vertexiaagency.com/leadership" },
    publisher: {
      "@type": "Organization",
      name: "Vertexia",
      logo: { "@type": "ImageObject", url: "https://www.vertexiaagency.com/new-header-logo.png" },
    },
    datePublished: "2026-07-11",
    dateModified: "2026-07-11",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.vertexiaagency.com/blogs/website-speed-google-ranking-factor-how-to-fix" },
    image: ["https://www.vertexiaagency.com/Blog images/website-speed-google-ranking-factor-how-to-fix.webp"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className={`min-h-screen bg-white text-slate-950 ${poppins.className}`}>
        <section className="relative px-6 pb-8 pt-24 md:pt-32">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h1 className={`${poppins.className} text-4xl font-semibold text-slate-950 md:text-5xl lg:text-5xl`}>
              Why Website Speed Is a Google Ranking Factor (And How to Fix It)
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Slow website losing you customers and Google rankings? Learn why speed matters for SEO, how to test it, and practical fixes that actually work.
            </p>
          </div>
        </section>

        <section className="px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[260px_1fr_360px] items-start">
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
                <a href="https://www.linkedin.com/company/vertexia-agency/" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#0A66C2] text-white shadow-sm transition hover:scale-105" aria-label="LinkedIn">
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

            <div className="space-y-12">
              <div className="overflow-hidden rounded-[2rem] p-4 shadow-xl shadow-slate-200/50 border border-slate-100">
                <img
                  src="/Blog images/website-speed-google-ranking-factor-how-to-fix.webp"
                  alt="Website speed and SEO performance"
                  className="mx-auto block w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <section id="introduction" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Introduction</h2>
                <p className="text-base leading-7 text-slate-700">
                  In fifteen years of auditing websites, one issue shows up more often than almost any other: a business owner has invested time and money into the website, the branding, and the content, but still loses a meaningful chunk of potential customers before the page even finishes loading.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  Website speed is no longer a â€œnice to have.â€ It is a direct Google ranking factor, and more importantly, it is often the difference between a visitor becoming a customer or leaving for a competitor.
                </p>
              </section>

              <section id="why-google-cares" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Why Google Cares About Website Speed</h2>
                <p className="text-base leading-7 text-slate-700">
                  Google is built around giving searchers the best experience possible. A slow website works directly against that goal, which is why speed became an explicit ranking signal.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  There is also a human reason speed matters: people leave. Once page load time moves past just a couple of seconds, abandonment rises sharply. That means speed affects your business in two ways:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                  <li>Direct ranking impact through Googleâ€™s evaluation signals.</li>
                  <li>Behavioral impact through visitors leaving before they even engage with your offer.</li>
                </ol>
              </section>

              <section id="core-web-vitals" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>What Google Actually Measures</h2>
                <p className="text-base leading-7 text-slate-700">
                  Google measures speed through Core Web Vitals, which focus on how quickly a page becomes useful, how responsive it feels, and whether it shifts around as it loads.
                </p>

                <h3 className="text-xl font-semibold text-slate-950">Largest Contentful Paint (LCP)</h3>
                <p className="text-base leading-7 text-slate-700">
                  LCP measures how long it takes for the main content to become visible. A good target is under 2.5 seconds.
                </p>

                <h3 className="text-xl font-semibold text-slate-950">Interaction to Next Paint (INP)</h3>
                <p className="text-base leading-7 text-slate-700">
                  INP measures how responsive the page feels when someone clicks a button, opens a menu, or submits a form. A good target is under 200 milliseconds.
                </p>

                <h3 className="text-xl font-semibold text-slate-950">Cumulative Layout Shift (CLS)</h3>
                <p className="text-base leading-7 text-slate-700">
                  CLS measures visual stability. If images or ads load late and push buttons around, visitors can click the wrong thing. A good target is under 0.1.
                </p>
              </section>

              <section id="real-cost" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>The Real Cost of a Slow Website</h2>
                <p className="text-base leading-7 text-slate-700">
                  Speed has a direct relationship with revenue. As load time increases, conversion rates decrease. This applies whether you run a local clinic, an e-commerce store, or a service business.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  For businesses in Pakistan, this matters even more because many visitors are on mobile connections that are not always fast or stable. A site that feels fine on office Wi-Fi can feel painfully slow on mobile data.
                </p>
              </section>

              <section id="common-reasons" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Common Reasons Websites Are Slow</h2>
                <ul className="list-inside list-disc space-y-2 text-slate-700">
                  <li><strong>Unoptimized images.</strong> Large, uncompressed images are one of the most common causes.</li>
                  <li><strong>Too many plugins and scripts.</strong> Extra tools and widgets add code that slows things down.</li>
                  <li><strong>Bloated themes and page builders.</strong> Heavy frameworks can ship with far more code than a site actually uses.</li>
                  <li><strong>Poor hosting.</strong> Shared hosting can throttle performance.</li>
                  <li><strong>No caching or CDN.</strong> Without them, the server has to rebuild pages repeatedly.</li>
                  <li><strong>Render-blocking code.</strong> Heavy JavaScript and CSS can delay the first visible content.</li>
                </ul>
              </section>

              <section id="how-to-check" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>How to Check Your Website's Speed</h2>
                <ul className="list-inside list-disc space-y-2 text-slate-700">
                  <li><strong>Google PageSpeed Insights:</strong> gives a Core Web Vitals score for mobile and desktop.</li>
                  <li><strong>Google Search Console:</strong> shows how Google sees your site over time using real visitor data.</li>
                  <li><strong>Test on mobile data:</strong> opening the site on your phone using 4G or 5G can reveal issues that desktop tests miss.</li>
                </ul>
              </section>

              <section id="how-to-fix" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>How to Actually Fix a Slow Website</h2>
                <ul className="list-inside list-disc space-y-2 text-slate-700">
                  <li><strong>Compress and properly size images.</strong> Resize them to the actual display size and serve modern formats.</li>
                  <li><strong>Remove what you do not need.</strong> Audit plugins, scripts, and page builder elements honestly.</li>
                  <li><strong>Use caching and a CDN.</strong> This helps visitors get fast, pre-built versions of your pages.</li>
                  <li><strong>Move to better hosting or a more modern platform.</strong> This is often the most lasting improvement.</li>
                  <li><strong>Reduce render-blocking code.</strong> Make the visible content appear first while less critical scripts load in the background.</li>
                </ul>
              </section>

              <section id="platform-matters" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Why the Underlying Technology Matters More Than Most Business Owners Realize</h2>
                <p className="text-base leading-7 text-slate-700">
                  A lot of speed problems are not just â€œfixableâ€ on certain platforms; they are built into the foundation. A heavy WordPress theme with many plugins can be optimized, but it still works against its own architecture.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  Modern frameworks like Next.js and React are built around performance from the start, with image optimization, code splitting, and server-side rendering included as core features. This is why a performance-focused rebuild can have such a large payoff.
                </p>
              </section>

              <section id="faq" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqItems.map((f) => (
                    <div key={f.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-slate-950">{f.question}</h3>
                      <p className="mt-2 text-slate-700">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl bg-gradient-to-br from-blue-950 via-sky-900 to-blue-700 p-8 text-center text-white shadow-xl">
                <h3 className="text-2xl font-bold">Ready to improve your website's speed and performance?</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100/90">
                  Vertexia can help you identify what is slowing your website down and build a clear plan to fix it.
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


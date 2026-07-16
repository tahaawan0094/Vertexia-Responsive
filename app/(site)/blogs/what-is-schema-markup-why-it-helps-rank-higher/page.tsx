import Link from "next/link";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import FooterLinksSection from "@/components/sections/FooterLinksSection";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "What Is Schema Markup? Why It Helps You Rank Higher on Google | Vertexia",
  description:
    "Schema markup explained in plain English — what it is, why Google rewards it, and how it can help your business earn rich results in search.",
  alternates: {
    canonical: "https://www.vertexiaagency.com/blogs/what-is-schema-markup-why-it-helps-rank-higher",
  },
  openGraph: {
    title: "What Is Schema Markup? Why It Helps You Rank Higher on Google | Vertexia",
    description:
      "Schema markup explained in plain English — what it is, why Google rewards it, and how it can help your business earn rich results in search.",
    images: ["/Blog images/What-Is-Schema-Markup.webp"],
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "plain-english", label: "What Is Schema Markup?" },
  { id: "why-it-matters", label: "Why It Helps You Rank Higher" },
  { id: "types", label: "Schema Types That Matter" },
  { id: "without-it", label: "What Happens Without It" },
  { id: "check-it", label: "How to Check" },
  { id: "caution", label: "A Word of Caution" },
  { id: "faq", label: "FAQs" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const faqItems = [
  {
    question: "Do I need a developer to add schema markup to my website?",
    answer:
      "For basic implementations, some platforms and plugins can help. For accurate, properly validated structured data — especially LocalBusiness and FAQ schema — development expertise usually gives you better results.",
  },
  {
    question: "Will adding schema markup guarantee I get star ratings or FAQ dropdowns?",
    answer:
      "No. Schema markup improves your eligibility for rich results, but Google still decides whether and when to display them based on quality and relevance.",
  },
  {
    question: "Is schema markup a one-time setup?",
    answer:
      "It should be updated whenever the underlying information changes, such as business hours, FAQs, or review data. Outdated schema can hurt your visibility rather than help it.",
  },
  {
    question: "Which schema type should a small business implement first?",
    answer:
      "For most local businesses, LocalBusiness schema is the first priority. FAQPage schema is the next strong step if your site already has useful FAQ content.",
  },
];

export default function WhatIsSchemaMarkupBlogPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vertexiaagency.com/" },
      { "@type": "ListItem", position: 2, name: "Blogs", item: "https://www.vertexiaagency.com/blogs" },
      {
        "@type": "ListItem",
        position: 3,
        name: "What Is Schema Markup? Why It Helps You Rank Higher",
        item: "https://www.vertexiaagency.com/blogs/what-is-schema-markup-why-it-helps-rank-higher",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is Schema Markup? Why It Helps You Rank Higher",
    description:
      "Schema markup explained in plain English — what it is, why Google rewards it, and how it can help your business earn rich results in search.",
    author: { "@type": "Person", name: "Taha Awan", url: "https://www.vertexiaagency.com/leadership" },
    publisher: {
      "@type": "Organization",
      name: "Vertexia",
      logo: { "@type": "ImageObject", url: "https://www.vertexiaagency.com/new-header-logo.png" },
    },
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.vertexiaagency.com/blogs/what-is-schema-markup-why-it-helps-rank-higher",
    },
    image: ["https://www.vertexiaagency.com/Blog images/What-Is-Schema-Markup.webp"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
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
              What Is Schema Markup? Why It Helps You Rank Higher
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              If you&apos;ve ever seen star ratings, business hours, or FAQ dropdowns appear in Google search results, you&apos;ve already seen schema markup at work.
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

            <div className="space-y-12">
              <div className="overflow-hidden rounded-[2rem] p-4 shadow-xl shadow-slate-200/50 border border-slate-100">
                <img
                  src="/Blog images/What-Is-Schema-Markup.webp"
                  alt="Schema markup and search visibility illustration"
                  className="mx-auto block w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <section id="introduction" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Introduction</h2>
                <p className="text-base leading-7 text-slate-700">
                  If you&apos;ve ever searched for a recipe and seen a star rating right in the search results, or looked up a business and seen its hours and phone number appear without clicking through, you&apos;ve already seen schema markup in action.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  Schema markup is one of the most underused tools in small business SEO. It does not change how your website looks to visitors, but it can dramatically change how your business appears in Google search results and how clearly Google understands what you do.
                </p>
              </section>

              <section id="plain-english" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>What Is Schema Markup, in Plain English?</h2>
                <p className="text-base leading-7 text-slate-700">
                  Think about the way a human reads a page. A person can instantly understand that “Open 9 AM to 6 PM, Monday to Saturday” refers to business operating hours. Google&apos;s crawlers do not read the same way. They scan code and text, and while they have become much better at understanding meaning, they still benefit from being told directly what something is.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  That is what schema markup does. It is a standardized code format, also called structured data, added to your website to explicitly label information for search engines. Instead of Google inferring that “9 AM to 6 PM” is your business hours, schema markup tells it directly: this is your business, this is your address, this is your phone number, and these are your hours.
                </p>
              </section>

              <section id="why-it-matters" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Why Schema Markup Helps You Rank Higher</h2>
                <p className="text-base leading-7 text-slate-700">
                  It is important to be precise here: schema markup is not a magic ranking boost by itself. Google has made clear that structured data is not a direct guarantee of a higher position in the same way page speed or relevance are.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  What it does do is create practical advantages that improve performance in real life:
                </p>
                <ul className="list-inside list-disc space-y-2 pl-4 text-slate-700">
                  <li>It helps you qualify for rich results such as star ratings, FAQ dropdowns, product pricing, and event details.</li>
                  <li>It improves click-through rate by making your listing more attractive and informative than a plain blue link.</li>
                  <li>It removes ambiguity for Google by making your content easier to understand and categorize.</li>
                  <li>It strengthens your visibility for AI-powered search experiences that increasingly pull from clearly structured content.</li>
                </ul>
              </section>

              <section id="types" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>The Types of Schema Markup Most Businesses Actually Need</h2>

                <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-slate-950">LocalBusiness Schema</h3>
                    <p className="text-base leading-7 text-slate-700">
                      This is the foundation for most local businesses. It tells Google your business name, address, phone number, operating hours, and category explicitly.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-slate-950">FAQPage Schema</h3>
                    <p className="text-base leading-7 text-slate-700">
                      If your site has a real FAQ section, this schema can help those questions appear as expandable dropdowns in search results and take up more space visually.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-slate-950">Review or AggregateRating Schema</h3>
                    <p className="text-base leading-7 text-slate-700">
                      This is what powers the star ratings you see next to some results. It must reflect genuine review data and should never be fabricated.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-slate-950">Organization Schema</h3>
                    <p className="text-base leading-7 text-slate-700">
                      This helps establish your brand identity with details like logo, official name, social profiles, and contact information.
                    </p>
                  </div>
                </div>
              </section>

              <section id="without-it" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>What Happens If Your Website Does Not Have Schema Markup?</h2>
                <p className="text-base leading-7 text-slate-700">
                  Nothing catastrophic happens immediately. Your website can still rank and function without it. But you are leaving a real advantage on the table, especially in competitive local searches where several businesses are fighting for the same visibility.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  This is one of the most common gaps I see on business websites. It is not always difficult to fix, but it is easy to overlook because it is invisible on the page itself.
                </p>
              </section>

              <section id="check-it" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>How to Check If Your Website Already Has Schema Markup</h2>
                <ul className="list-inside list-disc space-y-2 pl-4 text-slate-700">
                  <li>Use Google&apos;s Rich Results Test and enter your website URL to see what structured data Google can detect.</li>
                  <li>View page source and search for “schema.org” to confirm whether structured data is present.</li>
                  <li>Search your own business name and compare your listing to competitors that show star ratings, business details, or FAQ dropdowns.</li>
                </ul>
              </section>

              <section id="caution" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>A Word of Caution: Schema Markup Must Be Accurate</h2>
                <p className="text-base leading-7 text-slate-700">
                  One of the biggest mistakes businesses make is adding schema markup that does not genuinely reflect what is on the page. That can include review schema without real reviews or FAQ schema for questions that are not actually answered on the page.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  Google has become much stricter about this. Misused structured data can cause rich results to be suppressed or, in severe cases, lead to manual review issues. The rule is simple: structure what is genuinely and visibly true on the page.
                </p>
              </section>

              <section id="faq" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqItems.map((item) => (
                    <div key={item.question} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-slate-950">{item.question}</h3>
                      <p className="mt-3 text-base leading-7 text-slate-700">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="final-thoughts" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Final Thoughts</h2>
                <p className="text-base leading-7 text-slate-700">
                  Schema markup is one of those technical SEO details that rarely gets attention because it is invisible on the page, but its effect on how your business appears in search is highly visible to potential customers. It helps search engines understand your business more clearly and makes your listing more competitive in the search results.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  If you are not sure whether your website has proper structured data in place, Vertexia can review it for you and help you close the gap.
                </p>
              </section>

              <section className="rounded-3xl bg-gradient-to-br from-blue-950 via-sky-900 to-blue-700 p-8 text-center text-white shadow-xl">
                <h3 className="text-2xl font-bold">Ready to improve your website's SEO and visibility?</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100/90">
                  Vertexia can help you add structured data, improve search visibility, and turn your website into a stronger lead-generation asset.
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
                <h3 className="relative text-3xl font-bold leading-snug tracking-tight">Get monthly advice and exclusive deals</h3>
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

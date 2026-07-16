import Link from "next/link";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import FooterLinksSection from "@/components/sections/FooterLinksSection";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "SEO for Manufacturing Companies: Getting Found by B2B Buyers | Vertexia",
  description:
    "Most manufacturing websites are invisible to the buyers searching for them. Learn how B2B buyers search, why manufacturers lose visibility, and what actually improves SEO.",
  alternates: {
    canonical: "https://www.vertexiaagency.com/blogs/seo-manufacturing-companies-b2b-buyers",
  },
  openGraph: {
    title: "SEO for Manufacturing Companies: Getting Found by B2B Buyers | Vertexia",
    description:
      "Most manufacturing websites are invisible to the buyers searching for them. Learn how B2B buyers search, why manufacturers lose visibility, and what actually improves SEO.",
    images: ["/Blog images/SEO-for-Manufacturing-Companies-Getting-Found-by-B2B-Buyers.webp"],
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "how-b2b-buyers-search", label: "How B2B Buyers Search" },
  { id: "why-websites-are-invisible", label: "Why Most Sites Are Invisible" },
  { id: "what-actually-works", label: "What Actually Works" },
  { id: "export-focused", label: "Export-Focused Manufacturers" },
  { id: "why-it-matters", label: "Why It Matters" },
  { id: "faq", label: "FAQs" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const faqItems = [
  {
    question: "Is SEO really worth the investment for a manufacturing company?",
    answer:
      "Yes. SEO is a strong complement to trade shows and direct sales outreach because it captures buyers who are actively researching suppliers online before they ever contact you.",
  },
  {
    question: "How long does it typically take to see results?",
    answer:
      "Meaningful visibility improvements usually take a few months of consistent effort, with stronger compounding growth over six months to a year depending on competition and website quality.",
  },
  {
    question: "Should we focus on a blog or product pages first?",
    answer:
      "Product and category pages should come first, because they match the searches buyers are actively making. A blog becomes valuable afterwards for trust-building and topical authority.",
  },
  {
    question: "Do we need a full redesign?",
    answer:
      "Not always. If the main issues are missing product pages, weak keyword targeting, or thin content, you may see major improvements without a full rebuild. If speed and technical usability are the problem, a modern rebuild is often better.",
  },
];

export default function ManufacturingSeoBlogPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vertexiaagency.com/" },
      { "@type": "ListItem", position: 2, name: "Blogs", item: "https://www.vertexiaagency.com/blogs" },
      {
        "@type": "ListItem",
        position: 3,
        name: "SEO for Manufacturing Companies: Getting Found by B2B Buyers",
        item: "https://www.vertexiaagency.com/blogs/seo-manufacturing-companies-b2b-buyers",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "SEO for Manufacturing Companies: Getting Found by B2B Buyers",
    description:
      "Most manufacturing websites are invisible to the buyers searching for them. Learn how B2B buyers search, why manufacturers lose visibility, and what actually improves SEO.",
    author: { "@type": "Person", name: "Taha Awan", url: "https://www.vertexiaagency.com/leadership" },
    publisher: {
      "@type": "Organization",
      name: "Vertexia",
      logo: { "@type": "ImageObject", url: "https://www.vertexiaagency.com/new-header-logo.png" },
    },
    datePublished: "2026-07-15",
    dateModified: "2026-07-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.vertexiaagency.com/blogs/seo-manufacturing-companies-b2b-buyers",
    },
    image: ["https://www.vertexiaagency.com/Blog images/SEO-for-Manufacturing-Companies-Getting-Found-by-B2B-Buyers.webp"],
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
              SEO for Manufacturing Companies: Getting Found by B2B Buyers
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Manufacturing companies often produce excellent products but still fail to show up for the buyers actively searching for them online.
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
                  src="/Blog images/SEO-for-Manufacturing-Companies-Getting-Found-by-B2B-Buyers.webp"
                  alt="Manufacturing SEO and B2B buyer visibility"
                  className="mx-auto block w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <section id="introduction" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Introduction</h2>
                <p className="text-base leading-7 text-slate-700">
                  In fifteen years of auditing websites across different industries, manufacturing companies are consistently among the businesses with the biggest gap between what they actually produce and how well their website represents that online.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  The product is often excellent. The website is often treated as an afterthought — a digital brochure that exists because a company “needs a website,” rather than a tool expected to bring in buyers.
                </p>
              </section>

              <section id="how-b2b-buyers-search" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>How B2B Buyers Actually Search — And Why It’s Different</h2>
                <p className="text-base leading-7 text-slate-700">
                  Consumer SEO and B2B manufacturing SEO are built on fundamentally different search behavior. A consumer searching for a restaurant types “best biryani near me,” while a procurement manager searching for a supplier behaves very differently.
                </p>
                <ul className="list-inside list-disc space-y-2 pl-4 text-slate-700">
                  <li>They search using specific industry terminology, material specifications, certifications, and standards.</li>
                  <li>They may not care about location at all, especially for export-focused buyers.</li>
                  <li>They spend longer researching and evaluating, often reviewing multiple suppliers before reaching out.</li>
                  <li>They look for capability and reliability, not just attractive design.</li>
                </ul>
              </section>

              <section id="why-websites-are-invisible" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Why Most Manufacturing Websites Are Invisible to Buyers</h2>
                <p className="text-base leading-7 text-slate-700">
                  Based on patterns I see repeatedly in this industry, several issues show up again and again: the website reads like a brochure rather than a resource, product pages are thin or missing, there is little content addressing buyer research questions, and technical SEO fundamentals are often ignored.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  Buyers search for exact things — a material, a specification, a process, a compliance requirement — and a site that lacks that specificity simply never appears for those searches.
                </p>
              </section>

              <section id="what-actually-works" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>What Actually Works: SEO Priorities for Manufacturers</h2>

                <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-slate-950">Build Real Product and Category Pages</h3>
                    <p className="text-base leading-7 text-slate-700">
                      Every distinct product line should have its own dedicated page with specifications, applications, certifications, and relevant details a buyer would actually search for.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-slate-950">Use the Exact Language Your Buyers Search</h3>
                    <p className="text-base leading-7 text-slate-700">
                      Genuine keyword research is critical, because B2B buyers often use precise terms rather than generic marketing phrases.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-slate-950">Create Content Around Buyer Research Questions</h3>
                    <p className="text-base leading-7 text-slate-700">
                      FAQs, certification pages, capability pages, and export-related content all help buyers build trust before contacting a supplier.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-slate-950">Show Real Proof of Capability</h3>
                    <p className="text-base leading-7 text-slate-700">
                      Case studies, testimonials, facility photos, and clear compliance information are important trust signals for serious B2B buyers.
                    </p>
                  </div>
                </div>
              </section>

              <section id="export-focused" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>A Note for Export-Focused Manufacturers</h2>
                <p className="text-base leading-7 text-slate-700">
                  If your business serves international buyers, local SEO becomes less relevant than export experience, shipping capability, compliance standards, and clear communication of lead times and minimum order quantities.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  This is a meaningfully different strategy than local retail SEO, and treating them the same way is a common mismatch.
                </p>
              </section>

              <section id="why-it-matters" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Why This Matters More Than Most Manufacturers Realize</h2>
                <p className="text-base leading-7 text-slate-700">
                  Manufacturers often have genuine competitive advantage sitting unused — real capability, certifications, and proof of quality — simply because their websites never communicate that to the buyers actively searching for it. Closing that gap is not about chasing trends; it is about making sure the right buyers can actually find you and trust what they find.
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

              <section id="mistakes" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Common Mistakes Manufacturers Make When They Do Invest in SEO</h2>
                <ul className="list-inside list-disc space-y-2 pl-4 text-slate-700">
                  <li>Treating SEO as a one-time project instead of an ongoing effort.</li>
                  <li>Copying competitor content instead of differentiating with proofs and specificity.</li>
                  <li>Underestimating the value of long-tail, highly specific searches.</li>
                  <li>Neglecting the mobile experience.</li>
                </ul>
              </section>

              <section id="final-thoughts" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Final Thoughts</h2>
                <p className="text-base leading-7 text-slate-700">
                  Manufacturing companies often have a genuine competitive advantage sitting unused — real production capability, certifications, and quality proof — simply because their website was never built to communicate any of it to the buyers actively searching for exactly that.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  Vertexia offers a professional website and SEO audit built specifically around how B2B buyers actually search and evaluate suppliers.
                </p>
              </section>

              <section className="rounded-3xl bg-gradient-to-br from-blue-950 via-sky-900 to-blue-700 p-8 text-center text-white shadow-xl">
                <h3 className="text-2xl font-bold">Ready to improve your manufacturing website and SEO?</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100/90">
                  Vertexia can help you turn your website into a stronger digital sales tool for B2B buyers and procurement teams.
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
                  <input type="email" placeholder="your email" className="w-full rounded-2xl bg-white px-5 py-4 text-slate-950 placeholder:text-slate-500 outline-none shadow-sm transition focus:ring-2 focus:ring-white/40" />
                  <button type="submit" className="w-full rounded-2xl bg-white px-5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-slate-100">Subscribe</button>
                </form>
                <p className="relative mt-6 text-xs leading-relaxed text-blue-100/80">By subscribing you agree to receive regular communications from Vertexia.</p>
              </div>
            </aside>
          </div>
        </section>

        <FooterLinksSection />
      </article>
    </>
  );
}

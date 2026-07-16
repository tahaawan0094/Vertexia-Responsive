import type { Metadata } from "next";
import Link from "next/link";
import { Poppins } from "next/font/google";
import FooterLinksSection from "@/components/sections/FooterLinksSection";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Local SEO Checklist for Small Businesses in Karachi (2026 Guide) | Vertexia",
  description:
    "A complete local SEO checklist for small businesses in Karachi — Google Business Profile, NAP consistency, reviews, citations, and local content that actually gets you found.",
  alternates: {
    canonical: "https://www.vertexiaagency.com/blogs/local-seo-checklist-small-businesses-karachi",
  },
  openGraph: {
    title: "Local SEO Checklist for Small Businesses in Karachi (2026 Guide) | Vertexia",
    description:
      "A complete local SEO checklist for small businesses in Karachi — Google Business Profile, NAP consistency, reviews, citations, and local content that actually gets you found.",
    images: ["/Blog images/Local-SEO-Checklist-for-Small-Businesses-in-Karachi.png"],
  },
};

const tocItems = [
  { id: "why-local-seo-matters", label: "Why Local SEO Matters" },
  { id: "claim-profile", label: "Claim and Optimize Your Google Business Profile" },
  { id: "fix-nap", label: "Fix NAP Consistency" },
  { id: "local-directories", label: "Get Listed in Local Directories" },
  { id: "reviews", label: "Build a Review Strategy" },
  { id: "location-content", label: "Create Location-Specific Content" },
  { id: "mobile-speed", label: "Improve Mobile Speed and UX" },
  { id: "schema", label: "Add Local Business Schema" },
  { id: "track-results", label: "Track and Monitor Results" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const faqItems = [
  {
    question: "How long does local SEO take to show results in Karachi?",
    answer:
      "Most small businesses start seeing visible improvements in Google Business Profile activity and map pack position within 6 to 12 weeks of consistent work, with stronger gains over 3 to 6 months.",
  },
  {
    question: "Do I need a website if I already have a Google Business Profile?",
    answer:
      "Yes. Your profile helps with visibility, but a proper website builds trust and supports rankings for a much broader range of searches.",
  },
  {
    question: "What is the biggest local SEO mistake in Karachi?",
    answer:
      "Inconsistent NAP information is the most common and damaging issue. Google notices it quickly and it weakens your local trust signals.",
  },
];

export default function LocalSeoChecklistKarachiPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vertexiaagency.com/" },
      { "@type": "ListItem", position: 2, name: "Blogs", item: "https://www.vertexiaagency.com/blogs" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Local SEO Checklist for Small Businesses in Karachi",
        item: "https://www.vertexiaagency.com/blogs/local-seo-checklist-small-businesses-karachi",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Local SEO Checklist for Small Businesses in Karachi",
    description:
      "A complete local SEO checklist for small businesses in Karachi — Google Business Profile, NAP consistency, reviews, citations, and local content that actually gets you found.",
    author: { "@type": "Person", name: "Taha Awan", url: "https://www.vertexiaagency.com/leadership" },
    publisher: {
      "@type": "Organization",
      name: "Vertexia",
      logo: { "@type": "ImageObject", url: "https://www.vertexiaagency.com/new-header-logo.png" },
    },
    datePublished: "2026-07-10",
    dateModified: "2026-07-10",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.vertexiaagency.com/blogs/local-seo-checklist-small-businesses-karachi",
    },
    image: ["https://www.vertexiaagency.com/Blog images/Local-SEO-Checklist-for-Small-Businesses-in-Karachi.png"],
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
              Local SEO Checklist for Small Businesses in Karachi
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              A practical local SEO checklist for Karachi businesses that want to show up in Google Maps, local search results, and the right conversations.
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
                <div className="space-y-3 bg-white px-6 py-6">
                  {tocItems.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="block text-sm text-slate-700 transition hover:text-blue-600">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            <div className="space-y-12">
              <div className="overflow-hidden rounded-[2rem] border border-slate-100 p-4 shadow-xl shadow-slate-200/50">
                <img
                  src="/Blog images/Local-SEO-Checklist-for-Small-Businesses-in-Karachi.png"
                  alt="Local SEO for Karachi businesses"
                  className="mx-auto block w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <section id="why-local-seo-matters" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Why Local SEO Matters More for Karachi Businesses Than General SEO</h2>
                <p className="text-base leading-7 text-slate-700">
                  When someone searches for a dentist, contractor, clinic, real estate agent, or manufacturer near them, Google is trying to find the most relevant business within the right area. For Karachi businesses, local SEO is often the difference between being visible and being invisible.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  Local search rewards trust, relevance, and consistency. That makes it a highly practical channel for small businesses that cannot outspend large competitors but can still win by getting the basics right.
                </p>
              </section>

              <section id="claim-profile" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>1. Claim and Fully Optimize Your Google Business Profile</h2>
                <p className="text-base leading-7 text-slate-700">
                  If you do nothing else, start here. Your Google Business Profile powers the map pack, and it is a major factor in local visibility.
                </p>
                <ul className="list-inside list-disc space-y-2 text-slate-700">
                  <li>Claim and verify your profile</li>
                  <li>Use your real business name without keyword stuffing</li>
                  <li>Select the correct primary and secondary categories</li>
                  <li>Fill in your address, phone number, website, hours, and map pin</li>
                  <li>Upload at least 5 to 10 quality photos and publish regular updates</li>
                </ul>
              </section>

              <section id="fix-nap" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>2. Fix NAP Consistency Across the Web</h2>
                <p className="text-base leading-7 text-slate-700">
                  NAP means Name, Address, and Phone number. Inconsistent details across your website, Google profile, Facebook page, and directories create confusion for Google and weaken your local trust signals.
                </p>
                <ul className="list-inside list-disc space-y-2 text-slate-700">
                  <li>Use one standard format everywhere</li>
                  <li>Keep your address and phone number exact across all listings</li>
                  <li>Update or remove duplicate or old listings</li>
                  <li>Show your NAP clearly in your site footer</li>
                </ul>
              </section>

              <section id="local-directories" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>3. Get Listed on Relevant Local and Industry Directories</h2>
                <p className="text-base leading-7 text-slate-700">
                  Citations still matter. Relevant directory listings help Google validate your business and make your company easier to find.
                </p>
                <ul className="list-inside list-disc space-y-2 text-slate-700">
                  <li>General directories for Pakistan</li>
                  <li>Industry-specific directories</li>
                  <li>Local chamber and trade association listings</li>
                  <li>Your fully completed Facebook Business Page</li>
                </ul>
              </section>

              <section id="reviews" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>4. Build a Genuine Review Strategy</h2>
                <p className="text-base leading-7 text-slate-700">
                  Reviews influence both rankings and customer decisions. The businesses that win locally are usually the ones with a steady, ongoing flow of new reviews and professional responses.
                </p>
                <ul className="list-inside list-disc space-y-2 text-slate-700">
                  <li>Ask satisfied customers for Google reviews</li>
                  <li>Respond to every review professionally</li>
                  <li>Avoid fake reviews or review-gating tactics</li>
                </ul>
              </section>

              <section id="location-content" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>5. Create Location-Specific Content on Your Website</h2>
                <p className="text-base leading-7 text-slate-700">
                  Generic service pages are not enough. Create pages and content that clearly show which neighborhoods, cities, or service areas you cover and why you are relevant to that local audience.
                </p>
                <ul className="list-inside list-disc space-y-2 text-slate-700">
                  <li>Dedicated pages for each location you serve</li>
                  <li>Service pages that mention the areas you operate in naturally</li>
                  <li>Content that reflects local context, not generic filler</li>
                </ul>
              </section>

              <section id="mobile-speed" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>6. Make Sure Your Website Passes the Mobile and Speed Test</h2>
                <p className="text-base leading-7 text-slate-700">
                  Local searches happen on mobile. A slow or hard-to-use website will turn away visitors even if your rankings are good.
                </p>
                <ul className="list-inside list-disc space-y-2 text-slate-700">
                  <li>Keep your site fast on mobile connections</li>
                  <li>Use click-to-call and WhatsApp buttons</li>
                  <li>Keep contact details easy to find</li>
                  <li>Use a modern website rather than a heavy template setup</li>
                </ul>
              </section>

              <section id="schema" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>7. Add Local Business Schema Markup</h2>
                <p className="text-base leading-7 text-slate-700">
                  Schema markup gives Google structured information about your business, including your name, address, phone number, hours, and category. This makes your local relevance signals much easier to understand.
                </p>
              </section>

              <section id="track-results" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>8. Track and Monitor Your Local Rankings</h2>
                <p className="text-base leading-7 text-slate-700">
                  Local SEO is ongoing. Review your rankings, map-pack visibility, profile insights, and review volume regularly so you can adapt as competitors change.
                </p>
              </section>

              <section id="faq" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqItems.map((item) => (
                    <div key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                      <p className="mt-2 text-base leading-7 text-slate-700">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl bg-gradient-to-br from-blue-950 via-sky-900 to-blue-700 p-8 text-center text-white shadow-xl">
                <h3 className="text-2xl font-bold">Want a local SEO audit for your business?</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100/90">
                  We can help you review Google Business Profile health, local visibility, site speed, and the right next steps for your market.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link href="/contact" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 shadow-sm">
                    Book a Consultation
                  </Link>
                  <Link href="/pricing" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                    View Pricing
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
                  <Link href="/contact" className="inline-flex justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-sm">
                    Contact the Team
                  </Link>
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-bold text-slate-950">Need help improving your local visibility?</h2>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  We help businesses strengthen Google presence, improve local rankings, and convert local search traffic into real inquiries. Review our <Link href="/pricing" className="font-medium text-blue-600 hover:underline">pricing</Link> or <Link href="/contact" className="font-medium text-blue-600 hover:underline">contact us</Link> for a tailored recommendation.
                </p>
              </section>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-[2rem] bg-gradient-to-br from-blue-950 via-sky-900 to-blue-700 p-8 text-center text-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.65)] relative overflow-hidden">
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


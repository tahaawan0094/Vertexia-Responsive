import type { Metadata } from "next";
import Link from "next/link";
import { Poppins } from "next/font/google";
import FooterLinksSection from "@/components/sections/FooterLinksSection";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "5 Signs Your Website Is Losing You Customers (And How to Fix Them)",
  description:
    "Is your website quietly turning visitors away? Here are 5 warning signs your site is costing you customers — and what to do about each one.",
  alternates: {
    canonical: "https://www.vertexiaagency.com/blogs/website-losing-customers-signs",
  },
  openGraph: {
    title: "5 Signs Your Website Is Losing You Customers (And How to Fix Them)",
    description:
      "Is your website quietly turning visitors away? Here are 5 warning signs your site is costing you customers — and what to do about each one.",
    images: ["/Blog images/5-Signs-Your-Website-Is-Losing-You-Customers.webp"],
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "slow-load", label: "Slow Load Times" },
  { id: "mobile-usability", label: "Mobile Usability" },
  { id: "trust-signals", label: "Trust Signals" },
  { id: "clear-action", label: "Clear Next Steps" },
  { id: "google-visibility", label: "Google Visibility" },
  { id: "easy-to-miss", label: "Why These Signs Are Easy to Miss" },
  { id: "how-many-apply", label: "How Many Apply?" },
  { id: "faq", label: "FAQs" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const faqItems = [
  {
    question: "How do I know if my website is actually losing customers?",
    answer:
      "Use real visitor data from analytics, search visibility reports, and a mobile test. High bounce rates, low time on page, and poor local search visibility are strong signs that visitors are leaving before converting.",
  },
  {
    question: "Can an older website still perform well?",
    answer:
      "Yes. Not every issue requires a full redesign. Some problems can be fixed with targeted updates like improving calls-to-action, trust signals, or technical performance.",
  },
  {
    question: "Is it possible to rank on Google and still lose customers?",
    answer:
      "Absolutely. Visibility is one thing and conversion is another. A site can rank well but still lose visitors if it is slow, hard to use, or fails to build trust.",
  },
  {
    question: "How often should I check my website for these issues?",
    answer:
      "A general check every few months is wise, and a deeper review after any redesign, traffic drop, or if you haven’t audited your site in over a year.",
  },
  {
    question: "What should I fix first if my website has multiple problems?",
    answer:
      "Start with the issue costing the most visitors right now, usually speed or mobile usability, because they affect every visitor before anything else matters.",
  },
];

export default function WebsiteLosingCustomersSigns() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vertexiaagency.com/" },
      { "@type": "ListItem", position: 2, name: "Blogs", item: "https://www.vertexiaagency.com/blogs" },
      {
        "@type": "ListItem",
        position: 3,
        name: "5 Signs Your Website Is Losing You Customers",
        item: "https://www.vertexiaagency.com/blogs/website-losing-customers-signs",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "5 Signs Your Website Is Losing You Customers (And How to Fix Them)",
    description:
      "Is your website quietly turning visitors away? Here are 5 warning signs your site is costing you customers — and what to do about each one.",
    author: { "@type": "Person", name: "Taha Awan", url: "https://www.vertexiaagency.com/leadership" },
    publisher: {
      "@type": "Organization",
      name: "Vertexia",
      logo: { "@type": "ImageObject", url: "https://www.vertexiaagency.com/new-header-logo.png" },
    },
    datePublished: "2026-07-13",
    dateModified: "2026-07-13",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.vertexiaagency.com/blogs/website-losing-customers-signs",
    },
    image: ["https://www.vertexiaagency.com/Blog images/5-Signs-Your-Website-Is-Losing-You-Customers.webp"],
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
              5 Signs Your Website Is Losing You Customers
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              A website can look fine to the owner and still be quietly turning visitors away. These five warning signs often cost businesses customers without any dramatic failure.
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
                  src="/Blog images/5-Signs-Your-Website-Is-Losing-You-Customers.webp"
                  alt="Website losing customers" 
                  className="mx-auto block w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <section id="introduction" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Introduction</h2>
                <p className="text-base leading-7 text-slate-700">
                  In fifteen years of auditing websites, I have heard the same story over and over: “Our website looks fine, but we’re just not getting the leads we expected.” The truth is that a website can seem okay to the owner and still be quietly pushing customers away.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  This post walks through the five warning signs I see most often — the issues that don’t always look like “problems” on the surface, but are consistently costing businesses real customers.
                </p>
              </section>

              <section id="slow-load" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>1. Your Website Takes Too Long to Load</h2>
                <p className="text-base leading-7 text-slate-700">
                  This is the most common issue I find, and it is often invisible to the owner because they are testing on fast office WiFi rather than the 4G connection a real customer may use.
                </p>
                <p className="text-base leading-7 text-slate-700 font-semibold">Why this costs you customers:</p>
                <p className="text-base leading-7 text-slate-700">
                  Visitors don’t wait around. A blank or half-loaded screen is enough for someone to go back to search results and click the next business instead.
                </p>
                <ul className="list-inside list-disc space-y-2 text-slate-700">
                  <li>Images that take several seconds to appear</li>
                  <li>A homepage that feels sluggish to scroll or interact with, especially on mobile</li>
                  <li>High bounce rate and low average time on page in analytics</li>
                </ul>
                <p className="text-base leading-7 text-slate-700 font-semibold">What to do about it:</p>
                <p className="text-base leading-7 text-slate-700">
                  Compress and properly size images, remove unnecessary scripts, and test actual load time with PageSpeed Insights instead of relying on how fast it feels to you.
                </p>
              </section>

              <section id="mobile-usability" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>2. Your Website Doesn't Work Properly on Mobile</h2>
                <p className="text-base leading-7 text-slate-700">
                  Most local searches happen on a phone, often when someone is ready to act. If your site is difficult to use on a small screen, you lose that visitor at the moment they were closest to becoming a customer.
                </p>
                <p className="text-base leading-7 text-slate-700 font-semibold">Why this costs you customers:</p>
                <p className="text-base leading-7 text-slate-700">
                  A visitor who must pinch, zoom, or hunt for your phone number will usually go back to search results and try a competitor whose site works properly.
                </p>
                <ul className="list-inside list-disc space-y-2 text-slate-700">
                  <li>Text that is too small to read without zooming</li>
                  <li>Buttons or menu items that are hard to tap accurately</li>
                  <li>A phone number that isn't clickable</li>
                  <li>Forms that are frustrating or lengthy on a touchscreen</li>
                </ul>
                <p className="text-base leading-7 text-slate-700 font-semibold">What to do about it:</p>
                <p className="text-base leading-7 text-slate-700">
                  Test your website on a real phone using mobile data and use it from start to finish. Notice every point of friction and prioritize the experience that makes you hesitate.
                </p>
              </section>

              <section id="trust-signals" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>3. Your Website Is Missing Basic Trust Signals</h2>
                <p className="text-base leading-7 text-slate-700">
                  Even if your site loads fast and works on mobile, visitors still need to know whether they can trust your business. Without clear trust signals, hesitant visitors leave without a word.
                </p>
                <p className="text-base leading-7 text-slate-700 font-semibold">Why this costs you customers:</p>
                <p className="text-base leading-7 text-slate-700">
                  People are less likely to reach out if they are unsure whether your business is real, competent, or active.
                </p>
                <ul className="list-inside list-disc space-y-2 text-slate-700">
                  <li>No visible reviews, testimonials, or client examples</li>
                  <li>No clear business story, team information, or address</li>
                  <li>Generic stock photography that feels interchangeable</li>
                  <li>No certifications, credentials, or examples of past work</li>
                  <li>Outdated design that suggests the business itself may be outdated</li>
                </ul>
                <p className="text-base leading-7 text-slate-700 font-semibold">What to do about it:</p>
                <p className="text-base leading-7 text-slate-700">
                  Add genuine reviews and testimonials, show real photos of your team or work, and make contact information easy to find instead of hiding it in a footer.
                </p>
              </section>

              <section id="clear-action" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>4. Visitors Don't Know What to Do Next</h2>
                <p className="text-base leading-7 text-slate-700">
                  This is less a technical flaw and more a communication failure. A website can be fast, mobile-friendly, and polished, and still fail because it never clearly tells visitors what action to take.
                </p>
                <p className="text-base leading-7 text-slate-700 font-semibold">Why this costs you customers:</p>
                <p className="text-base leading-7 text-slate-700">
                  A confused visitor usually leaves rather than hunt for the right next step.
                </p>
                <ul className="list-inside list-disc space-y-2 text-slate-700">
                  <li>No clear call-to-action on the homepage</li>
                  <li>Multiple competing actions with no priority</li>
                  <li>Contact page present but hard to find</li>
                  <li>Vague language like “Learn More” instead of “Get a Free Quote”</li>
                </ul>
                <p className="text-base leading-7 text-slate-700 font-semibold">What to do about it:</p>
                <p className="text-base leading-7 text-slate-700">
                  Choose one primary action and make it obvious — a clear button repeated at key points with direct language instead of generic phrasing.
                </p>
              </section>

              <section id="google-visibility" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>5. Your Website Isn't Showing Up on Google in the First Place</h2>
                <p className="text-base leading-7 text-slate-700">
                  The earlier signs assume visitors already reached your site. For many businesses, the real problem is that potential customers never find the website at all.
                </p>
                <p className="text-base leading-7 text-slate-700 font-semibold">Why this costs you customers:</p>
                <p className="text-base leading-7 text-slate-700">
                  This is the most expensive version of the problem: you never see the customer because the website was never found.
                </p>
                <ul className="list-inside list-disc space-y-2 text-slate-700">
                  <li>Your business doesn't appear when you search your own services plus your city</li>
                  <li>Your Google Business Profile is unclaimed, incomplete, or inconsistent</li>
                  <li>Your site has never been submitted to Google Search Console</li>
                  <li>Competitors with weaker offerings outrank you</li>
                </ul>
                <p className="text-base leading-7 text-slate-700 font-semibold">What to do about it:</p>
                <p className="text-base leading-7 text-slate-700">
                  Claim and complete your Google Business Profile, set up Search Console, and submit a sitemap so Google can find and index your pages. Then build visibility over time through ongoing SEO work.
                </p>
              </section>

              <section id="easy-to-miss" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Why These Signs Are Easy to Miss From the Inside</h2>
                <p className="text-base leading-7 text-slate-700">
                  Business owners are rarely the best people to catch these issues. Familiarity with your own site leads you to unconsciously fill in gaps that a first-time visitor cannot.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  That’s why a fresh, outside evaluation — someone reviewing your website like a real customer would — often reveals problems that have been quietly costing leads for months or years.
                </p>
              </section>

              <section id="how-many-apply" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>How Many of These Apply to Your Website?</h2>
                <p className="text-base leading-7 text-slate-700">
                  If even two or three of these signs sound familiar, take it seriously. This is not a criticism — it is a fixable gap between the quality of what you offer and how well your website currently represents it.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  None of these issues are unusual, and none require starting over from scratch. They require a clear, honest look at what is happening and focused fixes in the right order.
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

              <section id="final-thoughts" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Final Thoughts</h2>
                <p className="text-base leading-7 text-slate-700">
                  Websites rarely lose customers through one dramatic failure. It is almost always a combination of small frictions — speed, mobile experience, trust, clarity, or visibility — that quietly push visitors away.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  The good news is that every one of these signs is fixable. A faster, clearer, more trustworthy website not only converts better — it also tends to rank better, creating a positive cycle instead of a leak.
                </p>
              </section>

              <section className="rounded-3xl bg-gradient-to-br from-blue-950 via-sky-900 to-blue-700 p-8 text-center text-white shadow-xl">
                <h3 className="text-2xl font-bold">Want a website audit that spots the issues costing you customers?</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100/90">
                  Vertexia offers a practical audit that reviews speed, mobile experience, trust, clarity, and Google visibility with a clear plan to fix what’s losing you leads.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link href="/get-custom-website" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 shadow-sm">
                    Request a Website Audit
                  </Link>
                  <Link href="/contact" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                    Contact the Team
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
                <h2 className="text-xl font-bold text-slate-950">Need help choosing the right website direction?</h2>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  We build <Link href="/get-custom-website" className="text-blue-600 font-medium hover:underline">custom websites</Link>, <Link href="/get-wordpress-website" className="text-blue-600 font-medium hover:underline">WordPress websites</Link>, and can help you decide which path is best based on your goals. Review our <Link href="/pricing" className="text-blue-600 font-medium hover:underline">pricing</Link> or <Link href="/contact" className="text-blue-600 font-medium hover:underline">contact us</Link> for a tailored recommendation.
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

import type { Metadata } from "next";
import Link from "next/link";
import { Poppins } from "next/font/google";
import FooterLinksSection from "@/components/sections/FooterLinksSection";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Is Your Website Outdated? 7 Signs It's Time for a Redesign",
  description:
    "Not sure if your website needs a redesign or just a few fixes? Here are the clearest signs your website is outdated and costing you customers.",
  alternates: {
    canonical: "https://www.vertexiaagency.com/blogs/is-your-website-outdated-signs-time-for-redesign",
  },
  openGraph: {
    title: "Is Your Website Outdated? 7 Signs It's Time for a Redesign",
    description:
      "Not sure if your website needs a redesign or just a few fixes? Here are the clearest signs your website is outdated and costing you customers.",
    images: ["/Blog images/modern-responsive-website-design-for-businesses.webp"],
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "slow", label: "1. Slow and hard to speed up" },
  { id: "mobile", label: "2. Poor mobile experience" },
  { id: "maintenance", label: "3. Updates require a developer" },
  { id: "design", label: "4. Visual style looks dated" },
  { id: "leads", label: "5. It no longer generates leads" },
  { id: "trust", label: "6. Trust signals are missing" },
  { id: "seo", label: "7. Search visibility is slipping" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const faqItems = [
  {
    question: "How often should a business redesign its website?",
    answer:
      "There is no fixed timeline, but many businesses find they need a meaningful redesign every 3 to 5 years as technology, buyer expectations, and web standards evolve.",
  },
  {
    question: "Is a full redesign always more expensive than fixing a few issues?",
    answer:
      "Not always. A redesign can cost more upfront, but it often solves multiple problems at once and avoids repeated patchwork fixes on a limited platform.",
  },
  {
    question: "Can I keep my current content and just change the layout?",
    answer:
      "Usually yes. Many redesigns keep existing messaging while reorganizing content, refreshing visuals, and improving structure for better performance and conversions.",
  },
  {
    question: "What is the biggest risk of waiting too long?",
    answer:
      "The biggest risk is usually a slow loss of leads and search visibility that is hard to notice day to day, but noticeable over months and years as competitors modernize.",
  },
];

export default function IsYourWebsiteOutdatedBlogPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vertexiaagency.com/" },
      { "@type": "ListItem", position: 2, name: "Blogs", item: "https://www.vertexiaagency.com/blogs" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Is Your Website Outdated? Signs It's Time for a Redesign",
        item: "https://www.vertexiaagency.com/blogs/is-your-website-outdated-signs-time-for-redesign",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Is Your Website Outdated? Signs It's Time for a Redesign",
    description:
      "Not sure if your website needs a redesign or just a few fixes? Here are the clearest signs your website is outdated and costing you customers.",
    author: { "@type": "Person", name: "Taha Awan", url: "https://www.vertexiaagency.com/leadership" },
    publisher: {
      "@type": "Organization",
      name: "Vertexia",
      logo: { "@type": "ImageObject", url: "https://www.vertexiaagency.com/new-header-logo.png" },
    },
    datePublished: "2026-07-16",
    dateModified: "2026-07-16",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.vertexiaagency.com/blogs/is-your-website-outdated-signs-time-for-redesign",
    },
    image: ["https://www.vertexiaagency.com/Blog images/modern-responsive-website-design-for-businesses.webp"],
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
              Is Your Website Outdated? Signs It&apos;s Time for a Redesign
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              A website rarely needs a full rebuild just because it looks old. The strongest warning signs are usually slow performance, poor mobile experience, maintenance friction, weak lead generation, missing trust signals, and declining search visibility.
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
                  src="/Blog images/modern-responsive-website-design-for-businesses.webp"
                  alt="A modern website redesign in progress"
                  className="mx-auto block w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <section id="introduction" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Introduction</h2>
                <p className="text-base leading-7 text-slate-700">
                  One of the most common questions business owners ask during a website review is simple: do we need a redesign, or can this just be repaired? The honest answer is that a full rebuild is only worth it when the problems are systemic rather than isolated.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  A visually dated website can still perform well, while a modern-looking one can quietly fail at the things that matter most. The strongest clues are usually beneath the surface, especially in speed, mobile experience, maintenance friction, lead generation, trust signals, and search visibility.
                </p>
              </section>

              <section id="slow" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>1. Your Website Is Slow, and It Is Not Getting Better</h2>
                <p className="text-base leading-7 text-slate-700">
                  Websites slow down over time as more content, media, plugins, and features accumulate. The difference between a normal optimization issue and a true redesign signal is whether performance improves after the usual fixes or remains poor on mobile and across the site.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  If image compression, plugin cleanup, and better hosting still leave the site noticeably slow, the platform itself may be the bottleneck. That is especially common on older WordPress setups that have been patched repeatedly for years.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  You can verify the problem with <a href="https://pagespeed.web.dev/" target="_blank" rel="noreferrer" className="text-[#FF5A4E] underline">Google PageSpeed Insights</a> and compare your performance against your competitors.
                </p>
              </section>

              <section id="mobile" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>2. It Does Not Work Well on Mobile Devices</h2>
                <p className="text-base leading-7 text-slate-700">
                  A site that was built primarily for desktop and then adjusted afterward often shows its age most clearly on phones. Small frustrations add up quickly: tiny text, hard-to-tap buttons, awkward layouts, and contact forms that feel clumsy on a touch screen.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  If your website feels clunky throughout a real mobile user journey — reading a service page, calling you, or filling a form — that is a strong signal the site was not built mobile-first and may need a more complete rebuild.
                </p>
              </section>

              <section id="maintenance" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>3. Making Simple Updates Feels Difficult or Requires a Developer for Everything</h2>
                <p className="text-base leading-7 text-slate-700">
                  Your website should be a practical tool for your business, not a bottleneck. If every minor update — changing a phone number, adding a service, publishing a blog post — requires a developer or a long wait, the site architecture may no longer fit your business needs.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  That is less about visual style and more about how the site is structured underneath. If maintenance is difficult across the board, a redesign may be the cleaner long-term solution.
                </p>
              </section>

              <section id="design" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>4. Your Design Looks Visibly Dated Compared to Competitors</h2>
                <p className="text-base leading-7 text-slate-700">
                  Visual style alone is rarely a reason to rebuild, but when fonts, layout patterns, imagery, and page structure all feel out of step with modern websites, visitors often absorb that signal even if they cannot explain why.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  Compare your website against credible competitors and modern sites in adjacent industries. If your site clearly feels behind, it can be worth considering alongside the other signs on this list rather than treating it as a standalone reason.
                </p>
              </section>

              <section id="leads" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>5. Your Website Is Not Built to Actually Generate Leads</h2>
                <p className="text-base leading-7 text-slate-700">
                  Many older websites were essentially built as digital business cards. If there are no clear calls-to-action, few paths to contact you, or little structure guiding visitors toward becoming a lead, the problem is likely strategic and built into the original site plan.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  In that case, small visual tweaks usually do not solve the issue. A redesign can be the point where the site is reorganized around real conversion goals rather than simple online presence.
                </p>
              </section>

              <section id="trust" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>6. You Are Missing Modern Trust and Credibility Elements</h2>
                <p className="text-base leading-7 text-slate-700">
                  Trust signals have changed over time. Reviews, testimonials, certifications, portfolio examples, clear company information, and team details are now expected by many visitors before they will reach out.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  If your business has grown and developed credibility since your site was last built but the site still lacks any suitable structure to show it, that is a strong sign the website has not kept pace with the business itself.
                </p>
              </section>

              <section id="seo" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>7. Your Website Is Not Getting Found on Google Anymore</h2>
                <p className="text-base leading-7 text-slate-700">
                  Sometimes a site that once performed reasonably well begins to lose visibility gradually. That is often not one dramatic event; it is a slow drop as competitors modernize and Google expects faster, more mobile-friendly, and more technically solid experiences.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  If your impressions or clicks have declined steadily while competitors invest in better digital experiences, the current platform is increasingly likely to be part of the problem.
                </p>
              </section>

              <section id="faq" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>FAQ</h2>
                <div className="space-y-4">
                  {faqItems.map((item) => (
                    <div key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                      <p className="mt-2 text-base leading-7 text-slate-700">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="final-thoughts" className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl shadow-slate-200/50">
                <h2 className={`${poppins.className} text-3xl font-semibold`}>Final Thoughts</h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  An outdated website rarely announces itself with one obvious failure. It usually shows up gradually through slower lead flow, weaker search performance, more friction on phones, and maintenance challenges that begin to shape the way your business operates.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  If you are unsure whether your site needs a redesign or targeted fixes, a proper website audit can turn guesswork into a clear plan based on actual performance, structure, and business impact.
                </p>
              </section>

              <section className="rounded-3xl bg-gradient-to-br from-blue-950 via-sky-900 to-blue-700 p-8 text-center text-white shadow-xl">
                <h3 className="text-2xl font-bold">Ready to choose the right website direction for your business?</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100/90">
                  Whether you need a redesign, a speed-focused rebuild, or a fresh conversion-first site, we can help you compare the right path forward.
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
                  <Link href="/contact" className="inline-flex justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-sm">
                    Contact the Team
                  </Link>
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-bold text-slate-950">Need help deciding if your site needs a redesign?</h2>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  We help businesses evaluate speed, mobile experience, conversion flow, and long-term maintenance so you can decide whether a targeted fix or a full rebuild is the smarter move. Review our <Link href="/pricing" className="font-medium text-blue-600 hover:underline">pricing</Link> or <Link href="/contact" className="font-medium text-blue-600 hover:underline">contact us</Link> for a tailored recommendation.
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

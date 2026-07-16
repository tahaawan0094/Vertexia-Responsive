import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "What Is SEO? A Simple Guide for Business Owners in Pakistan | Vertexia",
  description:
    "New to SEO? This simple guide explains what SEO is, how Google ranks websites, and why it matters for businesses in Pakistan â€” no technical jargon.",
  alternates: {
    canonical: "https://www.vertexiaagency.com/blogs/what-is-seo-simple-guide-business-owners-pakistan",
  },
  openGraph: {
    title: "What Is SEO? A Simple Guide for Business Owners in Pakistan | Vertexia",
    description:
      "New to SEO? This simple guide explains what SEO is, how Google ranks websites, and why it matters for businesses in Pakistan â€” no technical jargon.",
    images: ["/Blog images/what-is-seo.png"],
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "why-seo-matters", label: "Why SEO Matters" },
  { id: "how-google-ranks", label: "How Google Actually Decides" },
  { id: "three-pillars", label: "The Three Pillars of SEO" },
  { id: "technical-seo", label: "Technical SEO â€” The Foundation" },
  { id: "on-page-seo", label: "On-Page SEO â€” The Structure" },
  { id: "off-page-seo", label: "Off-Page SEO â€” The Reputation" },
  { id: "seo-vs-ads", label: "SEO vs Paid Ads" },
  { id: "common-myths", label: "Common SEO Myths" },
  { id: "local-seo", label: "Local SEO for Pakistan" },
  { id: "faq", label: "FAQs" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const faqItems = [
  {
    question: "How long does SEO actually take to work?",
    answer:
      "Most businesses start seeing meaningful movement within 3 to 6 months, depending on competition, website quality, and how consistently the work is done. Anyone promising instant results is likely using risky shortcuts.",
  },
  {
    question: "Do I need to keep paying for SEO forever?",
    answer:
      "Organic rankings do not disappear immediately after you stop paying, but SEO is not a one-time project. Search engines evolve, competitors improve, and your content needs periodic updates to stay relevant.",
  },
  {
    question: "Can I do SEO myself, or do I need an agency?",
    answer:
      "Basic improvements like better page titles and Google Business Profile setup can be done by business owners. Technical SEO, speed optimization, and schema implementation usually require development expertise.",
  },
  {
    question: "Does my website design affect my SEO?",
    answer:
      "Yes. Slow-loading pages, poor mobile layouts, and unstructured code hurt rankings. Modern websites built for speed and search visibility typically outperform generic templates.",
  },
  {
    question: "Is SEO worth it for a small business?",
    answer:
      "Often more than for large businesses. Local and niche businesses can compete for specific searches without massive budgets, making SEO a strong long-term channel.",
  },
];

export default function WhatIsSeoGuide() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vertexiaagency.com/" },
      { "@type": "ListItem", position: 2, name: "Blogs", item: "https://www.vertexiaagency.com/blogs" },
      {
        "@type": "ListItem",
        position: 3,
        name: "What Is SEO? A Simple Guide for Business Owners in Pakistan",
        item: "https://www.vertexiaagency.com/blogs/what-is-seo-simple-guide-business-owners-pakistan",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is SEO? A Simple Guide for Business Owners in Pakistan",
    description:
      "New to SEO? This simple guide explains what SEO is, how Google ranks websites, and why it matters for businesses in Pakistan â€” no technical jargon.",
    author: { "@type": "Person", name: "Taha Awan", url: "https://www.vertexiaagency.com/leadership" },
    publisher: {
      "@type": "Organization",
      name: "Vertexia",
      logo: { "@type": "ImageObject", url: "https://www.vertexiaagency.com/new-header-logo.png" },
    },
    datePublished: "2026-07-09",
    dateModified: "2026-07-09",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.vertexiaagency.com/blogs/what-is-seo-simple-guide-business-owners-pakistan" },
    image: ["https://www.vertexiaagency.com/Blog images/what-is-seo.png"],
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
              What Is SEO? A Simple Guide for Business Owners in Pakistan
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              If you own a business in Pakistan and you&apos;ve ever Googled your own company name only to find your competitor&apos;s website showing up first, you already understand why SEO matters â€” even if you don&apos;t know exactly what it means yet.
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
                  src="/Blog images/what-is-seo.png"
                  alt="SEO discovery"
                  className="mx-auto block w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <section id="introduction" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Introduction</h2>
                <p className="text-base leading-7 text-slate-700">
                  SEO stands for Search Engine Optimization. In simple words, it&apos;s the process of making your website easy for Google to find, understand, and trust â€” so that when someone searches for what you offer, your business shows up on the first page instead of page five, where nobody ever scrolls.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  This guide breaks down what SEO actually is, how it works, and why it matters for businesses in Pakistan specifically â€” without the technical jargon that usually makes this topic more confusing than it needs to be.
                </p>
              </section>

              <section id="why-seo-matters" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Why SEO Matters More Than You Think</h2>
                <p className="text-base leading-7 text-slate-700">
                  Here&apos;s a simple fact: most people never scroll past the first page of Google. Studies consistently show that the top 3 search results get the majority of all clicks, and anything past page one might as well not exist.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  Now think about your own business. If someone in Karachi searches for "manufacturing company near me," "best real estate agency in DHA," or "garment exporter Pakistan," and your website doesn&apos;t appear â€” that customer just went to a competitor. Not because your business is worse. Simply because Google couldn&apos;t find you, or didn&apos;t trust your website enough to recommend it.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  This is the gap SEO fills. It&apos;s not about tricking Google. It&apos;s about making your website deserve to be found â€” through speed, structure, trust, and relevant content.
                </p>
              </section>

              <section id="how-google-ranks" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>How Google Actually Decides Who Ranks First</h2>
                <p className="text-base leading-7 text-slate-700">
                  Google&apos;s job is to give searchers the most useful, trustworthy, and relevant answer to their question. To do that, it uses automated programs called "crawlers" that scan websites and evaluate hundreds of factors. While the exact formula is Google&apos;s closely guarded secret, the major factors are well understood:
                </p>
                <ol className="list-inside list-decimal space-y-2 text-slate-700 pl-4">
                  <li>Relevance â€” Does your website actually answer what the person searched for?</li>
                  <li>Website Speed â€” Slow websites frustrate users, and Google notices when visitors leave quickly.</li>
                  <li>Mobile-Friendliness â€” Since most searches now happen on phones, Google prioritizes websites that work well on mobile screens.</li>
                  <li>Technical Health â€” Can Google&apos;s crawlers easily read and understand your website&apos;s structure?</li>
                  <li>Trust Signals â€” Does your website look professional, secure, and credible?</li>
                  <li>Content Quality â€” Is your content genuinely useful, or just filler text stuffed with keywords?</li>
                </ol>
                <p className="text-base leading-7 text-slate-700">
                  Understanding these factors is the first step. Acting on them is where SEO actually happens.
                </p>
              </section>

              <section id="three-pillars" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>The Three Pillars of SEO</h2>
                <p className="text-base leading-7 text-slate-700">
                  To keep things simple, SEO can be broken down into three core areas. Think of these as the foundation, the structure, and the reputation of your website.
                </p>

                <div className="space-y-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-2xl font-semibold text-slate-950">1. Technical SEO â€” The Foundation</h3>
                  <p className="text-base leading-7 text-slate-700">
                    This is the behind-the-scenes work that makes sure Google can actually access and understand your website. Most business owners never see this part, but it&apos;s arguably the most important.
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-slate-700 pl-4">
                    <li>Website speed â€” how fast your pages load</li>
                    <li>Mobile responsiveness â€” whether your site works properly on phones and tablets</li>
                    <li>Sitemaps â€” a file that tells Google exactly which pages exist on your website</li>
                    <li>Search Console setup â€” a free Google tool that shows how your site performs in search</li>
                    <li>Indexing â€” making sure Google has actually "seen" and stored your pages</li>
                    <li>Schema markup â€” extra code that helps Google understand what your business does, so it can show rich results like star ratings or business hours directly in search</li>
                  </ul>
                  <p className="text-base leading-7 text-slate-700">
                    Here&apos;s the problem: most cheap, template-based websites completely ignore this layer. A website can look beautiful and still be invisible to Google because the technical foundation was never built correctly.
                  </p>
                </div>

                <div className="space-y-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-2xl font-semibold text-slate-950">2. On-Page SEO â€” The Structure</h3>
                  <p className="text-base leading-7 text-slate-700">
                    This is about how well each individual page on your website is set up to be understood by both Google and your visitors.
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-slate-700 pl-4">
                    <li>Page titles and meta descriptions â€” the blue clickable headline and short description that show up in search results</li>
                    <li>Headings (H1, H2, H3) â€” structuring your content so it&apos;s easy to scan and understand</li>
                    <li>Keyword usage â€” naturally including the words and phrases your customers are actually searching for</li>
                    <li>Internal linking â€” connecting related pages on your website so both users and Google can navigate easily</li>
                    <li>Image optimization â€” making sure images load fast and have descriptive alt text</li>
                  </ul>
                  <p className="text-base leading-7 text-slate-700">
                    On-page SEO is where your content and your technical foundation meet. You can have the fastest website in Pakistan, but if your pages don&apos;t clearly communicate what you offer, you&apos;ll still struggle to rank.
                  </p>
                </div>

                <div className="space-y-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-2xl font-semibold text-slate-950">3. Off-Page SEO â€” The Reputation</h3>
                  <p className="text-base leading-7 text-slate-700">
                    This is everything that happens outside your website that signals to Google that your business is credible and trustworthy.
                  </p>
                  <p className="text-base leading-7 text-slate-700">
                    The most well-known part of this is backlinks â€” when other reputable websites link back to yours. Think of it as a vote of confidence: the more quality websites that reference you, the more Google trusts that you&apos;re a legitimate authority in your industry.
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-slate-700 pl-4">
                    <li>Being listed correctly on Google Business Profile</li>
                    <li>Getting mentioned in local business directories</li>
                    <li>Customer reviews on Google and other platforms</li>
                    <li>Social proof and brand mentions</li>
                  </ul>
                  <p className="text-base leading-7 text-slate-700">
                    For local businesses in Pakistan, this is especially powerful. A manufacturing company with strong local citations and consistent business information across the web will often outrank a bigger competitor with a messier online presence.
                  </p>
                </div>
              </section>

              <section id="seo-vs-ads" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>SEO vs Paid Ads â€” What&apos;s the Real Difference?</h2>
                <p className="text-base leading-7 text-slate-700">
                  A lot of business owners ask whether they should just run Google or Facebook ads instead of investing in SEO. It&apos;s a fair question, so here&apos;s the honest comparison:
                </p>
                <p className="text-base leading-7 text-slate-700">
                  Paid Ads get you instant visibility, but the moment you stop paying, your traffic disappears. It&apos;s rented attention â€” you&apos;re borrowing space at the top of the page, and every click costs you money, whether or not that visitor becomes a customer.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  SEO takes longer to show results â€” typically a few months of consistent work â€” but once your website starts ranking organically, that traffic keeps coming in without an ongoing cost per click. It&apos;s not rented space; it&apos;s a long-term asset you own.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  The smartest businesses don&apos;t choose one over the other completely â€” but if you&apos;re building a long-term brand rather than chasing quick wins, SEO is where the real, compounding value lies.
                </p>
              </section>

              <section id="common-myths" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Common SEO Myths That Waste Business Owners&apos; Time and Money</h2>
                <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-950">"I just need more keywords on my page."</h3>
                  <p className="text-base leading-7 text-slate-700">
                    Keyword stuffing was an outdated tactic from over a decade ago. Today, Google&apos;s algorithms are sophisticated enough to penalize this approach. What matters now is genuinely useful, well-structured content.
                  </p>
                </div>
                <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-950">"SEO is a one-time task."</h3>
                  <p className="text-base leading-7 text-slate-700">
                    SEO isn&apos;t something you do once and forget. Search algorithms evolve, competitors improve their websites, and your content needs periodic updates to stay relevant.
                  </p>
                </div>
                <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-950">"Any website builder is SEO-friendly."</h3>
                  <p className="text-base leading-7 text-slate-700">
                    Many template-based platforms come with bloated code, slow loading speeds, and limited technical flexibility â€” all of which hurt SEO performance. This is one of the core reasons custom-built websites using modern frameworks like Next.js tend to significantly outperform generic WordPress or drag-and-drop websites in both speed and search rankings.
                  </p>
                </div>
                <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-950">"SEO results happen overnight."</h3>
                  <p className="text-base leading-7 text-slate-700">
                    Real, sustainable SEO growth typically takes a few months to show meaningful results. Anyone promising instant page-one rankings is likely using risky shortcuts that can get your website penalized later.
                  </p>
                </div>
              </section>

              <section id="local-seo" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>How Local SEO Changes the Game for Pakistani Businesses</h2>
                <p className="text-base leading-7 text-slate-700">
                  If your business primarily serves customers within a specific city or region, general SEO advice only gets you halfway there. Local SEO is the more specific discipline of ranking for searches that include a location, or searches Google assumes are local based on the searcher&apos;s device.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  For example, someone searching "real estate agency DHA Karachi" or "manufacturing supplier Sialkot" is showing strong buying intent tied to a specific place. Ranking for these searches often matters more to your bottom line than ranking for broad national keywords.
                </p>
                <ul className="list-inside list-disc space-y-2 text-slate-700 pl-4">
                  <li>Google Business Profile â€” a free, verified listing that shows your business on Google Maps and in local search results.</li>
                  <li>Consistent business information (NAP) â€” your Name, Address, and Phone number should match exactly across your website, Google listing, and any directories.</li>
                  <li>Location-specific content â€” mention the cities and regions you serve rather than vague generic language.</li>
                  <li>Reviews â€” genuine customer reviews on Google build trust and support rankings.</li>
                </ul>
                <p className="text-base leading-7 text-slate-700">
                  For businesses that operate internationally, like garment exporters, the strategy shifts slightly â€” local SEO matters less, and content built around international buyer intent, industry certifications, and export credibility becomes far more important.
                </p>
              </section>

              <section id="faq" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Frequently Asked Questions About SEO</h2>
                <div className="space-y-6">
                  {faqItems.map((item) => (
                    <div key={item.question} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-slate-950">{item.question}</h3>
                      <p className="mt-3 text-base leading-7 text-slate-700">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="final-thoughts" className="space-y-5">
                <h2 className={`${poppins.className} text-3xl font-semibold text-slate-950`}>Final Thoughts</h2>
                <p className="text-base leading-7 text-slate-700">
                  SEO isn&apos;t magic, and it isn&apos;t a one-time fix. It&apos;s an ongoing investment in making your website genuinely deserving of being found â€” through speed, structure, and trust.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  For businesses in Pakistan competing in increasingly crowded markets, this is no longer optional. It&apos;s the difference between being the business customers find first, or the one they never knew existed.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  At Vertexia, we build custom websites using modern technologies like Next.js and React specifically designed with these SEO fundamentals in mind â€” not bolted on as an afterthought. If you&apos;d like to know exactly where your current website stands, we offer a professional website audit that breaks down your speed, SEO health, and growth opportunities in plain, non-technical language.
                </p>
                <p className="text-base leading-7 text-slate-700">
                  Ready to see where your website stands? Get in touch with Vertexia for a free website audit today.
                </p>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-xl shadow-slate-200/60">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Estimated Read Time</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">9 minutes</p>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  A beginner-friendly guide that explains SEO in clear terms for Pakistani business owners.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </>
  );
}


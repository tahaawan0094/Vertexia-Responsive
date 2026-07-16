import type { Metadata } from "next";
import Link from "next/link";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import PageTransition from "@/components/animations/PageTransition";
import PersonSchema from "@/components/schema/PersonSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Meet the Leadership Behind Vertexia | Web Development Agency",
  description:
    "Meet the leadership team behind Vertexia, a Karachi-based web development agency specializing in custom websites, WordPress development, ecommerce solutions, and SEO services.",
  alternates: {
    canonical: "https://www.vertexiaagency.com/leadership",
  },
  openGraph: {
    title: "Meet the Leadership Behind Vertexia | Web Development Agency",
    description:
      "Meet the leadership team behind Vertexia, a Karachi-based web development agency specializing in custom websites, WordPress development, ecommerce solutions, and SEO services.",
    url: "https://www.vertexiaagency.com/leadership",
    type: "website",
    siteName: "Vertexia",
  },
};

export default function FounderPage() {
  const leadershipSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.vertexiaagency.com/#taha-awan",
        "name": "Taha Awan",
        "jobTitle": "Founder",
        "worksFor": {
          "@id": "https://www.vertexiaagency.com/#organization"
        },
        "url": "https://www.vertexiaagency.com/leadership",
        "image": "https://www.vertexiaagency.com/About-Us/founder-taha-awan.webp",
        "sameAs": [
          "https://www.linkedin.com/in/vertexia-io-b03923410/",
          "https://www.facebook.com/profile.php?id=61589778596884",
          "https://www.instagram.com/vertexia.io/",
          "https://x.com/vertexiadev"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.vertexiaagency.com/#muhammad-ammar",
        "name": "Muhammad Ammar",
        "jobTitle": "Chief Executive Officer (CEO)",
        "worksFor": {
          "@id": "https://www.vertexiaagency.com/#organization"
        },
        "url": "https://www.vertexiaagency.com/leadership",
        "image": "https://www.vertexiaagency.com/About-Us/co-founder-aamar.webp"
      }
    ]
  };

  return (
    <PageTransition>
      <PersonSchema />
      <BreadcrumbSchema pathname="/leadership" title="Leadership" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(leadershipSchema),
        }}
      />
      <main className="site bg-black text-white font-body">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-24 md:py-36 bg-[radial-gradient(80%_120%_at_50%_-10%,rgba(255,90,78,0.18)_0%,rgba(58,69,255,0.1)_50%,rgba(0,0,0,0)_100%)]">
          <div className="relative mx-auto max-w-[1200px] text-center">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.35em] text-[#FF5A4E] font-accent mb-4 block">
              Our Leadership
            </span>
            <h1 className="text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-tight mb-6 tracking-tight font-display text-white">
              Meet the Leadership Behind Vertexia
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-[800px] mx-auto leading-relaxed font-accent">
              At Vertexia, we believe great digital products are built through strong leadership, technical expertise, and a commitment to helping businesses grow online. Our leadership team combines strategic thinking, modern development practices, and client-focused execution to deliver websites that create real business value.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-[1000px] space-y-24">
            
            {/* Taha Awan Section */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-[#FF5A4E]/30 transition-all duration-300 backdrop-blur-sm shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] gap-8 md:gap-12 items-start">
                {/* Profile Image container */}
                <div className="w-[180px] h-[220px] md:w-full md:h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-inner group relative mx-auto md:mx-0 bg-neutral-900">
                  <img
                    src="/About-Us/founder-taha-awan.webp"
                    alt="Taha Awan - Founder of Vertexia"
                    title="Taha Awan"
                    className="w-full h-full object-cover object-[15%_center] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-xs text-white/80 font-accent">Taha Awan</span>
                  </div>
                </div>
                
                {/* Profile Content */}
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-[#FF5A4E] font-accent">Founder of Vertexia</span>
                    <h2 className="text-3xl font-bold font-display text-white mt-1">Hi, I'm Taha Awan</h2>
                  </div>

                  <div className="space-y-4 text-white/80 leading-relaxed text-base md:text-lg">
                    <p>
                      I founded Vertexia with a simple mission: to help businesses build modern, high-performing websites that don't just look great but also generate measurable business results.
                    </p>
                    <p>
                      Based in Karachi, Pakistan, Vertexia specializes in custom website development, React development, Next.js applications, WordPress websites, ecommerce solutions, and SEO-driven web experiences. Every project is designed with performance, scalability, and long-term growth in mind.
                    </p>
                  </div>

                  {/* Why I Started Vertexia */}
                  <div className="mt-2">
                    <h3 className="text-xl font-bold font-display text-white mb-4">Why I Started Vertexia</h3>
                    <p className="text-white/70 mb-4 text-sm md:text-base">
                      Many businesses struggle with slow-loading websites, outdated designs, and platforms that limit their growth. Vertexia was created to solve those problems by building websites that are:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base">
                      {[
                        "Fast and optimized for performance",
                        "Mobile-friendly on every device",
                        "Built using modern technologies",
                        "SEO-ready from day one",
                        "Secure, scalable, and easy to maintain",
                        "Designed to support long-term growth"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF5A4E]/10 flex items-center justify-center text-[#FF5A4E] text-xs font-bold mt-0.5">âœ“</span>
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* My Expertise */}
                  <div className="mt-2">
                    <h3 className="text-xl font-bold font-display text-white mb-4">His Focus</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base">
                      {[
                        "Vision & Company Growth",
                        "Business Development",
                        "Client Success & Long-Term Partnerships",
                        "Innovation & Digital Strategy",
                        "Brand Development"
                      ].map((skill) => (
                        <li key={skill} className="flex items-start gap-2.5">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF5A4E]/10 flex items-center justify-center text-[#FF5A4E] text-xs font-bold mt-0.5">âœ“</span>
                          <span className="text-white/80">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Muhammad Ammar Section */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-[#3a45ff]/30 transition-all duration-300 backdrop-blur-sm shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] gap-8 md:gap-12 items-start">
                {/* Profile Image container */}
                <div className="w-[180px] h-[220px] md:w-full md:h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-inner group relative mx-auto md:mx-0 bg-neutral-900">
                  <img
                    src="/About-Us/co-founder-aamar.webp"
                    alt="Muhammad Ammar - Chief Executive Officer (CEO)"
                    title="Muhammad Ammar"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-xs text-white/80 font-accent">Muhammad Ammar</span>
                  </div>
                </div>
                
                {/* Profile Content */}
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-[#3a45ff] font-accent">Chief Executive Officer (CEO), Vertexia</span>
                    <h2 className="text-3xl font-bold font-display text-white mt-1">Muhammad Ammar</h2>
                  </div>

                  <div className="space-y-4 text-white/80 leading-relaxed text-base md:text-lg">
                    <p>
                      Muhammad Ammar leads the operational and business side of Vertexia, ensuring every project is delivered with professionalism, clear communication, and a strong focus on client success.
                    </p>
                    <p>
                      As CEO, he oversees business operations, project management, client relationships, and company growth. His leadership helps maintain the high standards that Vertexia is known for while ensuring every client receives a smooth and transparent experience from consultation to project completion.
                    </p>
                    <p>
                      Muhammad Ammar works closely with the development team to make sure every project aligns with the client's business goals, timelines, and expectations.
                    </p>
                  </div>

                  {/* His focus includes */}
                  <div className="mt-2">
                    <h3 className="text-xl font-bold font-display text-white mb-4">His Focus Areas</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base">
                      {[
                        "Client Success & Relationship Management",
                        "Business Strategy & Growth",
                        "Project Planning & Delivery",
                        "Team Leadership",
                        "Quality Assurance",
                        "Operational Excellence"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#3a45ff]/10 flex items-center justify-center text-[#3a45ff] text-xs font-bold mt-0.5">âœ“</span>
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* About Vertexia & Vision Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
              <div className="lg:col-span-6 space-y-8">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-[#FF5A4E] font-accent">Agency Profile</span>
                  <h2 className="text-3xl md:text-4xl font-bold font-display text-white mt-1">About Vertexia</h2>
                  <p className="mt-4 text-white/80 leading-relaxed text-base md:text-lg font-accent">
                    Vertexia is a web development agency based in Karachi, Pakistan, serving businesses locally and internationally.
                  </p>
                  <p className="mt-4 text-white/80 leading-relaxed text-base md:text-lg font-accent">
                    We specialize in creating modern, fast, and SEO-friendly websites that help companies strengthen their online presence and generate new opportunities.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-[#FF5A4E]/10 to-transparent border-l-2 border-[#FF5A4E] rounded-r-2xl">
                  <h3 className="text-xl font-bold font-display text-white mb-2">Our Vision</h3>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    Our vision is to become a trusted digital partner for startups, entrepreneurs, and growing businesses around the world. By combining innovative web technologies with proven SEO strategies, we aim to build websites that create lasting value and contribute to our clients' long-term success.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <h3 className="text-xl font-bold font-display text-white mb-6">Our Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Custom Website Development",
                    "React & Next.js Development",
                    "WordPress Website Development",
                    "Ecommerce Website Development",
                    "Landing Page Design",
                    "Website Redesign",
                    "Technical SEO",
                    "Website Speed Optimization",
                    "Responsive Web Design"
                  ].map((service) => (
                    <div key={service} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <span className="text-[#FF5A4E] font-bold text-sm">âœ“</span>
                        <span className="text-white/90 text-sm font-medium">{service}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-white/70 text-sm leading-relaxed font-accent">
                  Every website we build is designed with performance, user experience, scalability, and search engine visibility in mind.
                </p>
              </div>
            </div>

            {/* Connect Section */}
            <div className="bg-gradient-to-r from-[#FF5A4E]/10 via-[#3a45ff]/5 to-transparent rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl">
              <div className="max-w-[700px]">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#FF5A4E] font-accent">Get in Touch</span>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-white mt-1 mb-4">Connect With Our Team</h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed font-accent">
                  Whether you're launching a new business, redesigning an existing website, or looking to improve your online presence, we'd love to help.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 hover:bg-white/10 transition-all duration-200">
                    <div className="w-10 h-10 rounded-lg bg-[#FF5A4E]/15 flex items-center justify-center text-[#FF5A4E]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/50">Email Us</p>
                      <a href="mailto:reach.vertexia@gmail.com" className="text-white hover:text-[#FF5A4E] transition-colors font-medium text-sm md:text-base">
                        reach.vertexia@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 hover:bg-white/10 transition-all duration-200">
                    <div className="w-10 h-10 rounded-lg bg-[#3a45ff]/15 flex items-center justify-center text-[#3a45ff]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 0 1 8.716 6.747M12 3a9.003 9.003 0 0 0-8.716 6.747M12 9h.008v.008H12V9Zm3 0h.008v.008H15V9Zm-6 0h.008v.008H9V9ZM5.636 18.364a9 9 0 0 1 0-12.728m12.728 0a9 9 0 0 1 0 12.728" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/50">Visit Our Website</p>
                      <a href="https://www.vertexiaagency.com" className="text-white hover:text-[#3a45ff] transition-colors font-medium text-sm md:text-base" target="_blank" rel="noopener noreferrer">
                        vertexiaagency.com
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/contact">
                    <button className="bg-[#FF5A4E] hover:bg-[#ff4438] text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5A4E]/20 transform hover:-translate-y-0.5">
                      Get In Touch
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Author Box */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 font-display text-white">About the Leadership</h3>
              <div className="space-y-4 text-white/85 text-base md:text-lg leading-relaxed font-accent">
                <p>
                  <strong className="text-white">Taha Awan</strong> is the Founder of Vertexia and specializes in custom website development, React, Next.js, WordPress, ecommerce solutions, technical SEO, and high-performance web experiences.
                </p>
                <p>
                  <strong className="text-white">Muhammad Ammar</strong> serves as the Chief Executive Officer (CEO) of Vertexia, leading business operations, project delivery, client relationships, and strategic growth while ensuring every project meets the highest standards of quality and professionalism.
                </p>
                <p>
                  Together, they lead Vertexia with a shared mission of helping businesses build fast, modern, and results-driven websites that support long-term digital success.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FooterLinksSection />
      </main>
    </PageTransition>
  );
}


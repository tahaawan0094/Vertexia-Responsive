"use client";

import { motion } from "framer-motion";

const logos = [
  {
    name: "Entrepreneur",
    src: "/logos/65b935dbde54cfc9bbc79d31_logo-entrepeneur.png",
    className: "logo-entrepreneur"
  },
  {
    name: "BBC News",
    src: "/logos/65b935db616755e2ada9770e_logo-bbcnews.png",
    className: "logo-bbc"
  },
  {
    name: "The Telegraph",
    src: "/logos/65b935db02743b6b9206d166_logo-thetelegraph.png",
    className: "logo-thetelegraph"
  },
  {
    name: "Business Insider",
    src: "/logos/65b935db233f9838e4d844ad_logo-businessinsider.png",
    className: "logo-business"
  },
  {
    name: "Forbes",
    src: "/logos/65b935dbd242099be76e34b2_logo-forbes.png",
    className: "logo-forbes"
  },
  {
    name: "Markets Insider",
    src: "/logos/690e42af06af1d65c532dfbb_markets-insider-w.svg",
    className: "logo-markets"
  },
  {
    name: "Fortune",
    src: "/logos/690e42af98dd1ed4422ea1d7_fortune-w.svg",
    className: "logo-fortune"
  },
  {
    name: "USA Today",
    src: "/logos/694225b3caa0190fc7b3d9e3_usa-today.svg",
    className: "logo-usa"
  }
];

const didYouKnowCards = [
  {
    src: "/images%201/65df73f5d59ccfc4e532a7bd_Quote-1.webp",
    alt: "Testimonial from Joana B.",
    className:
      "justify-self-start -translate-y-2 max-[960px]:translate-y-0 max-[960px]:justify-self-center"
  },
  {
    src: "/images%201/65df73f5e51ac2b72aecb558_Quote-2.webp",
    alt: "Testimonial from Fred Z.",
    className: "translate-y-[110px] max-[960px]:translate-y-0"
  },
  {
    src: "/images%201/65df73f57cb49d72457d7c0e_Quote-3.webp",
    alt: "Testimonial from Troy M.",
    className:
      "justify-self-end translate-y-5 max-[960px]:translate-y-0 max-[960px]:justify-self-center"
  }
];

const marqueeLogos = [...logos, ...logos];

export default function ShowcaseSection({ hideImages }: { hideImages?: boolean }) {
  return (
    <section id="examples" className="relative overflow-visible pb-24 max-[640px]:pb-0 bg-[#060b1e]">
      
      {/* 
        🌟 SEAMLESS GLOW:
        Yahan glow point ko 'at_50%_0%' (bilkul seam ke center par) kar diya hai, 
        jis se yeh oopar aur neeche dono sections mein ek jaisa blend karega bina kisi line ke.
      */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(38,67,255,0.18),rgba(6,11,30,0)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-[68%] bottom-0 bg-[linear-gradient(180deg,rgba(2,4,15,0)_0%,rgba(1,2,10,0.82)_48%,#010207_100%)]"
        aria-hidden="true"
      />

      {/* 
        🌟 SEAMLESS BACKGROUND GRADIENT:
        Starts exactly with '#060b1e' (which matches Hero's bottom) and smoothly fades into pure black '#040404' 
      */}
      <div className="relative z-10 bg-gradient-to-b from-[#060b1e] via-[#040404] to-[#040404] pb-[120px] pt-[30px] max-[640px]:pt-[10px]">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          
          {/* Marquee Partner Logos */}
          <div>
            <div className="relative mb-14 overflow-hidden py-6 w-[140%] -ml-[20%]">
              <div className="relative overflow-hidden -mx-0">
                <motion.div
                  className="flex w-max items-center gap-4 px-0 sm:gap-6"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                >
                  {marqueeLogos.map((logo, index) => (
                    <div
                      key={`${logo.name}-${index}`}
                      className="flex h-20 min-w-[180px] items-center justify-center px-6"
                    >
                      {!hideImages ? (
                        <img
                          className="h-8 max-h-[26px] w-auto object-contain max-[640px]:max-h-[20px]"
                          src={logo.src}
                          alt={logo.name}
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                          {logo.name}
                        </span>
                      )}
                    </div>
                  ))}
                </motion.div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#060b1e] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#060b1e] to-transparent" />
              </div>
            </div>
          </div>

          {/* Core Quote */}
          <div>
            <blockquote className="mx-auto mb-9 max-w-[940px] font-accent text-[30px] font-normal leading-[42px] text-white max-[640px]:text-[22px] max-[640px]:leading-[32px]">
              &ldquo;Vertexia helps businesses grow online with professional web
              development services in Pakistan. Vertexia helps you generate more
              sales, bookings, and leads with a gorgeous website that&apos;s built for
              you at a reasonable price.{" "}
              {"\u2014"}{" "}
              <span className="box-decoration-clone inline border-l-4 border-[#FF5A4E] bg-[linear-gradient(-50deg,rgba(255,90,78,0)_22%,rgba(255,90,78,0.65))] px-2 text-white">
                just a product that works for you.
              </span>
              &rdquo;
            </blockquote>
            <div className="font-serif text-[1.1rem] text-white">
              Trusted Web Development Company in Karachi, Pakistan
            </div>
          </div>

          {/* Did You Know Section */}
          <div className="relative pt-[180px] text-center text-white max-[640px]:pt-[60px]">
            <div>
              <p className="mb-6 text-[0.8rem] uppercase tracking-[0.3em] text-white/60">
                DID YOU KNOW?
              </p>
              <h2 className="mx-auto mb-7 max-w-[980px] text-[clamp(2.2rem,4.2vw,3.6rem)] font-medium leading-tight">
                <span className="font-semibold text-[#2d6bff]">2 out of 3</span>{" "}
                small business owners don&apos;t have a website or don&apos;t like the
                one they do have.
              </h2>
              <div className="mb-10 flex justify-center max-[640px]:hidden">
                {!hideImages && (
                  <img
                    className="h-auto w-[120px]"
                    src="/images%201/65c388735d187a04baf6553a_why-script.svg"
                    alt=""
                    loading="lazy"
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 items-center justify-items-center gap-10 max-[960px]:grid-cols-2 max-[640px]:hidden">
              {didYouKnowCards.map((card) => (
                <div key={card.src}>
                  {!hideImages && (
                    <img
                      className={`w-full max-w-[600px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] ${card.className}`}
                      src={card.src}
                      alt={card.alt}
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>

            {!hideImages && (
              <img
                className="pointer-events-none absolute bottom-[-200px] left-[18%] w-[160px] opacity-90 max-[960px]:left-[8%] max-[960px]:w-[120px] max-[640px]:hidden"
                src="/images%201/65b95f22abefc846c3b38bf1_white-bottom-arrow.svg"
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
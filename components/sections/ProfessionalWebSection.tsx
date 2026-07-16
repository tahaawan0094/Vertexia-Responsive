"use client";

import FadeIn from "@/components/animations/FadeIn";

export default function ProfessionalWebSectionCopy({
    centered = false,
}: {
    centered?: boolean;
}) {
    return (
        <section
            className="relative overflow-hidden px-6 pb-16 pt-20 text-white"
            style={{
                 background: "linear-gradient(120deg, #1338be 0%, #1a6bff 45%, #00c2e0 100%)",
            }}
        >
            <style>{`
        @keyframes pro-shine {
          0%   { transform: translateX(-130%) skewX(-20deg); }
          100% { transform: translateX(230%) skewX(-20deg); }
        }
        .pro-shine-sweep {
          animation: pro-shine 3.6s ease-in-out infinite;
        }
      `}</style>

            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 65% 90% at 92% 50%, rgba(16,185,129,0.45) 0%, transparent 65%)",
                }}
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 45% 70% at 4% 55%, rgba(5,150,105,0.38) 0%, transparent 65%)",
                }}
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 55% 50% at 48% 0%, rgba(255,255,255,0.10) 0%, transparent 70%)",
                }}
                aria-hidden="true"
            />

            <div
                aria-hidden="true"
                className="pro-shine-sweep pointer-events-none absolute inset-y-0 left-0 w-[30%]"
                style={{
                    background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 45%, rgba(255,255,255,0.24) 55%, transparent 100%)",
                }}
            />

            <FadeIn>
                <div
                    className={`relative mx-auto flex max-w-[1200px] flex-col items-center justify-center text-center max-[960px]:gap-8 max-[960px]:px-4`}
                >
                    <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
                        <h2
                            className={`font-body font-medium tracking-[-0.02em]
              ${centered
                                    ? "text-center text-[56px] leading-[1.15]"
                                    : "text-[56px] leading-[73px]"
                                }
              max-[960px]:text-[46px]
              max-[960px]:leading-[60px]
              max-[640px]:text-[34px]
              max-[640px]:leading-[44px]
              max-[420px]:text-[28px]
              max-[420px]:leading-[36px]`}
                        >
                            <span className={`block ${centered ? "md:whitespace-nowrap" : ""}`}>
                Professional website done for you.
              </span>

              <span className="block">
                7-day turnaround.
              </span>

            </h2>

            {/* PARAGRAPH */}
            <p
              className={`mt-6 font-accent text-white/90
              ${
                centered
                  ? "max-w-[720px] text-center text-[24px] leading-[1.4]"
                  : "max-w-[520px] text-[24px] leading-[31px]"
              }
              max-[960px]:text-[20px]
              max-[960px]:leading-[28px]
              max-[640px]:text-[16px]
              max-[640px]:leading-[22px]`}
            >
              Completely zero-risk. Unmatched customer service.
            </p>


                        <a
                            href="/pricing"
                            className={`mt-10 inline-flex rounded-[12px] bg-[#FF5A4E] text-base font-medium text-white shadow-[0_12px_26px_rgba(255,90,78,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(255,90,78,0.45)]
              ${centered
                                    ? "items-center justify-center px-10 py-4"
                                    : "px-10 py-4"
                                }
              max-[640px]:w-full
              max-[640px]:max-w-[320px]
              max-[640px]:px-12
              max-[640px]:py-5
              max-[640px]:text-lg`}
                        >
                            Get Started
                        </a>
                    </div>

                </div>
            </FadeIn>
        </section>
    );
}

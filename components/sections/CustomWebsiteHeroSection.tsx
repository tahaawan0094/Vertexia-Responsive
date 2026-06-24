import ShinyText from "@/components/ShinyText";

export default function CustomWebsiteHeroSection() {
  return (
    <section
      className="relative overflow-visible pb-4 pt-12 text-center px-4 max-[640px]:pb-6 max-[640px]:pt-10 max-[420px]:px-3"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[350px] bg-[linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(8,8,8,0)_100%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center justify-start gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <h1 className="text-balance mx-auto max-w-[960px] text-[110px] leading-[118px] font-medium tracking-[-0.03em] text-white/80 sm:text-[82px] sm:leading-[90px]">
          <span className="box-decoration-clone block whitespace-nowrap sm:inline-block sm:whitespace-normal border-l-4 border-[#8b5cf6] bg-[linear-gradient(-50deg,rgba(139,92,246,0)_22%,rgba(139,92,246,0.65))] px-2 py-2 text-white/90">
            <ShinyText speed={3.5} className="inline" baseColor="rgba(255,255,255,0.7)">Get a Custom</ShinyText>
          </span>
          <span className="block sm:inline">
            <ShinyText speed={3.5} className="inline">Website</ShinyText>
          </span>
          <span className="block max-w-[960px] mx-auto">
            <ShinyText speed={3.5} className="inline">Built for Performance & Scalability</ShinyText>
          </span>
        </h1>

        <div className="flex flex-wrap justify-center content-center text-center">
          {[ 
            "Domain & Email",
            "Hosting & Security",
            "Ready in Just 10 Days  ",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-3xl px-5 py-3 text-base font-semibold text-white/90 sm:px-6 sm:text-lg"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center">
                <img
                  src="/Pricing page  images/check icon.svg"
                  alt="Check icon"
                  className="h-6 w-6"
                />
              </span>
              <span className="whitespace-nowrap">{item}</span>
            </div>
          ))}
        </div>

        <a
          href="/pricing"
          className="inline-flex min-w-[220px] justify-center rounded-[16px] bg-[#ff5a4e] px-20 py-4 text-xl font-semibold text-white shadow-[0_20px_60px_rgba(255,90,78,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ff6f58] max-[640px]:min-w-[200px] max-[640px]:px-18 max-[640px]:py-5 max-[640px]:text-2xl"
        >
          Get 87% off
        </a>
      </div>
    </section>
  );
}

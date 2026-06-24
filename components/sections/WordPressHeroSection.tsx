import ShinyText from "@/components/ShinyText";

export default function WordPressHeroSection() {
  return (
    <section
      className="relative overflow-visible pb-4 pt-12 text-center px-4 max-[640px]:pb-0 max-[640px]:pt-10 max-[420px]:px-3"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[350px] bg-[linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(8,8,8,0)_100%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center justify-start gap-8 px-4 pt-10 pb-2 sm:px-6 sm:py-14 lg:px-8">
        <h1 className="mx-auto max-w-[1200px] text-[110px] leading-[118px] font-medium tracking-[-0.03em] text-white/80 sm:text-[82px] sm:leading-[90px]">
          <div>
            <span className="box-decoration-clone inline-block border-l-4 border-[#00b67a] bg-[linear-gradient(90deg,rgba(0,48,58,0.95)_0%,rgba(0,48,58,0)_100%)] px-2 py-2 text-white/90">
              <ShinyText speed={3.5} className="inline" baseColor="rgba(255,255,255,0.7)">
                Get Your Wordpress Website
              </ShinyText>
            </span>
          </div>

          <div className="mt-2">
            <ShinyText speed={3.5} className="inline">Built in Just 7 Days</ShinyText>
          </div>
        </h1>

        <div className="flex flex-wrap justify-center  text-left">
          {[
            "Domain",
            "Hosting",
            "Security",
            "0% Transaction Fees",
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

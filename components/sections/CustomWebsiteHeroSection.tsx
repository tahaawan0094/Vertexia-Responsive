export default function CustomWebsiteHeroSection() {
  return (
    <section
      className="relative overflow-visible pb-4 text-center px-4 max-[640px]:pb-6 max-[420px]:px-3 bg-[#060b1e]"
      style={{ paddingTop: "115px" }}
    >
      {/* Top Fade Gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[350px] bg-[linear-gradient(180deg,#060b1e_0%,rgba(6,11,30,0)_100%)] z-10"
        aria-hidden="true"
      />

      {/* 🌟 ULTRA BLEND BOTTOM GRADIENT (FIXED):
        Yeh solid black (#000000) ke bajaye page ke main deep dark background color 
        aur section color ke sath accurate proportions par blend hoga, jis se video ka cut-off khatam ho jayega.
      */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[320px] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 via-[#060b1e]/60 to-transparent z-10"
        aria-hidden="true"
      />

      {/* 🎬 Video Background Container */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-35"
        >
          <source src="/other-pages-video.mp4" type="video/mp4" />
        </video>
        
        {/* Soft Radial Mask */}
        <div 
          className="pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,11,30,0)_30%,#060b1e_100%)] opacity-70" 
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center justify-start gap-8 px-4 pt-2 pb-10 sm:px-6 sm:py-14 lg:px-8">
        <h1 className="text-balance mx-auto max-w-[960px] text-[110px] leading-[118px] font-medium tracking-[-0.03em] text-white/80 sm:text-[82px] sm:leading-[90px] max-[640px]:text-[clamp(2.2rem,7vw,3.2rem)] max-[640px]:leading-tight">
          <span className="box-decoration-clone block whitespace-nowrap sm:inline-block sm:whitespace-normal border-l-4 border-[#8b5cf6] bg-[linear-gradient(-50deg,rgba(139,92,246,0)_22%,rgba(139,92,246,0.65))] px-2 py-2 text-white/90">
            Get a Custom
          </span>{" "}
          <span className="block sm:inline">Website</span>{" "}
          <span className="block max-w-[960px] mx-auto">Built for Performance & Scalability</span>
        </h1>

        <div className="flex flex-wrap justify-center content-center text-center">
          {[
            "Domain & Email",
            "Hosting & Security",
            "Ready in Just 10 Days",
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
          className="inline-flex min-w-[220px] justify-center rounded-[16px] bg-[#ff5a4e] px-20 py-4 text-xl font-semibold text-white shadow-[0_20px_60px_rgba(255,90,78,0.35)] max-[640px]:min-w-[200px] max-[640px]:px-18 max-[640px]:py-5 max-[640px]:text-2xl"
        >
          Get 87% off
        </a>
      </div>
    </section>
  );
}
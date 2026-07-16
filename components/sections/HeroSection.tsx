import TrustedUsers from "@/components/TrustedUsers";

export default function HeroSection() {
  return (
    <section
      id="top"
      /* 
        FIX 1: Safe Tailwind classes (Removed responsive pt- classes to let style take over)
      */
      className="relative z-10 overflow-x-clip pb-8 text-center px-3 sm:px-4 sm:pb-7 bg-[#060b1e]"
      /* 
        FIX 2: Inline style for top spacing
      */
      style={{ paddingTop: "160px" }}
    >
      {/* Top Gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[350px] bg-[linear-gradient(180deg,#060b1e_0%,rgba(6,11,30,0)_100%)] z-10"
        aria-hidden="true"
      />

      {/* 
        🌟 PERFECT BALANCE BOTTOM GRADIENT:
        Height ko 250px kiya hai taake video bottom edge par transparently fade ho jaye, 
        lekin upar video bilkul saaf aur vibrant rahe.
      */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[250px] bg-gradient-to-t from-[#060b1e] via-[#060b1e]/80 to-transparent z-10"
        aria-hidden="true"
      />

      {/* Video Container */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-75" /* 🌟 Opacity barha kar 75% kar di taake colors pop karein */
        >
          <source src="/bg-video-vertexia.mp4" type="video/mp4" />
        </video>
        
        {/* 
          🌟 SOFT VIGNETTE MASK:
          Opacity ko 80% se kam kar ke 50% kar diya hai taake cyan patterns wash out na hon.
        */}
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,11,30,0)_40%,#060b1e_100%)] opacity-50" />
      </div>

      <div className="relative z-20 mx-auto max-w-[1280px] px-6 pointer-events-none">
        <div 
          className="pointer-events-auto mx-auto w-fit mb-8 text-xs sm:text-sm md:text-[16px] uppercase tracking-[0.16em] sm:tracking-[0.1em] text-white"
          style={{ marginTop: "15px" }}
        >
          STRUGGLING TO LAUNCH A WEBSITE YOU LOVE?
        </div>
        
        <h1 className="pointer-events-auto mx-auto w-fit mb-6 text-balance text-[72px] font-medium leading-[94px] text-white max-[960px]:text-[52px] max-[960px]:leading-[64px] max-[640px]:text-[clamp(2.5rem,8vw,3.2rem)] max-[640px]:leading-tight max-[420px]:text-[2rem] max-[420px]:leading-[2.4rem] max-[360px]:text-[1.8rem] max-[360px]:leading-[2.2rem]">
          We&apos;ll build your{" "}
          <span className="box-decoration-clone ml-2 inline-block border-l-4 border-[#2a27ff] bg-[linear-gradient(-50deg,rgba(58,41,209,0)_22%,rgba(58,41,209,0.6))] px-1 max-[420px]:border-l-0 max-[420px]:px-0 max-[420px]:bg-transparent">
            small business
          </span>{" "}
          <span className="box-decoration-clone inline-block border-l-4 border-[#2a27ff] bg-[linear-gradient(-50deg,rgba(58,41,209,0)_22%,rgba(58,41,209,0.6))] px-1 max-[420px]:border-l-0 max-[420px]:px-0 max-[420px]:bg-transparent">
            website
          </span>{" "}
          in 7 days for RS.22,000
        </h1>
        
        <p className="pointer-events-auto mx-auto w-fit mb-9 text-base sm:text-[1.1rem] text-white/70">
          Custom Website Development Agency in Pakistan
        </p>
        
        <div className="pointer-events-auto mb-10 flex flex-wrap items-center justify-center gap-6">
          <a
            href="/pricing"
            className="inline-block rounded-[10px] bg-[#FF5A4E] px-8 py-4 text-base font-semibold text-white shadow-[0_10px_30px_rgba(255,90,78,0.35)] max-[640px]:w-full max-[640px]:px-10 max-[640px]:py-5 max-[640px]:text-lg max-[420px]:px-6"
          >
            Get Started
          </a>
          <a
            className="relative font-medium text-white after:absolute after:left-0 after:right-0 after:top-full after:mt-1.5 after:h-[2px] after:bg-white/40 after:content-[''] max-[640px]:text-lg max-[420px]:text-sm"
            href="#"
          >
            Are our websites any good?
          </a>
        </div>
        
        <div className="pointer-events-auto mb-4">
          <TrustedUsers
            avatars={[
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&crop&w=100&q=80",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e/..photo"
            ]}
            rating={5}
            totalUsersText={7000}
            caption="Trusted by "
          />
        </div>
        
        <p className="pointer-events-auto mx-auto w-fit text-[0.7rem] sm:text-[0.85rem] uppercase tracking-[0.14em] sm:tracking-[0.22em] text-white/60">
          JOIN OUR COMMUNITY OF 7,000+ BUSINESS OWNERS
        </p>
      </div>
    </section>
  );
}
"use client";

import React from "react";

export default function ConciergeHeroSection() {
  return (
    <section className="relative overflow-visible pb-24 pt-16 text-center px-4 max-[640px]:pb-16 max-[640px]:pt-10 max-[420px]:px-3">
      {/* Background glow behind hero text */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[400px] bg-[linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(8,8,8,0)_100%)]"
        aria-hidden="true"
      />

    

      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center justify-start gap-8 px-4 pt-10 pb-2 sm:px-6 sm:py-14 lg:px-8">
        {/* Available Badge */}
        <span className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase">
          Available to Plus and Growth Members
        </span>

        {/* Hero Title */}
        <h1 className="mx-auto max-w-[1100px] text-[70px] leading-[80px] font-medium tracking-[-0.03em] text-white sm:text-[60px] sm:leading-[70px] max-[640px]:text-[38px] max-[640px]:leading-[46px]">
          Get the{"  "}
          <span className="box-decoration-clone inline-block border-l-4 border-[#8b5cf6] bg-[linear-gradient(-50deg,rgba(139,92,246,0)_22%,rgba(139,92,246,0.65))] px-3 py-1 text-white/90">
            VIP experience
          </span>{"  "}
          with our Concierge Service
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-[800px] text-lg text-white/70 leading-relaxed font-normal max-[640px]:text-base">
          We'll make your website even more beautiful, functional & professional.
          <br className="hidden sm:inline" /> You ask for it, we work on it.
        </p>

        {/* Action Button */}
        <a
          href="/pricing"
          id="cta-choose-plan"
          className="inline-flex min-w-[220px] justify-center rounded-[16px] bg-[#ff5a4e] px-16 py-4 text-lg font-semibold text-white shadow-[0_20px_50px_rgba(255,90,78,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#ff6f58] hover:shadow-[0_20px_50px_rgba(255,90,78,0.45)] max-[640px]:min-w-[180px] max-[640px]:px-12 max-[640px]:py-3 max-[640px]:text-base"
        >
          Choose a plan
        </a>

        {/* Layered Laptop/Browser Mockup Composition */}
        <div className="relative mt-20 w-full max-w-[1000px] mx-auto">
          {/* Ambient background glow specifically centering the laptop */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.22)_0%,rgba(139,92,246,0)_70%)] blur-[40px] z-0"
            aria-hidden="true"
          />

          {/* Browser frame and screen */}
          <div className="relative w-full aspect-[1231/741] z-10 rounded-2xl bg-[#0b0b0b] shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-visible">
            {/* Table-vertexia.svg holds browser frame */}
            <img
              src="/concierge services images/Table-vertexia.svg"
              alt="Browser Frame"
              className="absolute inset-0 w-full h-full object-fill pointer-events-none z-10"
            />

            {/* URL Bar Overlay */}
            <div className="absolute top-[2.8%] left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-1.5 bg-[#161619] border border-[#2f2f33] px-8 rounded-[6px] text-white/60 text-[11px] font-sans tracking-wide w-[28%] max-w-[340px] h-[4.8%] max-[640px]:hidden pointer-events-none">
              <svg className="w-2.5 h-2.5 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>milanajewelry.com</span>
            </div>

            {/* Inner web page content */}
            <div 
              className="absolute top-[14.2%] left-[0.25%] right-[0.25%] bottom-[0.25%] rounded-b-[18px] overflow-hidden z-20 bg-cover bg-top bg-no-repeat border-[50px] border-[#0B0B0B]"
              style={{ backgroundImage: "url('/concierge services images/concierge-services-vertexia.webp')" }}
            >
              <img
                src="/concierge services images/concierge-services-vertexia.webp"
                alt="Concierge Services Website Preview"
                className="w-full h-full object-cover object-top opacity-0"
              />
            </div>

            {/* Overlay 1: Floating pill gradient-lights.svg next to top left chrome dots */}
            <div className="absolute -left-[4%] top-[18%] w-[18%] min-w-[90px] z-30 transition  duration-300 animate-float-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
              <img
                src="/concierge services images/gradiet-lights.svg"
                alt="Color Selector"
                className="w-full h-auto"
              />
            </div>

            {/* Overlay 2: Floating card vertexia-concierge.webp (Suzan McKin portrait card) */}
            <div className="absolute -left-[8%] bottom-[5%] w-[22%] min-w-[110px] z-30 transition  duration-300 animate-float-1 drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
              <img
                src="/concierge services images/vertexia-concierge.webp"
                alt="Suzan McKin - Support Specialist"
                className="w-full h-auto rounded-[14px]"
              />
            </div>

            {/* Overlay 3: Floating card VERTEXIA.webp (Live Expert Card) */}
            <div className="absolute -right-[8%] bottom-[8%] w-[22%] min-w-[110px] z-30 transition  duration-300 animate-float-2 drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
              <div className="relative w-full h-full">
                {/* Micro-animation pulsing live indicator over the card */}
                <span className="absolute top-2 right-2 flex h-3.5 w-3.5 z-40">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
                </span>
                <img
                  src="/concierge services images/VERTEXIA.webp"
                  alt="Vertexia Support Expert"
                  className="w-full h-auto rounded-[14px]"
                />
              </div>
            </div>

            {/* Overlay 4: Floating publish btn.svg overlapping the right bezel */}
            <div className="absolute -right-[1%] top-[15%] w-[10%] min-w-[50px] z-30 transition  duration-300 animate-float-3 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
              <img
                src="/concierge services images/publish btn.svg"
                alt="Publish Button"
                className="w-full h-auto cursor-pointer"
              />
            </div>

            {/* Overlay 5: Floating typography selector table-box.svg bottom center */}
            <div className="absolute left-[38%] -bottom-[8%] w-[24%] min-w-[120px] z-30 transition  duration-300 animate-float-4 drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
              <img
                src="/concierge services images/table-box.svg"
                alt="Text Styling Toolbar"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

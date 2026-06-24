"use client";

import React from "react";

interface CardItem {
  title: string;
  imagePath: string;
}

interface SectionGroup {
  title: string;
  icon: React.ReactNode;
  items: CardItem[];
}

export default function RichMultimediaSection() {
  const groups: SectionGroup[] = [
    {
      title: "Photo & Video Galleries",
      icon: (
        <svg
          className="w-5 h-5 text-sky-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      ),
      items: [
        {
          title: "Photo sliders",
          imagePath: "/concierge services images/photo & gallery section/concierge-services-page.webp",
        },
        {
          title: "Advanced photo galleries",
          imagePath: "/concierge services images/photo & gallery section/premium-clients.webp",
        },
        {
          title: "Logo banners",
          imagePath: "/concierge services images/photo & gallery section/image-hotspot.webp",
        },
        {
          title: "Before & after sliders",
          imagePath: "/concierge services images/photo & gallery section/before-after.webp",
        },
      ],
    },
    {
      title: "Social Media Feeds",
      icon: (
        <svg
          className="w-5 h-5 text-amber-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      items: [
        {
          title: "TikTok feed",
          imagePath: "/concierge services images/social media feed section/tiktok-feed.webp",
        },
        {
          title: "Instagram feed",
          imagePath: "/concierge services images/social media feed section/instagram-feed.webp",
        },
        {
          title: "Facebook feed",
          imagePath: "/concierge services images/social media feed section/facebook-feed.webp",
        },
        {
          title: "YouTube shorts",
          imagePath: "/concierge services images/social media feed section/youtube-shorts.webp",
        },
      ],
    },
    {
      title: "Content",
      icon: (
        <svg
          className="w-5 h-5 text-emerald-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      ),
      items: [
        {
          title: "Search bar",
          imagePath: "/concierge services images/content section/search-bar.webp",
        },
        {
          title: "Customer surveys",
          imagePath: "/concierge services images/content section/customer-survey.webp",
        },
        {
          title: "Advanced menu formats",
          imagePath: "/concierge services images/content section/files-&-pdf.webp",
        },
        {
          title: "Data collection forms",
          imagePath: "/concierge services images/content section/FAQ-section.webp",
        },
      ],
    },
    {
      title: "Boost Sales",
      icon: (
        <svg
          className="w-5 h-5 text-purple-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      ),
      items: [
        {
          title: "Coupon pop-up",
          imagePath: "/concierge services images/boost sales section/coupon-pop-up.webp",
        },
        {
          title: "Countdown",
          imagePath: "/concierge services images/boost sales section/count-down.webp",
        },
      ],
    },
    {
      title: "Live Streaming",
      icon: (
        <svg
          className="w-5 h-5 text-rose-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h14.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      ),
      items: [
        {
          title: "Audio player",
          imagePath: "/concierge services images/live streaming section/audio-player.webp",
        },
        {
          title: "Podcast player",
          imagePath: "/concierge services images/live streaming section/podcastplayer.webp",
        },
      ],
    },
  ];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-[#040404] relative z-10 overflow-hidden">
      {/* Decorative glows */}
      <div
        className="pointer-events-none absolute right-[-10%] bottom-[15%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15)_0%,rgba(124,58,237,0)_70%)] blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[-10%] top-[30%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,159,122,0.06)_0%,rgba(16,159,122,0)_70%)] blur-[80px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1200px]">
        {/* Main Section Heading */}
        <div className="text-center mb-24">
          <p className="text-[20px] font-bold tracking-[0.25em] text-[#a855f7] uppercase mb-4">
            Add Rich Multimedia
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.15]">
            We will make your website{" "}
            <br className="max-sm:inline hidden" />
            <span className="inline-block border-l-4 border-[#109f7a] bg-[linear-gradient(-50deg,rgba(11,77,58,0)_22%,rgba(16,115,87,0.55))] px-3 py-1 text-white">
              come to life
            </span>
          </h2>
        </div>

        {/* List of Groups */}
        <div className="flex flex-col gap-24">
          {groups.map((group, groupIdx) => (
            <div key={groupIdx} className="w-full">
              {/* Group Heading */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 shadow-inner">
                  {group.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
                  {group.title}
                </h3>
              </div>

              {/* Thin Divider Line */}
              <div className="w-full h-[1px] bg-white/10 mb-8" />

              {/* Grid of Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group cursor-pointer flex flex-col">
                    {/* Image Wrapper with Hover Effects */}
                    <div className="w-full overflow-hidden rounded-[20px] aspect-[16/10] bg-[#111115] border border-white/5 shadow-[0_15px_45px_rgba(0,0,0,0.6)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-white/15 group-hover:shadow-[0_20px_50px_rgba(109,40,217,0.15)]">
                      <img
                        src={item.imagePath}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>

                    {/* Label below the image */}
                    <span className="text-white/80 text-[15px] font-medium tracking-wide mt-4 ml-1 transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

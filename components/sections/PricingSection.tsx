"use client";

import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import ShinyText from "@/components/ShinyText";
import { CountUp } from "@/components/CountUp";
import { useState } from "react";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly" | "two-year">("monthly");

  const plans = [
    {
      name: "Growth",
      icon: "/Pricing page  images/card-icon-1.svg",
      badge: "BEST VALUE",
      accent: "from-[#2563eb] to-[#3b82f6]",
      featured: false,
      price: 22500,
      oldPrice: 180000,
      savings: "Save Rs 54,000 with yearly billing →",
      description: "We grow your business online",
      features: [
        "Dedicated VIP Growth Team",
        "Marketing plan for your business",
        "1-on-1 monthly marketing sessions",
        "Marketing advice: email, social media, online ads, SEO, reputation, and more",
        "2,000 words of fresh content created for you",
      ],
    },
    {
      name: "Plus",
      icon: "/Pricing page  images/card-icon-2.svg",
      badge: "MOST POPULAR",
      accent: "from-[#ff5a4e] to-[#ff7a63]",
      featured: true,
      price: 12600,
      oldPrice: 160000,
      savings: "Save Rs 105,900 with two yearly billing →",
      description: "We manage your online presence",
      features: [
        "4 email addresses",
        "Advanced SEO to rank on Google",
        "Unlimited done-for-you edits",
        "Integrations to convert visitors into customers",
        "Promote your products on Google, Facebook & Instagram",
        "VIP phone support",
      ],
    },
    {
      name: "Website Launch",
      icon: "/Pricing page  images/card-icon-3.svg",
      badge: "LAUNCH READY",
      accent: "from-[#10b981] to-[#34d399]",
      featured: false,
      price: 3640,
      oldPrice: 160000,
      savings: "Save Rs 10,320 with yearly billing →",
      description: "We build launch your website",
      features: [
        "Built-for-you website / online store",
        "Personalized design",
        "Fast loading to rank on Google",
        "Ready in 7 days",
        "Custom domain name or connect one you already have",
        "Professional email address",
        "Easy-to-use editor",
        "0% fees on sales & bookings",
        "1-to-1 launch & training call",
        "Secure hosting & SSL certificate",
        "30-Day Money-back Guarantee",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-visible flex flex-col items-center justify-center pt-24 pb-24 px-4 text-center max-[640px]:pb-16 max-[640px]:pt-20"
    >
      {/* Background gradient matching hero section */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[400px] bg-[linear-gradient(180deg,rgba(0,0,0,0.95)_0%,rgba(8,8,8,0)_100%)]"
        aria-hidden="true"
      />

      <StaggerContainer className="relative z-10 mx-auto max-w-[1280px] px-2 sm:px-6">
        {/* Header Label */}
        <StaggerItem>
          <p className="mb-6 text-[14px] uppercase tracking-[0.15em] text-white/70 max-[640px]:text-[0.75rem]">
            Vertexia WEBSITE PRICING
          </p>
        </StaggerItem>

        {/* Main Heading */}
        <StaggerItem>
          <h1 className="mb-8 text-balance text-[72px] font-medium leading-[90px] text-white max-[960px]:text-[56px] max-[960px]:leading-[68px] max-[640px]:text-[clamp(2.5rem,8vw,3.2rem)] max-[640px]:leading-tight">
            <ShinyText speed={3.5} className="inline">Launch, Manage & Grow Your Business Online</ShinyText>
          </h1>
        </StaggerItem>

        {/* Benefits Row */}
        <StaggerItem>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 max-[640px]:flex-col max-[640px]:items-center max-[640px]:gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/Pricing page  images/check icon.svg"
                alt="Check"
                className="h-6 w-6 flex-shrink-0"
              />
              <span className="text-white text-[16px] md:text-[17px] font-medium">Done for you service</span>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/Pricing page  images/check icon.svg"
                alt="Check"
                className="h-6 w-6 flex-shrink-0"
              />
              <span className="text-white text-[16px] md:text-[17px] font-medium">5-star support</span>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/Pricing page  images/check icon.svg"
                alt="Check"
                className="h-6 w-6 flex-shrink-0"
              />
              <span className="text-white text-[16px] md:text-[17px] font-medium">No hidden costs</span>
            </div>
          </div>
        </StaggerItem>

        {/* Pricing Toggle with "2 months free" label */}
        <StaggerItem>
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-6">
              <img
                src="/Pricing page  images/2-months-free.svg"
                alt="2 months free"
                className="mx-auto h-12 w-auto mb-2"
              />
              <svg
                className="mx-auto h-6 w-6 text-[#00b67a] animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            <div className="inline-flex rounded-lg border border-white/20 bg-white/5 backdrop-blur-md p-1 sm:p-1.5 flex-wrap gap-1">
              {(["monthly", "yearly", "two-year"] as const).map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={`px-4 sm:px-8 py-2.5 sm:py-3 rounded-md transition-all font-semibold whitespace-nowrap text-sm sm:text-base ${
                    billingCycle === cycle
                      ? "bg-[#0066FF] text-white shadow-lg shadow-[#0066FF]/30"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {cycle === "two-year" ? "Two-year" : cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </StaggerItem>

        {/* Pricing Cards */}
        <StaggerItem>
          <div className="mx-auto mt-8 grid w-full grid-cols-1 gap-4 sm:mt-16 sm:gap-6 md:max-w-6xl md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/95 ${plan.name === "Growth" ? "p-8 min-h-[700px]" : "p-8"} text-left shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all max-[640px]:p-4 ${
                  plan.featured
                    ? "scale-[1.02] border-[#ff5a4e]/40 bg-gradient-to-br from-white via-white to-[#fff7f5] ring-2 ring-[#ff5a4e]/30"
                    : "hover:bg-white"
                }`}
              >
                <div className={`absolute left-1/2 top-0 -translate-x-1/2 rounded-b-2xl px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] shadow-lg ${plan.featured ? "bg-[#ff5a4e] text-white" : "bg-slate-900 text-white"}`}>
                  {plan.badge}
                </div>

                <div className={plan.name === "Growth" ? "mb-2 flex flex-col items-center text-center" : "mb-6 flex flex-col items-center text-center"}>
                  <div className={`mb-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.accent} p-3 text-white shadow-lg`}>
                    <img src={plan.icon} alt={plan.name} className="h-8 w-8" />
                  </div>

                  <div className="space-y-[-4px]">
                    <h3 className="text-2xl font-bold text-black">{plan.name}</h3>
                    <p className="text-sm text-gray-600">{plan.description}</p>
                  </div>
                  {plan.name === "Growth" && (
                    <img src="/logos/header-logo.png" alt="Vertexia logo" className="mt-0 h-7 w-auto" />
                  )}
                </div>

                <div className="mb-3 flex items-end justify-center gap-2 text-center">
                  <span className="text-4xl font-black text-black">Pkr</span>
                  <CountUp value={plan.price} duration={1.4} className="text-4xl font-black leading-none text-black" />
                  <span className="mb-1 text-sm font-semibold text-gray-500">/Mo</span>
                </div>
                <p className="mb-1 text-center text-xs text-gray-500">billed annually</p>
                <p className="mb-3 text-center text-sm text-red-600 line-through">Pkr {plan.oldPrice.toLocaleString()}</p>

                <div className={plan.name === "Growth" ? "mb-4" : "mb-3"}>
                  <button className={`w-full rounded-2xl px-4 py-3 font-bold text-white transition-all hover:-translate-y-0.5 ${plan.featured ? "bg-[#ff5a4e] hover:bg-[#ff6d59]" : "bg-[#0066FF] hover:bg-[#0057d9]"}`}>
                    Contact Us
                  </button>
                </div>
                <p className={plan.name === "Growth" ? "mb-6 text-center text-xs text-gray-600" : "mb-4 text-center text-xs text-gray-600"}>{plan.savings}</p>

                <div className="mt-2 border-t border-gray-200 pt-3 text-left">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">Included features</p>
                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
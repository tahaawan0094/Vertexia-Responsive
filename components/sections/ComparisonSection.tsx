"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";

const withVertexia = [
  "Built-for-you website",
  "Ready in 7 days",
  "Design and copy",
  "0 transaction fees",
  "VIP support",
  "Domain & email included",
  "Easy-to-use editor",
  "30-day refund guarantee"
];

const withoutVertexia = [
  "DIY confusion",
  "Time wasting",
  "Hidden fees",
  "No customer service",
  "Weeks of effort",
  "Risk",
  "Big agency fees",
  "Giving up"
];

type IconProps = {
  className?: string;
};

const CheckIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const CrossIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

export default function ComparisonSection() {
  return (
    <motion.section
      className="relative bg-[#040404] px-6 pb-32 pt-24 text-white max-[640px]:pb-8 max-[640px]:pt-8"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(28,74,135,0.35)_0%,rgba(5,6,8,0.0)_58%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1200px]">
        <motion.p
          className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.45em] text-white/55"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Say goodbye to faulty DIY websites and expensive agencies
        </motion.p>
        <motion.h2
          className="mt-6 text-center text-[clamp(2.4rem,4.6vw,4.1rem)] font-medium leading-tight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Yes, you can afford a
          <span className="block">
            website{" "}
            <span className="box-decoration-clone inline-block border-l-4 border-[#FF5A4E] bg-[linear-gradient(-50deg,rgba(255,90,78,0)_22%,rgba(255,90,78,0.65))] px-2 text-white">
              built by pros
            </span>
          </span>
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-[820px] text-center text-lg text-white/55"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Websites designed for every purpose, to sell anything &amp; take bookings
        </motion.p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            className="animated-border"
            style={{ "--glow": "rgba(46, 204, 140, 0.95)" } as CSSProperties}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            whileHover={{ y: -6, scale: 1.01, boxShadow: "0 30px 70px rgba(0,0,0,0.55)" }}
          >
            <svg
              className="animated-border__svg"
              aria-hidden="true"
            >
              <rect
                className="animated-border__rect"
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="22"
                ry="22"
                pathLength="1000"
                strokeDasharray="110 890"
                strokeDashoffset="0"
                style={{ animation: "border-travel 3.5s linear infinite" }}
              />
            </svg>
            <div className="relative z-10 rounded-[22px] bg-[#0b0b0b] p-10 shadow-[0_26px_60px_rgba(0,0,0,0.45)]">
              <h3 className="text-center text-2xl font-semibold">
                Websites with Vertexia
              </h3>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {withVertexia.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3 text-white/80"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.35, delay: 0.05 * index }}
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-400/60 text-emerald-400">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="animated-border"
            style={{ "--glow": "rgba(244, 63, 94, 0.95)" } as CSSProperties}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            whileHover={{ y: -6, scale: 1.01, boxShadow: "0 30px 70px rgba(0,0,0,0.55)" }}
          >
            <svg
              className="animated-border__svg"
              aria-hidden="true"
            >
              <rect
                className="animated-border__rect"
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="22"
                ry="22"
                pathLength="1000"
                strokeDasharray="110 890"
                strokeDashoffset="0"
                style={{ animation: "border-travel 3.5s linear infinite" }}
              />
            </svg>
            <div className="relative z-10 rounded-[22px] bg-[#0b0b0b] p-10 shadow-[0_26px_60px_rgba(0,0,0,0.45)]">
              <h3 className="text-center text-2xl font-semibold">
                Websites without Vertexia
              </h3>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {withoutVertexia.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3 text-white/80"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.35, delay: 0.05 * index }}
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-rose-500/60 text-rose-400">
                      <CrossIcon className="h-4 w-4" />
                    </span>
                    <span className="text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="/pricing"
            className="inline-flex rounded-[12px] bg-[#FF5A4E] px-10 py-4 text-base font-medium text-white shadow-[0_12px_26px_rgba(255,90,78,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(255,90,78,0.45)] max-[640px]:px-12 max-[640px]:py-5 max-[640px]:text-lg max-[640px]:w-full max-[640px]:max-w-[320px]"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}


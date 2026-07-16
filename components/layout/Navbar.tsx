"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DropdownItem = {
  label: string;
  href: string;
  icon: string;
};

type NavLink = {
  label: string;
  href: string;
  hasCaret?: boolean;
  dropdown?: boolean;
  items?: DropdownItem[];
};

const navLinks: NavLink[] = [
  {
    label: "Services",
    href: "#services",
    hasCaret: true,
    dropdown: true,
    items: [
      {
        label: "Get a wordpress website",
        href: "/get-wordpress-website",
        icon: "globe",
      },
      {
        label: "Get custom website",
        href: "/get-custom-website",
        icon: "globe",
      },
      {
        label: "Concierge services",
        href: "/concierge-service",
        icon: "user-check",
      },
    ],
  },
  {
    label: "Our Customers",
    href: "#customers",
    hasCaret: true,
    dropdown: true,
    items: [
      {
        label: "Website examples",
        href: "/website-examples",
        icon: "layout",
      },
      {
        label: "Success stories",
        href: "#customers",
        icon: "star",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "#resources",
    hasCaret: true,
    dropdown: true,
    items: [
      {
        label: "Our Partners (Coming Soon)",
        href: "#partners",
        icon: "users",
      },
      {
        label: "FAQs",
        href: "/faqs",
        icon: "help",
      },
      {
        label: "About",
        href: "/about-us",
        icon: "info",
      },
      {
        label: "Vertexia blogs",
        href: "/blogs",
        icon: "book",
      },
    ],
  },
];

const Icon = ({ name }: { name: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    globe: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />,
    "user-check": (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </>
    ),
    layout: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </>
    ),
    star: (
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    ),
    users: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </>
    ),
    play: <polygon points="5 3 19 12 5 21 5 3" />,
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </>
    ),
    info: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </>
    ),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white/70"
    >
      {icons[name] || null}
    </svg>
  );
};

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    /* Removed 'site-navbar' class to avoid external CSS background color conflicts */
    <header className="fixed top-0 left-0 z-[9999] w-full px-4 pt-4 font-body sm:px-6 lg:px-8">
      {/* 
        PURE GLASS EFFECT APPLIED HERE:
        Changed bg to white/[0.03] so it has no solid color of its own. 
        It will perfectly adopt the background color of your hero section.
      */}
      <div className="mx-auto flex max-w-[1320px] items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl transition-all duration-300">
        <a href="/" className="flex items-center gap-3" aria-label="Vertexia">
          <img
            src="/vertexia-navbar-logo.svg"
            alt="Vertexia"
            className="block h-10 w-auto sm:h-12 lg:h-7"
          />
        </a>

        <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative py-2"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className="flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-white/95 transition hover:text-white"
              >
                <span>{link.label}</span>
                {link.hasCaret ? (
                  <span
                    className={`inline-block h-[5px] w-[5px] -translate-y-[1px] rotate-45 border-b-[1.5px] border-r-[1.5px] border-white/70 transition-transform duration-300 ${
                      activeDropdown === link.label ? "rotate-[225deg] translate-y-[1px]" : ""
                    }`}
                    aria-hidden="true"
                  />
                ) : null}
              </a>

              <AnimatePresence>
                {activeDropdown === link.label && link.dropdown && link.items && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 top-full w-[280px] -translate-x-1/2 pt-2"
                  >
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#060b1e]/95 p-2 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                      <div className="flex flex-col">
                        {link.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="group flex items-center gap-3 rounded-xl px-4 py-3 text-[1rem] font-medium text-white/90 transition hover:bg-white/5 hover:text-white"
                          >
                            <div className="transition-colors group-hover:text-white">
                              <Icon name={item.icon} />
                            </div>
                            <div className="flex items-center gap-2">
                              <span>{item.label.split(" (Coming")[0]}</span>
                              {item.label.includes("Coming Soon") && (
                                <span className="inline-block rounded-full bg-green-500 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-black">
                                  Coming Soon
                                </span>
                              )}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/923172981931"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider sm:text-sm">Contact Us</span>
          </a>

          {/* 
            NEW HAMBURGER MENU ICON:
            Replaced confusing lines with a standard, centered, crisp SVG icon.
          */}
          <button
            className="inline-flex p-1 text-white transition hover:text-white/70 lg:hidden"
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((state) => !state)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-[1320px] rounded-2xl border border-white/10 bg-[#060b1e]/95 p-3 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2 text-white">
              {navLinks.map((link) => (
                <div key={link.label} className="space-y-1">
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg bg-white/5 px-3 py-2 text-base font-medium text-white transition hover:bg-white/10"
                  >
                    {link.label}
                  </a>

                  {link.dropdown && link.items ? (
                    <div className="space-y-0 rounded-xl bg-white/5 px-2 py-1.5">
                      {link.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                        >
                          <Icon name={item.icon} />
                          <span>{item.label}</span>
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
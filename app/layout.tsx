import Script from "next/script";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat, Mulish, Poppins } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import Schema from "@/components/layout/Schema";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mulish"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat"
});


export const metadata: Metadata = {
  metadataBase: new URL("https://vertexiaagency.com"),
  title: "Vertexia - Web Development Agency",
  description: "Vertexia provides professional web development services. We build custom websites, ecommerce stores, and SEO-optimized digital solutions for growing businesses.",
  verification: {
    other: {
      "msvalidate.01": "F4CD489E24C62041B4283F0DB9C6E22C",
    },
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/favicon_io/apple-touch-icon.png",
    other: {
      rel: "manifest",
      url: "/favicon_io/site.webmanifest"
    }
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${mulish.variable} ${montserrat.variable} min-h-screen overflow-x-hidden bg-[#040404] font-body text-white antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1R8JGMKESY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-1R8JGMKESY');
  `}
        </Script>
        <Schema />
        {children}
      </body>
    </html>
  );
}


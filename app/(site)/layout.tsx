import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import VexaBot from "@/components/layout/VexaBot";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(70%_120%_at_50%_-10%,rgba(7,15,62,0.75)_0%,rgba(7,15,62,0.2)_58%,rgba(7,15,62,0)_100%),radial-gradient(68%_58%_at_50%_62%,rgba(10,37,232,0.2)_0%,rgba(10,37,232,0)_74%),linear-gradient(180deg,#010419_0%,#02092f_38%,#030f5c_62%,#02062e_84%,#01010b_100%)]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <VexaBot />
    </div>
  );
}

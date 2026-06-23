import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import VexaBot from "@/components/layout/VexaBot";

export default function ConciergeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(160%_90%_at_50%_55%,rgba(255,80,50,0.92)_0%,rgba(255,60,30,0.5)_45%,rgba(255,50,20,0)_75%),radial-gradient(180%_60%_at_50%_35%,rgba(255,90,55,0.5)_0%,rgba(255,70,40,0)_70%),linear-gradient(180deg,#100101_0%,#300505_20%,#8c1a0e_45%,#ff4422_65%,#cc2200_85%,#0b0101_100%)]">
      <main className="flex-1">{children}</main>
      <Footer />
      <VexaBot />
    </div>
  );
}

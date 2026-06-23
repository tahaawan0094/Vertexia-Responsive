import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import VexaBot from "@/components/layout/VexaBot";

export default function ConciergeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(70%_120%_at_50%_-10%,rgba(223,70,44,0.35)_0%,rgba(223,70,44,0)_62%),radial-gradient(68%_58%_at_50%_62%,rgba(223,70,44,0.55)_0%,rgba(223,70,44,0)_72%),linear-gradient(180deg,#4b0202_0%,#570310_42%,#e80a0a_62%,#540505_82%,#0b0101_100%)]">
      <main className="flex-1">{children}</main>
      <Footer />
      <VexaBot />
    </div>
  );
}

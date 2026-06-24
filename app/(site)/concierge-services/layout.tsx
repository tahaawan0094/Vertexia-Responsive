import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import VexaBot from "@/components/layout/VexaBot";

export default function ConciergeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(160%_90%_at_50%_55%,rgba(15,133,100,0.92)_0%,rgba(11,100,75,0.5)_45%,rgba(11,77,58,0)_75%),radial-gradient(180%_60%_at_50%_35%,rgba(22,154,116,0.5)_0%,rgba(11,77,58,0)_70%),linear-gradient(180deg,#010d0a_0%,#05241b_20%,#074d39_45%,#0b4d3a_65%,#0c6a50_85%,#010d0a_100%)]">
      <main className="flex-1">{children}</main>
      <VexaBot />
    </div>
  );
}

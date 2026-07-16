import { redirect } from "next/navigation";
import PersonSchema from "@/components/schema/PersonSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export default function FounderRedirectPage() {
  redirect("/leadership");
  return (
    <>
      <PersonSchema />
      <BreadcrumbSchema pathname="/founder" title="Founder" />
    </>
  );
}

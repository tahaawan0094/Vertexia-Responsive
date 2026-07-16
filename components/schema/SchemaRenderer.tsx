import React from "react";
import OrganizationSchema from "@/components/schema/OrganizationSchema";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import WebsiteSchema from "@/components/schema/WebsiteSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BlogPostingSchema from "@/components/schema/BlogPostingSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import PersonSchema from "@/components/schema/PersonSchema";
import AboutPageSchema from "@/components/schema/AboutPageSchema";
import ContactPageSchema from "@/components/schema/ContactPageSchema";
import CollectionPageSchema from "@/components/schema/CollectionPageSchema";
import WebPageSchema from "@/components/schema/WebPageSchema";

export type SchemaRendererProps = {
  pathName?: string;
  pageType?: "home" | "about" | "founder" | "leadership" | "contact" | "pricing" | "service" | "blog" | "blogListing" | "collection" | "policy" | "thankyou" | "article" | "webpage";
  title?: string;
  description?: string;
  url?: string;
  service?: {
    title: string;
    description: string;
    url: string;
    offers?: Record<string, unknown>;
    serviceType?: string;
    provider?: Record<string, unknown>;
  };
  faqItems?: Array<{ question: string; answer: string }>;
  blog?: {
    headline?: string;
    description?: string;
    url?: string;
    image?: string;
    datePublished?: string;
    dateModified?: string;
  };
  breadcrumbTitle?: string;
};

export default function SchemaRenderer({
  pathName = "/",
  pageType = "home",
  title,
  description,
  url,
  service,
  faqItems = [],
  blog,
  breadcrumbTitle,
}: SchemaRendererProps) {
  const normalizedPath = pathName.split("?")[0].split("#")[0] || "/";
  const currentUrl = url || `https://www.vertexiaagency.com${normalizedPath}`;

  return (
    <>
      {pageType === "home" && (
        <>
          <OrganizationSchema />
          <LocalBusinessSchema />
          <WebsiteSchema />
          <WebPageSchema title={title || "Vertexia - Web Development Agency"} description={description || "Vertexia provides professional web development services."} url={currentUrl} />
        </>
      )}

      {pageType === "about" && (
        <>
          <AboutPageSchema title={title} description={description} url={currentUrl} />
          <BreadcrumbSchema pathname={normalizedPath} title={breadcrumbTitle} />
          <WebPageSchema title={title || "About Vertexia"} description={description || "Learn about Vertexia."} url={currentUrl} />
        </>
      )}

      {pageType === "founder" && (
        <>
          <PersonSchema />
          <WebPageSchema title={title || "Founder"} description={description || "Founder page"} url={currentUrl} />
          <BreadcrumbSchema pathname={normalizedPath} title={breadcrumbTitle} />
        </>
      )}

      {pageType === "leadership" && (
        <>
          <CollectionPageSchema title={title || "Leadership"} description={description || "Leadership team"} url={currentUrl} />
          <BreadcrumbSchema pathname={normalizedPath} title={breadcrumbTitle} />
        </>
      )}

      {pageType === "contact" && (
        <>
          <ContactPageSchema title={title} description={description} url={currentUrl} />
          <LocalBusinessSchema />
          <BreadcrumbSchema pathname={normalizedPath} title={breadcrumbTitle} />
        </>
      )}

      {pageType === "pricing" && (
        <>
          {service && <ServiceSchema title={service.title} description={service.description} url={service.url} offers={service.offers} serviceType={service.serviceType} provider={service.provider} />}
          {faqItems.length > 0 && <FAQSchema items={faqItems} />}
          <BreadcrumbSchema pathname={normalizedPath} title={breadcrumbTitle} />
        </>
      )}

      {pageType === "service" && (
        <>
          {service && <ServiceSchema title={service.title} description={service.description} url={service.url} offers={service.offers} serviceType={service.serviceType} provider={service.provider} />}
          {faqItems.length > 0 && <FAQSchema items={faqItems} />}
          <BreadcrumbSchema pathname={normalizedPath} title={breadcrumbTitle} />
        </>
      )}

      {pageType === "blogListing" && (
        <>
          <CollectionPageSchema title={title || "Blogs"} description={description || "Vertexia blog articles"} url={currentUrl} />
          <BreadcrumbSchema pathname={normalizedPath} title={breadcrumbTitle} />
        </>
      )}

      {pageType === "blog" && blog && (
        <>
          <BlogPostingSchema headline={blog.headline || title || "Blog"} description={blog.description || description || "Blog post"} url={blog.url || currentUrl} image={blog.image} datePublished={blog.datePublished} dateModified={blog.dateModified} />
          <PersonSchema />
          <BreadcrumbSchema pathname={normalizedPath} title={breadcrumbTitle || blog.headline || title} />
          {faqItems.length > 0 && <FAQSchema items={faqItems} />}
        </>
      )}

      {pageType === "collection" && (
        <>
          <CollectionPageSchema title={title || "Collection"} description={description || "Collection"} url={currentUrl} />
          <BreadcrumbSchema pathname={normalizedPath} title={breadcrumbTitle} />
        </>
      )}

      {pageType === "policy" && (
        <WebPageSchema title={title || "Policy"} description={description || "Policy"} url={currentUrl} />
      )}

      {pageType === "thankyou" && (
        <WebPageSchema title={title || "Thank You"} description={description || "Thank you page"} url={currentUrl} />
      )}

      {pageType === "article" && (
        <>
          <BlogPostingSchema headline={title || "Article"} description={description || "Article"} url={currentUrl} />
          <PersonSchema />
          <BreadcrumbSchema pathname={normalizedPath} title={breadcrumbTitle} />
          {faqItems.length > 0 && <FAQSchema items={faqItems} />}
        </>
      )}

      {pageType === "webpage" && (
        <WebPageSchema title={title || "Web Page"} description={description || "Web Page"} url={currentUrl} />
      )}
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vertexia Blog: Tips on Websites, SEO & Growth Marketing",
  description:
    "Read expert articles on websites, SEO, and marketing strategies. Learn how Vertexia helps small businesses grow online effectively.",
  alternates: {
    canonical: "https://www.vertexiaagency.com/blogs",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

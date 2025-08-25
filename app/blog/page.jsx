import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogList from "@/components/blog/BlogList";
import NewsLetter from "@/components/NewsLetter";

// This is the standard way to export metadata in the Next.js App Router
export const metadata = {
  title: "Blogs | TrendFlap",
  description:
    "Explore the latest insights, trends, and strategies in AI, Technology, and Digital Marketing from our blog.",
  keywords: [
    "AI blog",
    "Technology blog",
    "Digital Marketing blog",
    "TrendFlap blog",
  ],
  openGraph: {
    title: "Blogs | TrendFlap",
    description:
      "Explore the latest insights, trends, and strategies in AI, Technology, and Digital Marketing from our blog.",
    url: "https://www.trendflap.in/blog",
    type: "website",
    images: [
      {
        url: "https://www.trendflap.in/TrendflapLogo.png",
        width: 1200,
        height: 630,
        alt: "TrendFlap Blog Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | TrendFlap",
    description:
      "Explore the latest insights, trends, and strategies in AI, Technology, and Digital Marketing from our blog.",
  },
  alternates: {
    canonical: "https://www.trendflap.in/blog",
  },
};

export default function Blog() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="bg-blue-50 py-8 md:py-16 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Blogs
        </h1>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the latest insights, trends, and strategies in AI, Technology,
          and Digital Marketing.
        </p>
      </section>

      {/* Blog Cards */}
      <BlogList />

      {/* Call to Action */}
      <NewsLetter />

      <Footer />
    </>
  );
}

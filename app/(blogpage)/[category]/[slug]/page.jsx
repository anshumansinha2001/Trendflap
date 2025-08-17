"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { blogsData } from "@/assests";
import Footer from "@/components/Footer";
import Image from "next/image";
import LatestBlogCard from "@/components/LatestBlogCard";
import FeaturedBlogCard from "@/components/FeaturedBlogCard";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import NotFound from "@/app/not-found";

export default function SingleBlogPage() {
  const { category, slug } = useParams();

  // Find the exact current blog by category + slug
  const blog = blogsData.find(
    (b) =>
      b.category.toLowerCase().replace(" ", "-") ===
        category.toLowerCase().replace(" ", "-") && b.slug === slug
  );

  // Fetch latest blogs from the same category (excluding current blog)
  const latestBlogs = blogsData
    .filter(
      (b) =>
        b.category.toLowerCase() === category.toLowerCase() && b.slug !== slug
    )
    .slice(0, 3);

  // Fetch featured blogs
  const featuredBlogs = blogsData.filter((b) => b.isFeatured).slice(0, 3);

  if (!blog) {
    return <NotFound />;
  }

  // JSON-LD for Article & FAQ
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    author: { "@type": "Person", name: blog.author },
    datePublished: blog.date,
    image: blog.image,
    articleBody: blog.content.replace(/<[^>]+>/g, ""),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yourdomain.com/${blog.category.toLowerCase()}/${
        blog.slug
      }`,
    },
  };

  const faqSchema = blog.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: blog.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6 lg:py-12">
        {/* Inject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}

        <header className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-12">
          {/* Blog Header */}
          <section className="lg:col-span-3">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <Link
                href={`/${blog.category.toLowerCase()}`}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium hover:bg-blue-200"
              >
                {blog.category}
              </Link>
              <span>
                {blog.date} • {blog.read}
              </span>
            </div>
            <div className="mb-8">
              <Image
                src={blog.image}
                alt={blog.imageAlt || blog.title}
                width={800}
                height={400}
                className="w-full lg:h-100 object-cover rounded-xl shadow-md"
              />
            </div>
          </section>

          {/* Sidebar (TOC + TLDR) */}
          <aside className="lg:col-span-2 space-y-8 lg:mt-24">
            <div>
              <h2 className="text-xl font-semibold mb-2">Table of Contents</h2>
              <ul className="list-decimal text-blue-600 pl-5 space-y-1">
                {blog.toc.map((item, idx) => (
                  <li key={idx}>
                    <Link href={`#${item.id}`} className="hover:underline">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="font-bold text-lg mb-2">TL;DR</h2>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {blog.tldr.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </aside>
        </header>

        {/* Blog Content */}
        <article
          className="mt-6 lg:mt-0 prose prose-lg max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></article>

        {/* Blog FAQs */}
        {blog.faq?.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <div className="space-y-4">
              {blog.faq.map((faq, idx) => (
                <details key={idx} className="border p-4 rounded-lg">
                  <summary className="font-semibold">{faq.question}</summary>
                  <p
                    className="mt-2 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  ></p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Back Button */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            ← Return to Blogs
          </Link>
        </div>

        {/* Latest Blogs of Same Category */}
        {latestBlogs.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-semibold mb-5">
              Explore Latest {blog.category} Blogs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {latestBlogs.map((blog, i) => (
                <LatestBlogCard key={i} blog={blog} />
              ))}
            </div>
          </section>
        )}

        {/* Featured Blogs Section */}
        {featuredBlogs.length > 0 && (
          <section className="not-prose mt-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              What&rsquo;s trending among readers today!
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredBlogs.map((blog, i) => (
                <FeaturedBlogCard key={i} blog={blog} />
              ))}
            </div>
          </section>
        )}
      </main>

      <NewsLetter />

      <Footer />
    </>
  );
}

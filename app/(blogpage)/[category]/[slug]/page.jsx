import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import Link from "next/link";
import Image from "next/image";
import LatestBlogCard from "@/components/blog/LatestBlogCard";
import FeaturedBlogCard from "@/components/blog/FeaturedBlogCard";
import { fetchBlogByCategoryAndSlug, fetchBlogs } from "@/lib/api";
import BlogNotFound from "@/components/blog/BlogNotFound";

export default async function BlogPage({ params }) {
  const { category, slug } = await params;

  let blog;

  try {
    blog = await fetchBlogByCategoryAndSlug(category, slug);
  } catch (error) {
    console.error("Error fetching blog:", error);
  }

  if (!blog) return <BlogNotFound slug={slug} />;

  // Fetch other blogs
  const allBlogs = await fetchBlogs();
  const latestBlogs = allBlogs
    ?.filter((b) => b.categorySlug === category && b.slug !== slug)
    .slice(0, 3);

  const featuredBlogs = allBlogs?.filter((b) => b.isFeatured).slice(0, 3);

  const date = new Date(blog.updatedAt);
  const formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const domain = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";
  const canonicalUrl = `${domain}/${blog.categorySlug}/${blog.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.content?.slice(0, 150),
    image: [blog.image],
    author: { "@type": "Person", name: blog.author },
    publisher: {
      "@type": "Organization",
      name: "Trendflap",
      logo: { "@type": "ImageObject", url: `${domain}/logo.png` },
    },
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    articleSection: blog.category,
    articleBody: blog.content?.replace(/<[^>]+>/g, ""),
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: domain },
      {
        "@type": "ListItem",
        position: 2,
        name: blog.category,
        item: `${domain}/${blog.categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <>
        {/* Schema Markup */}
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

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
            {/* Blog Title */}
            <section className="lg:col-span-3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {blog.title}
              </h1>

              {/* Blog Category */}
              <Link
                href={`/${blog.category.toLowerCase()}`}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium hover:bg-blue-200"
              >
                {blog.category}
              </Link>

              {/* Meta Info (Author + Date + Reading Time) */}
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 my-4 md:my-6">
                <span className="font-medium text-gray-900">
                  By{" "}
                  <Link
                    href={`/${blog.authorSlug}`}
                    className="underline hover:text-blue-600 transition underline-offset-2 cursor-pointer"
                  >
                    {blog.author}{" "}
                  </Link>
                </span>
                <span>• {formatted}</span>
                <span>• {blog.read}</span>
              </div>

              {/* Blog Image */}
              <div className="relative w-full h-60 md:h-100">
                <Image
                  src={blog.image}
                  alt={blog.imageAlt || blog.title}
                  fill
                  priority
                  fetchPriority="high"
                  decoding="sync"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-fill rounded-lg"
                />
              </div>
            </section>

            {/* Sidebar (TOC + TLDR) */}
            <div className="lg:col-span-2 space-y-6 mt-4 lg:mt-0">
              <div
                className={
                  blog.toc.length === 0
                    ? "hidden"
                    : "bg-gray-50 p-4 rounded-lg shadow-md"
                }
              >
                <h2 className="text-xl font-semibold mb-2">
                  Table of Contents
                </h2>
                <ul className="list-decimal text-blue-600 pl-5 space-y-2.5">
                  {blog.toc?.map((item, idx) => (
                    <li key={idx}>
                      <Link href={`#${item.id}`} className="hover:underline">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={
                  blog.tldr.length > 0
                    ? "bg-gray-50 p-4 rounded-lg shadow-md"
                    : "hidden"
                }
              >
                <h2 className="font-bold text-lg mb-2">TL;DR</h2>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                  {blog.tldr.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </header>

          {/* Blog Content */}
          <article
            className="blog-content mt-6 prose prose-lg max-w-none text-gray-800"
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
          {latestBlogs && latestBlogs.length > 0 && (
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
          {featuredBlogs && featuredBlogs.length > 0 && (
            <section className="not-prose mt-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                What’s trending among readers today!
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredBlogs.map((blog, i) => (
                  <FeaturedBlogCard key={i} blog={blog} />
                ))}
              </div>
            </section>
          )}
        </main>
      </>
      <NewsLetter />
      <Footer />
    </>
  );
}

export async function generateMetadata({ params }) {
  const { category, slug } = params;
  let blog;

  try {
    blog = await fetchBlogByCategoryAndSlug(category, slug);
  } catch (error) {
    console.error("Error fetching metadata:", error);
  }

  if (!blog) {
    return {
      title: "Blog Not Found - Trendflap",
      description: "The article you are looking for does not exist.",
    };
  }

  const metaTitle = blog.metaTitle || blog.title;
  const metaDescription =
    blog.metaDescription ||
    blog.content?.replace(/<[^>]+>/g, "").slice(0, 157) ||
    "Stay updated with the latest articles.";
  const imageUrl = blog.image || "/favicon.ico";
  const altText = blog.imageAlt || blog.title || "Trendflap";
  const canonicalUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/${blog.categorySlug}/${blog.slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: metaTitle,
      description: metaDescription,
      images: [{ url: imageUrl, width: 800, height: 600, alt: altText }],
    },
    twitter: {
      card: "summary_large_image",
      url: canonicalUrl,
      title: metaTitle,
      description: metaDescription,
      images: [{ url: imageUrl, width: 800, height: 600, alt: altText }],
    },
    alternates: { canonical: canonicalUrl },
    robots: { index: true, follow: true, nocache: true },
  };
}

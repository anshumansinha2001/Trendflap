import BlogContent from "@/components/BlogContent";
import { fetchBlogByCategoryAndSlug } from "@/lib/api";

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
      title: "Post not found | Trendflap",
      description: "The article you are looking for does not exist.",
    };
  }

  const metaTitle = blog.metaTitle || blog.title;
  const metaDescription =
    blog.metaDescription ||
    blog.content?.replace(/<[^>]+>/g, "").slice(0, 157) ||
    "Stay updated with the latest articles.";
  const imageUrl = blog.image || "/favicon.ico";
  const canonicalUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/${blog.categorySlug}/${blog.slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: metaTitle,
      description: metaDescription,
      images: [{ url: imageUrl, width: 800, height: 600, alt: metaTitle }],
    },
    twitter: {
      card: "summary_large_image",
      url: canonicalUrl,
      title: metaTitle,
      description: metaDescription,
      images: [{ url: imageUrl, width: 800, height: 600, alt: metaTitle }],
    },
    alternates: { canonical: canonicalUrl },
    robots: { index: true, follow: true, nocache: true },
  };
}

export default function BlogPage({ params }) {
  return <BlogContent category={params.category} slug={params.slug} />;
}

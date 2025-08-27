import dbConnect from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";

export const revalidate = 3600; // Re-generate every hour

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN || "https://www.trendflap.in";

  try {
    await dbConnect();
    const blogs = await BlogModel.find(
      {},
      "slug category categorySlug updatedAt createdAt"
    ).lean();

    // 1. Static Pages
    const staticPages = [
      {
        url: `${baseUrl}/`,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/privacy-policy`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.5,
      },
      {
        url: `${baseUrl}/anshuman-sinha`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.5,
      },
    ];

    // 2. Dynamic Categories
    const categoriesSet = new Set(blogs.map((b) => b.categorySlug));
    const categoryUrls = Array.from(categoriesSet).map((cat) => ({
      url: `${baseUrl}/${cat}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.6,
    }));

    // 3. Dynamic Blog Posts
    const blogUrls = blogs.map((blog) => ({
      url: `${baseUrl}/${blog.categorySlug}/${blog.slug}`,
      lastModified: (blog.updatedAt || blog.createdAt).toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

    return [...staticPages, ...categoryUrls, ...blogUrls];
  } catch (err) {
    console.error("Failed to fetch blogs for sitemap:", err);

    // Return a minimal sitemap instead of failing completely
    return [{ url: baseUrl, lastModified: new Date().toISOString() }];
  }
}

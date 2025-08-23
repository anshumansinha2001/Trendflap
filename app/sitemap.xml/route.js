import { NextResponse } from "next/server";
import dbConnect from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";

export async function GET() {
  await dbConnect();

  try {
    const blogs = await BlogModel.find(
      {},
      "slug category categorySlug updatedAt createdAt"
    );

    // Dynamic categories from blogs
    const categoriesSet = new Set(blogs.map((b) => b.categorySlug));
    const categoryUrls = Array.from(categoriesSet).map((cat) => ({
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/${cat}`,
      lastModified: new Date(),
    }));

    // Static pages
    const staticPages = [
      { url: `${process.env.NEXT_PUBLIC_DOMAIN}/`, lastModified: new Date() },
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/about`,
        lastModified: new Date(),
      },
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/contact`,
        lastModified: new Date(),
      },
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/blog`,
        lastModified: new Date(),
      },
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/privacy-policy`,
        lastModified: new Date(),
      },
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/anshuman-sinha`,
        lastModified: new Date(),
      },
    ];

    // Blog URLs
    const blogUrls = blogs.map((blog) => ({
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/${blog.categorySlug}/${blog.slug}`,
      lastModified: blog.updatedAt || blog.createdAt || new Date(),
    }));

    const urls = [...staticPages, ...categoryUrls, ...blogUrls];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .filter(Boolean)
          .map(
            (entry) => `
              <url>
                <loc>${entry.url}</loc>
                <lastmod>${new Date(entry.lastModified).toISOString()}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.8</priority>
              </url>`
          )
          .join("")}
      </urlset>`;

    return new NextResponse(sitemap, {
      headers: { "Content-Type": "application/xml" },
    });
  } catch (err) {
    console.error("Failed to fetch blogs for sitemap:", err);
    return new NextResponse("", { status: 500 });
  }
}

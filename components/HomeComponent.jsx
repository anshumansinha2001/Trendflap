"use client";

import { fetchBlogs } from "@/lib/api";
import FeaturedBlogCard from "@/components/blog/FeaturedBlogCard";
import { useEffect, useState } from "react";
import BlogCardSkeleton from "./blog/BlogCardSkeleton";

export default function HomeComponent() {
  const [loading, setLoading] = useState(true);
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const allBlogs = await fetchBlogs();
        if (!allBlogs) {
          setBlogsData([]);
        } else {
          // Find featured blogs
          setBlogsData(allBlogs.filter((blog) => blog.isFeatured).slice(0, 3));
        }
      } catch (err) {
        console.error("Failed to load blog:", err.message);
        setBlogsData([]);
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, []);

  if (loading) {
    return <BlogCardSkeleton />;
  }

  const featuredBlogs = blogsData;

  return (
    <>
      {/* Featured Articles */}
      {featuredBlogs?.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2 md:mb-8">
              What&#39;s trending among readers today!
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredBlogs.map((blog) => (
                <FeaturedBlogCard key={blog.id || blog.slug} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

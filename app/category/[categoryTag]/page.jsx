"use client";

import BlogCardSkeleton from "@/components/blog/BlogCardSkeleton";
import { fetchBlogs } from "@/lib/api";
import { useEffect, useState, use } from "react";
import Navbar from "@/components/Navbar";
import LatestBlogCard from "@/components/blog/LatestBlogCard";
import Footer from "@/components/Footer";

export default function CategoryPage({ params }) {
  // ✅ unwrap params (since it's a Promise in client components)
  const { categoryTag } = use(params);

  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchBlogs()
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.categoryTag?.toLowerCase().replace(/\s+/g, "-") ===
      categoryTag.toLowerCase()
  );

  // 🟥 Loading State
  if (loading) {
    return (
      <>
        <Navbar />
        <h1 className="text-3xl font-bold text-gray-800 mt-12 mb-6 text-center">
          Seraching for {categoryTag.toUpperCase().replace("-", " ")}!
        </h1>
        <BlogCardSkeleton />
      </>
    );
  }

  //  If there are no blogs in this category, show NotFound component
  if (filteredBlogs.length === 0) {
    return (
      <>
        <Navbar />
        <main className="flex flex-col justify-center mx-auto min-h-[50vh]">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            No blogs found in {categoryTag.toUpperCase().replace("-", " ")}!
          </h1>
          <p className="text-center text-gray-600">
            Sorry, we couldn't find any blogs in this category. Please check
            back later or explore other categories.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12 min-h-[60vh]">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          All ABOUT {categoryTag.toUpperCase().replace("-", " ")}!
        </h1>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <LatestBlogCard key={blog.id || blog.slug} blog={blog} />
          ))}
        </div>
      </main>
    </>
  );
}

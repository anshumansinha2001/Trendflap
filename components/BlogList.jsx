"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import BlogCardSkeleton from "./BlogCardSkeleton";
import { fetchBlogs } from "@/utils/api";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const categories = ["All", "AI", "Tech", "Digital Marketing"];

  // Fetch blogs from API (by utils/api.js)
  useEffect(() => {
    setLoading(true);
    fetchBlogs()
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredBlogs =
    filter === "All" ? blogs : blogs.filter((blog) => blog.category === filter);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 min-h-[60vh]">
      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-3 md:px-5 py-2 rounded-full font-medium transition hover:cursor-pointer ${
              filter === category
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog List */}
      {loading ? (
        <BlogCardSkeleton /> // Skeleton while loading
      ) : filteredBlogs.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => {
            const BlogURL = `/${blog.category
              .toLowerCase()
              .replace(" ", "-")}/${blog.slug}`;
            return (
              <div
                key={blog._id}
                className="border rounded-xl shadow hover:shadow-lg transition bg-white overflow-hidden"
              >
                {/* Blog Image (Clickable) */}
                <Link href={BlogURL}>
                  <img
                    src={blog.image}
                    alt={blog.imageAlt || blog.title}
                    className="w-full h-48 object-cover hover:opacity-90 transition"
                  />
                </Link>

                <div className="p-6">
                  {/* Category Tag */}
                  <Link
                    href={`/${blog.category.toLowerCase().replace(" ", "-")}`}
                    className="inline-block mb-3 px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200"
                  >
                    {blog.category}
                  </Link>

                  {/* Title (Clickable) */}
                  <Link href={BlogURL}>
                    <h3 className="text-xl font-semibold mb-1 hover:text-blue-600">
                      {blog.title}
                    </h3>
                  </Link>

                  {/* Published Date */}
                  <p className="text-gray-500 text-sm mb-3">{blog.date}</p>

                  {/* Short Description / TLDR */}
                  {blog.tldr?.length > 0 && (
                    <p className="text-gray-600 mb-4">{blog.metaDescription}</p>
                  )}

                  {/* Read More */}
                  <Link
                    href={BlogURL}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-10">
          No blogs found for <span className="font-semibold">{filter}</span>.
        </p>
      )}
    </main>
  );
}

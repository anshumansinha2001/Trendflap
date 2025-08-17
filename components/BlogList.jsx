"use client";
import { blogsData } from "@/assests";
import Link from "next/link";
import { useState } from "react";
import BlogCardSkeleton from "./BlogCardSkeleton";

const blogs = blogsData;

export default function BlogList() {
  const [filter, setFilter] = useState("All");

  const [loading, setLoading] = useState(false);

  const categories = ["All", "AI", "Tech", "Digital Marketing"];

  const filteredBlogs =
    filter === "All" ? blogs : blogs.filter((blog) => blog.category === filter);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 min-h-[60vh]">
      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-2 md:px-4 py-2 rounded-full font-medium transition hover:cursor-pointer ${
              filter === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog List */}
      {!loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => {
            const BlogURL = `/${blog.category
              .toLowerCase()
              .replace(" ", "-")}/${blog.slug}`;
            return (
              <div
                key={blog.id}
                className="border rounded-xl shadow hover:shadow-lg transition bg-white overflow-hidden"
              >
                {/* Blog Image (Clickable) */}
                <Link href={BlogURL}>
                  <img
                    src={blog.image}
                    alt={blog.title}
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
                  <a href={BlogURL}>
                    <h3 className="text-xl font-semibold mb-1 hover:text-blue-600">
                      {blog.title}
                    </h3>
                  </a>

                  {/* Published Date */}
                  <p className="text-gray-500 text-sm mb-3">{blog.date}</p>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>

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
        <BlogCardSkeleton />
      )}
    </main>
  );
}

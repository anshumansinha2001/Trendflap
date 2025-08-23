"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import BlogForm from "@/components/admin/BlogForm";
import { fetchBlogByCategoryAndSlug } from "@/lib/api";
import LoadingScreen from "@/components/LoadingScreen";

export default function EditBlogPage() {
  const { category, slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        // Fetch current blog by category + slug
        const currentBlog = await fetchBlogByCategoryAndSlug(category, slug);

        // 🚨 Handle Not Found
        if (!currentBlog) {
          setBlog(null); //
          return;
        }

        setBlog(currentBlog);
      } catch (err) {
        console.error("Failed to load blog:", err.message);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [category, slug]);

  if (loading) {
    return <LoadingScreen />;
  }

  const handleUpdate = async (body) => {
    await axios.put(`/api/blog/${category}/${slug}`, body, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  if (!blog)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-2xl font-semibold mb-4">This Blog is not found!</p>
        <p>Category: {category}</p>
        <p>Slug: {slug}</p>
      </div>
    );

  return <BlogForm initialData={blog} onSubmit={handleUpdate} />;
}

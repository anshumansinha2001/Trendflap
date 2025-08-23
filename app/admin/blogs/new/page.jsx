"use client";

import BlogForm from "@/components/admin/BlogForm";
import axios from "axios";

export default function NewBlogPage() {
  const handleCreate = async (body) => {
    await axios.post("/api/blog", body, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return <BlogForm onSubmit={handleCreate} />;
}

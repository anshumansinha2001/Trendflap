// lib/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "/api", // points to your Next.js API routes
});

// ✅ Fetch all blogs
export const fetchBlogs = async () => {
  try {
    const res = await api.get("/blog");
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to fetch blogs");
  }
};

// ✅ Fetch single blog by slug
export const fetchBlogBySlug = async (slug) => {
  try {
    const res = await api.get(`/blog/${slug}`);
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to fetch blog");
  }
};

// ✅ Fetch blogs by category
export const fetchBlogsByCategory = async (category) => {
  try {
    const res = await api.get(`/blog?category=${category}`);
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to fetch blogs");
  }
};

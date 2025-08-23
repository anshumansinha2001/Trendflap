import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_DOMAIN}/api` || "/api", // works in dev + prod
});

// ✅ Fetch all blogs
export const fetchBlogs = async () => {
  try {
    const res = await api.get("/blog");
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || "Failed to fetch blogs");
  }
};

// ✅ Fetch single blog by category + slug
export const fetchBlogByCategoryAndSlug = async (category, slug) => {
  try {
    const res = await api.get(`/blog/${category}/${slug}`);
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || "Failed to fetch blog");
  }
};

// ✅ Create blog
export const createBlog = async (blogData) => {
  try {
    const res = await api.post("/blog", blogData);
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || "Failed to create blog");
  }
};

// Delete blog blog by category + slug
export const deleteBlogByCategoryAndSlug = async (category, slug) => {
  try {
    const res = await api.delete(`/blog/${category}/${slug}`);
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || "Failed to delete blog");
  }
};

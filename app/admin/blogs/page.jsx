"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiPlus, FiEdit, FiTrash2, FiEye } from "react-icons/fi";
import Sidebar from "@/components/admin/Sidebar";
import { deleteBlogByCategoryAndSlug, fetchBlogs } from "@/lib/api";
import { toast } from "react-toastify";
import LoadingScreen from "@/components/LoadingScreen";

export default function AdminBlogsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    setLoading(true);
    try {
      const data = await fetchBlogs();
      setBlogs(data);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (category, slug) => {
    if (!confirm("Are you sure you want to delete this blog?")) return; // ✅ Yes/No prompt

    try {
      await deleteBlogByCategoryAndSlug(
        category.toLowerCase().replace(" ", "-"),
        slug
      );
      toast.success("Blog deleted successfully");
      loadBlogs(); // ✅ refresh list
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (loading) return <LoadingScreen />;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 md:ml-64 p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Manage Blogs</h1>
          <Link
            href="/admin/blogs/new"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            <FiPlus /> New Blog
          </Link>
        </div>

        {/* Table or Empty State */}
        <div className="bg-white shadow rounded-xl overflow-hidden">
          {blogs.length === 0 ? (
            <div className="p-6 text-center text-gray-500">No blogs found.</div>
          ) : (
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Category
                  </th>

                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Date
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {blogs.map((blog) => {
                  const blogUrl = `/${blog.category
                    .toLowerCase()
                    .replace(" ", "-")}/${blog.slug}`;

                  return (
                    <tr
                      key={blog.id || blog.slug} // ✅ ensure unique key
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-gray-800 font-medium">
                        {blog.title}
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm">
                        {blog.category}
                      </td>

                      <td className="px-6 py-4 text-gray-600 text-sm">
                        {blog.updatedAt
                          .split("T")[0]
                          .split("-")
                          .reverse()
                          .join("/")
                          .slice(0, 10)
                          .replace(/-/g, "/")}
                      </td>
                      <td className="px-6 py-4 flex justify-center gap-3">
                        {/* ✅ Correct Blog Route */}
                        <Link
                          href={blogUrl}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                          title="View"
                          target="_blank"
                        >
                          <FiEye />
                        </Link>
                        <Link
                          href={`/admin/blogs/edit/${blog.category
                            .toLowerCase()
                            .replace(" ", "-")}/${blog.slug}`}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
                          title="Edit"
                        >
                          <FiEdit />
                        </Link>
                        <button
                          onClick={() => handleDelete(blog.category, blog.slug)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                          title="Delete"
                        >
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

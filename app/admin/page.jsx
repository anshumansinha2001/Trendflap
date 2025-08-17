"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FiHome,
  FiFileText,
  FiUsers,
  FiSettings,
  FiBarChart2,
  FiBell,
  FiMenu,
  FiPlus,
  FiTrash2,
  FiEdit,
  FiMail,
} from "react-icons/fi";
import Link from "next/link";

export default function BlogAdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/auth");
  };

  // Fake blog data
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      status: "Published",
      date: "2025-08-15",
    },
    {
      id: 2,
      title: "Tailwind CSS Tricks",
      status: "Draft",
      date: "2025-08-12",
    },
    {
      id: 3,
      title: "React Server Components",
      status: "Published",
      date: "2025-08-10",
    },
  ];

  // Fake subscribers
  const subscribers = [
    { id: 1, email: "john@example.com", date: "2025-08-01" },
    { id: 2, email: "jane@example.com", date: "2025-08-05" },
    { id: 3, email: "alex@example.com", date: "2025-08-09" },
  ];

  // Fake contact messages
  const messages = [
    {
      id: 1,
      name: "Michael",
      email: "michael@example.com",
      message: "I love your blog!",
      date: "2025-08-14",
    },
    {
      id: 2,
      name: "Sophia",
      email: "sophia@example.com",
      message: "Can you write about SEO tips?",
      date: "2025-08-13",
    },
    {
      id: 3,
      name: "David",
      email: "david@example.com",
      message: "How to contribute as a writer?",
      date: "2025-08-11",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform bg-white shadow-md w-64 transition-transform duration-300 z-50 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h1 className="text-xl font-bold">Admin pannel</h1>
          <button
            className="md:hidden text-gray-600"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="mt-5 space-y-2">
          <SidebarLink icon={<FiHome />} label="Home" href="/" />
          <SidebarLink
            icon={<FiFileText />}
            label="Blogs"
            href="/admin/blogs"
          />
          <SidebarLink
            icon={<FiUsers />}
            label="Subscribers"
            href="/admin/subscribers"
          />
          <SidebarLink
            icon={<FiMail />}
            label="Messages"
            href="/admin/messages"
          />
          <SidebarLink
            icon={<FiBarChart2 />}
            label="Analytics"
            href="/admin/analytics"
          />
          <SidebarLink
            icon={<FiSettings />}
            label="Settings"
            href="/admin/settings"
          />
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
          >
            🚪 Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Navbar */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-4 sticky top-0 z-40">
          <button
            className="md:hidden text-gray-600"
            onClick={() => setSidebarOpen(true)}
          >
            <FiMenu size={24} />
          </button>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-1 hidden sm:block"
            />
            <button className="relative">
              <FiBell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </span>
            </button>
            <div className="flex items-center gap-2">
              <img
                src="https://via.placeholder.com/30"
                alt="Profile"
                className="rounded-full"
              />
              <span className="font-medium">Admin</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Widgets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Widget title="Total Blogs" value={blogs.length.toString()} />
            <Widget title="Subscribers" value={subscribers.length.toString()} />
            <Widget
              title="Drafts"
              value={blogs
                .filter((b) => b.status === "Draft")
                .length.toString()}
            />
            <Widget title="Messages" value={messages.length.toString()} />
          </div>

          {/* Blog Management */}
          <div className="bg-white p-4 shadow rounded">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">Manage Blogs</h2>
              <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">
                <FiPlus /> New Blog
              </button>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Title</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">{blog.title}</td>
                    <td className="p-2">{blog.status}</td>
                    <td className="p-2">{blog.date}</td>
                    <td className="p-2 flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <FiEdit />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Subscribers */}
          <div className="bg-white p-4 shadow rounded">
            <h2 className="font-semibold text-lg mb-3">Email Subscribers</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Email</th>
                  <th className="p-2">Date Subscribed</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((sub) => (
                  <tr key={sub.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">{sub.email}</td>
                    <td className="p-2">{sub.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Contact Messages */}
          <div className="bg-white p-4 shadow rounded">
            <h2 className="font-semibold text-lg mb-3">Contact Messages</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Name</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Message</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr key={msg.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">{msg.name}</td>
                    <td className="p-2">{msg.email}</td>
                    <td className="p-2 truncate max-w-xs">{msg.message}</td>
                    <td className="p-2">{msg.date}</td>
                    <td className="p-2">
                      <button className="text-red-600 hover:text-red-800">
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

// Sidebar link component
function SidebarLink({ icon, label, href }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100"
    >
      {icon}
      {label}
    </Link>
  );
}

// Widget component
function Widget({ title, value }) {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

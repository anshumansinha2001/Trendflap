"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiMenu, FiPlus, FiTrash2, FiEdit } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { adminPic } from "@/assests";
import Sidebar from "@/components/admin/Sidebar";

export default function BlogAdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  // Fake data
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
  const subscribers = [
    { id: 1, email: "john@example.com", date: "2025-08-01" },
    { id: 2, email: "jane@example.com", date: "2025-08-05" },
    { id: 3, email: "alex@example.com", date: "2025-08-09" },
  ];
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
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* ✅ Sidebar Component */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64 min-h-screen overflow-y-auto scrollbar-hidden">
        {/* Navbar */}
        <header className="flex items-center justify-between bg-white shadow-sm px-4 sm:px-6 py-2.5 sticky top-0 z-40">
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setSidebarOpen(true)}
          >
            <FiMenu size={24} />
          </button>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                width={40}
                height={40}
                src={adminPic}
                alt="Admin"
                className="rounded-full border"
              />
              <span className="font-medium text-gray-700 text-sm sm:text-base">
                Anshuman Sinha
              </span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 space-y-6">
          {/* Widgets */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
          <Card
            title="Manage Blogs"
            action={
              <Link
                href="/admin/blogs/new"
                className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700"
              >
                <FiPlus /> New Blog
              </Link>
            }
          >
            <ResponsiveTable
              headers={["Title", "Status", "Date", "Actions"]}
              rows={blogs.map((blog) => [
                blog.title,
                blog.status,
                blog.date,
                <div key={blog.id} className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-800">
                    <FiEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FiTrash2 />
                  </button>
                </div>,
              ])}
            />
          </Card>

          {/* Subscribers */}
          <Card title="Email Subscribers">
            <ResponsiveTable
              headers={["Email", "Date Subscribed"]}
              rows={subscribers.map((s) => [s.email, s.date])}
            />
          </Card>

          {/* Messages */}
          <Card title="Contact Messages">
            <ResponsiveTable
              headers={["Name", "Email", "Message", "Date", "Actions"]}
              rows={messages.map((m) => [
                m.name,
                m.email,
                <span className="truncate block max-w-[150px]">
                  {m.message}
                </span>,
                m.date,
                <button className="text-red-600 hover:text-red-800">
                  <FiTrash2 />
                </button>,
              ])}
            />
          </Card>
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
      className="flex items-center gap-3 px-4 py-2 text-gray-700 font-medium hover:bg-gray-100 transition rounded-md"
    >
      {icon}
      {label}
    </Link>
  );
}

// Widget component
function Widget({ title, value }) {
  return (
    <div className="bg-white p-4 shadow-sm rounded-lg flex flex-col justify-center items-start">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
}

// Card Wrapper
function Card({ title, action, children }) {
  return (
    <div className="bg-white p-4 shadow-sm rounded-lg overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  );
}

// Responsive Table
function ResponsiveTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto scrollbar-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-sm">
            {headers.map((h, i) => (
              <th key={i} className="p-2 border-b">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`hover:bg-gray-50 text-sm ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              {row.map((cell, j) => (
                <td key={j} className="p-2 border-b">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

"use client";

import Link from "next/link";
import {
  FiHome,
  FiFileText,
  FiUsers,
  FiSettings,
  FiBarChart2,
  FiMail,
} from "react-icons/fi";

export default function Sidebar({ sidebarOpen, setSidebarOpen, handleLogout }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform bg-white shadow-lg w-64 transition-transform duration-300 z-50 
      ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-gray-50">
        <Link href="/admin" className="text-xl font-bold text-gray-800">
          Admin Panel
        </Link>
        <button
          className="md:hidden text-gray-600 hover:text-gray-800"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-6 space-y-1">
        <SidebarLink icon={<FiHome />} label="Home" href="/" />
        <SidebarLink icon={<FiFileText />} label="Blogs" href="/admin/blogs" />
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
          className="flex items-center gap-3 w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 font-medium cursor-pointer"
        >
          🚪 Logout
        </button>
      </nav>
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

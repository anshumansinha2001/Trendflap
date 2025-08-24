"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // desktop dropdown
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // mobile dropdown
  const [isAdmin, setIsAdmin] = useState(false); // ✅ track admin login
  const dropdownRef = useRef(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Check admin session on mount
  useEffect(() => {
    async function checkAdmin() {
      try {
        const res = await fetch("/api/admin/session"); // <-- create this API to return { loggedIn: true/false }
        const data = await res.json();
        setIsAdmin(data.loggedIn);
      } catch (error) {
        setIsAdmin(false);
      }
    }
    checkAdmin();
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Trendflap
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {/* <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link> */}
          <Link href="/blog" className="text-gray-700 hover:text-blue-600">
            Blog
          </Link>

          {/* Categories Dropdown (Desktop) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 hover:cursor-pointer"
            >
              Categories
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md">
                <Link
                  href="/ai"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Artificial Intelligence (AI)
                </Link>
                <Link
                  href="/technology"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Technology
                </Link>
                <Link
                  href="/digital-marketing"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Digital Marketing
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>

          {/* ✅ Admin link (only if logged in) */}
          {isAdmin && (
            <Link href="/admin" className="text-gray-700 hover:text-blue-600">
              Admin Pannel
            </Link>
          )}
        </nav>

        {/* Desktop Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="More fetaures coming soon..."
            className="px-3 py-1 border rounded-md text-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white border-t border-gray-200">
          {/* <Link
            href="/"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link> */}
          <Link
            href="/blog"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {/* ✅ Admin link (mobile) */}
          {isAdmin && (
            <Link
              href="/admin"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Admin Pannel
            </Link>
          )}

          {/* Mobile Dropdown */}
          <div className="flex flex-col">
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="text-gray-700 hover:text-blue-600 text-left"
            >
              Categories
            </button>

            {mobileDropdownOpen && (
              <div className="pl-4 flex flex-col gap-2 mt-2">
                <Link
                  href="/ai"
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Artificial Intelligence (AI)
                </Link>
                <Link
                  href="/technology"
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Technology
                </Link>
                <Link
                  href="/digital-marketing"
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Digital Marketing
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}

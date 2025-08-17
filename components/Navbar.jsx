"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // desktop dropdown
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // mobile dropdown
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

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 tracking-wide"
        >
          Trendflap
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Blog
          </Link>

          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </Link>

          {/* Categories Dropdown (Desktop) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition focus:outline-none"
            >
              Categories
              <span
                className={`transform transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md transition-all duration-200 ease-in-out transform origin-top ${
                dropdownOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <Link
                href="/ai"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                AI
              </Link>
              <Link
                href="/tech"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Tech
              </Link>
              <Link
                href="/digital-marketing"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Digital Marketing
              </Link>
            </div>
          </div>
        </nav>

        {/* Desktop Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search articles..."
            className="px-3 py-1 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-4 bg-white border-t border-gray-200">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>

          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile Dropdown */}
          <div className="flex flex-col">
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition text-left"
            >
              Categories
              <span
                className={`transform transition-transform duration-200 ${
                  mobileDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`pl-4 flex flex-col gap-2 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
                mobileDropdownOpen
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <Link
                href="/ai"
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                AI
              </Link>
              <Link
                href="/tech"
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Tech
              </Link>
              <Link
                href="/digital-marketing"
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Digital Marketing
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[85vh] bg-gradient-to-r from-gray-50 to-gray-100 text-center px-4">
        {/* 404 Number */}
        <h1 className="text-7xl md:text-9xl font-bold text-blue-600">404</h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="mt-2 text-gray-600 max-w-md">
          The page you are looking for doesn’t exist or might have been moved.
        </p>

        {/* Illustration / Emoji */}
        <div className="text-6xl mt-6 animate-bounce">🔎</div>

        {/* Return Home Button */}
        <Link
          href="/"
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Return Home
        </Link>
      </div>
    </>
  );
}

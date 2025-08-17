"use client";
import React from "react";
import Link from "next/link";

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="text-center space-y-6 w-full px-4">
        {/* Loading Text */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-700 animate-pulse">
          Loading, please wait...
        </h1>

        {/* Progress Bar */}
        <div className="w-full max-w-sm h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <div className="h-full w-1/2 bg-blue-500 animate-[progress_2s_ease-in-out_infinite]"></div>
        </div>

        {/* Return Home Button */}
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Return Home
        </Link>
      </div>

      {/* Progress Bar Animation */}
      <style jsx>{`
        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

"use client";
import React from "react";

export default function BlogCardSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-12 min-h-[60vh]">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="animate-pulse border rounded-2xl p-4 shadow-sm bg-white"
        >
          {/* Image placeholder */}
          <div className="h-40 w-full bg-gray-300 rounded-md mb-4"></div>

          {/* Title placeholder */}
          <div className="h-5 bg-gray-300 rounded w-3/4 mb-3"></div>

          {/* Description placeholder */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>

          {/* Button placeholder */}
          <div className="mt-4 h-9 w-24 bg-gray-300 rounded-md"></div>
        </div>
      ))}
    </div>
  );
}

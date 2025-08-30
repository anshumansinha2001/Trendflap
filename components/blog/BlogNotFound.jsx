"use client";

import Link from "next/link";

export default function BlogNotFound({ slug }) {
  return (
    <div className="flex flex-col items-center justify-center h-[85vh] bg-gradient-to-r from-gray-50 to-gray-100 text-center px-4">
      {/* Warning Icon */}
      <div className="text-6xl text-yellow-500 animate-bounce">⚠️</div>

      {/* Message */}
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
        Blog Not Found
      </h2>
      <p className="mt-2 text-gray-600 max-w-md">
        This <span className="font-semibold"> {slug} </span>
        blog might not exist or could have been removed from our database.
      </p>

      {/* Return to Blogs Button */}
      <Link
        href="/blog"
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1"
      >
        ← Return to Blogs
      </Link>
    </div>
  );
}

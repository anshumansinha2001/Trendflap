"use client";

export default function BlogPageSkeleton() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-6 lg:py-12 animate-pulse">
      {/* Header */}
      <header className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-12">
        {/* Blog Title & Meta */}
        <section className="lg:col-span-3 space-y-4">
          <div className="h-10 bg-gray-300 rounded w-3/4"></div> {/* Title */}
          <div className="h-6 bg-gray-200 rounded w-1/6"></div> {/* Category */}
          <div className="flex gap-2 text-sm text-gray-400 mt-2">
            <div className="h-4 w-20 bg-gray-200 rounded"></div> {/* Author */}
            <div className="h-4 w-16 bg-gray-200 rounded"></div> {/* Date */}
            <div className="h-4 w-16 bg-gray-200 rounded"></div> {/* Read */}
          </div>
          {/* Image */}
          <div className="w-full h-60 md:h-100 bg-gray-300 rounded-xl shadow-md mt-4"></div>
        </section>

        {/* Sidebar (TOC + TLDR) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="h-48 bg-gray-100 rounded-lg shadow-md"></div>{" "}
          {/* TOC */}
          <div className="h-32 bg-gray-100 rounded-lg shadow-md"></div>{" "}
          {/* TLDR */}
        </div>
      </header>

      {/* Blog Content */}
      <article className="mt-6 space-y-6">
        {/* Multiple blocks to simulate paragraphs and headings */}
        <div className="h-8 bg-gray-300 rounded w-2/3"></div> {/* H2 */}
        <div className="h-6 bg-gray-200 rounded w-full"></div> {/* P */}
        <div className="h-6 bg-gray-200 rounded w-5/6"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-6 bg-gray-200 rounded w-full"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2 mt-4"></div> {/* H3 */}
        <div className="h-6 bg-gray-200 rounded w-full"></div>
        <div className="h-6 bg-gray-200 rounded w-4/5"></div>
        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <div className="h-8 bg-gray-300 rounded w-1/3"></div>{" "}
          {/* FAQ Title */}
          <div className="space-y-2">
            <div className="h-6 bg-gray-200 rounded w-full"></div>
            <div className="h-6 bg-gray-200 rounded w-5/6"></div>
            <div className="h-6 bg-gray-200 rounded w-4/5"></div>
          </div>
        </section>
        {/* Back Button */}
        <div className="mt-12 h-10 w-32 bg-gray-300 rounded-lg"></div>
        {/* Latest Blogs */}
        <section className="mt-14 space-y-4">
          <div className="h-8 bg-gray-300 rounded w-1/3"></div>{" "}
          {/* Section title */}
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-48 bg-gray-200 rounded-lg shadow-md"
              ></div>
            ))}
          </div>
        </section>
        {/* Featured Blogs */}
        <section className="mt-10 space-y-4">
          <div className="h-8 bg-gray-300 rounded w-1/2"></div>{" "}
          {/* Section title */}
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-48 bg-gray-200 rounded-lg shadow-md"
              ></div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}

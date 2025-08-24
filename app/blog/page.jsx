import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogList from "@/components/blog/BlogList";
import NewsLetter from "@/components/NewsLetter";

export default function Blog() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="bg-blue-50 py-8 md:py-16 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Blogs
        </h1>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the latest insights, trends, and strategies in AI, Technology,
          and Digital Marketing.
        </p>
      </section>

      {/* Blog Cards */}
      <BlogList />

      {/* Call to Action */}
      <NewsLetter />

      <Footer />
    </>
  );
}

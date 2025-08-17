import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-50 py-8 lg:py-16 text-center">
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
          AI, Tech & Digital Marketing Insights for the Future
        </h1>
        <p className="text-sm lg:text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold">Trendflap</span> – your
          go-to hub for the latest trends, tutorials, and strategies in
          Artificial Intelligence, cutting-edge Tech, and high-impact Digital
          Marketing. Learn, apply, and stay ahead in the digital world.
        </p>
        <div className="mt-6">
          <Link
            href="/blog"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Explore Our Blogs →
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Three Main Pillars
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD COMPONENT RECOMMENDED HERE */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-3">
                Artificial Intelligence
              </h3>
              <p className="text-gray-600 mb-4">
                Discover how AI is shaping industries, from automation to
                generative models. In-depth guides, case studies, and the latest
                breakthroughs.
              </p>
              <Link href="/ai" className="text-blue-600 font-medium">
                Read More →
              </Link>
            </div>

            {/* CARD COMPONENT RECOMMENDED HERE */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-3">Technology</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with emerging tech trends, software reviews, and
                practical tips to leverage technology for business and personal
                growth.
              </p>
              <Link href="/tech" className="text-blue-600 font-medium">
                Read More →
              </Link>
            </div>

            {/* CARD COMPONENT RECOMMENDED HERE */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">
                Master SEO, social media, content marketing, and data-driven
                strategies to grow your brand and reach the right audience.
              </p>
              <Link
                href="/digital-marketing"
                className="text-blue-600 font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <NewsLetter />

      <Footer />
    </>
  );
}

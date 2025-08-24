"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import { adminPic } from "@/assests";
import Image from "next/image";
import Link from "next/link";
import { fetchBlogs } from "@/lib/api";
import FeaturedBlogCard from "@/components/blog/FeaturedBlogCard";
import Loading from "@/app/loading";
import { useEffect, useState } from "react";

export default function HomeComponent() {
  const [loading, setLoading] = useState(false);
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const allBlogs = await fetchBlogs();
        if (!allBlogs) {
          setBlogsData([]);
        } else {
          // Find featured blogs
          setBlogsData(allBlogs.filter((blog) => blog.isFeatured).slice(0, 3));
        }
      } catch (err) {
        console.error("Failed to load blog:", err.message);
        setBlogsData([]);
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const featuredBlogs = blogsData;

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

      {/* Three Main Pillars */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Three Main Pillars
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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

            <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-3">Technology</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with emerging tech trends, software reviews, and
                practical tips to leverage technology for business and personal
                growth.
              </p>
              <Link href="/technology" className="text-blue-600 font-medium">
                Read More →
              </Link>
            </div>

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

      {/* Featured Articles */}
      {featuredBlogs?.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2 md:mb-8">
              What&#39;s trending among readers today!
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredBlogs.map((blog) => (
                <FeaturedBlogCard key={blog.id || blog.slug} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Author */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Image
            src={adminPic}
            alt="Author"
            className="w-28 h-28 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hi, I’m{" "}
            <Link
              href="/anshuman-sinha"
              className="font-semibold underline underline-offset-2"
            >
              Anshuman Sinha
            </Link>
            , the creator of Trendflap. I’m passionate about AI, Tech, and
            Digital Marketing, and I love sharing insights, tutorials, and
            strategies to help people stay ahead in the digital age.
          </p>
        </div>
      </section>

      {/* Categories Cloud */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Explore by Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "AI Tools",
              "Machine Learning",
              "SEO",
              "Content Marketing",
              "Social Media",
              "Automation",
              "Productivity",
              "Tech Reviews",
            ].map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full cursor-pointer hover:bg-blue-200 transition"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            What Readers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                “Trendflap helped me understand AI tools better for my business.
                Super insightful!”
              </p>
              <span className="font-semibold text-gray-900">— Sarah M.</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                “The tutorials are clear and easy to follow. Great resource for
                marketers.”
              </p>
              <span className="font-semibold text-gray-900">— David K.</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                “I always find the latest tech trends here before anywhere else.
                Love it!”
              </p>
              <span className="font-semibold text-gray-900">— Priya S.</span>
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

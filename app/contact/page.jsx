"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import * as gtag from "@/lib/gtag";

const metadata = {
  title: "Contact Us - Trendflap",
  description:
    "Got questions, ideas, or collaboration requests? We'd love to hear from you. Let's connect and grow together in the world of AI, Tech, and Digital Marketing.",
  keywords: [
    "Contact Trendflap",
    "Get in Touch",
    "AI blog founder",
    "technology blog",
    "digital marketing expert",
    "SEO consultant",
  ],
  openGraph: {
    title: "Contact Us - Trendflap",
    description:
      "Got questions, ideas, or collaboration requests? We'd love to hear from you. Let's connect and grow together in the world of AI, Tech, and Digital Marketing.",
    url: "https://www.trendflap.in/contact",
    type: "website",
    images: [
      {
        url: "https://www.trendflap.in/TrendflapLogo.png",
        width: 1200,
        height: 630,
        alt: "Trendflap Contact Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Contact Us - Trendflap",
    description:
      "Got questions, ideas, or collaboration requests? We'd love to hear from you. Let's connect and grow together in the world of AI, Tech, and Digital Marketing.",
    image: "https://www.trendflap.in/TrendflapLogo.png",
  },
  alternates: {
    canonical: "https://www.trendflap.in/contact",
  },
};

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Got questions, ideas, or collaboration requests? We’d love to hear
          from you. Let’s connect and grow together in the world of AI, Tech,
          and Digital Marketing.
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          {/* Form Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
                onClick={() =>
                  gtag.event({
                    action: "cta_click",
                    params: {
                      label: "Contact Form Submit",
                      page: window.location.pathname,
                    },
                  })
                }
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-6">
              You can also reach out to us via email or connect on social media
              for updates, insights, and collaborations.
            </p>
            <ul className="space-y-3">
              <li>
                📧 <span className="font-medium">Email:</span>{" "}
                <Link
                  href="mailto:hello@trendflap.com"
                  className="text-blue-600 hover:underline"
                >
                  hello@trendflap.com
                </Link>
              </li>
              <li>
                🐦 <span className="font-medium">Twitter:</span>{" "}
                <Link
                  href="https://twitter.com/trendflap"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  @trendflap
                </Link>
              </li>
              <li>
                💼 <span className="font-medium">LinkedIn:</span>{" "}
                <Link
                  href="https://linkedin.com/company/trendflap"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Trendflap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Something Amazing 🚀
        </h2>
        <p className="max-w-xl mx-auto">
          Whether you’re a brand, a fellow creator, or just curious — drop us a
          message and let’s start a conversation.
        </p>
      </section>

      <Footer />
    </>
  );
}

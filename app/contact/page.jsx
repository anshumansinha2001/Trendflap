import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

import ContactForm from "@/components/ContactForm";

export const metadata = {
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

      {/* Contact Form + Info */}
      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 grid md:grid-cols-1 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Send Me a Message
            </h2>
            <p className="text-gray-600 mb-4 md:mb-6">
              I will get back to you as soon as possible!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-500 py-16 text-center text-white">
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

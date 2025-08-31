import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ContactForm from "@/components/ContactForm";
import Script from "next/script";

export const metadata = {
  title: "Contact Trendflap | Get in Touch with Us",
  description:
    "Have questions, ideas, or collaboration requests? Contact Trendflap today. We’d love to connect and grow together in AI, Tech, and Digital Marketing.",
  openGraph: {
    title: "Contact Trendflap | Get in Touch with Us",
    description:
      "Have questions, ideas, or collaboration requests? Contact Trendflap today. We’d love to connect and grow together in AI, Tech, and Digital Marketing.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/TrendflapLogo.png`,
        width: 1200,
        height: 630,
        alt: "Contact Trendflap - AI, Tech & Digital Marketing Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Trendflap | Get in Touch with Us",
    description:
      "Have questions, ideas, or collaboration requests? Contact Trendflap today. We’d love to connect and grow together in AI, Tech, and Digital Marketing.",
    images: [`${process.env.NEXT_PUBLIC_DOMAIN}/TrendflapLogo.png`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
  },
};

export default function Contact() {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              url: "https://www.trendflap.in/contact",
              name: "Contact Trendflap",
              description:
                "Have questions, ideas, or collaboration requests? Contact Trendflap today to connect about AI, Tech, and Digital Marketing.",
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Trendflap",
              url: "https://www.trendflap.in",
              logo: "https://www.trendflap.in/TrendflapLogo.png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "info@trendflap.in", // replace with your actual email
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://twitter.com/your_twitter_handle",
                "https://www.linkedin.com/in/theanshumansinha",
              ],
            },
          ]),
        }}
      />

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

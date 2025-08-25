// pages/privacy-policy.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Trendflap",
  description:
    "Learn about how Trendflap collects, uses, and protects your personal information when you visit our website. Your privacy matters to us.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Trendflap",
    description:
      "Our privacy policy explains how we collect, use, and protect your information. Your privacy matters to us at Trendflap.",
    url: "https://www.trendflap.in/privacy-policy",
    type: "website",
    // It's good practice to have an OG image for every important page,
    // even for a policy page.
    images: [
      {
        url: "https://www.trendflap.in/TrendflapLogo.png",
        width: 1200,
        height: 630,
        alt: "Trendflap Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Trendflap",
    description:
      "Our privacy policy explains how we collect, use, and protect your information. Your privacy matters to us at Trendflap.",
  },
  alternates: {
    canonical: "https://www.trendflap.in/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-50 py-8 lg:py-16 text-center">
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm lg:text-lg text-gray-600 max-w-xs lg:max-w-3xl mx-auto">
          Your privacy matters to us at Trendflap. This policy explains how we
          collect, use, and protect your information when you visit our site.
        </p>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email
              address, and any details you voluntarily submit via contact forms
              or newsletter sign-ups. Additionally, non-personal information
              like browser type, IP address, and pages visited may be collected
              for analytics purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To improve our website’s performance and user experience.</li>
              <li>To respond to your inquiries or requests.</li>
              <li>
                To send updates, newsletters, and promotional content (only if
                you opt-in).
              </li>
              <li>
                To analyze trends and user behavior through analytics tools.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">3. Cookies</h2>
            <p>
              We use cookies to enhance your browsing experience and analyze
              site traffic. You can choose to disable cookies in your browser
              settings, but some features of the site may not function properly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              4. Third-Party Services
            </h2>
            <p>
              We may use third-party tools like Google Analytics and Google
              AdSense. These services may collect and process data in accordance
              with their own privacy policies. We do not control these
              third-party services but choose them carefully to ensure they are
              reputable and secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
            <p>
              We take reasonable measures to protect your personal data.
              However, no method of transmission over the internet is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal
              information stored with us. To exercise these rights, please
              contact us at{" "}
              <Link
                href="mailto:hello@trendflap.com"
                className="text-blue-600 hover:underline"
              >
                hello@trendflap.com
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with the updated date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please email
              us at{" "}
              <Link
                href="mailto:hello@trendflap.com"
                className="text-blue-600 hover:underline"
              >
                hello@trendflap.com
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LatestBlogCard from "@/components/blog/LatestBlogCard";
import FeaturedBlogCard from "@/components/blog/FeaturedBlogCard";
import Link from "next/link";
import { fetchBlogs } from "@/lib/api";

export const metadata = {
  title: "Technology Insights & IT Trends | Trendflap",
  description:
    "Stay ahead with the latest technology insights — software development, cloud computing, cybersecurity, IT infrastructure, and emerging tech trends for 2025.",
  keywords: [
    "Technology",
    "IT",
    "software development",
    "cloud computing",
    "cybersecurity",
    "IT infrastructure",
    "tech trends",
  ],
  openGraph: {
    title: "Technology Insights & IT Trends | Trendflap",
    description:
      "Stay ahead with the latest technology insights — software development, cloud computing, cybersecurity, IT infrastructure, and emerging tech trends for 2025.",
    url: "https://www.trendflap.com/technology",
    siteName: "Trendflap",
    images: [
      {
        url: "https://www.trendflap.com/TrendflapLogo.png",
        width: 1200,
        height: 630,
        alt: "Technology Insights & IT Trends | Trendflap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Insights & IT Trends | Trendflap",
    description:
      "Stay ahead with the latest technology insights — software development, cloud computing, cybersecurity, IT infrastructure, and emerging tech trends for 2025.",
    images: ["https://www.trendflap.com/TrendflapLogo.png"],
    site: "@trendflap",
    creator: "@trendflap",
  },
  alternates: {
    canonical: "https://www.trendflap.com/technology",
  },
};

export default async function TechnologyPage() {
  let allBlogs = [];
  try {
    allBlogs = await fetchBlogs();
  } catch (error) {
    console.error("❌ Failed to fetch blogs:", error);
  }

  const blogsData = allBlogs
    ? allBlogs.filter((blog) => blog.category === "Technology").slice(0, 3)
    : [];

  const featuredBlogs = allBlogs
    ? allBlogs.filter((blog) => blog.isFeatured).slice(0, 3)
    : [];

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-6 md:py-10">
        {/* Hero */}
        <section>
          <div className="max-w-6xl mx-auto px-0 md:px-4 text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mt-2">
              Technology & IT: Strategies, Tools & Trends for 2025
            </h1>
            <p className="text-sm md:text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              From <strong>cloud computing</strong> to{" "}
              <strong>cybersecurity</strong> and
              <strong> software engineering</strong>, this guide covers the most
              impactful technologies reshaping businesses, workflows, and
              products in 2025.
            </p>
            <p className="text-gray-500 my-2">August 16, 2025 • 14 min read</p>
          </div>
        </section>

        {/* Table of Contents & TL;DR Section */}
        <section className="bg-gray-50 p-5 rounded-xl shadow-sm mb-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
            {/* TOC */}
            <div className="flex-1 order-1 ">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Table of Contents
              </h2>
              <ol className="list-decimal list-inside space-y-1 text-blue-600">
                <li>
                  <Link href="#what-is-tech" className="hover:underline">
                    What Is “Technology” in 2025?
                  </Link>
                </li>
                <li>
                  <Link href="#tech-stack" className="hover:underline">
                    The Modern IT Stack
                  </Link>
                </li>
                <li>
                  <Link href="#workflows" className="hover:underline">
                    High-Impact IT Workflows
                  </Link>
                </li>
                <li>
                  <Link href="#tools" className="hover:underline">
                    Essential Tools & Frameworks
                  </Link>
                </li>
                <li>
                  <Link href="#measurement" className="hover:underline">
                    Measuring Tech ROI
                  </Link>
                </li>
                <li>
                  <Link href="#security" className="hover:underline">
                    Security, Compliance & Best Practices
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:underline">
                    FAQs
                  </Link>
                </li>
              </ol>
            </div>

            {/* TL;DR */}
            <div className="flex-1 order-2">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                TL;DR
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  ⚙️ Tech is now a core growth engine, not just IT support.
                </li>
                <li>🚀 Cloud is the future of IT, not just cloud computing.</li>
                <li>☁️ DevOps is the future of IT, not just IT automation.</li>
                <li>🔐 Security is a top priority, not just IT security.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="py-6 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <section id="what-is-tech" className="mb-12">
              <h2 className="text-3xl font-bold mb-4">
                What Is “Technology” in 2025?
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Technology today is a fusion of{" "}
                <strong>software, hardware, and connectivity</strong> that
                enables automation, scalability, and innovation across
                industries.
              </p>
              <p className="text-lg leading-relaxed">
                IT is no longer a back-office function—it’s a{" "}
                <strong>strategic growth engine</strong> that powers operations,
                customer experience, and data-driven decision-making.
              </p>
            </section>

            <section id="tech-stack" className="mb-12">
              <h2 className="text-3xl font-bold mb-4">The Modern IT Stack</h2>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-4">
                <li>
                  <strong>Infrastructure Layer:</strong> cloud platforms (AWS,
                  Azure, GCP), hybrid networks.
                </li>
                <li>
                  <strong>Application Layer:</strong> business software, APIs,
                  integrations.
                </li>
                <li>
                  <strong>Data Layer:</strong> analytics, warehousing,
                  AI-enhanced processing.
                </li>
                <li>
                  <strong>Security Layer:</strong> identity management,
                  encryption, monitoring.
                </li>
              </ul>
              <p className="text-lg leading-relaxed">
                Like any good system, keep your stack <em>modular</em> so you
                can scale and swap components without breaking workflows.
              </p>
            </section>

            <section id="workflows" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                High-Impact IT Workflows
              </h2>

              <h3 className="text-2xl font-semibold mb-3">
                1) Cloud Migration & Optimization
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-lg leading-relaxed mb-4">
                <li>Audit existing workloads for migration readiness.</li>
                <li>Choose the right cloud model (public, private, hybrid).</li>
                <li>Implement security-first architecture.</li>
                <li>Set up cost monitoring and optimization tools.</li>
              </ol>

              <h3 className="text-2xl font-semibold mb-3">
                2) DevOps Automation
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
                <li>Automate testing, deployments, and monitoring.</li>
                <li>Use CI/CD pipelines for faster release cycles.</li>
                <li>Monitor system health in real-time.</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3">
                3) Cybersecurity Playbook
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                <li>Regular vulnerability scanning & patching.</li>
                <li>Zero-trust access policies.</li>
                <li>Incident response plans & drills.</li>
              </ul>
            </section>

            <section id="tools" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Essential Tools & Frameworks
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                <li>
                  <strong>For Dev:</strong> Docker, Kubernetes, GitHub Actions.
                </li>
                <li>
                  <strong>For Ops:</strong> Terraform, Ansible, Prometheus.
                </li>
                <li>
                  <strong>For Security:</strong> Okta, CrowdStrike, Vault.
                </li>
              </ul>
            </section>

            <section id="measurement" className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Measuring Tech ROI</h2>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-4">
                <li>
                  <strong>Performance:</strong> uptime %, latency, error rates.
                </li>
                <li>
                  <strong>Efficiency:</strong> cost savings, time to deploy.
                </li>
                <li>
                  <strong>Security:</strong> breaches prevented, incidents
                  resolved.
                </li>
              </ul>
              <p className="text-lg leading-relaxed">
                Use quarterly reviews to track and iterate—tech ROI compounds
                when continuously optimized.
              </p>
            </section>

            <section id="security">
              <h2 className="text-3xl font-bold mb-4">
                Security, Compliance & Best Practices
              </h2>
              <p className="text-lg leading-relaxed">
                Compliance frameworks (ISO 27001, SOC 2, GDPR) aren’t just
                checkboxes—they build trust and resilience. Regular audits,
                encrypted data flows, and strict access controls keep systems
                safe.
              </p>
            </section>
          </div>
        </article>

        {/* FAQs */}
        <section id="faq" className="mt-6">
          <h2 className="text-2xl font-semibold mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-lg">
                What’s the most in-demand tech skill in 2025?
              </h3>
              <p className="text-gray-600">
                Cloud architecture and cybersecurity remain top priorities for
                most companies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Is AI part of “Technology”?
              </h3>
              <p className="text-gray-600">
                Yes, AI is now a critical part of the modern tech stack for
                automation and analytics.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                How often should I update my IT systems?
              </h3>
              <p className="text-gray-600">
                Security patches should be applied immediately; major system
                reviews should happen quarterly.
              </p>
            </div>
          </div>
        </section>

        {/* Latest Technology Blogs Section */}
        {blogsData.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-semibold mb-5">
              Latest Technology Blogs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {blogsData.map((blog) => (
                <LatestBlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          </section>
        )}

        {/* Featured Technology Blogs */}
        {featuredBlogs.length > 0 && (
          <section className="not-prose mt-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              What&rsquo;s trending among readers today!
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredBlogs.map((blog) => (
                <FeaturedBlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

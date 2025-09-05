import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LatestBlogCard from "@/components/blog/LatestBlogCard";
import FeaturedBlogCard from "@/components/blog/FeaturedBlogCard";
import Link from "next/link";
import { fetchBlogs } from "@/lib/api";

export const metadata = {
  title: "AI - Trendflap - The AI Blog for Digital Marketing and Technology",
  description:
    "Explore the latest trends and insights in AI, digital marketing, and technology with Trendflap's dedicated AI blog.",
  keywords: [
    "AI",
    "Artificial Intelligence",
    "Digital Marketing",
    "Technology",
    "Machine Learning",
    "Deep Learning",
    "AI Trends",
    "AI Applications",
    "AI in Marketing",
    "AI Tools",
  ],
  openGraph: {
    title: "AI - Trendflap - The AI Blog for Digital Marketing and Technology",
    description:
      "Explore the latest trends and insights in AI, digital marketing, and technology with Trendflap's dedicated AI blog.",
    url: "https://trendflap.in/ai",
    type: "website",
    images: [
      {
        url: "https://trendflap.in/TrendflapLogo.png",
        width: 1200,
        height: 630,
        alt: "AI - Trendflap - The AI Blog for Digital Marketing and Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI - Trendflap - The AI Blog for Digital Marketing and Technology",
    description:
      "Explore the latest trends and insights in AI, digital marketing, and technology with Trendflap's dedicated AI blog.",
    images: ["https://trendflap.in/TrendflapLogo.png"],
  },
  alternates: {
    canonical: "https://www.trendflap.in/ai",
  },
};

export default async function AIPage() {
  let allBlogs = [];
  try {
    allBlogs = await fetchBlogs();
  } catch (error) {
    console.error("❌ Failed to fetch blogs:", error);
  }

  const blogsData = allBlogs
    ? allBlogs.filter((blog) => blog.category === "AI").slice(0, 3)
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
              Artificial Intelligence: Practical Playbooks for 2025
            </h1>
            <p className="text-sm md:text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              A hands-on guide to using AI for <strong>SEO</strong>, content,
              analytics, automation, and product development—built for
              marketers, developers, and founders who want results, not
              buzzwords.
            </p>
            <p className="text-gray-500 my-2">August 15, 2025 • 12 min read</p>
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
              <ol className="list-decimal list-inside space-y-1 text-blue-500">
                <li>
                  <Link href="#what-is-ai" className="hover:underline">
                    What Is AI?
                  </Link>
                </li>
                <li>
                  <Link href="#ai-stack" className="hover:underline">
                    The Modern AI Stack
                  </Link>
                </li>
                <li>
                  <Link href="#workflows" className="hover:underline">
                    High-ROI AI Workflows (Step-by-Step)
                  </Link>
                </li>
                <li>
                  <Link href="#prompts" className="hover:underline">
                    Prompt & System Template Pack
                  </Link>
                </li>
                <li>
                  <Link href="#measurement" className="hover:underline">
                    Measuring Impact (KPIs & QA)
                  </Link>
                </li>
                <li>
                  <Link href="#ethics" className="hover:underline">
                    Ethics, Safety & Compliance
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
                <li> 🚀 AI automates and scales key business tasks.</li>
                <li> 🧠 Modular AI stack = data, models, tools, delivery.</li>
                <li> ✍️ 3–5× faster SEO content with AI workflows.</li>
                <li> 📊 Smarter support and analytics with AI insights.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="py-6 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <section id="what-is-ai" className="mb-12">
              <h2 className="text-3xl font-bold mb-4">
                What Is AI (in simple terms)?
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Artificial Intelligence is software that can{" "}
                <strong>understand</strong> inputs (text, images, audio),
                <strong> reason</strong> over them, and{" "}
                <strong>generate</strong> useful outputs. In practice, today’s
                AI shines at language, pattern recognition, and
                automation—turning manual, repetitive work into reliable,
                scalable workflows.
              </p>
              <p className="text-lg leading-relaxed">
                For businesses, AI is not just a “tool”; it’s an{" "}
                <strong>operating advantage</strong> that compounds over time
                through faster experimentation, cheaper content generation, and
                smarter decision-making.
              </p>
            </section>

            <section id="ai-stack" className="mb-12">
              <h2 className="text-3xl font-bold mb-4">The Modern AI Stack</h2>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-4">
                <li>
                  <strong>Data Layer:</strong> your content, analytics, CRM,
                  product data.
                </li>
                <li>
                  <strong>Model Layer:</strong> LLMs for language; vision models
                  for images; embedding models for search.
                </li>
                <li>
                  <strong>Orchestration:</strong> prompt templates, retrieval
                  (RAG), evaluation, and guardrails.
                </li>
                <li>
                  <strong>Delivery:</strong> chatbots, internal tools,
                  automations, content pipelines, product features.
                </li>
              </ul>
              <p className="text-lg leading-relaxed">
                Keep the stack <em>modular</em>: start simple, measure impact,
                then scale with better data and tighter integration.
              </p>
            </section>

            <section id="workflows" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                High-ROI AI Workflows (Step-by-Step)
              </h2>

              <h3 className="text-2xl font-semibold mb-3">
                1) AI for SEO Content Pipelines
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-lg leading-relaxed mb-4">
                <li>
                  <strong>Topic Map:</strong> cluster keywords by intent
                  (problem, comparison, solution).
                </li>
                <li>
                  <strong>Briefs:</strong> generate outlines with target
                  queries, FAQs, and internal links.
                </li>
                <li>
                  <strong>Draft:</strong> produce first draft that matches
                  search intent and reading level.
                </li>
                <li>
                  <strong>Human Edit:</strong> add expertise, examples, and
                  screenshots.
                </li>
                <li>
                  <strong>Optimize:</strong> refine headings, meta tags, schema,
                  and internal links.
                </li>
              </ol>
              <p className="text-lg leading-relaxed mb-6">
                Result: 3–5× faster publishing cadence without sacrificing
                quality—great for new domains building topical authority.
              </p>

              <h3 className="text-2xl font-semibold mb-3">
                2) AI for Analytics & Reporting
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
                <li>
                  Auto-summarize weekly traffic, conversions, and anomalies.
                </li>
                <li>
                  Explain “why” using segment comparisons and attribution notes.
                </li>
                <li>
                  Suggest tests: landing page copy, new keywords, email
                  subjects.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3">
                3) AI in Product & Support
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                <li>Smart search: retrieve docs/FAQs with embeddings.</li>
                <li>
                  Instant responses: draft support replies with tone control.
                </li>
                <li>
                  Churn prevention: summarize tickets and flag risk patterns.
                </li>
              </ul>
            </section>

            <section id="prompts" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Prompt & System Template Pack
              </h2>

              <h3 className="text-2xl font-semibold mb-3">
                SEO Blog Outline (System)
              </h3>
              <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded border text-base mb-6">
                {`You are an expert editor. Produce an outline with H2/H3s, FAQs, and internal link suggestions. Target reader intent and include skimmable bullets.`}
              </pre>

              <h3 className="text-2xl font-semibold mb-3">
                Productivity Summary (User)
              </h3>
              <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded border text-base mb-6">
                {`Summarize last 7 days of analytics (sessions, leads, CTR). Add insights, reasons, and 3 experiments to try next week.`}
              </pre>

              <h3 className="text-2xl font-semibold mb-3">
                Support Draft (User)
              </h3>
              <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded border text-base">
                {`Write a concise, empathetic reply. Confirm the issue, provide 2 fixes, and add a follow-up question if needed.`}
              </pre>
            </section>

            <section id="measurement" className="mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Measuring Impact (KPIs & QA)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-4">
                <li>
                  <strong>SEO:</strong> indexed pages, impressions, CTR, top-3
                  rankings, conversions.
                </li>
                <li>
                  <strong>Content:</strong> publish velocity,
                  time-to-first-draft, edits per draft, dwell time.
                </li>
                <li>
                  <strong>Support:</strong> first response time, CSAT,
                  resolution rate.
                </li>
                <li>
                  <strong>Automation:</strong> hours saved, error rate, rework
                  percentage.
                </li>
              </ul>
              <p className="text-lg leading-relaxed">
                Build a simple review loop: <em>define</em> metrics →{" "}
                <em>run</em> workflow → <em>audit</em> samples →{" "}
                <em>iterate</em> prompts/data.
              </p>
            </section>

            <section id="ethics">
              <h2 className="text-3xl font-bold mb-4">
                Ethics, Safety & Compliance
              </h2>
              <p className="text-lg leading-relaxed">
                Use consent-based data, disclose AI-assisted content where
                relevant, and keep a human-in-the-loop for decisions that impact
                customers. Document prompts, data sources, and evaluation
                criteria to reduce bias and ensure reproducibility.
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
                Is AI difficult to learn?
              </h3>
              <p className="text-gray-600">
                Not anymore! With beginner-friendly tools and platforms, you can
                start using AI without deep technical knowledge.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                How can AI help my business?
              </h3>
              <p className="text-gray-600">
                AI can automate repetitive tasks, improve decision-making, and
                enhance customer experiences.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Is AI safe?</h3>
              <p className="text-gray-600">
                Yes, when implemented responsibly with proper safeguards and
                ethical considerations.
              </p>
            </div>
          </div>
        </section>

        {/* Latest AI Blogs */}
        {blogsData.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-semibold mb-5">Latest AI Blogs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {blogsData.map((blog) => (
                <LatestBlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          </section>
        )}

        {/* Featured Blogs */}
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

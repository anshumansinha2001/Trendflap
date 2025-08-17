import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LatestBlogCard from "@/components/LatestBlogCard";
import { blogsData } from "@/assests";
import FeaturedBlogCard from "@/components/FeaturedBlogCard";
import Link from "next/link";

export default function DigitalMarketingPage() {
  // Find blogs which catogory is Digital Marketing
  const dmBlogs = blogsData
    .filter((blog) => blog.category === "Digital Marketing")
    .slice(0, 3);

  // Find featured 3 blogs
  const featuredBlogs = blogsData.filter((blog) => blog.isFeatured).slice(0, 3);

  return (
    <>
      <Head>
        <title>Digital Marketing Blogs & Insights | Trendflap</title>
        <meta
          name="description"
          content="Master Digital Marketing with our 2025 playbooks — SEO, content strategy, paid ads, email funnels, and analytics. Learn step-by-step workflows to grow your business."
        />
        <meta
          name="keywords"
          content="digital marketing, SEO, content marketing, paid ads, social media marketing, marketing automation, email marketing"
        />
      </Head>

      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-6 md:py-10">
        {/* Hero */}
        <section>
          <div className="max-w-6xl mx-auto px-0 md:px-4 text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mt-2">
              Digital Marketing: Strategies That Drive Growth in 2025
            </h1>
            <p className="text-sm md:text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              A step-by-step guide to scaling traffic, conversions, and brand
              visibility with <strong>SEO</strong>, paid ads, social media,
              email funnels, and data-driven optimization.
            </p>
            <p className="text-gray-500 my-2">August 16, 2025 • 14 min read</p>
          </div>
        </section>

        {/* Table of Contents & TL;DR Section */}
        <section className="bg-gray-50 p-5 rounded-xl shadow-sm mb-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
            <div className="flex-1 order-1 ">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Table of Contents
              </h2>
              <ol className="list-decimal list-inside space-y-1 text-blue-600">
                <li>
                  <Link href="#what-is-dm" className="hover:underline">
                    What Is Digital Marketing?
                  </Link>
                </li>
                <li>
                  <Link href="#dm-stack" className="hover:underline">
                    The Modern Marketing Stack
                  </Link>
                </li>
                <li>
                  <Link href="#workflows" className="hover:underline">
                    High-ROI Marketing Workflows
                  </Link>
                </li>
                <li>
                  <Link href="#templates" className="hover:underline">
                    Campaign & Copy Templates
                  </Link>
                </li>
                <li>
                  <Link href="#measurement" className="hover:underline">
                    Measuring ROI & KPIs
                  </Link>
                </li>
                <li>
                  <Link href="#ethics" className="hover:underline">
                    Ethics & Compliance
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:underline">
                    FAQs
                  </Link>
                </li>
              </ol>
            </div>

            <div className="flex-1 order-2">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                TL;DR
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  📢 Digital marketing blends creativity with data to reach the
                  right audience.
                </li>
                <li>
                  📈 Data-driven optimization: SEO, paid ads, email funnels, and
                  more.
                </li>
                <li>
                  🔄 High-ROI workflows: SEO funnels, paid ads, and email
                  series.
                </li>
                <li>
                  📊 Track ROI via traffic, leads, sales, and retention metrics.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="py-6 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <section id="what-is-dm" className="mb-12">
              <h2 className="text-3xl font-bold mb-4">
                What Is Digital Marketing?
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Digital marketing is the art and science of promoting products
                or services <strong>online</strong> through channels like search
                engines, social media, email, and paid ads.
              </p>
              <p className="text-lg leading-relaxed">
                In 2025, success depends on integrating creative storytelling
                with <strong>data-driven decision-making</strong> to target the
                right audience at the right time.
              </p>
            </section>

            <section id="dm-stack" className="mb-12">
              <h2 className="text-3xl font-bold mb-4">
                The Modern Marketing Stack
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-4">
                <li>
                  <strong>Content Layer:</strong> blogs, videos, landing pages,
                  social posts.
                </li>
                <li>
                  <strong>Traffic Sources:</strong> SEO, PPC, influencer,
                  organic social.
                </li>
                <li>
                  <strong>Conversion Layer:</strong> landing pages, funnels,
                  lead magnets.
                </li>
                <li>
                  <strong>Retention Tools:</strong> email automation, loyalty
                  programs, remarketing.
                </li>
              </ul>
              <p className="text-lg leading-relaxed">
                Keep your stack lean — only add tools when there’s a proven ROI.
              </p>
            </section>

            <section id="workflows" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                High-ROI Marketing Workflows
              </h2>

              <h3 className="text-2xl font-semibold mb-3">
                1) SEO Content Funnel
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-lg leading-relaxed mb-4">
                <li>Research keywords with buyer intent.</li>
                <li>Create high-value content targeting those queries.</li>
                <li>Optimize on-page SEO and internal linking.</li>
                <li>Promote through social and email.</li>
                <li>Track rankings and conversions.</li>
              </ol>

              <h3 className="text-2xl font-semibold mb-3">
                2) Paid Ads Optimization
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
                <li>Set campaign objectives (leads, sales, awareness).</li>
                <li>Test ad creatives and targeting segments.</li>
                <li>Retarget engaged users with follow-up offers.</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3">
                3) Email Nurture Series
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                <li>Welcome email with value offer.</li>
                <li>Story-driven follow-ups with tips or case studies.</li>
                <li>Conversion push with time-limited offer.</li>
              </ul>
            </section>

            <section id="templates" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Campaign & Copy Templates
              </h2>

              <h3 className="text-2xl font-semibold mb-3">
                High-Converting Landing Page Headline
              </h3>
              <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded border text-base mb-6">
                {`Get [result] in [timeframe] without [pain point] — Here’s How`}
              </pre>

              <h3 className="text-2xl font-semibold mb-3">
                Email Subject Line
              </h3>
              <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded border text-base mb-6">
                {`[Name], here’s how to [achieve benefit] this week`}
              </pre>

              <h3 className="text-2xl font-semibold mb-3">
                Retargeting Ad Copy
              </h3>
              <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded border text-base">
                {`Still thinking about [product]? See why [X] customers chose us — Click to learn more.`}
              </pre>
            </section>

            <section id="measurement" className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Measuring ROI & KPIs</h2>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-4">
                <li>
                  <strong>Traffic:</strong> organic visits, paid clicks, CTR.
                </li>
                <li>
                  <strong>Leads:</strong> cost per lead, conversion rate.
                </li>
                <li>
                  <strong>Sales:</strong> ROAS, average order value.
                </li>
                <li>
                  <strong>Retention:</strong> email engagement, repeat
                  purchases.
                </li>
              </ul>
              <p className="text-lg leading-relaxed">
                Review metrics weekly, test changes, and double down on what
                works.
              </p>
            </section>

            <section id="ethics">
              <h2 className="text-3xl font-bold mb-4">Ethics & Compliance</h2>
              <p className="text-lg leading-relaxed">
                Follow GDPR and privacy rules, avoid misleading claims, and
                ensure transparency in ad targeting.
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
                Is digital marketing expensive?
              </h3>
              <p className="text-gray-600">
                It can be cost-effective if campaigns are targeted and
                optimized.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                How long before I see results?
              </h3>
              <p className="text-gray-600">
                SEO may take months, but paid ads and email can bring results
                faster.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Do I need all channels?</h3>
              <p className="text-gray-600">
                No — focus on the 2–3 channels where your audience is most
                active.
              </p>
            </div>
          </div>
        </section>

        {/* Latest Digital Marketing Blogs */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-5">
            Latest Digital Marketing Blogs
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {dmBlogs.map((blog) => (
              <LatestBlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>

        {/* Featured Digital Marketing Blogs */}
        <section className="not-prose mt-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            What&rsquo;s trending among readers today!
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredBlogs.map((blog) => (
              <FeaturedBlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

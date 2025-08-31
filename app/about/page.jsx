import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import { trendflapLogo } from "@/assests";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "About Trendflap | AI, Tech & Digital Marketing Blog",
  description:
    "Discover the story behind Trendflap, founded by Anshuman Sinha. Learn about our mission to simplify AI, technology, and digital marketing for everyone.",
  openGraph: {
    title: "About Trendflap | AI, Tech & Digital Marketing Blog",
    description:
      "Discover the story behind Trendflap, founded by Anshuman Sinha. Learn about our mission to simplify AI, technology, and digital marketing for everyone.",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/about`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/TrendflapLogo.png`,
        width: 1200,
        height: 630,
        alt: "About Trendflap - AI, Tech & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Trendflap | AI, Tech & Digital Marketing Blog",
    description:
      "Discover the story behind Trendflap, founded by Anshuman Sinha. Learn about our mission to simplify AI, technology, and digital marketing for everyone.",
    images: [`${process.env.NEXT_PUBLIC_DOMAIN}/TrendflapLogo.png`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/about`,
  },
};

export default function About() {
  return (
    <>
      <Navbar />

      {/* Schema Markup */}
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              url: "https://www.trendflap.in/about",
              name: "About Trendflap",
              description:
                "Learn more about Trendflap, founded by Anshuman Sinha, and our mission to simplify AI, technology, and digital marketing concepts.",
              publisher: {
                "@type": "Organization",
                name: "Trendflap",
                url: "https://www.trendflap.in",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.trendflap.in/TrendflapLogo.png",
                },
              },
              mainEntity: {
                "@type": "Organization",
                name: "Trendflap",
                url: "https://www.trendflap.in",
                founder: {
                  "@type": "Person",
                  name: "Anshuman Sinha",
                  url: "https://www.trendflap.in/anshuman-sinha",
                  jobTitle: "SEO Analyst & Web Developer",
                  sameAs: [
                    "https://www.linkedin.com/in/theanshumansinha",
                    "https://www.anshumansinha.site/",
                  ],
                },
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Trendflap",
              url: "https://www.trendflap.in",
              logo: "https://www.trendflap.in/TrendflapLogo.png",
              founder: {
                "@type": "Person",
                name: "Anshuman Sinha",
                url: "https://www.trendflap.in/anshuman-sinha",
              },
              sameAs: [
                "https://twitter.com/your_twitter_handle",
                "https://www.linkedin.com/in/theanshumansinha",
              ],
            },
          ]),
        }}
      />

      {/* Hero Section */}
      <section className="bg-blue-50 py-6 md:py-12 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          About Trendflap
        </h1>
        <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
          Learn more about me, my journey, and why I started Trendflap – your
          go-to hub for AI, Technology, and Digital Marketing insights.
        </p>
      </section>

      {/* About Me Section */}
      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className=" flex items-center justify-center">
            <Image
              src={trendflapLogo}
              alt="Trendflap Logo"
              width={400}
              height={400}
              className="bg-gray-200 w-50 md:w-80 rounded-lg"
            />
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Hi, I’m{" "}
              <Link
                href="/anshuman-sinha"
                className="cursor-pointer underline underline-offset-2 text-blue-500 hover:text-blue-400"
              >
                Anshuman Sinha
              </Link>
              👋
            </h2>
            <p className="text-gray-700 mb-4">
              I’m a <strong>Computer Science Engineer</strong> with a passion
              for technology, digital marketing, and the ever-evolving world of
              Artificial Intelligence. Over the past <strong>2 years</strong>,
              I’ve gained industry experience helping organisations improve
              their <strong>SEO</strong>, increase leads, and boost website
              traffic.
            </p>
            <p className="text-gray-700 mb-4">
              While working on real-world projects, I developed a strong
              understanding of search engine algorithms, user behaviour, and
              digital growth strategies. I’ve seen firsthand how powerful the
              right mix of{" "}
              <strong>AI tools, tech innovation, and marketing tactics</strong>{" "}
              can be in scaling a business online.
            </p>
            <p className="text-gray-700 mb-4">
              I started Trendflap to share my knowledge and help others avoid
              the mistakes I made in my early career. My goal is to provide
              practical, actionable guides so you can stay ahead of trends,
              adopt the latest technologies, and grow your digital presence
              effectively.
            </p>
            <p className="text-gray-700">
              Whether you’re an aspiring marketer, a tech enthusiast, or a
              business owner looking to leverage AI and digital tools, Trendflap
              is here to guide you.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-blue-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission at Trendflap</h2>
        <p className="max-w-3xl mx-auto">
          To simplify AI, technology, and digital marketing concepts, making
          them accessible to everyone — from beginners to industry professionals
          — so you can innovate, grow, and succeed in the digital age.
        </p>
      </section>

      {/* Call to Action */}
      <NewsLetter />

      <Footer />
    </>
  );
}

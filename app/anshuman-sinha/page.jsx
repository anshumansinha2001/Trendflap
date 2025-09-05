import { adminPic } from "@/assests";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Script from "next/script";
import { FaLinkedin, FaGlobe, FaEnvelope } from "react-icons/fa";

export default function AnshumanSinhaPage() {
  return (
    <>
      <Navbar />

      {/* ✅ Structured Data Schema */}
      <Script
        id="anshuman-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: "https://www.trendflap.in/anshuman-sinha",
            name: "Anshuman Sinha | Web Developer & SEO Analyst",
            description:
              "Personal portfolio of Anshuman Sinha, SEO Analyst and creator of Trendflap. Skilled in SEO, web development, and digital marketing.",
            about: {
              "@type": "Person",
              name: "Anshuman Sinha",
              image: `${process.env.NEXT_PUBLIC_DOMAIN}/admin.jpg`,
              jobTitle: "SEO Analyst & Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Wisemonk",
              },
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Visvesvaraya Technological University (VTU)",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "National Institute of Digital Marketing (NIDM)",
                },
              ],
              knowsAbout: [
                "Search Engine Optimization (SEO)",
                "Web Development",
                "Content Marketing",
                "Digital Marketing",
              ],
              email: "mailto:anshumansinhaa@icloud.com",
              url: "https://www.trendflap.in/anshuman-sinha",
              sameAs: [
                "https://www.linkedin.com/in/theanshumansinha",
                "https://www.anshumansinha.site/",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                addressCountry: "India",
              },
            },
            publisher: {
              "@type": "Organization",
              name: "Trendflap",
              url: "https://www.trendflap.in",
            },
          }),
        }}
      />

      {/* ✅ PAGE CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT SIDEBAR */}
        <aside className="lg:col-span-1 bg-white p-6 rounded-xl shadow-md md:sticky md:top-20 h-fit">
          <div className="flex flex-col items-center text-center">
            {/* Profile Pic */}
            <Image
              src={adminPic}
              alt="Anshuman Sinha"
              width={160}
              height={160}
              className="rounded-full shadow-md border-4 border-blue-200"
            />

            {/* Name + Title */}
            <h1 className="text-2xl font-bold mt-4 text-blue-500">
              Anshuman Sinha
            </h1>
            <p className="text-gray-600">
              SEO Analyst at Wisemonk | Web Developer
            </p>
            <p className="text-gray-500 text-sm">Bengaluru, Karnataka, India</p>

            {/* Social Links */}
            <div className="flex gap-5 mt-4">
              <a
                href="mailto:anshumansinhaa@icloud.com"
                className="text-blue-500 hover:text-blue-800 text-xl"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/theanshumansinha"
                target="_blank"
                className="text-blue-500 hover:text-blue-800 text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.anshumansinha.site/"
                target="_blank"
                className="text-blue-500 hover:text-blue-800 text-xl"
              >
                <FaGlobe />
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Top Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "SEO (Search Engine Optimization)",
                "Web Development",
                "Content Marketing",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Languages</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Hindi – Native / Bilingual</li>
              <li>English – Professional Working</li>
            </ul>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <section className="lg:col-span-2 space-y-8">
          {/* About */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-3 text-blue-500">About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              I am a Computer Science Engineer with strong expertise in Web
              Development and Search Engine Optimization (SEO). With hands-on
              experience in managing real-time client projects, collaborating in
              teams, and applying analytical skills, I thrive in delivering
              high-quality solutions. Additionally, I possess a solid foundation
              in Digital Marketing, making me adaptable to a variety of
              tech-driven business needs. Always eager to learn and grow, I aim
              to leverage my skills to drive innovation and success.
            </p>
          </div>

          {/* Experience */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-3 text-blue-500">
              Experience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold">Wisemonk</h3>
                <p className="text-gray-600">
                  SEO Analyst | Sept 2025 – Present
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>
                    Handling website SEO strategies, audits, and technical
                    optimizations.
                  </li>
                  <li>
                    Creating keyword-focused content to drive organic lead
                    generation.
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-600">
                  SEO Executive | May 2025 – Aug 2025
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>
                    Managed website SEO, audits, and technical fixes to improve
                    rankings.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold">Punt Partners</h3>
                <p className="text-gray-600">
                  SEO Executive | Nov 2024 – May 2025
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>
                    Optimized SEO for YouTube channels & blogs (UltraTech,
                    VisitHealth, Utec).
                  </li>
                  <li>
                    Led redesign of company website to enhance UX & visual
                    appeal.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold">Digital Corsel</h3>
                <p className="text-gray-600">
                  SEO Intern | Oct 2024 – Nov 2024
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>
                    Executed SEO strategies including keyword optimization and
                    backlinking.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold">CodSoft</h3>
                <p className="text-gray-600">
                  Full-Stack MERN Developer | Nov 2023 – Dec 2023
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>
                    Developed a web app aligned with client requirements and UX
                    goals.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-3 text-blue-500">Education</h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">
                  VTU – Visvesvaraya Technological University
                </span>
                <br />
                B.E. Computer Science (2020 – 2024)
              </li>
              <li>
                <span className="font-semibold">
                  NIDM – National Institute of Digital Marketing
                </span>
                <br />
                Dynamic Digital Marketing Program (2024)
              </li>
              <li>
                <span className="font-semibold">Kendriya Vidyalaya</span>
                <br />
                PCM (2007 – 2019)
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-3 text-blue-500">
              Certifications
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Cascading Style Sheets (CSS)</li>
              <li>JavaScript (Basic)</li>
              <li>SEO Certificate</li>
              <li>Fundamentals of Digital Marketing</li>
              <li>Full-Stack Web Development</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export const metadata = {
  title: "Anshuman Sinha | Web Developer & SEO Analyst",
  description:
    "Anshuman Sinha, SEO Analyst and creator of Trendflap. Skilled in SEO, web development, and digital marketing with proven client project success.",
  openGraph: {
    title: "Anshuman Sinha | Web Developer & SEO Analyst",
    description:
      "Anshuman Sinha, SEO Analyst and creator of Trendflap. Skilled in SEO, web development, and digital marketing with proven client project success.",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/anshuman-sinha`,
    type: "profile",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/admin.jpg`,
        width: 1200,
        height: 630,
        alt: "Anshuman Sinha - Digital Marketer & Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshuman Sinha | Web Developer & SEO Analyst",
    description:
      "Anshuman Sinha, SEO Analyst and creator of Trendflap. Skilled in SEO, web development, and digital marketing with proven client project success.",
    images: [`${process.env.NEXT_PUBLIC_DOMAIN}/admin.jpg`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/anshuman-sinha`,
  },
};

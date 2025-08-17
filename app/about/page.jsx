// pages/about.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About Trendflap
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Learn more about me, my journey, and why I started Trendflap – your
          go-to hub for AI, Technology, and Digital Marketing insights.
        </p>
      </section>

      {/* About Me Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Image (Optional - Can be replaced with your photo) */}
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Your Image Here</span>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Hi, I’m Anshuman Sinha 👋
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
      <section className="bg-blue-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Our Mission at Trendflap</h2>
        <p className="max-w-3xl mx-auto">
          To simplify AI, technology, and digital marketing concepts, making
          them accessible to everyone — from beginners to industry professionals
          — so you can innovate, grow, and succeed in the digital age.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Let’s Grow Together 🚀
        </h2>
        <p className="text-gray-700 mb-6">
          Subscribe to Trendflap and get exclusive AI, tech, and digital
          marketing tips straight to your inbox.
        </p>
        <form className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-900 w-full"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
}

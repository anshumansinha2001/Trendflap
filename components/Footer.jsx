import Link from "next/link";
import Image from "next/image";
import { trendflapLogo } from "@/assests";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Tagline */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            {/* Small Logo */}
            <Image
              src={trendflapLogo} // <-- replace with your logo path (e.g. /assets/logo.png)
              alt="Trendflap Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold text-white">Trendflap</h2>
              <p className="text-sm">
                created by{" "}
                <Link
                  href="/anshuman-sinha"
                  className="hover:text-blue-400 font-semibold underline underline-offset-3"
                >
                  Anshuman Sinha
                </Link>
              </p>
            </div>
          </div>
          <p className="text-sm">
            Your daily dose of AI, Tech & Digital Marketing insights. Stay ahead
            of the trend with Trendflap.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/ai" className="hover:text-blue-400">
                Artificial Intelligence
              </Link>
            </li>
            <li>
              <Link href="/technology" className="hover:text-blue-400">
                Technology
              </Link>
            </li>
            <li>
              <Link href="/digital-marketing" className="hover:text-blue-400">
                Digital Marketing
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Trendflap. All rights reserved.
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { adminPic } from "@/assests";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Anshuman Sinha | Trendflap Founder",
  description:
    "Learn more about Anshuman Sinha, the software engineer and content creator behind Trendflap, and his passion for sharing knowledge about AI, technology, and digital marketing.",
  keywords: [
    "Anshuman Sinha",
    "Anshuman Singh",
    "Trendflap founder",
    "software engineer",
    "content creator",
    "AI",
    "digital marketing",
  ],
  openGraph: {
    title: "Anshuman Sinha | Trendflap Founder",
    description:
      "Learn more about Anshuman Sinha, the software engineer and content creator behind Trendflap, and his passion for sharing knowledge about AI, technology, and digital marketing.",
    url: "https://www.trendflap.in/anshuman-sinha",
    type: "profile",
    images: [
      {
        url: "https://www.trendflap.in/admin.jpg",
        height: 630,
        alt: "Anshuman Sinha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshuman Sinha | Trendflap Founder",
    description:
      "Learn more about Anshuman Sinha, the software engineer and content creator behind Trendflap, and his passion for sharing knowledge about AI, technology, and digital marketing.",
    images: ["https://www.trendflap.in/admin.jpg"],
  },
  alternates: {
    canonical: "https://www.trendflap.in/anshuman-sinha",
  },
};

export default function AnshumanSingh() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center py-10 h-[90vh]">
        <Image
          src={adminPic}
          alt="Anshuman Singh"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold mt-4">Anshuman Singh</h1>
        <p className="text-gray-500 text-center">
          I am a software engineer, tech enthusiast, and content creator. I love
          to learn and share my knowledge with others.
        </p>
        <Link href="/">
          <p className="mt-4 text-blue-500 hover:underline">Back to Home</p>
        </Link>
      </div>
      <Footer />
    </>
  );
}

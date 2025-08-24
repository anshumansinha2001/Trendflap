import Image from "next/image";
import Link from "next/link";
import { adminPic } from "@/assests";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          <p className="mt-4 text-blue-600 hover:underline">Back to Home</p>
        </Link>
      </div>
      <Footer />
    </>
  );
}

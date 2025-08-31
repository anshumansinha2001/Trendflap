import Link from "next/link";
import Image from "next/image";
import React from "react";
import moment from "moment";

const LatestBlogCard = ({ blog }) => {
  return (
    <Link
      key={blog.slug}
      href={`/${blog.category.toLowerCase().replace(" ", "-")}/${blog.slug}`}
      className="bg-white rounded-xl shadow hover:shadow-lg hover:bg-blue-50 transition p-2.5 border"
    >
      <Image
        src={blog.image}
        alt={blog.imageAlt || blog.title}
        width={500}
        height={500}
        className="w-full h-48 rounded-lg mb-4 object-fill hover:opacity-90 transition"
      />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h3>
      <p className="text-gray-800 text-sm mb-3">
        {moment(blog.updatedAt).fromNow()}
      </p>
      <p className="text-gray-600 text-sm mb-4">{blog.metaDescription}</p>
      <p className="flex justify-between text-sm text-gray-600 font-medium">
        {blog.date}
        <span className="text-blue-500 hover:underline">Read More →</span>
      </p>
    </Link>
  );
};

export default LatestBlogCard;

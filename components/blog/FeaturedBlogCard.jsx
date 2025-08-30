import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedBlogCard = ({ blog }) => {
  return (
    <Link
      href={`/${blog.category.toLowerCase().replace(" ", "-")}/${blog.slug}`}
      className="block bg-gray-100 p-3 rounded-lg shadow hover:shadow-md transition"
    >
      {/* Blog Image */}
      <Image
        src={blog.image}
        alt={blog.imageAlt || blog.title}
        width={500}
        height={500}
        className="w-full h-48 rounded-lg mb-4 object-fill hover:opacity-90 transition"
      />
      {/* Category Tag */}
      <p className="inline-block mb-3 px-3 py-1 text-xs font-medium text-blue-500 bg-blue-100 rounded-full ">
        {blog.category}
      </p>
      {/* Blog Title */}
      <h4 className="font-semibold mb-2">{blog.title}</h4>
      <p className="text-gray-800 text-sm mb-3">
        {moment(blog.updatedAt).fromNow()}
      </p>
      <p className="text-sm text-gray-600">{blog.metaDescription}</p>
      <p className="flex justify-between text-sm text-gray-600 font-medium">
        {blog.date}
        <span className="text-blue-500 hover:underline">Read More →</span>
      </p>
    </Link>
  );
};

export default FeaturedBlogCard;

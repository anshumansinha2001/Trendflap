"use client";
import React from "react";
import { toast } from "react-toastify";

const NewsLetter = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    toast.success("Subscribed successfully!");
    e.target.reset(); // reset form fields
  };

  return (
    <section className="bg-blue-500 py-16 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h2>
      <p className="max-w-xs md:max-w-xl mx-auto mb-6">
        Join our newsletter to get the latest AI, tech, and marketing updates
        delivered straight to your inbox every week.
      </p>
      <form
        onSubmit={onSubmit}
        className="flex flex-col md:flex-row justify-center gap-4 max-w-xs md:max-w-lg mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md text-gray-900 bg-amber-50 w-full"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-white text-blue-500 rounded-md font-semibold hover:bg-gray-200 hover:cursor-pointer transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;

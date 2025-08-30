"use client";

import * as gtag from "@/lib/gtag";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    gtag.event({
      action: "cta_click",
      params: {
        label: "Contact Form Submit",
        page: window.location.pathname,
      },
    });

    // TODO: here you can send the form data to an API (optional)
    alert("Message submitted! 🚀");
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="block text-gray-700 mb-2">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Message</label>
        <textarea
          rows="5"
          placeholder="Write your message..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;

"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BlogForm() {
  const navigate = useRouter();

  // --- utils: slugify with 60-char limit, special chars -> "-" ---
  const slugify = (str) => {
    if (!str) return "";
    const base = str
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "") // remove accents
      .replace(/[^a-z0-9]+/g, "-") // non-alnum -> hyphen
      .replace(/^-+|-+$/g, "") // trim hyphens
      .replace(/-+/g, "-"); // collapse
    const limited = base.slice(0, 60);
    return limited.replace(/^-+|-+$/g, "");
  };

  // Detect if user manually edited slug (so we don't keep overwriting)
  const [slugEdited, setSlugEdited] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    metaTitle: "",
    metaDescription: "",
    category: "AI",
    read: "",
    image: null,
    imageAlt: "",
    isFeatured: false,
    tldr: [""],
    toc: [{ id: "", text: "" }],
    content: "",
    faq: [{ question: "", answer: "" }],
  });

  const metaTitleCount = useMemo(
    () => (formData.metaTitle || "").length,
    [formData.metaTitle]
  );
  const metaDescCount = useMemo(
    () => (formData.metaDescription || "").length,
    [formData.metaDescription]
  );

  // --- change handlers ---
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    // Title: also auto-generate slug if not manually edited
    if (name === "title") {
      const nextTitle = value;
      setFormData((prev) => ({
        ...prev,
        title: nextTitle,
        slug: slugEdited ? prev.slug : slugify(nextTitle),
      }));
      return;
    }

    // Slug: sanitize + limit + mark edited
    if (name === "slug") {
      setSlugEdited(true);
      const cleaned = slugify(value);
      setFormData({ ...formData, slug: cleaned });
      return;
    }

    // Meta limits
    if (name === "metaTitle") {
      const limited = value.slice(0, 60);
      setFormData({ ...formData, metaTitle: limited });
      return;
    }
    if (name === "metaDescription") {
      const limited = value.slice(0, 160);
      setFormData({ ...formData, metaDescription: limited });
      return;
    }

    // File
    if (type === "file") {
      setFormData({ ...formData, [name]: files?.[0] || null });
      return;
    }

    // Checkboxes
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (field, index, value) => {
    const updated = [...formData[field]];
    updated[index] = value;
    setFormData({ ...formData, [field]: updated });
  };

  const handleFaqChange = (index, field, value) => {
    const updated = [...formData.faq];
    updated[index][field] = value;
    setFormData({ ...formData, faq: updated });
  };

  // TOC: auto-generate id from text unless user typed id separately
  const handleTocChange = (index, field, value) => {
    const updated = [...formData.toc];

    if (field === "text") {
      updated[index].text = value;
      // always regenerate id from full text (so it stays in sync automatically)
      updated[index].id = slugify(value);
    } else if (field === "id") {
      updated[index].id = slugify(value);
    }

    setFormData((prev) => ({ ...prev, toc: updated }));
  };

  const addField = (field) => {
    if (field === "tldr") {
      setFormData({ ...formData, tldr: [...formData.tldr, ""] });
    } else if (field === "faq") {
      setFormData({
        ...formData,
        faq: [...formData.faq, { question: "", answer: "" }],
      });
    } else if (field === "toc") {
      setFormData({
        ...formData,
        toc: [...formData.toc, { id: "", text: "" }],
      });
    }
  };

  const removeField = (field, index) => {
    const updated = [...formData[field]];
    updated.splice(index, 1);
    setFormData({ ...formData, [field]: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validations
    if (!formData.title?.trim()) {
      toast.error("Title is required");
      return;
    }
    if (!formData.slug?.trim()) {
      toast.error("Slug is required");
      return;
    }
    if (!formData.content?.trim()) {
      toast.error("Content is required");
      return;
    }

    setLoading(true);

    try {
      const body = new FormData();
      // append primitives & file
      body.append("title", formData.title);
      body.append("slug", formData.slug);
      body.append("metaTitle", formData.metaTitle);
      body.append("metaDescription", formData.metaDescription);
      body.append("category", formData.category);
      body.append("read", formData.read);
      if (formData.image) body.append("image", formData.image);
      body.append("imageAlt", formData.imageAlt);
      body.append("isFeatured", String(formData.isFeatured));
      body.append("content", formData.content);

      // append arrays/objects as JSON
      body.append("tldr", JSON.stringify(formData.tldr));
      body.append("toc", JSON.stringify(formData.toc));
      body.append("faq", JSON.stringify(formData.faq));

      await axios.post("/api/blog", body, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("✅ Blog created successfully!");
      // reset form
      setFormData({
        title: "",
        slug: "",
        metaTitle: "",
        metaDescription: "",
        category: "AI",
        read: "",
        image: null,
        imageAlt: "",
        isFeatured: false,
        tldr: [""],
        toc: [{ id: "", text: "" }],
        content: "",
        faq: [{ question: "", answer: "" }],
      });
      setSlugEdited(false);

      // redirect after a short pause so toast is visible
      setTimeout(() => navigate.push("/admin/blogs"), 800);
    } catch (error) {
      const apiMsg =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        "Unknown error";
      toast.error(`❌ Blog creation failed: ${apiMsg}`);
    } finally {
      setLoading(false);
    }
  };

  // --- UI ---
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-8 my-6">
      {/* Page Title / Live Preview */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          {formData.title?.trim() ? formData.title : "Create New Blog"}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Slug preview:{" "}
          <span className="font-mono text-gray-700">
            /{formData.slug || "your-slug-here"}
          </span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7">
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1.5">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., How AI is Transforming Digital Marketing"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block font-semibold mb-1.5">
            Slug (auto-generated, editable)
          </label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="how-ai-is-transforming-digital-marketing"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Max 60 chars. Only letters, numbers, and hyphens.
          </p>
        </div>

        {/* Meta */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">SEO Metadata</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Meta Title</label>
              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Up to 60 characters"
              />
              <p
                className={`text-xs mt-1 ${
                  metaTitleCount > 60 ? "text-red-600" : "text-gray-500"
                }`}
              >
                {metaTitleCount}/60
              </p>
            </div>
            <div>
              <label className="block font-medium">Meta Description</label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
                rows={2}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Up to 160 characters"
              />
              <p
                className={`text-xs mt-1 ${
                  metaDescCount > 160 ? "text-red-600" : "text-gray-500"
                }`}
              >
                {metaDescCount}/160
              </p>
            </div>
          </div>
        </div>

        {/* Category & Read Time */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Meta & Read Time
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>AI</option>
                <option>Tech</option>
                <option>Digital Marketing</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Read Time</label>
              <input
                type="text"
                name="read"
                value={formData.read}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 7 min read"
              />
            </div>
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Featured Image
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Upload Image</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
                className="w-full border rounded-md px-3 py-2 bg-gray-50"
              />
            </div>
            <div>
              <label className="block font-medium">Image Alt</label>
              <input
                type="text"
                name="imageAlt"
                value={formData.imageAlt}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the image for accessibility/SEO"
              />
            </div>
          </div>
        </div>

        {/* Featured */}
        <div>
          <label className="block font-semibold mb-2">Featured</label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                setFormData({ ...formData, isFeatured: !formData.isFeatured })
              }
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                formData.isFeatured ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-pressed={formData.isFeatured}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                  formData.isFeatured ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
            <span className="text-sm text-gray-700">
              {formData.isFeatured
                ? "This blog will be featured"
                : "Not featured"}
            </span>
          </div>
          {/* (kept original checkbox field for data binding if needed) */}
          <input
            type="checkbox"
            name="isFeatured"
            checked={formData.isFeatured}
            onChange={handleChange}
            className="hidden"
          />
        </div>

        {/* TLDR */}
        <div>
          <label className="block font-semibold mb-2">TL;DR Points</label>
          {formData.tldr.map((point, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input
                type="text"
                value={point}
                onChange={(e) => handleArrayChange("tldr", i, e.target.value)}
                className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Point ${i + 1}`}
              />
              <button
                type="button"
                onClick={() => removeField("tldr", i)}
                className="text-red-600 px-2 rounded hover:bg-red-50"
                aria-label={`Remove TLDR ${i + 1}`}
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("tldr")}
            className="text-blue-600 text-sm hover:underline"
          >
            + Add Point
          </button>
        </div>

        {/* TOC */}
        <div>
          <label className="block font-semibold mb-2">Table of Contents</label>
          {formData.toc.map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-2 mb-2">
              <input
                type="text"
                placeholder="Section Title (e.g., Introduction)"
                value={item.text}
                onChange={(e) => handleTocChange(i, "text", e.target.value)}
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Anchor ID (auto from title)"
                value={item.id}
                onChange={(e) => handleTocChange(i, "id", e.target.value)}
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="md:col-span-2">
                <button
                  type="button"
                  onClick={() => removeField("toc", i)}
                  className="text-red-600 text-sm hover:underline"
                >
                  Remove TOC item
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("toc")}
            className="text-blue-600 text-sm hover:underline"
          >
            + Add TOC Item
          </button>
        </div>

        {/* Content */}
        <div>
          <label className="block font-semibold mb-2">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="8"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder='Supports HTML (e.g., <h2 id="intro">Intro</h2> ...)'
            required
          ></textarea>
          <p className="text-xs text-gray-500 mt-1">
            Tip: Make sure your section headings use the same IDs as your TOC
            items.
          </p>
        </div>

        {/* FAQ */}
        <div>
          <label className="block font-semibold mb-2">FAQ</label>
          {formData.faq.map((f, i) => (
            <div key={i} className="mb-3">
              <input
                type="text"
                placeholder="Question"
                value={f.question}
                onChange={(e) => handleFaqChange(i, "question", e.target.value)}
                className="w-full border rounded-md px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Answer"
                value={f.answer}
                onChange={(e) => handleFaqChange(i, "answer", e.target.value)}
                rows="2"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => removeField("faq", i)}
                className="text-red-600 text-sm hover:underline"
              >
                Remove FAQ
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("faq")}
            className="text-blue-600 text-sm hover:underline"
          >
            + Add FAQ
          </button>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "Saving..." : "Save Blog"}
          </button>
        </div>
      </form>
    </div>
  );
}

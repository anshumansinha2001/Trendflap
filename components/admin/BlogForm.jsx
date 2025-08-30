"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BlogForm({ initialData, onSubmit }) {
  const navigate = useRouter();

  // --- utils: slugify with 60-char limit, special chars -> "-" ---
  const slugify = (str) => {
    if (!str) return "";
    const base = str
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/-+/g, "-");
    const limited = base.slice(0, 60);
    return limited.replace(/^-+|-+$/g, "");
  };

  const [slugEdited, setSlugEdited] = useState(false);
  const [authorSlugEdited, setAuthorSlugEdited] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ imagePreview state
  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    metaTitle: "",
    metaDescription: "",
    category: "",
    categorySlug: "",
    categoryTag: "",
    read: "5 min read",
    image: null,
    imageAlt: "",
    author: "Anshuman Sinha",
    authorSlug: "anshuman-sinha",
    isFeatured: false,
    tldr: [""],
    toc: [{ id: "", text: "" }],
    content: "",
    faq: [{ question: "", answer: "" }],
  });

  // Load initial data (edit mode)
  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
        category: initialData.category || prev.category,
        categorySlug: slugify(initialData.category || prev.category), // regenerate
        categoryTag: initialData.categoryTag || prev.categoryTag,
        image: null, // file can't be prefilled
      }));
      setImagePreview(initialData.image || null);
    }
  }, [initialData]);

  const metaTitleCount = useMemo(
    () => (formData.metaTitle || "").length,
    [formData.metaTitle]
  );
  const metaDescCount = useMemo(
    () => (formData.metaDescription || "").length,
    [formData.metaDescription]
  );

  // --- handlers (functional updates everywhere) ---
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const file = files?.[0] || null;
      setFormData((prev) => ({ ...prev, [name]: file }));
      if (file) setImagePreview(URL.createObjectURL(file));
      return;
    }

    if (name === "title") {
      const nextTitle = value;
      setFormData((prev) => ({
        ...prev,
        title: nextTitle,
        slug: slugEdited ? prev.slug : slugify(nextTitle),
      }));
      return;
    }

    if (name === "slug") {
      setSlugEdited(true);
      const cleaned = slugify(value);
      setFormData((prev) => ({ ...prev, slug: cleaned }));
      return;
    }

    if (name === "author") {
      const nextAuthor = value;
      setFormData((prev) => ({
        ...prev,
        author: nextAuthor,
        authorSlug: authorSlugEdited ? prev.authorSlug : slugify(nextAuthor),
      }));
      return;
    }

    if (name === "authorSlug") {
      setAuthorSlugEdited(true);
      const cleaned = slugify(value);
      setFormData((prev) => ({ ...prev, authorSlug: cleaned }));
      return;
    }

    if (name === "category") {
      setFormData((prev) => ({
        ...prev,
        category: value,
        categorySlug: slugify(value), // ✅ derive fresh on change
      }));
      return;
    }
    if (name === "categoryTag") {
      setFormData((prev) => ({
        ...prev,
        categoryTag: value,
      }));
      return;
    }

    if (name === "metaTitle") {
      const limited = value.slice(0, 60);
      setFormData((prev) => ({ ...prev, metaTitle: limited }));
      return;
    }

    if (name === "metaDescription") {
      const limited = value.slice(0, 160);
      setFormData((prev) => ({ ...prev, metaDescription: limited }));
      return;
    }

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (field, index, value) => {
    setFormData((prev) => {
      const updated = [...prev[field]];
      updated[index] = value;
      return { ...prev, [field]: updated };
    });
  };

  const handleFaqChange = (index, field, value) => {
    setFormData((prev) => {
      const updated = [...prev.faq];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, faq: updated };
    });
  };

  const handleTocChange = (index, field, value) => {
    setFormData((prev) => {
      const updated = [...prev.toc];
      if (field === "text") {
        updated[index] = {
          ...updated[index],
          text: value,
          id: slugify(value),
        };
      } else if (field === "id") {
        updated[index] = { ...updated[index], id: slugify(value) };
      }
      return { ...prev, toc: updated };
    });
  };

  const addField = (field) => {
    if (field === "tldr") {
      setFormData((prev) => ({ ...prev, tldr: [...prev.tldr, ""] }));
    } else if (field === "faq") {
      setFormData((prev) => ({
        ...prev,
        faq: [...prev.faq, { question: "", answer: "" }],
      }));
    } else if (field === "toc") {
      setFormData((prev) => ({
        ...prev,
        toc: [...prev.toc, { id: "", text: "" }],
      }));
    }
  };

  const removeField = (field, index) => {
    setFormData((prev) => {
      const updated = [...prev[field]];
      updated.splice(index, 1);
      return { ...prev, [field]: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      body.append("title", formData.title);
      body.append("slug", formData.slug);
      body.append("metaTitle", formData.metaTitle);
      body.append("metaDescription", formData.metaDescription);
      body.append("category", formData.category);
      body.append("categorySlug", formData.categorySlug);
      body.append("categoryTag", formData.categoryTag);
      body.append("read", formData.read);
      if (formData.image) body.append("image", formData.image);
      body.append("imageAlt", formData.imageAlt);
      body.append("author", formData.author);
      body.append("authorSlug", formData.authorSlug);
      body.append("isFeatured", String(formData.isFeatured));
      body.append("content", formData.content);
      body.append("tldr", JSON.stringify(formData.tldr));
      body.append("toc", JSON.stringify(formData.toc));
      body.append("faq", JSON.stringify(formData.faq));

      await onSubmit(body);

      toast.success("Blog saved successfully!");
      navigate.push("/admin/blogs");
    } catch (error) {
      const apiMsg =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        "Unknown error";
      toast.error(`Failed: ${apiMsg}`);
      console.log(error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  // --- UI (unchanged) ---
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-8 my-6">
      {/* title */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          {formData.title?.trim()
            ? formData.title
            : initialData
            ? "Edit Blog"
            : "Create New Blog"}
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
          <label className="block font-semibold mb-1.5">Title*</label>
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
              <label className="block font-medium">Meta Title*</label>
              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Up to 60 characters"
                required
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
              <label className="block font-medium">Meta Description*</label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
                rows={2}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Up to 160 characters"
                required
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

        {/* Image Upload */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Featured Image
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">
                {initialData ? "Replace Image (optional)" : "Upload Image*"}
              </label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
                className="w-full border rounded-md px-3 py-2 bg-gray-50"
                required={!initialData}
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-3 w-full max-h-64 object-contain rounded-md border"
                />
              )}
            </div>
            <div>
              <label className="block font-medium">Image Alt*</label>
              <input
                type="text"
                name="imageAlt"
                value={formData.imageAlt}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the image for accessibility/SEO"
                required
              />
            </div>
          </div>
        </div>

        {/* Featured & Read Time */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Featured & Read Time
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-2">Featured</label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      isFeatured: !prev.isFeatured,
                    }))
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                    formData.isFeatured ? "bg-blue-500" : "bg-gray-300"
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

        {/* Category & Category Tag */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Category & Category Tag
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Category*</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled hidden>
                  Select Category
                </option>
                <option value="AI">AI</option>
                <option value="Technology">Technology</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Other">Blog</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Category Tag</label>
              <select
                name="categoryTag"
                value={formData.categoryTag}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled hidden>
                  Select Category Tag
                </option>
                <option value="AI Tools">AI Tools</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="SEO">SEO</option>
                <option value="Content Marketing">Content Marketing</option>
                <option value="Social Media">Social Media</option>
                <option value="Automation">Automation</option>
                <option value="Productivity">Productivity</option>
                <option value="Tech Reviews">Tech Reviews</option>
              </select>
            </div>
          </div>
        </div>

        {/* Author & Author Slug */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">Author</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Author Name</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Anshuman Sinha"
              />
            </div>
            <div>
              <label className="block font-medium">Author Slug</label>
              <input
                type="text"
                name="authorSlug"
                value={formData.authorSlug}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="anshuman-sinha"
              />
            </div>
          </div>
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
            className="text-blue-500 text-sm hover:underline"
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
            className="text-blue-500 text-sm hover:underline"
          >
            + Add TOC Item
          </button>
        </div>
        {/* Content */}
        <div>
          <label className="block font-semibold mb-2">Content*</label>
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
          <label className="block font-semibold mb-2">FAQ*</label>
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
            className="text-blue-500 text-sm hover:underline"
          >
            + Add FAQ
          </button>
        </div>
        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto bg-blue-500 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Saving..." : "Save Blog"}
          </button>
        </div>
      </form>
    </div>
  );
}

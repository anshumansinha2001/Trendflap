import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    metaTitle: { type: String, trim: true },
    metaDescription: { type: String, trim: true },
    category: {
      type: String,
      enum: ["AI", "Tech", "Digital Marketing"],
      required: [true, "Category is required"],
    },
    read: { type: String, trim: true },
    date: {
      type: String,
      default: () => new Date().toDateString(),
    },
    image: { type: String, required: [true, "Image is required"], default: "" },
    imageAlt: { type: String, required: [true, "Image alt is required"] },
    isFeatured: { type: Boolean, default: false },
    tldr: [{ type: String }],
    toc: [{ id: String, text: String }],
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    faq: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const BlogModel = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default BlogModel;

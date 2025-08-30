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
      enum: ["AI", "Technology", "Digital Marketing", "Blog"],
      required: [true, "Category is required"],
    },
    categorySlug: {
      type: String,
      required: [true, "Category slug is required"],
      lowercase: true,
      trim: true,
    },
    categoryTag: {
      type: String,
      trim: true,
      default: "",
    },
    read: { type: String, trim: true },
    image: { type: String },
    imageAlt: { type: String, required: [true, "Image alt is required"] },
    author: { type: String },
    authorSlug: { type: String },
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

import connectDB from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

// ✅ Get all blogs
export async function GET() {
  await connectDB();
  try {
    const blogs = await BlogModel.find().sort({ createdAt: -1 });
    return NextResponse.json(blogs, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// ✅ Create new blog safely
export async function POST(req) {
  await connectDB();
  try {
    const formData = await req.formData();

    // --- Extract fields ---
    const title = formData.get("title");
    let slug = formData.get("slug");
    const category = formData.get("category");
    let categorySlug = formData.get("categorySlug");

    // --- Auto-generate slug if missing ---
    if (!slug && title) {
      slug = title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
    }

    // --- Auto-generate categorySlug if missing ---
    if (!categorySlug && category) {
      categorySlug = category.toLowerCase().replace(/\s+/g, "-");
    }

    const newBlog = new BlogModel({
      title,
      slug,
      metaTitle: formData.get("metaTitle"),
      metaDescription: formData.get("metaDescription"),
      category,
      categorySlug,
      categoryTag: formData.get("categoryTag"),
      read: formData.get("read"),
      content: formData.get("content"),
      author: formData.get("author"),
      authorSlug: formData.get("authorSlug"),
      image: null, // placeholder until Cloudinary succeeds
      imageAlt: formData.get("imageAlt"),
      isFeatured: formData.get("isFeatured") === "true",
      tldr: JSON.parse(formData.get("tldr") || "[]"),
      toc: JSON.parse(formData.get("toc") || "[]"),
      faq: JSON.parse(formData.get("faq") || "[]"),
    });

    // ✅ Save first (without image) so we have _id
    await newBlog.save();

    // --- Handle image if provided ---
    const file = formData.get("image");
    if (file && file.name) {
      try {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Cloudinary upload (stream-based for safety)
        const uploadResponse = await new Promise((resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              {
                folder: "trendflap",
                format: "webp",
                resource_type: "image",
              },
              (err, result) => {
                if (err) reject(err);
                else resolve(result);
              }
            )
            .end(buffer);
        });

        // ✅ Update blog with image URL
        newBlog.image = uploadResponse.secure_url;
        await newBlog.save();
      } catch (imgErr) {
        console.error("❌ Image upload failed, rolling back blog:", imgErr);

        // Rollback blog if image upload failed
        await BlogModel.findByIdAndDelete(newBlog._id);
        return NextResponse.json(
          { error: "Image upload failed, blog rolled back." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(newBlog, { status: 201 });
  } catch (err) {
    console.error("❌ Error creating blog:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

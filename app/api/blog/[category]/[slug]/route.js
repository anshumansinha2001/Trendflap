import connectDB from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

// ✅ GET blog by category + slug
export async function GET(req, { params }) {
  await connectDB();

  try {
    const blog = await BlogModel.findOne({
      categorySlug: params.category,
      slug: params.slug,
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// ✅ UPDATE blog by category + slug
export async function PUT(req, { params }) {
  await connectDB();
  try {
    const formData = await req.formData();

    // --- Build updateData safely ---
    const updateData = {};

    // Basic text fields
    const fields = [
      "title",
      "slug",
      "metaTitle",
      "metaDescription",
      "category",
      "read",
      "content",
      "author",
      "authorSlug",
      "imageAlt",
    ];

    fields.forEach((field) => {
      const val = formData.get(field);
      if (val !== null) updateData[field] = val;
    });

    // Arrays (parse JSON)
    updateData.tldr = JSON.parse(formData.get("tldr") || "[]");
    updateData.toc = JSON.parse(formData.get("toc") || "[]");
    updateData.faq = JSON.parse(formData.get("faq") || "[]");

    // Boolean conversion
    updateData.isFeatured = formData.get("isFeatured") === "true";

    // --- Handle image upload (if any) ---
    const file = formData.get("image");
    if (file && file.name) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadResponse = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            { folder: "trendflap", format: "webp" },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          )
          .end(buffer);
      });

      updateData.image = uploadResponse.secure_url;
    }

    // --- Ensure categorySlug updates too ---
    if (updateData.category) {
      updateData.categorySlug = updateData.category
        .toLowerCase()
        .replace(/\s+/g, "-");
    }

    // --- Update blog in one go ---
    const updatedBlog = await BlogModel.findOneAndUpdate(
      { categorySlug: params.category, slug: params.slug },
      updateData,
      { new: true }
    );

    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// ✅ DELETE blog
export async function DELETE(req, { params }) {
  await connectDB();
  try {
    const deletedBlog = await BlogModel.findOneAndDelete({
      categorySlug: params.category,
      slug: params.slug,
    });

    if (!deletedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

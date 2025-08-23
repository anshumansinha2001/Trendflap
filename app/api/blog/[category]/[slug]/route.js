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

    const updateData = {
      title: formData.get("title"),
      slug: formData.get("slug"),
      metaTitle: formData.get("metaTitle"),
      metaDescription: formData.get("metaDescription"),
      category: formData.get("category"),
      read: formData.get("read"),
      content: formData.get("content"),
      author: formData.get("author"),
      authorSlug: formData.get("authorSlug"),
      imageAlt: formData.get("imageAlt"),
      isFeatured: formData.get("isFeatured"),
      tldr: JSON.parse(formData.get("tldr") || "[]"),
      toc: JSON.parse(formData.get("toc") || "[]"),
      faq: JSON.parse(formData.get("faq") || "[]"),
    };

    let updatedBlog = await BlogModel.findOneAndUpdate(
      { categorySlug: params.category, slug: params.slug },
      updateData,
      { new: true }
    );

    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // ✅ Handle image upload
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

      updatedBlog = await BlogModel.findOneAndUpdate(
        { categorySlug: params.category, slug: params.slug },
        { image: uploadResponse.secure_url },
        { new: true }
      );
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

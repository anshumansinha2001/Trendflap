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

    const title = formData.get("title");
    const slug = formData.get("slug");
    const metaTitle = formData.get("metaTitle");
    const metaDescription = formData.get("metaDescription");
    const category = formData.get("category");
    const categorySlug = formData.get("categorySlug");
    const read = formData.get("read");
    const content = formData.get("content");
    const author = formData.get("author");
    const authorSlug = formData.get("authorSlug");

    // ✅ Step 1: Create blog first (without image)
    let newBlog = new BlogModel({
      title,
      slug,
      metaTitle,
      metaDescription,
      category,
      categorySlug,
      read,
      content,
      author,
      authorSlug,
      image: null, // no image yet
      imageAlt: formData.get("imageAlt"),
      isFeatured: formData.get("isFeatured") === "true",
      tldr: JSON.parse(formData.get("tldr") || "[]"),
      toc: JSON.parse(formData.get("toc") || "[]"),
      faq: JSON.parse(formData.get("faq") || "[]"),
    });

    await newBlog.save(); // if this fails → no image upload happens

    // ✅ Step 2: Handle image only after successful blog save
    const file = formData.get("image");
    if (file && file.name) {
      try {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploaded = await cloudinary.uploader.upload(
          `data:${file.type};base64,${buffer.toString("base64")}`,
          {
            folder: "trendflap",
            format: "webp",
            resource_type: "image",
          }
        );

        // ✅ Step 3: Update blog with Cloudinary image URL
        newBlog.image = uploaded.secure_url;
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

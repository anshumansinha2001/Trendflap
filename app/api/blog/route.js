import connectDB from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";

import { writeFile } from "fs/promises";
import path from "path";

export async function GET() {
  await connectDB();
  try {
    const blogs = await BlogModel.find().sort({ createdAt: -1 });
    return NextResponse.json(blogs, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  await connectDB();
  try {
    const formData = await req.formData();

    const title = formData.get("title");
    const slug = formData.get("slug");
    const metaTitle = formData.get("metaTitle");
    const metaDescription = formData.get("metaDescription");
    const category = formData.get("category");
    const read = formData.get("read");
    const content = formData.get("content");

    // Handle Image Upload
    const file = formData.get("image");
    let filePath = null;

    if (file && file.name) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name}`;
      filePath = path.join(process.cwd(), "public/uploads", fileName);

      await writeFile(filePath, buffer);

      filePath = `/uploads/${fileName}`; // relative path for frontend
    }

    const newBlog = new BlogModel({
      title,
      slug,
      metaTitle,
      metaDescription,
      category,
      read,
      content,
      image: filePath,
      imageAlt: formData.get("imageAlt"),
      isFeatured: formData.get("isFeatured") === "true",
      tldr: formData.getAll("tldr"),
      toc: JSON.parse(formData.get("toc") || "[]"),
      faq: JSON.parse(formData.get("faq") || "[]"),
    });

    await newBlog.save();
    return NextResponse.json(newBlog, { status: 201 });
  } catch (err) {
    console.error("Error creating blog:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

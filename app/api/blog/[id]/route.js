import connectDB from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";

import { writeFile } from "fs/promises";
import path from "path";

export async function GET(req, { params }) {
  await connectDB();
  try {
    const blog = await BlogModel.findById(params.id);
    if (!blog)
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    return NextResponse.json(blog, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

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
      imageAlt: formData.get("imageAlt"),
      isFeatured: formData.get("isFeatured") === "true",
      tldr: formData.getAll("tldr"),
      toc: JSON.parse(formData.get("toc") || "[]"),
      faq: JSON.parse(formData.get("faq") || "[]"),
    };

    // If a new image is uploaded
    const file = formData.get("image");
    if (file && file.name) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${Date.now()}-${file.name}`;
      let filePath = path.join(process.cwd(), "public/uploads", fileName);

      await writeFile(filePath, buffer);

      updateData.image = `/uploads/${fileName}`;
    }

    const updatedBlog = await BlogModel.findByIdAndUpdate(
      params.id,
      updateData,
      {
        new: true,
      }
    );

    if (!updatedBlog)
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });

    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (err) {
    console.error("Error updating blog:", err);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  await connectDB();
  try {
    const deletedBlog = await BlogModel.findByIdAndDelete(params.id);
    if (!deletedBlog)
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}

import mongoose from "mongoose";

let isConnected = false; // Global connection state

export default async function connectDB() {
  if (isConnected) {
    console.log("✅ Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("✅ New database connection established");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    throw new Error("Database connection failed"); // Better than process.exit
  }
}

import mongoose from "mongoose";

export async function connectDB() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB,
      autoCreate: true,
    });
  } catch (err) {
    process.exit(1);
  }
}

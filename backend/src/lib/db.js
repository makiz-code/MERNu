import mongoose from 'mongoose';

export async function connectDB(uri) {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(uri, { autoCreate: true });
  } catch (err) {
    process.exit(1);
  }
}

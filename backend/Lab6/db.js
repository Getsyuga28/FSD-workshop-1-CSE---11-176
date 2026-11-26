import mongoose from "mongoose";

// Connects to MongoDB using MONGO_URI from .env.
// Returns true on success, false if it could not connect (so the server can still run).
const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.warn("MONGO_URI not set - skipping MongoDB connection");
    return false;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    return false;
  }
};

export default connectDB;

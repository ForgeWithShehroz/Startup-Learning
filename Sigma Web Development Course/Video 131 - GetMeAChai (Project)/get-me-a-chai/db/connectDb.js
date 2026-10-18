import mongoose from "mongoose";

// Create a global cache variable to prevent duplicate connections in Next.js development
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  // 1. Return the existing connection if it's already open
  if (cached.conn) {
    return cached.conn;
  }

  // 2. If no connection promise exists, create a new one
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Fails fast if connection drops
    };

    const DB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/chai";

    cached.promise = mongoose.connect(DB_URI, opts).then((mongooseInstance) => {
      console.log(`🍃 MongoDB Connected: ${mongooseInstance.connection.host}`);
      return mongooseInstance;
    });
  }

  try {
    // 3. Await the pending connection promise
    cached.conn = await cached.promise;
  } catch (error) {
    // 4. Clear the broken promise on failure so it can retry next time
    cached.promise = null; 
    console.error("❌ MongoDB Connection Error:", error.message);
    
    // In serverless environments like Vercel, don't use process.exit(1) 
    // as it crashes the entire container instance. Just throw the error.
    throw error; 
  }

  return cached.conn;
};

export default connectDB;

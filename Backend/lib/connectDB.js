/* import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("mongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
 */

// Backend/lib/connectDB.js
import mongoose from "mongoose";

let cached = global._mongoose;
if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

export default async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const uri = process.env.MONGO; // behold dit navn, eller brug MONGO_URI
    if (!uri) throw new Error("Missing MONGO env var");

    cached.promise = mongoose
      .connect(uri, {
        // valgfrit: dbName: process.env.MONGO_DB,
        // no autoIndex i prod hvis du vil: autoIndex: false,
      })
      .then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

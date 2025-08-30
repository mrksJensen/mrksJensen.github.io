import app from "../index.js";
import connectDB from "../lib/connectDB.js";

// cache et enkelt connect-kald på tværs af invocations
let dbReady;
export default async function handler(req, res) {
  if (!dbReady) dbReady = connectDB();
  await dbReady;
  return app(req, res);
}

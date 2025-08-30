import app from "./index.js";
import connectDB from "./lib/connectDB.js";

const port = process.env.PORT || 3001;

async function start() {
  await connectDB(); // 1 gang ved opstart lokalt
  app.listen(port, () => console.log(`Backend on http://localhost:${port}`));
}

start().catch((err) => {
  console.error("Failed to start server", err);
  process.exit(1);
});

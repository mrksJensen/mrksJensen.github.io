/* import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
/* import connectDB from "./lib/connectDB.js"; */
/* import webhookRouter from "./routes/webhook.route.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import cors from "cors";

const app = express();

const allowed = new Set(
  [process.env.CLIENT_URL, "http://localhost:5173"].filter(Boolean)
); */

/* app.use(
  cors({
    origin(origin, cb) {
      if (!origin || allowed.has(origin)) return cb(null, true);
      return cb(new Error("CORS blocked"));
    },
    credentials: false,
  })
);

app.use(clerkMiddleware());
app.use("/webhooks", webhookRouter);
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
}); */

/* app.get("/test", (req, res) => {
  res.status(200).send("it works!");
}); */

/* app.get("/auth-state", (req, res) => {
  const authState = req.auth();
  res.json(authState);
}); */

/* app.get("/protect", (req, res) => {
  const { userId } = req.auth;
  if (!userId) {
    return res.status(401).json("not authenticated");
  }
  res.status(200).json("content");
}); */
/* app.get("/protect", requireAuth(), (req, res) => {
  res.status(200).json("content");
}); */

/* app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.get("/", (req, res) => res.send("Express on Vercel"));

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong",
    status: error.status,
    stack: error.stack,
  });
}); */

/* app.listen(3000, () => {
  connectDB();
  console.log("Server is running!");
}); */

/* export default app;
 */

import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";
import { clerkMiddleware /*, requireAuth */ } from "@clerk/express";
import cors from "cors";

const app = express();

// --- CORS:-
const allowlist = new Set(
  [
    "https://mrksjensen.github.io",
    "http://localhost:5173",
    process.env.CLIENT_URL?.replace(/\/$/, ""),
  ].filter(Boolean)
);

app.use(
  cors({
    origin(origin, cb) {
      if (!origin || allowlist.has(origin.replace(/\/$/, "")))
        return cb(null, true);
      return cb(new Error("CORS blocked: " + origin));
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  })
);

app.options("*", cors());

app.use(clerkMiddleware());

app.use("/webhooks", webhookRouter);

app.use(express.json());

// --- routes ---
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

// Health
app.get("/", (_req, res) => res.send("Express on Vercel"));

// Error handler
app.use((error, _req, res, _next) => {
  res.status(error.status || 500).json({
    message: error.message || "Something went wrong",
    status: error.status,
    stack: error.stack,
  });
});

export default app;

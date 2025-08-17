import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { connectDB } from "./lib/db.js";
import { notFound, errorHandler } from "./middleware/errors.js";
import tasksRouter from "./routes/tasks.routes.js";

const app = express();

// Middleware
app.use(helmet());
app.use(express.json({ limit: "100kb" }));
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

// Routes
app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api/tasks", tasksRouter);

// Error handlers
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

// Connect DB then start server
await connectDB(process.env.MONGO_URI);
app.listen(PORT);

import express from "express";
import cors from "cors";
import helmet from "helmet";
import { connectDB } from "./lib/db.js";
import { notFound, errorHandler } from "./middleware/errors.js";
import tasksRouter from "./routes/tasks.routes.js";

const app = express();

app.use(helmet());
app.use(express.json({ limit: "100kb" }));
app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api/tasks", tasksRouter);

app.use(notFound);
app.use(errorHandler);

await connectDB();
app.listen(process.env.API_PORT);
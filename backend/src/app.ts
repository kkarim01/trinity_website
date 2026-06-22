import cors from "cors";
import express from "express";

import { errorHandler, notFoundHandler } from "./middleware/errorHandler";
import { contactRouter } from "./routes/contact";
import { healthRouter } from "./routes/health";

const allowedOrigin = process.env.ALLOWED_ORIGIN;

export const app = express();

app.use(
  cors({
    origin: allowedOrigin,
  })
);
app.use(express.json());

app.use("/api/health", healthRouter);
app.use("/api/contact", contactRouter);

app.use(notFoundHandler);
app.use(errorHandler);

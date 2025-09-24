import express, { Express, Request, Response } from "express";
import morgan from "morgan";

const app: Express = express();

// Middleware
app.use(express.json());
app.use(morgan("combined"));

// Health check route
app.get("/api/v1/health", (_req: Request, res: Response) => {
  res.status(200).send("Server is healthy");
});

export default app;

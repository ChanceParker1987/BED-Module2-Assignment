import express, { Express } from "express";
import morgan from "morgan";
import employeeRoutes from "./api/v1/routes/employeeRoutes";

const app: Express = express();

// Middleware
app.use(express.json());
app.use(morgan("combined"));

// Health check route
app.get("/api/v1/health", (req, res) => {
  res.status(200).send("Server is healthy");
});

// Use Employee Routes
app.use("/api/v1", employeeRoutes);

export default app;

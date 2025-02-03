import "express-async-errors";
import "dotenv/config";
import express from "express";
import cors from "cors";
import Router from "./routes/classifyNum.js";

const app = express();

const PORT = process.env.PORT || 8080;

// Middleware for handling CORS requests

app.use(cors());
app.use(express.json());

app.use("/api/classify-number", Router);
function start() {
  app.listen(PORT, function () {
    console.log(`Server running at ${PORT}`);
  });
}

start();

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import imagesRouter from "./routes/images.js";

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Routes
app.use("/", imagesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));

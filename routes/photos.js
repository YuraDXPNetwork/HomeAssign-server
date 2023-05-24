import express from "express";
import { getPhotos, savePhotos } from "../controllers/photos.js";

const photoRouter = express.Router();

// Route to get all photos
photoRouter.get("/photos", getPhotos);

// Route to save photos
photoRouter.post("/photos", savePhotos);

export default photoRouter;

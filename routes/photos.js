import express from "express";
import { getImages, paginate, sortImages } from "../controllers/images.js";

const imagesRouter = express.Router();

// Route to fetch images
imagesRouter.get("/images", getImages);

// Route to sort images
imagesRouter.get("/sort", sortImages);

// Route to paginate images
imagesRouter.get("/paginate", paginate);

export default imagesRouter;

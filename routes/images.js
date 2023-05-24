import express from "express";
import { getImages, getNext, getPrev } from "../controllers/images.js";

const imagesRouter = express.Router();

// Route to fetch images
imagesRouter.get("/", getImages);
imagesRouter.get("/next", getNext);
imagesRouter.get("/prev", getPrev);





export default imagesRouter;

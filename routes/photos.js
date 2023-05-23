import express from "express";
import { getPhotos, savePhotos } from "../controllers/photos.js";

const photoRouter = express.Router();

photoRouter.get("/photos", getPhotos);
photoRouter.post("/photos", savePhotos);


export default photoRouter;
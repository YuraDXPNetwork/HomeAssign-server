import Photo from "../models/photo.js";

export const getPhotos = async (req, res) => {
    try {
        const photos = await Photo.find()
    } catch (error) {
         res.status(404).json({ message: error.message });
    }
}

export const savePhotos = async (req, res) => {
     try {
    const photos = req.body; // Assuming the request body contains an array of photos

    // Save each photo to the database
    const savedPhotos = await Photo.insertMany(photos);

    res.status(200).json(savedPhotos);
  } catch (error) {
    res.status(500).json({ message: "Failed to save photos to the database." });
}}
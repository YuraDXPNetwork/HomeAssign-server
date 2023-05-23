import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  pageURL: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  previewURL: {
    type: String,
    required: true,
  },
  previewWidth: {
    type: Number,
    required: true,
  },
  previewHeight: {
    type: Number,
    required: true,
  },
  webformatURL: {
    type: String,
    required: true,
  },
  webformatWidth: {
    type: Number,
    required: true,
  },
  webformatHeight: {
    type: Number,
    required: true,
  },
  largeImageURL: {
    type: String,
    required: true,
  },
  imageWidth: {
    type: Number,
    required: true,
  },
  imageHeight: {
    type: Number,
    required: true,
  },
  imageSize: {
    type: Number,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  downloads: {
    type: Number,
    required: true,
  },
  collections: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  comments: {
    type: Number,
    required: true,
  },
  user_id: {
    type: Number,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  userImageURL: {
    type: String,
    required: true,
  },
});

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;

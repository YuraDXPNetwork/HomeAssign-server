import axios from "axios";

let images = []

const baseURL = "https://pixabay.com/api"
const pixabay = axios.create({
  baseURL
});

export const getImages = async (req, res) => {
  try {
    // Prepare the URL based on the query parameter (type)
    const response = await pixabay.get("/", {
      params: {
        key: "25540812-faf2b76d586c1787d2dd02736",
        q: req.query.type,
      },
    });

    // Process the response data
    const data = response.data.hits;
    images = data;
    // Send the response
    res.json(data.slice(0, 9));
  } catch (error) {
    // Handle error
    console.log(error);
    res.status(500).json(error);
  }
};


export const getNext = async (req, res) => {
  try {
    const currentPage = parseInt(req.query.page) || 1;
    const nextPage = currentPage + 1;
    const perPage = 9;
    const startIndex = (nextPage - 1) * perPage;
    const endIndex = nextPage * perPage;

    // Slice the images array to get the paginated images
    const paginatedImages = images.slice(startIndex, endIndex);

    res.json(paginatedImages);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};


export const getPrev = async (req, res) => {
  try {
    const currentPage = parseInt(req.query.page) || 1;
    const prevPage = currentPage - 1;
    const perPage = 9;
    const startIndex = (prevPage - 1) * perPage;
    const endIndex = prevPage * perPage;

    // Slice the images array to get the paginated images
    const paginatedImages = images.slice(startIndex, endIndex);

    res.json(paginatedImages);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};



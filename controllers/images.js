export const getImages = async (req, res) => {
    try {
        // Make an API request using Axios
        const baseUrl =
            "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&per_page=9";

        // Prepare the URL based on the query parameter (type)
        const url = req.query.type ? `${baseUrl}&q=${req.query.type}` : baseUrl;

        const response = await axios.get(url);

        // Process the response data
        const data = response.data.hits;

        // Send the response
        res.json(data);
    } catch (error) {
        // Handle error
        res.status(500).json(error);
    }
};

const sortById = (data) => {
    return data.sort((a, b) => a.id - b.id);
};

export const sortImages = async (req, res) => {
    try {
        // Prepare the base URL
        const baseUrl =
            "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736";

        // Add the type for the URL if selected in the client
        const url = req.query.type ? `${baseUrl}&q=${req.query.type}` : baseUrl;

        // Make the API call with Axios
        const response = await axios.get(url, {
            transformResponse: [
                (responseData) => sortById(JSON.parse(responseData).hits), // Manipulate the response with the sort function
            ],
        });

        // Send the response
        res.json(response.data);
    } catch (error) {
        // Handle error
        res.status(500).json(error);
    }
};

export const paginate = async (req, res) => {
    try {
        // Make an API request using Axios
        const response = await axios.get(
            "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736",
            {
                params: {
                    // Send query parameters
                    q: req.query.type,
                    page: req.query.page,
                    per_page: 9,
                },
            }
        );

        // Send the response
        res.json(response.data.hits);
    } catch (error) {
        // Handle error
        res.status(500).json(error);
    }
};

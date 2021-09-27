import axios from "axios";

const KEY = "AIza******************************fz5Y";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});

// API key is hidden for security purposes.

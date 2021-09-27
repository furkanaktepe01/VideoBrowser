import axios from "axios";

const KEY = "AIzaSyBCaVDG5h-ohk4ZiBJbjP_jhUsUSyrfz5Y";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});
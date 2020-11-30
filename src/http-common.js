import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:44316/api",
    headers: {
        "Content-type": "application/json"
    }
});
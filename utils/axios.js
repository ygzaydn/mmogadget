import axios from "axios";

const instance = axios.create({
    baseURL: "https://mmo-games.p.rapidapi.com",
    headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_KEY,
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    },
});

export default instance;

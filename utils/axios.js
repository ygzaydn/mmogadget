import axios from "axios";

const instance = axios.create({
    baseURL: "https://mmo-games.p.rapidapi.com",
    headers: {
        "X-RapidAPI-Key": "7dd651e3e0msh6fc086e67a7a126p1f3248jsna690cd9c15a9",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    },
});

export default instance;

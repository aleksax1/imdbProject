import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://imdb-top-100-movies.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "bb43337385mshe68b3e9733bd7dfp1c32efjsn908d2511a448",
    "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  },
});

export default axiosInstance;

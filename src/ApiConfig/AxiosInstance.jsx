import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://imdb-top-100-movies.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "9d0854d821msh0bed84fb0a71f18p1e55e5jsnee1ba0f8cfc8",
    "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  },
});

export default axiosInstance;

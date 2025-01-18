import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://imdb-top-100-movies.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "5dfc9fc891msh27e712e0169a254p1eadc9jsn26e8c5335ba7",
    "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  },
});

export default axiosInstance;

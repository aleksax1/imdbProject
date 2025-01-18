import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://imdb-top-100-movies.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "221c7bb8a7msh0d1ac32fcd5156fp16a398jsn235234377b7b",
    "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  },
});

export default axiosInstance;

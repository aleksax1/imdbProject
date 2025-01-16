import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://imdb-top-100-movies.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "351a928b9emshea4d5263c56bfbdp1cd778jsn5be0777cf01e",
    "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  },
});

export default axiosInstance;

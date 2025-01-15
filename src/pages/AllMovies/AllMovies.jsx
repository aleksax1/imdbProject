import React, { useEffect, useState } from "react";
import "./AllMovies.css";
import axiosInstance from "../../ApiConfig/AxiosInstance";

function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/");
        setMovies(response.data);
        console.log(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h1>{movie.title}</h1>({movie.year})
            <img src={movie.thumbnail} alt='img' />
            {/* <img src={movie.big_image} alt='img' /> */}
          </li>
        ))}
      </ul>
      <h1>nesto</h1>
    </div>
  );
}

export default AllMovies;

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../ApiConfig/AxiosInstance";
import "./AllMovies.css";

import { useNavigate } from "react-router-dom";

function AllMovies() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/");
        setMovies(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading)
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
        }}
      >
        <CircularProgress size="3rem" />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="movies-container">
      {movies.map((movie, index) => (
        <Card
          key={index}
          className="movie-card"
          sx={{
            maxWidth: 345,
            marginBottom: 2,
            backgroundColor: "#2f2f34",
            color: "white",
          }}
          onClick={() => navigate(`/movie-details/${movie.id}`)}
        >
          <CardContent>
            <img src={movie.big_image} alt={movie.title} />
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              <strong style={{ fontSize: "18px", fontWeight: "bold" }}>
                Year: {movie.year}
              </strong>
            </Typography>
            <Typography variant="body2" sx={{ color: "white", marginTop: 1 }}>
              <strong style={{ fontSize: "18px", fontWeight: "bold" }}>
                {" "}
                Rating: {movie.rating} / 10
              </strong>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default AllMovies;

import React, { useContext, useEffect, useState } from "react";
import "./MovieDetails.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useApi } from "../../context/ApiContext";

function MovieDetails() {
  const { id } = useParams();
  const { fetchData } = useApi();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const movie = await fetchData(`/${id}`);
        setMovie(movie);
        console.log(movie);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, []);

  return (
    <div className="app">
      <div className="main">
        <div className="main-background">
          <img src={movie.big_image} alt="Desert background" />
          <div className="gradient-overlay" />
        </div>

        <div className="content">
          <div className="title">
            <h1>{movie.title}</h1>

            <div className="details">
              <span>{movie.year}</span>
              <div className="rating">
                <span className="score">{movie.rating}</span>
                <span className="votes"></span>
              </div>
            </div>
          </div>
          <div className="movie-details">
            <div className="poster">
              <img src={movie.thumbnail} alt="Dune: Part Two Poster" />
              <div>
                <img
                  src={movie.big_image}
                  alt="Dune"
                  style={{ width: "700px" }}
                />

                <div className="play-button">
                  <span>Trailer</span>
                </div>
              </div>
            </div>

            <div className="info">
              <div className="genres">
                <h2>Genre</h2>
                <span>{movie.genre}</span>
              </div>

              <div className="plot">
                <h2>Plot</h2>
                <span>{movie.description}</span>
              </div>

              <div className="credits">
                <div>
                  <span className="label">Director: </span>
                  <span>{movie.director}</span>
                </div>
                <div>
                  <span className="label">Writers: </span>
                  <span>{movie?.writers?.map((writer) => `${writer} `)}</span>
                </div>
              </div>

              <button className="watchlist-button">
                <span>Add to Watchlist</span>
                <span className="count">52K</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

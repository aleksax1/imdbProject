import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function MovieDetails() {
  return (
    <div className="app">
      <div className="main">
        <div className="main-background">
          <img
            src="https://media.vanityfair.com/photos/65bc53b6dbcc8f7a911121f8/4:3/w_1600,h_1200,c_limit/DUN2-T3-0084r.jpg"
            alt="Desert background"
          />
          <div className="gradient-overlay" />
        </div>

        <div className="content">
          <div className="title">
            <h1>Dune: Part Two</h1>

            <div className="details">
              <span>2024 • 2h 46m • PG-13</span>
              <div className="rating">
                <span className="score">8.9/10</span>
                <span className="votes">(200K)</span>
              </div>
            </div>
          </div>
          <div className="movie-details">
            <div className="poster">
              <img
                src="https://www.figma.com/file/rcZShaBaVUfxzgY24kf1Td/image/aa8bc1054ccc08d4e0dca59f9bed9b204b8fa869"
                alt="Dune: Part Two Poster"
              />
              <div>
                <img
                  src="https://images.bauerhosting.com/empire/2023/08/dune-messiah.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"
                  alt="Dune"
                  style={{ width: "700px" }}
                />

                <div className="play-button">
                  <span>Trailer • 00:31</span>
                </div>
              </div>
            </div>

            <div className="info">
              <div className="genres">
                <h2>Genre</h2>
                <span>Adventure</span>
                <span>Action</span>
                <span>Drama</span>
              </div>

              <div className="plot">
                <h2>Plot</h2>
                <span>
                  Paul Atreides unites with Chani and the Fremen while seeking
                  revenge against the conspirators who destroyed his family.
                </span>
              </div>

              <div className="credits">
                <div>
                  <span className="label">Director: </span>
                  <span>Denis Villeneuve</span>
                </div>
                <div>
                  <span className="label">Writers: </span>
                  <span>Denis Villeneuve • Jon Spaihts • Frank Herbert</span>
                </div>
                <div>
                  <span className="label">Stars: </span>
                  <span>Timothée Chalamet • Zendaya • Rebecca Ferguson</span>
                </div>
                <div>
                  <span className="label">Awards: </span>
                  <span> Top rated movie #10 • 2 nominations </span>
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

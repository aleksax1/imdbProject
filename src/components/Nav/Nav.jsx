import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>\
      <p>radi li</p>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/movie-details">MovieDetails</Link>
      <Link to="/all-movies">All Movies</Link>
    </nav>
  );
}

export default Nav;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      
      <h1 className="logo-text">IMDb</h1>

      <div className="nav-links">
        <NavLink to="/" className="nav-link" activeClassName="active-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active-link">
          About
        </NavLink>
       
        <NavLink
          to="/all-movies"
          className="nav-link"
          activeClassName="active-link"
        >
          All Movies
        </NavLink>
      </div>

      
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
    </nav>
  );
}

export default Nav;

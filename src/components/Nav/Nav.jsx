import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"; 
function Nav() {
  return (
    <nav className="navbar">  
        <h1 className="logo-text" style={{backgroundColor:"#7AB2D3"}}>IMDb</h1>

    
      <div className="nav-links">
        <NavLink to="/" activeClassName="active-link" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active-link" className="nav-link">
          About
        </NavLink>
        <NavLink to="/movie-details" activeClassName="active-link" className="nav-link">
          Movie Details
        </NavLink>
        <NavLink to="/all-movies" activeClassName="active-link" className="nav-link">
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

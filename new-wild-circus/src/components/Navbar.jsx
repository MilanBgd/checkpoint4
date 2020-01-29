import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-navbar">LOGO</div>
      <div className="menu-container">
        <ul className="all-items-menu">
          <Link to="/">
            <li className="fa fa-one">Accueil</li>
          </Link>
          <Link to="/pricing">
            <li className="fa fa-two">Tarifs</li>
          </Link>
          <Link to="/contact">
            <li className="fa fa-three">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

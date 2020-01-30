import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";
import "../styles/footer.css";

function Footer() {
  return (
    <div>
      <Newsletter />
      <div className="container-footer">
        <div className="container-logo">
          <h1>Logo</h1>
        </div>
        <div className="container-menu-footer">
          <ul className="menu-footer">
            <Link to="">
              <li>Accueil</li>
            </Link>
            <Link to="">
              <li className="item">Tarifs</li>
            </Link>
            <Link to="">
              <li className="item">Blog</li>
            </Link>
            <Link to="">
              <li className="item">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

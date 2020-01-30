import React from "react";
import "../styles/newsletter.css";

function Footer() {
  return (
    <div className="container-newsletter">
      <div className="title-newsletter">
        <h3>Recevoir notre newsletter</h3>
      </div>
      <div className="input-newsletter">
        <label for="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Renseignez votre adresse email"
        />
        <div className="send-btn">
          <button className="send" type="submit">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;

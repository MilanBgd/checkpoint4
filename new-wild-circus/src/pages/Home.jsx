import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";
import banner from "../assets/wild-circus-header.jpg";
import "../styles/home.css";
import Spectacle from "../assets/spectacle-epoustouflant-300x300.jpg";
import Clown from "../assets/clown-300x300.jpg";
import Artistes from "../assets/artiste-unique-300x300.jpg";
import Itinerant from "../assets/cirque-itinerant-300x300.jpg";
import Circus from "../assets/circus-64x64.png";
import Geolocalisation from "../assets/map-64x64.png";
import { Tween } from "gsap/gsap-core";

function Home() {
  let textItem = useRef(null);

  useEffect(() => {
    TweenMax.to(textItem, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut
    });
  }, []);

  return (
    <div className="container">
      {/* Banner */}
      <header className="app-header">
        <h1
          ref={el => {
            textItem = el;
          }}
          className="title-header"
        >
          Wild Circus
        </h1>
        <h2>Un sous-titre</h2>
      </header>

      {/* Univers */}
      <div className="container-univers">
        <h2 className="title-description">UN RETOUR EN ENFANCE</h2>
        <h3 className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum odit
          adipisci, quaerat amet eligendi dicta nesciunt enim cupiditate nulla
          reprehenderit voluptatum. Earum, delectus cupiditate neque
          exercitationem praesentium iste iusto veniam. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Sunt aut cumque deleniti, non
          placeat veniam dolorem odit debitis rem velit dignissimos consectetur
          sequi eius! Cumque repellendus adipisci exercitationem. Consequuntur,
          omnis.
        </h3>
        <div className="container-advantages">
          <div className="advantage-one">
            <img src={Spectacle} alt="spectacle-magique" />
            <h3 className="title-advantage">Un spectacle époustouflant</h3>
            <p className="description-advantage">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, voluptatem dignissimos delectus quos eveniet ullam
              quod.
            </p>
          </div>
          <div className="advantage-two">
            <img src={Clown} alt="spectacle-magique" />
            <h3 className="title-advantage">Des émotions garanties</h3>
            <p className="description-advantage">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, voluptatem dignissimos delectus quos eveniet ullam
              quod.
            </p>
          </div>

          <div className="advantage-three">
            <img src={Artistes} alt="spectacle-magique" />
            <h3 className="title-advantage">Des artistiques uniques</h3>
            <p className="description-advantage">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, voluptatem dignissimos delectus quos eveniet ullam
              quod.
            </p>
          </div>
          <div className="advantage-four">
            <img src={Itinerant} alt="spectacle-magique" />
            <h3 className="title-advantage">Un cirque itinérant</h3>
            <p className="description-advantage">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, voluptatem dignissimos delectus quos eveniet ullam
              quod.
            </p>
          </div>
        </div>
      </div>

      {/* Prochaines présentations */}
      <section className="container-global-representations">
        <h2 className="title-representation">PROCHAINES REPRÉSENTATIONS</h2>
        <div className="container-representations">
          <div className="container-representation-one">
            <img src={Circus} alt="" className="img-representations" />
            <h3 className="representation_first-title">En ce moment</h3>
            <h3 className="representation_two-title">A Bordeaux</h3>
            <p className="representation_link-geolocalisation">
              Place des Quinconces
            </p>
          </div>
          <div className="container-representation-two">
            <img src={Geolocalisation} alt="" className="img-representations" />
            <h3 className="representation_first-title">A venir</h3>
            <h3 className="representation_two-title">A Paris</h3>
            <p className="representation_link-geolocalisation">
              A côté de la Tour Eiffel
            </p>
          </div>
        </div>
        {/* Aller plus loin */}
        <div className="container-more">
          <div className="container-buttons-more">
            <div className="reservation-button-fix">
              <Link className="reservation-button">Réserver vos places</Link>
            </div>

            <div className="decouvrir-button-fix">
              <Link className="decouvrir-button">Découvrir le programme</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog - Actualités cirque */}
      <section className="blog">
        <div className="title-blog">
          <h2>Toute l'actualité du Wild Circus</h2>
          <h3>Découvrez la vie du cirque et de nos artistes</h3>
        </div>
        <div className="blog-posts">
          <div className="blog-posts-access">
            <h3>Toute l'actualité du cirque</h3>
            <Link to="/blog">Découvrir le blog</Link>
          </div>
          <div className="blog-posts-one"></div>
          <div className="blog-posts-two"></div>
          <div className="blog-posts-three"></div>
          <div className="blog-posts-four"></div>
          <div className="blog-posts-share">
            <h3>
              Partagez nos stories avec le hashtag
              <span className="hashtag"> #WildCircus</span>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

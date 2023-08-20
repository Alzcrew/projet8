// Home.jsx
import React from "react";
import bannerImage from "../assets/img_banner.png"; // Assurez-vous du chemin correct
import "../styles/layouts/_Banner.scss"; // Assurez-vous du chemin correct
import Cards from "../components/Cards";

function Home() {
  return (
    <div className="container">
      <div className="banner">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <h2 className="banner-title">Chez vous, partout et ailleurs</h2>
      </div>
      <Cards />
    </div>
  );
}

export default Home;

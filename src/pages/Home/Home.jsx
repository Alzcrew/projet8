import React from "react";
import bannerImage from "../../assets/img_banner.png";  
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Banner/Banner";

function Home() {
  return (
    <div className="container">
      <Banner image={bannerImage} title="Chez vous, partout et ailleurs" />
      <Cards />
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import "./_Slideshow.scss"; 
import flecheGauche from "../../assets/Fleche_gauche_carrou.svg";
import flecheDroite from "../../assets/Fleche_droite_carrou.svg";

function Slideshow({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slideshow">
      <button className="nav-button prev" onClick={goToPrevSlide}>
        <img src={flecheGauche} alt="Précédent" />
      </button>
      <img
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        style={{ width: "100%", height: "415px" }}
      />
      <button className="nav-button next" onClick={goToNextSlide}>
        <img src={flecheDroite} alt="Suivant" />
      </button>
      <p className="slide-counter">
        {currentSlide + 1} / {images.length}
      </p>
    </div>
  );
}

export default Slideshow;

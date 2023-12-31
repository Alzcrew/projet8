import React, { useState } from "react";
import flecheGauche from "../../assets/Fleche_gauche_carrou.svg";
import flecheDroite from "../../assets/Fleche_droite_carrou.svg";

function Slideshow({ images }) {
  // État pour suivre le slide actuel
  const [currentSlide, setCurrentSlide] = useState(0);


// Fonction pour aller au slide suivant
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Fonction pour aller au slide précédent
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
        className="slide-image"
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

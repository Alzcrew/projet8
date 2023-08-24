import React, { useState } from "react";
import "../styles/layouts/_Banner.scss";
import bannerImage from "../assets/img_banner_about.png";
import "../styles/pages/_About.scss";
import fleche from "../assets/Fleche.svg";

function About() {
  const [collapses, setCollapses] = useState([
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
      isOpen: false,
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      isOpen: false,
    },
    {
      title: "Service",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      isOpen: false,
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      isOpen: false,
    },
  ]);

  const toggleCollapse = (index) => {
    const updatedCollapses = collapses.map((collapse, i) => {
      if (i === index) {
        return { ...collapse, isOpen: !collapse.isOpen };
      } else {
        return { ...collapse, isOpen: false };
      }
    });
    setCollapses(updatedCollapses);
  };

  return (
    <div className="container">
      <div className="banner">
        <img src={bannerImage} alt="Banner" className="banner-image" />
      </div>
      <div className="collapse-container">
        {collapses.map((collapse, index) => (
          <div key={index} className={`collapse ${collapse.isOpen ? "active" : ""}`}>
            <button
              className={`collapse-label ${collapse.isOpen ? "active" : ""}`}
              onClick={() => toggleCollapse(index)}
            >
              {collapse.title}{" "}
              <img
                src={fleche}
                alt="Flèche"
                className={`collapse-arrow ${
                  collapse.isOpen ? "active" : ""
                }`}
              />
            </button>
            <div className={`collapse-content ${collapse.isOpen ? "active" : ""}`}>
              {collapse.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

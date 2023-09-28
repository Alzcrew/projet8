import React, { useState } from 'react';
import Slideshow from '../../components/SlideShow/Slideshow';
import { useParams, Navigate } from 'react-router-dom';
import data from '../../components/data.json';
import Tags from '../../components/Tags/Tags';
import Stars from '../../components/Stars/Stars';
import Collapses from '../../components/Collapses/Collapses';

function Logements() {
  const { id } = useParams();
  const accommodation = data.find((item) => item.id === id) || {};

  // Ajout des états pour gérer les collapses
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [equipmentsOpen, setEquipmentsOpen] = useState(false);

  // Fonctions pour basculer les états des collapses
  const toggleDescription = () => {
    setDescriptionOpen(!descriptionOpen);
  };

  const toggleEquipments = () => {
    setEquipmentsOpen(!equipmentsOpen);
  };

  if (Object.keys(accommodation).length === 0) {
    return <Navigate to="/erreur" />;
  }

  return (
    <div className="container">
      <Slideshow images={accommodation.pictures} />
      <div className="logement-head">
        <h2 className="logement-titre">{accommodation.title}</h2>
        <div className="logement-avatar">
          <p>{accommodation.host.name}</p>
          <img
            src={accommodation.host.picture}
            alt={accommodation.host.name}
            className="image-hote"
          />
        </div>
      </div>
      <p className="logement-location">{accommodation.location}</p>
      <div className="logement-tag-et-rating">
        <Tags>
          {accommodation.tags.map((tag, index) => (
            <span key={index} className="tag-bubble">
              {tag}
            </span>
          ))}
        </Tags>
        <div className="logement-rating">
        <Stars rating={Number(accommodation.rating)} />
        </div>
      </div>
      <div className="logement-collapses">
        <Collapses
          title="Description"
          isOpen={descriptionOpen}
          toggleCollapse={toggleDescription}
        >
          <p>{accommodation.description}</p>
        </Collapses>
        <Collapses
          title="Équipements"
          isOpen={equipmentsOpen}
          toggleCollapse={toggleEquipments}
        >
          <ul>
            {accommodation.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapses>
      </div>
    </div>
  );
}

export default Logements;

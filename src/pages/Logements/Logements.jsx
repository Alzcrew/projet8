import React, { useState } from 'react';
import Slideshow from '../../components/SlideShow/Slideshow';
import { useParams , Navigate } from 'react-router-dom';
import data from '../../components/data.json';
import fleche from "../../assets/Fleche.svg";

function generateStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const starColor = i <= rating ? '#FF6060' : '#E3E3E3';
        stars.push(<span key={i} style={{ color: starColor }}>&#9733;</span>);
    }
    return stars;
}

function Logements() {
    const { id } = useParams();
    const accommodation = data.find(item => item.id === id) || {};

    

    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [equipmentsOpen, setEquipmentsOpen] = useState(false);

    if (!accommodation) {
        return <Navigate to="/erreur" />;
    }

    const toggleDescription = () => {
        setDescriptionOpen(!descriptionOpen);
    };

    const toggleEquipments = () => {
        setEquipmentsOpen(!equipmentsOpen);
    };

    return (
        <div className='container'>
            <Slideshow images={accommodation.pictures} />
            <div className="logement-head">
                <h2 className='logement-titre'>{accommodation.title}</h2>
                <div className='logement-avatar'>
                    <p>{accommodation.host.name}</p>
                    <img src={accommodation.host.picture} alt={accommodation.host.name} className='image-hote' />
                </div>
            </div>
            <p className='logement-location'>{accommodation.location}</p>
            <div className="logement-tag-et-rating">
                <div className="logement-tags">
                    {accommodation.tags.map((tag, index) => (
                        <span key={index} className="tag-bubble">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="logement-rating">
                    {generateStars(accommodation.rating)}
                </div>
            </div>
            <div className="logement-collapses">
            <div className={`collapse ${equipmentsOpen ? "active" : ""} logement-collapse`}>                    <button
                        className={`collapse-label ${descriptionOpen ? "active" : ""}`}
                        onClick={toggleDescription}
                    >
                        Description{" "}
                        <img
                            src={fleche}
                            alt="fleche"
                            className={`collapse-arrow ${
                                descriptionOpen ? "active" : ""
                            }`}
                        />
                    </button>
                    <div className={`collapse-content ${descriptionOpen ? "active" : ""}`}>
                        {accommodation.description}
                    </div>
                </div>
                <div className={`collapse ${equipmentsOpen ? "active" : ""} logement-collapse`}>                    <button
                        className={`collapse-label ${equipmentsOpen ? "active" : ""}`}
                        onClick={toggleEquipments}
                    >
                        Équipements{" "}
                        <img
                            src={fleche}
                            alt="fleche"
                            className={`collapse-arrow ${
                                equipmentsOpen ? "active" : ""
                            }`}
                        />
                    </button>
                    <div className={`collapse-content ${equipmentsOpen ? "active" : ""}`}>
                        <ul>
                            {accommodation.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logements;

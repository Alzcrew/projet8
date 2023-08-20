import React, { Component } from 'react';
import '../styles/layouts/_Cards.scss'; // Importez le fichier CSS pour les styles
import data from './data.json'; // Importez le fichier JSON (assurez-vous que le chemin est correct)

class Cards extends Component {
    render() {
        return (
            <div className="cards-container">
                {data.map((location, index) => (
                    <div key={index} className="card">
                        <div className="card-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${location.cover})` }}>
                            <h2 className="location-title">{location.title}</h2>
                        </div>
                        
                    </div>
                ))}
            </div>
        );
    }
}

export default Cards;

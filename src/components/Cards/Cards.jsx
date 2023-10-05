import React, { Component } from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';

class Cards extends Component {
    render() {
        return (
            <div className="cards-container">
                {data.map((location, index) => (
                // Utilisation de Link pour la navigation + passage du state "accommodation"
                    <Link to={{
                            pathname: `/fiche-logement/${location.id}`, 
                          }}
                          state= {{accommodation: location}}
                          key={index}
                          className="card-link">
                        <div className="card">
                            <div className="card-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${location.cover})` }}>
                                <h2 className="location-title">{location.title}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        );
    }
}

export default Cards;

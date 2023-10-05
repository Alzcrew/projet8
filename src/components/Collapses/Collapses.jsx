import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fleche from '../../assets/Fleche.svg';

export default function Collapses({ title, children, fullWidth }) {
  // État pour gérer l'ouverture/fermeture du collapse
  const [isOpen, setIsOpen] = useState(false);

  // État pour gérer le padding du contenu du collapse
  const [padding, setPadding] = useState('0px');

  const collapseClass = fullWidth ? 'full-width-collapse' : 'logement-collapse';

  // Fonction pour basculer l'état du collapse et ajuster le padding
  const handleToggle = () => {
    setIsOpen(!isOpen);
    setPadding(isOpen ? '0px' : '15px');
  };
  
  return (
    <div className={`collapse ${isOpen ? "active" : ""} ${collapseClass}`}>
      <button
        className={`collapse-label ${isOpen ? "active" : ""}`}
        onClick={handleToggle} 
      >
        {title}
        <img
          src={fleche}
          alt="fleche"
          className={`collapse-arrow ${isOpen ? "active" : ""}`}
        />
      </button>
      <div className={`collapse-content ${isOpen ? "active" : ""}`} style={{ padding: padding }}>  {/* Application du padding */}
        {children}
      </div>
    </div>
  );
}

Collapses.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleCollapse: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
};

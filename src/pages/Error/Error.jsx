import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="not-found-container">
      <div className="not-found">404</div>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="back-to-home">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;

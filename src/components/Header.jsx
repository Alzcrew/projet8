// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-desktop.svg"; // Assurez-vous de placer votre logo dans le dossier "assets"

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/a-propos">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

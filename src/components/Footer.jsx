import React from 'react';
import logo from '../assets/logo-footer.png'; // Importez le chemin vers votre logo
import '../styles/layouts/_Footer.scss'; // Importez le fichier CSS pour les styles du footer

const Footer = () => {
    return (
        <footer className="footer">
            <img className="footer-logo" src={logo} alt="Kasa Logo" />
            <div className="footer-text">
                <p>&copy; {new Date().getFullYear()} Kasa. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

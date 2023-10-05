import React from 'react';
import logo from '../../assets/logo-footer.png'; 

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

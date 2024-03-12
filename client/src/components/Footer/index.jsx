import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <span>  Made with <span role="img" aria-label="heart">❤️</span> by Olivia's Five </span>
                <div>
                <span> {(new Date().getFullYear())} &copy; <span> All right reserved. </span>  </span>   
                </div>
            </div>
        </footer>
    );
};

export default Footer;

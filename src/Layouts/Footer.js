// Footer.js
import React from 'react';
import './Footer.css';  // Optional: for custom styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} My E-commerce Site. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

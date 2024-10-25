import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userRole");
        navigate('/'); 
    };

    const isLoggedIn = localStorage.getItem("authToken") !== null;

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.A8nO4XA1VzES5yarzzceEAHaIn&pid=Api&P=0&h=180" alt="Website Logo" className="logo-icon" />
                </Link>
                <Link to="/" className="navbar-title">
                    <h1>E-ARTICLE</h1>
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/services" className="navbar-link">Services</Link>
                <Link to="/about" className="navbar-link">About Us</Link>
            </div>
            <div className="navbar-buttons">
                {isLoggedIn ? (
                    <button className="auth-btn logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <button className="auth-btn login-btn" onClick={() => navigate('/login')}>
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

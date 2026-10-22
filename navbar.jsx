React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand / Logo */}
        <div className="navbar-logo">
          <a href="#home">BrandLogo</a>
        </div>

        {/* Hamburger / Toggle Button (Visible on Tablet & Mobile) */}
        <button 
          className="menu-icon" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Menu */}
        <div className={`nav-menu-wrapper ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#features" onClick={closeMenu}>Features</a></li>
            <li><a href="#pricing" onClick={closeMenu}>Pricing</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>

          <div className="nav-action">
            <button className="btn-create-account" onClick={closeMenu}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
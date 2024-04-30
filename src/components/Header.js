import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../Header.css'; // Make sure this CSS file includes necessary styles

const Header = () => {
  // State to manage the visibility of the menu on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="header flex justify-between items-center p-4 relative bg-blue-700">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Ryan Designs Logo" className="mr-4" />
      </div>
      <div className="hidden md:block">
        <ul className="nav-links">
          <li><Link to="about" smooth={true} duration={500}>About</Link></li> |
          <li><Link to="portfolio" smooth={true} duration={500}>Projects</Link></li> |
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>
      <div className="flex items-center">
        <a href="/path-to-your-cv.pdf" target="_blank" rel="noopener noreferrer"
           className="hidden sm:inline-block text-white font-bold py-2 px-4 border border-white rounded-full">
          Download CV
        </a>
        <a href="/path-to-your-cv.pdf" target="_blank" rel="noopener noreferrer"
           className="sm:hidden text-white font-bold py-2 px-4 border border-white rounded-full">
          CV
        </a>
        <button className="ml-4 md:hidden" onClick={toggleMenu}>
          <svg viewBox="0 0 100 80" width="30" height="30" fill="white">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 bg-slate-900 w-full p-8 md:hidden z-50">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link to="about" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="portfolio" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../Header.css'; // Ensure this CSS file includes necessary styles

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <nav className="header flex items-center justify-between relative bg-blue-700 shadow-lg z-50">
      <div className="flex items-center md:ml-4">
        <img src="/logo.svg" alt="Logo"/>
        <ul className="nav-links md:ml-10 hidden md:flex items-center ">
          <li><Link to="about" smooth={true} duration={500}>About</Link></li> |
          <li><Link to="portfolio" smooth={true} duration={500}>Projects</Link></li> |
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>
      <div className="hidden md:flex justify-end items-center mr-5">
        <a href="https://x.com/ryguyx9" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img src="images/twitter.svg" alt="Twitter" className="h-5 w-5 fill-current text-blue-500 hover:text-blue-700 transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/ryandesigns9/" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img src="images/linkedin.svg" alt="LinkedIn" className="h-5 w-5 fill-current text-blue-500 hover:text-blue-700 transition duration-300" />
        </a>
        <div className="relative inline-block">
          <button onClick={() => copyToClipboard('chris@ryandesigns.ca')} className="focus:outline-none">
            <img src="images/mail.svg" alt="Mail" className="h-5 w-5 fill-current text-blue-500 hover:text-blue-700 transition duration-300" />
          </button>
          {copied && <span className="absolute top-10 right-1 bg-black text-white text-xs px-2 w-32 py-1 rounded-full">Copied email to clipboard!</span>}
        </div>
      </div>
      <button className="md:hidden" onClick={toggleMenu}>
        <svg viewBox="0 0 100 80" width="30" height="18" fill="white">
          <rect width="100" height="5"></rect>
          <rect y="30" width="100" height="5"></rect>
          <rect y="60" width="100" height="5"></rect>
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute top-full left-0 bg-slate-900 w-full p-6 md:hidden shadow-2xl shadow-inner">
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

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center p-4 text-white">
      <p>© {new Date().getFullYear()} RyanDesigns. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
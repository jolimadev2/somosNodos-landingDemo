import React, { useState } from "react";
import myLogo from '../assets/logo-podcast.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain" src={myLogo} alt="My Logo" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-400 hover:text-white">
            {/* Icono del menú tipo "burger" */}
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <nav className={`md:flex md:items-center ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li>
              <a href="#about-us" className="text-gray-400 hover:text-white py-2 md:py-0">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#episodes" className="text-gray-400 hover:text-white py-2 md:py-0">
                Episodios
              </a>
            </li>
            <li>
              <a href="#follow-us" className="text-gray-400 hover:text-white py-2 md:py-0">
                Síguenos
              </a>
            </li>
            <li>
              <a href="#newsletter" className="text-gray-400 hover:text-white py-2 md:py-0">
                Newsletter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

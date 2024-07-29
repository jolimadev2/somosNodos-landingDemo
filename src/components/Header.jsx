import React from "react";
import myLogo from '../assets/logo-podcast.png';


const Header = () => {
  return (
    <header className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold flex items-center">
            {/* <i className="fas fa-microphone-alt mr-2"></i> Somos Nodos */}
            <img className="object-position: left top;
 w-24 h-24" src={myLogo} alt="My Logo" />
          </h1>{" "}
          
        </div>
        <nav>
          <ul className="flex space-x-4">
          <li>
              <a href="#about-us" className="text-gray-400 hover:text-white">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#episodes" className="text-gray-400 hover:text-white">
                Episodios
              </a>
            </li>
            <li>
              <a href="#follow-us" className="text-gray-400 hover:text-white">
                Síguenos
              </a>
            </li>
            <li>
              <a href="#newsletter" className="text-gray-400 hover:text-white">
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

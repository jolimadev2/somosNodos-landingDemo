import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold flex items-center">
            <i className="fas fa-microphone-alt mr-2"></i> Somos Nodos
          </h1>{" "}
        </div>
        <nav>
          <ul className="flex space-x-4">
          <li>
              <a href="#about-us" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#episodes" className="text-gray-400 hover:text-white">
                Episodios
              </a>
            </li>
            <li>
              <a href="#follow-us" className="text-gray-400 hover:text-white">
                Follow us
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

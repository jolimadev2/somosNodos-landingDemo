import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMoneyCheckDollar, faNotesMedical } from "@fortawesome/free-solid-svg-icons";


const episodes = [
  {
    title: "Episodio 1",
    description: "Descripción del episodio 1",
    link: "#",
    icon: faCode
  },
  {
    title: "Episodio 2",
    description: "Descripción del episodio 2",
    link: "#",
    icon: faMoneyCheckDollar
  },
  {
    title: "Episodio 3",
    description: "Descripción del episodio 3",
    link: "#",
    icon: faNotesMedical
  },
];

const Cards = () => {
  return (
    <section className="py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {episodes.map((episode, index) => (
        <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg">
          {/* Mostrar el icono */}
          <div className="mb-5 pt-10 pb-10 text-center">
          <FontAwesomeIcon icon={episode.icon} size="6x" className="text-white" />
          </div>
          <h3 className="text-xl font-bold mb-4">{episode.title}</h3>
          <p className="text-gray-400 mb-4">{episode.description}</p>
          <a
            href={episode.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            Escuchar en Spotify
          </a>
        </div>
      ))}
    </div>
  </section>
  );
};

export default Cards;

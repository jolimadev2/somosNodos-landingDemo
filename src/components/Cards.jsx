import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMoneyCheckDollar, faBrain } from "@fortawesome/free-solid-svg-icons";


const episodes = [
  {
    title: "EPISODIO 1: La importancia de la Educación Financiera. Lic.Nicolás Villada",
    description: "Grabado en el 2021. Esta vez nos sentamos con Nicolás Villada, Contador Público graduado de la UNC, Argentina.",
    link: "#",
    icon: faMoneyCheckDollar
  },
  {
    title: "Episodio 2: Unipersonal",
    description: "Introspección en solitario sobre la importancia de la comunicación y el respeto hacia diferentes perspectivas.",
    link: "#",
    icon: faBrain
  },
  {
    title: "Episodio 3: El camino en IT",
    description: "Nuestro invitado/a nos comenta acerca de historia en IT, comienzos y tips para forjar la adaptabilidad en un mercado en constante movimiento.",
    link: "#",
    icon: faCode 
  }
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

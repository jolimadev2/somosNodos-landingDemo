import React from "react";

// Definir las URLs de las imágenes para cada episodio
const episodes = [
  {
    title: "Episodio 1",
    description: "Descripción del episodio 1",
    link: "#",
    image: "url_de_la_imagen_episodio_1"
  },
  {
    title: "Episodio 2",
    description: "Descripción del episodio 2",
    link: "#",
    image: "url_de_la_imagen_episodio_2"
  },
  {
    title: "Episodio 3",
    description: "Descripción del episodio 3",
    link: "#",
    image: "url_de_la_imagen_episodio_3"
  },
];

const Cards = () => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {episodes.map((episode, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg">
            {/* Mostrar la imagen */}
            <img src={episode.image} alt={episode.title} className="mb-4 rounded-md" />
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

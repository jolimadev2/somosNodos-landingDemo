import React from "react";

/**
 *
 * @returns copmnente que renderiza la seccion para donar un cafe
 */
const Sponsor = () => {
  return (
    <section className="bg-gray-800 text-white py-8 mt-10 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Apoya nuestro proyecto con un ☕
        </h2>
        <p className="mb-4">
          Tu contribución nos ayuda a seguir creando contenido valioso. ¡Gracias
          por tu apoyo!
        </p>
        <div className="flex justify-center">
          <a
            href="https://buymeacoffee.com/somosnodos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            Yo apoyo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;

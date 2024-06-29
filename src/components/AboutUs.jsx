import React from "react";

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-dark py-16"> {/* Aumenté el padding vertical */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
            Somos Nodos
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            Somos Nodos es un podcast donde escucharás historias inspiradoras de expertos en diversos campos. Conoce sus experiencias, anécdotas y perspectivas sobre temas actuales, tabú y lo importante: "cosas que no sabemos que no sabemos".
          </p>
          <p className="text-lg text-gray-400 mb-6">
            Descubre reflexiones profundas y aprendizajes valiosos en cada episodio. Nuestro objetivo es que saques tus propias conclusiones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

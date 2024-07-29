import React from "react";

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-10 pb-10"> {/* espaciado de padding entre la seccion abuot us y las cards */}
        <h2 className="text-3xl font-bold text-white mb-4">
            Somos Nodos
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            Somos Nodos es un podcast donde conoceras historias inspiradoras de expertos en diversos campos. <br/>Experiencias, anécdotas, perspectivas sobre temas actuales y lo importante: "Cosas que no sabemos..que no sabemos".
          </p>
          <p className="text-lg text-gray-400 mb-6">
            Escucha activamente cada episodio. <br/> <strong>Nuestro objetivo es crear una comunidad de oyentes que saquen su propias conclusiones.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import React from "react";

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-dark py-16"> {/* Aumenté el padding vertical */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6"> {/* Aumenté el tamaño del título */}
            Descubre Somos Nodos
          </h2>
          <p className="text-lg text-white-600 leading-relaxed"> {/* Aumenté el espacio entre líneas */}
            Somos Nodos es más que un podcast; es un espacio dedicado a explorar y compartir experiencias inspiradoras de jóvenes profesionales como tú. Aquí encontrarás contenido educativo, entrevistas reveladoras y reflexiones sobre el mundo laboral actual. Nuestro objetivo es proporcionarte herramientas y perspectivas que te ayuden a crecer profesional y personalmente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

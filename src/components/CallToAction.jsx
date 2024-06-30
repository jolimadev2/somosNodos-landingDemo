import React from 'react';

const CallToAction = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // agregar la lógica para manejar el envío del formulario, si es necesario
    console.log('Formulario enviado!');
  };

  return (
    <section className="bg-gray-800 text-white py-8 mt-10 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Suscríbete a nuestra Newsletter</h2>
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <input 
            type="email" 
            className="p-2 rounded-l-lg border-0 focus:ring-2 focus:ring-blue-500"
            placeholder="Tu correo electrónico"
            required
          />
         <button 
            type="submit" 
            className="p-2 bg-black text-white rounded-r-lg ml-1 transition duration-300 ease-in-out
                       hover:bg-white hover:text-black"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;

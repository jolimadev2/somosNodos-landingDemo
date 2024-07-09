import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-4'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <p>&copy; 2024 Somos Nodos. Todos los derechos reservados.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Spotify</a>
          <a href="https://www.youtube.com/channel/UCVYQ6mxQymV4kBYNnfwrN7g" className="text-gray-400 hover:text-white">YouTube</a>
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
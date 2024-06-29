import React from 'react'

const FollowUs = () => {
  return (
    <section className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Síguenos</h2>
      <div className="flex justify-center space-x-4">
        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <i className="fab fa-spotify fa-4x"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <i className="fab fa-youtube fa-4x"></i>
        </a>
        <a href="https://www.linkedin.com/in/juanolima/?locale=en_US" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <i className="fab fa-linkedin fa-4x"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <i className="fab fa-instagram fa-4x"></i>
        </a>
      </div>
    </div>
  </section>
  )
}

export default FollowUs
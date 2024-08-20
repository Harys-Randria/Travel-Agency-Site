import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 font-Spinnaker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white">Explore Madagascar</h2>
            <p className="mt-2 text-lg text-blue-300">
              Discover the beauty of Madagascar with our curated tours to the most stunning destinations.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row justify-center items-center">
            <a href="#about" className="text-blue-300 hover:text-white mx-3 my-2">About Us</a>
            <a href="#destinations" className="text-blue-300 hover:text-white mx-3 my-2">Destinations</a>
            <a href="#testimonials" className="text-blue-300 hover:text-white mx-3 my-2">Testimonials</a>
            <a href="#contact" className="text-blue-300 hover:text-white mx-3 my-2">Contact Us</a>
          </div>

        </div>

        <div className="mt-8 border-t border-blue-700 pt-6 text-center">
          <p className="text-blue-400">&copy; 2024 Explore Madagascar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

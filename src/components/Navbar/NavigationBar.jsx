import React from 'react';
import { Link } from 'react-router-dom';
import TravelButton from '../TravelButon';

const NavigationBar = () => {
  return (
    <nav className="bg-pearl shadow-lg w-full font-Spinnaker z-[50]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            {/* Vous pouvez utiliser une balise <Link> pour naviguer vers la page d'accueil en cliquant sur le logo */}
            {/* <Link to="/"> */}
            {/* <img src="https://www.expedia.fr/favicon.ico" alt="Expedia Logo" className="h-8 w-auto"/> */}
            {/* </Link> */}
            <span className="text-xl font-semibold text-black">MadaWeaver</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 z-50">
            <Link to="/" className="text-black hover:text-blue-second">Home</Link>
            <Link to="/trip" className="text-black hover:text-blue-second">Trip</Link>
            <Link to="/about-us" className="text-black hover:text-blue-second">About Us</Link>
            <Link to="/our-tours" className="text-black hover:text-blue-second">Our Tours</Link>
            <Link to="/contact" className="text-black hover:text-blue-second">Contact</Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4 z-50">
            <TravelButton text={'Book Now'} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;

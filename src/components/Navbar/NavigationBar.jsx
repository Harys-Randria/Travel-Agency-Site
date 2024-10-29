import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TravelButton from '../TravelButon';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import des icônes pour le menu mobile

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu mobile

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handelScroll);
    return () => window.removeEventListener('scroll', handelScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <span className={`font-bold text-lg ${isScrolled ? 'text-black' : 'text-white'}`}>MadaWeaver</span>
          </div>

          {/* Menu Hamburger pour mobile */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <div className={`hidden md:flex space-x-6 z-50 font-medium ${isScrolled ? 'text-black' : 'text-white'}`}>
            <Link to="/" className="hover:text-blue-second">Home</Link>
            <Link to="/trip" className="hover:text-blue-second">Trip</Link>
            <Link to="/about-us" className="hover:text-blue-second">About Us</Link>
            <Link to="/our-tours" className="hover:text-blue-second">Our Tours</Link>
            <Link to="/cars" className="hover:text-blue-second">Cars</Link>
            <Link to="/contact" className="hover:text-blue-second">Contact</Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4 z-50">
            <TravelButton text={'Book Now'} />
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className={`md:hidden z-40 bg-white shadow-lg rounded-lg p-6 space-y-4 ${isScrolled ? 'text-black' : 'text-white'}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-second">Home</Link>
            <Link to="/trip" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-second">Trip</Link>
            <Link to="/about-us" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-second">About Us</Link>
            <Link to="/our-tours" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-second">Our Tours</Link>
            <Link to="/cars" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-second">Cars</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-second">Contact</Link>
            <TravelButton text={'Book Now'} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;

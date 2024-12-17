import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import BookingButton from '../BookingButton';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <span
              className={`font-bold text-lg ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              MadaWeaver
            </span>
          </div>

          {/* Menu Hamburger pour mobile */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none ${
                isScrolled || isMenuOpen ? 'text-black' : 'text-white'
              }`}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <div
            className={`hidden md:flex justify-center items-center space-x-6 font-medium ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            <Link to="/" className="hover:text-orange-perso">
              Home
            </Link>
            <Link to="/destination" className="hover:text-orange-perso">
              Trip
            </Link>
            <Link to="/aboutus" className="hover:text-orange-perso">
              About Us
            </Link>
            <Link to="/cars" className="hover:text-orange-perso">
              Cars
            </Link>
            <Link to="/contactus" className="hover:text-orange-perso">
              Contact
            </Link>
            <BookingButton isScrolled={isScrolled} />
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden z-40 bg-white shadow-lg rounded-lg p-6 space-y-4 text-black transition-all duration-300">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-orange-perso"
            >
              Home
            </Link>
            <Link
              to="/destination"
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-orange-perso"
            >
              Trip
            </Link>
            <Link
              to="/aboutus"
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-orange-perso"
            >
              About Us
            </Link>
            <Link
              to="/cars"
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-orange-perso"
            >
              Cars
            </Link>
            <Link
              to="/contactus"
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-orange-perso"
            >
              Contact
            </Link>
            <div className="pt-4">
              <BookingButton isScrolled={true} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;

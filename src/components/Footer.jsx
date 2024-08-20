import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p>Your brief company description goes here. Keep it short and sweet, with a link to learn more.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li><a href="/home" className="hover:underline">Home</a></li>
            <li><a href="/tours" className="hover:underline">Tours</a></li>
            <li><a href="/destinations" className="hover:underline">Destinations</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>Lot 0110 C Antanambao Est Ivohitra, 110 Antsirabe</p>
          <p>Email: your-email@example.com</p>
          <p>Phone: +261 38 16 859 01</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Stay Connected</h2>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
            <a href="/" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
            <a href="/" className="hover:text-red-600"><i className="fab fa-youtube"></i></a>
          </div>
          <form className="mt-4">
            <input 
              type="email" 
              className="p-2 w-full bg-gray-700 text-white" 
              placeholder="Subscribe to our newsletter" 
            />
            <button 
              className="bg-blue-500 text-white p-2 mt-2 w-full"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; 2024 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

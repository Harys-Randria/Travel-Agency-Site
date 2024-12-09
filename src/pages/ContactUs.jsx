import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactUs = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: -18.8792, // Exemple : coordonnée de Madagascar
    lng: 47.5079,
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/11/21/15/24/landscape-1844221_960_720.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-yellow-400">Contact Us</h1>
        </div>
      </section>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-6">We'd love to hear from you! Whether you have a question, need assistance, or want to plan your next adventure, we're here to help.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaPhone className="text-yellow-500 text-xl" />
              <span className="text-gray-700">+261 34 12 34 567</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-yellow-500 text-xl" />
              <span className="text-gray-700">info@madatravel.com</span>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Follow Us</h2>
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 text-3xl">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-500 text-3xl">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400 text-3xl">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Location</h2>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Contact Form */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Send Us a Message</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500" />
            <input type="email" placeholder="Your Email" className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500" />
            <textarea placeholder="Your Message" className="md:col-span-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500" rows="5"></textarea>
            <button className="md:col-span-2 bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

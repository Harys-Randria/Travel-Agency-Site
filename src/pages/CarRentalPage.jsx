// CarRentalPage.jsx

import React from 'react';

const CarRentalPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">Location de voiture</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-blue-500">Accueil</a></li>
            <li><a href="/offers" className="hover:text-blue-500">Offres</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Section Recherche */}
      <section className="bg-gray-100 p-6 rounded-lg my-6">
        <h2 className="text-2xl font-semibold mb-4">Trouver une voiture</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder="Lieu de prise en charge" className="p-2 rounded-md border" />
          <input type="date" placeholder="Date de début" className="p-2 rounded-md border" />
          <input type="date" placeholder="Date de fin" className="p-2 rounded-md border" />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md md:col-span-3 hover:bg-blue-600">
            Rechercher
          </button>
        </form>
      </section>

      {/* Liste des voitures */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Voitures disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example Car Card */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img src="car-image.jpg" alt="Car" className="h-48 w-full object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Voiture 1</h3>
              <p className="text-gray-500">Compacte, 5 portes, automatique</p>
              <p className="text-blue-600 font-bold mt-2">€50/jour</p>
              <button className="bg-green-500 text-white py-2 px-4 rounded-md w-full mt-4 hover:bg-green-600">
                Réserver maintenant
              </button>
            </div>
          </div>
          {/* Répéter pour plus de voitures */}
        </div>
      </section>
    </div>
  );
};

export default CarRentalPage;

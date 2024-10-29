import React, { useState } from 'react';
import { motion } from 'framer-motion';

const carData = [
  { id: 1, category: 'SUV', name: 'Toyota Land Cruiser', price: '$60/day', image: 'https://www.autoredo.com/wp-content/uploads/2024/01/DSC_9067.jpg' },
  { id: 2, category: '4x4', name: 'Jeep Wrangler', price: '$70/day', image: 'https://hips.hearstapps.com/hmg-prod/images/2024-jeep-wrangler113-649ade70cd772.jpg?crop=1.00xw:0.846xh;0,0.154xh&resize=1200:*' },
  { id: 3, category: 'Mini-van', name: 'Mercedes Vito', price: '$50/day', image: 'https://www.lazerlamps.com/media/catalog/product/cache/2320f5f3b0dbf517389ca328c4e7f647/m/e/mercedes-vito-gk-17_web.jpg' },
  { id: 4, category: 'Sedan', name: 'Toyota Corolla', price: '$40/day', image: 'https://medias.agenda-automobile.com/2018/11/20181116_02_09-640x471.jpg' },
  { id: 5, category: 'SUV', name: 'Range Rover', price: '$90/day', image: 'https://vehicle-images.dealerinspire.com/a38e-11000956/SALKZBF94RA223254/7b9df64bf14bcf5dd7af7a2785ec0f98.jpg' },
  { id: 6, category: '4x4', name: 'Land Rover Defender', price: '$80/day', image: 'https://media.gqmagazine.fr/photos/664f65102b3a08f544d85820/16:9/w_1600,c_limit/Defender-Sedona-edition.jpg' },
];

const categories = ['All', 'SUV', '4x4', 'Mini-van', 'Sedan'];

const CarCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCars = selectedCategory === 'All'
    ? carData
    : carData.filter(car => car.category === selectedCategory);

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Our Car Fleet</h2>
        
        {/* Category Filters */}
        <div className="flex justify-center space-x-4 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold ${
                selectedCategory === category ? 'bg-yellow-500 text-gray-900' : 'bg-gray-300 text-gray-700 hover:bg-yellow-400'
              } transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Car Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredCars.map(car => (
            <motion.div
              key={car.id}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: car.id * 0.1 }}
            >
              <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
              <p className="text-gray-600">{car.category}</p>
              <p className="text-yellow-500 font-bold text-lg mt-2">{car.price}</p>
              <button className="mt-4 px-4 py-2 w-full bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 transition">
                Reserve Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarCatalog;

import { useEffect, useState } from 'react';

const DestinationCard = ({ title, description, image, link }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6 bg-white">
        <h3 className="text-gray-900 text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <a
          href={link}
          className="inline-block bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-yellow-600"
        >
          Explore
        </a>
      </div>
    </div>
  );
};


const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Fetch data dynamically
    fetch('/destinations.json') // Replace with API endpoint or Firebase URL
      .then((response) => response.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.error('Error fetching destinations:', error));
  }, []);

  return (
    <section className="bg-pearl py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Destinations</h1>
        <p className="text-lg md:text-xl mt-4 text-gray-600">
          Discover extraordinary places across Madagascar.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-5">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            title={destination.title}
            description={destination.description}
            image={destination.image}
            link={destination.link}
          />
        ))}
      </div>

      {/* "See All Offers" Link */}
      <div className="text-center mt-12">
        <a
          href="/destination"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700"
        >
          See All Offers
        </a>
      </div>
    </section>
  );
};

export default Destinations;

import React from 'react';

const DestinationCard = ({ title, description, image, link }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div>
          <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-200 mb-4">{description}</p>
          <a
            href={link}
            className="inline-block bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-yellow-600"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

const Destinations = () => {
  const destinations = [
    {
      title: 'Nosy Be',
      description: 'Paradise island with pristine beaches and spectacular sunsets.',
      image: 'https://cdn.pixabay.com/photo/2020/04/26/16/29/nosy-bee-5096063_1280.jpg',
      link: '/nosy-be',
    },
    {
      title: 'Antananarivo',
      description: 'Vibrant capital with rich culture, history, and colorful markets.',
      image: 'https://cdn.pixabay.com/photo/2017/03/16/19/52/town-2150061_1280.jpg',
      link: '/antananarivo',
    },
    {
      title: 'Toamasina',
      description: 'Largest port with palm-fringed beaches and a tropical vibe.',
      image: 'https://cdn.pixabay.com/photo/2020/01/26/17/01/lemur-4795249_1280.jpg',
      link: '/toamasina',
    },
    {
      title: 'Tuléar',
      description: 'Sunny city with coral reefs and stunning beaches.',
      image: 'https://cdn.pixabay.com/photo/2019/10/29/15/30/madagascar-4587230_1280.jpg',
      link: '/tulear',
    },
  ];

  return (
    <section className="bg-pearl py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Explore Our Destinations</h1>
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
          href="/all-offers"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700"
        >
          See All Offers
        </a>
      </div>
    </section>
  );
};

export default Destinations;

import React from 'react';
import DestinationCard from '../components/DestinationCard';
import nord from '../assets/images/nord.jpg'
import sud from '../assets/images/sud.jpg'
import est from '../assets/images/est.jpg'
import ouest from '../assets/images/ouest.webp'

const DestinationsList = () => {
  const destinations = [
    {
      image: nord,
      title: 'NORD',
      description: 'Une brève description de la destination 1.',
      link: '/destination1',
    },
    {
      image: sud,
      title: 'SUD',
      description: 'Une brève description de la destination 2.',
      link: '/destination2',
    },
    {
      image: est,
      title: 'EST',
      description: 'Une brève description de la destination 3.',
      link: '/destination3',
    },
    {
        image: ouest,
        title: 'OUEST',
        description: 'Une brève description de la destination 3.',
        link: '/destination3',
      },
    // Ajoutez d'autres destinations si nécessaire
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nos Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              image={destination.image}
              title={destination.title}
              description={destination.description}
              link={destination.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsList;

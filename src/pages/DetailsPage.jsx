import React from 'react';
import DestinationCard from '../components/Destination/DestinationCard';

const DetailsPage = () => {
  const destinations = [
    {
      name: 'Nosy Be, Madagascar',
      description: 'Nosy Be est une magnifique île tropicale située au large de la côte nord-ouest de Madagascar, connue pour ses plages paradisiaques, ses récifs coralliens et ses superbes couchers de soleil.',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/05/08/18/22/river-4189256_960_720.jpg',
      activities: ['Plongée sous-marine', 'Excursion en bateau', 'Safari en forêt tropicale', 'Snorkeling', 'Visite des îles environnantes'],
      bestTime: 'Avril à Novembre',
      price: '1200',
      onBookNow: () => alert('Réservation Nosy Be !'),
    },
    {
      name: 'Antananarivo, Madagascar',
      description: 'La capitale animée de Madagascar, entourée de collines verdoyantes, avec une riche histoire et une culture fascinante à explorer.',
      imageUrl: 'https://cdn.pixabay.com/photo/2021/03/25/21/21/city-6124245_960_720.jpg',
      activities: ['Visite des palais royaux', 'Marchés artisanaux', 'Dégustation de cuisine locale', 'Randonnées'],
      bestTime: 'Mai à Octobre',
      price: '800',
      onBookNow: () => alert('Réservation Antananarivo !'),
    }
  ];

  return (
    <div className="pt-16"> {/* Ajout de padding-top pour éviter la superposition avec le navbar */}
      {destinations.map((destination, index) => (
        <DestinationCard
          key={index}
          name={destination.name}
          description={destination.description}
          imageUrl={destination.imageUrl}
          activities={destination.activities}
          bestTime={destination.bestTime}
          price={destination.price}
          onBookNow={destination.onBookNow}
        />
      ))}
    </div>
  );
};

export default DetailsPage;


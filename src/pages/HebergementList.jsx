import React, { useRef } from 'react';
import Hebergement from '../components/Hebergement/Hebergement';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Vous pouvez utiliser vos propres icônes

const HebergementList = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const items = [
    {
      imageUrl: 'https://images.pexels.com/photos/4666758/pexels-photo-4666758.jpeg',
      label: 'Spa',
      link: 'https://www.expedia.fr/Hotel-Search?destination=France&regionId=59&latLong=46.227638%2C2.213749&rooms=1&adults=2&startDate=2024-09-03&d1=2024-09-03&endDate=2024-09-05&d2=2024-09-05&amenities=SPA_ON_SITE',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/5671237/pexels-photo-5671237.jpeg',
      label: 'Appart’hôtel',
      link: 'https://www.expedia.fr/Hotel-Search?destination=France&regionId=59&latLong=46.227638%2C2.213749&rooms=1&adults=2&startDate=2024-09-03&d1=2024-09-03&endDate=2024-09-05&d2=2024-09-05&lodging=APART_HOTEL',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3825620/pexels-photo-3825620.jpeg',
      label: 'Chambre d’hôte',
      link: 'https://www.expedia.fr/Hotel-Search?destination=France&regionId=59&latLong=46.227638%2C2.213749&rooms=1&adults=2&startDate=2024-09-03&d1=2024-09-03&endDate=2024-09-05&d2=2024-09-05&lodging=B_B',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/2414826/pexels-photo-2414826.jpeg',
      label: 'Village vacances',
      link: 'https://www.expedia.fr/Hotel-Search?destination=France&regionId=59&latLong=46.227638%2C2.213749&rooms=1&adults=2&startDate=2024-09-03&d1=2024-09-03&endDate=2024-09-05&d2=2024-09-05&lodging=VACATION_VILLAGE',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1866145/pexels-photo-1866145.jpeg',
      label: 'Bungalow',
      link: 'https://www.expedia.fr/Hotel-Search?destination=France&regionId=59&latLong=46.227638%2C2.213749&rooms=1&adults=2&startDate=2024-09-03&d1=2024-09-03&endDate=2024-09-05&d2=2024-09-05&lodging=BUNGALOW',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3397659/pexels-photo-3397659.jpeg',
      label: 'Hôtel familial',
      link: 'https://www.expedia.fr/Hotel-Search?destination=France&regionId=59&latLong=46.227638%2C2.213749&rooms=1&adults=2&startDate=2024-09-03&d1=2024-09-03&endDate=2024-09-05&d2=2024-09-05&lodging=FAMILY',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/2254728/pexels-photo-2254728.jpeg',
      label: 'Hôtel tout inclus',
      link: 'https://www.expedia.fr/Hotel-Search?destination=France&regionId=59&latLong=46.227638%2C2.213749&rooms=1&adults=2&startDate=2024-09-03&d1=2024-09-03&endDate=2024-09-05&d2=2024-09-05&lodging=ALL_INCLUSIVE',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/2311531/pexels-photo-2311531.jpeg',
      label: 'Hôtel avec piscine',
      link: 'https://www.expedia.fr/Hotel-Search?destination=France&regionId=59&latLong=46.227638%2C2.213749&rooms=1&adults=2&startDate=2024-09-03&d1=2024-09-03&endDate=2024-09-05&d2=2024-09-05&amenities=POOL',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1865793/pexels-photo-1865793.jpeg',
      label: 'Hôtel avec vue',
      link: 'https://www.expedia.fr/Hotel-Search?destination=France&regionId=59&latLong=46.227638%2C2.213749&rooms=1&adults=2&startDate=2024-09-03&d1=2024-09-03&endDate=2024-09-05&d2=2024-09-05&amenities=VIEW',
    },
  ];
  

  return (
    <div className="relative py-20 max-w-7xl mx-auto font-Spinnaker">
      <h2 className="text-2xl font-bold mb-6">Découvrez votre nouvel hébergement préféré</h2>
      <div className="relative flex items-center group">
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-0 ml-4 z-10 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <FaChevronLeft size={16} />
        </button>
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden space-x-4 scrollbar-hide"
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <Hebergement imageUrl={item.imageUrl} label={item.label} link={item.link} />
            </div>
          ))}
        </div>
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-0 mr-4 z-10 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <FaChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default HebergementList;

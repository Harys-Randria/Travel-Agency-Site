import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules';

import { RxArrowTopRight } from 'react-icons/rx';

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
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, neque?',
      link: '/destination1',
    },
    {
      image: sud,
      title: 'SUD',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, doloribus.',
      link: '/destination2',
    },
    {
      image: est,
      title: 'EST',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, neque!',
      link: '/destination3',
    },
    {
        image: ouest,
        title: 'OUEST',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, officia!',
        link: '/destination3',
      },
    // Ajoutez d'autres destinations si nécessaire
  ];

  return (
    <div className="py-12 bg-gray-100">
      <Swiper breakpoints={{
          340: {
            slidesPerView : 2,
            spaceBetween : 15,
          },
          700:{
            slidesPerView : 3,
            spaceBetween : 15,
          }
      }}
        freeMode = {true}
        pagination = {{
          clickable: true
        }}

        modules={[FreeMode, Pagination]}
        className='max-w-[90%] lg:max-w-[80%]'
      >
          {destinations.map((destination, index) => (
            <SwiperSlide key={index}>
              <div className=" rounded overflow-hidden shadow-lg">
                <img className="w-full h-[250px]" src={destination.image} alt={destination.title} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{destination.title}</div>
                  <p className="text-gray-700 text-base">
                    {destination.description}
                  </p>
              </div>
    <div className="px-6 pt-4 pb-2">
      <a href={destination.link} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Read More
      </a>
    </div>
  </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default DestinationsList;

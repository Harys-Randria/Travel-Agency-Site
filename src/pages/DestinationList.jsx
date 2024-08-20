import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';

import nord from '../assets/images/nord.jpg';
import sud from '../assets/images/sud.jpg';
import est from '../assets/images/est.jpg';
import ouest from '../assets/images/ouest.webp';

const DestinationCard = ({ image, title, description, link }) => (
  <div className="rounded overflow-hidden shadow-lg bg-white transform transition duration-500 hover:scale-105">
    <img className="w-full h-[250px] object-cover" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-2xl text-gray-800 mb-2 font-lora">{title}</div>
      <p className="text-gray-600 text-base font-openSans">
        {description}
      </p>
    </div>
    <div className="px-6 py-4 flex justify-end">
      <a href={link} className="flex items-center text-blue-500 hover:text-blue-700 font-openSans">
        Read More <RxArrowTopRight className="ml-2 group-hover:rotate-45" />
      </a>
    </div>
  </div>
);

const DestinationsList = () => {
  const destinations = [
    {
      image: nord,
      title: 'NORD',
      description: 'Explore the stunning landscapes and rich culture of the North.',
      link: '/destination1',
    },
    {
      image: sud,
      title: 'SUD',
      description: 'Discover the warm and inviting beaches of the South.',
      link: '/destination2',
    },
    {
      image: est,
      title: 'EST',
      description: 'Experience the vibrant wildlife and lush forests of the East.',
      link: '/destination3',
    },
    {
      image: ouest,
      title: 'OUEST',
      description: 'Unveil the hidden gems of the West with breathtaking views.',
      link: '/destination4',
    },
  ];

  return (
    <div className="flex items-center justify-center flex-col min-h-screen py-12 bg-gray-100">
      <h1 className='font-lora text-5xl mb-8 text-gray-800'>Our Tours</h1>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className='max-w-[90%] lg:max-w-[80%]'
      >
        {destinations.map((destination, index) => (
          <SwiperSlide key={index}>
            <DestinationCard {...destination} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DestinationsList;

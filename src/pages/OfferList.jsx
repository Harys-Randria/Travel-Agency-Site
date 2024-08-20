import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import OfferCard from '../components/OfferCard';
import OfferBg from '../assets/images/ouest.webp';
import TravelButton from '../components/TravelButon';

const OfferList = () => {
  const deals = [
    {
      image: 'https://via.placeholder.com/200',
      destination: 'Paris',
      price: 120,
      description: 'A wonderful weekend getaway in the city of love.',
    },
    {
      image: 'https://via.placeholder.com/200',
      destination: 'London',
      price: 150,
      description: 'Explore the historic streets and vibrant culture of London.',
    },
    {
      image: 'https://via.placeholder.com/200',
      destination: 'Rome',
      price: 130,
      description: 'Experience the ancient wonders of Rome.',
    },
    // Add more deals as needed
  ];

  return (
    <div className="flex justify-center items-center p-5">
        <div className="relative rounded-3xl w-[95%] h-[580px] bg-cover bg-no-repeat bg-center 
            flex flex-col py-5 gap-3 justify-center items-center"
            style={{
                backgroundImage: `url(${OfferBg})`,
            }}
        >
            {/* Overlay pour assombrir l'image */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>

            {/* Titre et bouton */}
            <div className='relative w-[90%] h-12 flex flew-row justify-between items-center z-10'>
                <h1 className='text-white text-3xl font-Spinnaker'>
                    Nos meilleures Offres
                </h1>
                <TravelButton 
                    text={'All Offers'}
                />
            </div>
            
            {/* Cartes */}
            <div className="relative w-[90%] h-[420px]">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    centeredSlides={false}
                    pagination={{ clickable: true }}
                    className="swiper centered-slide-carousel"
                >
                    {deals.map((deal, index) => (
                        <SwiperSlide key={index}>
                            <OfferCard
                                image={deal.image}
                                destination={deal.destination}
                                price={deal.price}
                                description={deal.description}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </div>
  );
};

export default OfferList;

import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import playa from '../assets/images/playa.jpg';
import TravelButton from '../components/TravelButon';

const AboutUs = () => {
  return (
    <div className='w-screen h-screen font-Poppins text-white relative overflow-hidden' style={{ minHeight: '480px' }}>
      {/* Parallax background image */}
      <Parallax speed={-20}>
        <div 
          style={{
            backgroundImage: `url(${playa})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        ></div>
      </Parallax>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      {/* Content section */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center p-10 max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2">
          {/* Title and description */}
          <h1 className="text-5xl font-bold mb-4">Discover the Hidden Gems of Madagascar: Your Adventure Awaits!</h1>
          <p className="text-lg mb-8">
            We are the best Tour Operator in Madagascar, offering unforgettable experiences across the island.
          </p>

          {/* CTA Button */}
          <TravelButton text={'Start Your Journey Now'} />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

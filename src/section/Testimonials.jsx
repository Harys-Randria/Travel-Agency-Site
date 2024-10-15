import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useParallax } from 'react-scroll-parallax';

// Témoignages
const testimonials = [
  {
    testimonial: 'This was the most amazing trip of my life! The beaches were stunning, and the experience was unforgettable.',
    name: 'John Doe',
    location: 'New York, USA',
  },
  {
    testimonial: 'A perfect getaway! The tropical ambiance and warm hospitality made this vacation truly special.',
    name: 'Jane Smith',
    location: 'London, UK',
  },
  // Ajoute plus de témoignages si nécessaire...
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
};

const TestimonialSection = () => {
  // Appliquer l'effet parallaxe à l'image de fond
  const parallax = useParallax({
    speed: -20,
  });

  return (
    <div className="w-screen h-[70vh] font-Poppins text-white relative overflow-hidden" style={{ minHeight: '480px' }}>
      
      {/* Parallax background image */}
      <div 
        ref={parallax.ref}  // Attacher l'effet de parallaxe à l'image de fond
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2020/04/26/16/29/nosy-bee-5096063_1280.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,  // Assure que l'image reste derrière le contenu
        }}
      ></div>

      {/* Overlay pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

      <div className=" h-full flex flex-col items-center justify-center py-14">
        {/* Titre et sous-titre */}
        <div className="relative z-20 text-center mb-12 max-w-7xl mx-auto px-4 lg:px-0">
          <h2 className="text-5xl font-normal lg:text-5xl ">What Our Clients Say</h2>
          <p className="text-lg text-gray-300 mt-4">Hear from those who have experienced paradise with us.</p>
        </div>
        
        {/* Slider des témoignages */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-0">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg">
                  <p className="text-xl italic mb-6">"{testimonial.testimonial}"</p>
                  <div className="text-center">
                    <h4 className="text-2xl font-Poppins font-semibold text-blue-400">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

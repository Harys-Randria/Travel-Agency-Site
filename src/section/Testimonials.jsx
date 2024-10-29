import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    testimonial: 'From start to finish, everything was seamless. The tours, the service, the unforgettable experiences – 10/10!',
    name: 'David Lee',
    location: 'London, UK',
    rating: 10
  },
  {
    testimonial: 'This was the trip of a lifetime! The beaches, the people, the adventure – everything was absolutely perfect.',
    name: 'Michael Roberts',
    location: 'Sydney, Australia',
    rating: 9.5
  },
  {
    testimonial: 'Madagascar is beyond beautiful, and MadaWeaver made it easy to explore every hidden gem. Simply magical!',
    name: 'Sarah Johnson',
    location: 'California, USA',
    rating: 9.8
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};

const TestimonialSection = () => {
  return (
    <div className="relative w-full h-[90vh] font-Poppins text-white overflow-hidden">
      {/* Background Image Test */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2020/04/26/16/29/nosy-bee-5096063_1280.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)', // Pour assombrir et tester la visibilité
          zIndex: '-1', 
        }}
      />

      {/* Section Title and Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 z-10"></div>
      
      <div className="relative z-20 h-full flex flex-col items-center justify-center py-14 px-4 lg:px-0">
        <div className="text-center mb-12 max-w-7xl mx-auto">
          <h2 className="font-normal text-4xl md:text-5xl text-pearl mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-pearl">
            Real experiences from travelers who’ve discovered Madagascar with us.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="w-full max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-[#1EA5E0] p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500">
                  <p className="text-xl md:text-2xl italic mb-6 leading-relaxed text-white">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold text-yellow-300">{testimonial.name}</h4>
                      <p className="text-sm text-gray-300">{testimonial.location}</p>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <span className="text-3xl font-bold">{testimonial.rating}</span>
                      <span className="text-xl">/10</span>
                    </div>
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

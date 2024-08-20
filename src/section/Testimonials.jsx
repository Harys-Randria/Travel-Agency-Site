import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  // Add more testimonials as needed...
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const TestimonialSection = () => {
  return (
    <div
      className="py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2018/12/14/15/55/sunset-3875295_1280.jpg')`,
        backgroundSize: 'cover',
      }}
    >
      <div className="bg-black bg-opacity-50 py-20">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-white">What Our Clients Say</h2>
          <p className="text-lg text-blue-200 mt-4">Hear from those who have experienced paradise with us.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((test, index) => (
              <div key={index} className="px-4">
                <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
                  <p className="text-xl italic text-gray-800">"{test.testimonial}"</p>
                  <h4 className="mt-4 text-2xl font-bold text-blue-900">{test.name}</h4>
                  <p className="text-lg text-gray-600">{test.location}</p>
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

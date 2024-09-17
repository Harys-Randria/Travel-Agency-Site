import React from 'react';

const GallerySection = ({ images }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
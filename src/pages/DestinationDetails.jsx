// src/components/DestinationDetails.jsx
import React, { useState } from 'react';
import HeroSection from '../components/TripDetail/HeroSection';
import DescriptionSection from '../components/TripDetail/DescriptionSection';
import HighlightsSection from '../components/TripDetail/HighlightsSection';
import GallerySection from '../components/TripDetail/GallerySection';
import BookingSection from '../components/TripDetail/BookingSection';

const tabs = [
  { id: 'hero', label: 'Overview' },
  { id: 'description', label: 'Description' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'booking', label: 'Booking' },
];

const DestinationDetails = ({ destination }) => {
  const [activeTab, setActiveTab] = useState('hero');

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Tab Navigation */}
      <div className="flex justify-around bg-teal-100 rounded-lg mb-6 shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-3 px-6 font-semibold transition duration-300 ${
              activeTab === tab.id ? 'bg-teal-600 text-white' : 'text-teal-600 hover:bg-teal-200'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        {activeTab === 'hero' && <HeroSection image={destination.image} title={destination.title} />}
        {activeTab === 'description' && <DescriptionSection description={destination.description} />}
        {activeTab === 'highlights' && <HighlightsSection highlights={destination.highlights} />}
        {activeTab === 'gallery' && <GallerySection images={destination.gallery} />}
        {activeTab === 'booking' && <BookingSection price={destination.price} duration={destination.duration} />}
      </div>
    </div>
  );
};

export default DestinationDetails;

// src/pages/DetailsPage.jsx
import React, { useEffect } from 'react';
import DestinationDetails from './DestinationDetails';
import { useParams } from 'react-router-dom';
import listdata from '../components/Trip/TripData'; // Suppose you have a TripData.js that contains all destinations

const DetailsPage = () => {
  const { id } = useParams();
  const destination = listdata.find((trip) => trip.id === parseInt(id));

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!destination) {
    return <p>Destination non trouvée.</p>;
  }

  return <DestinationDetails destination={destination} />;
};

export default DetailsPage;

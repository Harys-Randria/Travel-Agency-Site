import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookingForm from "../components/DestinationDetails/BookingForm";
import { motion } from "framer-motion";

const DestinationDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [includeCarRental, setIncludeCarRental] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await axios.get("/destinations.json");
        const destination = response.data.find(
          (dest) => dest.id === parseInt(id)
        );
        if (!destination) throw new Error("Destination introuvable.");
        setData(destination);
      } catch (err) {
        console.error(err);
        setError("Erreur lors du chargement des détails.");
      }
    };

    fetchDestination();
  }, [id]);

  const totalPrice = useMemo(() => {
    if (!data) return 0;
    const basePrice = data.price * numberOfPeople;
    const carRentalPrice = includeCarRental ? data.carRentalPrice || 0 : 0;
    return basePrice + carRentalPrice;
  }, [data, numberOfPeople, includeCarRental]);

  if (error) return <p className="text-red-500">{error}</p>;

  if (!data) return <p>Chargement...</p>;

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white space-y-4">
            <h1 className="text-6xl font-bold">{data.title}</h1>
            <p className="text-lg">{data.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 bg-white shadow z-50 py-4">
        <div className="max-w-7xl mx-auto flex justify-center space-x-6">
          {["Overview", "Itinerary", "Gallery", "Book Now"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 font-semibold ${
                activeSection === section
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-gray-700 hover:text-yellow-500"
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2">
          {activeSection === "Overview" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-gray-700">{data.overview}</p>
            </motion.div>
          )}

          {activeSection === "Itinerary" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-3xl font-bold mb-4">Itinerary</h2>
              <div className="space-y-4">
                {data.itinerary.map((day, index) => (
                  <details
                    key={index}
                    className="group bg-white border rounded shadow"
                  >
                    <summary className="p-4 text-lg font-semibold cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <span>{`Day ${day.day}: ${day.title}`}</span>
                    </summary>
                    <p className="p-4 text-gray-600">{day.description}</p>
                  </details>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === "Gallery" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-3xl font-bold mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Gallery ${index}`}
                    className="rounded shadow-md"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Right Column: Booking Form */}
        <div className="md:col-span-1">
          <BookingForm
            startDate={startDate}
            endDate={new Date()}
            onDateChange={() => {}}
            numberOfPeople={numberOfPeople}
            onNumberChange={setNumberOfPeople}
            includeCarRental={includeCarRental}
            onCarRentalChange={setIncludeCarRental}
            totalPrice={totalPrice}
            handleBooking={() => alert("Booked!")}
          />
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;

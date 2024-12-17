import React from "react";

const BookingForm = ({
  startDate,
  endDate,
  onDateChange,
  numberOfPeople,
  onNumberChange,
  includeCarRental,
  onCarRentalChange,
  totalPrice,
  handleBooking,
  bookingSuccess,
}) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Réservez votre séjour</h2>
      
      {/* Date Selection */}
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Date de début :</label>
        <input
          type="date"
          value={startDate || ""}
          onChange={(e) => onDateChange({ startDate: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Date de fin (automatique) :</label>
        <input
          type="text"
          value={endDate || ""}
          readOnly
          className="w-full px-3 py-2 border bg-gray-100 rounded-md"
        />
      </div>

      {/* Number of People */}
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Nombre de personnes :</label>
        <input
          type="number"
          value={numberOfPeople}
          onChange={(e) => onNumberChange(parseInt(e.target.value, 10))}
          min="1"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {/* Car Rental Option */}
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          checked={includeCarRental}
          onChange={(e) => onCarRentalChange(e.target.checked)}
          className="mr-2"
        />
        <label className="text-gray-600">Inclure la location de voiture</label>
      </div>

      {/* Price Display */}
      <div className="mb-4">
        <p className="text-gray-700">
          <strong>Prix total :</strong> {totalPrice}€
        </p>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleBooking}
        className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
      >
        Réserver
      </button>

      {/* Success Message */}
      {bookingSuccess && (
        <p className="mt-4 text-green-500 font-semibold">Réservation réussie !</p>
      )}
    </div>
  );
};

export default BookingForm;

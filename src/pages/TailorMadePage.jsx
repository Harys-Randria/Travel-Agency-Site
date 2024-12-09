import React from 'react';

const TailorMadePage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://your-image-url.com')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl font-bold">Adventure, Tailor-Made for You</h1>
          <p className="text-lg mt-4">
            Plan your personalized journey with ease.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Start Planning Your Trip</h2>
        <form className="space-y-6">
          {/* Destination */}
          <div>
            <label className="block font-semibold mb-2">Where would you like to go?</label>
            <input
              type="text"
              placeholder="Enter destination"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block font-semibold mb-2">When would you like to go?</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Group Size */}
          <div>
            <label className="block font-semibold mb-2">
              How many people in your group?
            </label>
            <input
              type="number"
              min="1"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block font-semibold mb-2">
              Approximate budget per person
            </label>
            <select className="w-full px-4 py-2 border rounded-md">
              <option>Below $1000</option>
              <option>$1000 - $3000</option>
              <option>Above $3000</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="max-w-6xl mx-auto flex justify-between">
          <p>&copy; 2024 Your Site Name. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TailorMadePage;

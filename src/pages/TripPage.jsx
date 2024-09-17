import React from 'react'
import TripList from '../components/Trip/TripList'

const TripPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">Our Trips</h1>
        <TripList />
      </div>
    </div>
  )
}

export default TripPage

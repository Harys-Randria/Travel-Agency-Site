import React from 'react'
import MySection from '../components/sample/MySection'

const samplePage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">Our Trips</h1>
        <MySection />
      </div>
    </div>
  )
}

export default samplePage

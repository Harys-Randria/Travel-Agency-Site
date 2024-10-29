import React from 'react'
import AboutUs from '../section/AboutUs'
import Destination from '../section/Destination'
import TestimonialSection from '../section/Testimonials'
import HeroSection from '../section/HeroSection'
import TeamSection from '../section/TeamSection'
import Gallery from '../section/Gallery'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <Destination />
      <AboutUs />
      <TeamSection />
      <Gallery />
      <TestimonialSection />
    </div>
  )
}

export default HomePage

import React from 'react'
import RentalHeroSection from '../RentalCarSection/RentalHeroSection'
import QuickSearch from '../RentalCarSection/QuickSearch'
import CarCatalog from '../RentalCarSection/CarCatalog'

const RentalCarPage = () => {
  return (
    <div>
        <RentalHeroSection />
        <QuickSearch />
        <CarCatalog />
    </div>
  )
}

export default RentalCarPage
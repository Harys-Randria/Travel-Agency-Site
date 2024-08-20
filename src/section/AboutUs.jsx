import React from 'react'
import playa from '../assets/images/playa.jpg'
import TravelButton from '../components/TravelButon'

const AboutUs = () => {
  return (
    <div className='w-screen h-screen font-Spinnaker text-white relative' style={{
        backgroundImage: `url(${playa})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '480px'
    }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className='relative max-w-7xl mx-auto py-20 flex flex-col h-full items-center'>

        {/* En tête */}
        <div className='flex flex-row w-full h-auto justify-between items-center px-10'>

            {/* Titre */}
            <div>
                <h1 className='text-5xl font-bold leading-tight mb-2'>About Us</h1>
                <p className='text-lg'>The best Tour Operator in Madagascar</p>
            </div>

            {/* CTA */}
            <a href="/" 
               className=" text-white py-2 px-4 rounded-full shadow-lg hover:scale-105 transition duration-300 text-lg font-semibold whitespace-nowrap"
               style={{ minWidth: '200px', textAlign: 'center' }}>
                Réservez dès maintenant
            </a>
        </div>

        {/* Corps */}
        <div className='flex flex-row h-full w-full justify-center'>

            {/* Description */}
            <div className='w-full text-left m-5 flex flex-col justify-center mr-[150px]'>
                <div>
                    <p className='text-2xl font-medium leading-relaxed'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, nihil dolor. 
                        Perferendis, dolorem! Quaerat officiis aspernatur alias fugit ab autem?
                    </p>
                </div>
                <div className="mt-5">
                    <TravelButton text={'Découvrir'} />
                </div>
            </div>

            {/* Images */}
            <div className='bg-light-green-500 w-full m-5 flex justify-center items-center rounded-lg shadow-lg'>
                <img src={playa} alt="images" className='object-cover rounded-lg h-full' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

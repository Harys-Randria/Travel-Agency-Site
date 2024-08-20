import React from 'react'

const DestinationLists = ({ title, description, images, reverse }) => {
  return (
    <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center my-10`}>
      
      {/* Description */}
      <div className='w-1/2 p-5 font-Spinnaker'>
        <h2 className='text-4xl font-bold text-black mb-3'>{title}</h2>
        <p className='text-lg leading-relaxed text-gray-700'>{description}</p>
      </div>
      
      {/* Images */}
      <div className='w-1/2 grid grid-cols-2 gap-2 p-5'>
        {images.map((image, index) => (
          <div key={index} className='overflow-hidden rounded-lg shadow-lg'>
            <img src={image} alt={`Destination ${index}`} className='object-cover h-full w-full transition-transform duration-300 hover:scale-105' />
          </div>
        ))}
      </div>
      
    </div>
  )
}

const Destination = () => {
  const destinations = [
    {
      title: 'Nosy Be',
      description: 'Explorez l’île paradisiaque de Nosy Be avec ses plages immaculées et ses couchers de soleil spectaculaires.',
      images: ['https://cdn.pixabay.com/photo/2020/04/26/16/29/nosy-bee-5096063_1280.jpg',
         'https://cdn.pixabay.com/photo/2020/04/26/16/39/madagascar-5096080_1280.jpg'],
      reverse: false
    },
    {
      title: 'Antananarivo',
      description: 'Découvrez la capitale vibrante de Madagascar, pleine de culture, d’histoire, et de marchés colorés.',
      images: ['https://cdn.pixabay.com/photo/2017/03/16/19/52/town-2150061_1280.jpg',
         'https://cdn.pixabay.com/photo/2020/03/26/13/15/micheline-4970420_1280.jpg'],
      reverse: true
    },
    // Ajoute d'autres destinations ici...
  ]

  return (
    <div className='bg-pearl py-20 font-Spinnaker'>
      <div className='text-center mb-12'>
        <h1 className='text-5xl font-bold text-black'>Explorez Nos Destinations</h1>
        <p className='text-lg mt-4 text-gray-600'>Découvrez des lieux extraordinaires à travers Madagascar.</p>
      </div>
      <div className='max-w-7xl mx-auto'>
        {destinations.map((dest, index) => (
          <DestinationLists 
            key={index}
            title={dest.title}
            description={dest.description}
            images={dest.images}
            reverse={dest.reverse}
          />
        ))}
      </div>
    </div>
  )
}

export default Destination

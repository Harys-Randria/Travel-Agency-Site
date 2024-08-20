import React from 'react'; // Assurez-vous que le chemin est correct
import backgroundImage from '../assets/images/parc-isalo.webp';
import TravelButton from '../components/TravelButon';

const HeroSection = () => {
  return (
    <div className='max-w-7xl mx-auto h-[480px]'>
      <section 
        className="relative bg-cover bg-center bg-no-repeat h-auto font-Spinnaker mt-10 rounded-3xl" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          minHeight: '480px' // Ajustez cette valeur pour la hauteur souhaitée
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25 rounded-3xl"></div>
        <div className="relative flex items-center justify-between h-full p-24">
            {/* CTA */}
            <div className=' bg-white rounded-3xl flex items-center justify-center text-black p-8 w-[400px] h-[252px]'>
              <div className="text-left">
                <h1 className="text-xl md:text-3xl font-bold mb-4">Découvrez Madagascar avec MadaWeaver</h1>
                <p className="text-sm md:text-lg mb-8">Des aventures inoubliables à travers des paysages époustouflants.</p>
                <TravelButton text={'Réservez maintenant'} />
              </div>
            </div>
            {/* Image */}
            <div className='flex-1 flex items-center justify-center text-white p-8'>
              <div className="text-center">
                <p>right</p>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;

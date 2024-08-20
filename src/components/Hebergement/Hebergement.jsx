import React from 'react'

const Hebergement = ({ imageUrl, label, link  }) => {
  return (
    <div className="relative w-64 h-96 overflow-hidden rounded-3xl shadow-lg font-Spinnaker">
        <img src={imageUrl} alt={label} className="object-cover w-full h-full" />
        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
        <span className="text-white text-lg font-bold">{label}</span>
        </div>
        <a href={link} className="absolute inset-0" aria-hidden="true"></a>
    </div>
  )
}

export default Hebergement

import React from 'react';

function BookingButton({ isScrolled }) {
  return (
    <button
      onClick={() =>
        window.open(
          'https://docs.google.com/forms/d/e/1FAIpQLSdto2c8ar6ci4275UOHmoQby5eMkC6YbNZkUb3kFYGXkODJhQ/viewform?usp=header',
          '_blank'
        )
      }
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: isScrolled ? '#F26B0F' : 'transparent', // Changement couleur
        color: isScrolled ? 'white' : '#F26B0F', // Couleur texte
        border: isScrolled ? 'none' : '2px solid #F26B0F', // Bordure visible si pas scrollé
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
    >
      BOOK NOW
    </button>
  );
}

export default BookingButton;

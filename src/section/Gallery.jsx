import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Assure que le modal est accessible

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const images = [
    'https://cdn.pixabay.com/photo/2019/10/29/15/29/tsingy-4587229_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/03/15/11/lemur-1794519_960_720.jpg',
    'https://cdn.pixabay.com/photo/2022/12/30/14/42/cottages-7687138_960_720.jpg',
    'https://cdn.pixabay.com/photo/2022/12/30/14/42/cottages-7687138_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/05/12/20/15/lemur-3394482_960_720.jpg',
    'https://cdn.pixabay.com/photo/2019/11/02/21/36/africa-4597486_960_720.jpg',
  ];

  const openModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage('');
  };

  return (
    <section className="bg-gray-900 text-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12">Photo Gallery</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Dive into the beauty of Madagascar through our curated photo gallery.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img
                src={image}
                alt={`Gallery ${index}`}
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <button onClick={closeModal} className="absolute top-4 right-4 text-white text-3xl">&times;</button>
        <img src={currentImage} alt="Large view" className="max-w-full max-h-full rounded-lg" />
      </Modal>
    </section>
  );
};

export default Gallery;

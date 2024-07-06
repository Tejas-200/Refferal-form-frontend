// src/App.js
import React, { useState } from 'react';
import HeroSection from './HeroSection';
import ReferralModal from './HeroRefferal';
import Overlay from './Overlay';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <HeroSection openModal={openModal} />
      <ReferralModal open={isModalOpen} handleClose={closeModal} />
      <Overlay open={isModalOpen} opacity={0.7} /> {/* Adjust opacity here */}
    </div>
  );
};

export default App;
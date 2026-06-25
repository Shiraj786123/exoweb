import React, { useState } from 'react';

import ContactSection from '../components/ContactSection';
import ExpertPopup from '../components/ExpertPopup';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HomeAreasSection from '../components/HomeAreasSection';
import HomeServicesSection from '../components/HomeServicesSection';
import Navbar from '../components/Navbar';
import ProcessSection from '../components/ProcessSection';
import ReviewSection from '../components/ReviewSection';
import Solution from '../components/Solution';
import SuccessSection from '../components/SuccessSection';
import WhoWeAre from '../components/WhoWeAre';
import WhyChooseSleekIT from '../components/WhyChooseSleekIT';

const HomePage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="home-hero-separator" aria-hidden="true" />
      <HomeServicesSection />
      <HomeAreasSection />
      <Solution />
      <SuccessSection />
      <ProcessSection />
      <WhoWeAre />
      <WhyChooseSleekIT />
      <ContactSection />
      <ReviewSection />
      <Footer />
      <ExpertPopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default HomePage;

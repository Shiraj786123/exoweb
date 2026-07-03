import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HomeAreasSection from '../components/HomeAreasSection';
import HomeServicesSection from '../components/HomeServicesSection';
import Navbar from '../components/Navbar';
import Solution from '../components/Solution';

const ProcessSection = dynamic(() => import('../components/ProcessSection'));
const SuccessSection = dynamic(() => import('../components/SuccessSection'));
const WhoWeAre = dynamic(() => import('../components/WhoWeAre'));
const WhyChooseSleekIT = dynamic(() => import('../components/WhyChooseSleekIT'));
const ReviewSection = dynamic(() => import('../components/ReviewSection'));
const ExpertPopup = dynamic(() => import('../components/ExpertPopup'), { ssr: false });

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

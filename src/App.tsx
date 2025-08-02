import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import PageManager from './components/PageManager';
import Hero from './components/Hero';
import GalaxySection from './components/GalaxySection';
import About from './components/About';

import WhyParticipate from './components/WhyParticipate';
import Explore from './components/Explore';
import Judges from './components/Judges';
import Requirements from './components/Requirements';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const pages = [
    <Hero key="hero" />,
    <About key="about" />,
    <GalaxySection key="galaxy" />,
    <WhyParticipate key="why-participate" />,
    <Judges key="judges" />,
    <Requirements key="requirements" />,
    <Prizes key="prizes" />,
    <FAQ key="faq" />,
    <Contact key="contact" />,
  ];

  const pageNames = [
    'Home',
    'About',
    'Previous Hackathons',
    'Why Join',
    'Judges & Sponsors',
    'Requirements',
    'Prizes',
    'FAQ',
    'Contact',
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <PageManager pageNames={pageNames}>
        {pages}
      </PageManager>
      <Footer />
    </div>
  );
}

export default App;
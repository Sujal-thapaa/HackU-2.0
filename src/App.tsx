import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GalaxySectionWrapper from './components/GalaxySection2';
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
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      
      <About />
      <GalaxySectionWrapper />
      <WhyParticipate />
      <Judges />
      <Requirements />
      <Prizes />
      
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
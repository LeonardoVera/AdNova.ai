// filepath: src/App.jsx
import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import SimulatorSection from './features/simulator/components/SimulatorSection';
import Pricing from './components/sections/Pricing';
import Benefits from './components/sections/Benefits';
import Cta from './components/sections/Cta';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="landing-layout">
      <Header />
      <Hero />
      <Features />
      <SimulatorSection />
      <Pricing />
      <Benefits />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;

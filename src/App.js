import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import ServicesSection from './components/ServicesSection';
import TechSection from './components/TechSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import './index.css'; // Make sure this import stays to apply global styles
import './App.css'; // Make sure this import stays to apply global styles



function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TechSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
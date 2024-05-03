import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import ServicesSection from './components/ServicesSection';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';


import TechSection from './components/TechSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import './index.css';
import './App.css';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>RyanDesigns | A collection of my app, web, and creative design work.</title>
        <meta property="og:title" content="RyanDesigns" />
        <meta property="og:description" content="A collection of my app, web, and creative design work." />
        <meta property="og:image" content="images/og.png" />
        <meta property="og:url" content="https://ryandesigns.ca/" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TechSection />
        <PortfolioSection />
        <ContactSection />
        <Analytics />
        <SpeedInsights />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import ServicesSection from './components/ServicesSection';
import TechSection from './components/TechSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
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
        <meta property="og:image" content="https://ryandesigns.ca/images/og.webp" />
        <meta property="og:url" content="https://ryandesigns.ca/" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Chris Ryan — 20+ years of design & web development. App dev, graphic design, video editing, and more." />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <TechSection />
        <ScrollReveal>
          <PortfolioSection />
        </ScrollReveal>
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;

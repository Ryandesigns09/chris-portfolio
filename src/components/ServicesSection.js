import React, { useState, useEffect, useRef } from 'react';

const services = [
  "Web Design", "Web Development", "Graphic Design", "UI Design", "React JS", "Responsive Design",
  "Front-end Development", "E-commerce", "WordPress Development", "Print Design", "Illustration",
  "Brochure Design", "Banner Design", "Social Media Design", "SEO Optimization", "Motion Graphics",
  "Video Editing", "Prototyping", "Packaging Design", "Discord Bot", "Telegram Bot", "Twitter Bot",
  "Stream Layout", "WordPress", "Shopify", "Sports Design"
];

const ServicesSection = () => {
  const [currentService, setCurrentService] = useState('');
  const [spinning, setSpinning] = useState(false);
  const spinIntervalRef = useRef();
  const totalSpinsRef = useRef(0);
  const currentServiceIndexRef = useRef(0);

  const maxSpins = 18;

  const updateService = () => {
    currentServiceIndexRef.current = (currentServiceIndexRef.current + 1) % services.length;
    setCurrentService(services[currentServiceIndexRef.current]);
  };

  const startSpinning = () => {
    if (!spinning) {
      setSpinning(true);
      spinIntervalRef.current = setInterval(updateService, 100);
    }
  };

  const stopSpinning = () => {
    if (spinning) {
      clearInterval(spinIntervalRef.current);
      setSpinning(false);

      // Choose a random service from the ones that have been shown
      const remainingServices = services.slice(0, currentServiceIndexRef.current + 1);
      const randomIndex = Math.floor(Math.random() * remainingServices.length);
      setCurrentService(remainingServices[randomIndex]);
    }
  };

  const handleResultClick = () => {
    if (!spinning) {
      totalSpinsRef.current = 0; // Reset total spins
      startSpinning();
    }
  };

  useEffect(() => {
    // Randomly select initial service
    currentServiceIndexRef.current = Math.floor(Math.random() * services.length);
    setCurrentService(services[currentServiceIndexRef.current]);

    // Start spinning after a delay
    const timeoutId = setTimeout(startSpinning, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // Stop spinning after a number of spins
    if (spinning && totalSpinsRef.current < maxSpins) {
      totalSpinsRef.current++;
    } else if (spinning) {
      stopSpinning();
    }
  }, [currentService]); // Effect runs when `currentService` updates

  return (
    <section id="services" className="services">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl">
          I'm the <span id="result" onClick={handleResultClick}>{currentService}</span> guy
        </h2>
      </div>
    </section>
  );
};

export default ServicesSection;

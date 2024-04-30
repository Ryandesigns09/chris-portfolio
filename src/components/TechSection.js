import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useDrag } from '@use-gesture/react';
import ReactDOM from 'react-dom';


// Assume you have an array of technology objects with a name and a logo
const technologies = [
    { name: 'Figma', logo: 'tech/figma.png' },
    { name: 'Bootstrap', logo: 'tech/bootstrap.png' },
    { name: 'Tailwind', logo: 'tech/tailwind.png' },
    { name: 'Python', logo: 'tech/python.png' },
    { name: 'React', logo: 'tech/react.png' },
    { name: 'NodeJS', logo: 'tech/nodejs.png' },
    { name: 'MongoDB', logo: 'tech/mongodb.png' },
    { name: 'PostgreSQL', logo: 'tech/postgres.png' },
    { name: 'Wordpress', logo: 'tech/wordpress.png' },
    { name: 'Shopify', logo: 'tech/shopify.png' },
    { name: 'OBS', logo: 'tech/obs.png' },
    { name: 'Procreate', logo: 'tech/procreate.png' },
    { name: 'Photoshop', logo: 'tech/photoshop.png' },
    { name: 'Illustrator', logo: 'tech/illustrator.png' },
    { name: 'InDesign', logo: 'tech/indesign.png' },
    { name: 'After Effects', logo: 'tech/aftereffects.png' },
    { name: 'Premiere', logo: 'tech/premiere.png' },
    
  ];
  


  const TooltipPortal = ({ children, position }) => {
    const portalNode = useMemo(() => document.createElement('div'), []);
    const tooltipRef = useRef(null);
  
    useEffect(() => {
      document.body.appendChild(portalNode);
      return () => {
        document.body.removeChild(portalNode);
      };
    }, [portalNode]);
  
    useEffect(() => {
      if (tooltipRef.current) {
        const tooltipWidth = tooltipRef.current.offsetWidth;
        const newLeft = position.left - tooltipWidth / 2;
        tooltipRef.current.style.left = `${newLeft}px`;
      }
    }, [position]);
  
    return ReactDOM.createPortal(
      <div ref={tooltipRef} style={{ position: 'fixed', top: `${position.top}px`, left: `${position.left}px`, transform: 'translate(-50%, -50%)', zIndex: 50 }}>
        {children}
      </div>,
      portalNode
    );
  };
  
  
const TechStack = () => {
  const scrollContainer = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [tooltipContent, setTooltipContent] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const autoscrollSpeed = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainer.current && !isHovering) {
        const maxScrollLeft = scrollContainer.current.scrollWidth - scrollContainer.current.clientWidth;
        if (scrollContainer.current.scrollLeft >= maxScrollLeft) {
          scrollContainer.current.scrollLeft = 0;
        } else {
          scrollContainer.current.scrollLeft += autoscrollSpeed;
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, [isHovering]);

  const bind = useDrag(({ movement: [mx], lastOffset: [x], down }) => {
    if (scrollContainer.current) {
      if (down) {
        scrollContainer.current.scrollLeft -= mx;
      } else {
        scrollContainer.current.scrollLeft = -x;
      }
    }
  }, { from: () => [scrollContainer.current.scrollLeft, 0] });

  const handleMouseEnter = (tech, event) => {
    const rect = event.target.getBoundingClientRect();
    setIsHovering(true);
    setTooltipContent(tech.name);
    setTooltipPosition({ top: rect.top, left: rect.left + rect.width / 2 });
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
    setTooltipContent(null);
  };

  return (
    <section className="flex bg-slate-900 text-white z-50 overflow-visible">
      <div className="p-4 bg-blue-700 flex items-center">
        <h2 className="font-bold text-xs md:text-2xl text-white text-left md:pl-40">Applications & Tech Used</h2>
      </div>
      <div className="w-full md:w-3/4 relative flex items-center overflow-y-visible">
        <div {...bind()} ref={scrollContainer} className="flex overflow-auto hide-scroll-bar p-4 cursor-grab">
          {technologies.map((tech, index) => (
            <div key={index} className="group relative flex-shrink-0 p-2 w-10 min-w-16 md:min-w-36" 
              onMouseEnter={(e) => handleMouseEnter(tech, e)}
              onMouseLeave={handleMouseLeave}>
              <div className="flex items-center justify-center bg-black rounded-lg p-2 w-10 h-10 md:w-16 md:h-16">
                <img src={tech.logo} alt={tech.name} className="p-1" />
              </div>
            </div>
          ))}
        </div>
        {isHovering && tooltipContent && (
          <TooltipPortal position={tooltipPosition}>
            <div className="bg-blue-600 text-white text-sm py-1 px-3 rounded-md">
              {tooltipContent}
            </div>
          </TooltipPortal>
        )}
      </div>
    </section>
  );
};

export default TechStack;

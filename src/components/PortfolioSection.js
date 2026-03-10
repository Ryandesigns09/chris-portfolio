import React, { useState, useRef, useEffect, useCallback } from 'react';

import projects from '../data/projects';
import photoshopIcon from '../images/icons/photoshop.webp';
import illustratorIcon from '../images/icons/illustrator.webp';
import figmaIcon from '../images/icons/figma.webp';
import xcodeIcon from '../images/icons/xcode.webp';
import swiftIcon from '../images/icons/swift.webp';
import premiereIcon from '../images/icons/premiere.webp';
import aftereffectsIcon from '../images/icons/aftereffects.webp';
import indesignIcon from '../images/icons/indesign.webp';
import pythonIcon from '../images/icons/python.webp';
import obsIcon from '../images/icons/obs.webp';
import wordpressIcon from '../images/icons/wordpress.webp';
import reactIcon from '../images/icons/react.webp';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useDraggableScroll = (ref) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
      const onMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - ref.current.offsetLeft);
        setStartY(e.pageY - ref.current.offsetTop);
        setScrollLeft(ref.current.scrollLeft);
        setScrollTop(ref.current.scrollTop);
      };

      const onMouseUp = () => setIsDragging(false);
      const onMouseLeave = () => setIsDragging(false);

      const onMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - ref.current.offsetLeft;
        const y = e.pageY - ref.current.offsetTop;
        ref.current.scrollLeft = scrollLeft - (x - startX);
        ref.current.scrollTop = scrollTop - (y - startY);
      };

      const element = ref.current;
      element.addEventListener('mousedown', onMouseDown);
      element.addEventListener('mouseup', onMouseUp);
      element.addEventListener('mouseleave', onMouseLeave);
      element.addEventListener('mousemove', onMouseMove);

      return () => {
        element.removeEventListener('mousedown', onMouseDown);
        element.removeEventListener('mouseup', onMouseUp);
        element.removeEventListener('mouseleave', onMouseLeave);
        element.removeEventListener('mousemove', onMouseMove);
      };
    }, [isDragging, startX, startY, scrollLeft, scrollTop, ref]);

    return ref;
  };

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const projectsRef = useRef(null);
  const detailRef = useRef(null);

  useDraggableScroll(projectsRef);

  const filteredProjects = projects.filter((project) =>
    project.categories.includes(activeCategory) || activeCategory === 'all'
  );

  const techIcons = {
    photoshop: photoshopIcon,
    illustrator: illustratorIcon,
    indesign: indesignIcon,
    xcode: xcodeIcon,
    swift: swiftIcon,
    figma: figmaIcon,
    aftereffects: aftereffectsIcon,
    premiere: premiereIcon,
    python: pythonIcon,
    obs: obsIcon,
    react: reactIcon,
    wordpress: wordpressIcon,
  };

  const getTechnologyIcon = (technology) => techIcons[technology] || 'images/placeholder.webp';

  useEffect(() => {
    if (projects.length > 0) {
      setSelectedProject(projects[0]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectProject = useCallback((project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
    // On mobile, scroll to detail area
    if (window.innerWidth < 768 && detailRef.current) {
      setTimeout(() => {
        detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const friendlyNames = {
    webdev: 'Web Dev',
    appdev: 'App Dev',
    graphicdesign: 'Design',
    video: 'Video',
  };
  const getFriendlyCategoryName = (key) => friendlyNames[key] || key;

  const pillColors = {
    webdev: 'bg-blue-500',
    appdev: 'bg-orange-400',
    graphicdesign: 'bg-red-500',
    video: 'bg-emerald-500',
  };
  const getCategoryPillColor = (key) => pillColors[key] || 'bg-gray-200';

  const allSlides = selectedProject ? [
    selectedProject.video ? 'video' : null,
    ...selectedProject.images
  ].filter(Boolean) : [];
  const totalSlides = allSlides.length;

  return (
    <div className="portfolio" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 my-5 md:my-10">
        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8 gap-4">

        {/* Project Detail */}
        <div className="md:col-span-3 order-2 md:order-1" ref={detailRef}>
            {selectedProject ? (
              <div key={selectedProject.id} className="animate-fadeIn">
                <div className="md:px-6 md:py-0 pb-4 bg-slate-100 rounded-2xl mb-4 pt-4 px-4 py-0 md:pt-6 md:pb-4 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl md:text-4xl pb-2 md:pb-0 tracking-tight font-extrabold">
                      {selectedProject.title}
                    </h3>
                    <div className="flex space-x-1">
                      {selectedProject.technologies.map((tech) => (
                        <img key={tech} src={getTechnologyIcon(tech)} alt={tech} className="h-5 w-5 md:h-7 md:w-7 opacity-60" />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {selectedProject.categories.map((category) => (
                      <span key={category} className={`text-xs text-white space-mono font-bold uppercase rounded-full px-3 py-1 ${getCategoryPillColor(category)}`}>
                        {getFriendlyCategoryName(category)}
                      </span>
                    ))}
                  </div>

                  <div className="py-2 md:py-0 md:pt-4 relative">
                    {/* Slide counter */}
                    <div className="absolute top-4 md:top-2 right-2 z-10 bg-black/50 text-white text-xs px-2 py-1 rounded-full space-mono">
                      {currentSlide + 1} / {totalSlides}
                    </div>

                    <Carousel
                      showArrows={true}
                      showThumbs={true}
                      infiniteLoop={true}
                      verticalSwipe={'natural'}
                      swipeable={true}
                      emulateTouch={true}
                      useKeyboardArrows={true}
                      showIndicators={false}
                      dynamicHeight={false}
                      selectedItem={currentSlide}
                      onChange={(index) => setCurrentSlide(index)}
                      renderThumbs={() =>
                        [
                          selectedProject.video && (
                            <img key="video-thumb" src={`https://img.youtube.com/vi/${selectedProject.video.split('v=')[1].split('&')[0]}/0.jpg`} style={{ width: '100px', height: '60px', objectFit: 'cover' }} alt="Video Thumbnail" loading="lazy" />
                          ),
                          ...selectedProject.images.map((image, index) => (
                            <img key={index} src={image} style={{ width: '100px', height: '60px', objectFit: 'cover' }} alt={`Thumbnail ${index}`} loading="lazy" />
                          ))
                        ].filter(Boolean)
                      }
                    >
                      {allSlides.map((slide, index) => {
                        const distance = Math.min(
                          Math.abs(currentSlide - index),
                          totalSlides - Math.abs(currentSlide - index)
                        );
                        const shouldLoad = distance <= 1;
                        if (slide === 'video') {
                          return (
                            <div key="video-slide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              {shouldLoad ? (
                                <iframe
                                  title={selectedProject.title}
                                  src={selectedProject.video.replace("watch?v=", "embed/")}
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  className="video-iframe"
                                ></iframe>
                              ) : (
                                <div style={{ width: '100%', height: '400px', background: '#e2e8f0' }} />
                              )}
                            </div>
                          );
                        }
                        return (
                          <div key={`image-slide-${index}`} style={{ maxHeight: '550px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {shouldLoad ? (
                              <img src={slide} style={{ maxHeight: '550px', maxWidth: '100%', display: 'block' }} alt={`Slide ${index}`} />
                            ) : (
                              <div style={{ width: '100%', height: '400px', background: '#e2e8f0' }} />
                            )}
                          </div>
                        );
                      })}
                    </Carousel>
                  </div>
                </div>

                {/* Combined description + case study */}
                <div className="p-4 md:p-6 bg-slate-100 rounded-2xl mb-4 text-left">
                  <p className="text-sm md:text-base text-gray-700" style={{ whiteSpace: "pre-wrap" }}>
                    {selectedProject.short_description}
                  </p>
                  {selectedProject.case_study && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <h5 className="font-bold text-sm uppercase pb-3 text-blue-950 tracking-wide">Case Study</h5>
                      {[
                        { label: 'Challenge', text: selectedProject.case_study.challenge },
                        { label: 'Solution', text: selectedProject.case_study.solution },
                        { label: 'Outcome', text: selectedProject.case_study.outcome },
                      ].map(({ label, text }) => (
                        <div key={label} className="mb-3 last:mb-0">
                          <p className="text-sm text-gray-700">
                            <span className="font-bold text-blue-950">{label}: </span>
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <h3 className="text-4xl text-left font-bold">
                Select a project to view details
              </h3>
            )}
          </div>

          {/* Project List */}
          <div className="md:col-span-2 relative order-1 md:order-2">
            <div className="overflow-hidden bg-slate-100 rounded-2xl mb-0 md:mb-8">
            <div className="sticky top-0 z-10">
              <div className="projectheader text-3xl font-bold text-right p-4 py-2 mb-4 text-white rounded-bl-lg ml-40 bg-slate-900">
                <h4 className="text-lg md:text-2xl">RECENT PROJECTS</h4>
              </div>
              <div className="flex justify-center space-x-3 mb-6 mt-6">
                {[
                  { key: 'all', label: 'All', activeColor: 'bg-blue-950 border-blue-950 text-white', hoverColor: 'hover:bg-blue-950 hover:text-white' },
                  { key: 'webdev', label: 'Web Dev', activeColor: 'bg-blue-500 border-blue-500 text-white', hoverColor: 'hover:bg-blue-500 hover:border-blue-500 hover:text-white' },
                  { key: 'appdev', label: 'App Dev', activeColor: 'bg-red-500 border-red-500 text-white', hoverColor: 'hover:bg-red-500 hover:border-red-500 hover:text-white' },
                  { key: 'graphicdesign', label: 'Design', activeColor: 'bg-orange-500 border-orange-500 text-white', hoverColor: 'hover:bg-orange-500 hover:border-orange-500 hover:text-white' },
                  { key: 'video', label: 'Video', activeColor: 'bg-emerald-500 border-emerald-500 text-white', hoverColor: 'hover:bg-emerald-500 hover:border-emerald-500 hover:text-white' },
                ].map(({ key, label, activeColor, hoverColor }) => (
                  <button
                    key={key}
                    className={`px-2 md:px-3 py-1 text-xs uppercase border rounded transition duration-300 ${
                      activeCategory === key
                        ? activeColor
                        : `border-blue-950 text-blue-950 ${hoverColor}`
                    }`}
                    onClick={() => setActiveCategory(key)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div
              ref={projectsRef}
              className="overflow-auto cursor-grab relative projects-area"
            >
              <div className="space-y-4 px-4 text-left">
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer transition-all duration-300 transform hover:scale-105 rounded-xl p-2 flex ${
                      selectedProject === project
                        ? 'bg-blue-50 border-blue-400 border-2 shadow-md'
                        : 'bg-white shadow-lg border border-gray-100 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                    onClick={() => handleSelectProject(project)}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-20 h-20 md:w-24 md:h-24 object-cover rounded mr-4"
                      loading="lazy"
                    />
                    <div className="flex flex-col justify-between flex-grow">
                      <h4 className="text-sm md:text-lg font-bold tracking-tight">{project.title}</h4>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {project.categories.map((category) => (
                          <span
                            key={category}
                            className={`text-x-xs md:text-xs text-white space-mono font-bold uppercase rounded-full px-2 md:px-3 py-1 ${getCategoryPillColor(category)}`}
                          >
                            {getFriendlyCategoryName(category)}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-2 mt-2">
                        {project.technologies.map((tech) => (
                          <img key={tech} src={getTechnologyIcon(tech)} alt={tech} className="h-4 w-4 md:h-6 md:w-6" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;

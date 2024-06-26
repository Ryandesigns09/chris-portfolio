import React, { useState, useRef, useEffect } from 'react';

import projects from '../data/projects';
import photoshopIcon from '../images/icons/photoshop.png';
import illustratorIcon from '../images/icons/illustrator.png';
import figmaIcon from '../images/icons/figma.png';
import xcodeIcon from '../images/icons/xcode.png';
import swiftIcon from '../images/icons/swift.png';
import premiereIcon from '../images/icons/premiere.png';
import aftereffectsIcon from '../images/icons/aftereffects.png';
import indesignIcon from '../images/icons/indesign.png';
import pythonIcon from '../images/icons/python.png';
import obsIcon from '../images/icons/obs.png';
import wordpressIcon from '../images/icons/wordpress.png';
import reactIcon from '../images/icons/react.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import css for the carousel
import ModalImage from 'react-modal-image';

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
  
      const onMouseUp = () => {
        setIsDragging(false);
      };
  
      const onMouseLeave = () => {
        setIsDragging(false);
      };
  
      const onMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - ref.current.offsetLeft;
        const y = e.pageY - ref.current.offsetTop;
        const walkX = x - startX;
        const walkY = y - startY;
        ref.current.scrollLeft = scrollLeft - walkX;
        ref.current.scrollTop = scrollTop - walkY;
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const projectsRef = useRef(null);

  const toggleLightbox = () => {
    setLightboxOpen(!lightboxOpen);
  };

  const onChange = (index, item) => {
    console.log(`Carousel changed to slide ${index}`, item);
};

const onClickItem = (index, item) => {
    console.log(`Clicked item ${index}`, item);
};

const onClickThumb = (index, item) => {
    console.log(`Clicked thumbnail ${index}`, item);
};
useDraggableScroll(projectsRef); // Apply draggable scroll to this ref

  const filteredProjects = projects.filter((project) =>
    project.categories.includes(activeCategory) || activeCategory === 'all'
  );

  const getTechnologyIcon = (technology) => {
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
    return techIcons[technology] || 'images/placeholder.png';
  };

  useEffect(() => {
    if (projects.length > 0) {
      setSelectedProject(projects[0]);
    }
  }, [projects]);

  
  
  const getFriendlyCategoryName = (categoryKey) => {
    const friendlyNames = {
      webdev: 'Web Dev',
      appdev: 'App Dev',
      graphicdesign: 'Design',
      video: 'Video',
      // Add other category names as needed
    };
    return friendlyNames[categoryKey] || categoryKey;
  };

  const getCategoryPillColor = (categoryKey) => {
    const pillColors = {
      webdev: 'bg-blue-500',
      appdev: 'bg-orange-400',
      graphicdesign: 'bg-red-500',
      video: 'bg-emerald-500',
      // Add other category colors as needed
    };
    return pillColors[categoryKey] || 'bg-gray-200';
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 my-5 md:my-10">
        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8 gap-4">
        <div className="md:col-span-3 order-2 md:order-1">
            {selectedProject ? (
              <>
                <div className="md:px-6 md:py-0 pb-4 bg-slate-100 rounded-2xl mb-4 pt-4 px-4 py-0 md:pt-6 md:pb-4 text-left ">
                  <h3 className="text-2xl md:text-4xl pb-2 md:pb-4 tracking-tight font-extrabold">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-2"> {/* Added margin-bottom for spacing */}
    {selectedProject.categories.map((category) => (
      <span
        key={category}
        className={`text-xs text-white space-mono font-bold uppercase rounded-full px-3 py-1 ${getCategoryPillColor(
          category
        )}`}
      >
        {getFriendlyCategoryName(category)}
      </span>
    ))}
  </div>
                  <div className="py-2  md:py-0 md:pt-4">
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
      renderThumbs={() => 
        [
          selectedProject.video && (
            <img key="video-thumb" src={`https://img.youtube.com/vi/${selectedProject.video.split('v=')[1].split('&')[0]}/0.jpg`} style={{ width: '100px', height: '60px', objectFit: 'cover' }} alt="Video Thumbnail" />
          ),
          ...selectedProject.images.map((image, index) => (
            <img key={index} src={image} style={{ width: '100px', height: '60px', objectFit: 'cover' }} alt={`Thumbnail ${index}`} />
          ))
        ].filter(Boolean)
      }
    >
      {[
        selectedProject.video && (
          <div key="video-slide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <iframe
              src={selectedProject.video.replace("watch?v=", "embed/")}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
          </div>
        ),
        ...selectedProject.images.map((image, index) => (
          <div key={`image-slide-${index}`} style={{ maxHeight: '550px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={image} style={{ maxHeight: '550px', maxWidth: '100%', display: 'block' }} alt={`Slide ${index}`} />
          </div>
        ))
      ].filter(Boolean)}
    </Carousel>

                  </div>
                </div>
                <div className="p-4 md:p-6 bg-slate-100 rounded-2xl mb-4 text-left ">
                  <h5 className="font-bold text-lg pb-2 text-blue-950 tracking-tight">
                    PROJECT DESCRIPTION
                  </h5>
                  <p className="text-sm md:text-sm text-gray-700" style={{ whiteSpace: "pre-wrap" }}>
                    {selectedProject.short_description}
                </p>          
                </div>
                {selectedProject.case_study && (
                <div className="p-4 md:p-6 bg-slate-100 text-gray-700 rounded-2xl mb-8 text-left">
  <h5 className="font-bold text-lg pb-2 text-blue-950 tracking-tight">CASE STUDY</h5>
  
<>
  <div className="flex mb-4">
    <div className="w-1/4 md:w-1/6">
      <p className="font-bold pr-0">Challenge:</p>
    </div>
    <div className="w-3/4 md:w-5/6">
      <p>{selectedProject.case_study.challenge}</p>
    </div>
  </div>
  <div className="flex mb-4">
  <div className="w-1/4 md:w-1/6">
      <p className="font-bold pr-0">Solution:</p>
    </div>
    <div className="w-3/4 md:w-5/6">
      <p>{selectedProject.case_study.solution}</p>
    </div>
  </div>
  <div className="flex">
  <div className="w-1/4 md:w-1/6">
      <p className="font-bold pr-0">Outcome:</p>
    </div>
    <div className="w-3/4 md:w-5/6">
      <p>{selectedProject.case_study.outcome}</p>
    </div>
  </div>
</>

</div>
)}
              </>
            ) : (
              <h3 className="text-4xl text-left font-bold">
                Select a project to view details
              </h3>
            )}
          </div>

          <div className="md:col-span-2 relative order-1 md:order-2">
            <div className=" overflow-hidden bg-slate-100 rounded-2xl mb-0 md:mb-8">
            <div className="sticky top-0 z-10">
              <div className="projectheader text-3xl font-bold text-right p-4 py-2 mb-4 text-white rounded-bl-lg ml-40 bg-slate-900">
                <h4 className="text-lg md:text-2xl">RECENT PROJECTS</h4>
              </div>
              <div className="flex justify-center space-x-3 mb-6 mt-6">
                <button
                  className="px-2 md:px-3 py-1 text-xs uppercase border border-blue-950 text-blue-950 rounded hover:bg-blue-950 hover:text-white transition duration-300"
                  onClick={() => setActiveCategory('all')}
                >
                  All
                </button>
                <button
                  className="px-2 md:px-3 py-1 text-xs uppercase border border-blue-950 text-blue-950 rounded hover:bg-blue-500 hover:border-blue-500 hover:text-white transition duration-300"
                  onClick={() => setActiveCategory('webdev')}
                >
                  Web Dev
                </button>
                <button
                  className="px-2 md:px-3 py-1 text-xs uppercase border border-blue-950 text-blue-950 rounded hover:bg-red-500 hover:border-red-500 hover:text-white transition duration-300"
                  onClick={() => setActiveCategory('appdev')}
                >
                  App Dev
                </button>
                <button
                  className="px-2 md:px-3 py-1 text-xs uppercase border border-blue-950 text-blue-950 rounded hover:bg-orange-500 hover:border-orange-500 hover:text-white transition duration-300"
                  onClick={() => setActiveCategory('graphicdesign')}
                >
                  Design
                </button>
                <button
                  className="px-2 md:px-3 py-1 text-xs uppercase border border-blue-950 text-blue-950 rounded hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition duration-300"
                  onClick={() => setActiveCategory('video')}
                >
                  Video
                </button>
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
                    className={`cursor-pointer transition duration-300 transform hover:scale-105 hover:bg-slate-100 rounded-xl p-2 flex ${
                      selectedProject === project
                        ? 'bg-slate-200'
                        : 'bg-white'
                    } shadow-lg border border-gray-100 hover:border-slate-300`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-20 h-20 md:w-24 md:h-24 object-cover rounded mr-4"
                    />
                    <div className="flex flex-col justify-between flex-grow">
                      <h4 className="text-sm md:text-lg font-bold tracking-tight">{project.title}</h4>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {project.categories.map((category) => (
                          <span
                            key={category}
                            className={`text-x-xs md:text-xs text-white space-mono font-bold uppercase rounded-full px-2 md:px-3 py-1 ${getCategoryPillColor(
                              category
                            )}`}
                          >
                            {getFriendlyCategoryName(category)}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-2 mt-2">
                        {project.technologies.map((tech) => (
                          <img
                            key={tech}
                            src={getTechnologyIcon(tech)}
                            alt={tech}
                            className="h-4 w-4 md:h-6 md:w-6"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
            {/* Add gradient effect here */}
            
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;

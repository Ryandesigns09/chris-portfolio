import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFileDownload } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleWorkWithMeClick = () => {
        navigator.clipboard.writeText('chris@ryandesigns.ca')
            .then(() => {
                setShowTooltip(true);
                setTimeout(() => setShowTooltip(false), 2000); // Tooltip will disappear after 2 seconds
            })
            .catch(err => console.error('Failed to copy email to clipboard', err));
    };

    return (
        <div className="hero relative pt-10 pb-28 md:pb-0 md:pt-20 z-0" id="hero">
            <div className="container mx-auto flex justify-between items-center px-4 max-w-7xl z-10">
                <div className="text-container text-center md:text-left w-full md:w-1/2 mb-30 md:mb-32 relative z-10">
                    <div className="pb-8">
                        <span className="header-text text-5xl md:text-8xl  tracking-tight">Hey there,<br></br> I'm <span className="chris italic font-bold tracking-normal">Chris</span></span>
                    </div>
                    <p className="sub-text text-lg md:text-2xl">This is a collection of my app, web, <br className="hidden md:block"></br>and creative design work.</p>
                    <div className="mt-8">
                    

                        <button onClick={handleWorkWithMeClick} className="text-white text-sm md:text-lg py-2 space px-3 md:px-4 border font-bold border-white hover:scale-105 hover:bg-white hover:text-blue-900 rounded-full transition duration-500">
                            <FontAwesomeIcon icon={faBriefcase} className="mr-0 md:mr-2" /> Work with me
                        </button>
                        <a href="/path-to-your-cv.pdf" target="_blank" rel="noopener noreferrer" className="ml-3 md:ml-4 text-blue-900 text-sm md:text-lg space py-2 px-3 md:px-4 border font-bold bg-white border-white rounded-full hover:bg-transparent hover:text-white hover:border-white  hover:scale-110 transition duration-500">
                            <FontAwesomeIcon icon={faFileDownload} className="mr-0 md:mr-2" /> Download CV
                        </a>
                    </div>
                    
                    {showTooltip && <span className="absolute -mb-10 text-xs le bg-black text-white px-1 ml-0 rounded-b shadow-lg toolie">Copied email to clipboard</span>}
                </div>
                <div className="image-container hidden md:block w-full md:w-1/2 text-right align-right z-10">
                    <img src="images/me.png" alt="Chris" className="w-3/4 right float-right" />
                </div>
            </div>
            <div className="animated-bg bottom-left"></div>
            <div className="animated-bg-up top-right"></div>
            <div className="background absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-tl from-indigo-800 via-blue-800 to-blue-600"></div>
        </div>
    );
}

export default HeroSection;

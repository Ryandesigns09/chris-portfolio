import React from 'react';

const HeroSection = () => {
    return (
        <div className="hero relative pt-10 pb-0 md:pt-24 z-0" id="hero">
            <div className="container mx-auto flex justify-between items-center px-4 max-w-7xl z-10">
                <div className="text-container text-center md:text-left w-full md:w-1/2 mb-24 md:mb-32 relative z-10">
                    <div className="pb-8">
                        <span className="header-text text-5xl md:text-8xl font-bold">Hey there,<br></br> I'm <span className="chris">Chris</span></span>
                    </div>
                    <p className="sub-text text-xl md:text-2xl">This is a collection of my app, web, <br className="hidden md:block"></br>and creative design work.</p>
                </div>
                <div className="image-container hidden md:block w-full md:w-1/2 text-right align-right z-10">
                    <img src="images/me.png" alt="Chris" className="w-3/4 right float-right" />
                </div>
            </div>
            <div className="animated-bg bottom-left"></div>
            <div className="animated-bg-up top-right"></div>
            <div className="background absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-tl from-indigo-900 via-blue-800 to-blue-700"></div>
        </div>
        
    );
}

export default HeroSection;

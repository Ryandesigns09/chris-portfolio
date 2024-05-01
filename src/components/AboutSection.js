import React from 'react';

const AboutMe = () => {
  // Example data for services
  const services = [
    { 
      icon: "images/graphic.svg", // Path to custom SVG icon
      title: "Graphic Design",
      description: "Brand identity, print materials, digital content",
      years: 20
    },
    { 
      icon: "images/web.svg", // Path to custom SVG icon
      title: "Web Development",
      description: "Responsive design, e-commerce, CMS, full stack",
      years: 10
    },
    { 
      icon: "images/ui.svg", // Path to custom SVG icon
      title: "UI/UX",
      description: "User interface design, user experience optimization, prototyping, testing",
      years: 8
    },
    { 
      icon: "images/video.svg", // Path to custom SVG icon
      title: "Video Editing",
      description: "Video production, post-production, animation, motion graphics",
      years: 5
    }
  ];

  return (
    <section id="about" className="bg-white pt-4 md:py-10">
      <div className="container mx-auto pt-10 px-4 md:px-6 lg:px-36">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3 order-1 md:order-1 bg-slate-100 p-6 rounded-xl">
          <h3 className="text-xl md:text-2xl text-left font-bold mb-4">About Me</h3>
            <p className="text-gray-700 text-sm md:text-base mb-0 text-left">
              With over two decades of expertise in design and web development, my enthusiasm for creativity fuels my work across various fields. My journey spans from sports design, stream production & everywhere in between. When bringing concepts to life I utilize tools such as Photoshop, InDesign, Figma, Illustrator, Procreate, After Effects, Premiere & Character Creator.
              <br /><br />
              With all things web development my tech stack includes the latest technologies, such as React, Node.JS, Python, Tailwind, Bootstrap, along with platforms such as Strapi, Shopify and Wordpress. My goal is to create websites and digital tools that are not only visually appealing but also provide a flawless user experience. I specialize in responsive design, theme development and creating extensive bots for platforms like Discord, Telegram and X.
              <br /><br />
              I am always committed to staying at the forefront of my field, continuously exploring new technologies, trends and techniques to add to my skillset. With every job my goal is always to get a "Wow, this is amazing!" from clients.
            </p>
          </div>
          <div className="md:col-span-1 order-2 md:order-2 bg-slate-100 px-6 pt-6 pb-2 mb-8 md:mb-0 rounded-xl text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Services Offered</h3>
            {services.map(service => (
              <div key={service.title} className="mb-4 flex items-center hover:scale-105 transition-transform grayscale hover:grayscale-0 duration-300 cursor-pointer">
                <img src={service.icon} alt={service.title} className="w-12 h-12 mr-4 filter  group-hover:grayscale-0" />
                <div className="flex-grow">
                  <div className="font-semibold service">{service.title}</div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

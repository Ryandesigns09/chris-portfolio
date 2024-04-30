import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="bg-white py-12">
      <div className="container mx-auto flex items-center px-4 md:px-12">
        <div className="relative">
          {/* Adjust the size of the image as necessary */}
          <img src="images/me.png" alt="Me" className="w-64 h-64 rounded-full -ml-20 md:-ml-32 lg:-ml-48" />
        </div>
        <div className="bg-gray-200 p-8 rounded-lg shadow-lg ml-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 text-lg">
            With two decades of expertise in design and web development, my enthusiasm for creativity fuels my work across various fields...
            {/* Your text goes here */}
          </p>
          {/* Add more content here */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

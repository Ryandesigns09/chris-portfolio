import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="bg-white pt-10 md:pt-16">
      <div className="container mx-auto md:flex items-center px-4 md:px-12 md:ml-64">
        <div className="w-full md:w-4/6 bg-slate-100 p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-left mb-4">About Me</h2>
          <p className="text-gray-700 text-base mb-4 text-left md:pr-16">
          With over two decades of expertise in design and web development, my enthusiasm for creativity fuels my work across various fields. My journey spans from sports design, stream production & everywhere in between, where I breathe life into visual concepts using tools such as Photoshop, InDesign, Figma, and Illustrator.
<br></br><br></br>
In the realm of web development, I excel in employing the latest technologies, including WordPress, Shopify, CSS, React, Node.js, Python, Tailwind, and Bootstrap. My focus is on creating websites and digital tools that are not only visually appealing but also provide a flawless user experience. I specialize in theme customization, crafting responsive layouts, and developing bots for platforms like Discord and Telegram, always aiming to get a 
"Wow, this is amazing!" from users.
<br></br><br></br>
I am committed to staying at the forefront of my field, continuously exploring new trends and techniques to enhance my craft.
          
          </p>
          
        </div>
        <div className="w-full md:w-2/6 hidden md:flex justify-end meimage">
        <img src="images/me.png" alt="Me" className="" />
                </div>
      </div>
    </section>
  );
};

export default AboutMe;

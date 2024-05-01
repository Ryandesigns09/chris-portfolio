import React, { useState } from 'react';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="contact text-white py-6 px-4 md:p-12 text-center" id="contact">
      <h3 className="text-xl md:text-4xl font-bold mb-4">Interested in working together?</h3>
      <h5 className="mb-4 md:mb-8 text-sm md:text-xl">Let's connect and discuss how we can bring your ideas to life.</h5>
      <div className="flex justify-center items-center">
        <a href="https://x.com/ryguyx9" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img src="images/twitter.svg" alt="Twitter" className="h-8 w-8 fill-current text-blue-500 hover:text-blue-700 transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/ryandesigns9/" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img src="images/linkedin.svg" alt="LinkedIn" className="h-8 w-8 fill-current text-blue-500 hover:text-blue-700 transition duration-300" />
        </a>
        <div className="relative inline-block">
          <button onClick={() => copyToClipboard('chris@ryandesigns.ca')} className="focus:outline-none">
            <img src="images/mail.svg" alt="Mail" className="h-8 w-8 fill-current text-blue-500 hover:text-blue-700 transition duration-300" />
          </button>
          {copied && <span className="absolute top-10 right-1 bg-black text-white text-xs px-2 w-32 py-1 rounded-full">Copied email to clipboard!</span>}
        </div>
      </div>
    </div>
  );
}

export default ContactSection;

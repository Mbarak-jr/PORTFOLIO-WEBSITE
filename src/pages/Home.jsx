import React from 'react';

const Home = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col md:flex-row items-center justify-center p-8">
      {/* Left Side - Introduction */}
      <div className="md:w-1/2 md:pr-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Mohammed Mbarak Hassan
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          Passionate Data Analyst, Software Developer, and Cybersecurity Analyst dedicated to building secure and scalable applications that drive innovation.
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-4 mb-8">
          <a 
            href="https://www.linkedin.com/in/mohammed-hassan-681a21230/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a 
            href="https://github.com/Mbarak-jr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
          <a 
            href="https://twitter.com/kenmbarak" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
            </svg>
          </a>
        </div>
        
        {/* Call to Action */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a 
            href="/interests" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white font-semibold"
          >
            Learn More
          </a>
          <a 
            href="/projects" 
            className="px-6 py-3 bg-blue-600 hover:bg-white hover:text-black rounded-lg transition-colors text-white font-semibold"
          >
            View Projects
          </a>
        </div>
      </div>
      
      {/* Right Side - Visual Element */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          {/* Tech-themed Image */}
          <div className="relative w-full h-full rounded-full overflow-hidden">
            {/* Background Circle */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 shadow-2xl z-0"></div>
            
            {/* Tech Collage Image */}
            <div className="w-full h-full relative bg-gradient-to-r from-indigo-900 via-blue-800 to-purple-900 z-10 flex items-center justify-center">
              {/* Tech Icons Floating in Circle */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Code Symbol */}
                <div className="absolute top-1/4 left-1/4 text-5xl text-blue-300 opacity-80 animate-pulse">&lt;/&gt;</div>
                
                {/* Data Flow Lines */}
                <div className="absolute top-1/2 left-1/3 w-1/2 h-px bg-gradient-to-r from-green-400 to-transparent"></div>
                <div className="absolute top-2/3 right-1/4 w-1/3 h-px bg-gradient-to-l from-purple-400 to-transparent"></div>
                
                {/* Circuit Pattern */}
                <div className="absolute inset-0 opacity-30" 
                     style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '15px 15px'}}></div>
                
                {/* Binary Code */}
                <div className="absolute bottom-1/4 right-1/4 text-xs tracking-widest text-green-400 opacity-70 font-mono">
                  10110101<br/>01001011<br/>11001010
                </div>
                
                {/* Security Shield */}
                <div className="absolute top-1/3 right-1/3">
                  <svg className="w-12 h-12 text-blue-400 opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                  </svg>
                </div>
                
                {/* Data Analytics Icon */}
                <div className="absolute bottom-1/3 left-1/3">
                  <svg className="w-10 h-10 text-purple-400 opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
              </div>
              
              {/* Central Tech Glow */}
              <div className="relative z-20 w-24 h-24 bg-blue-500 bg-opacity-30 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-16 h-16 bg-blue-400 bg-opacity-50 rounded-full flex items-center justify-center">
                  <div className="text-white text-4xl opacity-80">⚡</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Animated Skill Badges - All using animate-bounce now */}
          <div className="absolute -top-10 -right-10 bg-purple-600 text-white px-3 py-1 rounded-full animate-bounce z-30">
            Data Analysis
          </div>
          <div className="absolute -bottom-10 -left-10 bg-green-600 text-white px-3 py-1 rounded-full animate-bounce z-30">
            Cybersecurity
          </div>
          <div className="absolute top-0 -left-16 bg-red-600 text-white px-3 py-1 rounded-full animate-bounce z-30">
            Software Dev
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
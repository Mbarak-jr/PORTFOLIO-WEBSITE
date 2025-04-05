import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // State for image interaction
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  // Handle mouse down event to start dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  // Handle touch start event for mobile devices
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setStartPosition({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    });
  };

  // Handle mouse move event while dragging
  const handleMouseMove = (e) => {
    if (isDragging && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;
      
      const newX = e.clientX - startPosition.x;
      const newY = e.clientY - startPosition.y;
      
      // Calculate limits to keep image within view
      const maxX = (containerWidth * scale - containerWidth) / 2;
      const maxY = (containerHeight * scale - containerHeight) / 2;
      
      // Apply constraints
      const constrainedX = Math.max(-maxX, Math.min(maxX, newX));
      const constrainedY = Math.max(-maxY, Math.min(maxY, newY));
      
      setPosition({
        x: constrainedX,
        y: constrainedY
      });
    }
  };

  // Handle touch move event for mobile devices
  const handleTouchMove = (e) => {
    if (isDragging && containerRef.current) {
      const touch = e.touches[0];
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;
      
      const newX = touch.clientX - startPosition.x;
      const newY = touch.clientY - startPosition.y;
      
      // Calculate limits to keep image within view
      const maxX = (containerWidth * scale - containerWidth) / 2;
      const maxY = (containerHeight * scale - containerHeight) / 2;
      
      // Apply constraints
      const constrainedX = Math.max(-maxX, Math.min(maxX, newX));
      const constrainedY = Math.max(-maxY, Math.min(maxY, newY));
      
      setPosition({
        x: constrainedX,
        y: constrainedY
      });
    }
  };

  // Handle mouse up event to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle touch end event for mobile devices
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Handle wheel event for zooming
  const handleWheel = (e) => {
    e.preventDefault();
    const zoomSensitivity = 0.001;
    const delta = -e.deltaY * zoomSensitivity;
    const newScale = Math.max(1, Math.min(3, scale + delta)); // Limit scale between 1 and 3
    setScale(newScale);
  };

  // Handle double click to reset zoom and position
  const handleDoubleClick = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Add event listeners for mouse and touch events
  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Left Side - Introduction */}
      <div className="w-full md:w-1/2 md:pr-8 lg:pr-12 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Mohammed Mbarak Hassan
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-300">
           With a strong blend of curiosity and creativity, I thrive at the intersection of data, code, and security. I'm a passionate Data Analyst, Software Developer, and Cybersecurity Analyst dedicated to building secure, scalable, and impactful applications that drive innovation and create real-world solutions.
        </p>

        
        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-4 mb-8">
          <a 
            href="https://www.linkedin.com/in/mohammed-hassan-681a21230/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a 
            href="https://github.com/Mbarak-jr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
          <a 
            href="https://twitter.com/kenmbarak" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="Twitter Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
            </svg>
          </a>
        </div>
        
        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
          <Link 
            to="/interests" 
            className="px-6 py-3 bg-blue-600 hover:bg-white hover:text-black rounded-lg transition-colors duration-300 text-white font-semibold transform hover:scale-105"
          >
            Learn More
          </Link>
          <Link 
            to="/projects" 
            className="px-6 py-3 bg-blue-600 hover:bg-white hover:text-black rounded-lg transition-colors duration-300 text-white font-semibold transform hover:scale-105"
          >
            View Projects
          </Link>
        </div>
      </div>
      
      {/* Right Side - Interactive Profile Image in Circle */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
          {/* Profile Circle Container */}
          <div 
            ref={containerRef}
            className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-xl cursor-pointer"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onWheel={handleWheel}
            onDoubleClick={handleDoubleClick}
          >
            {/* Profile Image - Direct reference to image in public folder */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <img 
                ref={imageRef}
                src="/img/IMG-20221223-WA0085.jpg" 
                alt="Mohammed Mbarak Hassan" 
                className="w-full h-full object-contain transition-transform duration-200"
                style={{ 
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  transformOrigin: 'center'
                }}
                draggable="false"
              />
            </div>
            
            {/* Subtle Tech Overlay */}
            <div className="absolute inset-0 bg-blue-900 bg-opacity-20 mix-blend-overlay pointer-events-none">
              {/* Circuit Pattern */}
              <div className="absolute inset-0 opacity-20" 
                   style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '15px 15px'}}></div>
            </div>
          </div>
          
          {/* Animated Skill Badges */}
          <div className="absolute -top-8 -right-8 sm:-top-10 sm:-right-10 bg-purple-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full transform hover:scale-110 transition-all duration-700 animate-pulse z-30 text-xs sm:text-sm">
            Data Analysis
          </div>
          <div className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 bg-green-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full transform hover:scale-110 transition-all duration-1000 z-30 text-xs sm:text-sm" 
               style={{animation: 'bounce 3s infinite 0.5s'}}>
            Cybersecurity
          </div>
          <div className="absolute top-0 -left-12 sm:top-0 sm:-left-16 bg-red-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full transform hover:scale-110 transition-all duration-700 z-30 text-xs sm:text-sm"
               style={{animation: 'bounce 3s infinite 1s'}}>
            Software Dev
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6">
        <Link
          to="/"
          className="text-xl sm:text-2xl font-bold hover:text-blue-400 transition-all duration-300"
        >
          My Portfolio
        </Link>

        {/* Hamburger menu button for mobile */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex space-x-6">
          <li><Link className="hover:text-blue-400 transition-colors" to="/">Home</Link></li>
          <li><Link className="hover:text-blue-400 transition-colors" to="/about">About</Link></li>
          <li><Link className="hover:text-blue-400 transition-colors" to="/education">Education</Link></li>
          <li><Link className="hover:text-blue-400 transition-colors" to="/interests">Interests</Link></li>
          <li><Link className="hover:text-blue-400 transition-colors" to="/projects">Projects</Link></li>
          <li><Link className="hover:text-blue-400 transition-colors" to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile menu */}
        <div className={`w-full lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col mt-4 space-y-2 w-full">
            <li><Link className="block py-2 hover:text-blue-400 transition-colors" to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link className="block py-2 hover:text-blue-400 transition-colors" to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link className="block py-2 hover:text-blue-400 transition-colors" to="/education" onClick={toggleMenu}>Education</Link></li>
            <li><Link className="block py-2 hover:text-blue-400 transition-colors" to="/interests" onClick={toggleMenu}>Interests</Link></li>
            <li><Link className="block py-2 hover:text-blue-400 transition-colors" to="/projects" onClick={toggleMenu}>Projects</Link></li>
            <li><Link className="block py-2 hover:text-blue-400 transition-colors" to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-bold hover:text-blue-400 transition-all duration-300">
          My Portfolio
        </Link>

        <ul className="flex space-x-6">
          <li><Link className="hover:text-blue-400" to="/">Home</Link></li>
          <li><Link className="hover:text-blue-400" to="/about">About</Link></li>
          <li><Link className="hover:text-blue-400" to="/education">Education</Link></li>
          <li><Link className="hover:text-blue-400" to="/interests">Interests</Link></li>
          <li><Link className="hover:text-blue-400" to="/projects">Projects</Link></li>
          <li><Link className="hover:text-blue-400" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

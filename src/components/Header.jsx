import { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-blue-600 shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <RouterLink to="/" className="flex items-center">
          <span className="ml-2 text-2xl font-bold text-white tracking-wide drop-shadow-md">Brew</span>
        </RouterLink>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <RouterLink 
            to="/drinks" 
            className={({ isActive }) => `text-white hover:text-yellow-300 font-medium capitalize ${isActive ? 'text-yellow-300' : ''}`}
          >
            Drinks
          </RouterLink>
          <RouterLink 
            to="/desserts" 
            className={({ isActive }) => `text-white hover:text-yellow-300 font-medium capitalize ${isActive ? 'text-yellow-300' : ''}`}
          >
            Desserts
          </RouterLink>
          <RouterLink 
            to="/juices" 
            className={({ isActive }) => `text-white hover:text-yellow-300 font-medium capitalize ${isActive ? 'text-yellow-300' : ''}`}
          >
            Fresh Juices
          </RouterLink>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      <div className={`md:hidden bg-blue-500 px-6 py-4 space-y-4 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <RouterLink 
          onClick={() => setIsOpen(false)} 
          to="/drinks" 
          className={({ isActive }) => `block text-white hover:text-yellow-300 font-medium capitalize ${isActive ? 'text-yellow-300' : ''}`}
        >
          Drinks
        </RouterLink>
        <RouterLink 
          onClick={() => setIsOpen(false)} 
          to="/desserts" 
          className={({ isActive }) => `block text-white hover:text-yellow-300 font-medium capitalize ${isActive ? 'text-yellow-300' : ''}`}
        >
          Desserts
        </RouterLink>
        <RouterLink 
          onClick={() => setIsOpen(false)} 
          to="/juices" 
          className={({ isActive }) => `block text-white hover:text-yellow-300 font-medium capitalize ${isActive ? 'text-yellow-300' : ''}`}
        >
          Fresh Juices
        </RouterLink>
      </div>
    </nav>
  );
};

export default Navbar;
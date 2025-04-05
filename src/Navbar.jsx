import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" text-black shadow-lg p-4 sticky top-0 bg-white z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <NavLink to="/" className="hover:text-gray-300 transition duration-300">
            Hair Salon
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["services", "appointments", "about", "contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              className={({ isActive }) =>
                `transition duration-300 px-3 py-1 rounded ${isActive ? "border border-black font-bold" : "hover:text-orange-500"}`
              }
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
          <NavLink to="/auth" className="btn btn-warning">
            Register
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden flex items-center space-x-2" onClick={toggleMenu}>
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 space-y-4 p-4 absolute top-full w-full z-50 flex flex-col">
          {["services", "appointments", "about", "contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              className={({ isActive }) =>
                `block transition duration-300 px-3 py-1 rounded ${isActive ? "border border-white font-bold" : "hover:text-gray-300"}`
              }
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
          {/* Mobile Register Button */}
          <div className="flex flex-col space-y-2">
            <NavLink to="/auth" className="btn btn-warning w-full text-center font-bold">
              Register
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

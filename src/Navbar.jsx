import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sky-400/5 relative">
      {/* Background shapes */}
      <div className="absolute left-0 top-0 -z-[1]">
        <img src="/Ovalleft.png" className="h-[200px]" alt="left-shape" />
      </div>
      <div className="absolute right-2 top-0 -z-[1]">
        <img src="/Oval.png" className="h-[400px] w-[500px]" alt="right-shape" />
      </div>

      {/* Navbar content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center h-20 relative right-40">
        {/* Logo */}
        <div className="text-3xl font-bold ">
          <span className="text-blue-600">Medi</span>
          <span className="text-orange-500">Care+</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center relative left-45">
          <a href="#home" className="text-blue-600 hover:font-bold hover:text-blue-800 transition">
            Home
          </a>
          <a href="#about" className="text-blue-600 hover:font-bold hover:text-blue-800 transition">
            About
          </a>
          <a href="#service" className="text-blue-600 hover:font-bold hover:text-blue-800 transition">
            Service
          </a>
          <a href="#news" className="text-blue-600 hover:font-bold hover:text-blue-800 transition">
            News
          </a>
          <a
            href="#contact"
            className="bg-sky-600 text-white font-bold px-6 py-2 rounded-full hover:bg-sky-700 transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-blue-600 text-3xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full flex flex-col items-center space-y-6 py-6 z-50">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-blue-600 hover:font-bold hover:text-blue-800 transition">
            Home
          </a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-blue-600 hover:font-bold hover:text-blue-800 transition">
            About
          </a>
          <a href="#service" onClick={() => setIsOpen(false)} className="text-blue-600 hover:font-bold hover:text-blue-800 transition">
            Service
          </a>
          <a href="#news" onClick={() => setIsOpen(false)} className="text-blue-600 hover:font-bold hover:text-blue-800 transition">
            News
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-sky-600 text-white font-bold px-6 py-2 rounded-full hover:bg-sky-700 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

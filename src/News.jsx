import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

export default function Newsletter() {
  return (
    <section className="flex flex-col min-h-screen bg-sky-400/5 relative">
      {/* Decorative background */}
      <div className="absolute right-10 top-[200px] -z-[2] opacity-30">
        <img
          src="/Oval-Copy-3.png"
          className="h-[80px] w-[80px] md:h-[100px] md:w-[100px]"
          alt="decorative shape"
        />
      </div>

      {/* Newsletter Section */}
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 sm:p-14 md:p-20 rounded-3xl shadow-2xl w-full sm:w-[95%] md:w-3/4 lg:w-2/3 text-center">
          {/* Heading */}
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Newsletter
          </h2>
          <p className="text-white/80 text-base sm:text-lg md:text-xl mb-8">
            We have a wide experience in experience design and strategy.
          </p>

          {/* Input + Button */}
          <form className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="  h-18  w-40 flex-1 px-4 sm:px-6 py-3 sm:py-4 text-gray-700 text-base sm:text-lg outline-none "
            />
           <button type="submit" className="bg-blue-600 hover:bg-blue-700 mr-5 text-white px-8 py-4 rounded-full font-semibold transition-all" > Send Now </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-blue-600">Medi</span>
            <span className="text-orange-500">Care+</span>
          </div>

          {/* Menu */}
          <ul className="flex flex-wrap justify-center gap-6 text-gray-600 font-medium text-base sm:text-lg">
            <li className="text-blue-400 hover:text-blue-800 cursor-pointer">
              Home
            </li>
            <li className="text-blue-400 hover:text-blue-800 cursor-pointer">
              About
            </li>
            <li className="text-blue-400 hover:text-blue-800 cursor-pointer">
              Services
            </li>
            <li className="text-blue-400 hover:text-blue-800 cursor-pointer">
              News
            </li>
          </ul>
        </div>

        {/* Social + Copyright */}
        <div className="bg-sky-400/5 container mx-auto flex flex-col md:flex-row items-center justify-between px-6 mt-6 pt-6 gap-4 text-center md:text-left">
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-gray-600 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Google" className="hover:text-red-500">
              <FaGoogle />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-500">
              <FaTwitter />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2025 MediCare+. All Rights Reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}

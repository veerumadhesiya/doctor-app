import React from "react";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center bg-sky-400/5 px-6 md:px-20 py-12">
      
      {/* Left content */}
      <div className="md:w-1/2 space-y-6 text-center mb-15 md:text-left">
        <h2 className="font-bold text-xl md:text-2xl">
          Welcome to MediCare+ Clinic
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#003B79]">
          Best Specialists
        </h1>
        <p className="text-sm sm:text-base leading-relaxed text-gray-600">
          We are on the leading edge of cancer care. Providing the full <br className="hidden md:block"/>
          continuum of cancer treatments and supportive care services in a <br className="hidden md:block"/>
          single convenient location.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button className="bg-white text-[#007FF4] font-bold px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg shadow-[#007DF2]/20 hover:bg-[#007FF4] hover:text-white transition-colors duration-300">
            Make an Appointment
          </button>
          <button className="bg-white text-[#007FF4] font-bold px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg shadow-[#007DF2]/20 hover:bg-[#007FF4] hover:text-white transition-colors duration-300">
            Departments
          </button>
        </div>
      </div>

      {/* Right image */}
      <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
        <img
          src="/home.png"
          alt="home"
          className="h-[300px] sm:h-[400px] md:h-[500px] object-contain"
        />
      </div>
    </section>
  );
}

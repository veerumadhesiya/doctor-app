
import "./About.css";
export default function About() {
  return (
    <section className="bg-gray-100 py-30">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Clinic With Innovative
            </h2>
            <p className="text-gray-600 mb-8">
             We provide the most full medical services, so every person could <br></br> heave the oppurtunity to receive qualitative medical help.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>

          {/* Right Side */}
          <div className="relative w-full max-w-xl mx-auto mt-20">
  {/* Top Card */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-40 transform rotate-3 transition duration-300 hover:rotate-6">
      <img src="/doctor-car-card.png" alt="car" className="w-full" />
      <h3 className="text-center font-semibold py-2">Doctor Com</h3>
    </div>
  </div>

  {/* Bottom Cards */}
  <div className="grid grid-cols-2 gap-10 mt-40">
    {/* Bottom Left */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-40 transform -rotate-3 transition duration-300 hover:rotate-0">
      <img src="/doctor-woman-card.png" alt="woman" className="w-full" />
      <h3 className="text-center font-semibold py-2">Doctor Com</h3>
    </div>

    {/* Bottom Right */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-40 transform rotate-3 transition duration-300 hover:rotate-0">
      <img src="/doctor-man-card.png" alt="man" className="w-full" />
      <h3 className="text-center font-semibold py-2">Doctor Com</h3>
    </div>
  </div>
</div>
              
              </div>
        </div>
    
    </section>

  );
}

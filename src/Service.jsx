
import "./About.css";
import { FaTooth, FaLungs, FaBrain, FaChild } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";





export default function Services() {
  const services = [
    { id: 1, title: "Dental Care", icon: <FaTooth size={80} /> },
    { id: 2, title: "Pulmonary", icon: <FaLungs size={80} /> },
    { id: 3, title: "Neurological", icon: <FaBrain size={80} /> },
    { id: 4, title: "Pediatrics", icon: <FaChild size={80} /> },
  ];
  
 
  return (
    <section className=" ">
      <div className=" bg-sky-400/6 max-w-9xl mx-auto px-2 ">
        <h1 className="text-5xl text-[#003B79] font-bold text-center mb-10">Our Services</h1>
        <p className="text-center text-gray-600 mb-12">
          We provide the most full medical services, so every person could<br></br>
          receive qualitative medical help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-12 pl-30   " >
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:bg-blue-500 hover:text-white cursor-pointer"
            >

              <div className="mb-4 text-blue-500 group-hover:text-white text-4xl">
                {service.icon}
              </div>


              <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                {service.title}
              </h3>


              <a
                href="#"
                className="opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300 text-center"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

      </div>
      {/* =========clinic section======== */}
      <div className=" bg-white px-40 mx-auto ml-40 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl text-[#003B79] md:text-4xl font-bold  mb-6">
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
          <div className=" relative w-full max-w-xl mx-auto ml-50 mt-20">
            {/* Top Card */}
            <div className=" card1 absolute right-40">
              <div className="imgbox">
                <img src="/doctor-woman-card.png" alt="car" className="w-full" />
                <h3 className="cardbox pt-8 font-bold text-[#002348] ">Qualified Doctors</h3>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="card1 abolute right-40 top-25">
              {/* Bottom Left */}
              <div className="imgbox">
                <img src="/doctor-car-card.png" alt="woman" className="w-full" />
                <h3 className=" cardbox pt-8  font-bold text-[#002348]">24 Hours Service</h3>
              </div>
            </div>

              {/* Bottom Right */}
            <div className="card1  absolute bottom-40 left-20">    
              
              <div className="imgbox">
                <img src="/doctor-man-card.png" alt="man" className="w-full" />
                <h3 className="cardbox pt-8  font-bold text-[#002348] ">Emergency Care</h3>
              </div>
               </div>
          </div>

        </div>
      </div>
      {/*======== best specilist ==========*/}
      <div className=" bg-sky-400/5  w-100% p-20   ">
       <div className="absolute right-40">
        <img src="./Oval-Copy-2.png" className="-z-2 h-50" />
      </div>
          

        <div className="">
          <h2 className=" text-[#003B79] text-4xl text-center font-bold  mb-6 mt-5 mx-auto">
            We Have The Best Speciliast
          </h2>
          <p className="text-gray-600 ml-135 mb-8 ">
            We have a wide experience in experience design and strategy,<br /><span className="ml-25">with locally-rooted knowledge</span>       </p>
        </div>

        {/* card  */}
        <div className="flex justify-around  ">

          <div class="card">
            <img src="/Bitmap.png" alt="" />
            <div class="container">
              <h4 className="tex-sm"><b>Dr. Awaatif Al</b></h4>
              <h5>Dental Care</h5>
            </div>
          </div>
          {/* card2 */}
          <div class="card">
            <img src="/Bitmap.png" alt="" />
            <div class="container">
              <h4 className="text-sm"><b>Dr. Filipa Gaspa</b></h4>
              <p>Cardiologyr</p>
            </div>
          </div>
          {/* card3 */}
          <div class="card">
            <img src="/Bitmap.png" alt="" />
            <div class="container">
              <h4 className="text-sm"><b>Dr. Sukhmeet Gorae</b></h4>
              <p>Neurologica</p>
            </div>
          </div>
          {/* card4 */}
          <div class="card ">
            <img src="/Bitmap.png" alt="" />
            <div class="container">
              <h4 className="text-sm"><b>Dr. Siri Jakobsson</b></h4>
              <p>Prediatrics</p>
            </div>
          </div>

        </div>

      </div>

          </section>
  );

}
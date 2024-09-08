import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  return (
    <div className="container mx-auto p-5 my-20" id="testimonials">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-primary tracking-wide">
          CLIENT TESTIMONIALS
        </h1>
        <h2 className="text-5xl font-bold mt-4">
          What Our Clients Say About Us
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Our clients trust us for delivering high-quality materials for their
          road construction projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Testimonial 1 */}
        <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <FaQuoteLeft className="text-primary text-3xl mb-4" />
          <p className="text-lg text-gray-600 mb-6 italic">
            "The quality of asphalt they provided was top-notch, and the
            delivery was on time. Our road project wouldn't have been the same
            without their excellent service."
          </p>
          <h3 className="text-2xl font-bold text-gray-800">Helen</h3>
          <p className="text-sm text-gray-500">Project Manager, XYZ Ltd.</p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <FaQuoteLeft className="text-primary text-3xl mb-4" />
          <p className="text-lg text-gray-600 mb-6 italic">
            "We've worked with many suppliers, but the sand from this company
            was by far the best quality we've used. Highly recommended!"
          </p>
          <h3 className="text-2xl font-bold text-gray-800">Ngozi Nwankwo</h3>
          <p className="text-sm text-gray-500">CEO, BuildRight Ltd.</p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <FaQuoteLeft className="text-primary text-3xl mb-4" />
          <p className="text-lg text-gray-600 mb-6 italic">
            "Their gravel made the foundation of our project extremely strong,
            and the customer service was fantastic. I would gladly work with
            them again."
          </p>
          <h3 className="text-2xl font-bold text-gray-800">Adesanya Isiaq</h3>
          <p className="text-sm text-gray-500">Site Supervisor, RoadMasters</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

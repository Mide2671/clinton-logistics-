import React from "react";
import { FaTruckMoving, FaRoad, FaTools, FaBuilding } from "react-icons/fa";

function Service() {
  return (
    <div className="container mx-auto p-5 md:p-0 my-20" id="services">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-primary tracking-wide">
          OUR SERVICES
        </h1>
        <h2 className="text-5xl font-bold mt-4">
          Quality Logistics for Road Construction
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          We provide reliable and efficient logistics solutions to transport all
          the materials required for road construction projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Service 1 - Asphalt Delivery */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
          <div className="text-primary mb-4 flex justify-center items-center">
            <FaTruckMoving size={50} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Asphalt Delivery</h3>
          <p className="text-lg text-gray-600">
            We deliver high-quality asphalt to construction sites, ensuring
            smooth and timely transportation to meet your project needs.
          </p>
        </div>

        {/* Service 2 - Gravel & Aggregate Supply */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
          <div className="text-primary mb-4 flex justify-center items-center">
            <FaRoad size={50} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Gravel & Aggregate Supply</h3>
          <p className="text-lg text-gray-600">
            Our fleet transports gravel and other aggregates essential for
            building strong road foundations, ensuring top-notch durability.
          </p>
        </div>

        {/* Service 3 - Heavy Equipment Transport */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
          <div className="text-primary mb-4 flex justify-center items-center">
            <FaTools size={50} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Heavy Equipment Transport</h3>
          <p className="text-lg text-gray-600">
            We specialize in delivering heavy construction machinery and
            equipment necessary for road construction and maintenance projects.
          </p>
        </div>

        {/* Service 4 - Sand & Concrete Supply */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
          <div className="text-primary mb-4 flex justify-center items-center">
            <FaBuilding size={50} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Sand & Concrete Supply</h3>
          <p className="text-lg text-gray-600">
            We provide timely delivery of sand, concrete, and other essential
            construction materials to ensure uninterrupted work progress.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;

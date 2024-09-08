import React from "react";
import { FaTruck, FaCheckCircle, FaCubes } from "react-icons/fa";

function Price() {
  return (
    <div className="container mx-auto p-5 my-20" id="price">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-primary tracking-wide">
          OUR MATERIAL PRICING
        </h1>
        <h2 className="text-5xl font-bold mt-4">
          Road Construction Materials at Affordable Prices
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Choose from our selection of high-quality materials for your
          construction needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Asphalt Plan */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Asphalt</h3>
          <p className="text-5xl font-bold text-primary mb-4">₦120,000/ton</p>
          <p className="text-gray-600 mb-6">
            High-quality asphalt for durable roads
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex justify-center items-center">
              <FaTruck className="text-primary mr-2" /> Fast Delivery
            </li>
            <li className="flex justify-center items-center">
              <FaCheckCircle className="text-primary mr-2" /> Premium Quality
            </li>
            <li className="flex justify-center items-center">
              <FaCubes className="text-primary mr-2" /> Bulk Orders Available
            </li>
          </ul>

          <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-300">
            Order Asphalt
          </button>
        </div>

        {/* Sand Plan */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center border-2 border-primary transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Sand</h3>
          <p className="text-5xl font-bold text-primary mb-4">₦50,000/ton</p>
          <p className="text-gray-600 mb-6">
            Fine sand for all construction projects
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex justify-center items-center">
              <FaTruck className="text-primary mr-2" /> Fast Delivery
            </li>
            <li className="flex justify-center items-center">
              <FaCheckCircle className="text-primary mr-2" /> Superior Grade
            </li>
            <li className="flex justify-center items-center">
              <FaCubes className="text-primary mr-2" /> Available in Bulk
            </li>
          </ul>

          <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-300">
            Order Sand
          </button>
        </div>

        {/* Gravel Plan */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Gravel</h3>
          <p className="text-5xl font-bold text-primary mb-4">₦70,000/ton</p>
          <p className="text-gray-600 mb-6">
            High-durability gravel for solid road foundations
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex justify-center items-center">
              <FaTruck className="text-primary mr-2" /> Fast Delivery
            </li>
            <li className="flex justify-center items-center">
              <FaCheckCircle className="text-primary mr-2" /> High Durability
            </li>
            <li className="flex justify-center items-center">
              <FaCubes className="text-primary mr-2" /> Bulk Orders Available
            </li>
          </ul>

          <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-300">
            Order Gravel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Price;

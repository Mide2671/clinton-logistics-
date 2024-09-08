import React from "react";
import bgImg from "../assets/bgImage.jpg";

function Main() {
  return (
    <div
      className="relative h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
      
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight mb-4">
          Building Roads. Building Progress
        </h1>
        <p className="text-lg md:text-2xl text-white mb-6 max-w-3xl mx-auto">
          Clinton Logistics - Your trusted partner for reliable road construction solutions, delivering quality products and services to help you build safer, more durable roads and infrastructure that lasts.
        </p>
        <button className="bg-primary text-white p-4 md:p-6 rounded-lg shadow-lg hover:bg-primary-dark transition-colors duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Main;

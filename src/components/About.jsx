import React, { useState, useEffect, useRef } from "react";
import img from "../assets/about.jpg";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  // Function to animate numbers
  const useCountUp = (start, end, duration) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
      if (isVisible) {
        let startTime;
        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setCount(Math.floor(progress * (end - start) + start));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
    }, [isVisible, start, end, duration]);

    return count;
  };

  // Counter values for each number
  const skilledExpertsCount = useCountUp(0, 1997, 2000);
  const completedProjectsCount = useCountUp(0, 125, 2000);
  const happyClientsCount = useCountUp(0, 72, 2000);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="container mx-auto p-5 md:p-0 my-20 scroll-mt-20" id="about" ref={aboutRef}>
      <div className="flex flex-col lg:flex-row space-y-10 md:space-y-0 md:space-x-10">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg">
          <img src={img} alt="About" className="w-full h-full object-cover transform hover:scale-105 duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute bottom-0 w-full h-[100px] flex justify-center items-center">
            <h1 className="text-4xl font-bold tracking-wide text-white">25+ Years Experience</h1>
          </div>
        </div>

        {/* Text & Counters Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
          <h1 className="text-3xl font-bold text-primary tracking-wider">ABOUT US</h1>
          <h2 className="text-5xl font-bold leading-snug text-gray-800">
            Trusted & Faster Logistic Service Provider
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We deliver high-quality logistics solutions for road construction projects. With over 25 years of experience, we
            ensure your materials reach their destination safely and on time. Our skilled team is committed to excellence.
          </p>
          
          {/* Counters */}
          <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-5 lg:space-y-0 lg:space-x-10">
            {/* Counter 1 */}
            <div className="text-center">
              <span className="text-5xl font-bold text-primary">{skilledExpertsCount}</span>
              <h3 className="text-xl font-medium text-gray-700 mt-2">Skilled Experts</h3>
            </div>

            {/* Counter 2 */}
            <div className="text-center">
              <span className="text-5xl font-bold text-primary">{completedProjectsCount}</span>
              <h3 className="text-xl font-medium text-gray-700 mt-2">Completed Projects</h3>
            </div>

            {/* Counter 3 */}
            <div className="text-center">
              <span className="text-5xl font-bold text-primary">{happyClientsCount}</span>
              <h3 className="text-xl font-medium text-gray-700 mt-2">Happy Clients</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

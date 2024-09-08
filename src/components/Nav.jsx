import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function Nav() {
  const [open, setOpen] = useState(false);
  const list = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Pricing", link: "#price" },
    { name: "Contact", link: "#contact" },
  ];

  const toggle = () => setOpen(!open);

  return (
    <header className="bg-white text-black shadow-md py-4 z-10 sticky top-0">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-primary text-2xl font-bold tracking-wider">
            Clinton <span className="text-lg font-normal">Logistics</span>
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={toggle}
          className="text-3xl cursor-pointer md:hidden"
        >
          {open ? (
            <AiOutlineClose className="text-primary" />
          ) : (
            <FaBars className="text-primary" />
          )}
        </div>

        {/* Navigation Links */}
        <nav className={`fixed md:static top-0 left-0 w-full md:w-auto bg-white md:bg-transparent transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}>
          <div className="flex justify-end p-4 md:hidden">
            <button onClick={toggle} className="text-3xl">
              <AiOutlineClose className="text-primary" />
            </button>
          </div>
          <ul className="md:flex md:items-center md:space-x-10 space-y-4 md:space-y-0 md:pl-0 pl-4 pt-4 md:pt-0 pb-5 md:pb-0">
            {list.map((item, index) => (
              <li key={index} className="text-base hover:text-primary duration-200 cursor-pointer">
                <a href={item.link} className="transition-colors duration-300 hover:text-primary">{item.name}</a>
              </li>
            ))}
            <li>
              <button className="bg-primary text-white rounded-xl p-3 hover:bg-primary-dark transition-colors duration-300">
                Learn More
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;

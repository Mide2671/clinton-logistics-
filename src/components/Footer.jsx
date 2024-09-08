import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Company Info */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">Logistics Company</h2>
            <p className="text-lg mb-4">
              Providing top-notch materials for road construction including
              asphalt, sand, and gravel.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhoneAlt className="text-primary mr-2" />
                <a href="tel:+2341234567" className="hover:underline">
                  +234 123 4567
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary mr-2" />
                <a
                  href="mailto:info@logisticscompany.com"
                  className="hover:underline"
                >
                  info@clintonlogistics.com
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-primary mr-2" />
                <span>123 Roadway Blvd, Oshogbo, Osun State, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-700 pt-4 mt-10 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Clinton Logistics. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

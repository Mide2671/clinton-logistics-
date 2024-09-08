import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to an API)
    setFormStatus("Thank you for contacting us. We will get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto p-5 my-20" id="contact">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-primary tracking-wide">
          GET IN TOUCH
        </h1>
        <h2 className="text-5xl font-bold mt-4">We'd Love to Hear From You</h2>
        <p className="text-lg text-gray-600 mt-4">
          Reach out to us for any inquiries or assistance with our road
          construction materials.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-10">
        {/* Contact Details */}
        <div className="lg:w-1/2">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Details
            </h3>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-primary text-3xl mr-4" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-gray-600">+234 123 4567</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-primary text-3xl mr-4" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-600">info@clintonlogistics.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-primary text-3xl mr-4" />
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p className="text-gray-600">
                  123 Roadway Blvd, Oshogbo, Osun State, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-300"
              >
                Send Message
              </button>
            </form>
            {formStatus && <p className="mt-4 text-green-600">{formStatus}</p>}
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Our Location
        </h3>
        <div className="relative w-full h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946072.5162176104!2d4.510077757564185!3d7.716146682438066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1015b51f50141db7%3A0xf0c1526792b76c7!2sOshogbo%2C%20Osun%20State%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1638171962626!5m2!1sen!2sus"
            className="absolute inset-0 w-full h-full border-0 rounded-lg"
            title="map"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;

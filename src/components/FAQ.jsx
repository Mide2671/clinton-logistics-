import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What types of materials do you provide for road construction?",
    answer:
      "We provide high-quality materials including asphalt, sand, gravel, and more. Our materials are perfect for all types of road construction projects, ensuring durability and strength.",
  },
  {
    question: "Do you offer bulk pricing for large orders?",
    answer:
      "Yes, we offer competitive bulk pricing for large orders. Contact our sales team for a custom quote based on the quantity you need.",
  },
  {
    question: "What is the delivery time for materials?",
    answer:
      "We aim to deliver all orders within 3-5 business days, depending on the location and size of the order. We also offer express delivery for urgent projects.",
  },
  {
    question: "Can I get a sample of the materials before placing an order?",
    answer:
      "Absolutely! We can provide small samples of our materials like asphalt, sand, or gravel so you can evaluate the quality before placing a bulk order.",
  },
  {
    question: "Do you offer any warranties on the materials?",
    answer:
      "Yes, we stand behind the quality of our materials and offer warranties based on the type of material and the quantity purchased. Please contact us for more details.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-5 my-20" id="faq">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-primary tracking-wide">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <h2 className="text-5xl font-bold mt-4">
          Your Questions, Answered
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Find answers to the most common questions about our materials and services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>
              {activeIndex === index ? (
                <FaChevronUp className="text-primary" />
              ) : (
                <FaChevronDown className="text-primary" />
              )}
            </div>
            <div
              className={`mt-4 text-gray-600 transition-max-height duration-300 ease-in-out ${
                activeIndex === index ? "max-h-screen" : "max-h-0 overflow-hidden"
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;

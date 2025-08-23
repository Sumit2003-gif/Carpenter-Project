import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I order a custom product at Reywood?",
    answer: "To place a custom order, contact us with your design and dimensions. We’ll get back to you with a quote and timelines.",
  },
  {
    question: "What types of wood are available at Reywood?",
    answer: "We offer a variety including oak, maple, walnut, teak, and pine. Each has its own unique character and finish.",
  },
  {
    question: "Do you accept orders for furniture in large quantities?",
    answer: "Yes, we cater to bulk and business orders. Please get in touch for custom pricing and project planning.",
  },
  {
    question: "What payment methods do you provide?",
    answer: "We accept payments via credit/debit cards, net banking, UPI, and select EMI options.",
  },
];

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const image = [
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "https://carpent-react.vercel.app/assets/1-CU40OmgW.jpg",
    "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg",
    "https://carpent-react.vercel.app/assets/2-0qttj0fo.jpg"
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
      {/* Image */}
      <div>
        <img
          src="https://carpent-react.vercel.app/assets/faq-bg-DLHkuWHM.jpg"
          alt="FAQ Visual"
          className="rounded-lg object-cover w-full"
        />
      </div>

      {/* FAQ Content */}
      <div>
        <p className="text-[#C1833F] font-semibold uppercase tracking-wide mb-2">FAQ's</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions</h2>

        {/* Questions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 rounded-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between cursor-pointer items-center text-left px-6 py-4 font-medium text-gray-800"
              >
                {faq.question}
                <ChevronDown
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#C1833F] cursor-pointer" : "rotate-0 cursor-pointer"
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`px-6 pb-4 text-sm text-gray-600 cursor-pointer transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default HomeFAQ;

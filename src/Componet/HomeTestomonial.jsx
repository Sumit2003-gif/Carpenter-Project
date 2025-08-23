import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Paul Scholes",
    location: "Manchester, UK",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit aut fugit, sed. Beatae vitae dicta. Adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    name: "Emma Watson",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam numquam possimus iste. Voluptatibus velit officiis, reprehenderit, voluptatem recusandae delectus!",
  },
  {
    name: "Michael Clarke",
    location: "Sydney, Australia",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    message:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const HomeTestimonial = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <motion.section
      className="bg-[#2c1a05] text-white py-20 px-4 sm:px-6 md:px-12 lg:px-24 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-sm tracking-widest text-orange-400 mb-3 uppercase">
          TESTIMONIAL
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-10">
          We convince clients <br /> trust and loyalty
        </h2>

        {/* AnimatePresence for smooth slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="px-2"
          >
            <p className="text-base sm:text-lg text-gray-200 mb-10 leading-relaxed">
              {testimonial.message}
            </p>

            <div className="flex flex-col items-center gap-2">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-3 border-2 border-orange-400"
              />
              <h4 className="font-semibold text-lg sm:text-xl">{testimonial.name}</h4>
              <p className="text-gray-400 text-sm sm:text-base">{testimonial.location}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <motion.button
            onClick={prev}
            className="w-12 h-12 sm:w-14 cursor-pointer sm:h-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.15, rotate: -15 }}
            transition={{ type: "spring", stiffness: 300 }}
            aria-label="Previous testimonial"
          >
            <FaArrowLeft />
          </motion.button>
          <motion.button
            onClick={next}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full cursor-pointer bg-white text-black flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.15, rotate: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
            aria-label="Next testimonial"
          >
            <FaArrowRight />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeTestimonial;

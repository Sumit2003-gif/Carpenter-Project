import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const containerVariants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  offscreen: { opacity: 0, x: -80 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",       // smoother than spring for slow motion
      ease: "easeOut",     // slow ease
      duration: 2          // slower duration
    }
  }
};


const textVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};


const statVariants = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const HomeAbout = () => {
  return (
    <motion.section
      className="bg-gray-100 py-16 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Left Images */}
      <motion.div
        className="relative w-full md:w-1/2 flex justify-center md:justify-start"
        variants={imageVariants}
      >
        {/* Background image */}
        <img
          src="https://images.pexels.com/photos/6669185/pexels-photo-6669185.jpeg"
          alt="Living Room Wooden Furniture"
          className="rounded-lg shadow-lg w-72 md:w-96 object-cover"
        />
        {/* Foreground image */}
        <img
          src="https://images.pexels.com/photos/4009760/pexels-photo-4009760.jpeg"
          alt="Woman Sitting on Wood"
          className="rounded-lg shadow-xl w-56 md:w-72 object-cover absolute top-16 md:top-20 left-28 md:left-36 border-4 border-white"
          style={{ zIndex: 10 }}
        />
      </motion.div>

      {/* Right Text Content */}
      <motion.div className="w-full md:w-1/2 space-y-6" variants={textVariants}>
        <motion.p
          className="text-sm uppercase text-[#C1833F] font-semibold tracking-widest"
          variants={statVariants}
        >
          About Carpent
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          variants={statVariants}
        >
          Unique Furniture From Finest Natural Woods
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-xl"
          variants={statVariants}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisi tempor pulvinar porttitor, velit neque iaculis leo, ac tincidunt
          enim nibh eu eros. Mauris cursus, ex nec convallis sodales.
        </motion.p>

        {/* Stats */}
        <div className="flex gap-16">
          <motion.div variants={statVariants}>
            <h3 className="text-4xl font-bold text-gray-900">450</h3>
            <p className="font-semibold text-gray-700">Furniture Project</p>
          </motion.div>
          <motion.div variants={statVariants}>
            <h3 className="text-4xl font-bold text-gray-900">156</h3>
            <p className="font-semibold text-gray-700">Satisfied Clients</p>
          </motion.div>
        </div>

        {/* Button */}
        <Link
        to = "/pages">
        <motion.button
          className="bg-[#C1833F] text-white cursor-pointer font-semibold px-6 py-3 rounded-md hover:bg-[#a4723c] transition"
          variants={statVariants}
        >
          Learn More
        </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default HomeAbout;

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const contentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const BrightenSection = () => {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Left Image */}
      <motion.div
        className="md:w-1/2 relative flex justify-center md:justify-end p-4 md:p-0 items-start h-[350px] md:h-[500px]"
        variants={imageVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Amber Box Behind Image */}
        <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-24 h-24 md:w-44 md:h-44 bg-[#C1833F] rounded-lg shadow-md z-10 hidden md:block" />

        {/* Image */}
        <img
          src="https://carpent-react.vercel.app/assets/3-BUQvnZm6.jpg"
          alt="Interior Design"
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover rounded-lg shadow-lg z-20"
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 md:ml-12 max-w-lg"
        variants={contentVariants}
      >
        <motion.p
          className="text-[#C1833F] uppercase tracking-wide font-semibold mb-2"
          variants={itemVariants}
        >
          About Carpent
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900"
          variants={itemVariants}
        >
          Brighten Every Nook <br /> and{" "}
          <span className="text-[#C1833F]">Corner</span> of Your House
        </motion.h2>
        <motion.p
          className="text-gray-500 mt-4 mb-6 text-base sm:text-lg"
          variants={itemVariants}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisi tempor pulvinar porttitor, velit neque iaculis leo, ac tincidunt
          enim nibh eu eros. Mauris cursus, ex nec convallis sodales.
        </motion.p>

        {/* Features List */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800 font-medium"
          variants={itemVariants}
        >
          {[
            "Professional Worker",
            "Trusted Company",
            "Best Quality Materials",
            "Affordable Price",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="text-black text-lg">✔</span>
              {item}
            </div>
          ))}
        </motion.div>

        {/* Uncomment to add button */}
        {/* <motion.button
          className="mt-8 bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition duration-300 ease-in-out shadow-md"
          variants={itemVariants}
        >
          Learn More
        </motion.button> */}
      </motion.div>
    </motion.section>
  );
};

export default BrightenSection;

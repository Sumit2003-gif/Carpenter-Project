import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const HomeHero = () => {
  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section className="px-6 py-16 md:flex md:items-center md:gap-16 bg-gray-100">
      {/* Left side (text) */}
      <motion.div
        className="md:flex-1 order-2 md:order-1"
        initial="hidden"
        animate="visible"
        variants={leftVariants}
      >
        <p className="text-[#C1833F] uppercase tracking-widest mb-3 text-sm font-semibold">
          Welcome to Carpent
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Finest Woodwork for{" "}
          <span className="inline-block rounded-full overflow-hidden w-16 h-10 align-middle">
            <img
              src="https://images.pexels.com/photos/128639/pexels-photo-128639.jpeg"
              alt="Wood texture"
              className="w-full h-40 md:h-64 object-cover"

            />
          </span>{" "}
          Unique Home Decor
        </h1>
        <p className="text-gray-600 mb-10 max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim
          laudantium explicabo, quaerat exercitationem ipsa.
        </p>
        <div className="flex items-center gap-6">
          <Link 
          to="services"
          smooth={true}
          duration={300}
          // offset={-70}
          >
          <button className="bg-[#C1833F] cursor-pointer text-white px-8 py-3 rounded-md font-semibold hover:bg-[#a86b28] transition">
            Our Services
          </button>
          </Link>
          <a href="https://youtu.be/rErkJv6ZYv0?si=JpF8nyNwE9wysDFb"
          target="_blank" 
          rel="noopener"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-red-700">
          <button className="border cursor-pointer border-gray-300 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition">
            <svg
              className="w-7 h-7  text-[#C1833F]"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-6.518-3.752v7.584l6.518-3.832z"
              />
            </svg>
          </button>
          </a>
        </div>
      </motion.div>

      {/* Right side (image) */}
      <motion.div
        className="md:flex-1 mt-12 md:mt-0 order-1 md:order-2"
        initial="hidden"
        animate="visible"
        variants={rightVariants}
      >
        <img
          src="https://images.pexels.com/photos/5089167/pexels-photo-5089167.jpeg"
          alt="Measuring Wood"
          className="rounded-lg object-cover w-full h-auto max-h-[480px]"
        />
      </motion.div>
    </section>
  );
};

export default HomeHero;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheck, FiAward, FiUsers, FiCalendar } from "react-icons/fi";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const statsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const statItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const FlooringSection = () => {
  const stats = [
    { 
      number: "125+", 
      label: "Materials Available", 
      icon: <FiCheck className="text-amber-500" />,
      description: "Premium flooring options"
    },
    { 
      number: "97+", 
      label: "Complete Project", 
      icon: <FiAward className="text-amber-500" />,
      description: "Successfully delivered"
    },
    { 
      number: "137+", 
      label: "Total Manpower", 
      icon: <FiUsers className="text-amber-500" />,
      description: "Skilled professionals"
    },
    { 
      number: "16+", 
      label: "Years Experiences", 
      icon: <FiCalendar className="text-amber-500" />,
      description: "Industry expertise"
    },
  ];

  const features = [
    "Premium quality materials",
    "Expert installation team",
    "Custom design solutions",
    "Competitive pricing",
    "Sustainable practices",
    "Warranty on all services"
  ];

  return (
    <motion.section
      className="bg-[#2e1e0f] min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-20 py-16 relative text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div className="lg:w-1/2" variants={contentVariants}>
            <div className="inline-flex items-center mb-4 px-4 py-2 bg-amber-500/20 rounded-full">
              <span className="text-[#c58b3c] tracking-widest text-sm font-semibold">HOW WE WORK</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Be found for quality{" "}
              <span className="text-[#c58b3c]">flooring</span> and great design
            </h1>
            
            <p className="mt-6 text-gray-200 leading-relaxed text-base sm:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sequi
              in reiciendis dolores, qui amet beatae numquam impedit eum ipsum odio
              minima, consequatur maxime nisi commodi illo neque ex quo.
            </p>
            
            {/* Features List */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center mr-3">
                    <FiCheck className="text-amber-400 text-sm" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-500/20 flex items-center"
              >
                GET IN TOUCH
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={statsVariants}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-gradient-to-br from-amber-900/30 to-amber-800/20 backdrop-blur-sm p-6 rounded-2xl border border-amber-700/30 shadow-lg hover:shadow-amber-500/10 transition-all duration-300"
                  custom={index}
                  variants={statItemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
                      {stat.icon}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-amber-400">{stat.number}</h2>
                  </div>
                  <p className="text-lg font-semibold text-white mb-1">{stat.label}</p>
                  <p className="text-sm text-amber-200/80">{stat.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Additional Content */}
            <motion.div
              className="mt-8 bg-gradient-to-r from-amber-900/30 to-amber-800/20 backdrop-blur-sm p-6 rounded-2xl border border-amber-700/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-xl font-bold text-white mb-3">Why Choose Us?</h3>
              <p className="text-gray-300">
                With over 16 years of experience in the flooring industry, we have perfected our craft to deliver exceptional results that exceed our clients' expectations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FlooringSection;
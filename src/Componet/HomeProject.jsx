import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Wooden Chair",
    image: "https://carpent-react.vercel.app/assets/1-1-DdEE2ijX.jpg",
  },
  {
    name: "Modern Kitchen",
    image: "https://carpent-react.vercel.app/assets/1-2-CeDCj3pa.jpg",
  },
  {
    name: "Vintage Chair",
    image: "https://carpent-react.vercel.app/assets/1-3-OEsSdEju.jpg",
  },
  {
    name: "Wood Utilites",
    image: "https://carpent-react.vercel.app/assets/1-4-eVeqT0n6.jpg",
  },
  {
    name: "Interior Design",
    image: "https://carpent-react.vercel.app/assets/1-5-CHrAWynY.jpg",
  },
  {
    name: "Custom Carpentry",
    image: "https://carpent-react.vercel.app/assets/1-6-BsBdw1GM.jpg",
  },
];

// Container with staggered children animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Card initial animation on load
const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Overlay slides up and fades in on hover
const overlayVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const imageVariants = {
  hover: { scale: 1.1, transition: { duration: 0.4, ease: "easeOut" } },
};

const HomeProject = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-10 md:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-yellow-700 uppercase tracking-widest">
            Recent Project
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 md:mt-0">
            We Provide You the <br className="hidden sm:block" />
            Highest Quality Work
          </h2>
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-md cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileHover="hover"
            animate="visible"
          >
            <motion.img
              src={project.image}
              alt={project.name}
              className="w-full h-72 object-cover rounded-md"
              variants={imageVariants}
              draggable={false}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white text-center py-4 font-semibold rounded-b-md"
              variants={overlayVariants}
              initial="hidden"
            >
              {project.name}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HomeProject;

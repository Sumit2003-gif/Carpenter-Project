import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
};

const BlogCard = ({ id, image, date, title, description }) => {
  return (
    <motion.div
      className="w-full max-w-sm bg-white rounded overflow-hidden shadow-sm mx-auto md:mx-0"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {/* Image */}
      <img src={image} alt={title} className="w-full h-64 object-cover" />

      {/* Content */}
      <div className="p-5">
        {/* Date */}
        <p className="text-sm text-[#b18050] mb-2">{date}</p>

        {/* Title */}
        <h2 className="text-xl font-semibold text-black mb-2">{title}</h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-4">{description}</p>

        {/* Read More Button */}
        <div>
          <Link
            to={`/blog/${id}`}
            className="inline-block text-[#b18050] font-semibold hover:underline hover:text-[#9a673d] transition duration-300"
          >
            Read More →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;

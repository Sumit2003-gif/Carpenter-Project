import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  // Variants for modal animation
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4 },
    },
  };

  // Variants for play button hover pulse
  const pulseVariants = {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [0.7, 0.4, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full h-[90vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
      {/* Background image */}
      <img
        src="https://images.pexels.com/photos/11164448/pexels-photo-11164448.jpeg"
        alt="Video Preview"
        className="w-full h-full object-cover"
      />

      {/* Play Button */}
      <button
        onClick={handleToggle}
        aria-label="Play video"
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <div className="relative">
          {/* Outer pulsing circle */}
          <motion.div
            className="absolute top-0 left-0 w-20 h-20 rounded-full border border-white"
            variants={pulseVariants}
            animate="animate"
          />
          {/* Static circle */}
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl relative z-20 cursor-pointer hover:scale-110 transition-transform duration-300">
            <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-orange-500 ml-1" />
          </div>
        </div>
      </button>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-[1000] flex items-center justify-center p-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
              {/* Close button */}
              <button
                onClick={handleToggle}
                aria-label="Close video"
                className="absolute top-4 right-4 text-white text-4xl z-20 hover:text-orange-500 transition-colors duration-300"
              >
                <FiX />
              </button>

              {/* Embedded YouTube video */}
              <div className="w-full aspect-w-16 aspect-h-9">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoSection;

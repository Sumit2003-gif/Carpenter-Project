import React from "react";
import { motion } from "framer-motion";

const cardsData = [
  {
    url: "https://carpent-react.vercel.app/assets/1-D74I9N_q.png",
    header: "Years Experiences",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    url: "https://carpent-react.vercel.app/assets/2-BIVJNBEU.png",
    header: "Premium Woods",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    url: "https://carpent-react.vercel.app/assets/3-BZBfA-Eg.png",
    header: "Modern Equipment",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const containerVariants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.5, // slower stagger between cards
    },
  },
};

const cardVariantsMobile = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.25, duration: 1.2 },
  },
};

const cardVariantsDesktop = {
  offscreen: { opacity: 0, x: -70 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", bounce: 0.25, duration: 1.2 },
  },
};

// Text variants to fade and slide up slightly, slower too
const textVariants = {
  offscreen: { opacity: 0, y: 10 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Cards = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {cardsData.map(({ url, header, text }, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col items-center gap-6 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
          variants={isMobile ? cardVariantsMobile : cardVariantsDesktop}
        >
          <img
            src={url}
            alt={header}
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
          />

          <motion.h3
            className="text-xl font-semibold text-gray-900"
            variants={textVariants}
          >
            {header}
          </motion.h3>

          <motion.p className="text-gray-600 max-w-xs" variants={textVariants}>
            {text}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Cards;

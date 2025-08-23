import React, { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-scroll";

const HomeService = () => {
  const cardData = [
    {
      title: "Wood Furnitures",
      description:
        "Custom-designed wood furniture crafted with premium quality and modern designs.",
      icon: "https://carpent-react.vercel.app/assets/2-BIVJNBEU.png",
    },
    {
      title: "Wood Utilities",
      description:
        "Functional wood items like cabinets, doors, and shelves with perfect finish.",
      icon: "https://carpent-react.vercel.app/assets/2-BIVJNBEU.png",
    },
    {
      title: "Custom Works",
      description:
        "Tailored wood projects to fit your imagination and space requirements.",
      icon: "https://carpent-react.vercel.app/assets/2-BIVJNBEU.png",
    },
    {
      title: "House Renovation",
      description:
        "Complete home wood renovation solutions with design & quality.",
      icon: "https://carpent-react.vercel.app/assets/2-BIVJNBEU.png",
    },
    {
      title: "Wooden Floor",
      description:
        "Installations and finishing of stylish wooden floors with durability.",
      icon: "https://carpent-react.vercel.app/assets/2-BIVJNBEU.png",
    },
    {
      title: "Custom Cabin",
      description:
        "Design your own cozy, wooden cabins with modern craftsmanship.",
      icon: "https://carpent-react.vercel.app/assets/2-BIVJNBEU.png",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640); // Tailwind sm breakpoint
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!inView) return; // Do nothing if component not in view yet

    if (isMobile) {
      // On mobile, show all cards immediately once in view
      setVisibleCards(cardData.length);
    } else {
      // On desktop, show cards one by one once in view
      setVisibleCards(0); // reset before animation
      const interval = setInterval(() => {
        setVisibleCards((prev) => {
          if (prev < cardData.length) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 400);
      return () => clearInterval(interval);
    }
  }, [inView, isMobile, cardData.length]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative py-20 px-4 sm:px-6 lg:px-10"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/31092898/pexels-photo-31092898.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 -z-10" />

      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <p className="text-[#C1833F] font-semibold tracking-wide">OUR SERVICE</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-sm">
          We Craft What You Imagine
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cardData.slice(0, visibleCards).map((card, index) => (
          <motion.div
            key={index}
            className="relative group bg-white shadow-md p-8 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible" // animate only when individual card is in view (optional)
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-10 h-10 bg-[#C1833F]/65 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <img src={card.icon} alt={card.title} className="w-12 h-12 mb-6" />

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {card.title}
            </h3>

            <p className="text-gray-600 mb-6">{card.description}</p>
<Link
to="home"
smooth={true}
duration={300}>
            <div className="flex items-center gap-2 cursor-pointer text-black font-medium transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">
              
              <span>Read More</span>
              <ArrowRight size={18} />
            </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeService;

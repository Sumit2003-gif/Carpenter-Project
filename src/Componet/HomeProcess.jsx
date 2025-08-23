import React from "react";
import { Pen, Home, MapPin, Gift } from "lucide-react";
import { motion } from "framer-motion";

const processSteps = [
  {
    icon: <Pen size={28} />, // added size for consistency
    title: "01. Select Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
  },
  {
    icon: <Home size={28} />,
    title: "02. Wood Selection",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
  },
  {
    icon: <MapPin size={28} />,
    title: "03. Making Process",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
  },
  {
    icon: <Gift size={28} />,
    title: "04. Final Product",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
  },
];

// Variants for fade + slide-up animation
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HomeProcess = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 text-center max-w-7xl mx-auto">
      <p className="text-sm text-[#C5853A] font-medium tracking-widest mb-3 uppercase">
        OUR PROCESS
      </p>
      <h2 className="text-4xl font-bold mb-6">
        We Shape Wood Like No One Else
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {processSteps.map(({ icon, title, description }, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center gap-5 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <div className="border border-[#C5853A] rounded-md p-4 text-[#C5853A] hover:bg-[#c5843a31] transition-colors cursor-pointer">
              {icon}
            </div>
            <h3 className="font-semibold text-xl">{title}</h3>
            <p className="text-gray-500 text-sm max-w-xs">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeProcess;

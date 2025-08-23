import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from './TeamMenber';

const team = [
  {
    name: 'John Lewis',
    title: 'Carpenter',
    image: 'https://images.pexels.com/photos/824300/pexels-photo-824300.jpeg',
  },
  {
    name: 'Emily Stone',
    title: 'Carpenter',
    image: 'https://images.pexels.com/photos/5089153/pexels-photo-5089153.jpeg',
  },
  {
    name: 'David Brown',
    title: 'Carpenter',
    image: 'https://images.pexels.com/photos/8830269/pexels-photo-8830269.jpeg',
  },
  {
    name: 'Anna Lee',
    title: 'Carpenter',
    image: 'https://images.pexels.com/photos/8447842/pexels-photo-8447842.jpeg',
  },
];

// Animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

// Container to stagger children animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-center px-4 sm:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">Professional Carpenters</h2>

      <motion.div
        className="flex flex-wrap justify-center items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-items-center justify-center cursor-pointer rounded-lg "
            variants={cardVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <TeamMember
              name={member.name}
              title={member.title}
              image={member.image}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;

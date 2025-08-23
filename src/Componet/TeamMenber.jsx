import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype } from 'react-icons/fa';

const TeamMember = ({ image, name, title }) => {
  return (
    <div className="relative group w-64 h-96 overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm mb-4">{title}</p>
        <div className="flex space-x-3 text-lg">
          <FaFacebookF className="hover:text-blue-500 transition" />
          <FaInstagram className="hover:text-pink-400 transition" />
          <FaLinkedinIn className="hover:text-blue-400 transition" />
          <FaSkype className="hover:text-blue-300 transition" />
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

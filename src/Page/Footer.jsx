import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype } from 'react-icons/fa';

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG circle properties
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* ... your existing footer content here ... */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="https://carpent-react.vercel.app/assets/logo-white-DUu-wDWN.png"
              alt="Carpent Logo"
              className="w-[80%] h-[80%]"
            />
          </div>
          <p>
            We provide the best carpentry services to deliver wood works. Craftsman
            services highly customized.
          </p>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Office</h4>
          <p>
            Corporate Office -<br />
            175 24th Street, OT-35
            <br />
            London, UK 265
          </p>
          <a href="mailto:info@carpent.com" className="block mt-4 text-white underline">
            info@carpent.com
          </a>
          <p className="text-white mt-2">+18-4675826</p>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Links</h4>
          <ul className="space-y-2">
            <li>
               <Link to="/" className="hover:text-white transition">
                Home
              </Link>
              </li>
              <li>
              <Link to="/pages" className="hover:text-white transition">
                About
              </Link>
            </li>
            {/* <li>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
            </li> */}
            <li>
              {/* <Link to="/projects" className="hover:text-white transition">
                Projects
              </Link> */}
            </li>
            <li>
              <Link to="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <FaFacebookF className="text-white" />
              <span>Facebook</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaInstagram className="text-white" />
              <span>Instagram</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaLinkedinIn className="text-white" />
              <span>LinkedIn</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaSkype className="text-white" />
              <span>Skype</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="text-gray-500">© 2025 Carpent. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-4 text-gray-500">
          <Link to="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link to="/terms" className="hover:text-white">
            Terms & Conditions
          </Link>
        </div>
      </div>

      {/* Back to top button with animated progress ring */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full text-white flex items-center justify-center hover:bg-amber-500 transition-transform duration-300 transform hover:scale-110"
        >
          ↑
          <svg
            className="absolute top-0 left-0"
            width="100%"
            height="100%"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="#d5902a"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.35s ease' }}
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}

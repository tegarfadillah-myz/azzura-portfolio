// src/assets/icons/Croissant.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Croissant = ({ className }) => (
  <motion.svg
    className={className}
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#D4A57C" // Warna light-brown
    strokeWidth="5"
    animate={{
      y: [0, -15, 0, 10, 0],
      rotate: [0, 5, -5, 5, 0],
    }}
    transition={{
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
    }}
  >
    <path d="M52.28,29.93C42.48,31,33.52,35.8,32.22,46.2c-1,8.1,7.2,14.6,12.3,20.9,7.5,9.2,8.8,11.5,15.8,11.5,11.5,0,14.4-8.8,22.2-16.4,6.4-6.2,13.5-12.8,12.6-22.3-1-10.4-11.5-16-21.5-15.5C65.58,25.03,58.38,29.23,52.28,29.93Z" />
    <path d="M32.22,46.2c-1.8-15.2,12.3-27,27.5-26.1,13.6.8,24.8,12.2,25.4,25.8" />
  </motion.svg>
);

export default Croissant;
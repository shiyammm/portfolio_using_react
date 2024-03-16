import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Magnet = ({ children }) => {
  const magneticRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } =
      magneticRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    setPosition({ x, y });
  };
  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={magneticRef}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
    >
      {children}
    </motion.div>
  );
};

export default Magnet;

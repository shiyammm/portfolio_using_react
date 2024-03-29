import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltImage = ({ projectImage, index, setHoverLink }) => {
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
    setHoverLink(true);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
    setHoverLink(false);
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-indigo-300 to-violet-300 w-[60rem] h-[40rem] relative rounded-[2rem]"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        width: 'calc(27.3rem + 27.3vw)',
        height: 'calc(18.4rem + 18.4vw)',
      }}
      animate={{
        rotateX,
        rotateY,
      }}
    >
      <img
        src={projectImage}
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
          width: 'calc(26.8rem + 26.8vw)',
          height: 'calc(17.9rem + 17.9vw)',
        }}
        key={index}
        alt=""
        className={`w-[59rem] h-[39rem] object-cover rounded-[2rem] absolute inset-2 place-content-center ${
          index === 1 ? 'object-left' : index === 2 ? 'object-[40%]' : ''
        }`}
      />
    </motion.div>
  );
};

export default TiltImage;

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
      className="bg-gradient-to-br from-indigo-300 to-violet-300 min-w-[58rem] min-h-[41rem] relative rounded-[2rem] 2xl:min-w-[45rem] 2xl:min-h-[30.5rem]"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
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
        }}
        key={index}
        alt=""
        className={`min-w-[57rem] min-h-[40rem] 2xl:min-w-[38rem] 2xl:min-h-[30rem] object-cover rounded-[2rem] absolute 2xl:inset-1.5 inset-2 place-content-center ${
          index === 1 ? 'object-left' : index === 2 ? 'object-[40%]' : ''
        }`}
      />
    </motion.div>
  );
};

export default TiltImage;

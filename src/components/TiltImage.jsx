import React from 'react';
import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion';

const TiltImage = ({
  projectImage,
  projectLink,
  index,
  handleHoverLinkEnter,
  handleHoverLinkLeave,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const motionSpringX = useSpring(x);
  const motionSpringY = useSpring(y);

  const rotateX = useTransform(motionSpringY, [-0.5, 0.5], ['3deg', '-3deg']);
  const rotateY = useTransform(motionSpringX, [-0.5, 0.5], ['3deg', '-3deg']);
  const handleImage = (e) => {
    const image = e.target.getBoundingClientRect();

    const imageWidth = image.width;
    const imageHeight = image.height;

    const mouseX = e.clientX - image.left;
    const mouseY = e.clientY - image.top;

    const xPercentage = mouseX / imageWidth - 0.5;
    const yPercentage = mouseY / imageHeight - 0.5;

    x.set(xPercentage);
    y.set(yPercentage);
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-indigo-300 to-violet-300 w-[59rem] h-[42rem] relative rounded-[2rem]"
      onMouseMove={handleImage}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* <a
        href={`${projectLink}`}
        key={index}
        className="relative bg-red-500 w-[69rem] h-[45rem] "
        target="blank"
        onMouseEnter={handleHoverLinkEnter}
        onMouseLeave={handleHoverLinkLeave}
      > */}
      <img
        src={projectImage}
        style={{
          transformStyle: 'preserve-3d',
        }}
        key={index}
        alt=""
        className={`w-[57rem] h-[40rem] object-cover rounded-[2rem] absolute inset-4 place-content-center ${
          index === 1 ? 'object-left' : index === 2 ? 'object-[40%]' : ''
        }`}
      />
      {/* </a> */}
    </motion.div>
  );
};

export default TiltImage;

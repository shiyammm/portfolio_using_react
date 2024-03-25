import React, { useEffect } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Hero = () => {
  const bgColors = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

  const color = useMotionValue(bgColors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, black 60% ,${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const backgroundColor = useMotionTemplate`${color}`;

  useEffect(() => {
    animate(color, bgColors, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  });

  return (
    <motion.section
      className="relative z-10 w-full h-screen flex-center hero"
      style={{
        backgroundImage,
      }}
    >
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas>
          <Stars radius={50} count={500} factor={4} fade speed={0.5} />
        </Canvas>
      </div> */}
      <div>
        <h1 className="leading-[11rem] font-roslindale-display text-[10rem] xl:text-[8rem] xl:leading-[8rem] text-white">
          Let's innovate <br />
          <span className="w-full h-full gap-8 flex-center">
            <motion.span
              style={{
                backgroundColor,
              }}
              className="inline-block px-6 py-4 mt-6 text-2xl font-semibold tracking-wide text-black rounded-full font-acme"
            >
              digital experiences
            </motion.span>{' '}
            together,
          </span>
        </h1>
        <span className="text-[2rem] xl:text-[1.5rem] font-circular-book flex justify-center mt-10 xl:mt-7 text-white ">
          crafting them with code
        </span>
      </div>
    </motion.section>
  );
};

export default Hero;

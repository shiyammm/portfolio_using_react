import React from 'react';
import Blob from '../components/Blob';
import { useParallax } from 'react-scroll-parallax';

const Hero = () => {
  const { ref } = useParallax({ speed: -10 });

  return (
    <section
      className="relative z-10 flex items-center justify-center w-full h-screen hero"
      ref={ref}
    >
      <Blob />
      <div>
        <h1 className="leading-[11rem] font-roslindale-display text-[10rem] xl:text-[8rem] xl:leading-[8rem] text-white">
          Let's innovate <br />
          <span className="flex items-center justify-center w-full h-full gap-8">
            <span className="inline-block px-6 py-4 mt-6 text-2xl font-semibold tracking-wide text-black rounded-full font-acme bg-cyan">
              digital experiences
            </span>{' '}
            together,
          </span>
        </h1>
        <span className="text-[2rem] xl:text-[1.5rem] font-circular-book flex justify-center mt-10 xl:mt-7 text-white ">
          crafting them with code
        </span>
      </div>
    </section>
  );
};

export default Hero;

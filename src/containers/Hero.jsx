import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = ({ tl1, loaderRefs, navLoaderRef }) => {
  useGSAP(() => {
    tl1.current = gsap
      .timeline()
      .to(loaderRefs.loader1.current, {
        height: '0vh',
        duration: 0.5,
      })
      .to(loaderRefs.loader2.current, {
        height: '0vh',
        duration: 0.5,
      })
      .to(loaderRefs.loader3.current, {
        height: '0vh',
        duration: 0.3,
      })
      .from('.word-1', {
        opacity: 0,
        skewX: '-20deg',
        duration: 0.7,
        ease: 'expo.out',
        delay: 0.3,
      })
      .from('.word-2', {
        opacity: 0,
        skewX: '20deg',
        duration: 0.7,
        ease: 'expo.out',
      })
      .from('.word-3', {
        opacity: 0,
        skewX: '-15deg',
        duration: 0.7,
        ease: 'expo.out',
      })
      .from('.word-4', {
        opacity: 0,
        skewX: '15deg',
        duration: 0.7,
        ease: 'expo.out',
      })
      .from('.secondPara', {
        y: 20,
        opacity: 0,
        ease: 'power4.out',
      })
      .from(navLoaderRef.current, {
        y: -10,
        opacity: 0,
      });
  });

  return (
    <section
      className="relative z-10 w-full h-screen flex-center hero"
      style={{
        backgroundImage:
          'radial-gradient(125% 125% at 50% 0%, #121315 60% ,#00ffa2)',
      }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas>
          <Stars radius={50} count={500} factor={4} fade speed={0.5} />
        </Canvas>
      </div>
      <div id="heroText">
        <h1 className="leading-[8rem] text-[7rem] 2xl:text-[6.5rem] xl:text-[6rem] xl:leading-[rem]  text-white tracking-wider font-Canopee-Regular">
          <span className="w-full h-full gap-6 text-white flex-center">
            <span className="word-1">Let's</span>{' '}
            <span className="word-2">Create</span>
          </span>

          <span className="w-full h-full gap-6 flex-center text-cyan">
            <span className="word-3">Awesome</span>
            <span className="text-white word-4">Work! </span>
          </span>
        </h1>
        <span className="text-[1.5rem] font-circular-book flex justify-center mt-5 text-white secondPara">
          Innovating Solutions, Igniting Progress
        </span>
      </div>
    </section>
  );
};

export default Hero;

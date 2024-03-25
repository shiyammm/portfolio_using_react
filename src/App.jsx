import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useGSAP } from '@gsap/react';
import {
  Navbar,
  Hero,
  About,
  Cursor,
  Works,
  WhatIUse,
  Contact,
} from './constants/index';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from 'framer-motion';

const App = () => {
  const [hoverLink, setHoverLink] = useState(false);
  const [hoverNavLink, setHoverNavLink] = useState(false);

  const bgColors = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

  const color = useMotionValue(bgColors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 100%, black 60% ,${color})`;
  const backgroundColor = useMotionTemplate`${color}`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, bgColors, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  });

  const cursor = useRef();

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useGSAP(() => {
    const mouse = (e) => {
      gsap.to(cursor.current, {
        x: e.x,
        y: e.y,
      });
    };
    window.addEventListener('pointermove', mouse);
  });

  return (
    <ParallaxProvider>
      <main className="relative bg-black">
        <div>
          <Cursor
            hoverLink={hoverLink}
            cursor={cursor}
            hoverNavLink={hoverNavLink}
          />
          <Navbar
            hoverNavLink={hoverNavLink}
            setHoverNavLink={setHoverNavLink}
            backgroundColor={backgroundColor}
          />
          <Hero backgroundColor={backgroundColor} backgroundImage={backgroundImage} />
          <motion.div
            style={{
              backgroundImage,
            }}
            className="px-12"
          >
            <About />
          </motion.div>
          <Works
            cursor={cursor}
            hoverLink={hoverLink}
            setHoverLink={setHoverLink}
          />
          <WhatIUse />
          <Contact />
        </div>
      </main>
    </ParallaxProvider>
  );
};

export default App;

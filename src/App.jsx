import React, { useRef, useState } from 'react';
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

const App = () => {
  const [hoverLink, setHoverLink] = useState(false);
  const [hoverNavLink, setHoverNavLink] = useState(false);

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
      <main className="relative bg-[#121315]">
        <div>
          <Cursor
            hoverLink={hoverLink}
            cursor={cursor}
            hoverNavLink={hoverNavLink}
          />
          <Navbar
            hoverNavLink={hoverNavLink}
            setHoverNavLink={setHoverNavLink}
          />
          <Hero />
          <About />
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

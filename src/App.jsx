import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis';
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
import { GlobalProvider } from '../context/GlobalContext';

const App = () => {
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
    <GlobalProvider>
      <main className="relative overflow-hidden">
        <div className="relative bg-[#121315]">
          <Cursor cursor={cursor} />
          <Navbar />
          <Hero />
          <div className="px-12 sm:px-3 about-div">
            <About />
          </div>
          <Works />
          <WhatIUse />
          <Contact />
        </div>
      </main>
    </GlobalProvider>
  );
};

export default App;
